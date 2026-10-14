// Singapore — school system as a metro map.
// The school year runs January to November. Ages are typical ages at the start of each stage.
export default {
  id: 'sg',
  iso3: 'SGP',
  region: 'Asia',
  currency: 'SGD',
  name: 'Singapore',
  localName: 'Singapura · 新加坡 · சிங்கப்பூர்',
  flag: '🇸🇬',
  summary:
    'Six years of primary school end with the Primary School Leaving Examination (PSLE) at about 12, ' +
    'whose score decides secondary-school posting. Since 2024 the old Express, Normal (Academic) and ' +
    'Normal (Technical) streams have been replaced by Full Subject-Based Banding: pupils are posted ' +
    'through Posting Groups 1–3 but take each subject at level G1, G2 or G3, and from 2027 sit a single ' +
    'Secondary Education Certificate (SEC) instead of the O- and N-Levels. Afterwards students go to a ' +
    'junior college (A-Levels), a polytechnic (diploma) or the Institute of Technical Education (ITE); ' +
    'top students may skip the secondary exam in a 6-year Integrated Programme. Most men then do two ' +
    'years of National Service before university.',
  ageNote:
    'Children enter Primary 1 in January of the year they turn 7. Secondary school takes 4 years (5 ' +
    'for some students taking mostly G1/G2 subjects). Male citizens and permanent residents do ' +
    'full-time National Service at about 18, usually after junior college or polytechnic, so they ' +
    'start university around 20–21.',
  compulsory: {
    from: 6,
    to: 12,
    label: 'Compulsory education 6–12',
    note:
      'Under the Compulsory Education Act, Singapore Citizens born after 1 January 1996 must attend a ' +
      'national primary school (six years) unless exempted. Secondary school is not compulsory but ' +
      'almost all pupils attend.',
  },
  costNote:
    'Fees are for Singapore Citizens in 2026 at government and government-aided schools; permanent ' +
    'residents and international students pay much more (noted per stop). Primary and secondary ' +
    'school are nearly free for citizens; Edusave and PSEA accounts can pay the small fees. Private ' +
    'tuition is common but not counted.',
  lines: [
    { id: 'early', name: 'Preschool', color: '#7C8A93', lane: 0,
      desc: 'Infant care (2–18 months) and childcare centres (to age 6), and kindergartens (K1–K2, ages ' +
        '4–6) run by MOE, government-supported Anchor Operators or private providers. Not compulsory, ' +
        'but almost all children attend. ECDA subsidies for citizens depend on household income and ' +
        'whether the mother works.' },
    { id: 'pri', name: 'Primary', color: '#D2322D', lane: 0, from: 'sg-k2',
      desc: 'Primary school, P1–P6. The language of instruction is English, and every pupil also ' +
        'studies a Mother Tongue language (Chinese, Malay or Tamil). Admission to P1 is through a ' +
        'phased registration exercise in July that favours siblings, alumni and nearby homes.' },
    { id: 'sec', name: 'Secondary', color: '#1E66C9', lane: -1, from: 'sg-p6',
      desc: 'Secondary school under Full Subject-Based Banding (from the 2024 Secondary 1 cohort). ' +
        'Pupils are posted through Posting Group 1, 2 or 3 by PSLE score but learn in mixed form ' +
        'classes, taking subjects at G1, G2 or G3 (roughly the old N(T), N(A) and Express levels). ' +
        'Specialised schools (NorthLight, Assumption Pathway, Crest, Spectra) serve pupils who need a ' +
        'more practical route.' },
    { id: 'jc', name: 'Junior college', color: '#7A3E9D', lane: -2, from: 'sg-s4',
      desc: 'Junior colleges: a 2-year pre-university course leading to the Singapore-Cambridge GCE ' +
        'A-Level. Millennia Institute offers a 3-year A-Level course.' },
    { id: 'uni', name: 'University', color: '#4B2470', lane: -2, from: 'sg-jc2',
      desc: 'Six autonomous universities: NUS, NTU, SMU, SUTD, SIT and SUSS. Bachelor\'s degrees take ' +
        '3–4 years (honours usually 4). The MOE Tuition Grant pays most of the cost for citizens.' },
    { id: 'ip', name: 'Integrated Prog.', color: '#5B2C83', lane: -3, from: 'sg-p6',
      desc: 'Integrated Programme (IP): a 6-year through-train course at selective schools (e.g. Raffles, ' +
        'Hwa Chong, NUS High) that skips the secondary-school exam and leads straight to the A-Level, ' +
        'the IB Diploma or the NUS High School Diploma.' },
    { id: 'poly', name: 'Polytechnic', color: '#DD7710', lane: 1, from: 'sg-s4',
      desc: 'Five polytechnics (Singapore, Ngee Ann, Temasek, Nanyang, Republic) offer 3-year applied ' +
        'diplomas in engineering, business, IT, health sciences, media and design. Many diploma ' +
        'holders go on to university.' },
    { id: 'ite', name: 'ITE', color: '#2C9546', lane: 2, from: 'sg-s4',
      desc: 'The Institute of Technical Education (ITE): hands-on vocational training. From the 2026 ' +
        'intake it offers a single 3-year Higher Nitec in place of the former 2-year Nitec plus ' +
        'Higher Nitec. Work-study Technical Diplomas are available after it.' },
  ],
  stations: [
    // Preschool
    { id: 'sg-cc', line: 'early', name: 'Childcare', local: 'Infant care / childcare centre', ages: [0, 4], isced: 0,
      desc: 'Full-day infant care and childcare. Fees at Anchor and Partner Operators are capped by the ' +
        'government, and citizen children get a Basic Subsidy plus an income-tested Additional Subsidy ' +
        'from ECDA.',
      cost: { amount: 7320, note: 'Anchor Operator full-day childcare cap $610/month excl. GST (Partner $650; infant care $1,235/$1,290), before Basic and income-tested subsidies for citizens.', src: 9 } },
    { id: 'sg-k2', line: 'early', name: 'K1–K2', local: 'Kindergarten 1–2', ages: [4, 6], isced: 0,
      desc: 'Two years of kindergarten. MOE Kindergartens (MK) charge a fixed fee, with full-day ' +
        'Kindergarten Care (KCare) on top; lower-income families get KiFAS fee assistance.',
      events: ['P1 registration exercise (July of K2 year)'],
      cost: { amount: 1920, note: 'MOE Kindergarten, $160/month for citizens in 2026 (PRs $320); KiFAS lowers it for lower-income families.', src: 1 } },
    // Primary
    { id: 'sg-p1', line: 'pri', name: 'P1–P4', local: 'Primary 1–4 (Foundation stage)', ages: [6, 10], isced: 1,
      desc: 'Foundation stage. No exams in P1 and no mid-year exams in P1–P6 (removed 2019–2023); ' +
        'weighted assessments and end-of-year exams begin in P3.',
      cost: { amount: 156, note: 'Citizens pay only $13/month miscellaneous fees (school fee $0). PRs pay $343/month in 2026.', src: 0 } },
    { id: 'sg-p5', line: 'pri', name: 'P5', local: 'Primary 5', ages: [10, 11], isced: 1,
      desc: 'Pupils take English, maths, science and Mother Tongue at standard or foundation level ' +
        '(subject-based banding), decided by school-based results at the end of P4.',
      cost: { amount: 156, note: 'Citizens: $13/month miscellaneous fees.', src: 0 } },
    { id: 'sg-p6', line: 'pri', name: 'P6', local: 'Primary 6', ages: [11, 12], isced: 1,
      desc: 'PSLE year. Each subject gets an Achievement Level (AL 1 best – 8); the PSLE score is the sum ' +
        'of four subjects (4–30). The score decides the Posting Group and, with school choices, the ' +
        'secondary school. Admission to some schools is also possible through Direct School Admission ' +
        '(DSA) based on talents.',
      exam: 'PSLE (Primary School Leaving Examination)',
      events: ['DSA-Sec applications (May–June)', 'PSLE oral exams (Aug)', 'Listening comprehension (mid-Sep)', 'PSLE written papers (late Sep)', 'PSLE results: 24/25 Nov 2026', 'Secondary school choices (7 days after results)', 'S1 posting results: 18 Dec 2026'],
      cost: { amount: 156, note: 'Citizens: $13/month miscellaneous fees; no PSLE fee for citizens in national schools.', src: 0 } },
    // Secondary
    { id: 'sg-s1', line: 'sec', name: 'Sec 1–2', local: 'Lower secondary (Full SBB)', ages: [12, 14], isced: 2,
      desc: 'Mixed form classes for about a third of lessons (common curriculum); English, Mother Tongue, ' +
        'maths, science and humanities at G1, G2 or G3. Students can move subjects up a level from the ' +
        'end of S1 based on results. Posting Group 3 covers PSLE scores of roughly 4–22, Group 2 ' +
        'about 21–25 and Group 1 about 25–30 (overlaps give a choice).',
      cost: { amount: 300, note: 'Citizens: $5 school + $20 misc per month (autonomous schools up to $18 more). PRs $700/month.', src: 0 } },
    { id: 'sg-s4', line: 'sec', name: 'Sec 3–4', local: 'Upper secondary', ages: [14, 16], isced: 2,
      desc: 'Students choose electives (e.g. Additional Maths, sciences, Art, Design & Technology). At ' +
        'the end of Sec 4 they sit the GCE O-Level and N-Level exams; from 2027 these are combined into ' +
        'the Singapore-Cambridge Secondary Education Certificate (SEC), taken at each subject\'s level. ' +
        'Students taking mostly G1/G2 subjects can do a Sec 5 year, or a Polytechnic Foundation Programme.',
      exam: 'GCE O-/N-Level (to 2026) → SEC (from 2027)',
      events: ['SEC English and Mother Tongue written papers (September)', 'Other SEC written papers (mid-Oct – mid-Nov)', 'Results in January; Joint Admissions Exercise (JAE)'],
      cost: { amount: 300, note: 'Citizens: $25/month; exam fees for citizens are covered by MOE.', src: 0 } },
    // Junior college
    { id: 'sg-jc1', line: 'jc', name: 'JC 1', local: 'Junior College year 1', ages: [16, 17], isced: 3,
      desc: 'Admission through the Joint Admissions Exercise (JAE) by aggregate score of the secondary ' +
        'exam, or through DSA-JC. Students take H1/H2/H3 subjects plus General Paper and a project.',
      cost: { amount: 396, note: 'Citizens: $6 school + $27 misc per month (+ up to $18 at autonomous JCs). PRs $787/month.', src: 0 } },
    { id: 'sg-jc2', line: 'jc', name: 'JC 2', local: 'Junior College year 2', ages: [17, 18], isced: 3,
      desc: 'A-Level exams from October to November; results in February or March. Men then usually ' +
        'enlist for two years of National Service.',
      exam: 'GCE A-Level',
      events: ['A-Level written exams (Oct–Nov)', 'Results (Feb–Mar)', 'National Service (men, ~2 years)'],
      cost: { amount: 396, note: 'Citizens: $33/month.', src: 0 } },
    // University
    { id: 'sg-ba', line: 'uni', name: 'Bachelor', local: 'Undergraduate (honours)', ages: [19, 23], isced: 6,
      desc: 'Three- to four-year bachelor at an autonomous university; women typically start at 19, ' +
        'men after National Service at 20–21. Admission uses A-Level or diploma grades plus aptitude ' +
        'interviews and portfolios. PRs and international students who take the Tuition Grant must work ' +
        'in Singapore for three years after graduating.',
      exam: 'Bachelor\'s degree (honours)',
      cost: { amount: 8300, note: 'NTU 2026/27 for citizens, most programmes (PRs $11,600; medicine $36,100). Other universities are similar.', src: 5 } },
    { id: 'sg-ma', line: 'uni', name: 'Master', local: 'Master\'s (coursework / research)', ages: [23, 25], isced: 7,
      desc: 'Coursework masters (1–2 years) are mostly unsubsidised and expensive; research masters ' +
        'are often funded by scholarships.',
      exam: 'Master\'s degree',
      cost: { amount: 57880, note: 'Example: NUS MSc Electrical/Computer Engineering AY2026/27, whole 1-year programme incl. GST; self-funded, no citizen subsidy. Research masters often funded.', src: 10 } },
    { id: 'sg-phd', line: 'uni', name: 'PhD', local: 'Doctor of Philosophy', ages: [25, 29], isced: 8,
      desc: 'Research doctorate of about 4 years. Most full-time PhD students hold university or ' +
        'A*STAR research scholarships that pay tuition and a monthly stipend.',
      exam: 'PhD',
      cost: { amount: 0, note: 'Usually covered by a research scholarship; self-funded fees vary by university.' } },
    // Integrated Programme
    { id: 'sg-ip1', line: 'ip', name: 'IP Years 1–4', local: 'Integrated Programme (Sec 1–4)', ages: [12, 16], isced: 2,
      desc: 'Broad, enriched curriculum without the SEC exam. Admission by PSLE score (generally ' +
        'among the best) or DSA. Many IP schools are independent schools with higher fees.',
      cost: { amount: 5400, note: 'About; citizens pay $300–600/month at independent schools in 2026, or the standard $25 at government IP schools.', src: 0 } },
    { id: 'sg-ip5', line: 'ip', name: 'IP 5–6', local: 'Integrated Programme (JC years)', ages: [16, 18], isced: 3,
      desc: 'The final two years at the school\'s junior college or IB section, ending in the A-Level, ' +
        'IB Diploma or NUS High School Diploma.',
      exam: 'A-Level / IB Diploma / NUS High Diploma',
      cost: { amount: 5400, note: 'About; independent schools $300–600/month for citizens in 2026.', src: 0 } },
    // Polytechnic
    { id: 'sg-poly', line: 'poly', name: 'Diploma', local: 'Polytechnic diploma (3 years)', ages: [16, 19], isced: 5,
      desc: 'Three-year diploma, entered through the JAE, the Early Admissions Exercise (by aptitude) ' +
        'or the Polytechnic Foundation Programme. Includes internships. Graduates can enter local ' +
        'universities, sometimes with module exemptions.',
      exam: 'Polytechnic diploma',
      cost: { amount: 3100, note: 'Citizens, AY2026 cohort (fees fixed for the course). PSEA can be used.', src: 0 } },
    // ITE
    { id: 'sg-ite', line: 'ite', name: 'Higher Nitec', local: 'ITE Higher Nitec (3 years)', ages: [16, 19], isced: 3,
      desc: 'Three-year Higher Nitec at one of three ITE colleges (Central, East, West), entered by the ' +
        'Joint Intake Exercise or early admission. Good graduates can enter a polytechnic diploma or ' +
        'a work-study Technical Diploma.',
      exam: 'Higher Nitec',
      cost: { amount: 530, note: 'Citizens, AY2026 cohort (PRs $7,490).', src: 0 } },
  ],
  transfers: [
    { from: 'sg-s4', to: 'sg-poly', label: 'SEC → polytechnic',
      desc: 'Through the Joint Admissions Exercise, the Early Admissions Exercise, or the Polytechnic Foundation Programme for students with mostly G2 subjects.' },
    { from: 'sg-ite', to: 'sg-poly', label: 'ITE → polytechnic',
      desc: 'Higher Nitec graduates with good grades can enter related polytechnic diploma courses.' },
    { from: 'sg-poly', to: 'sg-ba', label: 'Diploma → university',
      desc: 'Polytechnic graduates make up a large share of university entrants, especially at SIT and SUSS.' },
    { from: 'sg-ip5', to: 'sg-ba', label: 'IP → university',
      desc: 'IP students graduate with the A-Level, IB or NUS High Diploma and apply to university like JC students.' },
  ],
  sources: [
    { title: 'MOE Singapore — School fees (fee checker, 2026)', url: 'https://www.moe.gov.sg/financial-matters/fees' },
    { title: 'MOE Singapore — MOE Kindergarten fees and financial assistance (2026)', url: 'https://www.moe.gov.sg/preschool/moe-kindergarten/fees' },
    { title: 'MOE Singapore — Secondary 1 posting process (PSLE results and posting dates 2026)', url: 'https://www.moe.gov.sg/secondary/s1-posting' },
    { title: 'MOE Singapore — Full Subject-Based Banding curriculum', url: 'https://www.moe.gov.sg/secondary/schools-offering-full-sbb' },
    { title: 'SEAB — Singapore-Cambridge Secondary Education Certificate (SEC) from 2027', url: 'https://www.seab.gov.sg/secondary-education-certificate-sec/' },
    { title: 'NTU — Undergraduate tuition fees AY2026/27', url: 'https://www.ntu.edu.sg/admissions/undergraduate/financial-matters/tuition-fees' },
    { title: 'MOE Singapore — Compulsory education', url: 'https://www.moe.gov.sg/education-in-sg/compulsory-education' },
    { title: 'ECDA — Preschool subsidies', url: 'https://www.ecda.gov.sg/parents/preschool-subsidies' },
    { title: 'MOE Singapore — Secondary courses and PSLE score ranges', url: 'https://www.moe.gov.sg/secondary/courses' },
    { title: 'ECDA — Anchor Operator Scheme (monthly fee caps)', url: 'https://www.ecda.gov.sg/parents/choosing-a-preschool/aop' },
    { title: 'NUS Electrical & Computer Engineering — MSc coursework programme fees (AY2026/27)', url: 'https://cde.nus.edu.sg/ece/wp-content/uploads/sites/3/2025/10/ECE_MScFees_appendix.pdf' },
  ],
};
