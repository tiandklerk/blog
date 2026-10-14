// South Korea — school system as a metro map.
// The school year starts on 1 March (two semesters). Ages are typical ages at the start of each stage.
export default {
  id: 'kr',
  iso3: 'KOR',
  region: 'Asia',
  currency: 'KRW',
  name: 'South Korea',
  localName: '대한민국 Daehan Minguk',
  flag: '🇰🇷',
  summary:
    'A "6-3-3-4" system: six years of elementary school and three of middle school are compulsory and ' +
    'unstreamed. At 15 pupils choose a high school: most go to general high schools (assigned by lottery ' +
    'in most cities), a few to selective special-purpose schools (science, foreign-language, arts, ' +
    'sports), and about one in eight to specialised vocational or Meister high schools. Almost everyone ' +
    'finishes high school, and university entry is decided by school records (early "susi" admission) ' +
    'or the national College Scholastic Ability Test (CSAT, suneung) in November. Most higher education ' +
    'is private, and private after-school academies (hagwon) are a huge part of family spending.',
  ageNote:
    'Children enter elementary school on 1 March of the year after they turn 6, so a class is everyone ' +
    'born in one calendar year (January-born children are 7 at entry). Since June 2023 official ages ' +
    'use the international count; the traditional "Korean age" is no longer used in law. Men must do ' +
    'about 18–21 months of military service, usually during a break from university.',
  compulsory: {
    from: 6,
    to: 15,
    label: 'Uimu gyoyuk 6–15',
    note:
      'Nine years of free compulsory education (의무교육): elementary school (6 years) and middle ' +
      'school (3 years), under the Elementary and Secondary Education Act. High school is not ' +
      'compulsory but has been tuition-free since 2021 and nearly all pupils attend.',
  },
  costNote:
    'Costs are for 2026. Public schooling is free from age 0 childcare to the end of high school ' +
    '(except private autonomous high schools). Universities charge tuition and most students are at ' +
    'private institutions. Hagwon (private academies) and tutoring are not counted, though families ' +
    'spend heavily on them: ₩27.5 trillion in 2025, with three in four pupils taking part.',
  lines: [
    { id: 'early', name: 'Eorinijip / Yuchiwon', color: '#7C8A93', lane: 0,
      desc: 'Daycare centres (어린이집) from birth to 5, and kindergartens (유치원) from 3 to 5. All ' +
        '3–5-year-olds follow the common Nuri curriculum. Childcare and kindergarten are being merged ' +
        'under the Ministry of Education (유보통합, from 2024).' },
    { id: 'cho', name: 'Chodeunghakgyo', color: '#D2322D', lane: 0, from: 'kr-nuri',
      desc: 'Elementary school (초등학교), grades 1–6, then middle school (중학교), grades 1–3. Both ' +
        'are compulsory, free and mixed-ability; pupils go to a nearby school.' },
    { id: 'ilban', name: 'General HS', color: '#1E66C9', lane: -1, from: 'kr-m3',
      desc: 'General high schools (일반고), plus autonomous public and private high schools (자율고). ' +
        'In most cities places are allocated by lottery within a school district (the "equalisation" ' +
        'policy). Since 2025 all high schools run the credit-based system (고교학점제): students choose ' +
        'courses and need 192 credits to graduate.' },
    { id: 'univ', name: 'Daehak', color: '#5B2C83', lane: -2, from: 'kr-g3',
      desc: 'Four-year universities (대학교): bachelor (4 years; 6 for medicine)' +
        ', master (2 years) and doctorate (2–5 years). There are about 190 ' +
        'four-year universities and colleges; about four in five are private.' },
    { id: 'teukmok', name: 'Special HS', color: '#7A3E9D', lane: -3, from: 'kr-m3',
      desc: 'Special-purpose high schools (특수목적고): science high schools, foreign-language and ' +
        'international high schools, and arts and sports high schools. They select students in an ' +
        'early admissions round (전기) in autumn. Science-gifted schools (영재학교) are similar.' },
    { id: 'jigeop', name: 'Vocational HS', color: '#DD7710', lane: 1, from: 'kr-m3',
      desc: 'Specialised high schools (특성화고) teach vocational fields such as business, IT, cooking, ' +
        'design and engineering. Meister high schools (마이스터고, since 2010) train technicians with ' +
        'industry partners and have the highest job-placement rates. General high schools also run ' +
        'vocational classes for some final-year students.' },
    { id: 'jeonmun', name: 'Junior college', color: '#B8860B', lane: 1, from: 'kr-v3',
      desc: 'Junior colleges (전문대학): 2–3 year (some 4-year) practical programmes in fields such as ' +
        'nursing, health, early-childhood education, IT and hospitality, leading to an associate degree. ' +
        'Graduates can add a bachelor\'s through an advanced major course (전공심화과정). Korea ' +
        'Polytechnics run similar state technical colleges.' },
  ],
  stations: [
    // Early years
    { id: 'kr-daycare', line: 'early', name: 'Eorinijip', local: '어린이집 (0–2세)', ages: [0, 3], isced: 0,
      desc: 'Daycare for babies and toddlers, in national/public, private and home daycare centres. ' +
        'The government pays the standard childcare fee for every child, whatever the parents\' income, ' +
        'and parents caring at home receive a parental allowance instead.',
      cost: { amount: 0, note: 'Standard daycare fee paid by the state for all children; centres may charge small extras.', src: 5 } },
    { id: 'kr-nuri', line: 'early', name: 'Yuchiwon', local: '유치원 / 어린이집 누리과정 (3–5세)', ages: [3, 6], isced: 0,
      desc: 'Kindergarten or daycare following the Nuri curriculum. Public kindergartens are essentially ' +
        'free; private ones charge extra fees on top of the state Nuri subsidy. Extra "free education ' +
        'and care" support began for 5-year-olds in 2025 and was extended to 4-year-olds in 2026; the ' +
        'government plans full coverage of ages 3–5 in 2027.',
      events: ['Nuri curriculum for ages 3–5', 'Elementary registration notice in December'],
      cost: { amount: 0, note: 'Public kindergartens and Nuri-funded daycare essentially free; private kindergartens charge extras, reduced for ages 4–5 from 2026.', src: 5 } },
    // Elementary school
    { id: 'kr-e1', line: 'cho', name: 'Grades 1–2', local: '초등 1~2학년', ages: [6, 8], isced: 1,
      desc: 'School starts on 2 March. Lessons in the first two years include Korean, maths and ' +
        'integrated subjects. Free school lunch and after-school care ("Neulbom school", 늘봄학교, ' +
        'from 2024) are provided.',
      events: ['Entrance ceremony early March'],
      cost: { amount: 0, note: 'Free; lunches are also free in public schools.', src: 7 } },
    { id: 'kr-e3', line: 'cho', name: 'Grades 3–6', local: '초등 3~6학년', ages: [8, 12], isced: 1,
      desc: 'English starts as a subject in grade 3. There are no national exams in elementary school; ' +
        'many children attend hagwon (private academies) after school for English, maths, music or sport.',
      cost: { amount: 0, note: 'Free. Hagwon fees are private and not counted.' } },
    // Middle school
    { id: 'kr-m1', line: 'cho', name: 'Middle 1', local: '중학교 1학년', ages: [12, 13], isced: 2,
      desc: 'First year of middle school. One semester is a "free semester" (자유학기) without written ' +
        'exams, focused on projects and career exploration.',
      events: ['Free semester (자유학기)'],
      cost: { amount: 0, note: 'Free compulsory education.', src: 7 } },
    { id: 'kr-m2', line: 'cho', name: 'Middle 2', local: '중학교 2학년', ages: [13, 14], isced: 2,
      desc: 'Graded exams and school records (내신) begin to matter for high-school admission to ' +
        'selective schools.',
      cost: { amount: 0, note: 'Free compulsory education.' } },
    { id: 'kr-m3', line: 'cho', name: 'Middle 3', local: '중학교 3학년', ages: [14, 15], isced: 2,
      desc: 'High-school choice. Special-purpose, autonomous private and Meister/vocational high schools ' +
        'admit students first (전기, roughly October–December) using school records and interviews; ' +
        'general high schools follow (후기, December), mostly by preference plus lottery. There is no ' +
        'national entrance exam.',
      exam: 'Middle-school diploma',
      events: ['Early-round admissions to special, Meister and vocational HS (Oct–Dec)', 'General HS applications and lottery (Dec–Jan)'],
      cost: { amount: 0, note: 'Free compulsory education.' } },
    // General high school
    { id: 'kr-g1', line: 'ilban', name: 'HS 1', local: '고1 (일반고)', ages: [15, 16], isced: 3,
      desc: 'Common subjects for all. Under the credit system students plan their courses for years 2 ' +
        'and 3. Many study late at school (야간자율학습) or at hagwon.',
      cost: { amount: 0, note: 'Free since 2021 (fees, tuition, textbooks). Private autonomous HS (자사고) are excluded and charge high fees.', src: 6 } },
    { id: 'kr-g2', line: 'ilban', name: 'HS 2', local: '고2', ages: [16, 17], isced: 3,
      desc: 'Elective courses chosen by career interest; grades from all three years form the school ' +
        'record (학교생활기록부) used in university admissions.',
      cost: { amount: 0, note: 'Free; funding shifts fully to provincial education offices after 2027.', src: 6 } },
    { id: 'kr-g3', line: 'ilban', name: 'HS 3', local: '고3', ages: [17, 18], isced: 3,
      desc: 'The admissions year. Most university places are filled in the early round (수시) from ' +
        'September, based on the school record, essays or interviews; the regular round (정시) in ' +
        'December–January uses mainly the CSAT. On CSAT day offices open late and flights are halted ' +
        'during the English listening test. Students entering high school from 2025 will sit a ' +
        'reformed CSAT with common subjects (from November 2027).',
      exam: 'CSAT / suneung (대학수학능력시험)',
      events: ['Early admissions applications (September)', 'CSAT: Thu 19 Nov 2026', 'CSAT results: 11 Dec 2026', 'Regular admissions applications (late Dec–Jan)', 'Graduation in Jan–Feb'],
      cost: { amount: 0, note: 'Free; the CSAT has a small registration fee.', src: 6 } },
    // University
    { id: 'kr-ba', line: 'univ', name: 'Bachelor', local: '학사 (대학교)', ages: [18, 22], isced: 6,
      desc: 'Four-year bachelor (140 credits or so). Many men take 18–21 months out for military ' +
        'service, so they often graduate at 25–26. National Scholarships (국가장학금) cover part or all ' +
        'of tuition for lower- and middle-income students.',
      exam: 'Bachelor\'s degree (학사)',
      events: ['Military service break (men, usually after year 1 or 2)'],
      cost: { amount: 4250000, note: 'Average national/public university tuition 2026; private average shown separately. National Scholarships reduce this for many.', src: 0, private: 8231500 } },
    { id: 'kr-ma', line: 'univ', name: 'Master', local: '석사', ages: [22, 24], isced: 7,
      desc: 'Two-year master at a graduate school (대학원), including professional schools for law, ' +
        'medicine-related fields and business.',
      exam: 'Master\'s degree (석사)',
      cost: { amount: 6218000, note: 'Seoul National University general graduate school, humanities/social sciences, 2 semesters (2026); sciences about ₩7.6 million.', src: 1 } },
    { id: 'kr-phd', line: 'univ', name: 'Doctorate', local: '박사', ages: [24, 27], isced: 8,
      desc: 'Doctorate, often in an integrated master\'s–PhD course. Science and engineering students ' +
        'are usually paid from their lab\'s research grants.',
      exam: 'Doctorate (박사)',
      cost: { amount: 6218000, note: 'Seoul National University general graduate school rate (humanities); many science PhD students are funded by research grants.', src: 1 } },
    // Special-purpose high school
    { id: 'kr-s1', line: 'teukmok', name: 'Special HS', local: '특수목적고 (과학고·외고·국제고·예고)', ages: [15, 18], isced: 3,
      desc: 'Selective high schools for science, languages, international studies, arts or sports, ' +
        'admitted in the early round. Science-high-school students can graduate early and enter ' +
        'KAIST or other science universities.',
      exam: 'High-school diploma / CSAT',
      cost: { amount: 0, note: 'Public special-purpose schools are covered by free high-school education; boarding and programme fees extra.', src: 6 } },
    // Vocational high school
    { id: 'kr-v1', line: 'jigeop', name: 'HS 1', local: '특성화고 1학년', ages: [15, 16], isced: 3,
      desc: 'First year of a specialised or Meister high school, with general and vocational subjects.',
      share: { pct: 13, of: 'of high-school students attended specialised (vocational) high schools in 2025 (168,465 of 1,299,466); Meister schools not included', src: 4 },
      cost: { amount: 0, note: 'Free; many vocational schools also offer stipends and dormitories.', src: 6 } },
    { id: 'kr-v2', line: 'jigeop', name: 'HS 2', local: '2학년', ages: [16, 17], isced: 3,
      desc: 'Practical training and national technical qualifications (국가기술자격). Some schools run ' +
        'apprenticeship-style work-study programmes with companies.',
      cost: { amount: 0, note: 'Free.', src: 6 } },
    { id: 'kr-v3', line: 'jigeop', name: 'HS 3', local: '3학년', ages: [17, 18], isced: 3,
      desc: 'Field placements and job hunting. Recently about half of vocational-high-school graduates ' +
        'went on to higher education and about a quarter went straight into work (Meister schools ' +
        'have the highest employment rate).',
      exam: 'High-school diploma; technical qualifications',
      cost: { amount: 0, note: 'Free.', src: 6 } },
    // Junior college
    { id: 'kr-jc', line: 'jeonmun', name: 'Jeonmun', local: '전문대학', ages: [18, 21], isced: 5,
      desc: 'Practical 2–3 year associate-degree programmes. Almost all junior colleges are private; ' +
        'the public figure is for the few public ones.',
      exam: 'Associate degree (전문학사)',
      cost: { amount: 2231200, note: 'Average public junior-college tuition 2026; almost all are private (average shown separately).', src: 0, private: 6686600 } },
    { id: 'kr-jc4', line: 'jeonmun', name: 'Advanced', local: '전공심화과정', ages: [21, 22], isced: 6,
      desc: 'An optional 1–2 year advanced major course at a junior college for graduates with work ' +
        'experience, leading to a bachelor\'s degree.',
      exam: 'Bachelor\'s degree (학사)',
      cost: { amount: 2231200, note: 'Charged at the junior college\'s tuition rate (public average shown).', src: 0, private: 6686600 } },
  ],
  transfers: [
    { from: 'kr-s1', to: 'kr-ba', label: 'Special HS → university',
      desc: 'Special-purpose high-school graduates apply to university like other students, mostly through early admissions.' },
    { from: 'kr-v3', to: 'kr-ba', label: 'Vocational HS → university',
      desc: 'Special admission quotas exist for vocational graduates, including "work first, study later" places for those employed for three years.' },
    { from: 'kr-g3', to: 'kr-jc', label: 'General HS → junior college',
      desc: 'Many general-high-school graduates enrol in junior colleges, for example in nursing or health fields.' },
    { from: 'kr-jc', to: 'kr-ba', label: 'Junior college → university',
      desc: 'Junior-college graduates can transfer into year 3 of a four-year university (편입).' },
  ],
  sources: [
    { title: 'MOE / Korean Council for University Education — 2026 university tuition disclosure (April 2026)', url: 'https://www.kcue.or.kr/_upload/news/2026/04/29/application_e74914d14194c1a4deb8295856105c91.pdf' },
    { title: 'Seoul National University — 2026 tuition table (incl. graduate school)', url: 'https://www.snu.ac.kr/webdata/uploads/kor/file/2026/08/2026_tuition.pdf' },
    { title: 'Etoday — 2027 CSAT on 19 November 2026, results 11 December (MOE schedule)', url: 'https://www.etoday.co.kr/news/view/2390974' },
    { title: 'e-나라지표 (Statistics Korea) — high schools by type', url: 'https://www.index.go.kr/unify/idx-info.do?idxCd=1541' },
    { title: 'Newsis — specialised high-school enrolment 2015–2025 (Seoul Education Research report, Aug 2026)', url: 'https://www.newsis.com/view/NISX20260806_0003739326' },
    { title: 'Newsis — 2026 MOE budget: free education and care for ages 4–5, free high school', url: 'https://www.newsis.com/view/NISX20251107_0003393885' },
    { title: 'Hankyung — free high-school education and its funding (March 2026)', url: 'https://www.hankyung.com/article/2026033064491' },
    { title: 'Korea Law Information Center — Elementary and Secondary Education Act (초·중등교육법)', url: 'https://www.law.go.kr/법령/초·중등교육법' },
    { title: 'e-나라지표 (MOE / national statistics) — 사교육비 및 참여율 (private tutoring spending and participation)', url: 'https://www.index.go.kr/unify/idx-info.do?idxCd=2697' },
  ],
};
