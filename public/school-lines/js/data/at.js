// Austria — school education is federal law (BMBWF), run with the nine Länder; kindergartens are a Land matter.
export default {
  id: 'at',
  iso3: 'AUT',
  region: 'Europe',
  currency: 'EUR',
  name: 'Austria',
  localName: 'Österreich',
  flag: '🇦🇹',
  summary:
    'A compulsory free kindergarten year at 5, four years of Volksschule, then a split at age 10 between ' +
    'the Mittelschule (about 61% of pupils) and the academic AHS (about 34%). At 14 the routes fan out: ' +
    'AHS Oberstufe and the five-year BHS (HTL, HAK, HLW and others) both end in the Matura (the BHS with ' +
    'a vocational diploma too), the BMS gives a vocational qualification, and the one-year Polytechnische ' +
    'Schule prepares for an apprenticeship (Lehre) with part-time Berufsschule. Young people must stay in ' +
    'education or training until 18. Public universities are free for EU students within the standard ' +
    'study period; Fachhochschulen usually charge a modest fee.',
  ageNote:
    'Children who turn 6 by 31 August start Volksschule on 1 September; children born between 1 September ' +
    'and 1 March may start early if school-ready. School starts on the first Monday of September in ' +
    'Vienna, Lower Austria and Burgenland and a week later elsewhere. Schulstufen are numbered 1–13 ' +
    'continuously (AHS classes 1–8 = Schulstufen 5–12).',
  compulsory: {
    from: 5,
    to: 15,
    label: 'Kindergarten at 5, Schulpflicht 6–15',
    note:
      'The last kindergarten year is compulsory for children who turn 5 by 31 August (since 2009/10). ' +
      'Schulpflicht then lasts nine school years, usually ending after Schulstufe 9 (the Polytechnische ' +
      'Schule or the first year of an upper-secondary school).',
    extendedTo: 18,
    extendedLabel: 'Ausbildungspflicht to 18',
    extendedNote:
      'Since 2016/17, young people under 18 who have finished compulsory school must be in school, an ' +
      'apprenticeship or another recognised training or preparation programme.',
  },
  costNote:
    'Public schools charge no tuition (families pay for trips, some materials and, after compulsory school, ' +
    'part of the textbook deductible). Kindergarten fees are set by each Land; the compulsory year is free for ' +
    '20 hours a week. Higher-education figures are 2025/26 semester fees × 2.',
  lines: [
    { id: 'kiga', name: 'Kindergarten', color: '#7C8A93', lane: 0,
      desc: 'Elementary education: Krippe (under 3) and Kindergarten (3–6). Run and funded by the Länder ' +
        'and municipalities, so fees and opening hours vary widely; Vienna and several other Länder offer ' +
        'free places. The final year is compulsory.' },
    { id: 'vs', name: 'Volksschule', color: '#D2322D', lane: 0, from: 'at-kiga5',
      desc: 'Primary school, Schulstufen 1–4. Children who are of school age but not yet school-ready attend ' +
        'a Vorschulstufe. Pupils with insufficient German attend Deutschförderklassen or -kurse.' },
    { id: 'ahs', name: 'AHS', color: '#7A3E9D', lane: -2, from: 'at-vs4',
      desc: 'Allgemeinbildende höhere Schule (Gymnasium, Realgymnasium, Wirtschaftskundliches Realgymnasium): ' +
        'four-year Unterstufe and four-year Oberstufe, ending in the Reifeprüfung (Matura). The ' +
        'Oberstufenrealgymnasium (ORG) offers only the upper four years.' },
    { id: 'uni', name: 'Universität', color: '#4B2470', lane: -2, from: 'at-ahs8',
      desc: 'Public universities: bachelor (6–8 semesters), master (2–4 semesters) and doctorate (at least ' +
        '6 semesters); some fields (e.g. law, theology) keep the Diplomstudium. Most programmes are open ' +
        'access; medicine, psychology and some others have entrance tests (e.g. MedAT in July).' },
    { id: 'bhs', name: 'BHS', color: '#1E66C9', lane: -1, from: 'at-ms34',
      desc: 'Berufsbildende höhere Schule, 5 years from Schulstufe 9: HTL (engineering), HAK (business), HLW ' +
        '(economic and social professions), tourism, fashion, agriculture, BAfEP (kindergarten teaching) and ' +
        'more. Ends in the Reife- und Diplomprüfung: a full Matura plus a professional qualification.' },
    { id: 'fh', name: 'Fachhochschule', color: '#174E9C', lane: -1, from: 'at-bhs45',
      desc: 'Universities of applied sciences: 21 Fachhochschulen with about 65,000 students (2025). ' +
        'Bachelor (6 semesters) and master (2–4 semesters) with fixed places, selective admission, ' +
        'compulsory internships and part-time (berufsbegleitend) options. A third of FH entrants come from a BHS.' },
    { id: 'ms', name: 'Mittelschule', color: '#DD7710', lane: 0, from: 'at-vs4',
      desc: 'Lower secondary school for 10–14-year-olds (called Neue Mittelschule until 2020). From the second ' +
        'year, German, maths and the foreign language are graded at two levels, “Standard” and “Standard AHS”; ' +
        'good grades at Standard AHS allow transfer to an AHS or BHS.' },
    { id: 'pts', name: 'Polytechnische', color: '#B8860B', lane: 0, from: 'at-ms34',
      desc: 'Polytechnische Schule: a one-year school for Schulstufe 9 that completes compulsory schooling and ' +
        'prepares for an apprenticeship, with vocational fields such as metal, electrical, construction, ' +
        'wood, retail/office, health/beauty/social and tourism.' },
    { id: 'lehre', name: 'Lehre', color: '#2C9546', lane: 0, from: 'at-pts',
      desc: 'Dual apprenticeship in one of more than 200 trades, usually 3 years (2–4): paid training in a ' +
        'company plus Berufsschule (one or two days a week or blocks of several weeks). Ends with the ' +
        'Lehrabschlussprüfung; “Lehre mit Matura” lets apprentices take the Berufsreifeprüfung for free.' },
    { id: 'bms', name: 'BMS', color: '#00A0A6', lane: 1, from: 'at-ms34',
      desc: 'Berufsbildende mittlere Schule (Fachschule), 1–4 years full-time from Schulstufe 9. Three- and ' +
        'four-year forms end in a final exam and a full vocational qualification; one- and two-year forms ' +
        'are often used to finish compulsory schooling before an apprenticeship.' },
  ],
  stations: [
    { id: 'at-krippe', line: 'kiga', name: 'Krippe', local: 'Kinderkrippe / Kleinkindbetreuung', ages: [1, 3], isced: 0,
      desc: 'Childcare for under-3s. Provision and fees depend on the Land: Vienna offers free (beitragsfrei) ' +
        'places in public and subsidised settings, others charge income-related fees.',
      cost: { amount: 0, note: 'Free in Vienna and some other Länder; elsewhere income-related fees (no national figure).', src: 8 } },
    { id: 'at-kiga', line: 'kiga', name: 'Kindergarten', ages: [3, 5], isced: 0,
      desc: 'Kindergarten from 3. In 2024, 89.1% of 3-year-olds and 95.9% of 4-year-olds attended. Language ' +
        'levels are assessed with a standardised tool, and children with low German get early language support.',
      cost: { amount: 0, note: 'Half-day places free in most Länder; full-day and meal fees vary by Land.', src: 8 },
      share: { pct: 95.9, of: 'of 4-year-olds attend a childcare institution (2024)', src: 0 } },
    { id: 'at-kiga5', line: 'kiga', name: 'Kiga 5–6', local: 'Verpflichtendes Kindergartenjahr', ages: [5, 6], isced: 0,
      desc: 'Compulsory kindergarten year for children who turn 5 by 31 August: at least 20 hours on four ' +
        'days a week. A second compulsory year is in the 2025–2029 government programme but not yet law. The school-readiness check (Schuleinschreibung) takes place in the winter before school.',
      events: ['Kindergarten attendance compulsory (since 2009/10)', 'School registration and readiness check (winter)'],
      cost: { amount: 0, note: 'Free for 20 hours a week in the compulsory year.', src: 8 },
      share: { pct: 97.9, of: 'of 5-year-olds attend a childcare institution (2024)', src: 0 } },
    // Volksschule
    { id: 'at-vs13', line: 'vs', name: 'VS 1–3', local: '1.–3. Schulstufe', ages: [6, 9], isced: 1,
      desc: 'Class-teacher school. Schools may use alternative (descriptive) assessment until the middle of ' +
        'year 2; from the end of year 2 every child gets number grades (1 Sehr gut … 5 Nicht genügend). ' +
        'National iKMPLUS competence tests start in year 3.',
      events: ['iKMPLUS tests (Schulstufe 3)'],
      cost: { amount: 0, note: 'Free; families pay for trips and some materials.' } },
    { id: 'at-vs4', line: 'vs', name: 'VS 4', ages: [9, 10], isced: 1,
      desc: 'Final primary year and the first big sorting point. Entry to an AHS requires “Sehr gut” or “Gut” ' +
        'in German and maths (a “Befriedigend” can be overruled by the class conference), otherwise an ' +
        'entrance exam; all other pupils go to the Mittelschule. Registration for secondary is in February.',
      exam: 'Jahreszeugnis (AHS-Reife)',
      events: ['iKMPLUS tests (Schulstufe 4)', 'Semester report and secondary registration (February)'],
      cost: { amount: 0, note: 'Free.' } },
    // AHS
    { id: 'at-ahsu', line: 'ahs', name: 'Unterstufe', local: 'AHS 1.–4. Klasse', ages: [10, 14], isced: 2,
      desc: 'Lower AHS. Latin or a second living language usually starts in the 3rd class (Gymnasium). ' +
        'Pupils who fail may move to a Mittelschule.',
      events: ['iKMPLUS tests (Schulstufen 7 and 8)'],
      cost: { amount: 0, note: 'No tuition; small textbook deductible and trip costs.' },
      share: { pct: 34.0, of: 'of pupils in Schulstufe 5 attend an AHS (2024/25)', src: 0 } },
    { id: 'at-ahso', line: 'ahs', name: 'Oberstufe', local: 'AHS 5.–7. Klasse', ages: [14, 17], isced: 3,
      desc: 'Upper AHS, with chosen focus subjects. Many schools use the semester-based new Oberstufe (NOST).',
      cost: { amount: 0, note: 'No tuition.' },
      share: { pct: 28.0, of: 'of pupils in Schulstufe 9 attend an AHS (2024/25)', src: 0 } },
    { id: 'at-ahs8', line: 'ahs', name: 'AHS 8', ages: [17, 18], isced: 3,
      desc: 'Standardised Reifeprüfung (Zentralmatura): written exams set nationally in early May, oral exams ' +
        'in June. Since 2025 the pre-scientific paper is optional (abschließende Arbeit); about 46% chose it in 2025.',
      exam: 'Reifeprüfung (Matura)', events: ['Written Matura exams (early May)', 'Oral exams (June)'],
      cost: { amount: 0, note: 'No tuition.' } },
    // Universität
    { id: 'at-ba', line: 'uni', name: 'Bachelor', ages: [18, 21], isced: 6,
      desc: 'Usually 6 semesters (180 ECTS). The Matura, Berufsreifeprüfung or Studienberechtigungsprüfung ' +
        'gives access. Tuition is free for EU/EEA students for the standard duration plus two tolerance ' +
        'semesters; after that €363.36 a semester. Non-EU students pay €726.72 a semester.',
      exam: 'Bachelor (BA/BSc)',
      cost: { amount: 52, note: 'ÖH student-union fee €26.20 per semester; tuition €363.36/semester only beyond the standard duration.', src: 9 } },
    { id: 'at-ma', line: 'uni', name: 'Master', ages: [21, 23], isced: 7,
      desc: 'Usually 4 semesters (120 ECTS); Diplomstudien (e.g. law, medicine) lead directly to ISCED 7.',
      exam: 'Master / Diplom (Mag., Dipl.-Ing., Dr. med.)',
      cost: { amount: 52, note: 'ÖH fee only within the standard duration plus 2 tolerance semesters.', src: 9 } },
    { id: 'at-phd', line: 'uni', name: 'Doktorat', ages: [23, 26], isced: 8,
      desc: 'Doctoral study of at least 6 semesters, often as a university research assistant (prae-doc).',
      exam: 'Dr. / PhD',
      cost: { amount: 52, note: 'ÖH fee; tuition only after 6 + 2 semesters.', src: 9 } },
    // BHS
    { id: 'at-bhs13', line: 'bhs', name: 'BHS 1–3', local: 'Jahrgänge 1–3 (HTL, HAK, HLW…)', ages: [14, 17], isced: 3,
      desc: 'Broad general education plus a specialism; HTLs and HLWs include compulsory summer work ' +
        'placements. Some BHS have aptitude tests. Drop-out is high: about one in three entrants leaves ' +
        'without the diploma.',
      cost: { amount: 0, note: 'No tuition; workshop materials and placements may cost extra.' },
      share: { pct: 36.6, of: 'of pupils in Schulstufe 9 attend a BHS (2024/25)', src: 0 } },
    { id: 'at-bhs45', line: 'bhs', name: 'BHS 4–5', local: 'Jahrgänge 4–5', ages: [17, 19], isced: 5,
      desc: 'The last two years are classed as short-cycle tertiary (ISCED 5). The Reife- und Diplomprüfung ' +
        'combines the standardised Matura with a diploma project; HTL graduates can later earn the ' +
        '“Ingenieur” title after relevant work experience.',
      exam: 'Reife- und Diplomprüfung', events: ['Written exams (May)', 'Diploma project and oral exams (June)'],
      cost: { amount: 0, note: 'No tuition.' } },
    // Fachhochschule
    { id: 'at-fhba', line: 'fh', name: 'FH Bachelor', ages: [19, 22], isced: 6,
      desc: 'Six semesters with a compulsory internship. Places are limited and allocated by an admission ' +
        'procedure (tests and interviews). About 76% of full-time bachelor students finish within 8 semesters.',
      exam: 'Bachelor (BA/BSc)',
      cost: { amount: 779, note: 'Most FHs charge €363.36 per semester, plus the ÖH fee of €26.20 per semester.', src: 10 } },
    { id: 'at-fhma', line: 'fh', name: 'FH Master', ages: [22, 24], isced: 7,
      desc: 'Two to four semesters, often part-time alongside work. An FH master gives access to doctoral study at a university.',
      exam: 'Master (MA/MSc)',
      cost: { amount: 779, note: 'Most FHs charge €363.36 per semester plus the ÖH fee.', src: 10 } },
    // Mittelschule
    { id: 'at-ms12', line: 'ms', name: 'MS 1–2', local: '5.–6. Schulstufe', ages: [10, 12], isced: 2,
      desc: 'Common lower-secondary school, often taught with team teaching. Two performance levels in core ' +
        'subjects begin in the second year.',
      cost: { amount: 0, note: 'Free.' },
      share: { pct: 61.3, of: 'of pupils in Schulstufe 5 attend a Mittelschule (2024/25)', src: 0 } },
    { id: 'at-ms34', line: 'ms', name: 'MS 3–4', ages: [12, 14], isced: 2,
      desc: 'Careers guidance (Bildungs- und Berufsorientierung) is a subject from year 3; many schools add ' +
        'taster days in companies. In 2024 a third of Mittelschule leavers moved to a BHS, 22% to a ' +
        'Polytechnische Schule and 18% to a BMS.',
      exam: 'Abschlusszeugnis (Standard / Standard AHS)', events: ['iKMPLUS tests (Schulstufen 7 and 8)', 'Choice of upper-secondary school (February)'],
      cost: { amount: 0, note: 'Free.' } },
    // Polytechnische Schule
    { id: 'at-pts', line: 'pts', name: 'Poly', local: 'Polytechnische Schule (9. Schulstufe)', ages: [14, 15], isced: 3,
      desc: 'One year of career orientation, a chosen vocational field and taster placements in companies; ' +
        'most pupils then sign an apprenticeship contract.',
      exam: 'Abschluss der Schulpflicht',
      cost: { amount: 0, note: 'Free.' },
      share: { pct: 19.2, of: 'of pupils in Schulstufe 9 attend a Polytechnische Schule or similar (2024/25)', src: 0 } },
    // Lehre
    { id: 'at-lehre', line: 'lehre', name: 'Lehre', local: 'Lehrling + Berufsschule', ages: [15, 18], isced: 3,
      desc: 'Apprentices are employees paid an apprentice wage set by collective agreement. Common trades ' +
        'include retail, metal technology, electrical engineering, office work and hairdressing. Ends with ' +
        'the Lehrabschlussprüfung before the chamber; with Lehre mit Matura, apprentices can also earn the ' +
        'Berufsreifeprüfung (final part after age 19).',
      exam: 'Lehrabschlussprüfung',
      cost: { amount: 0, note: 'No fees; apprentices earn a wage.' },
      share: { pct: 34.4, of: 'of upper-secondary students are in combined school and work-based (apprenticeship) programmes (2023)', src: 0 } },
    { id: 'at-fach', line: 'lehre', name: 'Fachkraft', local: 'Facharbeiter:in / Geselle', ages: [18, 21], isced: 3,
      desc: 'Skilled work. Further training can lead to the Werkmeister or Meister exam, or via the ' +
        'Berufsreifeprüfung to higher education.',
      cost: { amount: 0, note: 'Working.' } },
    { id: 'at-meister', line: 'lehre', name: 'Meister', local: 'Meister- / Werkmeisterprüfung', ages: [21, 23], isced: 5,
      desc: 'Master craftsperson qualification, placed at level 6 of the Austrian qualifications framework ' +
        '(NQR), like a bachelor. It allows running a regulated trade and training apprentices.',
      exam: 'Meisterprüfung (NQR 6)',
      cost: { amount: 0, note: 'Exam fees for 1st and 2nd attempts paid by the federal state since July 2023; optional prep courses (e.g. WIFI) cost extra.', src: 11 } },
    // BMS
    { id: 'at-bms', line: 'bms', name: 'Fachschule', local: 'BMS, 1–4 Jahre', ages: [14, 17], isced: 3,
      desc: 'Vocational school such as a Handelsschule, technical Fachschule or social-care school. Graduates ' +
        'of 3–4-year forms can do a 2–3-year Aufbaulehrgang to reach the Reife- und Diplomprüfung.',
      exam: 'Abschlussprüfung (Fachschulabschluss)',
      cost: { amount: 0, note: 'No tuition.' },
      share: { pct: 16.2, of: 'of pupils in Schulstufe 9 attend a BMS (2024/25)', src: 0 } },
  ],
  transfers: [
    { from: 'at-ms34', to: 'at-ahso', label: 'Mittelschule → AHS Oberstufe',
      desc: 'With good grades at Standard AHS level pupils can enter the AHS Oberstufe or an ORG.' },
    { from: 'at-ahsu', to: 'at-bhs13', label: 'AHS Unterstufe → BHS',
      desc: 'About a third of AHS Unterstufe leavers switch to a BHS at 14.' },
    { from: 'at-bms', to: 'at-bhs45', label: 'BMS → Aufbaulehrgang',
      desc: 'A completed 3–4-year BMS gives access to an Aufbaulehrgang leading to the Reife- und Diplomprüfung.' },
    { from: 'at-bms', to: 'at-lehre', label: 'BMS → Lehre',
      desc: 'Many pupils use one BMS year to complete compulsory schooling, then start an apprenticeship.' },
    { from: 'at-lehre', to: 'at-fhba', label: 'Lehre mit Matura → FH',
      desc: 'The Berufsreifeprüfung gives general access to universities and FHs; FHs also admit some applicants on professional qualifications.' },
    { from: 'at-ahs8', to: 'at-fhba', label: 'Matura → FH',
      desc: 'About 31% of FH entrants come from an AHS.' },
    { from: 'at-bhs45', to: 'at-ba', label: 'BHS → Universität',
      desc: 'The Reife- und Diplomprüfung gives full university access.' },
    { from: 'at-fhba', to: 'at-ma', label: 'FH bachelor → university master',
      desc: 'FH bachelors can move on to related university masters.' },
  ],
  sources: [
    { title: 'Statistik Austria — Bildung in Zahlen 2024/25', url: 'https://www.statistik.at/fileadmin/publications/BiZ-2024-25.pdf' },
    { title: 'BMBWF — Volksschule', url: 'https://www.bmb.gv.at/Themen/schule/schulsystem/sa/vs.html' },
    { title: 'BMBWF — Mittelschule', url: 'https://www.bmb.gv.at/Themen/schule/schulsystem/sa/ms.html' },
    { title: 'BMBWF — Allgemeinbildende höhere Schule', url: 'https://www.bmb.gv.at/Themen/schule/schulsystem/sa/ahs.html' },
    { title: 'BMBWF — Berufsbildende mittlere und höhere Schulen', url: 'https://www.bmb.gv.at/Themen/schule/schulsystem/sa/bmhs.html' },
    { title: 'BMBWF — Berufsschule', url: 'https://www.bmb.gv.at/Themen/schule/schulsystem/sa/bs.html' },
    { title: 'BMBWF — Polytechnische Schule', url: 'https://www.bmb.gv.at/Themen/schule/schulsystem/sa/pts.html' },
    { title: 'AusBildung bis 18 — Ausbildungspflicht', url: 'https://www.ausbildungbis18.at/' },
    { title: 'Eurydice — Austria: early childhood education and care', url: 'https://eurydice.eacea.ec.europa.eu/national-education-systems/austria/early-childhood-education-and-care' },
    { title: 'Universität Wien — Höhe des Studien-/ÖH-Beitrags', url: 'https://studieren.univie.ac.at/studieren-und-lernen/finanzielles/studien-/oeh-beitrag/hoehe-des-studien-/oeh-beitrags' },
    { title: 'FHK — Fachhochschulen: Zahlen, Daten, Fakten (September 2026)', url: 'https://fhk.ac.at/presse/zahlen-daten-fakten/' },
    { title: 'WKO — Prüfungsgebühren Meister- und Befähigungsprüfung (Gebührenbefreiung)', url: 'https://www.wko.at/service/bildung-lehre/pruefungsgebuehren-meister-befaehigungspruefung.html' },
  ],
};
