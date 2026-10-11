// Belgium — shown as the Flemish Community (Flanders). Education is a community matter, so the
// French- and German-speaking communities run their own, different systems (see summary).
export default {
  id: 'be',
  iso3: 'BEL',
  region: 'Europe',
  currency: 'EUR',
  name: 'Belgium (Flanders)',
  localName: 'België — Vlaanderen',
  flag: '🇧🇪',
  summary:
    'Kleuteronderwijs from age 2½ (compulsory from 5 since 2020), then six years of lager onderwijs ' +
    'and six years of secundair onderwijs. Secondary starts with a two-year first grade in an A stream ' +
    '(most pupils) or a B stream (pupils without the primary certificate). From age 14 pupils choose a ' +
    'study programme by finality: doorstroom (towards higher education, mostly former ASO), dubbele ' +
    'finaliteit (higher education or work, mostly former TSO/KSO) or arbeidsmarkt (towards work, former ' +
    'BSO), with duaal leren as a work-based variant. Higher education offers graduaat (HBO5), ' +
    'professional and academic bachelors, masters and doctorates at a regulated fee of about €1,200 a ' +
    'year. The French Community has a different structure: its tronc commun reform gives all pupils a ' +
    'common curriculum from kindergarten into lower secondary, reaching the first year of secondary (S1) in September 2026.',
  ageNote:
    'Children enter primary school in the calendar year they turn 6 (school year starts 1 September), so ' +
    'ages run by birth year. Kleuters may start at 2½ on fixed entry dates (instapdata) during the year. ' +
    'Repeating a year (zittenblijven) is common in secondary, so many pupils are a year older than shown. ' +
    'The map shows the modernised secondary structure, phased in from 2019/20 (first year) and complete in all years by 2025/26.',
  compulsory: {
    from: 5,
    to: 18,
    label: 'Leerplicht 5–18',
    note:
      'Compulsory education starts on 1 September of the year a child turns 5 (lowered from 6 in ' +
      'September 2020; a 5-year-old must attend kleuterschool at least 290 half-days). It ends at 18 or ' +
      'earlier with a secondary diploma. Full-time attendance is required until about 15–16; after that, ' +
      'part-time learning such as duaal leren can fulfil the obligation.',
  },
  costNote:
    'School education is tuition-free; primary schools may charge for activities only up to a capped ' +
    '“maximumfactuur”. Higher-education figures are the regulated studiegeld for 60 credits in 2026/27; ' +
    'grant holders pay far less. Childcare uses an income-related daily rate.',
  lines: [
    { id: 'opvang', name: 'Kinderopvang', color: '#7C8A93', lane: 0,
      desc: 'Childcare for babies and toddlers (kinderdagverblijf, onthaalouder), supervised by the agency ' +
        'Opgroeien. Most subsidised places charge an income-related daily rate (inkomenstarief). Not part ' +
        'of the education system and not compulsory.' },
    { id: 'kleuter', name: 'Kleuteronderwijs', color: '#E2557B', lane: 0, from: 'be-opvang',
      desc: 'Pre-primary school (kleuterschool), from 2½ to 6, usually in the same basisschool as primary. ' +
        'Free of tuition. Compulsory from age 5 since 1 September 2020.' },
    { id: 'lager', name: 'Lager onderwijs', color: '#D2322D', lane: 0, from: 'be-k3',
      desc: 'Primary school, leerjaar 1 to 6 (ages 6–12), ending with the getuigschrift basisonderwijs. ' +
        'Pupils take the central Vlaamse toetsen in Dutch and maths in leerjaar 4 and 6.' },
    { id: 'grA', name: '1st grade A', color: '#1E66C9', lane: 0, from: 'be-l6',
      desc: 'Eerste graad, A stream (1A and 2A): a broad common curriculum for pupils who hold the ' +
        'getuigschrift basisonderwijs, with optional basic options (basisopties) in year 2.' },
    { id: 'door', name: 'Doorstroom', color: '#7A3E9D', lane: -2, from: 'be-2a',
      desc: 'Doorstroomfinaliteit, years 3–6: programmes that prepare for higher education, mainly the former ' +
        'ASO (e.g. Latijn, Economische wetenschappen, Natuurwetenschappen) plus some former TSO/KSO ' +
        'programmes. Ends in the diploma secundair onderwijs.' },
    { id: 'uni', name: 'Universiteit', color: '#4B2470', lane: -2, from: 'be-door3',
      desc: 'Academic programmes at universities (and some at hogescholen): academic bachelor (180 credits), ' +
        'master (60–120 credits) and doctorate. Entry is open with any secondary diploma, except medicine, ' +
        'dentistry and the arts, which have entrance exams.' },
    { id: 'hs', name: 'Hogeschool', color: '#174E9C', lane: -1, from: 'be-dub3',
      desc: 'Universities of applied sciences (hogescholen): professional bachelors (180 credits, 3 years) ' +
        'such as nursing, teacher training or applied IT, and the bachelor-na-bachelor (banaba).' },
    { id: 'dub', name: 'Dubbele finaliteit', color: '#00A0A6', lane: 0, from: 'be-2a',
      desc: 'Dubbele finaliteit, years 3–6: programmes that prepare both for higher education and for a job, ' +
        'mainly former TSO and KSO (e.g. Bouwtechnieken, Elektromechanische technieken, Biotechnologische ' +
        'STEM-wetenschappen). A Se-n-Se year (secundair-na-secundair) can follow.' },
    { id: 'grB', name: '1st grade B', color: '#DD7710', lane: 1, from: 'be-l6',
      desc: 'Eerste graad, B stream (1B and 2B): smaller groups and a more practical approach for pupils ' +
        'without the primary certificate. Pupils can move up to 1A or 2A; most continue in the arbeidsmarkt finality.' },
    { id: 'arb', name: 'Arbeidsmarkt', color: '#2C9546', lane: 1, from: 'be-2b',
      desc: 'Arbeidsmarktfinaliteit (former BSO): vocational programmes leading to a professional ' +
        'qualification, such as Haarverzorging, Bouw, Logistiek or Zorg. The diploma secundair onderwijs ' +
        'normally needs a 7th year.' },
    { id: 'duaal', name: 'Duaal leren', color: '#B8860B', lane: 2, from: 'be-2b',
      desc: 'Duaal leren: a work-based variant of arbeidsmarkt and dubbele finaliteit programmes, combining ' +
        'school with paid learning on the job. Since 2025/26 it fully replaces the old “leren en werken” ' +
        'system (part-time vocational education and Syntra apprenticeships).' },
    { id: 'hbo5', name: 'Graduaat', color: '#8A5A00', lane: 2, from: 'be-ar7',
      desc: 'Graduaatsopleidingen (HBO5): short-cycle higher vocational programmes of 90–120 credits at ' +
        'hogescholen, since 2019 (previously run by adult-education centres).' },
  ],
  stations: [
    { id: 'be-opvang', line: 'opvang', name: 'Kinderopvang', local: 'Kinderdagverblijf / onthaalouder', ages: [0, 2.5], isced: 0,
      desc: 'Childcare from a few months old. In September 2025, 51.9% of children aged 2 months to 3 years ' +
        'in the Flemish Region used formal childcare. Parents of subsidised places pay an income-related ' +
        'daily rate (minimum €6.68, maximum €37.06 a day in 2026).',
      cost: { amount: 3960, note: 'About €18 a day on average (2025 income-related rate) × ~220 days; ranges from ~€6.70 to ~€37 a day.', src: 2 },
      share: { pct: 51.9, of: 'of children aged 2 months–3 years in formal childcare (Flemish Region, Sept 2025)', src: 2 } },
    { id: 'be-k12', line: 'kleuter', name: 'Kleuter 1–2', local: 'Peuter- en kleuterklassen', ages: [2.5, 5], isced: 0,
      desc: 'Kleuterschool can start from 2½ on fixed entry days (instapdata) after holidays. Play-based ' +
        'learning towards developmental goals; participation is very high although it is voluntary before 5.',
      cost: { amount: 0, note: 'No tuition. Activity charges capped by the maximumfactuur (about €55 a year for kleuters in 2025/26).', src: 7 } },
    { id: 'be-k3', line: 'kleuter', name: 'Kleuter 3', ages: [5, 6], isced: 0,
      desc: 'Final kleuter year. Compulsory since 1 September 2020: the child must attend at least 290 ' +
        'half-days. Schools screen Dutch language skills (KOALA test) and can add intensive language support.',
      events: ['Leerplicht starts (1 September of the year the child turns 5)', 'Dutch language screening (KOALA)'],
      cost: { amount: 0, note: 'No tuition; capped activity charges (maximumfactuur).', src: 7 } },
    // Lager onderwijs
    { id: 'be-l13', line: 'lager', name: 'Leerjaar 1–3', ages: [6, 9], isced: 1,
      desc: 'Reading, writing and arithmetic; a class teacher teaches most subjects. A class council ' +
        'decides on promotion, and repeating a year is possible.',
      cost: { amount: 0, note: 'No tuition. Activities capped at about €110 a year (scherpe maximumfactuur 2025/26).', src: 7 } },
    { id: 'be-l4', line: 'lager', name: 'Leerjaar 4', ages: [9, 10], isced: 1,
      desc: 'First Vlaamse toets: central, standardised tests in Dutch (reading comprehension) and maths, ' +
        'taken in two sessions. Results are used for school quality, not for pupils\' grades.',
      events: ['Vlaamse toetsen (24 April – 13 May 2026)'],
      cost: { amount: 0, note: 'No tuition; capped activity charges (maximumfactuur).', src: 7 } },
    { id: 'be-l5', line: 'lager', name: 'Leerjaar 5', ages: [10, 11], isced: 1,
      desc: 'Upper primary: French as a second language, and more world-orientation subjects (wereldoriëntatie).',
      cost: { amount: 0, note: 'No tuition; capped activity charges (maximumfactuur).', src: 7 } },
    { id: 'be-l6', line: 'lager', name: 'Leerjaar 6', ages: [11, 12], isced: 1,
      desc: 'Final year. Pupils sit the Vlaamse toetsen in Dutch and maths. The class council awards the ' +
        'getuigschrift basisonderwijs, which gives access to the A stream of secondary; pupils without it ' +
        'go to the B stream. Secondary enrolment runs through central registration systems in cities.',
      exam: 'Getuigschrift basisonderwijs',
      events: ['Vlaamse toetsen (spring)', 'Secondary-school registration (spring)'],
      cost: { amount: 0, note: 'No tuition. Multi-day trips capped at €550 over the whole of primary (2025/26).', src: 7 } },
    // Eerste graad A
    { id: 'be-1a', line: 'grA', name: '1A', ages: [12, 13], isced: 2,
      desc: 'Common curriculum (Dutch, French, English, maths, sciences…) plus differentiation hours for ' +
        'remediation or extension, such as Latin or STEM.',
      cost: { amount: 0, note: 'No tuition; families pay for books, materials and trips (no cap in secondary).' } },
    { id: 'be-2a', line: 'grA', name: '2A', ages: [13, 14], isced: 2,
      desc: 'Pupils take a basisoptie (e.g. Klassieke talen, Economie en organisatie, STEM-technieken). ' +
        'Pupils also sit the Vlaamse toetsen in Dutch and maths at the end of the first grade. The class council ' +
        'issues an orientation certificate (A, B or C attest) that can restrict the next study choice.',
      exam: 'Getuigschrift eerste graad',
      events: ['Vlaamse toetsen in 2nd year (spring)', 'Choice of finality and study programme'],
      cost: { amount: 0, note: 'No tuition; school costs for books and materials apply.' } },
    // Doorstroom
    { id: 'be-door2', line: 'door', name: '2de graad', local: 'Doorstroomfinaliteit, jaar 3–4', ages: [14, 16], isced: 3,
      desc: 'Abstract-theoretical programmes in domains such as Taal en cultuur, STEM, Economie en ' +
        'organisatie or Maatschappij en welzijn.',
      cost: { amount: 0, note: 'No tuition.' },
      share: { pct: 38, of: 'of pupils in years 3–6 are in former ASO programmes (2025/26)', src: 1 } },
    { id: 'be-door3', line: 'door', name: '3de graad', local: 'Doorstroomfinaliteit, jaar 5–6', ages: [16, 18], isced: 3,
      desc: 'Final grade. The diploma secundair onderwijs gives access to all higher education. From 2027 ' +
        'pupils in year 6 also sit Vlaamse toetsen. Medicine and dentistry candidates sit the central ' +
        'ingangsexamen in summer.',
      exam: 'Diploma secundair onderwijs',
      events: ['Vlaamse toetsen in year 6 (from 2027)', 'Ingangsexamen arts/tandarts (July and August)'],
      cost: { amount: 0, note: 'No tuition.' } },
    // Universiteit
    { id: 'be-aba', line: 'uni', name: 'Ac. bachelor', local: 'Academische bachelor', ages: [18, 21], isced: 6,
      desc: '180 credits, usually 3 years. Open admission, but progress rules (studievoortgang) apply: from ' +
        '2024/25 first-year students must pass at least 50% of their first-year credits. For some ' +
        'programmes taking a non-binding starttoets is a condition of enrolment.',
      exam: 'Bachelor (BA/BSc)',
      cost: { amount: 1181, note: 'Studiegeld 2026/27 for 60 credits (€305.40 + €14.60 per credit). Grant holders pay €139.40; near-grant €623.', src: 3 } },
    { id: 'be-ma', line: 'uni', name: 'Master', ages: [21, 22], isced: 7,
      desc: 'Master of 60–120 credits (1–2 years); medicine takes 6 years in total (3 + 3). A professional ' +
        'bachelor can join a master after a schakelprogramma.',
      exam: 'Master (MA/MSc)',
      cost: { amount: 1181, note: 'Same regulated studiegeld as the bachelor (2026/27, 60 credits).', src: 3 } },
    { id: 'be-phd', line: 'uni', name: 'Doctoraat', ages: [22, 26], isced: 8,
      desc: 'Doctorate, usually 4 years, often as a funded researcher (FWO or university grant). Ends with ' +
        'a public defence of the dissertation.',
      exam: 'Doctor (PhD)' },
    // Hogeschool
    { id: 'be-pba', line: 'hs', name: 'Prof. bachelor', local: 'Professionele bachelor', ages: [18, 21], isced: 6,
      desc: 'Three-year, practice-oriented bachelor (180 credits) with long work placements, e.g. nursing, ' +
        'teacher training or business. Teacher-training students must take a starttoets before enrolling.',
      exam: 'Professional bachelor',
      cost: { amount: 1181, note: 'Studiegeld 2026/27 for 60 credits; reduced rates €139.40 (grant holders) and €623 (near-grant).', src: 3 } },
    { id: 'be-banaba', line: 'hs', name: 'Banaba', local: 'Bachelor-na-bachelor', ages: [21, 22], isced: 6,
      desc: 'Optional extra specialisation year (60 credits) after a professional bachelor, e.g. ' +
        'special-needs education or emergency nursing.',
      cost: { amount: 1181, note: 'Standard studiegeld (2026/27, 60 credits).', src: 3 } },
    // Dubbele finaliteit
    { id: 'be-dub2', line: 'dub', name: '2de graad', local: 'Dubbele finaliteit, jaar 3–4', ages: [14, 16], isced: 3,
      desc: 'Programmes that mix theory with practical, often technical, subjects.',
      cost: { amount: 0, note: 'No tuition; technical programmes may charge for materials.' },
      share: { pct: 34, of: 'of pupils in years 3–6 are in former TSO programmes (2025/26); KSO a further 3%', src: 1 } },
    { id: 'be-dub3', line: 'dub', name: '3de graad', local: 'Dubbele finaliteit, jaar 5–6', ages: [16, 18], isced: 3,
      desc: 'Includes long work placements. The diploma secundair onderwijs gives access to higher education ' +
        'and also certifies a professional qualification.',
      exam: 'Diploma secundair onderwijs + beroepskwalificatie',
      cost: { amount: 0, note: 'No tuition.' } },
    // Eerste graad B
    { id: 'be-1b', line: 'grB', name: '1B', ages: [12, 13], isced: 2,
      desc: 'For pupils without the getuigschrift basisonderwijs. Pupils who catch up can earn the primary ' +
        'certificate and move to 1A or 2A.',
      cost: { amount: 0, note: 'No tuition.' } },
    { id: 'be-2b', line: 'grB', name: '2B', ages: [13, 14], isced: 2,
      desc: 'Pupils choose up to three basisopties that mostly lead to arbeidsmarkt programmes.',
      cost: { amount: 0, note: 'No tuition.' } },
    // Arbeidsmarkt
    { id: 'be-arb2', line: 'arb', name: '2de graad', local: 'Arbeidsmarktfinaliteit, jaar 3–4', ages: [14, 16], isced: 3,
      desc: 'Practical, job-oriented programmes with many hours in workshops.',
      cost: { amount: 0, note: 'No tuition; workshop materials or clothing may be charged.' },
      share: { pct: 25, of: 'of pupils in years 3–6 are in former BSO programmes (2025/26)', src: 1 } },
    { id: 'be-arb3', line: 'arb', name: '3de graad', local: 'Arbeidsmarktfinaliteit, jaar 5–6', ages: [16, 18], isced: 3,
      desc: 'Leads to a professional qualification (beroepskwalificatie) and a certificate of studies. ' +
        'Many pupils switch to duaal leren in this grade.',
      exam: 'Studiegetuigschrift + beroepskwalificatie',
      cost: { amount: 0, note: 'No tuition.' } },
    { id: 'be-ar7', line: 'arb', name: '7de jaar', ages: [18, 19], isced: 3,
      desc: 'An extra year that leads to the full diploma secundair onderwijs, which gives access to higher ' +
        'education, including the graduaat.',
      exam: 'Diploma secundair onderwijs',
      cost: { amount: 0, note: 'No tuition.' } },
    // Duaal leren
    { id: 'be-duaal', line: 'duaal', name: 'Duaal leren', local: 'Duale studierichting', ages: [15, 18], isced: 3,
      desc: 'Learners spend part of the week at school and part at a real workplace under a training ' +
        'contract. With more than 20 hours a week at work they have an alternating-training agreement ' +
        '(OAO) and receive a monthly allowance. Leads to the same certificates and diplomas as full-time school.',
      exam: 'Beroepskwalificatie / diploma secundair onderwijs',
      cost: { amount: 0, note: 'No tuition; learners are paid a training allowance.', src: 6 } },
    // Graduaat
    { id: 'be-grad', line: 'hbo5', name: 'Graduaat', local: 'Graduaatsopleiding (HBO5)', ages: [19, 21], isced: 5,
      desc: 'Two-year, practice-oriented programme (90–120 credits) with a large share of work-based ' +
        'learning, e.g. accounting, IT systems or social work. Gives credit towards a professional bachelor.',
      exam: 'Graduaat diploma',
      cost: { amount: 1181, note: 'Same regulated studiegeld as bachelors (2026/27, 60 credits); reduced rates for grant holders.', src: 3 } },
  ],
  transfers: [
    { from: 'be-1b', to: 'be-2a', label: 'B stream → A stream',
      desc: 'Pupils who complete 1B can move on to 1A or 2A, depending on the class council.' },
    { from: 'be-2a', to: 'be-arb2', label: '2A → arbeidsmarkt',
      desc: 'A-stream pupils can also choose arbeidsmarkt programmes; some are restricted to them by a B or C attest.' },
    { from: 'be-door2', to: 'be-dub3', label: 'Doorstroom → dubbele finaliteit',
      desc: 'Moving to a programme with a more practical finality (the “waterval” effect) is common after a failed year.' },
    { from: 'be-dub2', to: 'be-duaal', label: 'Dubbele finaliteit → duaal',
      desc: 'Several dubbele-finaliteit programmes are also offered as duaal leren.' },
    { from: 'be-arb2', to: 'be-duaal', label: 'Arbeidsmarkt → duaal leren',
      desc: 'Pupils can switch to the dual variant of their arbeidsmarkt programme once they meet the age and entry conditions.' },
    { from: 'be-dub3', to: 'be-aba', label: 'Dubbele finaliteit → university',
      desc: 'Any secondary diploma gives access to an academic bachelor, although success rates are lower.' },
    { from: 'be-door3', to: 'be-pba', label: 'Doorstroom → hogeschool',
      desc: 'Many doorstroom graduates choose professional bachelors such as teacher training or nursing.' },
    { from: 'be-dub3', to: 'be-grad', label: 'Dubbele finaliteit → graduaat',
      desc: 'Graduaat programmes recruit many technical-school leavers directly at 18.' },
    { from: 'be-grad', to: 'be-pba', label: 'Graduaat → prof. bachelor',
      desc: 'Graduates can continue into a related professional bachelor with credit exemptions.' },
    { from: 'be-pba', to: 'be-ma', label: 'Prof. bachelor → master',
      desc: 'Via a schakelprogramma (bridging programme, usually 45–90 credits).' },
  ],
  sources: [
    { title: 'Onderwijs Vlaanderen — Vlaamse toetsen: afname 2025-2026', url: 'https://www.vlaanderen.be/onderwijsprofessionals/organisatie-en-administratie/onderwijskwaliteit-en-toezicht/kwaliteitsvol-onderwijs-aanbieden/vlaamse-toetsen/vlaamse-toetsen-afname-2025-2026' },
    { title: 'Statistiek Vlaanderen — Schoolbevolking basis- en secundair onderwijs (2025-2026)', url: 'https://www.vlaanderen.be/statistiek-vlaanderen/onderwijs-en-vorming/schoolbevolking-basis-en-secundair-onderwijs' },
    { title: 'Opgroeien — Kinderopvang baby\'s en peuters: cijfers (gebruik en inkomenstarief)', url: 'https://www.opgroeien.be/kennis/cijfers-en-onderzoek/kinderopvang-babys-en-peuters' },
    { title: 'AP Hogeschool — Reglement studiegelden 2026-2027 (Vlaamse studiegeldformule)', url: 'https://www.ap.be/sites/default/files/reglementen/studiekosten/Reglement_Studiegelden_2026-27_NL.pdf' },
    { title: 'Vlaanderen.be — Voorwaarden voor verminderd studiegeld in het hoger onderwijs', url: 'https://www.vlaanderen.be/onderwijs-en-vorming/studietoelage/bedrag/voorwaarden-voor-verminderd-studiegeld-in-het-hoger-onderwijs' },
    { title: 'Eurydice — Belgium (Flemish Community): organisation of secondary education', url: 'https://eurydice.eacea.ec.europa.eu/national-education-systems/belgium-flemish-community/organisation-general-upper-secondary-education' },
    { title: 'Vlaanderen.be — Duaal leren in het secundair onderwijs', url: 'https://www.vlaanderen.be/onderwijs-en-vorming/een-onderwijsinstelling-of-opleiding-kiezen/op-zoek-naar-een-school-of-studierichting-gewoon-secundair-onderwijs/duaal-leren-in-het-secundair-onderwijs' },
    { title: 'Edulex — Omzendbrief kostenbeheersing basisonderwijs (maximumfactuur)', url: 'https://data-onderwijs.vlaanderen.be/edulex/document/13875' },
    { title: 'Eurydice — Belgium (Flemish Community): overview', url: 'https://eurydice.eacea.ec.europa.eu/national-education-systems/belgium-flemish-community/overview' },
    { title: 'Bruxelles-J — Organisation du 1er degré (tronc commun en S1, FWB)', url: 'https://www.bruxelles-j.be/etudier-se-former/enseignement-secondaire/lorganisation-du-1er-degre/' },
  ],
};
