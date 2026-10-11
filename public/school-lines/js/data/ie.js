// Ireland — school system as a metro map.
// The school year runs from late August/early September to late June (post-primary ends early June for exam classes).
export default {
  id: 'ie',
  iso3: 'IRL',
  region: 'Europe',
  currency: 'EUR',
  name: 'Ireland',
  localName: 'Éire',
  flag: '🇮🇪',
  summary:
    'After two free preschool years (ECCE), children spend eight years in primary school: Junior and ' +
    'Senior Infants, then 1st to 6th Class. Post-primary school has a three-year Junior Cycle, an ' +
    'optional Transition Year, and a two-year Senior Cycle ending in the Leaving Certificate ' +
    '(Established, with the vocational LCVP option, or the Leaving Certificate Applied). There is no ' +
    'selection between schools by ability; entry to higher education runs on CAO points from the ' +
    'best six Leaving Cert subjects. School-leavers go to universities and technological ' +
    'universities, Post-Leaving Certificate (PLC) courses in further education, or apprenticeships. ' +
    'EU undergraduates pay no tuition but a €2,500 student contribution.',
  ageNote:
    'Children can start Junior Infants from age 4 (schools set their own minimum, usually 4 by ' +
    'September); most start at 4–5. Ages are typical: taking Transition Year adds a year, so many ' +
    'students sit the Leaving Certificate at 18.',
  compulsory: {
    from: 6,
    to: 16,
    label: 'Compulsory 6–16',
    note:
      'Education is compulsory from age 6 until age 16 or the completion of three years of ' +
      'post-primary education, whichever is later (Education (Welfare) Act 2000). Nearly all children ' +
      'start primary school before 6.',
  },
  costNote:
    'Schools in the free education scheme charge no tuition, though most ask for a voluntary ' +
    'contribution; free schoolbooks now cover primary and post-primary pupils. Higher-education ' +
    'figures are 2026/27 amounts for EU students; about 7% of second-level pupils attend fee-paying schools.',
  lines: [
    { id: 'early', name: 'Early years', color: '#7C8A93', lane: 0,
      desc: 'Crèches, childminders and pre-schools, almost all privately or community run. The ' +
        'National Childcare Scheme (NCS) gives a universal hourly subsidy plus income-assessed ' +
        'support, and the ECCE scheme gives two free preschool years.' },
    { id: 'prim', name: 'Primary', color: '#D2322D', lane: 0, from: 'ie-ecce',
      desc: 'National (primary) schools, eight years from Junior Infants to 6th Class. Most are under ' +
        'church patronage; there are also multi-denominational schools (e.g. Educate Together) and ' +
        'Irish-medium gaelscoileanna.' },
    { id: 'post', name: 'Post-primary', color: '#1E66C9', lane: 0, from: 'ie-c56',
      desc: 'Secondary, community, comprehensive and Education and Training Board schools, all ' +
        'teaching the same Junior and Senior Cycle. Junior Cycle (1st–3rd Year) since 2014 combines ' +
        'classroom-based assessments with state exams.' },
    { id: 'lc', name: 'Leaving Cert', color: '#7A3E9D', lane: -1, from: 'ie-ty',
      desc: 'Senior Cycle, 5th and 6th Year, leading to the Established Leaving Certificate (usually ' +
        '7 subjects at Higher or Ordinary level). The Leaving Certificate Vocational Programme (LCVP) ' +
        'adds Link Modules on enterprise and work. Senior Cycle is being redeveloped: new subject ' +
        'specifications start in tranches from September 2025, each with an additional assessment ' +
        'component worth at least 40%.' },
    { id: 'uni', name: 'Higher education', color: '#5B2C83', lane: -1, from: 'ie-lc6',
      desc: 'Eight universities, five technological universities (created 2019–2022 from institutes ' +
        'of technology) and other colleges. Applications go through the CAO. Under the Free Fees ' +
        'Initiative the state pays tuition for EU first-time undergraduates; students pay the ' +
        'student contribution, which the SUSI grant covers for lower-income families.' },
    { id: 'hc', name: 'Higher Certificate', color: '#3F7FBF', lane: -2, from: 'ie-lc6',
      desc: 'Two-year Higher Certificates (NFQ level 6), mostly at technological universities. They can lead on to an ordinary or honours bachelor\'s.' },
    { id: 'lca', name: 'LC Applied', color: '#00A0A6', lane: 1, from: 'ie-ty',
      desc: 'Leaving Certificate Applied: a two-year, person-centred programme of modules, tasks and ' +
        'final exams for students who prefer practical learning. It does not give direct CAO entry, but ' +
        'leads to PLC courses, apprenticeships and work. It is being redeveloped within the new Senior Cycle.' },
    { id: 'plc', name: 'Further education', color: '#2C9546', lane: 2, from: 'ie-lca2',
      desc: 'Further Education and Training (FET) run by Education and Training Boards: Post-Leaving ' +
        'Certificate (PLC) courses of 1–2 years leading to QQI awards at NFQ levels 5 and 6, open to ' +
        'all school-leavers and adults.' },
    { id: 'appr', name: 'Apprenticeship', color: '#DD7710', lane: 3, from: 'ie-lca2',
      desc: 'More than 70 national apprenticeship programmes, 2–4 years, from craft trades (electrical, ' +
        'plumbing; NFQ level 6) to newer consortia-led apprenticeships up to degree and master\'s level. ' +
        'Apprentices are employed and paid, with off-the-job phases in ETBs, TUs or colleges.' },
  ],
  stations: [
    // Early years
    { id: 'ie-cc', line: 'early', name: 'Childcare', local: 'Crèche / childminder', ages: [0, 3], isced: 0,
      desc: 'Full-time childcare is mostly private. The NCS universal subsidy applies to every child ' +
        'under 15 in registered care, with extra income-assessed subsidies; most providers are in Core ' +
        'Funding, which freezes fees.',
      cost: { amount: 4500, note: 'About: full-time fee (~€190/week) less the NCS universal subsidy; income-assessed NCS lowers it further.', estimate: true } },
    { id: 'ie-ecce', line: 'early', name: 'ECCE', local: 'Early Childhood Care and Education scheme (free preschool)', ages: [3, 4], isced: 0,
      desc: 'Two free preschool years from age 2 years 8 months until school entry: 3 hours a day, ' +
        '5 days a week, 38 weeks a year. Most children use both years before Junior Infants.',
      cost: { amount: 0, note: 'Free for the ECCE hours; extra hours can be paid with NCS support.', src: 4 } },
    // Primary
    { id: 'ie-ji', line: 'prim', name: 'Jr Infants', local: 'Junior Infants (Naíonáin Shóisearacha)', ages: [4, 5], isced: 1,
      desc: 'First year of primary school, play-based under the Primary Curriculum Framework (2023), ' +
        'with English and Irish from the start.',
      events: ['Starts late August / early September'],
      cost: { amount: 0, note: 'Free; voluntary contributions are common.' } },
    { id: 'ie-si', line: 'prim', name: 'Sr Infants', local: 'Senior Infants (Naíonáin Shinsearacha)', ages: [5, 6], isced: 1,
      desc: 'Second infant year; school becomes compulsory at 6.',
      cost: { amount: 0, note: 'Free; free schoolbooks scheme.' } },
    { id: 'ie-c12', line: 'prim', name: '1st–2nd Class', ages: [6, 8], isced: 1,
      desc: 'Junior classes. Pupils take standardised tests in English reading and maths at the end ' +
        'of 2nd Class; many receive First Communion in 2nd Class.',
      events: ['Standardised tests in 2nd Class (May–June)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'ie-c34', line: 'prim', name: '3rd–4th Class', ages: [8, 10], isced: 1,
      desc: 'Middle classes; standardised tests again at the end of 4th Class.',
      events: ['Standardised tests in 4th Class (May–June)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'ie-c56', line: 'prim', name: '5th–6th Class', ages: [10, 12], isced: 1,
      desc: 'Senior classes; standardised tests in 6th Class and an Education Passport sent to the ' +
        'post-primary school. Families apply to post-primary schools in 5th or 6th Class; there is no ' +
        'selection exam, but popular schools use admission criteria.',
      events: ['Post-primary applications (autumn, varies by school)', 'Standardised tests in 6th Class'],
      cost: { amount: 0, note: 'Free.' } },
    // Post-primary
    { id: 'ie-y12', line: 'post', name: '1st–2nd Year', ages: [12, 14], isced: 2,
      desc: 'Junior Cycle: about 9–10 subjects plus short courses and Wellbeing. Classroom-Based ' +
        'Assessments (CBAs) are done in 2nd and 3rd Year.',
      cost: { amount: 0, note: 'Free at non-fee-paying schools; voluntary contributions common.' } },
    { id: 'ie-y3', line: 'post', name: '3rd Year', ages: [14, 15], isced: 2,
      desc: 'State Junior Cycle exams in June, set by the State Examinations Commission. Results ' +
        'appear on the Junior Cycle Profile of Achievement (JCPA) together with CBAs and other learning.',
      exam: 'Junior Cycle (JCPA)', events: ['Junior Cycle exams (June)', 'Results (autumn)'],
      cost: { amount: 0, note: 'Free; the Junior Cycle exam fee (€109) has been waived in recent years.', src: 6 } },
    { id: 'ie-ty', line: 'post', name: 'TY', local: 'Transition Year (4th Year)', ages: [15, 16], isced: 3,
      desc: 'Optional Transition Year with no exams: work experience, projects and new subjects. ' +
        'Offered by most schools and taken by most students, but students can go straight from ' +
        '3rd Year to 5th Year.',
      cost: { amount: 0, note: 'Tuition free; schools usually charge a TY programme fee for trips and activities.' } },
    // Leaving Cert
    { id: 'ie-lc5', line: 'lc', name: '5th Year', ages: [16, 17], isced: 3,
      desc: 'Senior Cycle starts. Students in new-specification subjects (tranche 1 from September ' +
        '2025: e.g. biology, chemistry, physics, business, Latin, Ancient Greek) complete an additional ' +
        'assessment component worth 40%.',
      cost: { amount: 0, note: 'Free at non-fee-paying schools.' } },
    { id: 'ie-lc6', line: 'lc', name: '6th Year', ages: [17, 18], isced: 3,
      desc: 'Leaving Certificate exams start on the first Wednesday in June. Grades H1–H8 and O1–O8 ' +
        'give CAO points: H1 = 100, a +25 bonus for Higher Level maths, best six subjects, maximum 625. ' +
        'The first exams under the redeveloped Senior Cycle are in 2027.',
      exam: 'Leaving Certificate (Established / LCVP)',
      events: ['CAO application (1 February)', 'LC exams (from first Wednesday in June)', 'Results and CAO Round 1 offers (late August)'],
      cost: { amount: 0, note: 'Free; the Leaving Cert exam fee (€116) has been waived in recent years.', src: 6 } },
    // Higher education
    { id: 'ie-ba', line: 'uni', name: 'Bachelor', ages: [18, 22], isced: 6,
      desc: 'Honours bachelor\'s (NFQ level 8) of 3–4 years, or an ordinary bachelor\'s (level 7) of ' +
        '3 years, mainly at TUs. The student contribution was permanently reduced from €3,000 to €2,500 ' +
        'in Budget 2026 (applying from 2025/26), after several one-off cuts.',
      exam: 'Bachelor\'s degree (NFQ 7/8)',
      cost: { amount: 2500, note: 'Student contribution for EU students; tuition free (Free Fees Initiative). SUSI covers it up to €120,000 family income.', src: 1 } },
    { id: 'ie-ma', line: 'uni', name: 'Master\'s', ages: [22, 23], isced: 7,
      desc: 'Taught master\'s (NFQ 9), usually one year. No Free Fees Initiative: students pay full ' +
        'fees, with a SUSI postgraduate fee grant (€4,500 from 2026) for low incomes.',
      exam: 'Master\'s degree',
      cost: { amount: 8040, note: 'EU fee for an MA at University of Galway 2026/27; science and business masters cost more.', src: 2 } },
    { id: 'ie-phd', line: 'uni', name: 'PhD', ages: [23, 27], isced: 8,
      desc: 'Doctorate (NFQ 10), typically 4 years as a structured PhD. Funded studentships usually cover fees and pay a stipend.',
      exam: 'Doctorate',
      cost: { amount: 5890, note: 'EU structured PhD fee incl. levy, University of Galway 2026/27; often paid by a studentship.', src: 2 } },
    // Higher Certificate
    { id: 'ie-hc', line: 'hc', name: 'Higher Cert', local: 'Higher Certificate (NFQ 6)', ages: [18, 20], isced: 5,
      desc: 'Two-year Higher Certificate at a technological university or college, entered through the CAO with lower points requirements.',
      exam: 'Higher Certificate (NFQ 6)',
      cost: { amount: 2500, note: 'Same €2,500 student contribution as degree courses.', src: 1 } },
    // LCA
    { id: 'ie-lca1', line: 'lca', name: 'LCA Year 1', ages: [16, 17], isced: 3,
      desc: 'Modules in vocational preparation, general education and specialisms, with work experience. Credits build up across four sessions.',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'ie-lca2', line: 'lca', name: 'LCA Year 2', ages: [17, 18], isced: 3,
      desc: 'Final tasks and June exams; graded Pass, Merit or Distinction. Gives entry to PLC courses and apprenticeships.',
      exam: 'Leaving Certificate Applied',
      cost: { amount: 0, note: 'Free.' } },
    // Further education
    { id: 'ie-plc5', line: 'plc', name: 'PLC L5', local: 'PLC course, QQI level 5', ages: [18, 19], isced: 4,
      desc: 'One-year PLC course for a QQI level 5 certificate (e.g. nursing studies, childcare, IT, ' +
        'art). Results can earn CAO points through the Higher Education Links Scheme.',
      exam: 'QQI Level 5 Certificate',
      cost: { amount: 200, note: 'PLC participant contribution (waived for medical-card holders and SUSI grant holders); colleges may add course charges.', src: 9 } },
    { id: 'ie-plc6', line: 'plc', name: 'PLC L6', local: 'Advanced Certificate, QQI level 6', ages: [19, 20], isced: 5,
      desc: 'Second-year QQI level 6 Advanced Certificate in some fields, often with progression to year 2 of a higher-education course.',
      exam: 'QQI Advanced Certificate (NFQ 6)',
      cost: { amount: 200, note: 'PLC participant contribution; waived for medical-card holders.', src: 9 } },
    // Apprenticeship
    { id: 'ie-app', line: 'appr', name: 'Apprenticeship', local: 'National apprenticeship (craft or consortia-led)', ages: [18, 22], isced: 4,
      desc: 'Paid employment with alternating on- and off-the-job phases. Craft apprentices must be ' +
        'at least 16 with Junior Cycle passes; many start after the Leaving Cert. Awards range from ' +
        'NFQ level 5 to 10.',
      exam: 'Advanced Certificate – Craft (NFQ 6) or degree',
      cost: { amount: 0, note: 'Paid job; a pro-rata student contribution applies to off-the-job phases in higher education.', src: 1 } },
  ],
  transfers: [
    { from: 'ie-y3', to: 'ie-lc5', label: 'Skip TY',
      desc: 'Students can go straight from 3rd Year into 5th Year, sitting the Leaving Certificate a year younger.' },
    { from: 'ie-y3', to: 'ie-lca1', label: 'Junior Cycle → LCA',
      desc: 'Students can enter the Leaving Certificate Applied directly after 3rd Year.' },
    { from: 'ie-lc6', to: 'ie-plc5', label: 'Leaving Cert → PLC',
      desc: 'Many Leaving Cert students choose a PLC course, often as a stepping stone to higher education.' },
    { from: 'ie-lc6', to: 'ie-app', label: 'Leaving Cert → apprenticeship',
      desc: 'Most apprentices have a Leaving Certificate; some consortia-led apprenticeships require it.' },
    { from: 'ie-plc5', to: 'ie-ba', label: 'PLC → higher education',
      desc: 'QQI level 5/6 awards give CAO points via the Higher Education Links Scheme, with reserved places on many courses.' },
    { from: 'ie-hc', to: 'ie-ba', label: 'Higher Cert → degree',
      desc: 'Holders of a Higher Certificate can usually add a year for an ordinary (level 7) bachelor\'s, then another for honours.' },
  ],
  sources: [
    { title: 'Citizens Information — Primary and post-primary education', url: 'https://www.citizensinformation.ie/en/education/primary-and-post-primary-education/' },
    { title: 'University of Galway — Budget 2026: student contribution reduced to €2,500', url: 'https://www.universityofgalway.ie/student-fees/budget-2024/' },
    { title: 'University of Galway — Postgraduate fees 2026/27', url: 'https://www.universityofgalway.ie/student-fees/how-much/postgraduate-fees/' },
    { title: 'CAO — Leaving Certificate scoring', url: 'https://www.cao.ie/index.php?page=scoring&s=lce' },
    { title: 'Citizens Information — Early Childhood Care and Education (ECCE) scheme', url: 'https://www.citizensinformation.ie/en/education/pre-school-education-and-childcare/early-childhood-care-and-education-scheme/' },
    { title: 'NCCA — Senior cycle redevelopment', url: 'https://ncca.ie/en/senior-cycle/senior-cycle-redevelopment/' },
    { title: 'State Examinations Commission', url: 'https://www.examinations.ie/' },
    { title: 'Generation Apprenticeship (SOLAS)', url: 'https://www.apprenticeship.ie/' },
    { title: 'Higher Education Authority', url: 'https://hea.ie/' },
    { title: 'Citizens Information — Post Leaving Certificate courses', url: 'https://www.citizensinformation.ie/en/education/vocational-education-and-training/post-leaving-certificate-courses/' },
    { title: 'Citizens Information — National Childcare Scheme', url: 'https://www.citizensinformation.ie/en/education/pre-school-education-and-childcare/national-childcare-scheme/' },
    { title: 'Wikipedia — Leaving Certificate (Ireland)', url: 'https://en.wikipedia.org/wiki/Leaving_Certificate_(Ireland)' },
    { title: 'Eurydice — Ireland: overview', url: 'https://eurydice.eacea.ec.europa.eu/eurypedia/ireland/overview' },
  ],
};
