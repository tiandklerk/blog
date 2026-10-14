// Germany — education is run by the 16 Länder, so details vary by state.
// This map shows the common structure; the notes call out the main state differences.
export default {
  id: 'de',
  iso3: 'DEU',
  region: 'Europe',
  currency: 'EUR',
  costNote:
    'Public schools and universities charge no tuition; students pay a Semesterbeitrag. Kita fees are set ' +
    'by Land and municipality, from free to several hundred euros a month. Figures are for 2025/26–2026/27.',
  name: 'Germany',
  localName: 'Deutschland',
  flag: '🇩🇪',
  summary:
    'Four years of Grundschule (six in Berlin and Brandenburg), then a split at about age 10 into ' +
    'Gymnasium (leading to the Abitur), Realschule, Hauptschule/Mittelschule, or an integrated ' +
    'Gesamtschule. Many Länder have merged Haupt- and Realschule into one school type, such as ' +
    'Oberschule, Sekundarschule or Stadtteilschule. The dual vocational system (Ausbildung) combines ' +
    'paid work in a company with part-time Berufsschule. Higher education is at universities or ' +
    'universities of applied sciences (HAW/FH), with no tuition fees for most students.',
  ageNote:
    'Children start school in the year they turn 6, by a cut-off date that varies by Land ' +
    '(30 June–30 September). Gymnasium takes 8 years (G8, Abitur after year 12) or 9 years (G9, ' +
    'after year 13). Bavaria, NRW, Lower Saxony and Schleswig-Holstein have returned to G9, and ' +
    'Baden-Württemberg is switching from 2025/26. In Hesse schools choose. Most eastern Länder, ' +
    'such as Saxony and Thuringia, keep G8. The map shows G9.',
  compulsory: {
    from: 6,
    to: 15,
    label: 'Vollzeitschulpflicht ~6–15',
    note:
      'Full-time compulsory schooling lasts 9 years in most Länder and 10 in some, such as ' +
      'Berlin, Brandenburg, Bremen and NRW (for Gymnasium).',
    extendedTo: 18,
    extendedLabel: 'Berufsschulpflicht to ~18',
    extendedNote:
      'After full-time school, young people not in upper-secondary school must attend Berufsschule ' +
      'part-time, generally until 18 or until their Ausbildung ends.',
  },
  lines: [
    { id: 'kita', name: 'Kita', color: '#7C8A93', lane: 0,
      desc: 'Kindertagesstätte (Krippe for under-3s, Kindergarten for 3 to 6). There has been a ' +
        'legal right to a place from age 1 since 2013. Kita is not compulsory, and fees vary by Land ' +
        'and city; many charge nothing in the final years.' },
    { id: 'gs', name: 'Grundschule', color: '#D2322D', lane: 0, from: 'de-kiga',
      desc: 'Primary school, Klasse 1–4 (1–6 in Berlin and Brandenburg). At the end, pupils get a ' +
        'secondary-school recommendation (Übergangsempfehlung). It is binding or partly binding in ' +
        'Bavaria, Saxony, Thuringia and Baden-Württemberg (Gymnasium only, from 2025). Elsewhere ' +
        'parents decide.' },
    { id: 'gym', name: 'Gymnasium', color: '#7A3E9D', lane: -2, from: 'de-k4',
      desc: 'Academic secondary school, Klasse 5–12 (G8) or 5–13 (G9), ending in the Abitur ' +
        '(allgemeine Hochschulreife). Includes the gymnasiale Oberstufe (upper stage). Vocational ' +
        'routes to the Abitur also exist, such as the Berufliches Gymnasium.' },
    { id: 'uni', name: 'Universität', color: '#4B2470', lane: -2, from: 'de-q2',
      desc: 'Research universities. Bachelor (usually 6 semesters), master (usually 4 semesters) and ' +
        'doctorate. Medicine, law, pharmacy and state-school teaching often end in a Staatsexamen ' +
        'instead.' },
    { id: 'ges', name: 'Gesamtschule', color: '#1E66C9', lane: -1, from: 'de-k4',
      desc: 'Integrated comprehensive school, Klasse 5–10. Many have their own Oberstufe, and all ' +
        'leaving certificates are possible.' },
    { id: 'real', name: 'Realschule', color: '#DD7710', lane: 1, from: 'de-k4',
      desc: 'Intermediate secondary school, Klasse 5–10, ending in the Mittlerer Schulabschluss ' +
        '(MSA/Realschulabschluss). It leads to an Ausbildung, the Fachoberschule, or the ' +
        'gymnasiale Oberstufe with good grades.' },
    { id: 'fos', name: 'FOS', color: '#B8860B', lane: 1, from: 'de-r10',
      desc: 'Fachoberschule, Klasse 11–12. Combines a practical placement with school and leads to ' +
        'the Fachhochschulreife (entry to universities of applied sciences).' },
    { id: 'haw', name: 'HAW / FH', color: '#8A5A00', lane: 1, from: 'de-fos12',
      desc: 'Hochschule für angewandte Wissenschaften (Fachhochschule): practice-oriented bachelors ' +
        '(6–7 semesters, including a practical semester) and masters. Dual study programmes combine ' +
        'study with paid work at a company.' },
    { id: 'haupt', name: 'Hauptschule', color: '#2C9546', lane: 2, from: 'de-k4',
      desc: 'Hauptschule (Mittelschule in Bavaria), Klasse 5–9 with an optional Klasse 10. It leads ' +
        'to the Erster Schulabschluss. Many Länder have merged it into combined school types.' },
    { id: 'dual', name: 'Ausbildung', color: '#00A0A6', lane: 3, from: 'de-h9',
      desc: 'Dual vocational training: 3–4 days a week at a company (paid a training allowance) and ' +
        '1–2 days at Berufsschule. There are around 320 recognised occupations; training takes ' +
        '2–3.5 years and ends with a chamber exam (IHK/HWK). About half of each age group goes ' +
        'this route, including many Abitur holders.' },
  ],
  stations: [
    { id: 'de-krippe', line: 'kita', name: 'Krippe', ages: [1, 3], isced: 0,
      desc: 'Nursery for under-3s. Legal right to a place from the 1st birthday.',
      cost: { amount: 3000, note: 'About €3,000 a year: national median €249/month incl. meals in 2020 (DJI). Free in Berlin and MV, from age 2 in RLP', src: 7 } },
    { id: 'de-kiga', line: 'kita', name: 'Kindergarten', ages: [3, 6], isced: 0,
      desc: 'Kindergarten from age 3 to school entry. Most Länder test language skills before ' +
        'school (Sprachstandsfeststellung), followed by a school-entry health check (Schuleingangsuntersuchung).',
      events: ['Language assessment (many Länder)', 'School-entry health check'],
      cost: { amount: 0, note: 'Fee-free (at least core hours) for 3–6s in most Länder; BW, Bavaria, Saxony and others charge income-based fees. Meals extra', src: 6 } },
    { id: 'de-k1', line: 'gs', name: 'Klasse 1', ages: [6, 7], isced: 1,
      desc: 'School entry (Einschulung), traditionally celebrated with a Schultüte. Some Länder ' +
        'have a flexible entry phase combining Klasse 1–2 (1–3 years).',
      events: ['Einschulung with Schultüte'],
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 } },
    { id: 'de-k2', line: 'gs', name: 'Klasse 2', ages: [7, 8], isced: 1,
      desc: 'Number grades (1 = sehr gut … 6 = ungenügend) usually start in Klasse 2 or 3.',
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 } },
    { id: 'de-k3', line: 'gs', name: 'Klasse 3', ages: [8, 9], isced: 1,
      desc: 'National comparison tests in German and maths (VERA-3).', events: ['VERA-3'],
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 } },
    { id: 'de-k4', line: 'gs', name: 'Klasse 4', ages: [9, 10], isced: 1,
      desc: 'Final Grundschule year in most Länder. The secondary-school recommendation is given ' +
        'mid-year, based mainly on grades in German, maths and Sachunterricht. In Baden-Württemberg ' +
        'it also includes the Kompass 4 test.',
      exam: 'Übergangsempfehlung', events: ['Secondary-school recommendation (winter/spring)', 'Registration at a secondary school'],
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 } },
    // Gymnasium (G9 shown)
    { id: 'de-g56', line: 'gym', name: 'Klasse 5–6', local: 'Erprobungsstufe', ages: [10, 12], isced: 2,
      desc: 'Orientation stage. The school checks whether Gymnasium suits the pupil, and a second ' +
        'foreign language usually starts in Klasse 6.',
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 } },
    { id: 'de-g710', line: 'gym', name: 'Klasse 7–10', local: 'Mittelstufe', ages: [12, 16], isced: 2,
      desc: 'Lower secondary. Pupils may have to repeat a year (Sitzenbleiben) with insufficient ' +
        'grades. VERA-8 tests are taken in Klasse 8. In G8 Länder the Oberstufe begins after Klasse 9.',
      events: ['VERA-8', 'Choice of subject profile (languages / science / arts)'],
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 },
      share: { pct: 36.9, of: 'of pupils in Klasse 8 attend a Gymnasium (2024/25)', src: 12 } },
    { id: 'de-ef', line: 'gym', name: 'Klasse 11', local: 'Einführungsphase', ages: [16, 17], isced: 3,
      desc: 'Introduction phase of the gymnasiale Oberstufe. Pupils with a good Realschule or ' +
        'Gesamtschule MSA can join here.',
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 } },
    { id: 'de-q2', line: 'gym', name: 'Klasse 12–13', local: 'Qualifikationsphase', ages: [17, 19], isced: 3,
      desc: 'Qualification phase: grades from these 2 years plus the Abitur exams (written exams ' +
        'in 3 subjects and an oral in a 4th or 5th) make up the final grade (1.0–4.0). Shared ' +
        'national exam tasks are used in core subjects. In G8 Länder the Abitur comes one year ' +
        'earlier, at about 18.',
      exam: 'Abitur (allgemeine Hochschulreife)', events: ['Abitur exams (spring)'],
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 } },
    { id: 'de-ba', line: 'uni', name: 'Bachelor', ages: [19, 22], isced: 6,
      desc: 'Usually 6 semesters (180 ECTS). Popular subjects have admission limits (Numerus ' +
        'clausus). Medicine places are allocated centrally through Hochschulstart.',
      exam: 'Bachelor (B.A./B.Sc.)',
      cost: { amount: 700, note: 'About €700 a year: no tuition, but a Semesterbeitrag of ~€100 (Munich) to ~€440 (Bremen, incl. Deutschlandsemesterticket) per semester. BW charges non-EU students €1,500/semester', src: 8 } },
    { id: 'de-ma', line: 'uni', name: 'Master', ages: [22, 24], isced: 7,
      desc: 'Usually 4 semesters (120 ECTS), or a Staatsexamen in regulated professions.', exam: 'Master (M.A./M.Sc.) / Staatsexamen',
      cost: { amount: 700, note: 'About €700 a year: no tuition, but a Semesterbeitrag of ~€100 (Munich) to ~€440 (Bremen, incl. Deutschlandsemesterticket) per semester', src: 8 } },
    { id: 'de-promo', line: 'uni', name: 'Promotion', ages: [24, 28], isced: 8,
      desc: 'Doctorate, often while employed as a research assistant (wissenschaftliche Mitarbeiter). Typically 3–5 years.', exam: 'Dr.',
      cost: { amount: 700, note: 'About €700 a year in Semesterbeitrag if enrolled; no tuition. Many doctoral candidates are salaried research staff', src: 8 } },
    // Gesamtschule
    { id: 'de-ges', line: 'ges', name: 'Klasse 5–10', ages: [10, 16], isced: 2,
      desc: 'Pupils of all abilities learn together, with ability grouping (setting) in core subjects. ' +
        'All leaving certificates are possible: ESA, MSA, or the Q-Vermerk for the Oberstufe.',
      exam: 'ESA / MSA',
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 },
      share: { pct: 22.4, of: 'of pupils in Klasse 8 attend a Gesamtschule or other school with three tracks (2024/25)', src: 12 } },
    // Realschule
    { id: 'de-r56', line: 'real', name: 'Klasse 5–6', ages: [10, 12], isced: 2, desc: 'Orientation stage.',
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 } },
    { id: 'de-r79', line: 'real', name: 'Klasse 7–9', ages: [12, 15], isced: 2,
      desc: 'Choice of an elective subject group (Wahlpflichtfächergruppe), e.g. maths/science, ' +
        'economics or languages.',
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 },
      share: { pct: 17.1, of: 'of pupils in Klasse 8 attend a Realschule (2024/25); another 16% attend combined Haupt-/Realschule types', src: 12 } },
    { id: 'de-r10', line: 'real', name: 'Klasse 10', ages: [15, 16], isced: 2,
      desc: 'Central final exams lead to the Mittlerer Schulabschluss (MSA). With good grades this ' +
        'includes the Q-Vermerk, giving access to the gymnasiale Oberstufe.',
      exam: 'Mittlerer Schulabschluss',
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 } },
    { id: 'de-fos11', line: 'fos', name: 'FOS 11', ages: [16, 17], isced: 3,
      desc: 'A half-year practical placement combined with classes.',
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 } },
    { id: 'de-fos12', line: 'fos', name: 'FOS 12', ages: [17, 18], isced: 3,
      desc: 'Final exams lead to the Fachhochschulreife. A 13th year (FOS/BOS 13) can lead to the ' +
        'fachgebundene or allgemeine Hochschulreife.', exam: 'Fachhochschulreife',
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 } },
    { id: 'de-hawba', line: 'haw', name: 'Bachelor (HAW)', ages: [18, 21.5], isced: 6,
      desc: 'Practice-oriented bachelor of 6–7 semesters, including a practical semester.', exam: 'Bachelor (B.Eng./B.A.)',
      cost: { amount: 700, note: 'About €700 a year: no tuition, but a Semesterbeitrag of ~€100 (Munich) to ~€440 (Bremen, incl. Deutschlandsemesterticket) per semester', src: 8 } },
    { id: 'de-hawma', line: 'haw', name: 'Master (HAW)', ages: [21.5, 23.5], isced: 7,
      desc: 'A master at a HAW (3–4 semesters) gives access to doctoral study.', exam: 'Master',
      cost: { amount: 700, note: 'About €700 a year: no tuition, but a Semesterbeitrag of ~€100 (Munich) to ~€440 (Bremen, incl. Deutschlandsemesterticket) per semester', src: 8 } },
    // Hauptschule
    { id: 'de-h59', line: 'haupt', name: 'Klasse 5–8', ages: [10, 14], isced: 2,
      desc: 'Practical orientation, with careers guidance and work placements (Betriebspraktikum).',
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 },
      share: { pct: 3.5, of: 'of pupils in Klasse 8 attend a Hauptschule (2024/25)', src: 12 } },
    { id: 'de-h9', line: 'haupt', name: 'Klasse 9', ages: [14, 15], isced: 2,
      desc: 'Final exams lead to the Erster Schulabschluss (ESA, formerly the Hauptschulabschluss). ' +
        'An optional Klasse 10 can lead to the MSA.',
      exam: 'Erster Schulabschluss',
      cost: { amount: 0, note: 'Free at public schools; families may pay for some materials, trips and meals depending on the Land', src: 0 } },
    // Ausbildung
    { id: 'de-azubi', line: 'dual', name: 'Ausbildung', local: 'Azubi', ages: [16, 19], isced: 3,
      desc: 'Paid training at a company plus Berufsschule. Common occupations include industrial ' +
        'mechanic, office manager, medical assistant, electrician and IT specialist. The ' +
        'intermediate exam is about halfway through; the final chamber exam (Gesellenprüfung / ' +
        'IHK-Abschlussprüfung) comes at the end.',
      exam: 'Gesellen- / Facharbeiterbrief',
      cost: { amount: 0, note: 'No fees: Berufsschule is free and apprentices earn a training allowance (at least the legal minimum)', src: 2 } },
    { id: 'de-work', line: 'dual', name: 'Skilled work', local: 'Berufserfahrung', ages: [19, 22], isced: 3,
      desc: 'Working as a skilled worker (Facharbeiter or Geselle). Most further-training routes ' +
        'need a few years\' experience.',
      cost: { amount: 0, note: 'Working as a skilled employee; no education fees' } },
    { id: 'de-meister', line: 'dual', name: 'Meister / Techniker', ages: [22, 24], isced: 6,
      desc: 'Advanced vocational qualification (Meister, Techniker, Fachwirt), rated at level 6 ' +
        'in the German Qualifications Framework (DQR), the same as a bachelor. A Meister can run ' +
        'a craft business, train apprentices, and has general university entrance.',
      exam: 'Meisterbrief (DQR 6)',
      cost: { amount: 2300, note: 'About: €9,200 fees for a 7-month full-time Tischler Meister course (HWK Cottbus 2026/27) less ~75% Aufstiegs-BAföG; exam fees extra', estimate: true } },
  ],
  transfers: [
    { from: 'de-r10', to: 'de-ef', label: 'MSA + Q → Oberstufe', desc: 'A Realschule MSA with the Q-Vermerk gives access to the gymnasiale Oberstufe (or a Berufliches Gymnasium).' },
    { from: 'de-ges', to: 'de-ef', label: 'Gesamtschule → Oberstufe', desc: 'Pupils continue into the Gesamtschule\'s own Oberstufe or a Gymnasium Oberstufe.' },
    { from: 'de-r10', to: 'de-azubi', label: 'MSA → Ausbildung', desc: 'The most common route after Realschule.' },
    { from: 'de-h9', to: 'de-r10', label: 'Klasse 10 → MSA', desc: 'Hauptschule pupils with good grades can do a 10th year and earn the Mittlerer Schulabschluss.' },
    { from: 'de-q2', to: 'de-azubi', label: 'Abitur → Ausbildung', desc: 'About a quarter of new apprentices hold an Abitur, often in banking, IT or business.' },
    { from: 'de-q2', to: 'de-hawba', label: 'Abitur → HAW', desc: 'The Abitur also gives access to universities of applied sciences.' },
    { from: 'de-azubi', to: 'de-fos12', label: 'Ausbildung → BOS/FOS', desc: 'After an Ausbildung, the Berufsoberschule or a one-year FOS route leads to the Fachhochschulreife or Abitur.' },
    { from: 'de-meister', to: 'de-ba', label: 'Meister → Universität', desc: 'Since 2009, Meister and equivalent qualifications give general university entrance.' },
    { from: 'de-hawba', to: 'de-ma', label: 'HAW bachelor → Uni master', desc: 'HAW bachelors can go on to university masters, sometimes after bridging courses.' },
  ],
  sources: [
    { title: 'KMK — The Education System in Germany (Eurydice / KMK dossier)', url: 'https://www.kmk.org/dokumentation-statistik/informationen-zum-deutschen-bildungssystem.html' },
    { title: 'Eurydice — Germany overview', url: 'https://eurydice.eacea.ec.europa.eu/national-education-systems/germany/overview' },
    { title: 'BIBB — The German dual vocational training system', url: 'https://www.bibb.de/en/' },
    { title: 'Kultusministerium Baden-Württemberg — Grundschulempfehlung & G9', url: 'https://km.baden-wuerttemberg.de/' },
    { title: 'Bayerisches Staatsministerium — first G9 Abitur 2026', url: 'https://www.km.bayern.de/meldung/erster-abschlussjahrgang-des-neuen-neunjaehrigen-gymnasiums-erhaelt-abiturzeugnisse' },
    { title: 'Land NRW — Rückkehr zu G9', url: 'https://www.land.nrw/pressemitteilung/nach-rueckkehr-von-g8-zu-g9-nordrhein-westfalen-bestehen-rund-27000-schuelerinnen' },
    { title: 'Bertelsmann Stiftung Ländermonitor — Beitragsfreiheit für Kindertagesbetreuung (Oct 2025)', url: 'https://www.laendermonitor.de/de/vergleich-bundeslaender-daten/kinder-und-eltern/rechtsanspruch-beitragsfreiheit-betreuungsbedarf/beitragsfreiheit-fuer-kindertagesbetreuung-1' },
    { title: 'DJI — Kinderbetreuungsreport 2021, Studie 5: Elternbeiträge', url: 'https://www.dji.de/fileadmin/user_upload/KiBS/Kinderbetreuungsreport_2021_Studie5_Elternbeitraege.pdf' },
    { title: 'Universität Bremen — Rückmeldung und Semesterbeitrag (WiSe 2026/27: €443.40)', url: 'https://www.uni-bremen.de/studium/starten-studieren/formalitaeten/rueckmeldung-und-semesterbeitrag' },
    { title: 'TUM — Semesterbeitrag Campus München (€97)', url: 'https://www.tum.de/studium/studienfinanzierung/campus-muenchen-wzw-garching-und-tum-asia' },
    { title: 'Aufstiegs-BAföG — Wie wird gefördert?', url: 'https://www.aufstiegs-bafoeg.de/aufstiegsbafoeg/de/die-foerderung/wie-wird-gefoerdert/wie-wird-mit-dem-aufstiegs-bafoeg-gefoerdert.html' },
    { title: 'HWK Cottbus — Meisterausbildung Tischler 2026/27 (Teil I €2,200, Teil II €7,000)', url: 'https://medien.hwk-cottbus.de/kurse/Meisterausbildung-Tischler2026.pdf' },
    { title: 'Destatis — Statistischer Bericht Allgemeinbildende Schulen 2024/25 (Tab. 21111-04)', url: 'https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bildung-Forschung-Kultur/Schulen/Publikationen/Downloads-Schulen/statistischer-bericht-allgemeinbildende-schulen-2110100257005.xlsx' },
    { title: 'Universität Freiburg — Studiengebühren in Baden-Württemberg', url: 'https://www.uni-freiburg.de/studium/studiengebuehren/' },
  ],
};
