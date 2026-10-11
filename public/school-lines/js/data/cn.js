// China (mainland) — school system as a metro map.
// Education is run by provinces within national rules, so fees and some details vary.
// The school year starts on 1 September. Ages are typical ages at the start of each stage.
export default {
  id: 'cn',
  iso3: 'CHN',
  region: 'Asia',
  currency: 'CNY',
  name: 'China',
  localName: '中国 Zhōngguó',
  flag: '🇨🇳',
  summary:
    'Nine years of free compulsory education: six years of primary school and three of junior middle ' +
    'school (five plus four in Shanghai and a few other places). At about 15 the zhongkao exam sorts ' +
    'pupils into academic senior high schools or secondary vocational schools; roughly a quarter of ' +
    'upper-secondary students are on the vocational side. Senior high ends with the gaokao in June, ' +
    'whose score largely decides which university and programme a student can enter. Higher education ' +
    'splits into four-year bachelor programmes and three-year higher vocational (zhuanke) programmes; ' +
    'more than 60% of young people now enter some form of higher education.',
  ageNote:
    'Children start primary school in September of the year they turn 6, with a cut-off of 31 August ' +
    'in most provinces. Children of migrant workers often face extra hurdles to attend school, and ' +
    'especially to sit the zhongkao and gaokao, outside the province of their household registration ' +
    '(hukou). Gaokao formats differ by province under the "new gaokao" reform.',
  compulsory: {
    from: 6,
    to: 15,
    label: 'Yìwù jiàoyù 6–15',
    note:
      'Nine years of compulsory education (九年义务教育) under the Compulsory Education Law (1986). ' +
      'Tuition and miscellaneous fees have been waived in rural areas since 2006 and nationwide since ' +
      '2008. The 2026–2030 education plan says the state will "explore extending" compulsory education.',
  },
  costNote:
    'Compulsory schooling is free. Since autumn 2025 the final year of public kindergarten is free. ' +
    'Senior high, university and other non-compulsory stages charge fees set by each province, so a ' +
    'single national figure is not published; amounts shown are examples with sources. Private ' +
    'tutoring for school subjects has been tightly restricted since the 2021 "double reduction" policy.',
  lines: [
    { id: 'early', name: 'Yòu’éryuán', color: '#7C8A93', lane: 0,
      desc: 'Kindergarten (幼儿园) for ages 3–6 in three years: small, middle and big class (小班, 中班, ' +
        '大班). Not compulsory, but the gross enrolment rate was 92.9% in 2025. About 88% of ' +
        'kindergartens are public or "inclusive" (普惠性) private ones with capped fees. Childcare for ' +
        'under-3s (托育) is limited, and most babies are cared for by parents or grandparents.' },
    { id: 'xiao', name: 'Xiǎoxué', color: '#D2322D', lane: 0, from: 'cn-k3',
      desc: 'Primary school (小学), grades 1–6, then junior middle school (初中), grades 7–9. Both are ' +
        'compulsory and free; pupils attend a school assigned by home address, and selective entry ' +
        'exams for junior middle school are banned.' },
    { id: 'gaozhong', name: 'Pǔtōng gāozhōng', color: '#1E66C9', lane: -1, from: 'cn-j3',
      desc: 'General (academic) senior high school (普通高中), grades 10–12, entered by zhongkao score. ' +
        'About 30.4 million students in 2025. Key schools (重点高中) are highly competitive; about 20% ' +
        'of general high-school students are in private schools.' },
    { id: 'daxue', name: 'Dàxué', color: '#5B2C83', lane: -2, from: 'cn-g3',
      desc: 'Universities (大学) and colleges offering bachelor programmes (本科, usually 4 years; 5 for ' +
        'medicine and architecture), master (硕士, 2–3 years) and doctorate (博士, 3–4+ years). In 2025 ' +
        'there were 1,278 regular undergraduate institutions; about a quarter of students are at ' +
        'private ones.' },
    { id: 'zhongzhi', name: 'Zhōngzhí', color: '#DD7710', lane: 1, from: 'cn-j3',
      desc: 'Secondary vocational education (中等职业教育): specialised secondary schools (中专), ' +
        'vocational high schools (职业高中) and technical schools (技工学校, run by the labour ministry). ' +
        'Usually 3 years. Students can continue to higher vocational college through the "vocational ' +
        'gaokao" (职教高考) or through combined 3+2 and five-year programmes.' },
    { id: 'gaozhi', name: 'Gāozhí', color: '#B8860B', lane: 1, from: 'cn-v3',
      desc: 'Higher vocational colleges (高职专科): 3-year diploma (zhuanke) programmes, entered through ' +
        'the gaokao, the vocational gaokao, or separate admission tests. Since 2019 a small number of ' +
        'vocational universities also offer 4-year vocational bachelor degrees (职业本科).' },
  ],
  stations: [
    // Kindergarten
    { id: 'cn-k1', line: 'early', name: 'Kindergarten', local: '幼儿园 小班·中班', ages: [3, 5], isced: 0,
      desc: 'Small and middle class. Fees at public kindergartens are set by local governments and ' +
        'differ widely between cities and the countryside; private kindergartens (40% of children) ' +
        'can cost much more.',
    },
    { id: 'cn-k3', line: 'early', name: 'Big class', local: '大班', ages: [5, 6], isced: 0,
      desc: 'Final kindergarten year, preparing for primary school. From the autumn 2025 semester the ' +
        'state waives the care-and-education fee (保育教育费) for this year at public kindergartens, ' +
        'and licensed private kindergartens must reduce fees by the same amount.',
      events: ['Free final year since autumn 2025'],
      cost: { amount: 0, note: 'Care-and-education fee waived since autumn 2025 at public kindergartens; meals and boarding still charged.', src: 1 } },
    // Primary
    { id: 'cn-p1', line: 'xiao', name: 'Grades 1–3', local: '小学 一至三年级', ages: [6, 9], isced: 1,
      desc: 'Lower primary: Chinese (yuwen), maths, morality and law, science, arts and PE. Written ' +
        'exams are not allowed in grades 1–2 under the 2021 "double reduction" rules, and homework ' +
        'is limited.',
      events: ['School starts 1 September', 'Young Pioneers (red scarf) induction in grade 1'],
      cost: { amount: 0, note: 'Free: tuition, miscellaneous fees and textbooks waived since 2006–2008.' } },
    { id: 'cn-p4', line: 'xiao', name: 'Grades 4–6', local: '小学 四至六年级', ages: [9, 12], isced: 1,
      desc: 'Upper primary. English usually starts in grade 3. Pupils move up to a nearby junior ' +
        'middle school by catchment or lottery rather than by exam.',
      cost: { amount: 0, note: 'Free compulsory education.' } },
    // Junior middle school
    { id: 'cn-j1', line: 'xiao', name: 'Chū yī', local: '初一 (七年级)', ages: [12, 13], isced: 2,
      desc: 'Junior middle school year 1 (grade 7). Subjects include physics from grade 8 and ' +
        'chemistry from grade 9.',
      cost: { amount: 0, note: 'Free compulsory education.' } },
    { id: 'cn-j2', line: 'xiao', name: 'Chū èr', local: '初二 (八年级)', ages: [13, 14], isced: 2,
      desc: 'Some subjects (e.g. geography and biology in many provinces) are examined in the ' +
        'academic proficiency tests at the end of grade 8, counting toward the zhongkao.',
      cost: { amount: 0, note: 'Free compulsory education.' } },
    { id: 'cn-j3', line: 'xiao', name: 'Chū sān', local: '初三 (九年级)', ages: [14, 15], isced: 2,
      desc: 'The zhongkao (中考, senior-high entrance exam) is run by each city or province in June and ' +
        'covers Chinese, maths, English, sciences, humanities and PE. Its score decides admission to ' +
        'general senior high schools; the rest go to secondary vocational schools or leave. The 2022 ' +
        'revised Vocational Education Law dropped the rigid "roughly equal" split between general and ' +
        'vocational places, and many provinces are expanding general high-school places.',
      exam: 'Zhongkao (中考) and junior-middle graduation',
      events: ['PE and lab tests (spring)', 'Zhongkao: mid–late June (varies by city)', 'Results and school choice: early July'],
      cost: { amount: 0, note: 'Free compulsory education.' } },
    // General senior high
    { id: 'cn-g1', line: 'gaozhong', name: 'Gāo yī', local: '高一', ages: [15, 16], isced: 3,
      desc: 'Senior high year 1. Under the "new gaokao" (3+1+2 in most provinces) students choose ' +
        'physics or history plus two more electives at the end of the year.',
      events: ['Subject choice for the gaokao (end of year)'] },
    { id: 'cn-g2', line: 'gaozhong', name: 'Gāo èr', local: '高二', ages: [16, 17], isced: 3,
      desc: 'Academic proficiency tests (学业水平考试) in each subject are needed to graduate.' },
    { id: 'cn-g3', line: 'gaozhong', name: 'Gāo sān', local: '高三', ages: [17, 18], isced: 3,
      desc: 'A year of revision for the gaokao (普通高等学校招生全国统一考试), held from 7 June for 2–4 ' +
        'days depending on the province. Students then apply to universities with their score ' +
        '(志愿填报) and are admitted in batches. Admission depends on provincial quotas, so the same ' +
        'score can mean different chances in different provinces. 12.9 million people registered for ' +
        'the 2026 gaokao.',
      exam: 'Gaokao (高考)',
      events: ['Gaokao: from 7 June (2026: 12.9 million candidates)', 'Scores released late June', 'Applications (志愿填报) late June – July', 'Admission letters July–August'] },
    // University
    { id: 'cn-ba', line: 'daxue', name: 'Bachelor', local: '本科', ages: [18, 22], isced: 6,
      desc: 'Four-year bachelor (5 for medicine). Most students live in campus dormitories and start ' +
        'with a few weeks of military training. National loans and grants help students from poorer ' +
        'families. Top graduates may be recommended for master study without exam (保研).',
      exam: 'Bachelor\'s degree (学士)',
      events: ['Military training at the start of year 1', 'Graduation in June'],
      share: { pct: 61.3, of: 'gross enrolment ratio in higher education (all forms), 2025', src: 0 },
      cost: { amount: 6600, note: 'Example: Xi\'an Jiaotong University 2026, science/engineering (humanities ¥5,500, medicine ¥7,150). Set by provinces; dorms ¥1,100–2,400 extra.', src: 2 } },
    { id: 'cn-ma', line: 'daxue', name: 'Master', local: '硕士研究生', ages: [22, 25], isced: 7,
      desc: 'Academic (2–3 years) or professional (2–3 years) master. Entry is mainly through the ' +
        'national postgraduate entrance exam (考研) held in late December, followed by interviews in ' +
        'spring. In 2025 there were about 3.5 million master students.',
      exam: 'Master\'s degree (硕士)',
      events: ['National postgraduate exam: late December'] },
    { id: 'cn-phd', line: 'daxue', name: 'Doctorate', local: '博士研究生', ages: [25, 29], isced: 8,
      desc: 'Doctorate, usually 3–4 years but often longer; entry by application and assessment ' +
        '(申请-考核). About 750,000 doctoral students in 2025. Doctoral students receive a national ' +
        'stipend.',
      exam: 'Doctorate (博士)' },
    // Secondary vocational
    { id: 'cn-v1', line: 'zhongzhi', name: 'Year 1', local: '中职一年级', ages: [15, 16], isced: 3,
      desc: 'First year of secondary vocational school, combining general subjects with a trade ' +
        'such as mechatronics, nursing, computing, tourism or e-commerce.',
      share: { pct: 27, of: 'of upper-secondary students (general + secondary vocational) were in secondary vocational education in 2025 (11.2 of 41.6 million; excludes technical schools)', src: 0 },
      cost: { amount: 0, note: 'Tuition waived for most full-time students at public secondary vocational schools (national free-tuition policy).' } },
    { id: 'cn-v2', line: 'zhongzhi', name: 'Year 2', local: '中职二年级', ages: [16, 17], isced: 3,
      desc: 'Workshop training and vocational certificates.',
      cost: { amount: 0, note: 'Tuition waived for most students.' } },
    { id: 'cn-v3', line: 'zhongzhi', name: 'Year 3', local: '中职三年级', ages: [17, 18], isced: 3,
      desc: 'Usually a long internship in a company. Graduates take jobs or sit the vocational gaokao ' +
        '(职教高考) for higher vocational colleges and some vocational bachelor places; a growing ' +
        'share continue studying.',
      exam: 'Secondary vocational diploma; vocational gaokao',
      cost: { amount: 0, note: 'Tuition waived for most students.' } },
    // Higher vocational
    { id: 'cn-hv', line: 'gaozhi', name: 'Gāozhí', local: '高职专科', ages: [18, 21], isced: 5,
      desc: 'Three-year higher vocational diploma at one of 1,554 colleges (2025), with 17.7 million ' +
        'students — almost as many as in regular bachelor programmes. Entered by gaokao score, the ' +
        'vocational gaokao or separate tests in spring.',
      exam: 'Zhuanke diploma (专科)' },
    { id: 'cn-zsb', line: 'gaozhi', name: 'Top-up', local: '专升本', ages: [21, 23], isced: 6,
      desc: 'Graduates can "upgrade" to a bachelor (专升本) through a provincial exam, studying 2 more ' +
        'years at a university or vocational university. About 0.9 million made this step in 2025.',
      exam: 'Bachelor\'s degree' },
  ],
  transfers: [
    { from: 'cn-g3', to: 'cn-hv', label: 'Gaokao → higher vocational',
      desc: 'Students whose gaokao score is below the bachelor cut-off are admitted to three-year zhuanke programmes.' },
    { from: 'cn-v3', to: 'cn-ba', label: 'Vocational gaokao → bachelor',
      desc: 'A limited number of bachelor places, mostly at vocational and applied universities, are filled through the vocational gaokao.' },
    { from: 'cn-zsb', to: 'cn-ma', label: 'Top-up bachelor → master',
      desc: 'A bachelor degree gained through 专升本 gives access to the national postgraduate exam.' },
    { from: 'cn-j3', to: 'cn-hv', label: 'Five-year programmes',
      desc: 'Some junior-middle graduates enter combined five-year (3+2) programmes that run straight through to a higher vocational diploma.' },
  ],
  sources: [
    { title: 'Ministry of Education — 2025年全国教育事业发展统计公报 (national education statistics bulletin 2025)', url: 'http://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/202607/t20260706_1442870.html' },
    { title: 'State Council General Office — 关于逐步推行免费学前教育的意见 (free final year of kindergarten, 2025)', url: 'http://www.moe.gov.cn/jyb_xxgk/moe_1777/moe_1778/202508/t20250805_1258143.html' },
    { title: 'Xi\'an Jiaotong University — 2026年本科招生章程 (undergraduate admissions charter, fees)', url: 'http://zs.xjtu.edu.cn/info/1656/7010.htm' },
    { title: 'State Council — 教育发展“十五五”规划 (education development plan 2026–2030)', url: 'http://www.moe.gov.cn/jyb_xxgk/moe_1777/moe_1778/202606/t20260629_1442045.html' },
    { title: 'Ministry of Education — 2026 gaokao: 12.9 million registered', url: 'http://www.moe.gov.cn/jyb_xwfb/gzdt_gzdt/moe_1485/202606/t20260607_1439068.html' },
    { title: 'Wikipedia — Gaokao (exam dates and format)', url: 'https://en.wikipedia.org/wiki/Gaokao' },
  ],
};
