// Costs ("fares"), currency conversion and attainment ("reach") helpers.
import { stats, fetched as statsFetched } from './data/stats.js';

// ---------- attainment ----------
// UIS cumulative attainment keys by ISCED level (population 25+, % with at least this level).
const LEVEL_KEY = { 1: 'primary', 2: 'lowerSecondary', 3: 'upperSecondary', 4: 'postSecondary', 5: 'shortTertiary', 6: 'bachelor', 7: 'master', 8: 'doctoral' };

export const LEVEL_LABEL = {
  0: 'No completed primary', 1: 'Primary', 2: 'Lower secondary', 3: 'Upper secondary', 4: 'Post-secondary non-tertiary',
  5: 'Short-cycle tertiary', 6: 'Bachelor’s', 7: 'Master’s', 8: 'Doctorate',
};

export const attainmentOf = (c) => stats[c.iso3]?.attainment || null;

/** % of adults (25+) who completed at least `isced`, or null. ISCED 0 → 100 (everyone passes it). */
export function reachPct(c, isced) {
  const a = attainmentOf(c);
  if (!a || !isced) return null;
  return a[LEVEL_KEY[isced]] ?? null;
}

/** Highest ISCED level completed by at least half of adults (the median adult's highest level). */
export function medianLevel(c) {
  const a = attainmentOf(c);
  if (!a) return null;
  let best = 0;
  for (let l = 1; l <= 8; l++) if (a[LEVEL_KEY[l]] != null && a[LEVEL_KEY[l]] >= 50) best = l;
  return best;
}

/** Non-cumulative distribution of highest level completed: [{level, pct}] summing to ~100. */
export function distribution(c) {
  const a = attainmentOf(c);
  if (!a) return null;
  const levels = [1, 2, 3, 4, 5, 6, 7, 8].filter((l) => a[LEVEL_KEY[l]] != null);
  const out = [];
  let prev = 100;
  let prevLevel = 0;
  for (const l of levels) {
    const v = a[LEVEL_KEY[l]];
    out.push({ level: prevLevel, pct: Math.max(0, prev - v) });
    prev = v;
    prevLevel = l;
  }
  out.push({ level: prevLevel, pct: prev });
  return out.filter((d) => d.pct > 0.05);
}

/**
 * Stations that mark where the median adult's education ends: on each line, the last
 * station at the highest ISCED level (≤ the median level) the country's map uses.
 */
export function medianStations(c, layout) {
  const m = medianLevel(c);
  if (m == null) return new Set();
  const levels = c.stations.map((s) => s.isced).filter((l) => l != null && l <= m);
  if (!levels.length) return new Set();
  const lm = Math.max(...levels);
  const ids = new Set();
  for (const sts of Object.values(layout.byLine)) {
    sts.forEach((s, i) => {
      const next = sts[i + 1];
      if (s.isced === lm && (!next || next.isced > lm)) ids.add(s.id);
    });
  }
  return ids;
}

// ---------- costs ----------
export const hasCost = (s) => s.cost && typeof s.cost.amount === 'number';

/** The station the journey comes from: previous station on the line, or the branch point. */
function predecessor(c, layout, s) {
  const seq = layout.byLine[s.line];
  const i = seq.indexOf(s);
  if (i > 0) return seq[i - 1];
  const line = layout.lines[s.line];
  return line.from ? layout.stations[line.from] : null;
}

/**
 * Cumulative tuition ("fare to here") from the start of compulsory schooling to the end of
 * station `s`, along the route that leads to it. Pre-school childcare that ends before
 * compulsory school starts is left out. Returns { amount, complete, estimate }.
 */
export function cumulativeCost(c, layout, s) {
  let amount = 0;
  let complete = true;
  let estimate = false;
  const from = c.compulsory?.from ?? 0;
  for (let cur = s, guard = 0; cur && guard < 60; cur = predecessor(c, layout, cur), guard++) {
    if (cur.isced === 0 && cur.ages[1] <= from) continue;
    if (!hasCost(cur)) {
      complete = false;
      continue;
    }
    if (cur.cost.estimate && cur.cost.amount > 0) estimate = true;
    amount += cur.cost.amount * (cur.ages[1] - cur.ages[0]);
  }
  return { amount, complete, estimate };
}

