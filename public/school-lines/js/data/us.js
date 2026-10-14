// United States — education is run by states and ~13,000 local school districts.
export default {
  id: 'us',
  iso3: 'USA',
  region: 'Americas',
  currency: 'USD',
  costNote:
    'Public K-12 is free, but childcare and college are mostly paid by families. College figures are average ' +
    'published (sticker) prices for 2025–26 before grants; private shows private nonprofit institutions.',
  name: 'United States',
  localName: 'United States',
  flag: '🇺🇸',
  summary:
    'A single comprehensive track from kindergarten to grade 12 (K-12), usually split into elementary ' +
    '(K–5), middle (6–8) and high school (9–12). Pupils are not sorted into separate school types, ' +
    'but course levels (honors, AP, IB, dual enrollment) vary widely. After the high-school diploma ' +
    'students choose between 4-year colleges and universities, 2-year community colleges (with ' +
    'transfer pathways), trade schools and apprenticeships. Graduate degrees, including the ' +
    'professional JD and MD, follow the bachelor\'s.',
  ageNote:
    'States set the kindergarten cut-off date, usually a child must be 5 by about 1 September. Grade ' +
    'organisation varies by district: K-5/6-8/9-12 is most common, but K-8, 7-12 and junior high ' +
    '(7–9) also exist.',
  compulsory: {
    from: 6,
    to: 16,
    label: 'Compulsory ~6–16/18',
    note: 'Compulsory attendance is set by each state: it starts between 5 and 8 (most often 6) and ends between 16 and 18.',
    extendedTo: 18,
    extendedLabel: 'Many states: to 18',
    extendedNote: 'More than half of the states require attendance until 18, or until graduation.',
  },
  lines: [
    { id: 'pre', name: 'Pre-K', color: '#7C8A93', lane: 0,
      desc: 'Childcare and preschool. Publicly funded Pre-K for 4-year-olds is available in many ' +
        'states, sometimes universal; Head Start serves low-income families.' },
    { id: 'elem', name: 'Elementary', color: '#D2322D', lane: 0, from: 'us-prek',
      desc: 'Elementary school, kindergarten to grade 5, with one class teacher. Kindergarten is ' +
        'compulsory in about a third of states but almost universally attended.' },
    { id: 'mid', name: 'Middle school', color: '#DD7710', lane: 0, from: 'us-g5',
      desc: 'Middle school, grades 6–8. Pupils have subject teachers, and some accelerated math ' +
        'tracks start here (e.g. Algebra I in grade 8).' },
    { id: 'hs', name: 'High school', color: '#1E66C9', lane: 0, from: 'us-g8',
      desc: 'Comprehensive high school, grades 9–12, where credits are earned course by course. ' +
        'Electives, honors and Advanced Placement (AP) or IB courses are available; career & ' +
        'technical education (CTE) is offered within high school.' },
    { id: 'college', name: '4-year college', color: '#7A3E9D', lane: -2, from: 'us-g12',
      desc: 'Universities and colleges, public or private. Admission uses grades (GPA), course ' +
        'rigor, essays, and sometimes SAT/ACT scores. Students start with a broad general ' +
        'education and declare a major by the end of year 2.' },
    { id: 'prof', name: 'Professional', color: '#B0306A', lane: -3, from: 'us-ba',
      desc: 'Graduate professional degrees entered after a bachelor\'s: law (JD, 3 yrs), medicine ' +
        '(MD/DO, 4 yrs plus 3–7 yrs residency), dentistry, pharmacy and veterinary medicine.' },
    { id: 'cc', name: 'Community college', color: '#2C9546', lane: -1, from: 'us-g12',
      desc: 'Public two-year colleges with open admission and low tuition. They offer associate ' +
        'degrees, certificates and transfer programmes. About a third of all undergraduates ' +
        'attend one.' },
    { id: 'trade', name: 'Trade & apprenticeship', color: '#00A0A6', lane: 1, from: 'us-g12',
      desc: 'Trade and technical schools (certificates and diplomas, 6 months to 2 years) and ' +
        'Registered Apprenticeships (1–5 yrs, paid, e.g. electrician or plumber).' },
    { id: 'ged', name: 'GED / HSE', color: '#8B6B4A', lane: 2, from: 'us-g10',
      desc: 'High-school equivalency (GED, HiSET) for those who leave high school without a ' +
        'diploma. The minimum age is usually 16–18, depending on the state.' },
  ],
  stations: [
    { id: 'us-care', line: 'pre', name: 'Childcare', ages: [0, 3], isced: 0, desc: 'Mostly private and paid for by families, with subsidies for low-income families.',
      cost: { amount: 13128, note: 'National average price of child care in 2024 (Child Care Aware). Mostly private; subsidies help low-income families', src: 6 } },
    { id: 'us-pre', line: 'pre', name: 'Preschool', ages: [3, 4], isced: 0, desc: 'Preschool for 3-year-olds, plus Head Start.',
      cost: { amount: 13128, note: 'Most families pay private fees (about $13,100 average in 2024); only 9% of 3-year-olds get free state-funded preschool', src: 6 },
      share: { pct: 9, of: 'of 3-year-olds were enrolled in state-funded preschool (2024–25)', src: 7 } },
    { id: 'us-prek', line: 'pre', name: 'Pre-K', ages: [4, 5], isced: 0,
      desc: 'Pre-kindergarten for 4-year-olds, publicly funded in many states (universal in e.g. Florida, Georgia, Oklahoma, Vermont, New York City and DC).',
      cost: { amount: 0, note: 'Free in state-funded pre-K, which served 37% of 4-year-olds in 2024–25; other families pay private fees', src: 7 },
      share: { pct: 37, of: 'of 4-year-olds were enrolled in state-funded pre-K (2024–25)', src: 7 } },
    { id: 'us-k', line: 'elem', name: 'K', local: 'Kindergarten', ages: [5, 6], isced: 0,
      desc: 'Usually full-day, held in elementary school. Kindergarten is classified as early childhood education (ISCED 0).',
      cost: { amount: 0, note: 'Free at public schools, including charter schools', src: 2 } },
    { id: 'us-g1', line: 'elem', name: 'Grade 1', ages: [6, 7], isced: 1, desc: 'First grade: reading, writing and arithmetic.',
      cost: { amount: 0, note: 'Free at public schools, including charter schools', src: 2 } },
    { id: 'us-g2', line: 'elem', name: 'Grade 2', ages: [7, 8], isced: 1, desc: 'Second grade.',
      cost: { amount: 0, note: 'Free at public schools, including charter schools', src: 2 } },
    { id: 'us-g3', line: 'elem', name: 'Grade 3', ages: [8, 9], isced: 1,
      desc: 'Annual state tests in reading and math begin (required by ESSA in grades 3–8). Some ' +
        'states require pupils to read at grade level before moving on to 4th grade.',
      events: ['State reading & math tests begin (grades 3–8)'],
      cost: { amount: 0, note: 'Free at public schools, including charter schools', src: 2 } },
    { id: 'us-g4', line: 'elem', name: 'Grade 4', ages: [9, 10], isced: 1, desc: 'NAEP (the “Nation\'s Report Card”) samples 4th graders.', events: ['NAEP sample'],
      cost: { amount: 0, note: 'Free at public schools, including charter schools', src: 2 } },
    { id: 'us-g5', line: 'elem', name: 'Grade 5', ages: [10, 11], isced: 1, desc: 'Final elementary year in most districts.', events: ['State science test (grade 5)'],
      cost: { amount: 0, note: 'Free at public schools, including charter schools', src: 2 } },
    { id: 'us-g6', line: 'mid', name: 'Grade 6', ages: [11, 12], isced: 2, desc: 'Start of middle school in most districts.',
      cost: { amount: 0, note: 'Free at public schools, including charter schools', src: 2 } },
    { id: 'us-g7', line: 'mid', name: 'Grade 7', ages: [12, 13], isced: 2, desc: 'Seventh grade.',
      cost: { amount: 0, note: 'Free at public schools, including charter schools', src: 2 } },
    { id: 'us-g8', line: 'mid', name: 'Grade 8', ages: [13, 14], isced: 2,
      desc: 'Final middle-school year. Pupils select high-school courses, and some apply to ' +
        'selective magnet, charter or exam schools.',
      events: ['NAEP sample', 'State science test (grade 8)', 'High-school course selection'],
      cost: { amount: 0, note: 'Free at public schools, including charter schools', src: 2 } },
    { id: 'us-g9', line: 'hs', name: 'Grade 9', local: 'Freshman', ages: [14, 15], isced: 3,
      desc: 'High school begins and credits start to count toward graduation (typically 20–26 credits). Grade 9 is ISCED 3 in the US.',
      cost: { amount: 0, note: 'Free at public schools, including charter schools', src: 2 } },
    { id: 'us-g10', line: 'hs', name: 'Grade 10', local: 'Sophomore', ages: [15, 16], isced: 3,
      desc: 'Many states use end-of-course exams (e.g. Algebra I, English 10) or a state test in high school.', events: ['PSAT 10 (optional)', 'State high-school assessment'],
      cost: { amount: 0, note: 'Free at public schools, including charter schools', src: 2 } },
    { id: 'us-g11', line: 'hs', name: 'Grade 11', local: 'Junior', ages: [16, 17], isced: 3,
      desc: 'The key year for college admission: AP exams (May), PSAT/NMSQT (October) and ' +
        'SAT/ACT. Dual enrollment lets students take college courses while still in high school.',
      events: ['PSAT/NMSQT (October)', 'SAT / ACT', 'AP exams (May)'],
      cost: { amount: 0, note: 'Free at public schools, including charter schools', src: 2 } },
    { id: 'us-g12', line: 'hs', name: 'Grade 12', local: 'Senior', ages: [17, 18], isced: 3,
      desc: 'College applications (Early Decision in November, Regular Decision around 1 January) ' +
        'and the FAFSA for financial aid. Graduation is in May or June.',
      exam: 'High-school diploma', events: ['College applications (Nov–Jan)', 'FAFSA (from October)', 'AP exams (May)', 'Graduation'],
      cost: { amount: 0, note: 'Free at public schools, including charter schools', src: 2 } },
    { id: 'us-ba', line: 'college', name: 'Bachelor\'s', ages: [18, 22], isced: 6,
      desc: '4 years (about 120 semester credits): Freshman, Sophomore, Junior and Senior years. ' +
        'The first years cover broad general education.',
      exam: 'Bachelor\'s degree (BA/BS)',
      cost: { amount: 11950, private: 45000, note: 'Average published in-state tuition and fees at public 4-year colleges, 2025–26; grants lower the net price for many students', src: 5 },
      share: { pct: 42, of: 'of 2024 high-school graduates were at a 4-year college that October (2 in 3 of the 62.8% enrolled)', src: 10 } },
    { id: 'us-ma', line: 'college', name: 'Master\'s', ages: [22, 24], isced: 7, desc: 'Master\'s degree, 1–2 years (MA, MS, MBA, MEd…).', exam: 'Master\'s degree',
      cost: { amount: 12600, private: 29900, note: 'About: average in-state graduate tuition and fees at public institutions; private nonprofit about $29,900 (2021–22, latest NCES)', src: 8 } },
    { id: 'us-phd', line: 'college', name: 'PhD', ages: [24, 29], isced: 8,
      desc: 'Typically 5–6 years, including coursework, qualifying exams and a dissertation. Many ' +
        'students enter straight from a bachelor\'s.', exam: 'Doctorate (PhD)',
      cost: { amount: 0, note: 'Research PhD students usually get a tuition waiver plus a stipend or assistantship; unfunded students pay graduate tuition' } },
    { id: 'us-jd', line: 'prof', name: 'Law / Medicine', local: 'JD · MD', ages: [22, 26], isced: 7,
      desc: 'Law school (JD, 3 yrs, after the LSAT) or medical school (MD/DO, 4 yrs, after the MCAT), followed by the bar exam or a medical residency.', exam: 'JD / MD',
      cost: { amount: 40000, private: 70000, note: 'About: median first-year tuition and fees at public medical schools for state residents; private about $70,000 (AAMC 2025–26). Law differs', src: 9 } },
    { id: 'us-aa', line: 'cc', name: 'Associate', local: 'AA / AS / AAS', ages: [18, 20], isced: 5,
      desc: 'Two-year associate degree (about 60 credits). The AA and AS are designed for transfer; the AAS is career-focused.', exam: 'Associate degree',
      cost: { amount: 4150, note: 'Average published in-district tuition and fees at public 2-year colleges, 2025–26', src: 5 },
      share: { pct: 21, of: 'of 2024 high-school graduates were at a 2-year college that October (1 in 3 of the 62.8% enrolled)', src: 10 } },
    { id: 'us-trade', line: 'trade', name: 'Trade school', ages: [18, 20], isced: 4,
      desc: 'Certificates in fields like welding, HVAC, cosmetology, nursing assistant or IT, ' +
        'leading to licensing exams.', exam: 'Certificate / license',
      cost: { amount: 4150, note: 'About: public technical and community colleges charge around the 2-year average (2025–26); for-profit schools usually cost more', src: 5 } },
    { id: 'us-appr', line: 'trade', name: 'Apprenticeship', ages: [20, 23], isced: 4,
      desc: 'Registered Apprenticeship: paid on-the-job training plus classroom instruction. ' +
        'Leads to a nationally recognised journeyworker credential.', exam: 'Journeyworker certificate',
      cost: { amount: 0, note: 'Usually no tuition: employers or sponsors pay for training, and apprentices earn wages', src: 3 } },
    { id: 'us-ged', line: 'ged', name: 'GED / HiSET', ages: [16, 18], isced: 3,
      desc: 'A four-subject test battery that gives a high-school equivalency credential. It is ' +
        'accepted by community colleges and most employers.', exam: 'High-school equivalency',
      cost: { amount: 120, note: 'About $120–160 for the four tests ($30–40 per subject in most states); fees are set by each state', src: 11 } },
  ],
  transfers: [
    { from: 'us-aa', to: 'us-ba', label: 'Community college → university', desc: 'The “2+2” route: transfer as a junior after an associate degree. Many states guarantee transfer agreements.' },
    { from: 'us-ged', to: 'us-aa', label: 'GED → community college', desc: 'Community colleges have open admission for diploma or equivalency holders.' },
    { from: 'us-g12', to: 'us-appr', label: 'Diploma → apprenticeship', desc: 'Most apprenticeships require a diploma or GED and a minimum age of 18.' },
    { from: 'us-g11', to: 'us-aa', label: 'Dual enrollment', desc: 'High-school students earn college credit at the same time. Some “early college” high schools award an associate degree with the diploma.' },
    { from: 'us-ba', to: 'us-phd', label: 'Bachelor\'s → PhD', desc: 'US PhD programmes often admit students straight after the bachelor\'s.' },
  ],
  sources: [
    { title: 'U.S. Department of Education — Structure of U.S. Education', url: 'https://www.ed.gov/about/ed-overview/structure-of-us-education' },
    { title: 'NCES — State compulsory school attendance laws (Table 5.1)', url: 'https://nces.ed.gov/programs/statereform/tab5_1.asp' },
    { title: 'NCES — Digest of Education Statistics', url: 'https://nces.ed.gov/programs/digest/' },
    { title: 'Apprenticeship.gov — Registered Apprenticeship', url: 'https://www.apprenticeship.gov/' },
    { title: 'College Board — AP, SAT & PSAT', url: 'https://www.collegeboard.org/' },
    { title: 'College Board — Trends in College Pricing 2025 (highlights)', url: 'https://research.collegeboard.org/trends/college-pricing/highlights' },
    { title: 'Child Care Aware of America — Price of Care 2024', url: 'https://www.childcareaware.org/price-landscape24/' },
    { title: 'NIEER — The State of Preschool 2025 (yearbook)', url: 'https://nieer.org/yearbook/2025' },
    { title: 'NCES Digest — Table 330.50: Graduate tuition and required fees', url: 'https://nces.ed.gov/programs/digest/d22/tables/dt22_330.50.asp' },
    { title: 'AAMC — Tuition and Student Fees Reports (2025–26)', url: 'https://www.aamc.org/data-reports/reporting-tools/report/tuition-and-student-fees-reports' },
    { title: 'BLS — College enrollment and work activity of recent high school graduates (2024)', url: 'https://www.bls.gov/news.release/hsgec.nr0.htm' },
    { title: 'GED Testing Service — How much does getting a GED cost?', url: 'https://www.ged.com/blog/how-much-does-getting-a-ged--cost--fees--courses---amp--material.html' },
  ],
};
