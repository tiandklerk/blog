// Saudi Arabia — a centralised system: the Ministry of Education runs kindergartens, schools and
// universities; the Technical and Vocational Training Corporation (TVTC) runs vocational institutes
// and technical colleges. Boys and girls are mostly taught separately after the early primary grades.
export default {
  id: 'sa',
  iso3: 'SAU',
  region: 'Middle East',
  currency: 'SAR',
  name: 'Saudi Arabia',
  localName: 'المملكة العربية السعودية',
  flag: '🇸🇦',
  summary:
    'Kindergarten (ages 3–6), then a 6-3-3 ladder: six years of primary school, three years of ' +
    'intermediate school and three years of secondary school. Since 2022 secondary school uses the ' +
    'Masarat (tracks) system: a common first year, then two years in one of five tracks: general, ' +
    'computer science and engineering, health and life, business administration, or Sharia. University ' +
    'admission combines the secondary GPA with two national tests run by the Education and Training ' +
    'Evaluation Commission (Etec): the General Aptitude Test (Qudurat) and the Achievement Test (Tahsili). ' +
    'Vocational training is mostly post-secondary, in TVTC technical colleges. Public education is free at ' +
    'every level, and Vision 2030 reforms focus on early childhood, curricula and skills for the labour market.',
  ageNote:
    'Children enter grade 1 at 6 (the age is checked at the start of the school year, with some ' +
    'flexibility for children turning 6 shortly afterwards). The school year starts in late August. ' +
    'Since 2021 the first primary grades in many areas are taught in "early childhood" schools by ' +
    'female teachers for both boys and girls; later grades are single-sex.',
  compulsory: {
    from: 6,
    to: 15,
    label: 'Compulsory 6–15',
    note:
      'Nine years of schooling (primary and intermediate) are compulsory, from about 6 to 15. Twelve ' +
      'years of school are free in public schools (UNESCO UIS).',
  },
  costNote:
    'Public kindergartens, schools, universities and TVTC colleges charge no tuition, and university and ' +
    'TVTC students receive a monthly allowance. Private schools enrol about 12–16% of primary and secondary ' +
    'pupils and 34% of pre-primary children; private universities about 6% of students (UIS 2024).',
  lines: [
    { id: 'kg', name: 'Kindergarten', color: '#7C8A93', lane: 0,
      desc: 'Rawdat al-atfal (kindergarten) for ages 3–6, public or private. Not compulsory. Expanding ' +
        'early-childhood places is a Vision 2030 priority; participation is still lower than in OECD ' +
        'countries (net enrolment one year before primary about 27%, UIS 2024).' },
    { id: 'gen', name: 'Primary / intermediate', color: '#D2322D', lane: 0, from: 'sa-kg3',
      desc: 'Primary school (al-ibtida\'iyya, grades 1–6) and intermediate school (al-mutawassita, ' +
        'grades 7–9). English is taught from grade 1 since 2021. National NAFS assessments in grades 3, 6 and 9.' },
    { id: 'sec', name: 'Secondary (Masarat)', color: '#7A3E9D', lane: -1, from: 'sa-g9',
      desc: 'Secondary school (al-thanawiyya), 3 years under the Masarat system: a common first year, ' +
        'then a track in years 2–3 (general; computer science and engineering; health and life; business ' +
        'administration; Sharia). A credit-hour (courses) system is also used in some schools.' },
    { id: 'uni', name: 'University', color: '#4B2470', lane: -1, from: 'sa-s23',
      desc: 'About 30 public universities plus private universities and colleges. Bachelor degrees take 4 ' +
        'years (5–6 in engineering, pharmacy and medicine), often starting with a common first year ' +
        '(preparatory year). Universities also offer 2-year diplomas. Admission uses a weighted score of ' +
        'secondary GPA, Qudurat and Tahsili; weights vary by university and programme.' },
    { id: 'tvtc', name: 'TVTC', color: '#DD7710', lane: 1, from: 'sa-g9',
      desc: 'Technical and Vocational Training Corporation: secondary industrial institutes for ' +
        'intermediate-school graduates, and technical colleges (including the "Colleges of Excellence" ' +
        'run with international partners) for secondary graduates. Trainees receive a monthly allowance.' },
  ],
  stations: [
    // Kindergarten
    { id: 'sa-kg1', line: 'kg', name: 'KG 1–2', local: 'روضة الأطفال (Rawdah)', ages: [3, 5], isced: 0,
      desc: 'Play-based learning following the national early-learning standards.',
      cost: { amount: 0, note: 'Free at public kindergartens. About 34% of pre-primary children attend private kindergartens (UIS 2024).', src: 0 } },
    { id: 'sa-kg3', line: 'kg', name: 'KG 3', ages: [5, 6], isced: 0,
      desc: 'Final kindergarten year, preparing for grade 1.',
      cost: { amount: 0, note: 'Free at public kindergartens.' } },
    // Primary / intermediate
    { id: 'sa-g13', line: 'gen', name: 'Grades 1–3', local: 'الصفوف الأولية', ages: [6, 9], isced: 1,
      desc: 'Early primary grades, often in early-childhood schools with female teachers. Reading, maths, ' +
        'Qur\'an and Islamic studies, Arabic, English. NAFS national assessment in grade 3.',
      events: ['Registration through the Noor system (spring)', 'NAFS assessment: grade 3'],
      cost: { amount: 0, note: 'Free at public schools. About 16% of primary pupils attend private schools (UIS 2024).', src: 0 } },
    { id: 'sa-g46', line: 'gen', name: 'Grades 4–6', local: 'الصفوف العليا من المرحلة الابتدائية', ages: [9, 12], isced: 1,
      desc: 'Upper primary with subject teachers and single-sex schools. NAFS assessment in grade 6.',
      events: ['NAFS assessment: grade 6'],
      cost: { amount: 0, note: 'Free at public schools.' } },
    { id: 'sa-g78', line: 'gen', name: 'Grades 7–8', local: 'المرحلة المتوسطة (1st–2nd intermediate)', ages: [12, 14], isced: 2,
      desc: 'Intermediate school: Arabic, Islamic studies, maths, science, English, social studies, ' +
        'digital skills, physical education; critical thinking was added under recent curriculum reforms.',
      cost: { amount: 0, note: 'Free at public schools. About 12% of intermediate pupils attend private schools (UIS 2024).', src: 0 } },
    { id: 'sa-g9', line: 'gen', name: 'Grade 9', ages: [14, 15], isced: 2,
      desc: 'End of compulsory schooling and of intermediate school. NAFS assessment in grade 9. Pupils ' +
        'move on to secondary school or a TVTC institute.',
      exam: 'Intermediate school certificate', events: ['NAFS assessment: grade 9'],
      cost: { amount: 0, note: 'Free at public schools.' } },
    // Secondary
    { id: 'sa-s1', line: 'sec', name: 'Year 1', local: 'السنة الأولى المشتركة (common first year)', ages: [15, 16], isced: 3,
      desc: 'Common first year for all students, ending with the choice of a track.',
      events: ['Track choice (end of year)'],
      cost: { amount: 0, note: 'Free at public schools. About 16% of upper-secondary students attend private schools (UIS 2024).', src: 0 } },
    { id: 'sa-s23', line: 'sec', name: 'Years 2–3', local: 'المسارات (Masarat tracks)', ages: [16, 18], isced: 3,
      desc: 'Track years. In the final year students sit Qudurat (verbal and quantitative aptitude) and ' +
        'Tahsili (achievement in the track subjects, e.g. maths, physics, chemistry, biology). Both tests ' +
        'are offered in several sittings during the year, on paper and by computer.',
      exam: 'Secondary school certificate (al-thanawiyya)',
      events: ['Qudurat (General Aptitude Test): several sittings a year', 'Tahsili (Achievement Test): several sittings a year', 'University applications: June–July'],
      cost: { amount: 0, note: 'Free at public schools. Etec charges a fee for each Qudurat/Tahsili sitting.' } },
    // University
    { id: 'sa-ba', line: 'uni', name: 'Bachelor', local: 'البكالوريوس', ages: [18, 22], isced: 6,
      desc: 'Four-year bachelor, often with a preparatory or common first year (English, maths, study ' +
        'skills). Medicine takes 6 years plus an internship. Many students go abroad with government ' +
        'scholarships.',
      exam: 'Bachelor\'s degree',
      cost: { amount: 0, note: 'No tuition at public universities; students receive a monthly allowance (mukafa\'a).' } },
    { id: 'sa-ma', line: 'uni', name: 'Master', local: 'الماجستير', ages: [22, 24], isced: 7,
      desc: 'Master\'s degree, usually 2 years, by thesis or coursework.',
      exam: 'Master\'s degree',
      cost: { amount: 0, note: 'Free for regular students at public universities; some evening and executive programmes charge fees.' } },
    { id: 'sa-phd', line: 'uni', name: 'PhD', local: 'الدكتوراه', ages: [24, 28], isced: 8,
      desc: 'Doctorate, usually 3–4 years, by coursework and dissertation.',
      exam: 'Doctorate',
      cost: { amount: 0, note: 'Free for regular students at public universities.' } },
    // TVTC
    { id: 'sa-inst', line: 'tvtc', name: 'Institute', local: 'المعهد الصناعي الثانوي (secondary industrial institute)', ages: [15, 18], isced: 3,
      desc: 'Vocational upper secondary for intermediate-school graduates in trades such as electrical, ' +
        'mechanical and automotive work. A small route: about 1% of upper-secondary students are in ' +
        'vocational programmes.',
      exam: 'Secondary industrial diploma',
      share: { pct: 1.4, of: 'of upper-secondary students are in vocational programmes (2024)', src: 0 },
      cost: { amount: 0, note: 'Free; trainees receive a monthly allowance.' } },
    { id: 'sa-tc', line: 'tvtc', name: 'Diploma', local: 'الكلية التقنية — دبلوم (technical college diploma)', ages: [18, 20.5], isced: 5,
      desc: 'Technical college diploma of about 2–2.5 years, including on-the-job training, in fields such ' +
        'as electrical, mechanical, computer, business and tourism. Admission for secondary-school graduates.',
      exam: 'Technical diploma',
      cost: { amount: 0, note: 'Free; trainees receive a monthly allowance.' } },
    { id: 'sa-btech', line: 'tvtc', name: 'Applied BSc', local: 'بكالوريوس التقنية (Bachelor of Technology)', ages: [20.5, 22.5], isced: 6,
      desc: 'Applied bachelor for diploma holders at selected technical colleges.',
      exam: 'Bachelor of Technology',
      cost: { amount: 0, note: 'Free at TVTC colleges.' } },
  ],
  transfers: [
    { from: 'sa-s23', to: 'sa-tc', label: 'Secondary → technical college',
      desc: 'Most technical-college trainees are secondary-school graduates.' },
    { from: 'sa-inst', to: 'sa-tc', label: 'Institute → technical college',
      desc: 'Graduates of secondary industrial institutes can continue to a technical college diploma.' },
    { from: 'sa-tc', to: 'sa-ba', label: 'Diploma → university',
      desc: 'Diploma holders can apply to bridging (tajseer) bachelor programmes at some universities.' },
  ],
  sources: [
    { title: 'UNESCO UIS — Data browser (private enrolment, vocational share, compulsory and free education)', url: 'https://databrowser.uis.unesco.org/' },
    { title: 'Etec — National Assessments (NAFS), grades 3, 6 and 9', url: 'https://etec.gov.sa/en/programs/nafs' },
    { title: 'Etec — National Center for Assessment (Qiyas): Qudurat and Tahsili', url: 'https://etec.gov.sa/en/centers/qiyas' },
    { title: 'Ministry of Education, Saudi Arabia', url: 'https://www.moe.gov.sa/en/' },
    { title: 'Technical and Vocational Training Corporation (TVTC)', url: 'https://tvtc.gov.sa/' },
    { title: 'Vision 2030 — Human Capability Development Program', url: 'https://www.vision2030.gov.sa/en/explore/programs/human-capability-development-program' },
    { title: 'Wikipedia — Education in Saudi Arabia (structure; English from grade 1 since 2021)', url: 'https://en.wikipedia.org/wiki/Education_in_Saudi_Arabia' },
  ],
};
