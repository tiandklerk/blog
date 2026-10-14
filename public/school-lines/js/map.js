// Renders a country's education system as a metro-style SVG map.
// Age runs along one axis (shared between countries so maps line up when compared)
// and each line runs along its own lane; branches leave their parent station through
// rounded "trunks" like a schematic tube map.
//
// Two orientations: 'h' (age left→right, lanes stacked top→bottom) and
// 'v' (age top→bottom, lanes side by side) for narrow screens.
// Geometry is computed in logical coordinates (u = along the age axis,
// v = across lanes) and mapped to x/y at the end.

const ORIENT = {
  h: { px: 84, lane: 96, ax0: 28, ln0: 34 + 76, ruler: 34, endPad: 40, crossPad: 64 },
  v: { px: 60, lane: 124, ax0: 44, ln0: 40 + 22, ruler: 40, endPad: 24, crossPad: 112 },
};
const R = 12; // corner radius of branch trunks
const TRUNK_STEP = 12; // spacing between parallel trunks

export const PX = ORIENT.h.px;
export const LANE = ORIENT.h.lane;
/** Horizontal-orientation age → x (kept for the validator). */
export const x = (age) => ORIENT.h.ax0 + age * ORIENT.h.px;
/** Position of an age along the age axis for an orientation, and pixels per year. */
export const axisPos = (age, orient = 'h') => ORIENT[orient].ax0 + age * ORIENT[orient].px;
export const pxPerYear = (orient = 'h') => ORIENT[orient].px;

export function maxAgeOf(countries) {
  let m = 0;
  for (const c of countries) for (const s of c.stations) m = Math.max(m, s.ages[1]);
  return Math.ceil(m) + 1;
}

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);

// Rough text width for the label font; good enough for wrapping decisions.
export const textWidth = (str, size) => str.length * size * 0.56;

function wrap(str, maxW, size, maxLines = 2) {
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
  if (lines.length > maxLines) return [...lines.slice(0, maxLines - 1), lines.slice(maxLines - 1).join(' ')];
  return lines;
}

/** Shorten a label to fit a width, adding an ellipsis. */
function fit(str, maxW, size) {
  if (textWidth(str, size) <= maxW) return str;
  const n = Math.max(3, Math.floor(maxW / (size * 0.56)) - 1);
  return `${str.slice(0, n).trimEnd()}…`;
}

export const isActiveAt = (st, age) => st.ages[0] <= age + 0.5 && st.ages[1] > age + 0.5;

const fmtAge = (a) => (Number.isInteger(a) ? String(a) : `${Math.floor(a)}½`);
export const ageRange = (st) => `${fmtAge(st.ages[0])}–${fmtAge(st.ages[1])}`;

/**
 * Geometry shared by the renderer and the app. In both orientations:
 * `sx[stationId]` is the station marker's position along the age axis and
 * `y(lane)` is the lane's position across the lanes (x in vertical mode).
 */
export function layout(country, orient = 'h') {
  const O = ORIENT[orient];
  const u = (age) => O.ax0 + age * O.px;
  const lines = Object.fromEntries(country.lines.map((l) => [l.id, l]));
  const stations = Object.fromEntries(country.stations.map((s) => [s.id, s]));
  const byLine = {};
  for (const s of country.stations) (byLine[s.line] ||= []).push(s);
  for (const k in byLine) byLine[k].sort((a, b) => a.ages[0] - b.ages[0]);

  const lanes = country.lines.map((l) => l.lane);
  const minLane = Math.min(...lanes);
  const maxLane = Math.max(...lanes);
  const y = (lane) => O.ln0 + (lane - minLane) * O.lane;
  const cross = y(maxLane) + O.crossPad; // size across lanes
  const height = cross; // kept for horizontal callers

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
        trunk[k.id] = u(parent.ages[1]) - 6 - (group.length - 1 - i) * TRUNK_STEP;
      });
    }
  }

  // Axis position of each station's marker (first station of a trunked branch is nudged on).
  const sx = {};
  for (const l of country.lines) {
    (byLine[l.id] || []).forEach((s, i) => {
      let p = u(s.ages[0]);
      if (i === 0 && trunk[l.id] != null) p = Math.max(p, trunk[l.id] + R + 8);
      sx[s.id] = p;
    });
  }

  const interchange = new Set();
  for (const l of country.lines) if (l.from) interchange.add(l.from);
  for (const t of country.transfers || []) {
    interchange.add(t.from);
    interchange.add(t.to);
  }

  return { lines, stations, byLine, y, u, cross, height, trunk, sx, interchange, minLane, maxLane, orient };
}

/**
 * @param {object} country  country data
 * @param {object} opts     { orient, maxAge, cursorAge, selected, focusLine, labelFor, medianIds }
 */
