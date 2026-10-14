// Egypt — school system as a metro map.
// The school year runs roughly September to June; ages are typical ages at the start of each stage.
export default {
  id: 'eg',
  iso3: 'EGY',
  region: 'Africa',
  currency: 'EGP',
  name: 'Egypt',
  localName: 'مصر Miṣr',
  flag: '🇪🇬',
  summary:
    'Two years of kindergarten, six of primary and three of preparatory school make up basic education. ' +
    'The score in the preparatory certificate exam at about 15 sorts pupils into general secondary ' +
    '(Thanaweya Amma or, since 2025, the new Egyptian Baccalaureate) or technical secondary (3 or 5 years). ' +
    'A parallel religious system run by Al-Azhar covers all stages up to Al-Azhar University. Places at ' +
    'public universities are allocated centrally by the Tansiq office according to the final secondary ' +
    'score; technical diploma holders go mainly to technical institutes and technological universities.',
  ageNote:
    'Children enter primary school at 6 (age on 1 October), kindergarten at 4. Repetition is limited, but ' +
    'heavy reliance on private tutoring (durūs khuṣūṣiyya) means many families pay well beyond official fees.',
  compulsory: {
    from: 6,
    to: 15,
    label: 'Compulsory basic 6–15',
    note:
      'Primary and preparatory school (9 years) are compulsory under the Education Law. Kindergarten is ' +
      'optional.',
    extendedTo: 18,
    extendedLabel: 'To end of secondary (constitution)',
    extendedNote:
      'The 2014 Constitution (Art. 19) makes education compulsory until the end of the secondary stage or ' +
      'its equivalent, and free at public schools; this is not fully enforced.',
  },
  costNote:
    'Public schools are free by the Constitution but charge small annual fees (about EGP 210–520, waived ' +
    'for some low-income families); private tutoring, not fees, is the main household cost. Public ' +
    'universities charge nominal fees; private and national (ahliya) universities, and paid programmes ' +
    'inside public universities, charge far more.',
  lines: [
    { id: 'kg', name: 'Kindergarten', color: '#7C8A93', lane: 0,
      desc: 'Two years of kindergarten (KG1–KG2) for 4- and 5-year-olds, in public, private and Azhari ' +
        'schools. Not compulsory; a large share of children still start primary without it. Nurseries for ' +
        'under-4s are supervised by the Ministry of Social Solidarity.' },
    { id: 'pri', name: 'Primary', color: '#D2322D', lane: 0, from: 'eg-kg',
      desc: 'Primary school, Grades 1–6, under the Ministry of Education and Technical Education. The ' +
        '“Education 2.0” curriculum has been rolled out since 2018/19. Classes are often 50 pupils or ' +
        'more, with a shortage of about 250,000 classrooms in 2024.' },
    { id: 'prep', name: 'Preparatory', color: '#1E66C9', lane: 0, from: 'eg-p6',
      desc: 'Preparatory (lower secondary) school, Grades 7–9, ending in the Basic Education Certificate ' +
        'exam set by each governorate.' },
    { id: 'bac', name: 'Baccalaureate', color: '#7A3E9D', lane: -1, from: 'eg-prep3',
      desc: 'The Egyptian Baccalaureate (al-Bakaloriya al-Miṣriyya), an optional alternative to Thanaweya ' +
        'Amma. Parliament passed it on 8 July 2025 by amending Education Law 139/1981, and Thanaweya Amma ' +
        'stays in place. It was offered to students entering secondary school in 2025/26. After a ' +
        'foundation year, students specialise in one of four tracks (medicine & life sciences, engineering ' +
        '& computer science, business, arts & humanities), studying 7 subjects over two years, with more ' +
        'than one exam attempt allowed. Universities must admit students from both systems.' },
    { id: 'gen', name: 'Thanaweya Amma', color: '#174E9C', lane: -2, from: 'eg-prep3',
      desc: 'General secondary (al-Thanawiyya al-ʿĀmma), Grades 10–12, with a science (ʿilmī ʿulūm), ' +
        'mathematics (ʿilmī riyāḍa) or literary (adabī) stream. A single high-stakes national exam at the ' +
        'end of Grade 12 decides university placement.' },
    { id: 'uni', name: 'University', color: '#5B2C83', lane: -3, from: 'eg-g12',
      desc: 'About 3.6 million students in public, private, national (ahliya) and branch campuses of ' +
        'foreign universities. Public-university places are allocated by the Tansiq coordination office ' +
        'by score and stated preferences; private and ahliya universities admit with lower minimum scores ' +
        'and charge substantial fees.' },
    { id: 'tech', name: 'Technical (3 yrs)', color: '#DD7710', lane: 1, from: 'eg-prep3',
      desc: 'Technical secondary schools in industrial, agricultural, commercial and hotel & tourism ' +
        'fields — about half of upper-secondary students. Applied Technology Schools (since 2018) run ' +
        'with industry partners, and some schools follow a dual (school + company) system.' },
    { id: 'techhe', name: 'Technological Univ.', color: '#B85C00', lane: 1, from: 'eg-t3',
      desc: 'Technological universities (created by law in 2019) and middle technical institutes offer ' +
        'two-year technical diplomas and a four-year bachelor of technology, mainly for technical diploma ' +
        'holders.' },
    { id: 'tech5', name: 'Technical (5 yrs)', color: '#2C9546', lane: 2, from: 'eg-prep3',
      desc: 'Five-year advanced technical schools, mainly industrial, leading to an advanced technical ' +
        'diploma, considered above the 3-year diploma.' },
    { id: 'azhar', name: 'Al-Azhar', color: '#00A0A6', lane: 3, from: 'eg-kg',
      desc: 'The Al-Azhar system: Azhari institutes for Muslim pupils with the national curriculum plus ' +
        'extensive religious and Arabic studies, separate for boys and girls. Primary 6 years, preparatory ' +
        '3, secondary 3, leading to Al-Azhar University.' },
  ],
  stations: [
    // Kindergarten
    { id: 'eg-kg', line: 'kg', name: 'KG1–KG2', local: 'Riyāḍ al-aṭfāl', ages: [4, 6], isced: 0,
      desc: 'Kindergarten attached to primary schools or in private schools; play-based, with early ' +
        'Arabic, English and numeracy.',
      cost: { amount: 300, note: 'About; public schools charge small annual fees (about EGP 210–520). Private kindergartens cost much more.', src: 0 } },
    // Primary
    { id: 'eg-p13', line: 'pri', name: 'Grades 1–3', ages: [6, 9], isced: 1,
      desc: 'Lower primary under the Education 2.0 curriculum: multidisciplinary themes, Arabic, English ' +
        'and mathematics. No pass/fail exams in Grades 1–3.',
      cost: { amount: 300, note: 'About; small official fees, waived for some low-income families. Private tutoring is a major extra cost.', src: 0 } },
    { id: 'eg-p45', line: 'pri', name: 'Grades 4–5', ages: [9, 11], isced: 1,
      desc: 'Upper primary; term exams begin from Grade 4. Science and social studies are taught separately.',
      cost: { amount: 300, note: 'About; small official fees.', src: 0 } },
    { id: 'eg-p6', line: 'pri', name: 'Grade 6', ages: [11, 12], isced: 1,
      desc: 'End of primary, with an end-of-year exam set at governorate level.',
      exam: 'Primary certificate (governorate exam)',
      cost: { amount: 300, note: 'About; small official fees.', src: 0 } },
    // Preparatory
    { id: 'eg-prep1', line: 'prep', name: 'Prep 1', local: 'Grade 7', ages: [12, 13], isced: 2,
      desc: 'First preparatory year.',
      cost: { amount: 300, note: 'About; small official fees.', src: 0 } },
    { id: 'eg-prep2', line: 'prep', name: 'Prep 2', local: 'Grade 8', ages: [13, 14], isced: 2,
      desc: 'Second preparatory year.',
      cost: { amount: 300, note: 'About; small official fees.', src: 0 } },
    { id: 'eg-prep3', line: 'prep', name: 'Prep 3', local: 'Grade 9', ages: [14, 15], isced: 2,
      desc: 'Final year of basic education. The governorate-level Basic Education Certificate exam ' +
        '(shahādat itmām marḥalat al-taʿlīm al-asāsī) in May–June decides the track: each governorate sets ' +
        'a minimum score for general secondary, and lower scorers go to technical schools.',
      exam: 'Basic Education Certificate (al-Iʿdādiyya)', events: ['Governorate exams May–June', 'Secondary-school allocation by score in summer'],
      cost: { amount: 300, note: 'About; small official fees.', src: 0 } },
    // Baccalaureate
    { id: 'eg-bac10', line: 'bac', name: 'Gr 10', local: 'Foundation year', ages: [15, 16], isced: 3,
      desc: 'Common foundation year in the Baccalaureate route; families chose between the Baccalaureate ' +
        'and Thanaweya Amma for the 2025/26 Grade 10 intake.',
      cost: { amount: 500, note: 'About; usual public-school fees (EGP 210–520). The law describes the track as free; fees for extra exam attempts were debated.', src: 0 } },
    { id: 'eg-bac12', line: 'bac', name: 'Grades 11–12', local: 'Main stage', ages: [16, 18], isced: 3,
      desc: 'Two-year main stage in one of four tracks, with exams over both years and the option to ' +
        're-sit subjects to improve the score. The first cohort finishes in 2028.',
      exam: 'Egyptian Baccalaureate (first in 2028)',
      cost: { amount: 500, note: 'About; usual public-school fees. Whether extra exam attempts are charged was debated in parliament.', src: 0 } },
    // General secondary
    { id: 'eg-g10', line: 'gen', name: 'Grade 10', local: 'Ūlā thānawī', ages: [15, 16], isced: 3,
      desc: 'First secondary year, a common year with school-level exams; the subject load was cut in ' +
        'the 2024/25 reform.',
      cost: { amount: 500, note: 'About; small official fees (about EGP 210–520). Private tutoring often costs far more.', src: 0 } },
    { id: 'eg-g11', line: 'gen', name: 'Grade 11', local: 'Thānya thānawī', ages: [16, 17], isced: 3,
      desc: 'Students choose the science, mathematics or literary stream; exams are school/governorate ' +
        'level and do not count towards the final score.',
      cost: { amount: 500, note: 'About; small official fees.', src: 0 } },
    { id: 'eg-g12', line: 'gen', name: 'Grade 12', ages: [17, 18], isced: 3,
      desc: 'The Thanaweya Amma national exam in June–July is one of the most high-stakes exams in the ' +
        'region; results in August, then Tansiq allocates public-university places in several rounds.',
      exam: 'General Secondary Certificate (Thanaweya Amma)',
      events: ['National exams June–July', 'Results in August', 'Tansiq placement rounds August–September'],
      cost: { amount: 500, note: 'About; small official fees plus exam fees. Private tutoring is the main cost.', src: 0 } },
    // University
    { id: 'eg-ba', line: 'uni', name: 'Bachelor', local: 'Bakalūriyūs / Licence', ages: [18, 22], isced: 6,
      desc: 'Most degrees take 4 years; engineering, pharmacy and dentistry 5; medicine 5 plus a 2-year ' +
        'internship. Public universities also run fee-paying credit-hour and “parallel” programmes.',
      exam: 'Bachelor\'s / Licence',
      cost: { amount: 1000, private: 70000, note: 'About; public study is free by the Constitution apart from small service fees. Ahliya engineering/computing: about EGP 55,000–80,000 (2025/26).', estimate: true } },
    { id: 'eg-ma', line: 'uni', name: 'Master\'s', ages: [22, 25], isced: 7,
      desc: 'A one-year postgraduate diploma (pre-master courses) followed by a research thesis; often ' +
        '2–4 years in total.', exam: 'Master\'s degree (Mājistīr)',
      cost: { amount: 5000, note: 'About; public universities set postgraduate fees by faculty and publish no national schedule. Not verified.', estimate: true } },
    { id: 'eg-phd', line: 'uni', name: 'PhD', ages: [25, 28], isced: 8,
      desc: 'Doctoral research, at least 2–3 years after the master\'s.', exam: 'Doctorate (Duktūrāh)',
      cost: { amount: 5000, note: 'About; set by each university and faculty, no national schedule found. Not verified.', estimate: true } },
    // Technical 3-year
    { id: 'eg-t3', line: 'tech', name: 'Technical', local: 'Technical secondary, 3 years', ages: [15, 18], isced: 3,
      desc: 'Three-year technical secondary school. Quality varies widely, and graduates face high ' +
        'unemployment. The best graduates can enter related university faculties through a small quota.',
      exam: 'Technical Secondary Diploma (Dibloom)',
      cost: { amount: 300, note: 'About; small official fees as in other public schools.', src: 0 } },
    // Technological universities
    { id: 'eg-tdip', line: 'techhe', name: 'Diploma', local: 'Technical diploma (2 years)', ages: [18, 20], isced: 5,
      desc: 'Two-year higher technical diploma at a technological university or middle technical institute.',
      exam: 'Higher technical diploma',
      cost: { amount: 1000, note: 'About; assumes nominal public fees. Technological universities publish no fee schedule found. Not verified.', estimate: true } },
    { id: 'eg-tba', line: 'techhe', name: 'B.Tech', local: 'Bachelor of Technology', ages: [20, 22], isced: 6,
      desc: 'Two further years for a bachelor of technology, with industry training.',
      exam: 'Bachelor of Technology',
      cost: { amount: 1000, note: 'About; assumes nominal public fees as for the diploma. Not verified.', estimate: true } },
    // Technical 5-year
    { id: 'eg-t5a', line: 'tech5', name: 'Years 1–3', local: 'Advanced technical school', ages: [15, 18], isced: 3,
      desc: 'First three years of the five-year advanced technical programme.',
      cost: { amount: 300, note: 'About; small official fees.', src: 0 } },
    { id: 'eg-t5b', line: 'tech5', name: 'Years 4–5', ages: [18, 20], isced: 4,
      desc: 'Final two years, ending in the advanced technical diploma. A new 5-year engineering diploma ' +
        'modelled on Japan\'s KOSEN colleges was announced in July 2025.',
      exam: 'Advanced Technical Diploma',
      cost: { amount: 300, note: 'About; small official fees.', src: 0 } },
    // Al-Azhar
    { id: 'eg-az-p', line: 'azhar', name: 'Azhari primary', local: 'Ibtidāʾī Azharī', ages: [6, 12], isced: 1,
      desc: 'Primary education at Azhari institutes, with Qurʾān memorisation and Islamic studies alongside ' +
        'the national curriculum.',
      cost: { amount: 300, note: 'About; assumed similar to public-school fees (EGP 210–520); no Al-Azhar fee schedule found. Not verified.', estimate: true } },
    { id: 'eg-az-pr', line: 'azhar', name: 'Azhari prep', local: 'Iʿdādī Azharī', ages: [12, 15], isced: 2,
      desc: 'Azhari preparatory stage with its own certificate exam.', exam: 'Azhari preparatory certificate',
      cost: { amount: 300, note: 'About; small fees. Not verified.', estimate: true } },
    { id: 'eg-az-s', line: 'azhar', name: 'Azhari secondary', local: 'Thānawī Azharī', ages: [15, 18], isced: 3,
      desc: 'Three-year Azhari secondary in a science or literary stream, ending in the Azhari secondary ' +
        'certificate, which gives entry to Al-Azhar University.', exam: 'Azhari Secondary Certificate',
      cost: { amount: 300, note: 'About; small fees. Not verified.', estimate: true } },
    { id: 'eg-az-u', line: 'azhar', name: 'Al-Azhar Univ.', local: 'Jāmiʿat al-Azhar', ages: [18, 22], isced: 6,
      desc: 'Al-Azhar University: religious faculties (Sharia, Usul al-Din, Arabic) and secular ones ' +
        '(medicine, engineering, commerce), with separate campuses for women.', exam: 'Bachelor\'s / Licence',
      cost: { amount: 1000, note: 'About; assumed nominal like public universities; no official Al-Azhar fee schedule found. Not verified.', estimate: true } },
  ],
  transfers: [
    { from: 'eg-bac12', to: 'eg-ba', label: 'Baccalaureate → university', desc: 'The Baccalaureate gives access to university faculties matching the chosen track, through Tansiq.' },
    { from: 'eg-t3', to: 'eg-ba', label: 'Technical diploma → faculty', desc: 'Top technical diploma graduates can enter related faculties (e.g. engineering, commerce) under a small quota, sometimes after an equivalency exam.' },
    { from: 'eg-tdip', to: 'eg-ba', label: 'Technical diploma → university', desc: 'Graduates of 2-year technical institutes with high grades can transfer to related faculties.' },
    { from: 'eg-t5b', to: 'eg-tba', label: '5-year diploma → B.Tech', desc: 'Advanced technical diploma holders can enter later years of technological-university programmes.' },
    { from: 'eg-g12', to: 'eg-az-u', label: 'Thanaweya Amma → Al-Azhar', desc: 'Al-Azhar University also admits some general secondary graduates to its secular faculties.' },
  ],
  sources: [
    { title: 'Human Rights Watch — Egypt: Declining funding undermines education (Jan 2025)', url: 'https://www.hrw.org/news/2025/01/27/egypt-declining-funding-undermines-education' },
    { title: 'Al-Dostour — National (ahliya) university fees, based on 2025/26 official fees (July 2026, Arabic)', url: 'https://www.dostor.org/5646279' },
    { title: 'Constitute Project — Constitution of Egypt 2014 (Art. 19)', url: 'https://www.constituteproject.org/constitution/Egypt_2014' },
    { title: 'Ministry of Education and Technical Education, Egypt', url: 'https://moe.gov.eg/' },
    { title: 'Ministry of Higher Education and Scientific Research, Egypt', url: 'https://mohesr.gov.eg/' },
    { title: 'Al-Azhar Al-Sharif', url: 'https://www.azhar.eg/' },
    { title: 'EgyptToday — Egypt has 90 universities serving 3.6M students (Jan 2023)', url: 'https://www.egypttoday.com/Article/1/121838/Egypt-has-90-universities-serving-3-6M-students-Higher-Education' },
    { title: 'Scholaro — Education system in Egypt', url: 'https://www.scholaro.com/db/Countries/Egypt/Education-System' },
    { title: 'Ahram Online — Egypt to launch Japanese-inspired engineering diploma (July 2025)', url: 'https://english.ahram.org.eg/NewsContent/1/2/549598/Egypt/Society/Egypt-to-launch-year-Japaneseinspired-engineering-.aspx' },
    { title: 'UNESCO UIS — Egypt', url: 'https://uis.unesco.org/en/country/eg' },
    { title: 'Ahram Online — Thanaweya Amma to remain in place, baccalaureate system deemed optional (2025)', url: 'https://english.ahram.org.eg/NewsContent/1/2/549292/Egypt/Society/Thanaweya-Amma-to-remain-in-place%2C-baccalaureate-s.aspx' },
    { title: 'Ministry of Education Egypt — House of Representatives approves Egyptian Baccalaureate', url: 'https://moe.gov.eg/en/what-s-on/news/house-of-rep-2' },
    { title: 'Nuffic — Education system Egypt: primary and secondary education (incl. Al-Azhar)', url: 'https://www.nuffic.nl/en/node/271' },
  ],
};
