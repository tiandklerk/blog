// Scotland (UK) — education is devolved; England, Wales and Northern Ireland have separate systems.
export default {
  id: 'sc',
  iso3: 'GBR',
  region: 'Europe',
  currency: 'GBP',
  name: 'Scotland',
  localName: 'Scotland (UK)',
  flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  summary:
    'Funded early learning and childcare (1,140 hours a year) from age 3, then seven years of primary ' +
    '(P1–P7) and up to six years of comprehensive, non-selective secondary (S1–S6). Under Curriculum for ' +
    'Excellence, a broad general education runs to the end of S3; the senior phase (S4–S6) leads to ' +
    'National 4/5, Highers and Advanced Highers. Pupils may leave at 16 for college (HNC/HND), a Modern ' +
    'Apprenticeship or work. Honours degrees take four years and are free for Scottish-domiciled students. ' +
    'Qualifications are now awarded by Qualifications Scotland, which replaced the SQA under the Education ' +
    '(Scotland) Act 2025, while reforms following the Hayward review are debated.',
  ageNote:
    'Unlike England (1 September cut-off), a Scottish year group runs from 1 March to the end of February, ' +
    'so children start P1 in August aged between about 4½ and 5½. Any child still 4 on the first day of ' +
    'school can defer P1 by a year, and since August 2023 every deferred child automatically gets another ' +
    'year of funded ELC. Many pupils leave after S5 and enter university at 17.',
  compulsory: {
    from: 5,
    to: 16,
    label: 'School age ~5–16',
    note:
      'Compulsory from the P1 start date after age 4½–5½ (with deferral possible) until the official ' +
      'leaving date: 31 May for pupils who turn 16 between 1 March and 30 September, or the Christmas ' +
      'holidays for those who turn 16 between 1 October and the end of February. There is no legal duty to ' +
      'stay in education after 16, but every 16–19-year-old is offered a place in learning or training.',
  },
  costNote:
    'State schooling is free. Funded ELC covers 3–5-year-olds (and some 2-year-olds); under-3 childcare is ' +
    'otherwise paid by parents. SAAS pays university and HN tuition fees for Scottish-domiciled students, so ' +
    'the family pays nothing. Postgraduate fees vary and are not shown.',
  lines: [
    { id: 'early', name: 'Childcare', color: '#7C8A93', lane: 0,
      desc: 'Nurseries and childminders for under-3s. Mostly paid by parents; eligible 2-year-olds (e.g. ' +
        'families on certain benefits) get funded hours.' },
    { id: 'elc', name: 'Funded ELC', color: '#E2557B', lane: 0, from: 'sc-cc',
      desc: 'Early learning and childcare: 1,140 funded hours a year (about 30 hours a week in term time) ' +
        'for every 3- and 4-year-old since August 2021, at council nurseries or funded private providers.' },
    { id: 'primary', name: 'Primary', color: '#D2322D', lane: 0, from: 'sc-elc',
      desc: 'Primary school, P1–P7, part of the broad general education (BGE) of Curriculum for Excellence. ' +
        'Learning is tracked through CfE levels (Early, First, Second) rather than national exams.' },
    { id: 'secondary', name: 'Secondary', color: '#1E66C9', lane: 0, from: 'sc-p7',
      desc: 'Comprehensive state secondary school, S1–S6. S1–S3 complete the BGE (Third and Fourth levels); ' +
        'S4–S6 are the senior phase with national qualifications. A small minority attend independent schools.' },
    { id: 'uni', name: 'University', color: '#5B2C83', lane: -1, from: 'sc-s6',
      desc: 'Scottish universities: ordinary degree (3 years, SCQF 9) or honours degree (4 years, SCQF 10), ' +
        'then taught master\'s and doctorates. Applications go through UCAS; fees for Scottish students are ' +
        'paid by SAAS.' },
    { id: 'college', name: 'College', color: '#00A0A6', lane: 1, from: 'sc-s4',
      desc: 'Further education colleges: school-leaver courses (National Certificates, SCQF 4–6), Higher ' +
        'National Certificates (HNC, SCQF 7) and Higher National Diplomas (HND, SCQF 8). Many school pupils ' +
        'also take college courses during S5–S6.' },
    { id: 'appr', name: 'Apprenticeship', color: '#DD7710', lane: 2, from: 'sc-s4',
      desc: 'Paid apprenticeships: Modern Apprenticeships (100+ frameworks, SCQF 4/5 up to 11) and Graduate ' +
        'Apprenticeships (degree-level, SCQF 9–11). Foundation Apprenticeships are taken in S5–S6 alongside Highers.' },
  ],
  stations: [
    { id: 'sc-cc', line: 'early', name: 'Childcare', local: 'Nursery / childminder', ages: [0, 3], isced: 0,
      desc: 'Under-3 care is mostly paid by parents; eligible 2-year-olds get up to 1,140 funded hours.',
      cost: { amount: 6364, note: 'About £122 a week for 25 hours of nursery care for an under-2 (2025 average) × 52 weeks; no universal subsidy.', src: 5 } },
    { id: 'sc-elc', line: 'elc', name: 'Funded ELC', local: 'Nursery (early learning and childcare)', ages: [3, 5], isced: 0,
      desc: 'Children can start funded ELC in the term after their 3rd birthday. Up to 1,140 hours a year, ' +
        'used flexibly at council or funded private settings. Children who defer P1 get an extra funded year.',
      events: ['Funded place from the term after the 3rd birthday', 'P1 enrolment (January)', 'Deferral decision (early in the year)'],
      cost: { amount: 0, note: '1,140 hours a year funded for all 3–5-year-olds; extra hours and meals beyond that charged.', src: 0 } },
    // Primary
    { id: 'sc-p1', line: 'primary', name: 'P1', local: 'Primary 1', ages: [5, 6], isced: 1,
      desc: 'First year of primary, entered in August between 4½ and 5½. Play-based learning continues ' +
        '(Early level). Free school meals for all P1–P5 pupils.',
      events: ['Scottish National Standardised Assessments (SNSA, P1)'],
      cost: { amount: 0, note: 'Free; universal free school meals in P1–P5.' } },
    { id: 'sc-p23', line: 'primary', name: 'P2–P3', ages: [6, 8], isced: 1,
      desc: 'Reading, writing and numeracy at First level. Gaelic-medium education is available in many councils.',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'sc-p4', line: 'primary', name: 'P4', ages: [8, 9], isced: 1,
      desc: 'Standardised online assessments in literacy and numeracy; results inform teacher judgement ' +
        'and are not pass/fail.',
      events: ['SNSA (P4)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'sc-p56', line: 'primary', name: 'P5–P6', ages: [9, 11], isced: 1,
      desc: 'Second level of CfE. Most pupils learn two languages beyond English (the 1+2 approach).',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'sc-p7', line: 'primary', name: 'P7', local: 'Primary 7', ages: [11, 12], isced: 1,
      desc: 'Final primary year. Pupils go to their catchment secondary school (parents can make a placing ' +
        'request for another) with transition visits in June. There is no selection by ability.',
      events: ['SNSA (P7)', 'Transition days to secondary (June)'],
      cost: { amount: 0, note: 'Free.' } },
    // Secondary
    { id: 'sc-s12', line: 'secondary', name: 'S1–S2', ages: [12, 14], isced: 2,
      desc: 'Broad general education in all curriculum areas, taught by subject teachers.',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'sc-s3', line: 'secondary', name: 'S3', ages: [14, 15], isced: 2,
      desc: 'End of the BGE (Third/Fourth levels). Pupils choose subjects for the senior phase, typically 6–8 for S4.',
      events: ['SNSA (S3)', 'Subject choices for S4'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'sc-s4', line: 'secondary', name: 'S4', ages: [15, 16], isced: 2,
      desc: 'National 4 (SCQF 4, internally assessed, no exam) and National 5 (SCQF 5, with a final exam), ' +
        'graded A–D. Exams run from late April to early June; results arrive in early August. Pupils who ' +
        'turn 16 by 30 September can leave after 31 May.',
      exam: 'National 4 / National 5', events: ['Exam diet (late April – early June)', 'Results day (early August)'],
      cost: { amount: 0, note: 'Free; exam entries paid by the school.' } },
    { id: 'sc-s5', line: 'secondary', name: 'S5', ages: [16, 17], isced: 3,
      desc: 'Highers (SCQF 6), usually four or five in one year. Highers are the main university entry ' +
        'qualification, and many pupils get offers after S5.',
      exam: 'Highers', events: ['Exam diet (late April – early June)', 'UCAS applications from S5/S6'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'sc-s6', line: 'secondary', name: 'S6', ages: [17, 18], isced: 3,
      desc: 'Optional sixth year: more Highers, Advanced Highers (SCQF 7), college courses or Foundation ' +
        'Apprenticeships. The Hayward review (2023) proposed a broader Scottish Diploma of Achievement with ' +
        'fewer exams; the government has kept exams for now and is taking reform forward gradually.',
      exam: 'Advanced Highers', events: ['Exam diet (late April – early June)', 'Results day (early August)'],
      cost: { amount: 0, note: 'Free.' } },
    // University
    { id: 'sc-ug12', line: 'uni', name: 'Years 1–2', local: 'Undergraduate', ages: [18, 20], isced: 6,
      desc: 'Broad first years, often with subjects outside the main degree. Students with Advanced Highers ' +
        'or an HND may enter year 2 or 3.',
      cost: { amount: 0, note: 'Tuition paid by SAAS for Scottish-domiciled students; living costs via bursary and loan.', src: 4 } },
    { id: 'sc-hons', line: 'uni', name: 'Honours', local: 'Years 3–4 (honours)', ages: [20, 22], isced: 6,
      desc: 'Honours years with a dissertation. Exiting after year 3 gives an ordinary degree. MA (Hons) is ' +
        'the first degree in arts at the ancient universities.',
      exam: 'Bachelor\'s / MA (Hons), SCQF 10',
      cost: { amount: 0, note: 'Tuition paid by SAAS for Scottish-domiciled students.', src: 4 } },
    { id: 'sc-pg', line: 'uni', name: 'Master\'s', ages: [22, 23], isced: 7,
      desc: 'One-year taught master\'s (MSc/MLitt, SCQF 11). Unlike undergraduate study, tuition is charged; ' +
        'SAAS offers a tuition loan.',
      exam: 'Master\'s degree' },
    { id: 'sc-phd', line: 'uni', name: 'PhD', ages: [23, 26], isced: 8,
      desc: 'Usually 3–4 years of research, often with a funded studentship. Ends with a thesis and viva.',
      exam: 'Doctorate (SCQF 12)' },
    // College
    { id: 'sc-nc', line: 'college', name: 'NC', local: 'National Certificate / FE', ages: [16, 17], isced: 3,
      desc: 'Full-time vocational courses at SCQF 4–6 for school leavers, plus Highers at college.',
      cost: { amount: 0, note: 'Free for 16–18-year-olds; fees paid for Scottish students.' } },
    { id: 'sc-hnc', line: 'college', name: 'HNC', ages: [17, 18], isced: 5,
      desc: 'Higher National Certificate (SCQF 7), one year full-time, in fields such as engineering, ' +
        'business, computing or social care.',
      exam: 'HNC (SCQF 7)',
      cost: { amount: 0, note: 'Tuition paid by SAAS for Scottish-domiciled students.', src: 4 } },
    { id: 'sc-hnd', line: 'college', name: 'HND', ages: [18, 19], isced: 5,
      desc: 'Higher National Diploma (SCQF 8), a second year after the HNC. Articulation agreements let ' +
        'HND graduates enter year 2 or 3 of a related degree.',
      exam: 'HND (SCQF 8)',
      cost: { amount: 0, note: 'Tuition paid by SAAS for Scottish-domiciled students.', src: 4 } },
    // Apprenticeships
    { id: 'sc-ma', line: 'appr', name: 'Modern App.', local: 'Modern Apprenticeship', ages: [16, 19], isced: 3,
      desc: 'A paid job with training towards an SVQ, from SCQF 4/5 up to 11, open to anyone above school-' +
        'leaving age. Most take 1–4 years; the employer pays at least the apprentice minimum wage.',
      exam: 'Modern Apprenticeship (SVQ)',
      cost: { amount: 0, note: 'No fees; apprentices are paid.', src: 6 } },
    { id: 'sc-ga', line: 'appr', name: 'Graduate App.', local: 'Graduate Apprenticeship', ages: [19, 23], isced: 6,
      desc: 'Work-based degree at SCQF 9–11 (ordinary degree to master\'s), 2–5 years, in fields such as ' +
        'engineering, IT and business. Apprentices are employed and pay no tuition.',
      exam: 'Degree (SCQF 9–11)',
      cost: { amount: 0, note: 'No tuition for the apprentice; apprentices are employed.', src: 6 } },
  ],
  transfers: [
    { from: 'sc-s5', to: 'sc-ug12', label: 'S5 → university',
      desc: 'Strong Highers results after S5 are often enough for a university offer at 17.' },
    { from: 'sc-s6', to: 'sc-ma', label: 'S6 → apprenticeship',
      desc: 'Many Modern and Graduate Apprenticeships recruit school leavers after S5 or S6.' },
    { from: 'sc-s6', to: 'sc-hnc', label: 'School → HNC',
      desc: 'Highers give entry to HNC and HND courses at college.' },
    { from: 'sc-hnd', to: 'sc-hons', label: 'HND → degree (articulation)',
      desc: 'Articulation lets HND graduates enter year 3 of a related degree, finishing an honours degree in two more years.' },
    { from: 'sc-nc', to: 'sc-ma', label: 'College → apprenticeship',
      desc: 'Pre-apprenticeship and NC courses often lead into a Modern Apprenticeship.' },
    { from: 'sc-ma', to: 'sc-ga', label: 'Modern → Graduate App.',
      desc: 'Higher-level Modern Apprenticeships can lead into a Graduate Apprenticeship.' },
  ],
  sources: [
    { title: 'mygov.scot — Funded early learning and childcare', url: 'https://www.mygov.scot/childcare-costs-help/funded-early-learning-and-childcare' },
    { title: 'Parent Club (Scottish Government) — Can my child defer starting school?', url: 'https://www.parentclub.scot/articles/can-my-child-defer-starting-school' },
    { title: 'mygov.scot — Leaving school (leaving dates)', url: 'https://www.mygov.scot/leaving-school' },
    { title: 'Education (Scotland) Act 2025 — Qualifications Scotland and dissolution of the SQA', url: 'https://www.legislation.gov.uk/asp/2025/11/contents' },
    { title: 'SAAS — Support for young undergraduate students', url: 'https://www.saas.gov.uk/full-time/ug/young-students' },
    { title: 'Coram Family and Childcare — Childcare Survey 2025', url: 'https://www.coram.org.uk/resource/childcare-survey-2025/' },
    { title: 'apprenticeships.scot — Foundation, Modern and Graduate Apprenticeships', url: 'https://www.apprenticeships.scot/' },
    { title: 'Education Scotland — Curriculum for Excellence', url: 'https://education.gov.scot/curriculum-for-excellence/' },
    { title: 'Qualifications Scotland (formerly SQA) — exams and results', url: 'https://www.sqa.org.uk/' },
  ],
};
