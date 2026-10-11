// Australia — school system as a metro map.
// Schooling is run by the six states and two territories, so names, cut-off dates and senior
// certificates vary. The school year runs from late January/early February to December.
export default {
  id: 'au',
  iso3: 'AUS',
  region: 'Oceania',
  currency: 'AUD',
  name: 'Australia',
  localName: 'Australia',
  flag: '🇦🇺',
  summary:
    'Thirteen years of school: a Foundation year (called Kindergarten, Prep, Reception, Pre-primary ' +
    'or Transition depending on the state), primary school to Year 6 and secondary school from Year 7 ' +
    'to Year 12. There is no streaming into school types; pupils sit the national NAPLAN tests in ' +
    'Years 3, 5, 7 and 9. Each state awards its own senior certificate (HSC, VCE, QCE, WACE, SACE…) ' +
    'and university entry mostly runs on the ATAR rank. Vocational education (VET) through TAFE and ' +
    'private providers awards Certificates I–IV and Diplomas, and apprenticeships combine paid work ' +
    'with training. Bachelor\'s degrees take 3 years; fees are deferred through HECS-HELP loans. ' +
    'About 37% of pupils attend non-government (Catholic or independent) schools.',
  ageNote:
    'The school year follows the calendar year. Entry cut-offs differ by state: for example a child ' +
    'must turn 5 by 31 July in NSW, by 30 April in Victoria and by 30 June in Queensland and WA to ' +
    'start Foundation that year, while South Australia uses a single intake for children turning 5 ' +
    'by 1 May. Children in the same class can therefore differ by up to a year, and many parents of ' +
    'children born near the cut-off delay entry.',
  compulsory: {
    from: 6,
    to: 16,
    label: 'School 6–16 (Year 10)',
    note:
      'Every state requires enrolment by about age 6 (the exact age and date vary; Tasmania starts ' +
      'compulsion at 5). Full-time school is compulsory until Year 10 is completed.',
    extendedTo: 17,
    extendedLabel: 'Learning or earning to 17',
    extendedNote:
      'After Year 10, young people must be in full-time education, training or employment (or a ' +
      'combination) until age 17. Tasmania goes further: education or training until 18 or Year 12 ' +
      'completion.',
  },
  costNote:
    'Government schools charge no tuition (voluntary contributions are common). Costs are 2026 ' +
    'figures in A$. University fees are the student contribution for a Commonwealth supported place, ' +
    'usually deferred as a HECS-HELP loan. "Private" shows the typical non-government income per ' +
    'student at Catholic schools; independent schools charge much more.',
  lines: [
    { id: 'early', name: 'Early childhood', color: '#7C8A93', lane: 0,
      desc: 'Long day care, family day care and preschool/kindergarten. Childcare is privately or ' +
        'community run and subsidised through the means-tested Child Care Subsidy (CCS). Every child ' +
        'can get a funded preschool program in the year before school (at least 15 hours a week).' },
    { id: 'primary', name: 'Primary', color: '#D2322D', lane: 0, from: 'au-pre',
      desc: 'Primary school, Foundation to Year 6 (ages 5–12) in every state since South Australia ' +
        'moved Year 7 to high school in 2022. Follows the Australian Curriculum (version 9.0), ' +
        'adapted by each state (NSW and Victoria use their own syllabuses).' },
    { id: 'secondary', name: 'Secondary', color: '#1E66C9', lane: 0, from: 'au-y6',
      desc: 'Junior secondary, Years 7–10, in comprehensive high schools (some states also have ' +
        'selective or specialist high schools). Year 10 completion is the minimum compulsory schooling.' },
    { id: 'senior', name: 'Senior secondary', color: '#7A3E9D', lane: -1, from: 'au-y10',
      desc: 'Years 11–12 leading to a state senior certificate: HSC (NSW), VCE (Victoria), QCE ' +
        '(Queensland), WACE (WA), SACE (SA and NT), TCE (Tasmania) or ACT Senior Secondary ' +
        'Certificate. Students can mix academic subjects with VET in Schools and school-based ' +
        'apprenticeships.' },
    { id: 'uni', name: 'University', color: '#5B2C83', lane: -1, from: 'au-y12',
      desc: 'Public universities admit mostly by ATAR through state admission centres (UAC, VTAC, ' +
        'QTAC, SATAC, TISC). Domestic students usually get a Commonwealth supported place (CSP) and ' +
        'pay a student contribution, which they can defer with a HECS-HELP loan repaid through the ' +
        'tax system once income passes a threshold. A one-off 20% cut to all HELP debts was legislated ' +
        'in 2025.' },
    { id: 'vet', name: 'VET / TAFE', color: '#2C9546', lane: 1, from: 'au-y10',
      desc: 'Vocational education and training at public TAFE institutes and private registered ' +
        'training organisations, under the Australian Qualifications Framework (AQF): Certificates ' +
        'I–IV, Diploma and Advanced Diploma. Fee-Free TAFE (since 2023) waives tuition in priority ' +
        'courses; the Free TAFE Act 2025 makes at least 100,000 places a year permanent from 2027.' },
    { id: 'appr', name: 'Apprenticeship', color: '#DD7710', lane: 2, from: 'au-y10',
      desc: 'Australian Apprenticeships: a paid job with structured training, usually leading to a ' +
        'Certificate III (trades) over about 3–4 years; traineeships are shorter (1–2 years). ' +
        'School-based apprenticeships can start in Years 10–12.' },
  ],
  stations: [
    // Early childhood
    { id: 'au-cc', line: 'early', name: 'Childcare', local: 'Long day care / family day care', ages: [0, 4], isced: 0,
      desc: 'Centre-based long day care and family day care. The Child Care Subsidy pays up to 90% ' +
        'of fees up to an hourly cap, tapering with family income. From January 2026 the “3 Day ' +
        'Guarantee” gives every family at least 72 subsidised hours a fortnight without an activity test.',
      cost: { amount: 4400, note: 'About: 3 days/week at the 2026–27 hourly cap ($15.19), family income ~A$140k (~80% CCS). Fees above the cap cost more.', src: 2 } },
    { id: 'au-pre', line: 'early', name: 'Preschool', local: 'Kindergarten / kindy / preschool', ages: [4, 5], isced: 0,
      desc: 'Year-before-school program of at least 15 hours a week (600 hours a year), funded by the ' +
        'Preschool Reform Agreement. Called kindergarten in Victoria, Queensland, WA and Tasmania, ' +
        'preschool in NSW, SA and the ACT. In WA and Tasmania it is usually held in schools.',
      cost: { amount: 0, note: 'Free for the funded hours in NSW, Victoria and Queensland; low or no fees elsewhere. Extra hours cost more.' } },
    // Primary
    { id: 'au-f', line: 'primary', name: 'Foundation', local: 'Kindergarten (NSW, ACT) / Prep (Vic, Qld, Tas) / Reception (SA) / Pre-primary (WA) / Transition (NT)', ages: [5, 6], isced: 0,
      desc: 'First full-time year of school, attended by almost all 5-year-olds even where school ' +
        'is not yet compulsory. Literacy and numeracy start formally, often with an on-entry assessment.',
      events: ['School year starts late January / early February', 'On-entry assessment (state-based)'],
      cost: { amount: 0, private: 5500, note: 'Free at government schools (voluntary contributions). Private: about $5,500/student private income at Catholic schools, ~$14,800 at independents (2024).', src: 11 } },
    { id: 'au-y12a', line: 'primary', name: 'Years 1–2', ages: [6, 8], isced: 1,
      desc: 'Early primary. NSW, SA and others run a Year 1 phonics screening check; a national ' +
        'phonics check was agreed for all states.',
      events: ['Year 1 phonics check (several states)'],
      cost: { amount: 0, private: 5500, note: 'Free at government schools; private figure is the Catholic-school average (2024).', src: 11 } },
    { id: 'au-y3', line: 'primary', name: 'Year 3', ages: [8, 9], isced: 1,
      desc: 'First NAPLAN tests (reading, writing, conventions of language, numeracy). Since 2023 ' +
        'NAPLAN is held in March and reported in four proficiency levels.',
      exam: 'NAPLAN', events: ['NAPLAN: 11–23 March 2026 (Year 3 writing on paper)'],
      cost: { amount: 0, private: 5500, note: 'Free at government schools; NAPLAN has no fee.', src: 11 } },
    { id: 'au-y4', line: 'primary', name: 'Year 4', ages: [9, 10], isced: 1,
      desc: 'Middle primary. Some states run selective or opportunity-class tests later (e.g. NSW ' +
        'opportunity classes, entry in Year 5).',
      cost: { amount: 0, private: 5500, note: 'Free at government schools.', src: 11 } },
    { id: 'au-y5', line: 'primary', name: 'Year 5', ages: [10, 11], isced: 1,
      desc: 'Second NAPLAN year. In NSW, pupils sit the Selective High School Placement Test in Year 5 ' +
        '(May) for entry to selective high schools in Year 7.',
      exam: 'NAPLAN', events: ['NAPLAN (March)', 'NSW selective test (May)'],
      cost: { amount: 0, private: 5500, note: 'Free at government schools.', src: 11 } },
    { id: 'au-y6', line: 'primary', name: 'Year 6', ages: [11, 12], isced: 1,
      desc: 'Last primary year. Families choose a high school: usually the local government school, ' +
        'or apply to selective, specialist or non-government schools.',
      events: ['High school applications (state timelines)'],
      cost: { amount: 0, private: 5500, note: 'Free at government schools.', src: 11 } },
    // Junior secondary
    { id: 'au-y7', line: 'secondary', name: 'Year 7', ages: [12, 13], isced: 2,
      desc: 'Start of high school in every state. Third NAPLAN round in March.',
      exam: 'NAPLAN', events: ['NAPLAN (March)'],
      cost: { amount: 0, private: 5500, note: 'Free at government schools; non-government secondary fees are usually higher than primary.', src: 11 } },
    { id: 'au-y8', line: 'secondary', name: 'Year 8', ages: [13, 14], isced: 2,
      desc: 'Broad curriculum: English, maths, science, humanities, languages, the arts, technologies, and health & PE.',
      cost: { amount: 0, private: 5500, note: 'Free at government schools.', src: 11 } },
    { id: 'au-y9', line: 'secondary', name: 'Year 9', ages: [14, 15], isced: 2,
      desc: 'Last NAPLAN round. Elective subjects widen; some states run Year 9 camps or ' +
        'off-site programs.',
      exam: 'NAPLAN', events: ['NAPLAN (March)'],
      cost: { amount: 0, private: 5500, note: 'Free at government schools.', src: 11 } },
    { id: 'au-y10', line: 'secondary', name: 'Year 10', ages: [15, 16], isced: 2,
      desc: 'End of compulsory full-time school. Students choose senior subjects (and any VET or ' +
        'school-based apprenticeship). NSW awards a Record of School Achievement (RoSA) to those who ' +
        'leave after Year 10.',
      events: ['Senior subject selection', 'RoSA (NSW, on leaving)'],
      cost: { amount: 0, private: 5500, note: 'Free at government schools.', src: 11 } },
    // Senior secondary
    { id: 'au-y11', line: 'senior', name: 'Year 11', ages: [16, 17], isced: 3,
      desc: 'First senior year. Students pick ATAR (university-pathway) or non-ATAR subjects, VET ' +
        'courses, or a vocational stream such as Victoria\'s VCE Vocational Major (since 2023). In ' +
        'some states Year 11 results count towards the certificate.',
      cost: { amount: 0, private: 5500, note: 'Free at government schools; subject levies may apply.', src: 11 } },
    { id: 'au-y12', line: 'senior', name: 'Year 12', ages: [17, 18], isced: 3,
      desc: 'Final year. School-based assessment plus external exams in October–November. The ATAR ' +
        '(0–99.95), a percentile rank calculated from the best subject results, is released in ' +
        'mid-December; university offers follow from December to February.',
      exam: 'HSC / VCE / QCE / WACE / SACE / TCE + ATAR',
      events: ['External exams (Oct–Nov)', 'Results and ATAR (mid-December)', 'University offers (Dec–Feb)'],
      share: { pct: 81.3, of: 'full-time apparent retention from Year 7/8 to Year 12 (2025)', src: 0 },
      cost: { amount: 0, private: 5500, note: 'Free at government schools; exam boards charge no fee to students.', src: 11 } },
    // University
    { id: 'au-ba', line: 'uni', name: 'Bachelor', ages: [18, 21], isced: 6,
      desc: 'Bachelor\'s degree (AQF 7), usually 3 years full-time; professional degrees such as ' +
        'engineering or law take 4–5. The academic year starts late February/March. Student ' +
        'contribution depends on the field, from $4,738 (education, nursing, maths, English) to ' +
        '$17,399 (law, business, humanities) in 2026.',
      exam: 'Bachelor\'s degree',
      cost: { amount: 9537, note: '2026 CSP band for science, engineering, IT and health; range $4,738–17,399. Deferred via HECS-HELP.', src: 1 } },
    { id: 'au-hons', line: 'uni', name: 'Honours', ages: [21, 22], isced: 6,
      desc: 'Optional one-year honours year (AQF 8) with a research thesis, the usual route into a PhD. ' +
        'Some 4-year degrees have honours built in.',
      exam: 'Bachelor (Honours)',
      cost: { amount: 9537, note: 'Usually a CSP; same student contribution bands as the bachelor.', src: 1 } },
    { id: 'au-ma', line: 'uni', name: 'Master\'s', ages: [22, 24], isced: 7,
      desc: 'Coursework or research master\'s (AQF 9), 1–2 years. Most coursework masters are full-fee ' +
        'for domestic students (FEE-HELP loans); some, such as teaching, have CSPs.',
      exam: 'Master\'s degree',
      cost: { amount: 9537, note: 'If a CSP; most coursework masters are full-fee (FEE-HELP) and cost more.', src: 1 } },
    { id: 'au-phd', line: 'uni', name: 'PhD', ages: [24, 27], isced: 8,
      desc: 'Doctorate (AQF 10), 3–4 years of research. Domestic candidates pay no tuition under the ' +
        'Research Training Program fee offset, and many receive an RTP stipend.',
      exam: 'Doctorate',
      cost: { amount: 0, note: 'Domestic research students: tuition covered by the RTP fee offset.' } },
    // VET / TAFE
    { id: 'au-c12', line: 'vet', name: 'Cert I–II', ages: [16, 17], isced: 3,
      desc: 'Certificates I and II (AQF 1–2): entry-level and foundation skills, often taken as VET ' +
        'in Schools during Years 10–12 or as pre-apprenticeship courses.',
      exam: 'Certificate I / II',
      cost: { amount: 0, note: 'Free as VET in Schools or Fee-Free TAFE; otherwise state-subsidised fees vary by course and state.', src: 9 } },
    { id: 'au-c34', line: 'vet', name: 'Cert III–IV', ages: [17, 19], isced: 4,
      desc: 'Certificate III (skilled worker, AQF 3) and Certificate IV (supervisor/technician, AQF 4), ' +
        '6 months to 2 years. Most Fee-Free TAFE places are at this level, in priority areas such as ' +
        'care, construction, digital and clean energy.',
      exam: 'Certificate III / IV',
      cost: { amount: 0, note: 'Fee-Free TAFE in priority courses (permanent from 2027); other subsidised courses charge state-set fees.', src: 3 } },
    { id: 'au-dip', line: 'vet', name: 'Diploma', local: 'Diploma / Advanced Diploma', ages: [19, 21], isced: 5,
      desc: 'Diploma (AQF 5, 1–2 years) and Advanced Diploma or Associate Degree (AQF 6, about 2 ' +
        'years). Fees can be deferred with VET Student Loans. Diplomas often give credit towards a ' +
        'bachelor\'s degree.',
      exam: 'Diploma / Advanced Diploma',
      cost: { amount: 0, note: 'Free for Fee-Free TAFE diplomas (e.g. nursing, early childhood); otherwise often thousands. 2026 VSL caps $6,428–19,290.', src: 8 } },
    // Apprenticeship
    { id: 'au-app', line: 'appr', name: 'Apprenticeship', local: 'Australian Apprenticeship (trade Certificate III)', ages: [16, 20], isced: 4,
      desc: 'Employment contract plus off-the-job training at TAFE or a private RTO, typically 3–4 ' +
        'years for a trade (electrician, carpenter, plumber…) and ending in a Certificate III and a ' +
        'trade licence. Apprentices earn award wages, and employers receive incentive payments.',
      exam: 'Certificate III (trade)',
      cost: { amount: 0, note: 'Paid job; training fees vary by state and are waived in some (e.g. NSW fee-free apprenticeships since 2018).', src: 9 } },
  ],
  transfers: [
    { from: 'au-y12', to: 'au-c34', label: 'Year 12 → TAFE',
      desc: 'Many Year 12 graduates go straight to a Certificate IV or Diploma at TAFE, often without needing an ATAR.' },
    { from: 'au-y12', to: 'au-app', label: 'Year 12 → apprenticeship',
      desc: 'Most apprentices start after leaving school at 17–19; Year 12 completion is not required.' },
    { from: 'au-c12', to: 'au-y12', label: 'VET in Schools',
      desc: 'VET certificates taken in Years 10–12 count towards the senior certificate, and some count towards the ATAR.' },
    { from: 'au-dip', to: 'au-ba', label: 'Diploma → bachelor',
      desc: 'A Diploma or Advanced Diploma gives university entry without an ATAR and often up to a year of credit.' },
    { from: 'au-c34', to: 'au-ba', label: 'Cert IV → university',
      desc: 'A completed Certificate IV is accepted for admission to many bachelor\'s degrees.' },
    { from: 'au-ba', to: 'au-ma', label: 'Bachelor → master\'s',
      desc: 'A pass bachelor\'s gives entry to coursework master\'s; research master\'s and PhDs usually need honours.' },
  ],
  sources: [
    { title: 'ABS — Schools, 2025 (enrolments by sector, retention)', url: 'https://www.abs.gov.au/statistics/people/education/schools/2025' },
    { title: 'Department of Education — 2026 indexed rates (CSP student contribution amounts)', url: 'https://www.education.gov.au/download/19201/2026-indexed-rates/41481/document/pdf' },
    { title: 'Department of Education — Child Care Subsidy hourly rate caps 2026–27', url: 'https://www.education.gov.au/node/20425' },
    { title: 'DEWR — Government response on the Free TAFE Bill (Free TAFE Act 2025)', url: 'https://www.dewr.gov.au/ne/download/17222/australian-government-response-education-and-employment-legislation-committee-report-free-tafe-bill/41215/australian-government-response-education-and-employment-legislation-committee-report-free-tafe-bill/pdf' },
    { title: 'ACARA — NAPLAN', url: 'https://www.nap.edu.au/naplan' },
    { title: 'ABS — Differences in schooling structures between states', url: 'https://www.abs.gov.au/ausstats/abs@.nsf/Products/4221.0~2013~Appendix~Differences+in+schooling+structures+(Appendix)' },
    { title: 'StudyAssist — HECS-HELP', url: 'https://www.studyassist.gov.au/help-loans/hecs-help' },
    { title: 'StudyAssist — 20% reduction to student debt (2025)', url: 'https://www.studyassist.gov.au/node/230' },
    { title: 'DEWR — VET Student Loans course caps (indexed amounts)', url: 'https://www.dewr.gov.au/download/7165/vet-student-loans-course-caps-indexed-amounts-students/43750/vet-student-loans-course-caps-indexed-amounts-students/pdf' },
    { title: 'TAFE NSW — Government funded training (fee-free, Smart and Skilled, apprenticeships)', url: 'https://www.tafensw.edu.au/Study/Fees/Government-funded-training' },
    { title: 'VCAA — NAPLAN 2026 school information kit (test window)', url: 'https://vcaa.vic.edu.au/sites/default/files/2025-12/2026NAPLANSchoolInformationKit.pdf' },
    { title: 'The Educator — School income per student by sector, 2024 (ACARA data)', url: 'https://www.theeducatoronline.com/k12/news/private-schools-pull-further-ahead-as-funding-gap-widens/288863' },
    { title: 'Australian Qualifications Framework', url: 'https://www.aqf.edu.au/' },
    { title: 'Australian Apprenticeships', url: 'https://www.apprenticeships.gov.au/' },
  ],
};
