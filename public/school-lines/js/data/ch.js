// Switzerland — 26 cantonal systems, harmonised by the HarmoS concordat. The map shows the
// common structure (German-speaking cantons' names); notes call out cantonal variation.
export default {
  id: 'ch',
  iso3: 'CHE',
  region: 'Europe',
  currency: 'CHF',
  name: 'Switzerland',
  localName: 'Schweiz / Suisse / Svizzera',
  flag: '🇨🇭',
  summary:
    'Education is run by the 26 cantons. Compulsory school lasts 11 years from age 4: two years of ' +
    'Kindergarten, six of primary and three of lower secondary, where pupils are split into ' +
    'performance tracks. At about 15 two-thirds of young people start vocational education and ' +
    'training (VET): a paid apprenticeship in a company plus 1–2 days a week at a vocational ' +
    'school, ending in a federal certificate (EFZ or EBA). Around a fifth go to a Gymnasium for the ' +
    'Matura, which gives access to any university, including the two federal institutes of ' +
    'technology (ETH Zurich, EPFL). The Berufsmaturität opens the universities of applied ' +
    'sciences, and the Passerelle and higher vocational education keep routes open between the two ' +
    'worlds.',
  ageNote:
    'Under the HarmoS concordat (2009, joined by most cantons), children start Kindergarten at 4 if ' +
    'they turn 4 by 31 July. HarmoS counts school years 1H–11H including Kindergarten, so primary ' +
    'grades 1–6 are 3H–8H. Non-HarmoS cantons may require only one Kindergarten year. Ticino has 5 ' +
    'years of primary and 4 of lower secondary, and some cantons have a long Gymnasium starting ' +
    'after primary (e.g. Zurich, after an entrance exam).',
  compulsory: {
    from: 4,
    to: 15,
    label: 'Obligatorische Schule 4–15',
    note: '11 years: 2 Kindergarten years (compulsory in most cantons), 6 primary and 3 lower-secondary years.',
  },
  costNote:
    'Public schooling is free. Childcare (Kita) is mostly charged at full cost, with income-related ' +
    'municipal subsidies. Higher education charges modest fees (shown for Zurich institutions, ' +
    '2025/26); ETH tripled fees for students from abroad in autumn 2025.',
  lines: [
    { id: 'kita', name: 'Kita', color: '#7C8A93', lane: 0,
      desc: 'Day-care centres (Kindertagesstätte / crèche) and childminders. Use is voluntary and ' +
        'there is no legal right to a place; cantons and municipalities set subsidies.' },
    { id: 'kg', name: 'Kindergarten', color: '#E2557B', lane: 0, from: 'ch-kita',
      desc: 'Two-year Kindergarten (1H–2H), free and compulsory in most cantons; the first part of ' +
        'the HarmoS primary level.' },
    { id: 'prim', name: 'Primarschule', color: '#D2322D', lane: 0, from: 'ch-kg',
      desc: 'Primary school, 6 years (3H–8H), with a class teacher. Curricula are set by language ' +
        'region: Lehrplan 21, Plan d\'études romand and Piano di studio. A second national language ' +
        'and English start in primary.' },
    { id: 'sek', name: 'Sekundarstufe I', color: '#1E66C9', lane: 0, from: 'ch-p56',
      desc: 'Lower secondary, 3 years (9H–11H), split by performance into 2–4 tracks or levels ' +
        '(e.g. Sek A/B/C in Zurich, Bezirks-/Sekundar-/Realschule in Aargau). Pupils choose a ' +
        'career path in years 2–3 (Berufswahl).' },
    { id: 'gym', name: 'Gymnasium', color: '#7A3E9D', lane: -1, from: 'ch-s3',
      desc: 'Baccalaureate school (Maturitätsschule / gymnase / liceo), at least 4 years in total, ' +
        'ending with the gymnasiale Maturität. It gives general access to all universities. A new ' +
        'federal-cantonal Matura regulation (MAV/MAR, 2023) is being phased in.' },
    { id: 'uni', name: 'Universität / ETH', color: '#4B2470', lane: -1, from: 'ch-gym34',
      desc: 'Ten cantonal universities and the two federal institutes of technology (ETH Zurich, ' +
        'EPFL). Holders of a Swiss Matura can enrol without an entrance exam, except in medicine ' +
        '(aptitude test). Bachelor 3 years, master 1.5–2 years, doctorate 3–5 years.' },
    { id: 'fms', name: 'Fachmittelschule', color: '#C04BA5', lane: -2, from: 'ch-s3',
      desc: 'Upper-secondary specialised school (FMS / école de culture générale), 3 years, ' +
        'oriented towards health, social work, education or the arts; plus a one-year ' +
        'Fachmaturität.' },
    { id: 'ph', name: 'Pädagogische Hochschule', color: '#8E2C78', lane: -2, from: 'ch-fm',
      desc: 'Universities of teacher education (PH / HEP): bachelor for Kindergarten and primary ' +
        'teaching (3 years), master for lower-secondary teaching.' },
    { id: 'efz', name: 'Berufslehre EFZ', color: '#DD7710', lane: 1, from: 'ch-s3',
      desc: 'Vocational education and training (VET) with a Federal VET Diploma (EFZ / CFC): 3–4 ' +
        'years as a paid apprentice in a host company, 1–2 days a week at a vocational school and ' +
        'inter-company courses. About 250 occupations; the Berufsmaturität can be taken during the ' +
        'apprenticeship (BM1) or after it (BM2).' },
    { id: 'fh', name: 'Fachhochschule', color: '#A85A0A', lane: 1, from: 'ch-bm',
      desc: 'Universities of applied sciences (FH / HES): practice-oriented bachelor (3 years) and ' +
        'master (1.5–2 years) in engineering, business, health, social work, design and more. Entry ' +
        'with a Berufsmaturität in a related field; Matura holders need a year of work experience.' },
    { id: 'eba', name: 'Berufslehre EBA', color: '#2C9546', lane: 2, from: 'ch-s3',
      desc: 'Two-year VET with a Federal VET Certificate (EBA / AFP) for more practically minded ' +
        'learners; graduates can move into the second year of a related EFZ.' },
    { id: 'hbb', name: 'Höhere Berufsbildung', color: '#8A5A00', lane: 2, from: 'ch-efz',
      desc: 'Professional education and training (PET): federal professional exams (eidg. ' +
        'Fachausweis), advanced federal exams (eidg. Diplom, e.g. master craftsman) and colleges of ' +
        'higher education (höhere Fachschule, HF). About 29,000 qualifications a year.' },
    { id: 'bruecke', name: 'Brückenangebot', color: '#00A0A6', lane: 3, from: 'ch-s3',
      desc: 'Transitional one-year programmes (10th school year, pre-apprenticeship, integration ' +
        'courses) for young people without an apprenticeship or school place.' },
  ],
  stations: [
    { id: 'ch-kita', line: 'kita', name: 'Kita', local: 'Kindertagesstätte / crèche', ages: [1, 4], isced: 0,
      desc: 'Children can start from about 3 months, after 14 weeks of maternity leave. Many ' +
        'families combine part-time Kita with grandparents or playgroups (Spielgruppe).',
      cost: { amount: 28800, note: 'About: full-cost rate ~CHF 120/day in Zurich (2020 norm cost) for 5 days a week; subsidised families pay income-related tariffs, often far less.', estimate: true } },
    { id: 'ch-kg', line: 'kg', name: 'Kindergarten', local: 'Kindergarten (1H–2H)', ages: [4, 6], isced: 0,
      desc: 'Compulsory in most cantons from the year the child turns 4 by 31 July. Play-based ' +
        'learning, usually mornings plus some afternoons.',
      events: ['School entry (August)'],
      cost: { amount: 0, note: 'Free; lunch and day-school care (Tagesstruktur) are charged.', src: 8 } },
    { id: 'ch-p12', line: 'prim', name: 'Klasse 1–2', local: '3H–4H', ages: [6, 8], isced: 1,
      desc: 'Formal reading, writing and maths begin. Written reports, with number grades from ' +
        'year 2 or later depending on the canton.',
      cost: { amount: 0, note: 'Free in public schools, which about 95% of pupils attend.' } },
    { id: 'ch-p34', line: 'prim', name: 'Klasse 3–4', local: '5H–6H', ages: [8, 10], isced: 1,
      desc: 'A second national language (French, German or Italian) usually starts in year 3; ' +
        'English in year 3 or 5 depending on the canton.',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'ch-p56', line: 'prim', name: 'Klasse 5–6', local: '7H–8H', ages: [10, 12], isced: 1,
      desc: 'Transition to lower secondary: allocation to a track based on grades, teacher ' +
        'assessment and parental talks, in some cantons with a test. In Zurich, pupils can sit the ' +
        'Gymnasium entrance exam (Gymiprüfung) in March of year 6.',
      events: ['Track allocation (spring)', 'Gymiprüfung (Zurich, March)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'ch-s1', line: 'sek', name: 'Sek 1', local: '9H', ages: [12, 13], isced: 2,
      desc: 'Track-based teaching (e.g. Sek A, B, C), with changes between tracks possible.',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'ch-s2', line: 'sek', name: 'Sek 2', local: '10H', ages: [13, 14], isced: 2,
      desc: 'Career choice: tasters in companies (Schnupperlehren), and multicheck/aptitude ' +
        'tests used by employers. Short-course Gymnasium entrance exams in some cantons.',
      events: ['Schnupperlehren', 'Gymnasium entrance exams (some cantons)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'ch-s3', line: 'sek', name: 'Sek 3', local: '11H', ages: [14, 15], isced: 2,
      desc: 'Final compulsory year. Most apprenticeship contracts are signed during this year, ' +
        'often a year before the start in August.',
      exam: 'Abschlusszeugnis', events: ['Apprenticeship contract (autumn–spring)'],
      cost: { amount: 0, note: 'Free.' } },
    // Gymnasium and university
    { id: 'ch-gym12', line: 'gym', name: 'Gym 1–2', local: 'Gymnasium / gymnase', ages: [15, 17], isced: 3,
      desc: 'Broad curriculum of compulsory subjects, plus a chosen main subject (Schwerpunktfach) ' +
        'such as languages, physics and applied maths, biology and chemistry, economics or arts.',
      share: { pct: 21, of: 'of upper-secondary learners are in Gymnasium (2024/25)', src: 3 },
      cost: { amount: 0, note: 'Free in public schools; some cantons charge small material fees.' } },
    { id: 'ch-gym34', line: 'gym', name: 'Gym 3–4', ages: [17, 19], isced: 3,
      desc: 'Matura paper (Maturaarbeit) and written and oral exams in at least five subjects, ' +
        'usually in May–June of the final year.',
      exam: 'Gymnasiale Maturität', events: ['Maturaarbeit', 'Matura exams (May–June)'],
      cost: { amount: 0, note: 'Free; no exam fee at public schools.' } },
    { id: 'ch-ba', line: 'uni', name: 'Bachelor', ages: [19, 22], isced: 6,
      desc: 'Three years (180 ECTS). Many men do military service (recruit school) first.',
      exam: 'Bachelor', events: ['Medicine aptitude test (July)'],
      cost: { amount: 1558, note: 'University of Zurich: CHF 720 tuition + 59 fees per semester. ETH: CHF 730/semester; triple for most foreign students.', src: 5 } },
    { id: 'ch-ma', line: 'uni', name: 'Master', ages: [22, 24], isced: 7,
      desc: 'Usually 1.5–2 years (90–120 ECTS); the master is the standard degree for most ' +
        'university graduates.', exam: 'Master',
      cost: { amount: 1558, note: 'Same semester fees as the bachelor.', src: 5 } },
    { id: 'ch-phd', line: 'uni', name: 'Doktorat', ages: [24, 28], isced: 8,
      desc: 'Doctorate of 3–5 years, usually as a salaried research or teaching assistant.', exam: 'Dr. / PhD',
      cost: { amount: 418, note: 'University of Zurich: CHF 150 + 59 per semester for doctoral students.', src: 5 } },
    // Fachmittelschule and PH
    { id: 'ch-fms', line: 'fms', name: 'FMS', local: 'Fachmittelschule', ages: [15, 18], isced: 3,
      desc: 'General education with an occupational field, ending in the FMS certificate, which ' +
        'gives access to colleges of higher education (HF).',
      exam: 'Fachmittelschulausweis',
      share: { pct: 5, of: 'of upper-secondary learners are in a Fachmittelschule (2024/25)', src: 3 },
      cost: { amount: 0, note: 'Free in public schools.' } },
    { id: 'ch-fm', line: 'fms', name: 'Fachmatur', local: 'Fachmaturität', ages: [18, 19], isced: 3,
      desc: 'A year of placements and a written paper, or extra courses for the teaching ' +
        'Fachmaturität, giving access to related FH or PH programmes.',
      exam: 'Fachmaturität',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'ch-ph', line: 'ph', name: 'PH', local: 'Pädagogische Hochschule', ages: [19, 22], isced: 6,
      desc: 'Teacher-education bachelor (180 ECTS) with long school placements. Matura holders ' +
        'enter directly.', exam: 'Bachelor (Lehrdiplom)',
      cost: { amount: 1500, note: 'About; fees set by each institution. Swiss higher-education fees range CHF 1,000–4,000 a year.', src: 6 } },
    // VET
    { id: 'ch-efz', line: 'efz', name: 'Lehre EFZ', local: 'Berufslehre EFZ (3–4 Jahre)', ages: [15, 18.5], isced: 3,
      desc: 'The most common route. Popular occupations include commercial employee, health care ' +
        'assistant, IT specialist, retail and electrician. Ends with the final qualification ' +
        'procedure (Qualifikationsverfahren) in May–June.',
      exam: 'Eidg. Fähigkeitszeugnis (EFZ)', events: ['Qualifikationsverfahren (May–June)'],
      share: { pct: 58, of: 'of upper-secondary learners are in VET (EFZ or EBA, 2024/25); about two-thirds of young people take VET', src: 3 },
      cost: { amount: 0, note: 'Free vocational school; apprentices earn a monthly wage.', src: 1 } },
    { id: 'ch-bm', line: 'efz', name: 'BM2', ages: [18.5, 19.5], isced: 3,
      desc: 'Federal vocational baccalaureate: extended general education, one year full-time ' +
        'after the EFZ (BM2) or alongside the apprenticeship (BM1). Gives access to universities ' +
        'of applied sciences.',
      exam: 'Berufsmaturität',
      cost: { amount: 0, note: 'Free at public vocational schools in most cantons.' } },
    { id: 'ch-fhba', line: 'fh', name: 'FH Bachelor', local: 'Fachhochschule Bachelor', ages: [19.5, 22.5], isced: 6,
      desc: 'Three years full-time, or longer part-time while working.', exam: 'Bachelor FH',
      cost: { amount: 1500, note: 'About; fees set by each institution. Swiss higher-education fees range CHF 1,000–4,000 a year.', src: 6 } },
    { id: 'ch-fhma', line: 'fh', name: 'FH Master', local: 'Fachhochschule Master', ages: [22.5, 24], isced: 7,
      desc: 'Master at a university of applied sciences, mostly 1.5 years.', exam: 'Master FH',
      cost: { amount: 1500, note: 'About; fees vary by institution.', src: 6 } },
    { id: 'ch-eba', line: 'eba', name: 'Lehre EBA', local: 'Berufslehre EBA', ages: [15, 17], isced: 3,
      desc: 'Two-year apprenticeship with simplified requirements, e.g. retail assistant or ' +
        'kitchen assistant.',
      exam: 'Eidg. Berufsattest (EBA)',
      cost: { amount: 0, note: 'Free; apprentices earn a wage.', src: 1 } },
    { id: 'ch-hbb', line: 'hbb', name: 'Höhere BB', local: 'Höhere Berufsbildung (HF / eidg. Prüfungen)', ages: [21, 23.5], isced: 6,
      desc: 'Usually part-time alongside work, after an EFZ and several years of experience. ' +
        'Federal exams lead to the Fachausweis or Diplom; HF programmes take 2–3 years. The ' +
        'federal government refunds part of the fees for exam-preparation courses.',
      exam: 'Eidg. Fachausweis / Diplom / dipl. HF' },
    { id: 'ch-brucke', line: 'bruecke', name: 'Bridge', local: 'Brückenangebot / 10. Schuljahr', ages: [15, 16], isced: 2,
      desc: 'About 1 in 20 upper-secondary learners is in a transitional programme, most then ' +
        'start an apprenticeship.',
      cost: { amount: 0, note: 'Free or a small cantonal fee.' } },
  ],
  transfers: [
    { from: 'ch-bm', to: 'ch-ba', label: 'Passerelle → university', desc: 'Berufsmaturität holders can take a one-year Passerelle exam that gives access to all universities.' },
    { from: 'ch-gym34', to: 'ch-fhba', label: 'Matura → FH', desc: 'Matura holders can study at an FH after a year of work experience.' },
    { from: 'ch-gym34', to: 'ch-ph', label: 'Matura → PH', desc: 'The Matura gives direct access to teacher education.' },
    { from: 'ch-eba', to: 'ch-efz', label: 'EBA → EFZ', desc: 'EBA graduates can usually enter the second year of a related EFZ apprenticeship.' },
    { from: 'ch-brucke', to: 'ch-efz', label: 'Bridge → apprenticeship', desc: 'Most transitional-year learners go on to an apprenticeship.' },
    { from: 'ch-fhba', to: 'ch-ma', label: 'FH → university master', desc: 'FH bachelors can enter related university masters, often with extra credits.' },
    { from: 'ch-hbb', to: 'ch-fhba', label: 'HF → FH', desc: 'HF graduates may get credit towards an FH bachelor.' },
  ],
  sources: [
    { title: 'Eurydice — Switzerland overview', url: 'https://eurydice.eacea.ec.europa.eu/eurypedia/switzerland/overview' },
    { title: 'SBFI/SERI — Berufliche Grundbildung (EFZ, EBA, Berufsmaturität)', url: 'https://www.sbfi.admin.ch/de/berufliche-grundbildung' },
    { title: 'SBFI/SERI — Gymnasiale Maturität', url: 'https://www.sbfi.admin.ch/de/gymnasiale-maturitaet' },
    { title: 'BFS/FSO — Sekundarstufe II: Lernende nach Bildungstyp (2024/25)', url: 'https://www.pxweb.bfs.admin.ch/pxweb/de/px-x-1502020000_101/px-x-1502020000_101/px-x-1502020000_101.px' },
    { title: 'ETH Zurich — Tuition fees (from autumn 2025)', url: 'https://ethz.ch/students/en/studies/financial/tuition-fees.html' },
    { title: 'University of Zurich — Semester fees', url: 'https://www.uzh.ch/de/studies/application/fees.html' },
    { title: 'Eurydice — Switzerland: Higher education funding', url: 'https://eurydice.eacea.ec.europa.eu/eurypedia/switzerland/higher-education-funding' },
    { title: 'SODK / Ecoplan — Familienergänzende Betreuung in den Kantonen (2020)', url: 'https://ch-sodk.s3.amazonaws.com/media/files/2c6b2e70/6a3d/4446/bde3/244ff63cb9c7/2020.11.16_Ecoplan_FEB_de_corrigé_def.pdf' },
    { title: 'Eurydice — Switzerland: Early childhood education and care', url: 'https://eurydice.eacea.ec.europa.eu/eurypedia/switzerland/early-childhood-education-and-care' },
    { title: 'SBFI/SERI — Höhere Berufsbildung', url: 'https://www.sbfi.admin.ch/de/hoehere-berufsbildung' },
  ],
};
