// Nigeria — school system as a metro map.
// The school year (session) runs roughly September to July in three terms; ages are typical ages at entry.
export default {
  id: 'ng',
  iso3: 'NGA',
  region: 'Africa',
  currency: 'NGN',
  name: 'Nigeria',
  localName: 'Nigeria',
  flag: '🇳🇬',
  summary:
    'A 6-3-3-4 system: six years of primary school, three of junior secondary (JSS) and three of senior ' +
    'secondary (SSS), followed by about four years of university. Primary and JSS form nine years of free, ' +
    'compulsory Universal Basic Education (UBE), ending with the BECE. SSS ends with the WAEC or NECO ' +
    'senior school certificate; university entry also needs the JAMB UTME. Alongside universities there ' +
    'are polytechnics (OND, HND), colleges of education (NCE) and technical colleges. In 2025 the federal ' +
    'government launched a slimmer national curriculum and proposed 12 years of compulsory basic education.',
  ageNote:
    'Children typically start Primary 1 at 6. Many start earlier in private schools, and late entry and ' +
    'repetition are common in public schools, especially in the north. Since 2025 the minimum age for ' +
    'tertiary admission is 16, with an exception route for exceptionally gifted younger candidates. ' +
    'Education is a concurrent responsibility: the 36 states and the FCT run most public schools, so fees, ' +
    'exam arrangements and dates vary by state.',
  compulsory: {
    from: 6,
    to: 15,
    label: 'UBE 9 years (6–15)',
    note:
      'The Universal Basic Education Act 2004 makes primary and junior secondary school (9 years) free and ' +
      'compulsory. The National Policy on Education also counts one year of pre-primary as basic education. ' +
      'Enforcement is weak: Nigeria has one of the largest out-of-school populations in the world (about ' +
      '18 million children by advocacy estimates). In February 2025 the Ministry proposed extending ' +
      'compulsory basic education to 12 years (to the end of SSS) while keeping the 6-3-3 structure; its ' +
      'adoption had not been confirmed when this was written.',
  },
  costNote:
    'Figures are for 2025/26 in naira. Tuition is free at public primary and junior secondary schools, and ' +
    'in most states also at senior secondary level, but parents often pay PTA levies, uniforms and exam ' +
    'fees. Federal universities charge no tuition but levy "obligatory charges"; state universities usually ' +
    'charge more. A large share of pupils, especially in cities, attend private schools.',
  lines: [
    { id: 'early', name: 'ECCDE', color: '#7C8A93', lane: 0,
      desc: 'Early Childhood Care, Development and Education: crèches and nursery schools (0–5) and one ' +
        'year of pre-primary (age 5). Public provision is mostly a pre-primary class attached to public ' +
        'primary schools; private nurseries dominate in towns. Only about 1 in 3 children aged 3–4 attend.' },
    { id: 'pri', name: 'Primary', color: '#D2322D', lane: 0, from: 'ng-pre',
      desc: 'Primary 1–6, run by State Universal Basic Education Boards (SUBEBs) and local governments, ' +
        'co-funded by UBEC. From 2025/26 pupils take 9–10 subjects (Primary 1–3) or 10–12/11–13 (Primary ' +
        '4–6) under the new curriculum, including Nigerian History. Teaching should be in the mother tongue ' +
        'or local language in the early years, then English.' },
    { id: 'jss', name: 'Junior Secondary', color: '#1E66C9', lane: 0, from: 'ng-p6',
      desc: 'JSS 1–3, the last three years of UBE. Pupils take 12–14 subjects under the 2025 curriculum, ' +
        'including pre-vocational and trade subjects. Federal Government Colleges (“Unity Schools”) admit ' +
        'by the National Common Entrance Examination.' },
    { id: 'sss', name: 'Senior Secondary', color: '#174E9C', lane: 0, from: 'ng-jss3',
      desc: 'SSS 1–3. Since 2025/26 every student takes five compulsory subjects (English, General ' +
        'Mathematics, Citizenship & Heritage Studies, Digital Technologies and a trade subject) plus ' +
        'electives in science, business or humanities, 8–9 subjects in total.' },
    { id: 'uni', name: 'University', color: '#5B2C83', lane: -1, from: 'ng-ss3',
      desc: 'About 270 universities: federal, state and private, regulated by the National Universities ' +
        'Commission (NUC). Entry needs five SSCE credits including English and maths, a UTME score above ' +
        'the cut-off, and the university\'s post-UTME screening; admission is processed through JAMB\'s ' +
        'CAPS. Strikes by lecturers (ASUU) have repeatedly extended programmes.' },
    { id: 'poly', name: 'Polytechnic', color: '#DD7710', lane: 1, from: 'ng-ss3',
      desc: 'Polytechnics and monotechnics, regulated by the National Board for Technical Education ' +
        '(NBTE): a 2-year Ordinary National Diploma (OND/ND), a year of industrial training, then a 2-year ' +
        'Higher National Diploma (HND). HND holders are still often treated as below degree holders in ' +
        'public-service jobs (the “HND/BSc dichotomy”); the Minister has proposed letting polytechnics ' +
        'award degrees.' },
    { id: 'nce', name: 'College of Education', color: '#2C9546', lane: 2, from: 'ng-ss3',
      desc: 'Colleges of education train primary and junior secondary teachers for the Nigeria Certificate ' +
        'in Education (NCE), the minimum teaching qualification, regulated by the NCCE.' },
    { id: 'tech', name: 'Technical College', color: '#00A0A6', lane: 3, from: 'ng-jss3',
      desc: 'Technical colleges (including Federal Science and Technical Colleges) offer 3-year craft ' +
        'courses after JSS, examined by NABTEB, as the senior-secondary vocational alternative.' },
  ],
  stations: [
    // ECCDE
    { id: 'ng-nur', line: 'early', name: 'Nursery', local: 'Crèche / nursery (ECCDE)', ages: [2, 5], isced: 0,
      desc: 'Crèches and nursery schools, mostly private or faith-based. Participation is much higher in ' +
        'the south than in the north.',
      cost: { amount: 0, note: 'Public provision is free but scarce; most nurseries are private and fee-charging.' } },
    { id: 'ng-pre', line: 'early', name: 'KG', local: 'Pre-primary / kindergarten year', ages: [5, 6], isced: 0,
      desc: 'One year of pre-primary education, part of basic education under the National Policy on ' +
        'Education. Public schools are meant to offer a pre-primary class funded through UBE.',
      cost: { amount: 0, note: 'Free in public primary schools under UBE; private kindergartens charge fees.' } },
    // Primary
    { id: 'ng-p13', line: 'pri', name: 'Primary 1–3', ages: [6, 9], isced: 1,
      desc: 'Lower primary. Large classes and teacher shortages are common in public schools; many ' +
        'families who can afford it choose low-cost private schools.',
      cost: { amount: 0, note: 'Tuition-free under UBE; PTA levies and other charges are common in practice.' } },
    { id: 'ng-p45', line: 'pri', name: 'Primary 4–5', ages: [9, 11], isced: 1,
      desc: 'Upper primary; English becomes the main language of instruction.',
      cost: { amount: 0, note: 'Tuition-free under UBE.' } },
    { id: 'ng-p6', line: 'pri', name: 'Primary 6', ages: [11, 12], isced: 1,
      desc: 'Final primary year. Pupils move to JSS on the basis of school (and in some states state) ' +
        'assessments. Those seeking a place in a federal Unity School sit the National Common Entrance ' +
        'Examination run by NECO.',
      exam: 'Primary school certificate (school/state)', events: ['National Common Entrance Examination (NECO), usually April–May'],
      cost: { amount: 0, note: 'Tuition-free under UBE.' } },
    // JSS
    { id: 'ng-jss1', line: 'jss', name: 'JSS 1', ages: [12, 13], isced: 2,
      desc: 'Start of junior secondary, often in the same school as SSS.',
      cost: { amount: 0, note: 'Tuition-free under UBE; Unity Schools charge boarding and other fees (raised to ₦100,000 for new students in 2023).' } },
    { id: 'ng-jss2', line: 'jss', name: 'JSS 2', ages: [13, 14], isced: 2,
      desc: 'Junior secondary, including pre-vocational and trade subjects.',
      cost: { amount: 0, note: 'Tuition-free under UBE.' } },
    { id: 'ng-jss3', line: 'jss', name: 'JSS 3', ages: [14, 15], isced: 2,
      desc: 'End of basic education. The Basic Education Certificate Examination (BECE, “junior WAEC”) is ' +
        'set by state ministries (by NECO for federal colleges) and decides entry to SSS or a technical ' +
        'college. The 2025 reform proposal would remove this exam barrier.',
      exam: 'Basic Education Certificate (BECE)', events: ['BECE around May–July (varies by state)'],
      cost: { amount: 0, note: 'Tuition-free; BECE registration fees are often charged to families, varying by state.' } },
    // SSS
    { id: 'ng-ss1', line: 'sss', name: 'SSS 1', ages: [15, 16], isced: 3,
      desc: 'Students choose a science, business or humanities combination.',
      cost: { amount: 0, note: 'Tuition-free in public schools in most states; levies and fees vary by state.' } },
    { id: 'ng-ss2', line: 'sss', name: 'SSS 2', ages: [16, 17], isced: 3,
      desc: 'Many students also sit the WAEC/NECO exams early or register for private “lesson” coaching ' +
        'for the UTME.',
      cost: { amount: 0, note: 'Tuition-free in public schools in most states.' } },
    { id: 'ng-ss3', line: 'sss', name: 'SSS 3', ages: [17, 18], isced: 3,
      desc: 'Final year. Students sit the West African Senior School Certificate Examination (WASSCE, by ' +
        'WAEC) and/or the NECO SSCE; five credits including English and mathematics are needed for most ' +
        'tertiary courses. The JAMB Unified Tertiary Matriculation Examination (UTME) is taken around the ' +
        'same time. WAEC and NECO began moving objective papers to computer-based testing from late 2025.',
      exam: 'WASSCE (WAEC) / SSCE (NECO)',
      events: ['JAMB UTME: usually April–May', 'WASSCE: April–June', 'NECO SSCE: June–July', 'Post-UTME screening and CAPS admission: July–October'],
      cost: { amount: 0, note: 'Tuition-free in most states; WAEC/NECO registration is paid by families or, in some states, by government.' } },
    // University
    { id: 'ng-ba', line: 'uni', name: 'Bachelor', ages: [18, 22], isced: 6,
      desc: 'Most bachelor\'s degrees take 4 years (100–400 level); engineering, law and pharmacy 5, ' +
        'medicine 6. Graduates under 30 then do a year of National Youth Service (NYSC). Since 2024 the ' +
        'Nigerian Education Loan Fund (NELFUND) offers interest-free loans for institutional fees plus ' +
        'monthly upkeep to students of public institutions; over 1 million had benefited by early 2026.',
      exam: 'Bachelor\'s degree', events: ['NYSC national service year after graduation'],
      cost: { amount: 140000, private: 1500000,
        note: 'About; UNILAG charges ₦100,750–190,250 plus ₦20,000 utilities (no tuition). State universities often charge more; private ₦0.5–12 million.', src: 5 } },
    { id: 'ng-ma', line: 'uni', name: 'Master\'s', ages: [23, 25], isced: 7,
      desc: 'Master\'s degrees take 1–2 years after NYSC; a postgraduate diploma (PGD) can bridge from an ' +
        'HND or a third-class degree.', exam: 'Master\'s degree',
      cost: { amount: 250000, note: 'About; postgraduate fees vary widely by university and are not covered by NELFUND. Figure not verified.', estimate: true } },
    { id: 'ng-phd', line: 'uni', name: 'PhD', ages: [25, 29], isced: 8,
      desc: 'Doctoral research, nominally 3 years, often longer.', exam: 'Doctorate (PhD)',
      cost: { amount: 250000, note: 'About; varies by university. Figure not verified.', estimate: true } },
    // Polytechnic
    { id: 'ng-nd', line: 'poly', name: 'ND / OND', local: 'Ordinary National Diploma', ages: [18, 20], isced: 5,
      desc: 'Two-year national diploma in engineering, business, science or environmental studies. Entry ' +
        'needs SSCE credits and a lower UTME cut-off than university.',
      exam: 'National Diploma (ND)',
      cost: { amount: 46000, note: 'About; Federal Polytechnic Ado-Ekiti charges ₦45,000–46,000 a year plus a ₦100,000 acceptance fee. NELFUND loans available.', src: 10 } },
    { id: 'ng-siwes', line: 'poly', name: 'IT year', local: 'Industrial training (SIWES)', ages: [20, 21], isced: 5,
      desc: 'A year of supervised industrial work experience, required before HND admission.',
      cost: { amount: 0, note: 'No tuition; trainees work in industry.' } },
    { id: 'ng-hnd', line: 'poly', name: 'HND', local: 'Higher National Diploma', ages: [21, 23], isced: 6,
      desc: 'Two-year higher national diploma. Graduates do NYSC like degree holders and can enter a ' +
        'postgraduate diploma or, at some universities, a master\'s.',
      exam: 'Higher National Diploma (HND)',
      cost: { amount: 46000, note: 'About; similar to ND fees at federal polytechnics; state and private polytechnics charge more.', src: 10 } },
    // NCE
    { id: 'ng-nce', line: 'nce', name: 'NCE', local: 'Nigeria Certificate in Education', ages: [18, 21], isced: 5,
      desc: 'Three-year teacher-training programme combining two teaching subjects and education studies, ' +
        'with a teaching practice. Several federal colleges were converted into universities of education ' +
        'in 2023–24.',
      exam: 'Nigeria Certificate in Education (NCE)',
      cost: { amount: 50000, note: 'About; assumed similar to federal polytechnic fees (not verified for colleges of education).', estimate: true } },
    // Technical college
    { id: 'ng-tc', line: 'tech', name: 'Technical college', local: 'Technical College 1–3', ages: [15, 18], isced: 3,
      desc: 'Three years of craft training (e.g. electrical installation, motor mechanics, building) plus ' +
        'general subjects. Graduates can go into work, an apprenticeship or a polytechnic.',
      exam: 'National Technical / Business Certificate (NTC/NBC, NABTEB)',
      cost: { amount: 0, note: 'Tuition-free in most public technical colleges; boarding and levies vary.' } },
  ],
  transfers: [
    { from: 'ng-nd', to: 'ng-ba', label: 'OND → university (Direct Entry)', desc: 'OND holders with an upper credit can enter a related degree at 200 level through JAMB Direct Entry.' },
    { from: 'ng-nce', to: 'ng-ba', label: 'NCE → B.Ed (Direct Entry)', desc: 'NCE holders can enter a related B.Ed or degree at 200 level through JAMB Direct Entry.' },
    { from: 'ng-hnd', to: 'ng-ma', label: 'HND → postgraduate', desc: 'Usually via a postgraduate diploma (PGD), then a master\'s.' },
    { from: 'ng-tc', to: 'ng-nd', label: 'Technical college → polytechnic', desc: 'NTC/NBC holders with the required credits can enter ND programmes.' },
    { from: 'ng-ss3', to: 'ng-ba', label: 'JUPEB / IJMB / A level → 200 level', desc: 'A one-year pre-degree programme (JUPEB, IJMB or Cambridge A levels) after SSS allows Direct Entry into 200 level, saving a year.' },
  ],
  sources: [
    { title: 'Universal Basic Education Commission (UBEC)', url: 'https://ubec.gov.ng/' },
    { title: 'Federal Ministry of Education — FG overhauls curriculum (Sept 2025)', url: 'https://education.gov.ng/wp-content/uploads/2025/09/FG-OVERHAULS-CURRICULUM-1.pdf' },
    { title: 'Channels TV — FG proposes 12-year basic education, denies scrapping JSS/SSS (Feb 2025)', url: 'https://www.channelstv.com/2025/02/07/fg-proposes-12-year-basic-education-denies-scrapping-jss-sss' },
    { title: 'TheCable — FG to decide on 12-year basic education at October 2025 NCE', url: 'https://thecable.ng/fg-to-decide-on-proposed-adoption-of-12-year-basic-education-in-oct-2025' },
    { title: 'Voice of Nigeria — 16 declared minimum age for university admission', url: 'https://von.gov.ng/nigeria-declares-16-as-minimum-age-for-university-admission/' },
    { title: 'University of Lagos — Adjusted obligatory fees for undergraduates', url: 'https://unilag.edu.ng/?p=24374' },
    { title: 'Nairametrics — Most expensive private universities in Nigeria 2025/2026', url: 'https://nairametrics.com/2026/06/05/top-10-most-expensive-private-universities-in-nigeria-for-2025-2026/' },
    { title: 'Nigerian Education Loan Fund (NELFUND)', url: 'https://nelf.gov.ng/' },
    { title: 'BusinessDay — WAEC and NECO to adopt full CBT for 2026 exams', url: 'https://businessday.ng/news/article/2026-may-june-exams-waec-neco-to-adopt-full-cbt-alausa/' },
    { title: 'UNICEF Nigeria — Out-of-school children / basic education financing', url: 'https://www.unicef.org/nigeria/reports/public-finance-basic-education-nigeria' },
    { title: 'Awajis — Federal Polytechnic Ado-Ekiti school fees 2025/2026', url: 'https://awajis.com/fedpolyado-school-fees/' },
    { title: 'Joint Admissions and Matriculation Board (JAMB)', url: 'https://www.jamb.gov.ng/' },
    { title: 'West African Examinations Council (WAEC) Nigeria', url: 'https://www.waecnigeria.org/' },
  ],
};