export function renderMap(country, opts = {}) {
  const orient = opts.orient === 'v' ? 'v' : 'h';
  const V = orient === 'v';
  const O = ORIENT[orient];
  const L = layout(country, orient);
  const u = L.u;
  const maxAge = opts.maxAge ?? maxAgeOf([country]);
  const along = u(maxAge) + O.endPad; // size along the age axis
  const cross = L.cross;
  const [W, H] = V ? [cross, along] : [along, cross];
  const uid = `${country.id}-${orient}`;
  const out = [];
  const cAge = opts.cursorAge;
  const PXA = O.px;

  // Map logical (u along age, v across lanes) to SVG coordinates.
  const P = (a, b) => (V ? `${b} ${a}` : `${a} ${b}`);
  const X = (a, b) => (V ? b : a);
  const Y = (a, b) => (V ? a : b);
  const rect = (u0, u1, v0, v1, attrs) =>
    V
      ? `<rect x="${v0}" y="${u0}" width="${v1 - v0}" height="${u1 - u0}" ${attrs}/>`
      : `<rect x="${u0}" y="${v0}" width="${u1 - u0}" height="${v1 - v0}" ${attrs}/>`;

  out.push(
    `<svg class="map map-${orient}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" ` +
      `role="img" aria-label="${esc(country.name)} education system as a metro map; ${V ? 'vertical' : 'horizontal'} axis is age">`,
  );
  out.push(
    `<defs><pattern id="hatch-${uid}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">` +
      `<rect width="8" height="8" class="band-ext-bg"/><line x1="0" y1="0" x2="0" y2="8" class="band-ext-line"/></pattern></defs>`,
  );

  // Compulsory education bands
  const cp = country.compulsory;
  const bandLabel = (age, text) =>
    V
      ? `<text class="band-label" x="${cross - 8}" y="${u(age) + 14}" text-anchor="end">${esc(text)}</text>`
      : `<text class="band-label" x="${u(age) + 8}" y="${O.ruler + 15}">${esc(text)}</text>`;
  if (cp) {
    out.push(rect(u(cp.from), u(cp.to), O.ruler, cross, 'class="band"'));
    out.push(bandLabel(cp.from, cp.label));
    if (cp.extendedTo) {
      out.push(rect(u(cp.to), u(cp.extendedTo), O.ruler, cross, `fill="url(#hatch-${uid})" class="band-ext"`));
      out.push(bandLabel(cp.to, cp.extendedLabel));
    }
  }

  // Age ruler (top in horizontal, left column in vertical)
  out.push(`<g class="ruler" data-ruler="1">`);
  out.push(rect(0, along, 0, O.ruler, 'class="ruler-bg"'));
  for (let a = 0; a <= maxAge; a++) {
    out.push(`<line class="tick" x1="${X(u(a), O.ruler - 8)}" x2="${X(u(a), cross)}" y1="${Y(u(a), O.ruler - 8)}" y2="${Y(u(a), cross)}"/>`);
    if (a < maxAge) {
      const mid = u(a) + PXA / 2;
      out.push(
        V
          ? `<text class="tick-label" x="${O.ruler / 2}" y="${mid + 4}" text-anchor="middle">${a}</text>`
          : `<text class="tick-label" x="${mid}" y="${O.ruler - 12}" text-anchor="middle">${a}</text>`,
      );
    }
  }
  out.push(V ? `<text class="ruler-title" x="${O.ruler / 2}" y="14" text-anchor="middle">age</text>` : `<text class="ruler-title" x="6" y="${O.ruler - 12}">age</text>`);
  for (let a = 0; a < maxAge; a++)
    out.push(rect(u(a), u(a) + PXA, 0, O.ruler, `class="ruler-hit" data-age="${a}"`).replace('/>', `><title>Age ${a}</title></rect>`));
  out.push(`</g>`);

  // Age cursor
  if (cAge != null) {
    out.push(rect(u(cAge), u(cAge) + PXA, O.ruler, cross, 'class="cursor"'));
    if (V) {
      out.push(`<rect class="cursor-pill" x="4" y="${u(cAge) + 6}" width="${O.ruler - 8}" height="${PXA - 12}" rx="${(O.ruler - 8) / 2}"/>`);
      out.push(`<text class="cursor-text" x="${O.ruler / 2}" y="${u(cAge) + PXA / 2 + 4}" text-anchor="middle">${cAge}</text>`);
    } else {
      out.push(`<rect class="cursor-pill" x="${u(cAge) + 4}" y="4" width="${PXA - 8}" height="${O.ruler - 10}" rx="${(O.ruler - 10) / 2}"/>`);
      out.push(`<text class="cursor-text" x="${u(cAge) + PXA / 2}" y="${O.ruler - 12}" text-anchor="middle">age ${cAge}</text>`);
    }
  }

  const focus = opts.focusLine;
  const dim = (lineId) => (focus && focus !== lineId ? ' dim' : '');

  // Transfers (under the lines)
  out.push(`<g class="xfers">`);
  for (const t of country.transfers || []) {
    const a = L.stations[t.from];
    const b = L.stations[t.to];
    if (!a || !b) continue;
    const av = L.y(L.lines[a.line].lane);
    const bv = L.y(L.lines[b.line].lane);
    const au = Math.max(L.sx[a.id] + 12, u(a.ages[1]) - 16);
    const bu = L.sx[b.id] + 16;
    const mv = (av + bv) / 2;
    const off = V ? 44 : -44;
    const d =
      av === bv
        ? `M${P(au, av)} C${P(au, av + off)} ${P(bu, bv + off)} ${P(bu, bv)}`
        : `M${P(au, av)} C${P(au, mv)} ${P(bu, mv)} ${P(bu, bv)}`;
    const related = opts.selected && (opts.selected === t.from || opts.selected === t.to) ? ' hot' : '';
    const dimmed = focus && a.line !== focus && b.line !== focus ? ' dim' : '';
    out.push(
      `<g class="xfer-g${related}${dimmed}" data-from="${t.from}" data-to="${t.to}"><title>${esc(t.label)} — ${esc(t.desc || '')}</title>` +
        `<path class="xfer-hit" d="${d}"/><path class="xfer" d="${d}"/>` +
        `<circle class="xfer-end" cx="${X(bu, bv)}" cy="${Y(bu, bv)}" r="3.2"/></g>`,
    );
  }
  out.push(`</g>`);

  // Lines — draw children first so parents sit on top at junctions.
  out.push(`<g class="lines">`);
  for (const l of [...country.lines].reverse()) {
    const sts = L.byLine[l.id] || [];
    if (!sts.length) continue;
    const lv = L.y(l.lane);
    const uEnd = u(sts[sts.length - 1].ages[1]);
    let d;
    if (l.from && L.stations[l.from]) {
      const p = L.stations[l.from];
      const pv = L.y(L.lines[p.line].lane);
      if (pv === lv) d = `M${P(u(p.ages[1]) - 2, lv)}`;
      else {
        const tu = L.trunk[l.id];
        const s = Math.sign(lv - pv);
        d =
          `M${P(tu - R - 2, pv)} L${P(tu - R, pv)} Q${P(tu, pv)} ${P(tu, pv + s * R)} ` +
          `L${P(tu, lv - s * R)} Q${P(tu, lv)} ${P(tu + R, lv)}`;
      }
    } else d = `M${P(u(sts[0].ages[0]), lv)}`;

    // Walk the stations; gaps between stations are drawn dashed.
    let reached = null;
    const gaps = [];
    for (const s of sts) {
      if (reached != null && s.ages[0] > reached + 0.01) {
        d += ` L${P(u(reached), lv)}`;
        gaps.push([u(reached), u(s.ages[0])]);
        d += ` M${P(u(s.ages[0]), lv)}`;
      }
      reached = Math.max(reached ?? -1, s.ages[1]);
    }
    d += ` L${P(uEnd, lv)}`;
    out.push(`<path class="ln${dim(l.id)}" data-line="${l.id}" d="${d}" stroke="${l.color}"/>`);
    for (const [g0, g1] of gaps)
      out.push(`<path class="ln-gap${dim(l.id)}" d="M${P(g0, lv)} L${P(g1, lv)}" stroke="${l.color}"/>`);
    // Terminus bar unless the line continues on the same lane.
    const continues = country.lines.some((o) => o.from === sts[sts.length - 1].id && o.lane === l.lane);
    if (!continues)
      out.push(`<line class="term${dim(l.id)}" x1="${X(uEnd, lv - 9)}" x2="${X(uEnd, lv + 9)}" y1="${Y(uEnd, lv - 9)}" y2="${Y(uEnd, lv + 9)}" stroke="${l.color}"/>`);
  }
  out.push(`</g>`);

  // Stations
  out.push(`<g class="stations">`);
  for (const l of country.lines) {
    const sts = L.byLine[l.id] || [];
    const lv = L.y(l.lane);
    sts.forEach((s, i) => {
      const pu = L.sx[s.id];
      const endU = u(s.ages[1]);
      const isLast = i === sts.length - 1;
      const active = cAge != null && isActiveAt(s, cAge);
      const ix = L.interchange.has(s.id);
      const cls = ['st', active ? 'active' : '', opts.selected === s.id ? 'sel' : '', dim(l.id).trim()].filter(Boolean).join(' ');
      out.push(
        `<g class="${cls}" data-id="${s.id}" tabindex="0" role="button" ` +
          `aria-label="${esc(`${s.name}, ${l.name}, ages ${ageRange(s)}`)}" style="--c:${l.color}">`,
      );
      // Hit area
      out.push(
        V
          ? `<rect class="hit" x="${lv - 12}" y="${pu - 8}" width="${O.lane - 10}" height="${Math.max(30, endU - pu + 4)}" rx="8"/>`
          : `<rect class="hit" x="${pu - 8}" y="${lv - 50}" width="${Math.max(40, endU - pu + 6)}" height="94" rx="8"/>`,
      );
      if (active) out.push(rect(pu + 4, Math.max(pu + 8, endU - 4), lv - 1.5, lv + 1.5, 'class="active-bar" rx="1.5"'));
      // Marker
      if (ix) out.push(`<circle class="ix" cx="${X(pu, lv)}" cy="${Y(pu, lv)}" r="8"/>`);
      else out.push(V ? `<rect class="tk" x="${lv}" y="${pu - 2.5}" width="14" height="5" fill="${l.color}"/>` : `<rect class="tk" x="${pu - 2.5}" y="${lv - 14}" width="5" height="14" fill="${l.color}"/>`);
      const sub = opts.labelFor ? opts.labelFor(s) : ageRange(s);
      if (opts.medianIds?.has(s.id))
        out.push(`<circle class="median" cx="${X(endU - 11, lv)}" cy="${Y(endU - 11, lv)}" r="6.5"><title>The median adult's education ends at this level</title></circle>`);
      const exam = (ex, ey) =>
        `<rect class="exam" x="${ex - 3.5}" y="${ey - 3.5}" width="7" height="7" transform="rotate(45 ${ex} ${ey})"><title>${esc(s.exam)}</title></rect>`;

      if (V) {
        // Labels to the right of the line, stacked downwards from the marker.
        const lx = lv + (ix ? 13 : 18);
        const maxW = O.lane - (ix ? 24 : 28);
        const room = endU - pu + (isLast ? 36 : 0);
        const lab = wrap(s.name, maxW, 12, room >= 54 ? 2 : 1).map((t) => fit(t, maxW, 12));
        let ly = pu + 4;
        const rows = [];
        for (const t of lab) {
          rows.push(`<text class="lab" x="${lx}" y="${ly}">${esc(t)}</text>`);
          ly += 14;
        }
        rows.push(`<text class="lab-age${opts.labelFor ? ' lab-val' : ''}" x="${lx}" y="${ly - 1}">${esc(fit(sub, maxW - 14, 10.5))}</text>`);
        if (s.exam) rows.push(exam(lx + textWidth(fit(sub, maxW - 14, 10.5), 10.5) * 1.08 + 9, ly - 4.5));
        ly += 13;
        if (i === 0 && ly - pu <= room) rows.push(`<text class="lab-line" x="${lx}" y="${ly - 1}" fill="${l.color}">${esc(fit(l.name, maxW, 10.5))}</text>`);
        out.push(rows.join(''));
      } else {
        const room = endU - pu - 14 + (isLast ? 40 : 0);
        if (s.exam) out.push(exam(pu + 1 + textWidth(sub, 10.5) * 1.08 + 9, lv + 18.5));
        const lab = wrap(s.name, room, 12.5);
        const showLocal = s.local && lab.length === 1 && textWidth(s.local, 10.5) <= room;
        const lx = pu + (ix ? 11 : 5);
        let ly = lv - 18;
        const rows = [];
        if (showLocal) rows.push(`<text class="lab-local" x="${lx}" y="${ly}">${esc(s.local)}</text>`), (ly -= 15);
        for (let k = lab.length - 1; k >= 0; k--) {
          rows.push(`<text class="lab" x="${lx}" y="${ly}">${esc(lab[k])}</text>`);
          ly -= 15;
        }
        out.push(rows.join(''));
        out.push(`<text class="lab-age${opts.labelFor ? ' lab-val' : ''}" x="${pu + 1}" y="${lv + 22}">${esc(sub)}</text>`);
        // Line name under its first station, if it fits before the next line on this lane.
        const nextOnLane = Math.min(
          ...country.lines
            .filter((o) => o.lane === l.lane && o.id !== l.id && L.byLine[o.id] && L.sx[L.byLine[o.id][0].id] > pu)
            .map((o) => L.sx[L.byLine[o.id][0].id]),
        );
        if (i === 0 && pu + textWidth(l.name, 10.5) * 1.25 < nextOnLane - 6)
          out.push(`<text class="lab-line" x="${pu + 1}" y="${lv + 36}" fill="${l.color}">${esc(l.name)}</text>`);
      }
      out.push(`</g>`);
    });
  }
  out.push(`</g>`);
  out.push(`</svg>`);
  return out.join('');
}
