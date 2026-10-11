import { countries, byId, ISCED } from './data/index.js';
import { renderMap, layout, maxAgeOf, isActiveAt, ageRange, x as ageX, PX } from './map.js';
import {
  attainmentOf, reachPct, medianLevel, medianStations, distribution, LEVEL_LABEL,
  hasCost, cumulativeCost, cheapestTo, convert, formatMoney, unitLabel, loadLiveRates, rateInfo,
} from './metrics.js';

const MAX_COMPARE = 3;
const REGIONS = ['Europe', 'Americas', 'Asia', 'Middle East', 'Africa', 'Oceania'];
const MODES = [
  { id: 'age', label: 'Ages', hint: 'Typical age at each stage' },
  { id: 'fare', label: 'Fare / year', hint: 'Typical annual fees at a public provider' },
  { id: 'total', label: 'Fare to here', hint: 'Total fees from the start of compulsory school to the end of this stage, along the route' },
  { id: 'reach', label: '% reaching', hint: 'Share of adults (25+) who completed at least this level' },
];
const main = document.getElementById('main');
const panel = document.getElementById('panel');

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
};

const state = {
  view: 'country', // 'country' | 'compare'
  id: 'nl',
  ids: ['nl', 'en'],
  age: 12,
  selected: null, // { c: countryId, s: stationId }
  focus: null, // { c, line }
  mode: MODES.some((m) => m.id === store.get('mode')) ? store.get('mode') : 'age',
  unit: store.get('unit') || 'local',
};

const layouts = new Map();
const layoutOf = (c) => {
  if (!layouts.has(c.id)) layouts.set(c.id, layout(c));
  return layouts.get(c.id);
};

// In the compare view, local currencies are not comparable, so fall back to US$.
const unit = () => (state.view === 'compare' && state.unit === 'local' ? 'USD' : state.unit);
const money = (amount, c, opts) => formatMoney(convert(amount, c, unit(), countries), opts);