/** Cheapest cumulative fare to complete a given ISCED level (over all stations ending a stage at that level). */
export function cheapestTo(c, layout, isced) {
  let best = null;
  for (const s of c.stations) {
    if (s.isced !== isced) continue;
    const seq = layout.byLine[s.line];
    const next = seq[seq.indexOf(s) + 1];
    if (next && next.isced === isced) continue; // only count the end of a stage at this level
    const cc = cumulativeCost(c, layout, s);
    if (!cc.complete) continue;
    if (!best || cc.amount < best.amount) best = { ...cc, station: s };
  }
  return best;
}

// ---------- currencies ----------
const RATE_KEY = 'fx-usd-v1';
let live = null; // { rates: {CUR: perUSD}, date, source }

/** Fallback LCU-per-USD by currency from World Bank annual averages in stats.js. */
export function staticRates(countries) {
  const rates = { USD: 1 };
  for (const c of countries) {
    const r = stats[c.iso3]?.usdRate?.value;
    if (r && !rates[c.currency]) rates[c.currency] = r;
  }
  return rates;
}

export async function loadLiveRates() {
  try {
    const cached = JSON.parse(localStorage.getItem(RATE_KEY) || 'null');
    if (cached && Date.now() - cached.at < 12 * 3600 * 1000) {
      live = cached;
      return live;
    }
  } catch { /* storage unavailable */ }
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD');
    const j = await res.json();
    if (j.result !== 'success') throw new Error('bad response');
    live = { rates: j.rates, date: j.time_last_update_utc, at: Date.now(), source: 'ExchangeRate-API (open.er-api.com)' };
    try { localStorage.setItem(RATE_KEY, JSON.stringify(live)); } catch { /* ignore */ }
  } catch {
    live = null;
  }
  return live;
}

export function rateInfo(countries) {
  if (live) return { text: `Live exchange rates from ${live.source}, updated ${new Date(live.date).toLocaleDateString('en-GB')}`, live: true };
  const years = [...new Set(countries.map((c) => stats[c.iso3]?.usdRate?.year).filter(Boolean))].sort();
  return { text: `Live rates unavailable; using World Bank average exchange rates (${years.join(', ')})`, live: false };
}

function usdRate(cur, countries) {
  if (live?.rates?.[cur]) return live.rates[cur];
  return staticRates(countries)[cur];
}

/**
 * Convert a local-currency amount for country `c` into the display unit.
 * unit: 'local' | ISO currency | 'PPP' (international $) | 'GDP' (% of GDP per capita)
 * Returns { value, unit, currency } or null when it cannot be converted.
 */
export function convert(amount, c, unit, countries) {
  if (amount == null) return null;
  if (unit === 'local') return { value: amount, currency: c.currency };
  if (unit === 'PPP') {
    const f = stats[c.iso3]?.ppp?.value;
    return f ? { value: amount / f, currency: 'PPP' } : null;
  }
  if (unit === 'GDP') {
    const g = stats[c.iso3]?.gdpPerCapita?.value;
    return g ? { value: (amount / g) * 100, currency: '%' } : null;
  }
  const from = usdRate(c.currency, countries);
  const to = usdRate(unit, countries);
  if (!from || !to) return null;
  return { value: (amount / from) * to, currency: unit };
}

export function formatMoney(v, { compact = true } = {}) {
  if (!v) return '—';
  if (v.currency === '%') {
    if (v.value === 0) return '0%';
    return `${v.value < 1 ? v.value.toFixed(1) : v.value < 10 ? v.value.toFixed(1) : Math.round(v.value)}%`;
  }
  if (v.value === 0) return 'free';
  if (v.currency === 'PPP') {
    return `Int$${new Intl.NumberFormat('en', compact ? { notation: 'compact', maximumSignificantDigits: 2 } : { maximumFractionDigits: 0 }).format(v.value)}`;
  }
  try {
    return new Intl.NumberFormat('en', {
      style: 'currency', currency: v.currency, currencyDisplay: 'narrowSymbol',
      notation: compact ? 'compact' : 'standard', maximumSignificantDigits: compact ? 2 : undefined,
      maximumFractionDigits: compact ? undefined : 0,
    }).format(v.value);
  } catch {
    return `${v.currency} ${Math.round(v.value)}`;
  }
}

export const unitLabel = (unit) =>
  unit === 'local' ? 'Local currency' : unit === 'PPP' ? 'PPP (international $)' : unit === 'GDP' ? '% of GDP per capita' : unit;

export { statsFetched, stats };
