// Japan — school system as a metro map.
// The school year runs April to March. Ages are typical ages at the start of each stage.
export default {
  id: 'jp',
  iso3: 'JPN',
  region: 'Asia',
  currency: 'JPY',
  name: 'Japan',
  localName: '日本 Nihon',
  flag: '🇯🇵',
  summary:
    'A single-track "6-3-3-4" system: six years of elementary school and three years of junior high ' +
    'school are compulsory and unstreamed. Pupils are first sorted at 15, when they take entrance ' +
    'exams for high school (kōkō): about three-quarters go to general-course high schools, the rest to ' +
    'specialist (vocational) or integrated courses, or to a 5-year college of technology (kōsen). After ' +
    'high school about six in ten go on to university or junior college and many others to vocational ' +
    'colleges (senmon gakkō). University entry is by the national Common Test in January plus each ' +
    'university\'s own exam, or by recommendation; most undergraduates attend private universities.',
  ageNote:
    'Children start elementary school in the April after their 6th birthday: a school year group is ' +
    'everyone born from 2 April to 1 April of the next year. Repeating or skipping a year is almost ' +
    'unknown in compulsory school. Since 2016 some areas run 9-year "compulsory education schools" ' +
    '(gimu kyōiku gakkō) that combine elementary and junior high, and some run 6-year secondary ' +
    'schools (chūtō kyōiku gakkō) that combine junior and senior high.',
  compulsory: {
    from: 6,
    to: 15,
    label: 'Gimu kyōiku 6–15',
    note:
      'Nine years of compulsory education (義務教育): six years of elementary and three of junior high ' +
      'school. Tuition and textbooks are free in public schools. High school is not compulsory, but ' +
      'about 99% of pupils go on to it (including correspondence courses).',
  },
  costNote:
    'Public school costs are for 2025/26. Pre-school for ages 3–5 has been free since October 2019, and ' +
    'from April 2026 high-school tuition support covers public tuition and private tuition up to ' +
    '¥457,200 with no income limit. Universities charge tuition; about three-quarters of undergraduates ' +
    'are at private universities. Private tutoring (juku) is common but not counted here.',
  lines: [
    { id: 'early', name: 'Hoikuen / Yōchien', color: '#7C8A93', lane: 0,
      desc: 'Day nurseries (hoikuen, 保育園) take children from a few months old to 6 when parents work; ' +
        'kindergartens (yōchien, 幼稚園) take ages 3–6; "certified centres for early childhood" ' +
        '(nintei kodomo-en) combine both. Not compulsory, but nearly all 4- and 5-year-olds attend one.' },
    { id: 'elem', name: 'Shōgakkō', color: '#D2322D', lane: 0, from: 'jp-yochien',
      desc: 'Elementary school (小学校), grades 1–6, and junior high school (中学校), grades 7–9 in ' +
        'effect. Both are compulsory, unstreamed and mostly public neighbourhood schools; a few percent ' +
        'of pupils attend selective private or national junior highs that set entrance exams at age 12.' },
    { id: 'futsu', name: 'General HS', color: '#1E66C9', lane: -1, from: 'jp-j3',
      desc: 'High school (高等学校, kōkō), general course (普通科): 3 years of academic study preparing ' +
        'for university. Schools are ranked by entrance-exam difficulty (hensachi). Includes the upper ' +
        'years of 6-year secondary schools.' },
    { id: 'univ', name: 'Daigaku', color: '#5B2C83', lane: -2, from: 'jp-hg3',
      desc: 'Universities (大学): 4-year bachelor (6 years for medicine, dentistry, veterinary science ' +
        'and pharmacy), then graduate school: master (2 years) and doctorate (3 years). There are ' +
        'national, local public and private universities; about three-quarters of students are at ' +
        'private ones.' },
    { id: 'tandai', name: 'Tanki daigaku', color: '#3D8FD1', lane: 0, from: 'jp-hg3',
      desc: 'Junior colleges (短期大学, tandai): 2-year associate degrees (tanki daigakushi), mainly in ' +
        'childcare, nutrition, nursing, business and humanities. Almost all are private and most ' +
        'students are women. Graduates can transfer into year 3 of a university.' },
    { id: 'senmon', name: 'Specialist HS', color: '#DD7710', lane: 1, from: 'jp-j3',
      desc: 'High schools with specialist courses (専門学科): industry, commerce, agriculture, ' +
        'home economics, nursing, information, welfare, fisheries, and also science-maths, music or ' +
        'languages. Integrated-course (総合学科) high schools mix general and vocational subjects.' },
    { id: 'sgakko', name: 'Senmon gakkō', color: '#B8860B', lane: 1, from: 'jp-hs3',
      desc: 'Vocational colleges (専門学校, specialised training colleges): 1–4 year programmes in ' +
        'fields such as IT, healthcare, design, cooking, beauty and tourism, leading to the title ' +
        'senmonshi (2+ years) or kōdo senmonshi (4 years). Open to graduates of any high-school course; ' +
        'almost all are private.' },
    { id: 'kosen', name: 'Kōsen', color: '#2C9546', lane: 2, from: 'jp-j3',
      desc: 'Colleges of technology (高等専門学校, kōsen): a 5-year course from age 15 combining upper ' +
        'secondary and short-cycle higher education in engineering, merchant shipping and similar ' +
        'fields. There are about 58 colleges, most of them national. Graduates can join a 2-year ' +
        'advanced course or transfer into year 3 of a university.' },
  ],
  stations: [
    // Early years
    { id: 'jp-hoiku', line: 'early', name: 'Hoikuen', local: '保育園 (0–2歳児)', ages: [0, 3], isced: 0,
      desc: 'Licensed day nurseries for children of working parents, run or subsidised by ' +
        'municipalities. Places for 0–2-year-olds can be hard to get in big cities (taiki jidō, ' +
        '"waiting-list children"). Fees for under-3s depend on household income.',
      cost: { amount: 324000, note: 'Income-based. Example: Utsunomiya, middle-income tier (¥27,000/month). Free for low-income homes; Tokyo made first children free from September 2025.', src: 6 } },
    { id: 'jp-yochien', line: 'early', name: 'Yōchien', local: '幼稚園 / 保育園 / こども園 (3–5歳)', ages: [3, 6], isced: 0,
      desc: 'Kindergarten or nursery from age 3 until school entry. Under the free early-childhood ' +
        'education policy (幼児教育・保育の無償化, October 2019), fees for ages 3–5 are free at licensed ' +
        'nurseries and certified centres, and kindergarten fees are covered up to ¥25,700 a month. ' +
        'Meals, transport and extended hours are still charged.',
      events: ['Kindergarten intake usually in April', 'School health check in autumn before entry (shūgakuji kenshin)'],
      cost: { amount: 0, note: 'Free for ages 3–5 since October 2019 (kindergartens up to ¥25,700/month). Meals and extras charged.', src: 5 } },
    // Elementary school
    { id: 'jp-e1', line: 'elem', name: 'Grades 1–3', local: '小学1〜3年', ages: [6, 9], isced: 1,
      desc: 'School starts in April (nyūgakushiki ceremony). Classes of up to 35 (being phased in by ' +
        '2025/26). Children walk to school in groups and clean their classrooms; a cooked school lunch ' +
        '(kyūshoku) is served. Since April 2026 the state pays a large share of lunch costs in public ' +
        'elementary schools.',
      events: ['Entrance ceremony in early April'],
      cost: { amount: 0, note: 'Public schools: free tuition and textbooks. Lunch fees largely covered since April 2026; materials extra.', src: 7, private: 505954 } },
    { id: 'jp-e4', line: 'elem', name: 'Grades 4–5', local: '小学4〜5年', ages: [9, 11], isced: 1,
      desc: 'Upper elementary. English becomes a graded subject from grade 5 (since 2020). Families ' +
        'aiming for a private junior high often start cram school (juku) around grade 4.',
      cost: { amount: 0, note: 'Free in public schools. Juku (cram school) is private and not counted.' } },
    { id: 'jp-e6', line: 'elem', name: 'Grade 6', local: '小学6年', ages: [11, 12], isced: 1,
      desc: 'Final elementary year. All pupils take the national academic achievement test ' +
        '(全国学力・学習状況調査) in April. A minority (much more common in Tokyo) sit entrance exams ' +
        'for private or national junior highs in January–February.',
      events: ['National achievement test (April)', 'Private junior-high entrance exams (Jan–Feb, mainly cities)'],
      cost: { amount: 0, note: 'Free in public schools.' } },
    // Junior high school
    { id: 'jp-j1', line: 'elem', name: 'JHS 1', local: '中学1年', ages: [12, 13], isced: 2,
      desc: 'Junior high school (chūgakkō). Subject teachers, uniforms, and club activities (bukatsu) ' +
        'that take up much of the afternoon and weekends.',
      cost: { amount: 0, note: 'Free tuition and textbooks in public schools; private junior highs charge tuition.', src: 3, private: 453073 } },
    { id: 'jp-j2', line: 'elem', name: 'JHS 2', local: '中学2年', ages: [13, 14], isced: 2,
      desc: 'Includes a short work-experience programme in many areas. Grades in years 2 and 3 feed ' +
        'the school report (naishinsho) used for high-school admission.',
      cost: { amount: 0, note: 'Free in public schools.' } },
    { id: 'jp-j3', line: 'elem', name: 'JHS 3', local: '中学3年', ages: [14, 15], isced: 2,
      desc: 'The high-school entrance year. Pupils choose schools with their teachers based on mock ' +
        'tests and the school report. Admission to public high schools combines the school report ' +
        'with a prefectural entrance exam; private schools hold their own exams or admit by ' +
        'recommendation. About 99% go on to some form of upper secondary education.',
      exam: 'High-school entrance exam (kōkō nyūshi)',
      events: ['National achievement test (April)', 'Recommendation-based admissions (Jan–Feb)', 'Private high-school exams (late Jan–Feb)', 'Public high-school exams (Feb–March, by prefecture)', 'Graduation in March'],
      cost: { amount: 0, note: 'Free in public schools. Exam fees for high-school applications are small and extra.' } },
    // General high school
    { id: 'jp-hg1', line: 'futsu', name: 'Kōkō 1', local: '高校1年 (普通科)', ages: [15, 16], isced: 3,
      desc: 'First year of a general-course high school, with a broad common curriculum. Under the ' +
        '2022 curriculum all students take "Information I" and inquiry-based study.',
      share: { pct: 74.1, of: 'of full- and part-time high-school students are in general courses (2025)', src: 1 },
      cost: { amount: 0, note: 'Public tuition (¥118,800) covered by state support, no income limit since 2025/26.', src: 4, private: 457331 } },
    { id: 'jp-hg2', line: 'futsu', name: 'Kōkō 2', local: '高校2年', ages: [16, 17], isced: 3,
      desc: 'Most students split into a humanities track (bunkei, 文系) or a science track (rikei, 理系), ' +
        'which largely decides which university departments they can apply to.',
      events: ['Humanities / science track choice (bunkei / rikei)'],
      cost: { amount: 0, note: 'Public tuition covered. Private tuition support up to ¥457,200 from April 2026; facility fees extra.', src: 4, private: 457331 } },
    { id: 'jp-hg3', line: 'futsu', name: 'Kōkō 3', local: '高校3年', ages: [17, 18], isced: 3,
      desc: 'Final year, dominated by university admissions. Just over half of new university entrants ' +
        '(53.6% in 2025: 34.1% school recommendation, 19.5% comprehensive selection) are admitted in autumn ' +
        'and early winter without the general exam; ' +
        'the rest take the Common Test in mid-January and the universities\' own exams from late ' +
        'February. Graduates may also go to a junior college, a senmon gakkō, or straight to work.',
      exam: 'High-school diploma; University Entrance Common Test (共通テスト)',
      events: ['Comprehensive / recommendation admissions (Sept–Dec)', 'Common Test: 16–17 Jan 2027', 'National university exams from 25 Feb', 'Graduation in early March'],
      cost: { amount: 0, note: 'Public tuition covered by support. Common Test fee (about ¥18,000) and university application fees extra.', src: 4, private: 457331 } },
    // University
    { id: 'jp-ba', line: 'univ', name: 'Bachelor', local: '学士課程 (学部)', ages: [18, 22], isced: 6,
      desc: 'Four-year bachelor (gakushi); six years for medicine and some other fields. Students ' +
        'usually choose their faculty on entry. Job hunting (shūkatsu) for graduate-employment ' +
        'starts in year 3 and most students have a job offer before graduating in March. State ' +
        'support (修学支援新制度, since 2020) waives fees and pays grants for lower-income students, and ' +
        'since 2025 tuition is free up to a cap for families with three or more dependent children.',
      exam: 'Bachelor\'s degree (学士)',
      events: ['Entrance ceremony in April', 'Job hunting from year 3', 'Graduation in March'],
      cost: { amount: 535800, note: 'National university standard tuition (some charge up to ¥642,960), plus ¥282,000 entrance fee once. Private: average tuition 2025.', src: 2, private: 968069 } },
    { id: 'jp-ma', line: 'univ', name: 'Master', local: '修士課程', ages: [22, 24], isced: 7,
      desc: 'Two-year master (shūshi). Common in engineering and science, where many graduates go ' +
        'straight from master to industry jobs; less common in humanities and social sciences. ' +
        'Professional graduate schools include law schools and teaching schools.',
      exam: 'Master\'s degree (修士)',
      cost: { amount: 535800, note: 'National university standard tuition; private graduate schools charge more.', src: 2 } },
    { id: 'jp-phd', line: 'univ', name: 'Doctorate', local: '博士課程', ages: [24, 27], isced: 8,
      desc: 'Three-year doctoral course (hakushi); four years after a 6-year medical degree. Many ' +
        'students now receive stipends under the JST SPRING fellowship programme.',
      exam: 'Doctorate (博士)',
      cost: { amount: 535800, note: 'National university standard tuition; many doctoral students get fee waivers or stipends.', src: 2 } },
    // Junior college
    { id: 'jp-tandai', line: 'tandai', name: 'Tandai', local: '短期大学', ages: [18, 20], isced: 5,
      desc: 'Two-year junior college leading to an associate degree. Common for nursery teachers and ' +
        'nutritionists. Graduates can enter year 3 of a university or a 1–2 year advanced course (senkōka).',
      exam: 'Associate degree (短期大学士)',
      cost: { amount: 734328, note: 'Average tuition at private junior colleges, 2025 (almost all are private); entrance fee about ¥236,000 extra.', src: 2 } },
    // Specialist high school
    { id: 'jp-hs1', line: 'senmon', name: 'Kōkō 1', local: '高校1年 (専門学科)', ages: [15, 16], isced: 3,
      desc: 'First year of a specialist course such as industry (kōgyō), commerce (shōgyō) or ' +
        'agriculture. Integrated-course students choose from a wide menu of general and vocational subjects.',
      share: { pct: 20.5, of: 'of full- and part-time high-school students are in specialist courses (plus 5.4% integrated), 2025', src: 1 },
      cost: { amount: 0, note: 'Public tuition covered by state support.', src: 4 } },
    { id: 'jp-hs2', line: 'senmon', name: 'Kōkō 2', local: '高校2年', ages: [16, 17], isced: 3,
      desc: 'Workshops, labs and internships; many students take national licences and certificates ' +
        '(e.g. electrician, bookkeeping, IT passport).',
      cost: { amount: 0, note: 'Public tuition covered by state support.', src: 4 } },
    { id: 'jp-hs3', line: 'senmon', name: 'Kōkō 3', local: '高校3年', ages: [17, 18], isced: 3,
      desc: 'Final year. Many graduates take jobs through school-mediated recruitment (job offers open ' +
        'in September); others go to senmon gakkō, junior college or university, often by recommendation.',
      exam: 'High-school diploma',
      events: ['School-mediated job recruitment from September'],
      cost: { amount: 0, note: 'Public tuition covered by state support.', src: 4 } },
    // Senmon gakko
    { id: 'jp-sg', line: 'sgakko', name: 'Senmon', local: '専門学校 (専修学校専門課程)', ages: [18, 20], isced: 5,
      desc: 'Vocational college, usually 2 years. About one in seven high-school leavers goes to a ' +
        'senmon gakkō. Courses lead to the title senmonshi, or kōdo senmonshi after 4 years, which ' +
        'gives access to graduate school.',
      exam: 'Senmonshi (専門士)',
      cost: { amount: 0, note: 'Almost all are private, with fees often ¥1 million+ a year; low-income students get fee waivers. No public average found.' } },
    // Kosen
    { id: 'jp-kosen1', line: 'kosen', name: 'Kōsen 1–3', local: '高専 1〜3年', ages: [15, 18], isced: 3,
      desc: 'First three years of a college of technology, at upper-secondary level: general subjects ' +
        'plus engineering. Admission by entrance exam at 15. Students live in dormitories at many colleges.',
      cost: { amount: 0, note: 'From April 2026 high-school support covers the full national kōsen tuition (¥234,600) in years 1–3, no income limit. Entrance fee ¥84,600.', src: 11 } },
    { id: 'jp-kosen4', line: 'kosen', name: 'Kōsen 4–5', local: '高専 4〜5年', ages: [18, 20], isced: 5,
      desc: 'Final two years at short-cycle tertiary level, with a graduation research project. About ' +
        'half of graduates go straight to work in industry; many others continue.',
      exam: 'Associate degree (準学士)',
      cost: { amount: 234600, note: 'National kōsen tuition per year.', src: 8 } },
    { id: 'jp-kosen6', line: 'kosen', name: 'Advanced', local: '専攻科', ages: [20, 22], isced: 6,
      desc: 'Optional 2-year advanced course (senkōka). Graduates can obtain a bachelor\'s degree ' +
        'through the National Institution for Academic Degrees and Quality Enhancement (NIAD-QE).',
      exam: 'Bachelor\'s degree (via NIAD-QE)',
      cost: { amount: 234600, note: 'National kōsen tuition per year.', src: 8 } },
  ],
  transfers: [
    { from: 'jp-hs3', to: 'jp-ba', label: 'Specialist HS → university',
      desc: 'Specialist-course graduates can enter university, mostly through recommendation or comprehensive selection.' },
    { from: 'jp-hg3', to: 'jp-sg', label: 'General HS → senmon gakkō',
      desc: 'Many general-course graduates also choose a vocational college.' },
    { from: 'jp-kosen4', to: 'jp-ba', label: 'Kōsen → university year 3',
      desc: 'Kōsen graduates can transfer into year 3 of a university engineering faculty (e.g. the technological universities in Nagaoka and Toyohashi).' },
    { from: 'jp-tandai', to: 'jp-ba', label: 'Junior college → university',
      desc: 'Junior-college graduates can transfer into year 3 of a 4-year university.' },
    { from: 'jp-sg', to: 'jp-ba', label: 'Senmon gakkō → university',
      desc: 'Graduates of 2-year senmon courses can transfer into some universities; 4-year kōdo senmonshi holders can apply to graduate school.' },
    { from: 'jp-kosen6', to: 'jp-ma', label: 'Advanced course → master',
      desc: 'Advanced-course graduates with a NIAD-QE bachelor can enter graduate school.' },
  ],
  sources: [
    { title: 'MEXT — Overview of the education system (English)', url: 'https://www.mext.go.jp/en/policy/education/overview/index.htm' },
    { title: 'MEXT — 高等学校教育の現状について (state of high-school education, Aug 2026; School Basic Survey 2025)', url: 'https://www.mext.go.jp/content/20260813-mxt_koukou01-000051477.pdf' },
    { title: 'MEXT — 私立大学等の令和7年度入学者に係る学生納付金等調査結果 (university fees 2025, incl. national standard)', url: 'https://www.mext.go.jp/a_menu/koutou/shinkou/07021403/1412031_00006.htm' },
    { title: 'MEXT — 令和6年度私立高等学校等初年度授業料等の調査結果 (private school fees 2024)', url: 'https://www.mext.go.jp/a_menu/koutou/shinkou/1412179_00006.htm' },
    { title: 'Government of Japan (Gov-Online) — 高校授業料の支援拡充 (high-school tuition support from April 2026)', url: 'https://www.gov-online.go.jp/tokusyu/mushouka_r8/index_html.html' },
    { title: 'Hiroshima Prefecture — 幼児教育・保育の無償化 (free early childhood education and care)', url: 'https://www.pref.hiroshima.lg.jp/soshiki/244/musyoka.html' },
    { title: 'Utsunomiya City — 3号認定 保育料基準額表 (nursery fees for ages 0–2)', url: 'https://www.city.utsunomiya.lg.jp/_res/projects/default_project/_page_/001/003/887/3gouhoikuryou.pdf' },
    { title: 'MEXT — 学校給食費の抜本的な負担軽減 (school lunch fee support from April 2026)', url: 'https://www.mext.go.jp/a_menu/sports/syokuiku/kyu-lighten.html' },
    { title: 'Institute of National Colleges of Technology (KOSEN) — admissions guide 2025 (tuition)', url: 'https://www.kosen-k.go.jp/wp/wp-content/uploads/2024/06/nyugakuannai2025.pdf' },
    { title: 'University of the Ryukyus — 2027 entrance exam schedule (Common Test 16–17 Jan 2027)', url: 'https://www.u-ryukyu.ac.jp/wp-content/uploads/2026/06/R9schedule-1.pdf' },
    { title: 'Meguro City (Tokyo) — 0–2歳 第1子保育料無償化 (Sept 2025)', url: 'https://www.city.meguro.tokyo.jp/hoiku/kosodatekyouiku/hoikuennado/rinnku_daiissi.html' },
    { title: 'National Institute of Technology, Asahikawa College — 高専1〜3年生の授業料実質無償化 (FY2026 support)', url: 'https://www.asahikawa-nct.ac.jp/guide/pdf/R8_tsuikamusho.pdf' },
    { title: 'MEXT — 令和7年度国公私立大学・短期大学入学者選抜実施状況の概要 (admissions by route, Nov 2025)', url: 'https://www.mext.go.jp/b_menu/houdou/2020/1414952_00009.html' },
  ],
};
