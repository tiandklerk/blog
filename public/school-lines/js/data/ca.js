// Canada — shown as Ontario. Education is a provincial responsibility, so each of the 10 provinces
// and 3 territories has its own system. The school year runs from early September to late June.
export default {
  id: 'ca',
  iso3: 'CAN',
  region: 'Americas',
  currency: 'CAD',
  name: 'Canada (Ontario)',
  localName: 'Ontario, Canada',
  flag: '🇨🇦',
  summary:
    'Canada has no national education ministry: each province runs its own system, and this map ' +
    'shows Ontario, the largest. Children start full-day Kindergarten at 4 (JK) and 5 (SK), go to ' +
    'elementary school to Grade 8 and secondary school for Grades 9–12. There is no selection into ' +
    'school types; instead, Grade 11–12 courses are labelled for university, college or the ' +
    'workplace. The OSSD diploma needs 30 credits, the literacy test and 40 hours of volunteering. ' +
    'Graduates go on to university (4-year honours bachelor\'s), a college of applied arts and ' +
    'technology (certificates, diplomas, degrees) or an apprenticeship. Quebec differs most: ' +
    'secondary school ends after Secondary V (age 17), followed by CEGEP — two years before ' +
    'university or three years of technical training.',
  ageNote:
    'Children start JK in September of the year they turn 4, so the cut-off is effectively ' +
    '31 December. Other provinces use different entry ages and cut-offs, and most have only one ' +
    'year of kindergarten.',
  compulsory: {
    from: 6,
    to: 18,
    label: 'School 6–18',
    note:
      'Children must attend school from September of the year they turn 6 until they turn 18 or ' +
      'earn the OSSD (Ontario raised the leaving age from 16 to 18 in 2006). Kindergarten is free ' +
      'but optional. Most other provinces require school only to age 16.',
  },
  costNote:
    'Public schools (both English and French public and Catholic boards are publicly funded) are ' +
    'free. Child care uses the $10-a-day program fee cap. Tertiary figures are domestic tuition for ' +
    'Ontario residents; Ontario lifted its tuition freeze in 2026, allowing rises of up to 2% a year.',
  lines: [
    { id: 'early', name: 'Child care', color: '#7C8A93', lane: 0,
      desc: 'Licensed child care centres and home child care. Under the Canada-Wide Early Learning ' +
        'and Child Care (CWELCC) agreement, fees in participating centres for children under 6 are ' +
        'capped at $22 a day; the $10-a-day target has slipped, and the agreement was extended for ' +
        'a year with fees frozen.' },
    { id: 'elem', name: 'Elementary', color: '#D2322D', lane: 0, from: 'ca-cc',
      desc: 'Elementary school from Kindergarten to Grade 8, run by four kinds of publicly funded ' +
        'boards: English public, English Catholic, French public and French Catholic. French ' +
        'immersion is offered in many English boards.' },
    { id: 'sec', name: 'Secondary', color: '#1E66C9', lane: 0, from: 'ca-g78',
      desc: 'Secondary school, Grades 9–12. Grade 9 has been de-streamed since 2022. In Grades 11–12 ' +
        'courses are labelled university (U), university/college (M), college (C) or workplace (E). ' +
        'Specialist High Skills Majors, dual credits and OYAP let students prepare for a sector or trade.' },
    { id: 'uni', name: 'University', color: '#7A3E9D', lane: -1, from: 'ca-g12',
      desc: 'Publicly assisted universities. Applicants apply through OUAC and are admitted mainly on ' +
        'the average of their best six Grade 12 U/M courses. Students can get OSAP grants and loans; ' +
        'from 2026–27 at most 25% of provincial OSAP aid is a grant.' },
    { id: 'col', name: 'College', color: '#2C9546', lane: 1, from: 'ca-g12',
      desc: 'Public colleges of applied arts and technology (applications via OCAS / ontariocolleges.ca): ' +
        'one-year certificates, two-year diplomas, three-year advanced diplomas, four-year bachelor\'s ' +
        'degrees and one-year graduate certificates for degree holders. They also deliver apprenticeship ' +
        'in-school training.' },
    { id: 'appr', name: 'Apprenticeship', color: '#DD7710', lane: 2, from: 'ca-g12',
      desc: 'Registered apprenticeship with Skilled Trades Ontario: 2–5 years, about 80% on the job ' +
        'and 20% in class (usually 8–12-week blocks at a college or union training centre). Ends with ' +
        'a Certificate of Apprenticeship and, in many trades, a Certificate of Qualification exam ' +
        '(with a Red Seal endorsement in national trades).' },
  ],
  stations: [
    // Child care
    { id: 'ca-cc', line: 'early', name: 'Child care', local: 'Licensed child care (CWELCC)', ages: [0, 4], isced: 0,
      desc: 'Infant, toddler and preschool child care. Most licensed centres are enrolled in CWELCC, ' +
        'which capped parent fees at $22 a day (provincial average about $19 in early 2026). Spaces ' +
        'are short and wait-lists are long.',
      cost: { amount: 5500, note: 'About: the $22/day CWELCC cap × ~250 days; many centres charge less. Means-tested subsidies can lower it further.', src: 4 } },
    // Elementary
    { id: 'ca-jk', line: 'elem', name: 'JK', local: 'Junior Kindergarten (Year 1 of Kindergarten)', ages: [4, 5], isced: 0,
      desc: 'Full-day, play-based kindergarten taught by a teacher and an early childhood educator. ' +
        'Free and optional; nearly all 4-year-olds attend. Before- and after-school care is available ' +
        'at many schools for a fee.',
      events: ['Starts in September of the year the child turns 4'],
      cost: { amount: 0, note: 'Free 2-year program at public schools.', src: 2 } },
    { id: 'ca-sk', line: 'elem', name: 'SK', local: 'Senior Kindergarten (Year 2 of Kindergarten)', ages: [5, 6], isced: 0,
      desc: 'Second kindergarten year, with a focus on early literacy and numeracy.',
      cost: { amount: 0, note: 'Free at public schools.', src: 2 } },
    { id: 'ca-g1', line: 'elem', name: 'Grades 1–2', ages: [6, 8], isced: 1,
      desc: 'Primary division. School becomes compulsory. Reading screening is done in Kindergarten to Grade 2.',
      cost: { amount: 0, note: 'Free at public schools.' } },
    { id: 'ca-g3', line: 'elem', name: 'Grade 3', ages: [8, 9], isced: 1,
      desc: 'End of the primary division. EQAO Primary Division assessment of reading, writing and mathematics, online in May–June.',
      exam: 'EQAO Grade 3', events: ['EQAO Primary assessment (May–June)'],
      cost: { amount: 0, note: 'Free at public schools.' } },
    { id: 'ca-g45', line: 'elem', name: 'Grades 4–5', ages: [9, 11], isced: 1,
      desc: 'Junior division. Core French (or French immersion) continues.',
      cost: { amount: 0, note: 'Free at public schools.' } },
    { id: 'ca-g6', line: 'elem', name: 'Grade 6', ages: [11, 12], isced: 1,
      desc: 'EQAO Junior Division assessment of reading, writing and mathematics in May–June.',
      exam: 'EQAO Grade 6', events: ['EQAO Junior assessment (May–June)'],
      cost: { amount: 0, note: 'Free at public schools.' } },
    { id: 'ca-g78', line: 'elem', name: 'Grades 7–8', ages: [12, 14], isced: 2,
      desc: 'Intermediate division, in the elementary school (or a senior public school). Families ' +
        'choose a secondary school and programmes such as French immersion, IB or arts focus in Grade 8.',
      events: ['Secondary school course selection (Grade 8, winter)'],
      cost: { amount: 0, note: 'Free at public schools.' } },
    // Secondary
    { id: 'ca-g9', line: 'sec', name: 'Grade 9', ages: [14, 15], isced: 2,
      desc: 'De-streamed Grade 9 (since 2022): all students take the same courses. EQAO Grade 9 ' +
        'mathematics assessment at the end of the math course. Students start earning OSSD credits ' +
        'and can begin their 40 community-involvement hours (from the summer before Grade 9).',
      exam: 'EQAO Grade 9 math', events: ['EQAO Grade 9 math (Jan–Feb or June, by semester)'],
      cost: { amount: 0, note: 'Free at public schools.' } },
    { id: 'ca-g10', line: 'sec', name: 'Grade 10', ages: [15, 16], isced: 3,
      desc: 'Students sit the Ontario Secondary School Literacy Test (OSSLT), a graduation ' +
        'requirement, and take Career Studies with a financial-literacy test (70% needed, for students ' +
        'who started Grade 9 in 2024 or later). Grade 10 Canadian history is compulsory.',
      exam: 'OSSLT', events: ['OSSLT (November 2026 window)'],
      cost: { amount: 0, note: 'Free at public schools.' } },
    { id: 'ca-g11', line: 'sec', name: 'Grade 11', ages: [16, 17], isced: 3,
      desc: 'Senior courses by destination: U (university), M (university/college), C (college) and E ' +
        '(workplace). Students in OYAP can start registered apprenticeship hours while in school.',
      cost: { amount: 0, note: 'Free at public schools.' } },
    { id: 'ca-g12', line: 'sec', name: 'Grade 12', ages: [17, 18], isced: 3,
      desc: 'OSSD: 30 credits (17 compulsory + 13 optional for students who started Grade 9 in 2024 ' +
        'or later), including 2 online-learning credits, plus the literacy requirement and 40 hours of ' +
        'community involvement. University applications (OUAC) and college applications (OCAS) are ' +
        'due in January–February; many students stay a fifth year (“victory lap”). Students who leave ' +
        'with 14 credits can get the Ontario Secondary School Certificate (OSSC).',
      exam: 'OSSD (Ontario Secondary School Diploma)',
      events: ['OUAC application deadline (mid-January)', 'OCAS equal-consideration date (1 February)', 'Offers by early June'],
      cost: { amount: 0, note: 'Free at public schools.', src: 0 } },
    // University
    { id: 'ca-ba', line: 'uni', name: 'Bachelor', ages: [18, 22], isced: 6,
      desc: 'Honours bachelor\'s degree, usually 4 years (3-year general degrees exist). Many ' +
        'programmes offer co-op terms of paid work.',
      exam: 'Bachelor\'s degree (honours)',
      cost: { amount: 8958, note: 'Ontario average for Canadian undergraduates 2025/26 (StatCan); +2% a year allowed from 2026–27.', src: 3 } },
    { id: 'ca-ma', line: 'uni', name: 'Master\'s', ages: [22, 24], isced: 7,
      desc: 'Master\'s degrees of 1–2 years (course-based or thesis). Research master\'s students are often funded through assistantships.',
      exam: 'Master\'s degree',
      cost: { amount: 7978, note: 'Canadian average graduate tuition for domestic students, 2025/26; varies widely by programme.', src: 3 } },
    { id: 'ca-phd', line: 'uni', name: 'PhD', ages: [24, 28], isced: 8,
      desc: 'Doctorate of about 4–6 years. Doctoral students usually receive a funding package (stipend plus tuition) from the university or federal granting councils.',
      exam: 'Doctorate',
      cost: { amount: 7978, note: 'Canadian average graduate tuition (2025/26), usually offset by a funding package.', src: 3 } },
    // College
    { id: 'ca-dip', line: 'col', name: 'Diploma', local: 'Ontario College Certificate / Diploma', ages: [18, 20], isced: 5,
      desc: 'One-year Ontario College Certificate or two-year Ontario College Diploma, with labs and work placements (e.g. business, early childhood education, technician programmes).',
      exam: 'Ontario College Diploma',
      cost: { amount: 2720, note: 'About: typical domestic tuition for two semesters (Northern College 2025–26); ancillary fees extra.', src: 5 } },
    { id: 'ca-adv', line: 'col', name: 'Adv. Diploma', local: 'Ontario College Advanced Diploma / degree', ages: [20, 21], isced: 5,
      desc: 'Third year for an Ontario College Advanced Diploma (technologist level). Colleges also ' +
        'offer 4-year bachelor\'s degrees and one-year graduate certificates (postgraduate).',
      exam: 'Ontario College Advanced Diploma',
      cost: { amount: 2720, note: 'About the same per-year tuition as diplomas; college degree programmes cost more.', src: 5 } },
    // Apprenticeship
    { id: 'ca-app', line: 'appr', name: 'Apprenticeship', local: 'Registered apprenticeship (Skilled Trades Ontario)', ages: [18, 22], isced: 4,
      desc: 'Paid work under a journeyperson, with in-school blocks at a college or training centre. ' +
        'Apprentices register with Skilled Trades Ontario; many trades (electrician, plumber) are ' +
        'compulsory and require a Certificate of Qualification.',
      exam: 'Certificate of Apprenticeship / Qualification',
      cost: { amount: 400, note: 'About: $10/day classroom fee for 8–12 weeks per level (~$400–600); Ontario covers it for Level 1 from Jan 2026. Apprentices earn wages.', src: 10 } },
  ],
  transfers: [
    { from: 'ca-g11', to: 'ca-app', label: 'OYAP → apprenticeship',
      desc: 'The Ontario Youth Apprenticeship Program lets students register as apprentices and log hours while still earning their OSSD.' },
    { from: 'ca-dip', to: 'ca-ba', label: 'College → university',
      desc: 'Diploma graduates can transfer into many degrees with credit, through pathway agreements supported by ONCAT.' },
    { from: 'ca-ba', to: 'ca-adv', label: 'Degree → graduate certificate',
      desc: 'Many university graduates take a one-year college graduate certificate for job-specific skills.' },
    { from: 'ca-dip', to: 'ca-app', label: 'College → trades',
      desc: 'College pre-apprenticeship and techniques programmes can give credit towards the in-school part of an apprenticeship.' },
  ],
  sources: [
    { title: 'Ontario — High school graduation requirements (OSSD)', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' },
    { title: 'EQAO — The assessments', url: 'https://www.eqao.com/the-assessments/' },
    { title: 'Ontario — Kindergarten', url: 'https://www.ontario.ca/page/kindergarten' },
    { title: 'Statistics Canada — Tuition fees for degree programs, 2025/2026 (The Daily)', url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/250910/dq250910d-eng.htm' },
    { title: 'CCPA — The $10-a-day divide: child care fees in Canada in 2026', url: 'https://www.policyalternatives.ca/news-research/the-10-a-day-divide-child-care-fees-in-canada-in-2026/' },
    { title: 'Northern College — Tuition & fees 2025–26', url: 'https://www.northerncollege.ca/?p=1466' },
    { title: 'Skilled Trades Ontario — Starting your apprenticeship', url: 'https://www.skilledtradesontario.ca/apprenticeship/starting-your-apprenticeship/' },
    { title: 'Ontario — Go to college or university in Ontario', url: 'https://www.ontario.ca/page/go-college-or-university-ontario' },
    { title: 'SPON — Ontario lifts tuition freeze, unveils OSAP reforms (Feb 2026)', url: 'https://spon.ca/ontario-lifts-tuition-freeze-unveils-osap-reforms-as-it-adds-billions-to-university-and-college-funding/2026/02/12/' },
    { title: 'CMEC — Education in Canada: an overview', url: 'https://www.cmec.ca/299/education-in-canada-an-overview/index.html' },
    { title: 'Ontario MLITSD — In-Class Enhancement Fund: Level 1 classroom fees ($10/day) covered from 1 Jan 2026', url: 'https://eopg.labour.gov.on.ca/wp-content/uploads/2025/11/appr-tda-in-class-enhancement-fund-classroom-fees-en-1.pdf' },
  ],
};
