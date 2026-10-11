// Russia — federal system (Ministry of Enlightenment for schools and colleges,
// Ministry of Science and Higher Education for universities). Regions fund schools
// and set kindergarten fees, so some details vary by region.
export default {
  id: 'ru',
  iso3: 'RUS',
  region: 'Europe',
  currency: 'RUB',
  name: 'Russia',
  localName: 'Россия',
  flag: '🇷🇺',
  summary:
    'Kindergarten (detsky sad) from about 1½ to 7, then a single 11-year general school: primary ' +
    '(grades 1–4), basic general (5–9, ending in the OGE exams) and secondary general (10–11, ending ' +
    'in the Unified State Exam, EGE). After grade 9 most pupils now leave for vocational colleges and ' +
    'technikums (SPO). University entry is by EGE scores; places are either budget-funded (free, ' +
    'competitive) or fee-paying. Russia left the Bologna Process in 2022 and is piloting a new ' +
    '"basic higher" (4–6 years) plus "specialised higher" (1–3 years) structure to replace the ' +
    'bachelor/master split.',
  ageNote:
    'Children start grade 1 between 6½ and 8, usually in the September after they turn 7 (the map ' +
    'assumes 7). There is no fixed national cut-off date; schools admit children who are at least ' +
    '6½ on 1 September. The school year runs from 1 September to late May, with exams in May–July.',
  compulsory: {
    from: 7,
    to: 16,
    label: 'Basic general education 1–9',
    note:
      'Grades 1–9 (basic general education) are completed at school. A pupil of 15 may leave ' +
      'earlier only with parental and local-authority consent.',
    extendedTo: 18,
    extendedLabel: 'Secondary general duty to 18',
    extendedNote:
      'Under Federal Law 273-FZ, secondary general education is compulsory until age 18. It can be ' +
      'completed in grades 10–11 or within an SPO college programme.',
  },
  costNote:
    'Schooling and budget-funded (state-financed) college and university places are free. ' +
    'Kindergarten parents pay a regional "care fee". At universities and colleges, students not ' +
    'admitted to a budget place can pay; the average paid-place fee is shown as "private". Figures for 2025/26.',
  lines: [
    { id: 'ds', name: 'Detsky sad', color: '#7C8A93', lane: 0,
      desc: 'Preschool education: nursery groups (yasli) from about 1½–2 and kindergarten groups ' +
        '3–7. Not compulsory. The education programme is free; parents pay a regional fee for care.' },
    { id: 'nach', name: 'Primary', color: '#D2322D', lane: 0, from: 'ru-ds',
      desc: 'Nachalnoye obshcheye obrazovaniye: grades 1–4, usually in the same school building as ' +
        'grades 5–11, with one class teacher.' },
    { id: 'osn', name: 'Basic general', color: '#1E66C9', lane: 0, from: 'ru-p4',
      desc: 'Osnovnoye obshcheye obrazovaniye: grades 5–9 with subject teachers, ending in the OGE ' +
        '(main state exam) and the certificate of basic general education.' },
    { id: 'sred', name: 'Grades 10–11', color: '#7A3E9D', lane: -1, from: 'ru-g9',
      desc: 'Sredneye obshcheye obrazovaniye: two upper-secondary years with profile streams ' +
        '(science, humanities, social-economic, technology, universal), ending in the EGE.' },
    { id: 'uni', name: 'Bachelor / master', color: '#4B2470', lane: -1, from: 'ru-g11',
      desc: 'Bakalavriat (4 years) then magistratura (2 years), and aspirantura for the Candidate of ' +
        'Science degree. Admission by EGE results to budget (free) or paid places. Being replaced ' +
        'by "basic higher" + "specialised higher" education (pilot since 2023).' },
    { id: 'spec', name: 'Specialitet', color: '#B0306A', lane: -2, from: 'ru-g11',
      desc: 'Single long degree of 5–6 years (medicine 6, then ordinatura residency), kept in ' +
        'engineering, medicine, defence, security and some sciences. Gives direct access to ' +
        'aspirantura. It is the model for the new "basic higher" level.' },
    { id: 'spo', name: 'SPO college', color: '#DD7710', lane: 1, from: 'ru-g9',
      desc: 'Sredneye professionalnoye obrazovaniye at colleges and technikums: skilled-worker ' +
        'programmes (about 2 years 10 months) and mid-level specialist programmes (2 years 10 ' +
        'months to 3 years 10 months after grade 9, one year less after grade 11). Since 2022 the ' +
        'federal "Professionalitet" project has redesigned many programmes with employers.' },
  ],
  stations: [
    { id: 'ru-ds', line: 'ds', name: 'Detsky sad', local: 'Детский сад (ясли 1½–3, сад 3–7)', ages: [1.5, 7], isced: 0,
      desc: 'Municipal kindergartens take children from about 1½–2 (nursery groups) to school ' +
        'entry. Places are allocated through municipal waiting lists (often via Gosuslugi); ' +
        'shortages for under-3s remain in some regions. The last year often has a ' +
        'school-preparation group (podgotovitelnaya gruppa).',
      cost: { amount: 30000, note: 'About; regions set the care fee (e.g. Penza 132 ₽/day from 2025). Partial compensation and exemptions for some families.', src: 6 } },
    { id: 'ru-p1', line: 'nach', name: 'Grade 1', local: '1 класс', ages: [7, 8], isced: 1,
      desc: 'School entry on 1 September ("Day of Knowledge"). No marks are given in grade 1. ' +
        'Families apply through Gosuslugi from 1 April, with priority for the local catchment school.',
      events: ['Applications open 1 April', 'Day of Knowledge (1 September)'],
      cost: { amount: 0, note: 'Free in state and municipal schools.' } },
    { id: 'ru-p4', line: 'nach', name: 'Grades 2–4', local: '2–4 классы', ages: [8, 11], isced: 1,
      desc: 'Marks on a 5-point scale (5 = excellent, 2 = fail) start in grade 2. Grade 4 includes ' +
        'the course "Foundations of religious cultures and secular ethics" and the All-Russian ' +
        'Verification Works (VPR) tests in spring.',
      events: ['VPR tests (spring, grade 4)'],
      cost: { amount: 0, note: 'Free in state and municipal schools.' } },
    { id: 'ru-g58', line: 'osn', name: 'Grades 5–8', local: '5–8 классы', ages: [11, 15], isced: 2,
      desc: 'Subject teaching begins; a second foreign language is often added. VPR national tests ' +
        'are held each spring. Some schools have specialised classes (maths, languages) from ' +
        'grade 5 or later, admitting by test.',
      events: ['VPR tests (spring)'],
      cost: { amount: 0, note: 'Free in state and municipal schools.' } },
    { id: 'ru-g9', line: 'osn', name: 'Grade 9', local: '9 класс', ages: [15, 16], isced: 2,
      desc: 'Pupils must pass an oral Russian interview (February) to be admitted to the OGE, then ' +
        'sit 4 OGE exams: Russian and maths plus 2 electives (main period late May–June; in 2026 ' +
        '2–19 June with resits into July). The result decides entry to grade 10 (often with ' +
        'profile-class thresholds) or an SPO college, which ranks applicants by certificate average.',
      exam: 'OGE → Attestat ob osnovnom obshchem obrazovanii',
      events: ['Oral Russian interview, itogovoye sobesedovaniye (February)', 'OGE exams (late May–June)', 'College applications (June–August)'],
      cost: { amount: 0, note: 'Free; OGE exams carry no fee.' } },
    { id: 'ru-g10', line: 'sred', name: 'Grade 10', local: '10 класс', ages: [16, 17], isced: 3,
      desc: 'Profile streams with 2–3 subjects at an advanced level. Entry depends on the school ' +
        'and OGE results.',
      cost: { amount: 0, note: 'Free in state and municipal schools.' } },
    { id: 'ru-g11', line: 'sred', name: 'Grade 11', local: '11 класс', ages: [17, 18], isced: 3,
      desc: 'A final essay (itogovoye sochineniye) in early December is the gateway to the EGE. ' +
        'Russian is compulsory plus maths (basic or profile level); further subjects are chosen ' +
        'for the intended university programmes. The 2026 main EGE period ran 1 June–9 July. ' +
        'Applicants then apply to up to 5 universities and 5 programmes each, with budget-place ' +
        'rankings published in July–August.',
      exam: 'EGE → Attestat o srednem obshchem obrazovanii',
      events: ['Final essay (early December)', 'EGE main period (June)', 'University applications (20 June–July)'],
      cost: { amount: 0, note: 'Free; EGE exams are free for school leavers.' } },
    { id: 'ru-ba', line: 'uni', name: 'Bakalavriat', local: 'Бакалавриат (4 года)', ages: [18, 22], isced: 6,
      desc: '4 years (240 credits). Admission by the sum of 3 EGE scores (plus extra points for ' +
        'achievements, olympiad winners enter without exams). Budget-place quotas (KCP) are set by ' +
        'the government; others pay. Under the pilot reform, bachelor programmes become "basic ' +
        'higher education"; nationwide transition is planned from about 2027.',
      exam: 'Diploma bakalavra',
      cost: { amount: 0, private: 224662, note: 'Budget places free; paid places averaged about 224,700 ₽/yr in 2025 (Moscow top universities 400,000+).', src: 4 } },
    { id: 'ru-ma', line: 'uni', name: 'Magistratura', local: 'Магистратура (2 года)', ages: [22, 24], isced: 7,
      desc: '2 years, by university entrance exam. Will become part of "specialised higher ' +
        'education" (1–3 years, together with ordinatura and assistantura) under the reform.',
      exam: 'Diploma magistra',
      cost: { amount: 0, note: 'Budget places free; paid places priced by each university, similar to bachelor fees.', src: 4 } },
    { id: 'ru-asp', line: 'uni', name: 'Aspirantura', local: 'Аспирантура (3–4 года)', ages: [24, 28], isced: 8,
      desc: 'Since 2022 aspirantura is a research (not "educational") programme of 3–4 years, ' +
        'ending in the defence of a Candidate of Science (kandidat nauk) dissertation. The higher ' +
        'Doctor of Science (doktor nauk) degree comes later in a career. Budget aspirants get a stipend.',
      exam: 'Kandidat nauk',
      cost: { amount: 0, note: 'Budget places free with a stipend; paid places exist.' } },
    { id: 'ru-spec', line: 'spec', name: 'Specialitet', local: 'Специалитет (5–6 лет)', ages: [18, 23.5], isced: 7,
      desc: '5–6-year professional degree (e.g. engineer, physician, pharmacist). Physicians then ' +
        'do 2 years of ordinatura (residency) for most specialties. Graduates can enter aspirantura ' +
        'directly.',
      exam: 'Diploma spetsialista',
      cost: { amount: 0, private: 224662, note: 'Budget places free; paid places average about 224,700 ₽/yr (2025), much more for medicine in big cities.', src: 4 } },
    { id: 'ru-spo1', line: 'spo', name: 'College 1', local: 'СПО, 1 курс', ages: [16, 17], isced: 3,
      desc: 'Students who join after grade 9 study the grade 10–11 general curriculum alongside ' +
        'their trade or specialty in the first year, completing secondary general education.',
      share: { pct: 62, of: 'of grade 9 leavers entered SPO colleges in 2025 (about)', src: 5 },
      cost: { amount: 0, note: 'Budget places free; colleges also sell paid places.' } },
    { id: 'ru-spo2', line: 'spo', name: 'College 2–4', local: 'СПО, 2–4 курс', ages: [17, 20], isced: 5,
      desc: 'Mid-level specialist programmes (technician, nurse, teacher, IT, etc.) with long work ' +
        'placements, ending in a demonstration exam and a final qualifying project. About 3.9 ' +
        'million students were in SPO in 2025. Graduates may enter university on internal exams ' +
        'instead of the EGE, often into shortened programmes in the same field.',
      exam: 'Diploma SPO (demonstration exam)',
      cost: { amount: 0, note: 'Budget places free; colleges also sell paid places.' } },
  ],
  transfers: [
    { from: 'ru-g9', to: 'ru-g10', label: 'OGE → grade 10', desc: 'Pupils who pass the OGE (and meet any profile-class thresholds) stay on at school.' },
    { from: 'ru-g11', to: 'ru-spo2', label: 'Grade 11 → college', desc: 'School leavers with the EGE certificate can enter SPO for a shorter programme (about one year less).' },
    { from: 'ru-spo2', to: 'ru-ba', label: 'College → university', desc: 'SPO graduates take university-set entrance exams instead of the EGE and can join related programmes, sometimes with credit for prior study.' },
    { from: 'ru-spec', to: 'ru-asp', label: 'Specialist → aspirantura', desc: 'A specialist diploma gives direct access to aspirantura, like a master.' },
    { from: 'ru-ba', to: 'ru-spec', label: 'Bachelor ↔ specialist', desc: 'Students can move between related bachelor and specialist programmes, usually in the first years.' },
  ],
  sources: [
    { title: 'Federal Law No. 273-FZ "On Education in the Russian Federation" (ConsultantPlus)', url: 'https://www.consultant.ru/document/cons_doc_LAW_140174/' },
    { title: 'Kommersant — Putin extends higher-education pilot to 2029/30, 11 more universities (22 Jan 2026)', url: 'https://www.kommersant.ru/doc/8364985' },
    { title: 'Parlamentskaya gazeta — New higher-education system to start in 2027', url: 'https://www.pnp.ru/social/bez-bakalavrov-novaya-sistema-vysshego-obrazovaniya-zarabotaet-v-2027-godu.html' },
    { title: 'Expert — EGE and OGE 2026 schedule approved (Minprosveshcheniya / Rosobrnadzor orders of 7 Nov 2025)', url: 'https://expert.ru/news/v-rossii-utverdili-raspisanie-ege-i-oge-na-2026-god/' },
    { title: 'hh.ru Career — Cost of study at Russian universities 2025 (Tabiturient data)', url: 'https://career.hh.ru/article/stoimost-obucheniya-v-rossijskih-vuzah' },
    { title: 'Fontanka — More than 62% of grade 9 leavers go to colleges (Kravtsov report, 26 Mar 2026)', url: 'https://www.fontanka.ru/2026/03/26/76332152/' },
    { title: 'Penza city administration — Kindergarten parental fee from 2025', url: 'https://pnz.ru/family/do-117-s-2025-goda-uvelichivaetsya-stoimost-pitaniya-v-shkolah-i-plata-za-soderzhanie-v-detsadah/' },
    { title: 'Vedomosti — Universities to move to the new system (29 Jan 2026)', url: 'https://www.vedomosti.ru/society/news/2026/01/29/1172485-gd-vuzi-rf-pereidut' },
  ],
};
