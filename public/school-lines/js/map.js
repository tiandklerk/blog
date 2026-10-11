// Renders a country's education system as a metro-style SVG map.
// The x-axis is age (shared between countries so maps line up when compared),
// each line runs along a horizontal lane, and branches leave their parent
// station through rounded vertical "trunks" like a schematic tube map.

export const PX = 84; // pixels per year of age
export const LANE = 96; // vertical distance between lanes
const LEFT = 28;
const RIGHT_PAD = 40;
const RULER = 34; // height of the age ruler
const HEAD = 76; // space above the top lane for station labels
const FOOT = 64; // space below the bottom lane
const R = 12; // corner radius of branch trunks
const TRUNK_STEP = 12; // horizontal spacing between parallel trunks

export const x = (age) => LEFT + age * PX;

export function maxAgeOf(countries) {
  let m = 0;
  for (const c of countries) for (const s of c.stations) m = Math.max(m, s.ages[1]);
  return Math.ceil(m) + 1;
}

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);

// Rough text width for the label font; good enough for wrapping decisions.
export const textWidth = (str, size) => str.length * size * 0.56;

function wrap(str, maxW, size) {
  const words = str.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (cur && textWidth(next, size) > maxW) {
      lines.push(cur);
      cur = w;
    } else cur = next;
  }
  if (cur) lines.push(cur);
  if (lines.length > 2) return [lines[0], lines.slice(1).join(' ')];
  return lines;
}

export const isActiveAt = (st, age) => st.ages[0] <= age + 0.5 && st.ages[1] > age + 0.5;

const fmtAge = (a) => (Number.isInteger(a) ? String(a) : `${Math.floor(a)}½`);
export const ageRange = (st) => `${fmtAge(st.ages[0])}–${fmtAge(st.ages[1])}`;

/** Compute geometry shared by the renderer and the app (station positions, lanes). */
export function layout(country) {
  const lines = Object.fromEntries(country.lines.map((l) => [l.id, l]));
  const stations = Object.fromEntries(country.stations.map((s) => [s.id, s]));
  const byLine = {};
  for (const s of country.stations) (byLine[s.line] ||= []).push(s);
  for (const k in byLine) byLine[k].sort((a, b) => a.ages[0] - b.ages[0]);

  const lanes = country.lines.map((l) => l.lane);
  const minLane = Math.min(...lanes);
  const maxLane = Math.max(...lanes);
  const y = (lane) => RULER + HEAD + (lane - minLane) * LANE;
  const height = y(maxLane) + FOOT;

  // Trunk positions for branches leaving a parent station on another lane.
  const trunk = {};
  const children = {};
  for (const l of country.lines) if (l.from) (children[l.from] ||= []).push(l);
  for (const [pid, kids] of Object.entries(children)) {
    const parent = stations[pid];
    const pLane = lines[parent.line].lane;
    for (const dir of [-1, 1]) {
      const group = kids
        .filter((k) => Math.sign(k.lane - pLane) === dir)
        .sort((a, b) => Math.abs(b.lane - pLane) - Math.abs(a.lane - pLane));
      // Trunks sit just before the parent's end; the farthest lane turns first so lines never cross.
      group.forEach((k, i) => {
        trunk[k.id] = x(parent.ages[1]) - 6 - (group.length - 1 - i) * TRUNK_STEP;
      });
    }
  }

  // Display x of each station's marker (first station of a trunked branch is nudged right).
  const sx = {};
  for (const l of country.lines) {
    (byLine[l.id] || []).forEach((s, i) => {
      let px = x(s.ages[0]);
      if (i === 0 && trunk[l.id] != null) px = Math.max(px, trunk[l.id] + R + 8);
      sx[s.id] = px;
    });
  }

  const interchange = new Set();
  for (const l of country.lines) if (l.from) interchange.add(l.from);
  for (const t of country.transfers || []) {
    interchange.add(t.from);
    interchange.add(t.to);
  }

  return { lines, stations, byLine, y, height, trunk, sx, interchange, minLane, maxLane };
}

/**
 * @param {object} country  country data
 * @param {object} opts     { maxAge, cursorAge, selected, focusLine }
 */
