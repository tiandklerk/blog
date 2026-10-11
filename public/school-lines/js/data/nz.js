// New Zealand — school system as a metro map.
// The school year runs from late January/early February to mid-December, in four terms.
export default {
  id: 'nz',
  iso3: 'NZL',
  region: 'Oceania',
  currency: 'NZD',
  name: 'New Zealand',
  localName: 'Aotearoa New Zealand',
  flag: '🇳🇿',
  summary:
    'Children start school at 5 and move through Years 1–13 without selection: primary school ' +
    '(Years 1–6 or 1–8), often intermediate school (Years 7–8), then secondary school (Years 9–13). ' +
    'Senior students earn NCEA Levels 1–3 in Years 11–13, and University Entrance on top of Level 3. ' +
    'NCEA is being replaced from 2028 by a Year 11 Foundational Award, the NZ Certificate of Education ' +
    '(Year 12, 2029) and the NZ Advanced Certificate of Education (Year 13, 2030). After school, ' +
    'students go to one of eight universities, a polytechnic (being re-established as regional ' +
    'institutes as Te Pūkenga is dismantled from 2026) or an apprenticeship. Domestic students pay ' +
    'capped fees through interest-free student loans, and the final year of study can be fees-free.',
  ageNote:
    'Children can start school on their 5th birthday, or with a cohort at the start of a term ' +
    'near it, so a Year 1 class fills up through the year. Year levels are based on when a child ' +
    'started school, so ages shown are typical.',
  compulsory: {
    from: 6,
    to: 16,
    label: 'School 6–16',
    note:
      'School is compulsory from the 6th birthday to the 16th birthday, but nearly all children ' +
      'start at 5. Young people of 15 can leave early only with a Ministry exemption.',
  },
  costNote:
    'State schools are free; they may ask for donations, but schools that join the donations scheme ' +
    'get NZ$150 per pupil instead. Tertiary figures are 2026 domestic fees at the University of ' +
    'Auckland, including the Student Services Fee, before Fees Free.',
  lines: [
    { id: 'early', name: 'Early childhood', color: '#7C8A93', lane: 0,
      desc: 'Early childhood education (ECE): education and care centres, kindergartens, ' +
        'home-based care, playcentres and kōhanga reo (Māori-language immersion). Not compulsory, but ' +
        'attendance is very high from age 3 because of 20 Hours ECE.' },
    { id: 'primary', name: 'Primary', color: '#D2322D', lane: 0, from: 'nz-ece3',
      desc: 'Primary school, Years 1–8. Full primary schools run Years 1–8; contributing schools run ' +
        'Years 1–6 and pupils then go to an intermediate school for Years 7–8. Kura kaupapa Māori ' +
        'teach in te reo Māori. The refreshed curriculum and structured literacy are being phased in ' +
        'from 2025.' },
    { id: 'secondary', name: 'Secondary', color: '#1E66C9', lane: 0, from: 'nz-y78',
      desc: 'Secondary school (college or high school), Years 9–13. Includes state, ' +
        'state-integrated (often church schools that charge attendance dues) and a few private ' +
        'schools. Senior students work towards NCEA; some schools offer Cambridge or IB instead.' },
    { id: 'uni', name: 'University', color: '#7A3E9D', lane: -1, from: 'nz-y13',
      desc: 'Eight universities. Entry needs University Entrance (UE); many programmes are open to ' +
        'all who hold UE, while others select by rank score. Fees are paid with interest-free student ' +
        'loans, and increases are capped each year (6% for 2026).' },
    { id: 'poly', name: 'Polytechnic', color: '#2C9546', lane: 1, from: 'nz-y13',
      desc: 'Institutes of technology and polytechnics (ITPs) and private training establishments ' +
        'teach certificates, diplomas and applied degrees on the NZ Qualifications and Credentials ' +
        'Framework (levels 1–10). Te Pūkenga, the national institute created in 2020, is being ' +
        'dismantled: 10 regional polytechnics became stand-alone on 1 January 2026, with others ' +
        'grouped in a federation.' },
    { id: 'appr', name: 'Apprenticeship', color: '#DD7710', lane: 2, from: 'nz-y12',
      desc: 'New Zealand Apprenticeships: paid work with training towards a level 4 certificate, ' +
        'usually 3–4 years. Work-based learning is moving from Te Pūkenga to Industry Skills Boards ' +
        'and then to polytechnics and other providers by the end of 2027.' },
  ],
  stations: [
    // Early childhood
    { id: 'nz-ece0', line: 'early', name: 'ECE', local: 'Early learning centre / home-based care', ages: [0, 3], isced: 0,
      desc: 'Education and care for under-3s, mostly in private or community-owned centres. Families ' +
        'pay fees, with help from the means-tested Childcare Subsidy and the FamilyBoost tax credit.',
      cost: { amount: 7000, note: 'About NZ$130–160 a week (industry estimate, not official), before Childcare Subsidy or FamilyBoost.', src: 12 } },
    { id: 'nz-ece3', line: 'early', name: '20 Hours', local: '20 Hours ECE (kindergarten / kōhanga reo)', ages: [3, 5], isced: 0,
      desc: 'All 3-, 4- and 5-year-olds can get up to 20 hours a week (6 a day) of fully funded ' +
        'early childhood education. Services may ask for optional charges and charge for extra hours.',
      cost: { amount: 0, note: 'Up to 20 hours a week free; optional charges and hours beyond 20 are paid.', src: 6 } },
    // Primary
    { id: 'nz-y1', line: 'primary', name: 'Year 1', local: 'New entrants', ages: [5, 6], isced: 1,
      desc: 'Children start on or after their 5th birthday (or as a cohort at the start of a term). ' +
        'Structured literacy and phonics checks after 20 and 40 weeks at school were introduced in 2025.',
      events: ['Start any time from the 5th birthday', 'Phonics checks at 20 and 40 weeks'],
      cost: { amount: 0, note: 'Free at state schools; voluntary donations at schools not in the donations scheme.' } },
    { id: 'nz-y26', line: 'primary', name: 'Years 2–6', ages: [6, 11], isced: 1,
      desc: 'Primary years. School is compulsory from age 6. Teachers report progress to parents ' +
        'twice a year in reading, writing and maths.',
      cost: { amount: 0, note: 'Free at state schools.' } },
    { id: 'nz-y78', line: 'primary', name: 'Years 7–8', local: 'Intermediate', ages: [11, 13], isced: 2,
      desc: 'Taught at an intermediate school or as the last years of a full primary. Some secondary ' +
        'schools (Years 7–13) also take pupils from Year 7.',
      cost: { amount: 0, note: 'Free at state schools.' } },
    // Secondary
    { id: 'nz-y910', line: 'secondary', name: 'Years 9–10', ages: [13, 15], isced: 2,
      desc: 'Junior secondary with a broad curriculum. Students must meet the NCEA literacy and ' +
        'numeracy co-requisite (online tests, usually first taken in Year 10).',
      events: ['Literacy & numeracy co-requisite tests (from Year 10)'],
      cost: { amount: 0, note: 'Free at state schools; NCEA and NZQA exams have no fee since 2020.' } },
    { id: 'nz-y11', line: 'secondary', name: 'Year 11', ages: [15, 16], isced: 3,
      desc: 'NCEA Level 1 (80 credits, standards assessed internally and in end-of-year exams). Many ' +
        'schools no longer offer Level 1. From 2028 Level 1 gives way to a Foundational Award in ' +
        'literacy and numeracy.',
      exam: 'NCEA Level 1', events: ['NZQA external exams (November)', 'Results (mid-January)'],
      cost: { amount: 0, note: 'Free at state schools.' } },
    { id: 'nz-y12', line: 'secondary', name: 'Year 12', ages: [16, 17], isced: 3,
      desc: 'NCEA Level 2, the usual minimum for jobs and apprenticeships. Gateway and trades ' +
        'academies let students combine school with workplace learning. From 2029 Year 12 leads to ' +
        'the New Zealand Certificate of Education (NZCE).',
      exam: 'NCEA Level 2', events: ['NZQA external exams (November)'],
      cost: { amount: 0, note: 'Free at state schools.' } },
    { id: 'nz-y13', line: 'secondary', name: 'Year 13', ages: [17, 18], isced: 3,
      desc: 'NCEA Level 3 plus University Entrance (UE): Level 3, 14 credits in each of three approved ' +
        'subjects, and the literacy and numeracy requirement. From 2030 Year 13 leads to the New ' +
        'Zealand Advanced Certificate of Education (NZACE), which needs passes in at least three subjects.',
      exam: 'NCEA Level 3 + University Entrance',
      events: ['NZQA external exams (November)', 'Results (mid-January)', 'University term starts late February'],
      cost: { amount: 0, note: 'Free at state schools.' } },
    // University
    { id: 'nz-ba', line: 'uni', name: 'Bachelor', ages: [18, 21], isced: 6,
      desc: 'Bachelor\'s degree, usually 3 years (360 points); engineering and some others take 4 years ' +
        'with honours, and medicine 6. Fees Free covers up to NZ$12,000 of the final year (claimed ' +
        'after passing, for those who started their final year from 2025; it replaced first-year ' +
        'fees-free).',
      exam: 'Bachelor\'s degree',
      cost: { amount: 9340, note: 'BCom/LLB 2026 at Auckland incl. Student Services Fee; arts/science ~$8,750–11,300. Final year: Fees Free up to $12,000.', src: 2 } },
    { id: 'nz-ma', line: 'uni', name: 'Hons/Master', local: 'Honours / Master\'s', ages: [21, 23], isced: 7,
      desc: 'A one-year honours degree or postgraduate diploma, and master\'s degrees of 1–2 years ' +
        '(120–240 points).',
      exam: 'Honours / Master\'s degree',
      cost: { amount: 11094, note: 'MSc 2026 at Auckland (120 points) incl. Student Services Fee; varies by programme.', src: 3 } },
    { id: 'nz-phd', line: 'uni', name: 'PhD', ages: [23, 26], isced: 8,
      desc: 'Doctorate of about 3–4 years of research. International PhD students also pay domestic fees, and many candidates hold fee-paying scholarships.',
      exam: 'Doctorate',
      cost: { amount: 9980, note: 'Auckland 2026 PhD fee ($8,848) plus Student Services Fee; often covered by scholarships.', src: 4 } },
    // Polytechnic
    { id: 'nz-cert', line: 'poly', name: 'Cert L3–4', local: 'NZ Certificate, levels 3–4', ages: [18, 19], isced: 4,
      desc: 'New Zealand Certificates at levels 3–4: pre-trade, foundation and vocational programmes, ' +
        'typically a year full-time.',
      exam: 'New Zealand Certificate (level 3–4)',
      cost: { amount: 7000, note: 'About; fees are set per programme and capped by the annual maximum fee increase (6% in 2026).', estimate: true } },
    { id: 'nz-dip', line: 'poly', name: 'Diploma', local: 'NZ Diploma, levels 5–6', ages: [19, 21], isced: 5,
      desc: 'New Zealand Diplomas at levels 5–6 (1–2 years), for example in engineering, business ' +
        'or nursing support. Polytechnics also teach applied bachelor\'s degrees (level 7).',
      exam: 'New Zealand Diploma (level 5–6)',
      cost: { amount: 7000, note: 'About; set per programme. Fees Free can cover the final year.', estimate: true } },
    // Apprenticeship
    { id: 'nz-app', line: 'appr', name: 'Apprenticeship', local: 'New Zealand Apprenticeship', ages: [17, 21], isced: 4,
      desc: 'Paid job with on-the-job training towards a level 4 New Zealand Certificate (e.g. ' +
        'carpentry, electrical, plumbing). Fees Free can cover the final two years of work-based ' +
        'learning, up to NZ$12,000.',
      exam: 'New Zealand Certificate (level 4)',
      cost: { amount: 0, note: 'Paid job; programme fees are modest and the last two years can be covered by Fees Free.', src: 5 } },
  ],
  transfers: [
    { from: 'nz-y13', to: 'nz-app', label: 'Year 13 → apprenticeship',
      desc: 'Many apprentices start after completing Year 13 rather than leaving after Year 12.' },
    { from: 'nz-y12', to: 'nz-cert', label: 'Year 12 → polytechnic',
      desc: 'NCEA Level 2 is enough for many level 3–4 certificates; students can leave school after Year 12.' },
    { from: 'nz-dip', to: 'nz-ba', label: 'Diploma → degree',
      desc: 'Level 5–6 diplomas give credit towards bachelor\'s degrees at polytechnics and universities.' },
    { from: 'nz-cert', to: 'nz-ba', label: 'Bridging → university',
      desc: 'Foundation and certificate programmes are an entry route for students without University Entrance; adults over 20 get special admission.' },
  ],
  sources: [
    { title: 'Ministry of Education — More details about new senior secondary qualifications (May 2026)', url: 'https://www.education.govt.nz/news/more-details-about-new-senior-secondary-qualifications' },
    { title: 'Tahurangi — NCEA update: structure of new qualification system agreed', url: 'https://tahurangi.education.govt.nz/ncea_tranche1' },
    { title: 'University of Auckland — Undergraduate fees for domestic students (2026)', url: 'https://www.auckland.ac.nz/en/study/fees-and-money-matters/tuition-fees/domestic-student-fees/undergraduate-domestic-fees.html' },
    { title: 'University of Auckland — Postgraduate fees for domestic students (2026)', url: 'https://www.auckland.ac.nz/en/study/fees-and-money-matters/tuition-fees/domestic-student-fees/postgraduate-domestic-fees.html' },
    { title: 'University of Auckland — Doctoral fees (2026)', url: 'https://www.auckland.ac.nz/en/study/fees-and-money-matters/tuition-fees/doctoral-fees.html' },
    { title: 'Inland Revenue — Fees Free (final year, up to $12,000)', url: 'https://www.ird.govt.nz/fees-free/new' },
    { title: 'govt.nz — Help paying for early childhood education (20 Hours ECE, FamilyBoost)', url: 'https://www.govt.nz/browse/education/help-paying-for-early-childhood-education/' },
    { title: 'Ministry of Education — 20 Hours ECE for ECE services', url: 'https://www.education.govt.nz/early-childhood/funding-and-data/20-hours-ece-for-ece-services' },
    { title: 'TEC — Establishment of institutes of technology and polytechnics (2026)', url: 'https://tec.govt.nz/vocational-education/vocational-education/changes-to-the-vocational-education-and-training-vet-system/establishment-of-institutes-of-technology-and-polytechnics' },
    { title: 'Ministry of Education — Redesign of the vocational education and training system', url: 'https://education.govt.nz/our-work/strategies-policies-and-programmes/tertiary-and-further-education/redesign-vocational-education-and-training-system' },
    { title: 'Ministry of Education — Tuition fees and compulsory course costs (AMFM)', url: 'https://www.education.govt.nz/our-work/strategies-policies-and-programmes/tertiary-and-further-education/tuition-fees-and-compulsory-course-costs' },
    { title: 'NZQA — University Entrance', url: 'https://www2.nzqa.govt.nz/ncea/subjects/university-entrance/' },
    { title: 'Lifetimes — Childcare options and costs in NZ 2026 (industry estimate)', url: 'https://lifetimes.co.nz/blog/family-benefits/childcare-options-and-costs-in-nz-2026' },
  ],
};