// ---------- theme ----------
const themeBtn = document.getElementById('themeBtn');
function applyTheme(t) {
  if (t) document.documentElement.dataset.theme = t;
  else delete document.documentElement.dataset.theme;
}
applyTheme(store.get('theme'));
themeBtn.addEventListener('click', () => {
  const dark =
    document.documentElement.dataset.theme === 'dark' ||
    (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
  const next = dark ? 'light' : 'dark';
  applyTheme(next);
  store.set('theme', next);
});

// ---------- routing ----------
function parseHash() {
  const h = location.hash.replace(/^#\/?/, '');
  const [a, b] = h.split('/');
  if (a === 'compare') {
    const ids = (b || '').split(',').filter((id) => byId[id]).slice(0, MAX_COMPARE);
    state.view = 'compare';
    state.ids = ids.length ? ids : ['nl', 'en'];
  } else {
    state.view = 'country';
    state.id = byId[a] ? a : 'nl';
    state.selected = b && byId[state.id].stations.some((s) => s.id === b) ? { c: state.id, s: b } : state.selected?.c === state.id ? state.selected : null;
  }
}

function setHash(h) {
  if (location.hash !== h) history.replaceState(null, '', h);
}

window.addEventListener('hashchange', () => {
  parseHash();
  render();
});

// ---------- per-station values ----------
function stationValue(c, s, mode = state.mode) {
  if (mode === 'age') return ageRange(s);
  if (mode === 'fare') {
    if (!hasCost(s)) return '?';
    const v = `${s.cost.estimate && s.cost.amount > 0 ? '~' : ''}${money(s.cost.amount, c)}`;
    return s.cost.amount > 0 ? `${v}/yr` : v;
  }
  if (mode === 'total') {
    const cc = cumulativeCost(c, layoutOf(c), s);
    if (!cc.complete && cc.amount === 0) return '?';
    return `${cc.complete ? '' : '≥'}${cc.estimate ? '~' : ''}${money(cc.amount, c)}`;
  }
  if (mode === 'reach') {
    if (s.share) return `${Math.round(s.share.pct)}%*`;
    const r = reachPct(c, s.isced);
    return r == null ? '—' : `${Math.round(r)}%`;
  }
  return '';
}

function mapOptions(c, maxAge) {
  const L = layoutOf(c);
  return {
    maxAge,
    cursorAge: state.age,
    selected: state.selected?.c === c.id ? state.selected.s : null,
    focusLine: state.focus?.c === c.id ? state.focus.line : null,
    labelFor: state.mode === 'age' ? null : (s) => stationValue(c, s),
    medianIds: medianStations(c, L),
  };
}

// ---------- helpers ----------
function compulsoryStatus(c, age) {
  const cp = c.compulsory;
  const a = age + 0.5;
  if (!cp) return { cls: '', text: '' };
  if (a >= cp.from && a < cp.to) return { cls: 'req', text: 'Compulsory education' };
  if (cp.extendedTo && a >= cp.to && a < cp.extendedTo) return { cls: 'ext', text: cp.extendedLabel };
  return { cls: 'opt', text: 'Not compulsory' };
}

function activeStations(c, age) {
  const lines = Object.fromEntries(c.lines.map((l) => [l.id, l]));
  return c.stations
    .filter((s) => isActiveAt(s, age))
    .map((s) => ({ s, l: lines[s.line] }))
    .sort((p, q) => p.l.lane - q.l.lane);
}

function countryPicker(mode) {
  const groups = REGIONS.map((r) => [r, countries.filter((c) => c.region === r).sort((a, b) => a.name.localeCompare(b.name))]).filter(([, cs]) => cs.length);
  return `<div class="picker" role="group" aria-label="${mode === 'compare' ? `Countries to compare (up to ${MAX_COMPARE})` : 'Country'}">${groups
    .map(
      ([r, cs]) =>
        `<div class="region"><span class="region-name">${esc(r)}</span><div class="region-list">${cs
          .map((c) => {
            const on = mode === 'compare' ? state.ids.includes(c.id) : state.id === c.id;
            return `<button type="button" class="pick" data-pick="${c.id}" aria-pressed="${on}"><span class="flag" aria-hidden="true">${c.flag}</span>${esc(c.name)}</button>`;
          })
          .join('')}</div></div>`,
    )
    .join('')}</div>`;
}

function ageControl(maxAge) {
  return `<div class="agectl">
    <label for="age">Age</label>
    <button type="button" class="step" data-step="-1" aria-label="Younger">−</button>
    <input id="age" type="range" min="0" max="${maxAge - 1}" step="1" value="${state.age}">
    <button type="button" class="step" data-step="1" aria-label="Older">+</button>
    <output id="ageOut" for="age">${state.age} years</output>
  </div>`;
}

function unitOptions() {
  const curs = [...new Set(countries.map((c) => c.currency))].sort();
  const common = ['USD', 'EUR', 'GBP'];
  const rest = curs.filter((c) => !common.includes(c));
  const opt = (v, label) => `<option value="${v}"${unit() === v ? ' selected' : ''}>${esc(label)}</option>`;
  return [
    state.view === 'country' ? opt('local', `Local (${byId[state.id].currency})`) : '',
    `<optgroup label="Fair comparison">${opt('PPP', 'PPP international $')}${opt('GDP', '% of GDP per capita')}</optgroup>`,
    `<optgroup label="Exchange rate">${common.map((c) => opt(c, c)).join('')}${rest.map((c) => opt(c, c)).join('')}</optgroup>`,
  ].join('');
}

function modeControl(cs) {
  const showUnit = state.mode === 'fare' || state.mode === 'total';
  const info = rateInfo(cs);
  return `<div class="modectl">
    <div class="seg" role="group" aria-label="Show on stations">${MODES.map(
      (m) => `<button type="button" data-mode="${m.id}" aria-pressed="${state.mode === m.id}" title="${esc(m.hint)}">${esc(m.label)}</button>`,
    ).join('')}</div>
    ${showUnit ? `<label class="unit">Currency <select id="unit">${unitOptions()}</select></label>` : ''}
  </div>
  <p class="modehint">${esc(MODES.find((m) => m.id === state.mode).hint)}.
    ${state.mode === 'total' ? 'Early childcare before compulsory school is left out. “≥” means some stages have no cost data. ' : ''}
    ${showUnit ? '“~” marks unverified estimates. ' : ''}
    ${showUnit && !['local', 'PPP', 'GDP'].includes(unit()) ? `${esc(info.text)}.` : ''}
    ${showUnit && unit() === 'PPP' ? 'PPP adjusts for price levels, so amounts reflect what the money buys locally (World Bank ICP conversion factors). ' : ''}
    ${showUnit && unit() === 'GDP' ? 'Each amount as a share of the country’s GDP per head, a rough measure of affordability. ' : ''}
    ${state.mode === 'reach' ? 'Source: UNESCO-UIS via the World Bank. Figures marked * are the share of the cohort at that stop, from the country’s own statistics. The red dot marks where the median adult’s education ends.' : ''}
  </p>`;
}

const keysHtml = `<div class="keys" aria-label="Map key">
  <span><svg width="22" height="16" aria-hidden="true"><line x1="0" y1="11" x2="22" y2="11" stroke="var(--muted)" stroke-width="6" stroke-linecap="round"/><rect x="9" y="1" width="4" height="10" fill="var(--muted)"/></svg>Stage</span>
  <span><svg width="22" height="16" aria-hidden="true"><line x1="0" y1="8" x2="22" y2="8" stroke="var(--muted)" stroke-width="6" stroke-linecap="round"/><circle cx="11" cy="8" r="6" fill="var(--paper)" stroke="var(--ink)" stroke-width="3"/></svg>Interchange</span>
  <span><svg width="26" height="16" aria-hidden="true"><path d="M2 14 C2 4 24 12 24 2" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-dasharray="1 6" stroke-linecap="round"/></svg>Transfer</span>
  <span><svg width="16" height="16" aria-hidden="true"><rect x="4" y="4" width="8" height="8" transform="rotate(45 8 8)" fill="var(--ink)"/></svg>Exam / diploma</span>
  <span><svg width="22" height="16" aria-hidden="true"><line x1="0" y1="8" x2="22" y2="8" stroke="var(--muted)" stroke-width="6" stroke-linecap="round"/><circle cx="11" cy="8" r="5.5" class="median"/></svg>Median adult stops here</span>
  <span><svg width="22" height="16" aria-hidden="true"><rect width="22" height="16" rx="3" fill="var(--band)"/></svg>Compulsory</span>
  <span><svg width="22" height="16" aria-hidden="true"><rect width="22" height="16" rx="3" class="key-hatch"/></svg>Must study/train</span>
</div>`;

// ---------- attainment ("how far people get") ----------
function attainmentBlock(c, { title = true } = {}) {
  const a = attainmentOf(c);
  const dist = distribution(c);
  if (!a || !dist) return `<p class="muted small">No comparable attainment data.</p>`;
  const m = medianLevel(c);
  return `<div class="att">
    ${title ? `<div class="att-title"><b>How far adults get</b><span class="muted">Highest level completed, population 25+, ${a.year}</span></div>` : ''}
    <div class="att-bar" role="img" aria-label="${esc(dist.map((d) => `${LEVEL_LABEL[d.level]} ${Math.round(d.pct)}%`).join(', '))}">${dist
      .map(
        (d) => `<span class="lv lv${d.level}${d.level === m ? ' med' : ''}" style="flex-basis:${d.pct}%" title="${esc(LEVEL_LABEL[d.level])}: ${d.pct.toFixed(1)}%">${d.pct >= 7 ? `${Math.round(d.pct)}%` : ''}</span>`,
      )
      .join('')}</div>
    <p class="att-med">The median adult's highest level is <b>${esc(m === 0 ? 'less than completed primary' : LEVEL_LABEL[m])}</b>${m != null ? ` (ISCED ${m})` : ''}.
      ${a.bachelor != null ? `${Math.round(a.bachelor)}% hold at least a bachelor’s.` : ''}</p>
  </div>`;
}

const attLegend = `<div class="att-legend">${[0, 1, 2, 3, 4, 5, 6, 7, 8]
  .map((l) => `<span><i class="lv lv${l}"></i>${esc(LEVEL_LABEL[l])}</span>`)
  .join('')}</div>`;

// ---------- fares summary ----------
const FARE_LEVELS = [
  { isced: 3, label: 'Finish upper secondary' },
  { isced: 6, label: 'Bachelor’s degree' },
  { isced: 7, label: 'Master’s degree' },
];

function fareCell(c, isced) {
  const best = cheapestTo(c, layoutOf(c), isced);
  if (!best) return `<span class="muted">—</span>`;
  return `<button type="button" class="link" data-c="${c.id}" data-goto="${best.station.id}">${esc(money(best.amount, c, { compact: false }))}</button><small>via ${esc(best.station.name)}, age ${best.station.ages[1]}</small>`;
}

function faresTable(cs) {
  return `<div class="tablewrap"><table class="fares">
    <thead><tr><th scope="col">Cheapest public fare to…</th>${cs.map((c) => `<th scope="col"><span class="flag" aria-hidden="true">${c.flag}</span> ${esc(c.name)}</th>`).join('')}</tr></thead>
    <tbody>${FARE_LEVELS.map((f) => `<tr><th scope="row">${esc(f.label)}</th>${cs.map((c) => `<td>${fareCell(c, f.isced)}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>
  <p class="muted small">Total tuition and compulsory fees at public providers, from the start of compulsory school. Living costs are not included. Shown in ${esc(unitLabel(unit()))}.</p>`;
}

// ---------- country view ----------
function renderCountry() {
  const c = byId[state.id];
  const maxAge = maxAgeOf([c]);
  state.age = Math.min(state.age, maxAge - 1);
  const cp = c.compulsory;
  const focusLine = state.focus?.c === c.id ? state.focus.line : null;

  main.innerHTML = `
    ${countryPicker('country')}
    <section class="intro">
      <h2><span class="flag" aria-hidden="true">${c.flag}</span> ${esc(c.name)} ${c.localName && c.localName !== c.name ? `<span class="local">${esc(c.localName)}</span>` : ''}</h2>
      <p>${esc(c.summary)}</p>
      <div class="facts">
        <div class="fact"><b>Compulsory schooling</b><span>${esc(cp.note)}</span></div>
        ${cp.extendedNote ? `<div class="fact"><b>${esc(cp.extendedLabel)}</b><span>${esc(cp.extendedNote)}</span></div>` : ''}
        <div class="fact"><b>About the ages</b><span>${esc(c.ageNote)}</span></div>
        ${c.costNote ? `<div class="fact"><b>About the costs</b><span>${esc(c.costNote)}</span></div>` : ''}
      </div>
      ${attainmentBlock(c)}
    </section>
    <div class="legend" role="group" aria-label="Lines: click to highlight">
      <span class="lbl">Lines</span>
      ${c.lines
        .map(
          (l) =>
            `<button type="button" class="chip" data-line="${l.id}" aria-pressed="${focusLine === l.id}" style="--c:${l.color}" title="${esc(l.desc)}"><i></i>${esc(l.name)}</button>`,
        )
        .join('')}
      ${focusLine ? `<button type="button" class="chip reset" data-line="">Show all</button>` : ''}
    </div>
    ${keysHtml}
    ${modeControl([c])}
    ${ageControl(maxAge)}
    <div class="mapbox" id="mapbox" data-country="${c.id}">${renderMap(c, mapOptions(c, maxAge))}</div>
    <p class="hint">Scroll or drag sideways to follow the lines to the end. Click a station for details, or the age ruler to move the cursor.</p>
    <section class="readout" id="readout">${readoutHtml([c])}</section>
    <section><h3>Fares</h3><div id="fares">${faresTable([c])}</div></section>
    <section class="cols">
      <div>
        <h3>The lines</h3>
        <ul class="linelist">${c.lines
          .map((l) => `<li><span class="sw" style="--c:${l.color}"></span><div><b>${esc(l.name)}</b><p>${esc(l.desc)}</p></div></li>`)
          .join('')}</ul>
      </div>
      <div>
        <h3>Transfers between lines</h3>
        <ul class="xferlist">${(c.transfers || [])
          .map((t) => `<li><button type="button" class="link" data-goto="${t.from}">${esc(t.label)}</button><p>${esc(t.desc)}</p></li>`)
          .join('')}</ul>
        <h3>Sources</h3>
        <ol class="sources">${c.sources.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a></li>`).join('')}
          <li><a href="https://data.worldbank.org/indicator/SE.TER.CUAT.BA.ZS" target="_blank" rel="noopener">UNESCO-UIS via World Bank — educational attainment (25+); World Bank ICP — PPP and GDP per capita</a></li></ol>
      </div>
    </section>`;
  setHash(`#/${c.id}${state.selected?.c === c.id ? '/' + state.selected.s : ''}`);
  scrollToAge(false);
}

function readoutHtml(cs) {
  return `<h3>At age ${state.age}</h3><div class="ro-grid" style="--n:${cs.length}">${cs
    .map((c) => {
      const st = compulsoryStatus(c, state.age);
      const act = activeStations(c, state.age);
      return `<div class="ro-col">
        <div class="ro-head"><span class="flag" aria-hidden="true">${c.flag}</span><b>${esc(c.name)}</b><span class="status ${st.cls}">${esc(st.text)}</span></div>
        ${
          act.length
            ? `<ul>${act
                .map(
                  ({ s, l }) =>
                    `<li><button type="button" class="ro-item" data-c="${c.id}" data-goto="${s.id}" style="--c:${l.color}"><i></i><span><b>${esc(s.name)}</b> <em>${esc(l.name)}</em><small>${ageRange(s)}${s.isced != null ? ` · ISCED ${s.isced}` : ''}${state.mode !== 'age' ? ` · ${esc(stationValue(c, s))}` : ''}</small></span></button></li>`,
                )
                .join('')}</ul>`
            : `<p class="muted">No stage on the map at this age.</p>`
        }
      </div>`;
    })
    .join('')}</div>`;
}

// ---------- compare view ----------
function renderCompare() {
  const cs = state.ids.map((id) => byId[id]);
  const maxAge = maxAgeOf(cs);
  state.age = Math.min(state.age, maxAge - 1);
  main.innerHTML = `
    <p class="compare-intro">Choose up to ${MAX_COMPARE} countries. The maps share one age axis, so a
      vertical slice shows what a child of that age is doing in each country. Drag the age slider
      or click the ruler.</p>
    ${countryPicker('compare')}
    ${keysHtml}
    ${modeControl(cs)}
    ${ageControl(maxAge)}
    <div class="mapbox stack" id="mapbox">${stackHtml(cs, maxAge)}</div>
    <p class="hint">Scroll or drag sideways; country names stay pinned on the left.</p>
    <section class="readout" id="readout">${readoutHtml(cs)}</section>
    <section>
      <h3>How far adults get</h3>
      <div class="att-compare">${cs.map((c) => `<div class="att-row"><div class="att-name"><span class="flag" aria-hidden="true">${c.flag}</span> ${esc(c.name)}<small>${attainmentOf(c)?.year ?? ''}</small></div>${attainmentBlock(c, { title: false })}</div>`).join('')}</div>
      ${attLegend}
      <p class="muted small">Highest level of education completed by the population aged 25 and over (UNESCO-UIS via the World Bank). Survey years differ between countries.</p>
    </section>
    <section><h3>Fares</h3><div id="fares">${faresTable(cs)}</div></section>
    <section>
      <h3>Year by year</h3>
      <div class="tablewrap"><table class="ybt" id="ybt">
        <thead><tr><th scope="col">Age</th>${cs.map((c) => `<th scope="col"><span class="flag" aria-hidden="true">${c.flag}</span> ${esc(c.name)}</th>`).join('')}</tr></thead>
        <tbody>${Array.from({ length: maxAge }, (_, age) => yearRow(cs, age)).join('')}</tbody>
      </table></div>
    </section>
    <section class="cols">
      ${cs
        .map(
          (c) => `<div><h3><span class="flag" aria-hidden="true">${c.flag}</span> ${esc(c.name)}</h3><p>${esc(c.summary)}</p>
            <p class="muted small"><b>Ages:</b> ${esc(c.ageNote)}</p>
            ${c.costNote ? `<p class="muted small"><b>Costs:</b> ${esc(c.costNote)}</p>` : ''}
            <p><a href="#/${c.id}">Open the full ${esc(c.name)} map →</a></p></div>`,
        )
        .join('')}
    </section>`;
  setHash(`#/compare/${state.ids.join(',')}`);
  scrollToAge(false);
}

function stackHtml(cs, maxAge) {
  return cs
    .map(
      (c) => `<div class="stack-row" data-country="${c.id}">
        <div class="stack-label"><span class="flag" aria-hidden="true">${c.flag}</span>${esc(c.name)}</div>
        ${renderMap(c, mapOptions(c, maxAge))}
      </div>`,
    )
    .join('');
}

function yearRow(cs, age) {
  return `<tr data-age="${age}" class="${age === state.age ? 'cur' : ''}"><th scope="row"><button type="button" class="link" data-age="${age}">${age}</button></th>${cs
    .map((c) => {
      const st = compulsoryStatus(c, age);
      const act = activeStations(c, age);
      return `<td class="${st.cls}">${act
        .map(
          ({ s, l }) =>
            `<button type="button" class="tag" data-c="${c.id}" data-goto="${s.id}" style="--c:${l.color}" title="${esc(l.name)}">${esc(s.name)}${state.mode !== 'age' ? ` <span class="tagv">${esc(stationValue(c, s))}</span>` : ''}</button>`,
        )
        .join('')}</td>`;
    })
    .join('')}</tr>`;
}

// ---------- partial updates ----------
function refreshMaps() {
  const box = document.getElementById('mapbox');
  if (!box) return;
  if (state.view === 'country') {
    const c = byId[state.id];
    box.innerHTML = renderMap(c, mapOptions(c, maxAgeOf([c])));
  } else {
    const cs = state.ids.map((id) => byId[id]);
    box.innerHTML = stackHtml(cs, maxAgeOf(cs));
  }
}

function refreshAge() {
  const cs = state.view === 'country' ? [byId[state.id]] : state.ids.map((id) => byId[id]);
  refreshMaps();
  const ro = document.getElementById('readout');
  if (ro) ro.innerHTML = readoutHtml(cs);
  const input = document.getElementById('age');
  if (input) input.value = state.age;
  const out = document.getElementById('ageOut');
  if (out) out.textContent = `${state.age} years`;
  document.querySelectorAll('#ybt tr[data-age]').forEach((tr) => tr.classList.toggle('cur', +tr.dataset.age === state.age));
  scrollToAge(true);
}

/** Re-render everything but keep the map's horizontal scroll position. */
function rerenderKeepScroll() {
  const left = document.getElementById('mapbox')?.scrollLeft;
  const y = window.scrollY;
  if (state.view === 'country') renderCountry();
  else renderCompare();
  const box = document.getElementById('mapbox');
  if (box && left != null) box.scrollLeft = left;
  window.scrollTo(0, y);
  if (state.selected && !panel.hidden) openPanel(state.selected.c, state.selected.s);
}

function scrollToAge(smooth) {
  const box = document.getElementById('mapbox');
  if (!box) return;
  const labelW = state.view === 'compare' ? box.querySelector('.stack-label')?.offsetWidth || 0 : 0;
  const cx = ageX(state.age) + PX / 2;
  const left = box.scrollLeft;
  const visible = box.clientWidth - labelW;
  if (!smooth || cx < left + 60 || cx > left + visible - 60) {
    box.scrollTo({ left: Math.max(0, cx - visible / 2), behavior: smooth ? 'smooth' : 'auto' });
  }
}

function setAge(a) {
  const max = +(document.getElementById('age')?.max ?? 30);
  state.age = Math.max(0, Math.min(max, a));
  refreshAge();
}

// ---------- detail panel ----------
function openPanel(cid, sid, { scroll = false } = {}) {
  const c = byId[cid];
  const L = layoutOf(c);
  const s = L.stations[sid];
  if (!s) return;
  state.selected = { c: cid, s: sid };
  const l = L.lines[s.line];
  const seq = L.byLine[s.line];
  const idx = seq.indexOf(s);

  const next = [];
  const prev = [];
  if (idx < seq.length - 1) next.push({ id: seq[idx + 1].id, how: `Next on ${l.name}` });
  for (const ol of c.lines) if (ol.from === s.id && L.byLine[ol.id]) next.push({ id: L.byLine[ol.id][0].id, how: `Branch to ${ol.name}` });
  for (const t of c.transfers || []) if (t.from === s.id) next.push({ id: t.to, how: `Transfer: ${t.label}`, desc: t.desc });
  if (idx > 0) prev.push({ id: seq[idx - 1].id, how: `Previous on ${l.name}` });
  else if (l.from) prev.push({ id: l.from, how: 'Line branches from here' });
  for (const t of c.transfers || []) if (t.to === s.id) prev.push({ id: t.from, how: `Transfer: ${t.label}`, desc: t.desc });

  const stop = (r) => {
    const st = L.stations[r.id];
    const ln = L.lines[st.line];
    return `<li><button type="button" class="stop" data-c="${cid}" data-goto="${r.id}" style="--c:${ln.color}"><i></i><span><b>${esc(st.name)}</b><small>${esc(r.how)} · age ${ageRange(st)}</small>${r.desc ? `<small class="d">${esc(r.desc)}</small>` : ''}</span></button></li>`;
  };
  const srcLink = (i) => (c.sources[i] ? ` <a class="src" href="${esc(c.sources[i].url)}" target="_blank" rel="noopener">source</a>` : '');

  // Fare section
  let fare = '';
  if (hasCost(s)) {
    const local = formatMoney({ value: s.cost.amount, currency: c.currency }, { compact: false });
    const conv = ['local'].includes(unit()) ? '' : ` <span class="muted">(${esc(money(s.cost.amount, c, { compact: false }))}${unit() === 'GDP' ? ' of GDP per head' : ''})</span>`;
    const cc = cumulativeCost(c, L, s);
    fare = `<h3>Fare</h3>
      <p class="fare"><b>${esc(local)}</b>${s.cost.amount > 0 ? ' per year' : ''}${conv}${s.cost.src != null ? srcLink(s.cost.src) : ''}</p>
      ${s.cost.estimate ? `<p class="small est">Unverified estimate: not confirmed against an official source.</p>` : ''}
      ${s.cost.note ? `<p class="small">${esc(s.cost.note)}</p>` : ''}
      ${s.cost.private != null ? `<p class="small">Private providers: about <b>${esc(formatMoney({ value: s.cost.private, currency: c.currency }, { compact: false }))}</b> per year${unit() !== 'local' ? ` (${esc(money(s.cost.private, c, { compact: false }))})` : ''}.</p>` : ''}
      <p class="small">Fare to here: <b>${cc.complete ? '' : 'at least '}${esc(money(cc.amount, c, { compact: false }))}</b> from the start of compulsory school.</p>`;
  } else fare = `<h3>Fare</h3><p class="muted small">No cost data yet.</p>`;

  // Reach section
  const r = reachPct(c, s.isced);
  const att = attainmentOf(c);
  const isMedian = medianStations(c, L).has(s.id);
  const reach = `<h3>Reach</h3>
    ${s.share ? `<p><b>${s.share.pct}%</b> ${esc(s.share.of)}${srcLink(s.share.src)}</p>` : ''}
    ${r != null ? `<p class="small"><b>${Math.round(r)}%</b> of adults (25+) completed at least ${esc(ISCED[s.isced].toLowerCase())} (ISCED ${s.isced}), UNESCO-UIS ${att.year}.</p>` : ''}
    ${isMedian ? `<p class="small median-note"><span class="dot"></span>The median adult’s education ends at this level.</p>` : ''}
    ${!s.share && r == null && !isMedian ? '<p class="muted small">No comparable figure for this level.</p>' : ''}`;

  panel.innerHTML = `
    <div class="panel-bar" style="--c:${l.color}"></div>
    <button type="button" class="close" data-close aria-label="Close details">×</button>
    <p class="crumb"><span class="flag" aria-hidden="true">${c.flag}</span> ${esc(c.name)} · <span class="ln-name" style="--c:${l.color}">${esc(l.name)}</span></p>
    <h2>${esc(s.name)}</h2>
    ${s.local ? `<p class="local">${esc(s.local)}</p>` : ''}
    <dl class="meta">
      <div><dt>Typical age</dt><dd>${ageRange(s)}</dd></div>
      <div><dt>Duration</dt><dd>${+(s.ages[1] - s.ages[0]).toFixed(1)} yr${s.ages[1] - s.ages[0] === 1 ? '' : 's'}</dd></div>
      ${s.isced != null ? `<div><dt>ISCED level</dt><dd>${s.isced} · ${esc(ISCED[s.isced])}</dd></div>` : ''}
    </dl>
    <p>${esc(s.desc)}</p>
    ${s.exam ? `<p class="exam-line"><span class="dia" aria-hidden="true"></span><b>Exam / diploma:</b> ${esc(s.exam)}</p>` : ''}
    ${s.events?.length ? `<h3>Key moments</h3><ul class="events">${s.events.map((e) => `<li>${esc(e)}</li>`).join('')}</ul>` : ''}
    ${fare}
    ${reach}
    ${next.length ? `<h3>Where to next</h3><ul class="stops">${next.map(stop).join('')}</ul>` : `<p class="muted">End of the line.</p>`}
    ${prev.length ? `<h3>Arriving from</h3><ul class="stops">${prev.map(stop).join('')}</ul>` : ''}
    <p class="muted small">About the line: ${esc(l.desc)}</p>`;
  panel.hidden = false;
  document.body.classList.add('panel-open');
  refreshMaps();
  if (state.view === 'country') setHash(`#/${cid}/${sid}`);
  if (scroll) scrollToStation(cid, sid);
  panel.scrollTop = 0;
}

function closePanel() {
  panel.hidden = true;
  document.body.classList.remove('panel-open');
  const had = state.selected;
  state.selected = null;
  refreshMaps();
  if (state.view === 'country') setHash(`#/${state.id}`);
  if (had) document.querySelector(`.st[data-id="${had.s}"]`)?.focus({ preventScroll: true });
}

function scrollToStation(cid, sid, smooth = true) {
  const box = document.getElementById('mapbox');
  const sx = layoutOf(byId[cid]).sx[sid];
  if (!box || sx == null) return;
  const behavior = smooth ? 'smooth' : 'auto';
  box.scrollTo({ left: Math.max(0, sx - 80), behavior });
  if (state.view === 'compare') box.querySelector(`.stack-row[data-country="${cid}"]`)?.scrollIntoView({ block: 'nearest', behavior });
}

// ---------- events ----------
main.addEventListener('click', (e) => {
  const t = e.target;
  const pick = t.closest('[data-pick]');
  if (pick) {
    const id = pick.dataset.pick;
    if (state.view === 'country') {
      location.hash = `#/${id}`;
    } else {
      let ids = state.ids.includes(id) ? state.ids.filter((i) => i !== id) : [...state.ids, id];
      if (!ids.length) return;
      if (ids.length > MAX_COMPARE) ids = ids.slice(-MAX_COMPARE);
      location.hash = `#/compare/${ids.join(',')}`;
    }
    return;
  }
  const modeBtn = t.closest('[data-mode]');
  if (modeBtn) {
    state.mode = modeBtn.dataset.mode;
    store.set('mode', state.mode);
    return rerenderKeepScroll();
  }
  const chip = t.closest('.chip[data-line]');
  if (chip) {
    const line = chip.dataset.line;
    state.focus = line && !(state.focus?.line === line && state.focus.c === state.id) ? { c: state.id, line } : null;
    return rerenderKeepScroll();
  }
  const step = t.closest('[data-step]');
  if (step) return setAge(state.age + +step.dataset.step);
  const go = t.closest('[data-goto]');
  if (go) {
    const cid = go.dataset.c || state.id;
    return openPanel(cid, go.dataset.goto, { scroll: true });
  }
  const ageBtn = t.closest('[data-age]');
  if (ageBtn && !t.closest('.st')) return setAge(+ageBtn.dataset.age);
  const st = t.closest('.st');
  if (st) {
    const cid = st.closest('[data-country]')?.dataset.country || state.id;
    return openPanel(cid, st.dataset.id);
  }
  const xg = t.closest('.xfer-g');
  if (xg) {
    const cid = xg.closest('[data-country]')?.dataset.country || state.id;
    return openPanel(cid, xg.dataset.from);
  }
});

main.addEventListener('change', (e) => {
  if (e.target.id === 'unit') {
    state.unit = e.target.value;
    store.set('unit', state.unit);
    rerenderKeepScroll();
  }
});

main.addEventListener('keydown', (e) => {
  const st = e.target.closest?.('.st');
  if (st && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    const cid = st.closest('[data-country]')?.dataset.country || state.id;
    openPanel(cid, st.dataset.id);
  }
});

main.addEventListener('input', (e) => {
  if (e.target.id === 'age') {
    state.age = +e.target.value;
    refreshAge();
  }
});

panel.addEventListener('click', (e) => {
  if (e.target.closest('[data-close]')) return closePanel();
  const go = e.target.closest('[data-goto]');
  if (go) openPanel(go.dataset.c, go.dataset.goto, { scroll: true });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !panel.hidden) closePanel();
});

// Drag-to-scroll for the map with a mouse (touch scrolls natively).
let drag = null;
main.addEventListener('pointerdown', (e) => {
  const box = e.target.closest('#mapbox');
  if (!box || e.pointerType !== 'mouse' || e.button !== 0) return;
  drag = { box, x: e.clientX, left: box.scrollLeft, moved: false };
});
window.addEventListener('pointermove', (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x;
  if (Math.abs(dx) > 4) {
    drag.moved = true;
    drag.box.classList.add('dragging');
  }
  if (drag.moved) drag.box.scrollLeft = drag.left - dx;
});
window.addEventListener('pointerup', () => {
  if (!drag) return;
  const moved = drag.moved;
  drag.box.classList.remove('dragging');
  drag = null;
  if (moved) {
    // Swallow the click that follows a drag.
    window.addEventListener('click', (ev) => ev.stopPropagation(), { capture: true, once: true });
  }
});

// ---------- render ----------
function render() {
  document.getElementById('tab-explore').setAttribute('aria-selected', state.view === 'country');
  document.getElementById('tab-compare').setAttribute('aria-selected', state.view === 'compare');
  document.getElementById('tab-explore').href = `#/${state.id}`;
  document.getElementById('tab-compare').href = `#/compare/${state.ids.join(',')}`;
  if (state.view === 'country') renderCountry();
  else renderCompare();
  if (state.selected && (state.view === 'compare' ? state.ids.includes(state.selected.c) : state.selected.c === state.id)) {
    openPanel(state.selected.c, state.selected.s);
    scrollToStation(state.selected.c, state.selected.s, false);
  } else if (!panel.hidden) {
    panel.hidden = true;
    document.body.classList.remove('panel-open');
    state.selected = null;
  }
}

parseHash();
render();
// Fetch live exchange rates; re-render if they change what is on screen.
loadLiveRates().then((live) => {
  if (live && (state.mode === 'fare' || state.mode === 'total' || document.getElementById('fares')) && !['local', 'PPP', 'GDP'].includes(unit())) rerenderKeepScroll();
});