export function renderMap(country, opts = {}) {
  const L = layout(country);
  const maxAge = opts.maxAge ?? maxAgeOf([country]);
  const width = x(maxAge) + RIGHT_PAD;
  const H = L.height;
  const uid = country.id;
  const out = [];
  const cAge = opts.cursorAge;

  out.push(
    `<svg class="map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${H}" width="${width}" height="${H}" ` +
      `role="img" aria-label="${esc(country.name)} education system as a metro map; horizontal axis is age">`,
  );
  out.push(
    `<defs><pattern id="hatch-${uid}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">` +
      `<rect width="8" height="8" class="band-ext-bg"/><line x1="0" y1="0" x2="0" y2="8" class="band-ext-line"/></pattern></defs>`,
  );

  // Compulsory education bands
  const cp = country.compulsory;
  if (cp) {
    out.push(`<rect class="band" x="${x(cp.from)}" y="${RULER}" width="${x(cp.to) - x(cp.from)}" height="${H - RULER}"/>`);
    out.push(`<text class="band-label" x="${x(cp.from) + 8}" y="${RULER + 15}">${esc(cp.label)}</text>`);
    if (cp.extendedTo) {
      out.push(
        `<rect x="${x(cp.to)}" y="${RULER}" width="${x(cp.extendedTo) - x(cp.to)}" height="${H - RULER}" fill="url(#hatch-${uid})" class="band-ext"/>`,
      );
      out.push(`<text class="band-label" x="${x(cp.to) + 8}" y="${RULER + 15}">${esc(cp.extendedLabel)}</text>`);
    }
  }

  // Age ruler
  out.push(`<g class="ruler" data-ruler="1">`);
  out.push(`<rect class="ruler-bg" x="0" y="0" width="${width}" height="${RULER}"/>`);
  for (let a = 0; a <= maxAge; a++) {
    out.push(`<line class="tick" x1="${x(a)}" x2="${x(a)}" y1="${RULER - 8}" y2="${H}"/>`);
    if (a < maxAge)
      out.push(`<text class="tick-label" x="${x(a) + PX / 2}" y="${RULER - 12}" text-anchor="middle">${a}</text>`);
  }
  out.push(`<text class="ruler-title" x="6" y="${RULER - 12}">age</text>`);
  for (let a = 0; a < maxAge; a++)
    out.push(`<rect class="ruler-hit" data-age="${a}" x="${x(a)}" y="0" width="${PX}" height="${RULER}"><title>Age ${a}</title></rect>`);
  out.push(`</g>`);

  // Age cursor
  if (cAge != null) {
    out.push(`<rect class="cursor" x="${x(cAge)}" y="${RULER}" width="${PX}" height="${H - RULER}"/>`);
    out.push(`<rect class="cursor-pill" x="${x(cAge) + 4}" y="4" width="${PX - 8}" height="${RULER - 10}" rx="${(RULER - 10) / 2}"/>`);
    out.push(`<text class="cursor-text" x="${x(cAge) + PX / 2}" y="${RULER - 12}" text-anchor="middle">age ${cAge}</text>`);
  }

  const focus = opts.focusLine;
  const dim = (lineId) => (focus && focus !== lineId ? ' dim' : '');

  // Transfers (under the lines)
  out.push(`<g class="xfers">`);
  for (const t of country.transfers || []) {
    const a = L.stations[t.from];
    const b = L.stations[t.to];
    if (!a || !b) continue;
    const ay = L.y(L.lines[a.line].lane);
    const by = L.y(L.lines[b.line].lane);
    const ax = Math.max(L.sx[a.id] + 12, x(a.ages[1]) - 16);
    const bx = L.sx[b.id] + 16;
    const my = (ay + by) / 2;
    const d =
      ay === by
        ? `M${ax} ${ay} C${ax} ${ay - 44} ${bx} ${by - 44} ${bx} ${by}`
        : `M${ax} ${ay} C${ax} ${my} ${bx} ${my} ${bx} ${by}`;
    const related =
      opts.selected && (opts.selected === t.from || opts.selected === t.to) ? ' hot' : '';
    const dimmed = focus && L.stations[t.from].line !== focus && L.stations[t.to].line !== focus ? ' dim' : '';
    out.push(
      `<g class="xfer-g${related}${dimmed}" data-from="${t.from}" data-to="${t.to}"><title>${esc(t.label)} — ${esc(t.desc || '')}</title>` +
        `<path class="xfer-hit" d="${d}"/><path class="xfer" d="${d}"/>` +
        `<circle class="xfer-end" cx="${bx}" cy="${by}" r="3.2"/></g>`,
    );
  }
  out.push(`</g>`);

  // Lines — draw children first so parents sit on top at junctions.
  out.push(`<g class="lines">`);
  const order = [...country.lines].reverse();
  for (const l of order) {
    const sts = L.byLine[l.id] || [];
    if (!sts.length) continue;
    const yl = L.y(l.lane);
    const xEnd = x(sts[sts.length - 1].ages[1]);
    let d;
    if (l.from && L.stations[l.from]) {
      const p = L.stations[l.from];
      const py = L.y(L.lines[p.line].lane);
      const px = x(p.ages[1]) - 2;
      if (py === yl) d = `M${px} ${yl}`;
      else {
        const tx = L.trunk[l.id];
        const s = Math.sign(yl - py);
        d = `M${tx - R - 2} ${py} H${tx - R} Q${tx} ${py} ${tx} ${py + s * R} V${yl - s * R} Q${tx} ${yl} ${tx + R} ${yl}`;
      }
    } else d = `M${x(sts[0].ages[0])} ${yl}`;

    // Walk the stations; gaps between stations are drawn dashed.
    let cursor = null;
    const gaps = [];
    for (const s of sts) {
      if (cursor != null && s.ages[0] > cursor + 0.01) {
        d += ` H${x(cursor)}`;
        gaps.push([x(cursor), x(s.ages[0])]);
        d += ` M${x(s.ages[0])} ${yl}`;
      }
      cursor = Math.max(cursor ?? -1, s.ages[1]);
    }
    d += ` H${xEnd}`;
    out.push(`<path class="ln${dim(l.id)}" data-line="${l.id}" d="${d}" stroke="${l.color}"/>`);
    for (const [g0, g1] of gaps)
      out.push(`<path class="ln-gap${dim(l.id)}" d="M${g0} ${yl} H${g1}" stroke="${l.color}"/>`);
    // Terminus bar unless the line continues on the same lane.
    const continues = country.lines.some(
      (o) => o.from === sts[sts.length - 1].id && o.lane === l.lane,
    );
    if (!continues)
      out.push(`<line class="term${dim(l.id)}" x1="${xEnd}" x2="${xEnd}" y1="${yl - 9}" y2="${yl + 9}" stroke="${l.color}"/>`);
  }
  out.push(`</g>`);

  // Stations
  out.push(`<g class="stations">`);
  for (const l of country.lines) {
    const sts = L.byLine[l.id] || [];
    const yl = L.y(l.lane);
    sts.forEach((s, i) => {
      const px = L.sx[s.id];
      const endX = x(s.ages[1]);
      const isLast = i === sts.length - 1;
      const room = endX - px - 14 + (isLast ? 40 : 0);
      const active = cAge != null && isActiveAt(s, cAge);
      const cls = ['st', active ? 'active' : '', opts.selected === s.id ? 'sel' : '', dim(l.id).trim()]
        .filter(Boolean)
        .join(' ');
      out.push(
        `<g class="${cls}" data-id="${s.id}" tabindex="0" role="button" ` +
          `aria-label="${esc(`${s.name}, ${l.name}, ages ${ageRange(s)}`)}" style="--c:${l.color}">`,
      );
      out.push(`<rect class="hit" x="${px - 8}" y="${yl - 50}" width="${Math.max(40, endX - px + 6)}" height="94" rx="8"/>`);
      if (active) out.push(`<rect class="active-bar" x="${px + 4}" y="${yl - 1.5}" width="${Math.max(4, endX - px - 8)}" height="3" rx="1.5"/>`);
      // Marker
      if (L.interchange.has(s.id)) out.push(`<circle class="ix" cx="${px}" cy="${yl}" r="8"/>`);
      else out.push(`<rect class="tk" x="${px - 2.5}" y="${yl - 14}" width="5" height="14" fill="${l.color}"/>`);
      const sub = opts.labelFor ? opts.labelFor(s) : ageRange(s);
      if (opts.medianIds?.has(s.id))
        out.push(`<circle class="median" cx="${endX - 11}" cy="${yl}" r="6.5"><title>The median adult's education ends at this level</title></circle>`);
      if (s.exam) {
        const ex = px + 1 + textWidth(sub, 10.5) * 1.08 + 9;
        out.push(`<rect class="exam" x="${ex - 3.5}" y="${yl + 15}" width="7" height="7" transform="rotate(45 ${ex} ${yl + 18.5})"><title>${esc(s.exam)}</title></rect>`);
      }
      // Labels
      const nameSize = 12.5;
      const lab = wrap(s.name, room, nameSize);
      const showLocal = s.local && lab.length === 1 && textWidth(s.local, 10.5) <= room;
      const lx = px + (L.interchange.has(s.id) ? 11 : 5);
      let ly = yl - 18;
      const rows = [];
      if (showLocal) rows.push(`<text class="lab-local" x="${lx}" y="${ly}">${esc(s.local)}</text>`), (ly -= 15);
      for (let k = lab.length - 1; k >= 0; k--) {
        rows.push(`<text class="lab" x="${lx}" y="${ly}">${esc(lab[k])}</text>`);
        ly -= 15;
      }
      out.push(rows.join(''));
      out.push(`<text class="lab-age${opts.labelFor ? ' lab-val' : ''}" x="${px + 1}" y="${yl + 22}">${esc(sub)}</text>`);
      // Line name under its first station, if it fits before the next line on this lane.
      const nextOnLane = Math.min(
        ...country.lines
          .filter((o) => o.lane === l.lane && o.id !== l.id && L.byLine[o.id] && L.sx[L.byLine[o.id][0].id] > px)
          .map((o) => L.sx[L.byLine[o.id][0].id]),
      );
      if (i === 0 && px + textWidth(l.name, 10.5) * 1.25 < nextOnLane - 6)
        out.push(`<text class="lab-line" x="${px + 1}" y="${yl + 36}" fill="${l.color}">${esc(l.name)}</text>`);
      out.push(`</g>`);
    });
  }
  out.push(`</g>`);
  out.push(`</svg>`);
  return out.join('');
}
