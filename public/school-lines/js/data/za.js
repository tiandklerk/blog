// South Africa — school system as a metro map.
// The school year runs January to December; ages are typical ages at the start of the year.
export default {
  id: 'za',
  iso3: 'ZAF',
  region: 'Africa',
  currency: 'ZAR',
  name: 'South Africa',
  localName: 'South Africa / Suid-Afrika / iNingizimu Afrika',
  flag: '🇿🇦',
  summary:
    'Thirteen years of school, Grade R to Grade 12, in four phases: Foundation (R–3), Intermediate (4–6), ' +
    'Senior (7–9) and Further Education and Training (FET, 10–12). After Grade 9 pupils can stay in school ' +
    'for the National Senior Certificate (NSC, “matric”) or move to a public TVET college for the ' +
    'vocational NC(V). The matric pass level — bachelor, diploma or higher certificate — decides which ' +
    'higher education is open: traditional and comprehensive universities, universities of technology, ' +
    'or higher-certificate programmes. Poorer students are funded through NSFAS bursaries.',
  ageNote:
    'Children enter Grade R in the year they turn 6 and Grade 1 in the year they turn 7 (admission ' +
    'from age 4 turning 5 by 30 June is allowed for Grade R). The school year starts in January, so a ' +
    'Grade 1 class is mostly 6 at the start and 7 by the end. Repetition is common: many learners reach ' +
    'Grade 12 at 19 or older, and a large share of each cohort leaves before matric.',
  compulsory: {
    from: 5,
    to: 15,
    label: 'Compulsory Grade R–9',
    note:
      'The Basic Education Laws Amendment (BELA) Act, in force since December 2024, made Grade R ' +
      'compulsory; provinces were told to enforce it from the 2026 school year. Attendance is compulsory ' +
      'until the end of the year the learner turns 15 or completes Grade 9, whichever comes first.',
  },
  costNote:
    'School costs are for public schools in 2025/26. Schools in quintiles 1–3 (the poorest 60% of public ' +
    'school learners by policy, with more in practice) charge no fees; fee-paying (quintile 4–5) schools ' +
    'set fees by parent vote and must exempt poor families. Tertiary figures are 2025–26 tuition at public ' +
    'institutions before NSFAS, which pays full tuition for students from households earning up to R350,000.',
  lines: [
    { id: 'early', name: 'ECD', color: '#7C8A93', lane: 0,
      desc: 'Early childhood development (ECD): crèches, day-care centres and playgroups, mostly run by ' +
        'non-profits and small private operators. The Department of Basic Education took over ECD from ' +
        'Social Development in 2022. Registered programmes can get a per-child subsidy for poor children.' },
    { id: 'found', name: 'Foundation Phase', color: '#D2322D', lane: 0, from: 'za-ecd',
      desc: 'Grade R to Grade 3. Teaching is usually in the learner\'s home language, one of 12 official ' +
        'languages, with English or Afrikaans added as a first additional language.' },
    { id: 'inter', name: 'Intermediate Phase', color: '#E0632A', lane: 0, from: 'za-g13',
      desc: 'Grades 4–6. Most schools switch the language of learning and teaching to English (or ' +
        'Afrikaans) in Grade 4, a well-documented point where many learners fall behind.' },
    { id: 'senior', name: 'Senior Phase', color: '#1E66C9', lane: 0, from: 'za-g46',
      desc: 'Grades 7–9, the last years of the General Education and Training (GET) band. Grade 7 is ' +
        'usually still in primary school; Grades 8–9 in secondary (high) school.' },
    { id: 'fet', name: 'FET (NSC)', color: '#174E9C', lane: 0, from: 'za-g9',
      desc: 'Further Education and Training phase in school, Grades 10–12, ending in the National Senior ' +
        'Certificate (NSC). Learners choose 7 subjects in Grade 10: two languages, Mathematics or ' +
        'Mathematical Literacy, Life Orientation and three electives. Technical high schools offer ' +
        'technical maths and engineering subjects. Some private schools write the IEB exam instead.' },
    { id: 'uni', name: 'University', color: '#5B2C83', lane: -3, from: 'za-g12',
      desc: '26 public universities: traditional research universities (e.g. UCT, Wits, Pretoria), ' +
        'comprehensive universities and universities of technology. A bachelor\'s pass in the NSC is the ' +
        'legal minimum; universities set higher admission point scores (APS) per programme.' },
    { id: 'dipl', name: 'Diploma', color: '#7A3E9D', lane: -2, from: 'za-g12',
      desc: 'Career-focused diplomas, mainly at the six universities of technology (e.g. TUT, CPUT, DUT) and ' +
        'comprehensive universities. Needs at least a diploma pass in the NSC. The National Diploma was ' +
        'replaced by the Diploma/Advanced Diploma under the Higher Education Qualifications Sub-Framework.' },
    { id: 'hc', name: 'Higher Certificate', color: '#9B6FC4', lane: -1, from: 'za-g12',
      desc: 'One-year higher certificates (NQF 5) at universities, TVET colleges and many private colleges. ' +
        'Needs at least a higher-certificate pass. Often used as a bridge into a diploma or degree.' },
    { id: 'ncv', name: 'TVET: NC(V)', color: '#2C9546', lane: 2, from: 'za-g9',
      desc: 'National Certificate (Vocational) at one of 50 public TVET colleges: three years, Levels 2–4 ' +
        '(NQF 2–4), in fields such as engineering, hospitality, IT and office administration. Entry after ' +
        'Grade 9. Level 4 is at the same NQF level as the NSC.' },
    { id: 'nated', name: 'TVET: N4–N6', color: '#00A0A6', lane: 1, from: 'za-g12',
      desc: 'NATED (Report 191) programmes N4–N6 at TVET colleges, in business, utility and engineering ' +
        'studies. Each level is a trimester (engineering) or semester (business). With 18–24 months of ' +
        'relevant work experience, N6 leads to the National N Diploma.' },
    { id: 'trade', name: 'Artisan', color: '#DD7710', lane: 3, from: 'za-g9',
      desc: 'Route to a trade (electrician, fitter, plumber, boilermaker…) through engineering N1–N3 at a ' +
        'TVET college, an apprenticeship or learnership with an employer funded via the SETAs, and a ' +
        'national trade test. Newer QCTO occupational certificates are replacing older programmes.' },
  ],
  stations: [
    // ECD
    { id: 'za-ecd', line: 'early', name: 'ECD', local: 'Early childhood development / crèche', ages: [0, 5], isced: 0,
      desc: 'Day care and early learning for babies to pre-schoolers. Mostly fee-charging, community-run ' +
        'centres; the 2021 ECD Census counted 42,420 early learning programmes. Poor children in registered ' +
        'programmes attract a per-child subsidy, but many centres are unregistered and get nothing.',
      cost: { amount: 6000, note: 'About R500/month: the 2021 ECD Census average was R509/month (subsidised centres about R208).', src: 2 } },
    // Foundation Phase
    { id: 'za-gr', line: 'found', name: 'Grade R', local: 'Reception year', ages: [5, 6], isced: 0,
      desc: 'Reception year, in a primary school or a community ECD site. It has been compulsory since ' +
        'the BELA Act (in force December 2024, enforced from the 2026 school year), making schooling 13 ' +
        'years. Most 5–6-year-olds were already enrolled, but capacity and funding vary by province.',
      events: ['Becomes compulsory under BELA (enforced from January 2026)', 'Apply for Grade R/Grade 1 the year before (often April–June)'],
      cost: { amount: 0, note: 'Free in no-fee schools; fee-paying public schools may charge, with exemptions for poor families.', src: 3 } },
    { id: 'za-g13', line: 'found', name: 'Grades 1–3', ages: [6, 9], isced: 1,
      desc: 'Literacy, numeracy and life skills, usually taught in the home language. National studies ' +
        '(PIRLS 2021, released 2023) found 81% of Grade 4 learners could not read for meaning in any language.',
      cost: { amount: 0, note: 'No fees at quintile 1–3 schools; fee-paying public schools often charge R10,000+ a year, with exemptions.', src: 3 } },
    // Intermediate Phase
    { id: 'za-g46', line: 'inter', name: 'Grades 4–6', ages: [9, 12], isced: 1,
      desc: 'Most learners switch to English (or Afrikaans) as the language of learning. Subjects widen to ' +
        'natural sciences & technology and social sciences. Assessment is school-based; there is no ' +
        'external exam.',
      cost: { amount: 0, note: 'No fees at quintile 1–3 schools; fees at quintile 4–5 schools vary widely.', src: 3 } },
    // Senior Phase
    { id: 'za-g78', line: 'senior', name: 'Grades 7–8', ages: [12, 14], isced: 2,
      desc: 'Grade 7 is the final year of most primary schools; learners apply to high school during ' +
        'Grade 7. Subjects include economic & management sciences and technology.',
      events: ['High-school applications during Grade 7'],
      cost: { amount: 0, note: 'No fees at quintile 1–3 schools; the priciest public high schools charged about R75,000 in 2025.', src: 9 } },
    { id: 'za-g9', line: 'senior', name: 'Grade 9', ages: [14, 15], isced: 2,
      desc: 'End of the GET band and of compulsory schooling. Learners choose FET subjects or leave for a ' +
        'TVET college. A new General Education Certificate (GEC) at the end of Grade 9 is being piloted ' +
        'to recognise this exit point; the older GETC is now an adult-education certificate.',
      exam: 'General Education Certificate (GEC, pilot)',
      events: ['Subject choice for Grade 10', 'Three-stream model (academic, technical-vocational, technical-occupational) being phased in'],
      cost: { amount: 0, note: 'No fees at quintile 1–3 schools.', src: 3 } },
    // FET in school
    { id: 'za-g10', line: 'fet', name: 'Grade 10', ages: [15, 16], isced: 3,
      desc: 'First FET year. Grade 10 has the highest repetition and drop-out rates in the system.',
      cost: { amount: 0, note: 'No fees at quintile 1–3 schools; fee-paying schools must exempt poor families.', src: 3 } },
    { id: 'za-g11', line: 'fet', name: 'Grade 11', ages: [16, 17], isced: 3,
      desc: 'Grade 11 final results are what universities use for provisional (conditional) offers.',
      events: ['University applications open (often April–September of Grade 12)'],
      cost: { amount: 0, note: 'No fees at quintile 1–3 schools.', src: 3 } },
    { id: 'za-g12', line: 'fet', name: 'Matric', ages: [17, 18], isced: 3,
      desc: 'Grade 12, the matric year. NSC exams run from late October to early December and are combined with ' +
        'school-based assessment. There are three pass levels: higher certificate (basic pass), diploma ' +
        '(40%+ in four designated subjects) and bachelor (50%+ in four designated subjects). The class ' +
        'of 2025 reached a record 88% pass rate (46% bachelor passes), but the rate excludes the many who ' +
        'dropped out before Grade 12. Results are published in mid-January.',
      exam: 'National Senior Certificate (NSC)',
      events: ['NSC exams late October – early December', 'Results mid-January (2025 results: 12 January 2026)', 'NSFAS applications for the next year (usually Oct–Dec)'],
      cost: { amount: 0, note: 'No fees at quintile 1–3 schools; NSC exams are free for full-time candidates.', src: 4 } },
    // University
    { id: 'za-ba', line: 'uni', name: 'Bachelor', ages: [18, 21], isced: 6,
      desc: 'General bachelor\'s degrees take 3 years; professional degrees (engineering, law, education) ' +
        '4 years and medicine 6. Many students take longer or drop out; extended programmes add a ' +
        'foundation year. Fee increases are capped by the department (4.15% recommended for 2026).',
      exam: 'Bachelor\'s degree',
      cost: { amount: 62000, note: 'About the 2025 average; R44,000–109,000 by university and course. NSFAS pays full tuition for households earning ≤R350,000.', src: 6 } },
    { id: 'za-hons', line: 'uni', name: 'Honours', ages: [21, 22], isced: 6,
      desc: 'One-year honours degree (NQF 8) after a 3-year bachelor\'s, the usual entry route to a master\'s.',
      exam: 'Bachelor Honours degree',
      cost: { amount: 77910, note: 'UCT 2026 BSc Honours fee (BA Honours about R58,600); one university\'s figure. NSFAS does not fund most postgraduate study.', src: 13 } },
    { id: 'za-ma', line: 'uni', name: 'Master\'s', ages: [22, 24], isced: 7,
      desc: 'Master\'s by research or coursework (NQF 9), usually 1–2 years.', exam: 'Master\'s degree',
      cost: { amount: 39450, note: 'UCT 2026 MSc by dissertation, per year; coursework master\'s cost about twice as much. One university\'s figure; NRF bursaries common.', src: 13 } },
    { id: 'za-phd', line: 'uni', name: 'Doctorate', ages: [24, 27], isced: 8,
      desc: 'Research doctorate (NQF 10), at least 2 years full time, in practice often 3–5.', exam: 'Doctorate (PhD/DPhil)',
      cost: { amount: 28440, note: 'UCT 2026 doctoral fee per year; one university\'s figure. Often covered by NRF or university bursaries.', src: 13 } },
    // Diploma
    { id: 'za-dip', line: 'dipl', name: 'Diploma', ages: [18, 21], isced: 6,
      desc: 'Three-year diploma (NQF 6) with work-integrated learning, e.g. in engineering, IT, ' +
        'hospitality or nursing.',
      exam: 'Diploma',
      cost: { amount: 50000, note: 'About; UJ\'s 2026 diplomas cost about R38,000–79,000 a year (one university). NSFAS covers eligible students.', src: 14 } },
    { id: 'za-adip', line: 'dipl', name: 'Adv. Diploma', local: 'Advanced Diploma', ages: [21, 22], isced: 6,
      desc: 'One-year advanced diploma (NQF 7), at the level of a bachelor\'s degree; then a postgraduate ' +
        'diploma (NQF 8) can lead to a master\'s.', exam: 'Advanced Diploma',
      cost: { amount: 50000, note: 'About; UJ\'s 2026 advanced diplomas cost about R39,000–86,000 (one university).', src: 14 } },
    // Higher certificate
    { id: 'za-hcert', line: 'hc', name: 'Higher Cert', local: 'Higher Certificate', ages: [18, 19], isced: 5,
      desc: 'One-year vocational higher certificate (NQF 5), e.g. in accounting, IT or education support. ' +
        'Many are offered by registered private higher-education colleges.',
      exam: 'Higher Certificate',
      cost: { amount: 43200, note: 'UJ 2026 Higher Certificate in IT module fees (one programme). TVET-college and NSFAS-funded places cost students less.', src: 15 } },
    // NC(V)
    { id: 'za-ncv2', line: 'ncv', name: 'Level 2', local: 'NC(V) Level 2', ages: [15, 16], isced: 3,
      desc: 'Level 2: three fundamental subjects (language, maths or maths literacy, life orientation) plus ' +
        'four vocational subjects. Admission needs Grade 9; many students arrive older, after leaving school.',
      cost: { amount: 10000, note: 'About R7,000–15,000 a year; NSFAS bursaries cover tuition, transport and accommodation for eligible students.', src: 11 } },
    { id: 'za-ncv3', line: 'ncv', name: 'Level 3', local: 'NC(V) Level 3', ages: [16, 17], isced: 3,
      desc: 'Level 3, with practical work in college workshops. Completion rates are low.',
      cost: { amount: 10000, note: 'About; NSFAS-funded for eligible students.', src: 11 } },
    { id: 'za-ncv4', line: 'ncv', name: 'Level 4', local: 'NC(V) Level 4', ages: [17, 18], isced: 3,
      desc: 'Level 4 national exams (set by DHET, quality-assured by Umalusi) in November. With the right ' +
        'subjects and marks, an NC(V) L4 gives access to higher certificates, diplomas or degrees.',
      exam: 'National Certificate (Vocational) Level 4',
      cost: { amount: 10000, note: 'About; NSFAS-funded for eligible students.', src: 11 } },
    // N4–N6
    { id: 'za-n46', line: 'nated', name: 'N4–N6', ages: [18, 19.5], isced: 5,
      desc: 'Three theory levels of about 4–6 months each, usually after matric (engineering N4 also accepts ' +
        'N3). Exams by DHET at the end of each trimester or semester.',
      exam: 'N6 certificate',
      cost: { amount: 10000, note: 'About R3,500–8,000 per semester or trimester; NSFAS covers eligible students.', src: 11 } },
    { id: 'za-nnd', line: 'nated', name: 'Work exp.', local: 'Workplace experience', ages: [19.5, 21], isced: 5,
      desc: 'Graduates need 18 months (business) or 24 months (engineering) of relevant work experience; ' +
        'finding placements is a major hurdle.', exam: 'National N Diploma',
      cost: { amount: 0, note: 'No fee; experience is gained in employment or internships.' } },
    // Artisan
    { id: 'za-n13', line: 'trade', name: 'N1–N3', ages: [15, 16], isced: 3,
      desc: 'Engineering N1–N3 theory at a TVET college, often alongside an apprenticeship. N2 with maths, ' +
        'science and trade theory meets the minimum for a trade test.',
      cost: { amount: 7000, note: 'About R3,500 per trimester; NSFAS or employers may pay.', src: 11 } },
    { id: 'za-appr', line: 'trade', name: 'Apprenticeship', local: 'Apprenticeship / learnership', ages: [16, 19], isced: 4,
      desc: 'Workplace training of about 3 years with a registered employer, funded through the sector ' +
        'education and training authorities (SETAs), ending in a national trade test (red seal).',
      exam: 'Trade test (artisan, red seal)',
      cost: { amount: 0, note: 'No fee; apprentices are paid an allowance, and training is funded by employers and SETAs.' } },
  ],
  transfers: [
    { from: 'za-g9', to: 'za-ncv2', label: 'Grade 9 → TVET college', desc: 'Learners may leave school after Grade 9 for an NC(V) at a public TVET college.' },
    { from: 'za-ncv4', to: 'za-hcert', label: 'NC(V) L4 → higher education', desc: 'NC(V) Level 4 with the required subjects and marks gives access to higher certificates, diplomas and some degrees.' },
    { from: 'za-hcert', to: 'za-dip', label: 'Higher cert → diploma', desc: 'A higher certificate can give admission to a diploma, sometimes with credit for modules passed.' },
    { from: 'za-dip', to: 'za-ba', label: 'Diploma → degree', desc: 'Diploma graduates can enter related degrees, often with credits.' },
    { from: 'za-adip', to: 'za-ma', label: 'Advanced diploma → master\'s', desc: 'Via a one-year postgraduate diploma (NQF 8), which is at the same level as honours.' },
    { from: 'za-n46', to: 'za-dip', label: 'N6 → diploma', desc: 'N4–N6 credits and the National N Diploma can give access to related university-of-technology diplomas.' },
    { from: 'za-g12', to: 'za-n46', label: 'Matric → N4–N6', desc: 'Most N4–N6 students enter after the NSC.' },
    { from: 'za-g12', to: 'za-appr', label: 'Matric → apprenticeship', desc: 'Many apprentices and learners join after matric; employers prefer maths and physical science.' },
  ],
  sources: [
    { title: 'DBE — BELA Act regulations and implementation', url: 'https://www.education.gov.za/ArchivedDocuments/ArchivedArticles/BELAActRegulations.aspx' },
    { title: 'DBE — ECD and Grade R as the new compulsory grade (Feb 2025)', url: 'https://www.education.gov.za/ArchivedDocuments/ArchivedArticles/ECDandGradeRasthenewcompulsorygradeR.aspx' },
    { title: 'DBE — ECD Census 2021: summary of key results', url: 'https://www.education.gov.za/Portals/0/Documents/Reports/ECD%20Census%202021%20-%20Summary%20of%20Key%20Results.pdf' },
    { title: 'DBE — Free basic education and no-fee schools', url: 'https://www.education.gov.za/ArchivedDocuments/ArchivedArticles/FreeBasicEducation0617.aspx' },
    { title: 'SAnews — Class of 2025 sets national record with 88% pass rate', url: 'https://www.sanews.gov.za/node/79055' },
    { title: 'NSFAS — National Student Financial Aid Scheme', url: 'https://www.nsfas.org.za/' },
    { title: 'BusinessTech — University fees 2025: how much it costs to study in South Africa', url: 'https://businesstech.co.za/news/lifestyle/808551/university-fees-2025-how-much-it-costs-to-study-in-south-africa/' },
    { title: 'News24 — Higher education department recommends 4.15% fee increase for 2026', url: 'https://www.news24.com/southafrica/education/university-fees-higher-education-dept-recommends-415-increase-for-2026-20260129-1230' },
    { title: 'Department of Higher Education and Training (DHET)', url: 'https://www.dhet.gov.za/' },
    { title: 'Currency News — South Africa\'s priciest schools for 2025', url: 'https://currencynews.co.za/?p=5564' },
    { title: 'PMG — Question NW4527 to the Minister of Basic Education (BELA implementation)', url: 'https://pmg.org.za/committee-question/32309/' },
    { title: 'VarsityWise — TVET college courses and fees 2026 (estimates)', url: 'https://varsitywise.com/posts/tvet-college-courses-list-2026-engineering-business-more' },
    { title: 'Daily Maverick — PIRLS 2021: 81% of Grade 4s cannot read for meaning (May 2023)', url: 'https://www.dailymaverick.co.za/article/2023-05-16-international-study-shows-81-of-grade-4s-in-south-africa-cannot-read-for-meaning/' },
    { title: 'University of Cape Town — 2026 fees booklet (Book 12: Student fees)', url: 'https://uct.ac.za/sites/default/files/media/documents/uct_ac_za/49/2026-fees-booklet.pdf' },
    { title: 'University of Johannesburg — 2026 Student Fee Booklet', url: 'https://www.uj.ac.za/wp-content/uploads/2022/01/uj-2026-fee-booklet-13032026.pdf' },
    { title: 'University of Johannesburg — Higher Certificate in IT: 2026 tuition fees', url: 'https://adam.uj.ac.za/csi/docs/2026/HC/HCIT_2026_Tuition_Fees.pdf' },
  ],
};
