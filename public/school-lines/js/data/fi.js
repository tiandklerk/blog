// Finland — nine-year comprehensive school, compulsory education extended to 18 in 2021.
export default {
  id: 'fi',
  iso3: 'FIN',
  region: 'Europe',
  currency: 'EUR',
  costNote:
    'Education is free from pre-primary to doctorate for Finnish and EU/EEA students; only small compulsory ' +
    'student fees apply in higher education. Day-care fees are income-based and capped. Figures are for 2026–27.',
  name: 'Finland',
  localName: 'Suomi',
  flag: '🇫🇮',
  summary:
    'Early childhood education, then a compulsory pre-primary year at 6, then nine years of ' +
    'comprehensive school (peruskoulu, grades 1–9) with no tracking. At 16 students apply through ' +
    'the joint application (yhteishaku) to either general upper secondary (lukio, ending in the ' +
    'matriculation exam) or vocational education (ammatillinen koulutus). Both routes give ' +
    'eligibility for universities and universities of applied sciences (UAS). Education is free, ' +
    'including upper-secondary materials since 2021.',
  ageNote:
    'Children start comprehensive school in August of the year they turn 7, so ages are ' +
    'calendar-year based. Many students take gap years before university, and the median age at ' +
    'university entry is around 20–21.',
  compulsory: {
    from: 6,
    to: 16,
    label: 'Compulsory: pre-primary + basic',
    note: 'Pre-primary education (esiopetus) has been compulsory at age 6 since 2015, and basic education (grades 1–9) follows.',
    extendedTo: 18,
    extendedLabel: 'Oppivelvollisuus to 18',
    extendedNote:
      'Since August 2021, compulsory education continues until age 18 or until an upper ' +
      'secondary qualification is completed. Upper secondary is free of charge, including books.',
  },
  lines: [
    { id: 'ecec', name: 'Varhaiskasvatus', color: '#7C8A93', lane: 0,
      desc: 'Early childhood education and care (ECEC) is a subjective right for every child ' +
        'before school age. Fees depend on income and are capped.' },
    { id: 'pre', name: 'Esiopetus', color: '#E2557B', lane: 0, from: 'fi-ecec',
      desc: 'Compulsory, free pre-primary year at age 6 (at least 700 hours).' },
    { id: 'basic', name: 'Peruskoulu', color: '#1E66C9', lane: 0, from: 'fi-pre',
      desc: 'Basic education, grades 1–9, in one comprehensive school with no streaming. Grades ' +
        '1–6 have class teachers and grades 7–9 have subject teachers. Free school meals for all ' +
        'pupils since 1948. Special-needs support follows a three-tier model.' },
    { id: 'lukio', name: 'Lukio', color: '#7A3E9D', lane: -1, from: 'fi-g9',
      desc: 'General upper secondary school: 150 credits, usually completed in 3 years (2–4 allowed). It ends with the national matriculation examination.' },
    { id: 'yo', name: 'Yliopisto', color: '#4B2470', lane: -1, from: 'fi-lukio3',
      desc: 'Research universities. Bachelor (3 yrs, 180 ECTS) and master (2 yrs, 120 ECTS) are ' +
        'usually applied for together, as one study right. Doctorate (4 yrs). Free for EU/EEA students.' },
    { id: 'amis', name: 'Vocational', color: '#DD7710', lane: 1, from: 'fi-g9',
      desc: 'Ammatillinen koulutus: vocational upper secondary, competence-based with personal ' +
        'study plans (180 credits, typically 3 years). A large share of learning happens at ' +
        'workplaces, through a training agreement or an apprenticeship.' },
    { id: 'amk', name: 'AMK (UAS)', color: '#A85A0A', lane: 1, from: 'fi-amis',
      desc: 'Ammattikorkeakoulu, or university of applied sciences: professional bachelor\'s ' +
        '(3.5–4.5 yrs, 210–270 ECTS). The UAS master requires 2 years of work experience after the bachelor\'s.' },
    { id: 'tuva', name: 'TUVA', color: '#2C9546', lane: 2, from: 'fi-g9',
      desc: 'Tutkintoon valmentava koulutus: preparatory education for upper secondary (up to 1 year), introduced in 2022. It replaced the voluntary “10th grade”.' },
  ],
  stations: [
    { id: 'fi-ecec', line: 'ecec', name: 'Varhaiskasvatus', local: 'Päiväkoti', ages: [1, 6], isced: 0,
      desc: 'Day-care centres (päiväkoti) or family day care. Parental leave usually covers the first year.',
      cost: { amount: 3685, note: 'Maximum for full-time care: €335/month × 11 months from August 2026. Fees are 10.7% of income above a threshold; low incomes pay nothing', src: 5 } },
    { id: 'fi-pre', line: 'pre', name: 'Esiopetus', ages: [6, 7], isced: 0,
      desc: 'Play-based learning in day care or at school. This is when compulsory education begins.',
      cost: { amount: 0, note: 'Free (4 hours a day); extra day-care hours are charged by income', src: 5 } },
    { id: 'fi-g1', line: 'basic', name: 'Grade 1', local: '1. luokka', ages: [7, 8], isced: 1,
      desc: 'School starts in August of the year the child turns 7. The first foreign language ' +
        '(A1, often English) starts in grade 1 in spring at the latest.',
      cost: { amount: 0, note: 'Free, including books, materials and a daily school meal', src: 0 } },
    { id: 'fi-g2', line: 'basic', name: 'Grade 2', ages: [8, 9], isced: 1, desc: 'Class teacher.',
      cost: { amount: 0, note: 'Free, including books, materials and a daily school meal', src: 0 } },
    { id: 'fi-g3', line: 'basic', name: 'Grade 3', ages: [9, 10], isced: 1, desc: 'Class teacher.',
      cost: { amount: 0, note: 'Free, including books, materials and a daily school meal', src: 0 } },
    { id: 'fi-g4', line: 'basic', name: 'Grade 4', ages: [10, 11], isced: 1, desc: 'Numerical grades (4–10) may be introduced.',
      cost: { amount: 0, note: 'Free, including books, materials and a daily school meal', src: 0 } },
    { id: 'fi-g5', line: 'basic', name: 'Grade 5', ages: [11, 12], isced: 1, desc: 'Second-language options.',
      cost: { amount: 0, note: 'Free, including books, materials and a daily school meal', src: 0 } },
    { id: 'fi-g6', line: 'basic', name: 'Grade 6', ages: [12, 13], isced: 1, desc: 'End of the lower grades. Pupils are graded against national criteria for the end of grade 6.',
      cost: { amount: 0, note: 'Free, including books, materials and a daily school meal', src: 0 } },
    { id: 'fi-g7', line: 'basic', name: 'Grade 7', ages: [13, 14], isced: 2,
      desc: 'Upper grades begin with subject teachers. Swedish (B1, the second national language) ' +
        'starts in grade 6 or 7.',
      cost: { amount: 0, note: 'Free, including books, materials and a daily school meal', src: 0 } },
    { id: 'fi-g8', line: 'basic', name: 'Grade 8', ages: [14, 15], isced: 2, desc: 'Work-life familiarisation (TET periods).', events: ['TET work experience'],
      cost: { amount: 0, note: 'Free, including books, materials and a daily school meal', src: 0 } },
    { id: 'fi-g9', line: 'basic', name: 'Grade 9', ages: [15, 16], isced: 2,
      desc: 'Final year. There is no national exit exam; students get a final certificate graded ' +
        'against national criteria. They apply to upper secondary through the joint application ' +
        'in February–March, and places are allocated by grade point average.',
      exam: 'Basic-education certificate', events: ['Joint application (yhteishaku), Feb–Mar'],
      cost: { amount: 0, note: 'Free, including books, materials and a daily school meal', src: 0 } },
    { id: 'fi-lukio1', line: 'lukio', name: 'Lukio yr 1', ages: [16, 17], isced: 3, desc: 'Courses are organised in periods; students choose their own schedules.',
      cost: { amount: 0, note: 'Free since 2021 for those in compulsory education, including books, a laptop and matriculation exam fees', src: 1 },
      share: { pct: 52.5, of: 'of 2024 basic-school leavers went straight on to lukio', src: 8 } },
    { id: 'fi-lukio2', line: 'lukio', name: 'Lukio yr 2', ages: [17, 18], isced: 3, desc: 'Matriculation exams can be spread over up to three consecutive exam sessions.', events: ['First matriculation exams (optional)'],
      cost: { amount: 0, note: 'Free since 2021 for those in compulsory education, including books, a laptop and matriculation exam fees', src: 1 } },
    { id: 'fi-lukio3', line: 'lukio', name: 'Lukio yr 3', ages: [18, 19], isced: 3,
      desc: 'Matriculation examination (ylioppilastutkinto): at least 5 exams, including mother ' +
        'tongue, taken in spring or autumn. The results weigh heavily in university admission.',
      exam: 'Ylioppilastutkinto (matriculation)', events: ['Matriculation exams (spring/autumn)', 'Graduation with white cap (ylioppilaslakki)'],
      cost: { amount: 0, note: 'Free since 2021 for those in compulsory education, including books, a laptop and matriculation exam fees', src: 1 } },
    { id: 'fi-ba', line: 'yo', name: 'Bachelor', local: 'Kandidaatti', ages: [19, 22], isced: 6,
      desc: 'Admission is by certificate (matriculation grades) or entrance exam. Many students ' +
        'start after one or more gap years.', exam: 'Kandidaatti (BA/BSc)',
      cost: { amount: 156, note: 'About €156 a year: no tuition for EU/EEA students, but compulsory student-union fee (€85 in Helsinki, 2026–27) and Kela health fee (€35.35/term)', src: 7 } },
    { id: 'fi-ma', line: 'yo', name: 'Master', local: 'Maisteri', ages: [22, 24], isced: 7, desc: 'Master\'s, often seen as the standard university qualification.', exam: 'Maisteri (MA/MSc)',
      cost: { amount: 156, note: 'About €156 a year: no tuition for EU/EEA students, but compulsory student-union fee (€85 in Helsinki, 2026–27) and Kela health fee (€35.35/term)', src: 7 } },
    { id: 'fi-phd', line: 'yo', name: 'Doctorate', local: 'Tohtori', ages: [24, 28], isced: 8, desc: 'Doctoral programme, about 4 years full-time.', exam: 'Tohtori (PhD)',
      cost: { amount: 0, note: 'No tuition; doctoral students do not pay the Kela student health fee and student-union membership is voluntary', src: 6 } },
    { id: 'fi-amis', line: 'amis', name: 'Vocational qual.', local: 'Ammatillinen tutkinto', ages: [16, 19], isced: 3,
      desc: 'Vocational upper secondary qualification (180 credits), with flexible pacing. A double ' +
        'qualification (kaksoistutkinto) adds the matriculation exam.',
      exam: 'Ammatillinen perustutkinto',
      cost: { amount: 0, note: 'Free for students in compulsory education (to 18), including materials', src: 1 },
      share: { pct: 39.9, of: 'of 2024 basic-school leavers went straight on to vocational education', src: 8 } },
    { id: 'fi-amkba', line: 'amk', name: 'UAS bachelor', ages: [19, 23], isced: 6, desc: 'Professional bachelor\'s with work placements (e.g. engineering, nursing, business).', exam: 'AMK-tutkinto',
      cost: { amount: 71, note: 'Kela student health fee €35.35 per term (2026); no tuition for EU/EEA students, and student-union membership is voluntary at UAS', src: 6 } },
    { id: 'fi-amkma', line: 'amk', name: 'UAS master', ages: [25, 27], isced: 7, desc: 'After at least 2 years of work experience. Often studied part-time.', exam: 'Ylempi AMK-tutkinto',
      cost: { amount: 71, note: 'Kela student health fee €35.35 per term (2026); no tuition for EU/EEA students, and student-union membership is voluntary at UAS', src: 6 } },
    { id: 'fi-tuva', line: 'tuva', name: 'TUVA', ages: [16, 17], isced: 2,
      desc: 'Up to one year to strengthen grades and explore options before upper secondary.',
      cost: { amount: 0, note: 'Free, including materials', src: 1 },
      share: { pct: 6.7, of: 'of 2024 basic-school leavers went on to TUVA or other preparatory education', src: 8 } },
  ],
  transfers: [
    { from: 'fi-lukio3', to: 'fi-amkba', label: 'Lukio → UAS', desc: 'The matriculation exam also gives access to universities of applied sciences.' },
    { from: 'fi-amis', to: 'fi-ba', label: 'Vocational → university', desc: 'A vocational qualification gives general eligibility for university. In practice it is usually via an entrance exam or open-university studies.' },
    { from: 'fi-amkba', to: 'fi-ma', label: 'UAS bachelor → university master', desc: 'Possible, sometimes with bridging studies.' },
    { from: 'fi-tuva', to: 'fi-lukio1', label: 'TUVA → lukio', desc: 'TUVA students then apply to upper secondary.' },
    { from: 'fi-tuva', to: 'fi-amis', label: 'TUVA → vocational', desc: 'Continuous application is possible for vocational education.' },
  ],
  sources: [
    { title: 'Finnish National Agency for Education (OPH) — Finnish education system', url: 'https://www.oph.fi/en/education-system' },
    { title: 'Ministry of Education and Culture — Extended compulsory education', url: 'https://okm.fi/en/extension-of-compulsory-education' },
    { title: 'OPH — Preparatory education for an upper secondary qualification (TUVA)', url: 'https://www.oph.fi/en/education-and-qualifications/preparatory-education-upper-secondary-qualification-tuva' },
    { title: 'Matriculation Examination Board (YTL)', url: 'https://www.ylioppilastutkinto.fi/en' },
    { title: 'Eurydice — Finland overview', url: 'https://eurydice.eacea.ec.europa.eu/national-education-systems/finland/overview' },
    { title: 'City of Helsinki — Early childhood education fee (from 1 August 2026)', url: 'https://www.hel.fi/en/childhood-and-education/early-childhood-education/early-childhood-education-fee' },
    { title: 'Kela — Student healthcare fee for higher education students', url: 'https://www.kela.fi/student-healthcare-fee-higher-education' },
    { title: 'HYY (University of Helsinki student union) — Membership fee 2026–2027', url: 'https://hyy.fi/en/members/membership/' },
    { title: 'Statistics Finland — Transition to further studies after 9th grade (table 13rz)', url: 'https://pxdata.stat.fi/PxWeb/pxweb/en/StatFin/StatFin__khak/13rz.px/' },
  ],
};
