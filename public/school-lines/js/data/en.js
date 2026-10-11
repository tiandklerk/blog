// England (UK) — Scotland, Wales and Northern Ireland have separate systems.
export default {
  id: 'en',
  iso3: 'GBR',
  region: 'Europe',
  currency: 'GBP',
  costNote:
    'State schools and 16–18 education are free; childcare is partly funded and university fees are capped ' +
    'and loan-funded. Figures are for 2025/26–2026/27; private shows independent day-school fees including VAT.',
  name: 'England',
  localName: 'England (UK)',
  flag: '🇬🇧',
  summary:
    'A comprehensive system for most pupils: primary school from Reception (age 4) to Year 6, then ' +
    'secondary school from Year 7 to Year 11, ending in GCSEs at 16. In some areas, grammar schools ' +
    'select pupils by the 11-plus test. Between 16 and 18 young people must stay in education or ' +
    'training: A levels, T Levels, other college courses, or an apprenticeship. Bachelor\'s degrees ' +
    'usually take 3 years.',
  ageNote:
    'The school year runs September to August and children are grouped by their age on 1 September. ' +
    'A child born in August is therefore almost a year younger than a September-born classmate. ' +
    'Summer-born children can sometimes delay entry to Reception.',
  compulsory: {
    from: 5,
    to: 16,
    label: 'Compulsory school 5–16',
    note:
      'Compulsory school age starts on 31 December, 31 March or 31 August following the 5th birthday, ' +
      'whichever comes first. Almost all children start Reception at 4. School ends on the last ' +
      'Friday in June of the school year in which the child turns 16.',
    extendedTo: 18,
    extendedLabel: 'Education or training to 18',
    extendedNote:
      'Raising of the Participation Age: until their 18th birthday young people must be in ' +
      'full-time education, an apprenticeship, or work/volunteering combined with part-time study.',
  },
  lines: [
    { id: 'early', name: 'Early years', color: '#7C8A93', lane: 0,
      desc: 'Childcare and nursery. Government-funded hours are available, and the Early Years ' +
        'Foundation Stage (EYFS) framework applies from birth to the end of Reception.' },
    { id: 'primary', name: 'Primary', color: '#D2322D', lane: 0, from: 'en-nursery',
      desc: 'Primary school, Reception and Years 1–6. Key Stage 1 covers Years 1–2 and Key Stage 2 ' +
        'covers Years 3–6. Schools can be maintained, academies or free schools, and some areas ' +
        'have infant and junior schools instead.' },
    { id: 'secondary', name: 'Secondary', color: '#1E66C9', lane: 0, from: 'en-y6',
      desc: 'State secondary school, Years 7–11: comprehensives and academies. Key Stage 3 covers ' +
        'Years 7–9 and Key Stage 4 covers Years 10–11 (GCSEs). About 6% of pupils attend ' +
        'independent (fee-paying) schools, which have charged 20% VAT since January 2025.' },
    { id: 'grammar', name: 'Grammar', color: '#7A3E9D', lane: -1, from: 'en-y6',
      desc: 'Selective state grammar schools (163, in areas such as Kent, Buckinghamshire, ' +
        'Lincolnshire, Trafford and parts of London). Entry is by the 11-plus test, taken in ' +
        'September of Year 6.' },
    { id: 'alevel', name: 'A levels', color: '#5B2C83', lane: -2, from: 'en-y11',
      desc: 'Sixth form (school or sixth-form college), Years 12–13. Students usually take three A ' +
        'levels, sometimes plus an Extended Project Qualification (EPQ).' },
    { id: 'uni', name: 'University', color: '#3B1F5E', lane: -2, from: 'en-y13',
      desc: 'Higher education. Applications go through UCAS. Tuition fees are capped at £9,790 in ' +
        '2026/27 and £10,050 in 2027/28, and are covered by student loans.' },
    { id: 'tlevel', name: 'T Levels', color: '#00A0A6', lane: 1, from: 'en-y11',
      desc: 'Two-year technical qualification, introduced in 2020 and equivalent to 3 A levels. ' +
        'Includes an industry placement of at least 315 hours (about 45 days).' },
    { id: 'fe', name: 'FE college', color: '#2C9546', lane: 2, from: 'en-y11',
      desc: 'Further education colleges: vocational courses at levels 1–3, such as BTECs and ' +
        'technical awards. Students who did not get grade 4 in GCSE English or maths must keep ' +
        'studying them.' },
    { id: 'appr', name: 'Apprenticeship', color: '#DD7710', lane: 3, from: 'en-y11',
      desc: 'A paid job with at least 20% off-the-job training. Levels: intermediate (L2), advanced ' +
        '(L3), higher (L4–5) and degree (L6–7). The employer and government pay for training.' },
  ],
  stations: [
    { id: 'en-childcare', line: 'early', name: 'Childcare', local: 'Nursery / childminder', ages: [0, 3], isced: 0,
      desc: 'Since September 2025, eligible working parents can get 30 funded hours a week (38 weeks a year) from 9 months old.',
      cost: { amount: 10800, note: 'About £10,800 for 50 h/week under 2: £149/week in term after 30 funded hours, about £372/week in holidays (Coram 2026)', src: 8 } },
    { id: 'en-nursery', line: 'early', name: 'Pre-school', local: 'Nursery class', ages: [3, 4], isced: 0,
      desc: 'All 3- and 4-year-olds get 15 funded hours a week, or 30 hours for eligible working ' +
        'parents. Often takes place in a school nursery class.',
      cost: { amount: 5000, note: 'About £5,000: 20 extra hours on top of 30 funded hours cost £133/week over 38 weeks (Coram 2026). 15 hours are free for all', src: 8 } },
    { id: 'en-rec', line: 'primary', name: 'Reception', ages: [4, 5], isced: 0,
      desc: 'Final year of the EYFS, held in primary school. The Reception Baseline Assessment ' +
        '(RBA) is done in the first 6 weeks, and the EYFS Profile is completed in the summer term.',
      events: ['Reception Baseline Assessment (autumn)', 'EYFS Profile (summer)', 'Apply for a primary place by 15 January'],
      cost: { amount: 0, private: 20800, note: 'Free at state schools; trips and extras are voluntary. About 6% of pupils attend independent schools (fees incl. 20% VAT since 2025)', src: 10 } },
    { id: 'en-y1', line: 'primary', name: 'Year 1', ages: [5, 6], isced: 1,
      desc: 'Key Stage 1 begins. Systematic synthetic phonics is a key focus.',
      events: ['Phonics screening check (June)'],
      cost: { amount: 0, private: 20800, note: 'Free at state schools; trips and extras are voluntary. About 6% of pupils attend independent schools (fees incl. 20% VAT since 2025)', src: 10 } },
    { id: 'en-y2', line: 'primary', name: 'Year 2', ages: [6, 7], isced: 1,
      desc: 'End of Key Stage 1. KS1 SATs have been optional since 2023/24. Pupils who did not pass ' +
        'the phonics check retake it.',
      cost: { amount: 0, private: 20800, note: 'Free at state schools; trips and extras are voluntary. About 6% of pupils attend independent schools (fees incl. 20% VAT since 2025)', src: 10 } },
    { id: 'en-y3', line: 'primary', name: 'Year 3', ages: [7, 8], isced: 1,
      desc: 'Key Stage 2 begins; in some areas pupils move from an infant to a junior school.',
      cost: { amount: 0, private: 20800, note: 'Free at state schools; trips and extras are voluntary. About 6% of pupils attend independent schools (fees incl. 20% VAT since 2025)', src: 10 } },
    { id: 'en-y4', line: 'primary', name: 'Year 4', ages: [8, 9], isced: 1,
      desc: 'Statutory online test of times tables up to 12×12.',
      events: ['Multiplication tables check (June)'],
      cost: { amount: 0, private: 20800, note: 'Free at state schools; trips and extras are voluntary. About 6% of pupils attend independent schools (fees incl. 20% VAT since 2025)', src: 10 } },
    { id: 'en-y5', line: 'primary', name: 'Year 5', ages: [9, 10], isced: 1,
      desc: 'Upper Key Stage 2. In grammar-school areas, families register for the 11-plus in the summer term.',
      cost: { amount: 0, private: 20800, note: 'Free at state schools; trips and extras are voluntary. About 6% of pupils attend independent schools (fees incl. 20% VAT since 2025)', src: 10 } },
    { id: 'en-y6', line: 'primary', name: 'Year 6', ages: [10, 11], isced: 1,
      desc: 'Final primary year. Pupils sit the KS2 SATs (reading, maths, and grammar, punctuation ' +
        '& spelling) in May. Secondary school applications are due by 31 October, and offers ' +
        'arrive on National Offer Day (1 March).',
      exam: 'KS2 SATs',
      events: ['11-plus (September, grammar areas)', 'Secondary application deadline 31 October', 'National Offer Day 1 March', 'KS2 SATs (May)'],
      cost: { amount: 0, private: 20800, note: 'Free at state schools; trips and extras are voluntary. About 6% of pupils attend independent schools (fees incl. 20% VAT since 2025)', src: 10 } },
    { id: 'en-y7', line: 'secondary', name: 'Year 7', ages: [11, 12], isced: 2,
      desc: 'Key Stage 3 begins, with the broad national curriculum and a modern foreign language.',
      cost: { amount: 0, private: 23400, note: 'Free at state schools. Independent day schools average about £23,400 a year including VAT (ISC 2026); 6.3% of pupils are independent', src: 10 } },
    { id: 'en-y8', line: 'secondary', name: 'Year 8', ages: [12, 13], isced: 2, desc: 'Key Stage 3.',
      cost: { amount: 0, private: 23400, note: 'Free at state schools. Independent day schools average about £23,400 a year including VAT (ISC 2026); 6.3% of pupils are independent', src: 10 } },
    { id: 'en-y9', line: 'secondary', name: 'Year 9', ages: [13, 14], isced: 2,
      desc: 'End of Key Stage 3. Pupils choose GCSE options; English, maths and science are compulsory.',
      events: ['GCSE options chosen'],
      cost: { amount: 0, private: 23400, note: 'Free at state schools. Independent day schools average about £23,400 a year including VAT (ISC 2026); 6.3% of pupils are independent', src: 10 } },
    { id: 'en-y10', line: 'secondary', name: 'Year 10', ages: [14, 15], isced: 2,
      desc: 'Key Stage 4: two-year GCSE courses, typically 8–10 subjects.',
      cost: { amount: 0, private: 23400, note: 'Free at state schools. Independent day schools average about £23,400 a year including VAT (ISC 2026); 6.3% of pupils are independent', src: 10 } },
    { id: 'en-y11', line: 'secondary', name: 'Year 11', ages: [15, 16], isced: 2,
      desc: 'GCSE exams take place in May and June and are graded 9–1. Grade 4 is a “standard pass” ' +
        'and grade 5 a “strong pass”. Most sixth forms require 5+ GCSEs at grade 4–6.',
      exam: 'GCSEs', events: ['GCSE exams (May–June)', 'Results day (late August)'],
      cost: { amount: 0, private: 23400, note: 'Free at state schools. Independent day schools average about £23,400 a year including VAT (ISC 2026); 6.3% of pupils are independent', src: 10 } },
    { id: 'en-gs1', line: 'grammar', name: 'Years 7–9', ages: [11, 14], isced: 2,
      desc: 'Key Stage 3 at a selective school. Pupils usually take the same national curriculum ' +
        'at a faster pace.',
      cost: { amount: 0, note: 'Grammar schools are state schools and charge no fees', src: 14 },
      share: { pct: 5.3, of: 'of pupils in state-funded secondary schools attend one of the 163 grammar schools (January 2026)', src: 9 } },
    { id: 'en-gs2', line: 'grammar', name: 'Years 10–11', ages: [14, 16], isced: 2,
      desc: 'GCSEs. Most grammar schools have their own sixth form.', exam: 'GCSEs',
      cost: { amount: 0, note: 'Grammar schools are state schools and charge no fees', src: 14 } },
    { id: 'en-y12', line: 'alevel', name: 'Year 12', local: 'Lower sixth', ages: [16, 17], isced: 3,
      desc: 'First year of A levels; students choose 3 (or 4) subjects. Stand-alone AS levels are ' +
        'now rare.',
      cost: { amount: 0, private: 24300, note: 'Free at school sixth forms and colleges for 16–18s. Independent sixth-form day fees average about £24,300 including VAT (ISC 2026)', src: 10 } },
    { id: 'en-y13', line: 'alevel', name: 'Year 13', local: 'Upper sixth', ages: [17, 18], isced: 3,
      desc: 'Students apply through UCAS in the autumn (the equal-consideration deadline is in mid-' +
        'January) and sit A level exams in May and June. Results are published in mid-August.',
      exam: 'A levels (A*–E)', events: ['UCAS application', 'A level exams (May–June)', 'Results day (mid-August)'],
      cost: { amount: 0, private: 24300, note: 'Free at school sixth forms and colleges for 16–18s. Independent sixth-form day fees average about £24,300 including VAT (ISC 2026)', src: 10 } },
    { id: 'en-ba', line: 'uni', name: 'Bachelor\'s', ages: [18, 21], isced: 6,
      desc: 'A bachelor\'s degree (BA/BSc) usually takes 3 years, or 4 with a placement or year ' +
        'abroad. It is classified as First, 2:1, 2:2 or Third.',
      exam: 'Bachelor\'s degree (honours)',
      cost: { amount: 9790, note: 'Tuition fee cap for 2026/27 (£10,050 in 2027/28), charged by most universities and covered by a student loan', src: 7 } },
    { id: 'en-ma', line: 'uni', name: 'Master\'s', ages: [21, 22], isced: 7,
      desc: 'A taught master\'s (MA/MSc) usually takes 1 year. Integrated masters (MEng, MSci) ' +
        'make it a 4-year undergraduate degree.', exam: 'Master\'s degree',
      cost: { amount: 10000, note: 'About £8,000–12,000: master’s fees are not capped and vary by subject. Master’s Loan up to £13,206 (2026/27)', src: 11 } },
    { id: 'en-phd', line: 'uni', name: 'PhD', ages: [22, 26], isced: 8,
      desc: 'A doctorate takes 3–4 years of full-time research and ends with a thesis and a viva.', exam: 'Doctorate',
      cost: { amount: 5238, note: 'UKRI fee level 2026/27, usually paid by a studentship that also pays a £21,805 tax-free stipend; self-funded students pay it', src: 12 } },
    { id: 'en-t1', line: 'tlevel', name: 'T Level yr 1', ages: [16, 17], isced: 3,
      desc: 'Technical study in a route such as Digital, Health, Construction, Engineering or ' +
        'Education & Childcare.',
      cost: { amount: 0, note: 'Free for 16–18-year-olds at colleges and sixth forms', src: 15 } },
    { id: 'en-t2', line: 'tlevel', name: 'T Level yr 2', ages: [17, 18], isced: 3,
      desc: 'Finishes the industry placement (at least 315 hours). Grades range from Pass to ' +
        'Distinction*, and a T Level carries the same UCAS points as 3 A levels.',
      exam: 'T Level',
      cost: { amount: 0, note: 'Free for 16–18-year-olds at colleges and sixth forms', src: 15 } },
    { id: 'en-fe1', line: 'fe', name: 'Level 1–2', ages: [16, 17], isced: 3,
      desc: 'Entry-level, level 1 and level 2 vocational courses, plus GCSE English and maths ' +
        'resits. T Level foundation year.',
      cost: { amount: 0, note: 'Free for 16–18-year-olds at colleges and sixth forms', src: 15 } },
    { id: 'en-fe2', line: 'fe', name: 'Level 3', local: 'BTEC / applied', ages: [17, 19], isced: 3,
      desc: 'Level 3 vocational qualifications such as BTECs, which count for UCAS entry. The October ' +
        '2025 Post-16 white paper plans to replace most of them with new V Levels.',
      exam: 'Level 3 diploma',
      cost: { amount: 0, note: 'Free for 16–18-year-olds at colleges and sixth forms', src: 15 } },
    { id: 'en-ap2', line: 'appr', name: 'Level 2', local: 'Intermediate', ages: [16, 17], isced: 3,
      desc: 'Paid job plus training. The minimum length fell from 12 to 8 months in 2025; most take 12–18 months.',
      cost: { amount: 0, note: 'No fee: apprentices are paid employees; the employer and government pay for the training', src: 5 } },
    { id: 'en-ap3', line: 'appr', name: 'Level 3', local: 'Advanced', ages: [17, 19], isced: 3,
      desc: 'Level 3 apprenticeship, equivalent to A level (12–24 months). Ends with an end-point assessment.',
      exam: 'End-point assessment',
      cost: { amount: 0, note: 'No fee: apprentices are paid employees; the employer and government pay for the training', src: 5 } },
    { id: 'en-ap5', line: 'appr', name: 'Level 4–5', local: 'Higher', ages: [19, 21], isced: 5,
      desc: 'Higher apprenticeship at HNC/HND or foundation-degree level.',
      cost: { amount: 0, note: 'No fee: apprentices are paid employees; the employer and government pay for the training', src: 5 } },
    { id: 'en-ap6', line: 'appr', name: 'Level 6–7', local: 'Degree apprenticeship', ages: [21, 24], isced: 6,
      desc: 'A full bachelor\'s or master\'s degree earned while employed, with no tuition fees for the apprentice.',
      exam: 'Bachelor\'s / master\'s degree',
      cost: { amount: 0, note: 'No tuition fee for the apprentice: degree costs are paid by the employer and government, and the apprentice earns a wage', src: 5 } },
  ],
  transfers: [
    { from: 'en-gs2', to: 'en-y12', label: 'Grammar → sixth form', desc: 'Most grammar pupils continue to A levels, often in their own sixth form.' },
    { from: 'en-t2', to: 'en-ba', label: 'T Level → university', desc: 'T Levels carry UCAS points, and many universities accept them for related courses.' },
    { from: 'en-fe2', to: 'en-ba', label: 'Level 3 → university', desc: 'Level 3 vocational diplomas carry UCAS points.' },
    { from: 'en-fe1', to: 'en-ap3', label: 'College → apprenticeship', desc: 'Level 2 learners often progress into an advanced apprenticeship.' },
    { from: 'en-y13', to: 'en-ap6', label: 'A levels → degree apprenticeship', desc: 'A competitive alternative to university, with no tuition fees.' },
    { from: 'en-y13', to: 'en-ap3', label: 'A levels → apprenticeship', desc: 'Many apprentices start after sixth form.' },
    { from: 'en-ap3', to: 'en-ba', label: 'Apprenticeship → university', desc: 'Advanced (L3) apprenticeships can count towards university entry.' },
  ],
  sources: [
    { title: 'GOV.UK — The national curriculum (key stages)', url: 'https://www.gov.uk/national-curriculum' },
    { title: 'GOV.UK — School admissions & starting school', url: 'https://www.gov.uk/schools-admissions' },
    { title: 'GOV.UK — Know when you can leave school (participation to 18)', url: 'https://www.gov.uk/know-when-you-can-leave-school' },
    { title: 'GOV.UK — Primary assessments (phonics, MTC, SATs)', url: 'https://www.gov.uk/government/collections/national-curriculum-assessments-practice-materials' },
    { title: 'GOV.UK — Introduction to T Levels', url: 'https://www.gov.uk/government/publications/introduction-of-t-levels' },
    { title: 'GOV.UK — Become an apprentice', url: 'https://www.gov.uk/become-apprentice' },
    { title: 'GOV.UK — Childcare support / free childcare', url: 'https://www.gov.uk/get-childcare' },
    { title: 'GOV.UK — Changes to tuition fees: 2026 to 2027 and 2027 to 2028', url: 'https://www.gov.uk/government/publications/tuition-fees-and-student-support-2026-to-2027-academic-year/changes-to-tuition-fees-2026-to-2027-academic-year-and-2027-to-2028-academic-year' },
    { title: 'Coram — Childcare Survey 2026', url: 'https://www.coram.org.uk/wp-content/uploads/2026/03/Childcare-Survey-2026.pdf' },
    { title: 'DfE — Schools, pupils and their characteristics 2025/26', url: 'https://explore-education-statistics.service.gov.uk/find-statistics/school-pupils-and-their-characteristics/2025-26' },
    { title: 'Independent Schools Council — ISC Census 2026 (fees excl. VAT)', url: 'https://www.isc.co.uk/media/5rmduu0j/2026-06-isc-census-2026.pdf' },
    { title: 'GOV.UK — Master\'s Loan', url: 'https://www.gov.uk/masters-loan' },
    { title: 'UKRI — Get a studentship to fund your doctorate (2026/27 rates)', url: 'https://www.ukri.org/what-we-do/developing-people-and-skills/find-studentships-and-doctoral-training/get-a-studentship-to-fund-your-doctorate/' },
    { title: 'DfE — Post-16 education and skills white paper (October 2025)', url: 'https://www.gov.uk/government/publications/post-16-education-and-skills-white-paper' },
    { title: 'GOV.UK — Charging for school activities', url: 'https://www.gov.uk/government/publications/charging-for-school-activities' },
    { title: 'GOV.UK — Further education courses and funding', url: 'https://www.gov.uk/further-education-courses' },
  ],
};
