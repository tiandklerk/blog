// Sweden — one compulsory comprehensive school with no tracking until 16, then a choice of
// 18 national upper-secondary programmes. A 10-year grundskola is due from autumn 2028.
export default {
  id: 'se',
  iso3: 'SWE',
  region: 'Europe',
  currency: 'SEK',
  name: 'Sweden',
  localName: 'Sverige',
  flag: '🇸🇪',
  summary:
    'Heavily subsidised preschool (förskola) from age 1, a compulsory preschool class (förskoleklass) ' +
    'at 6, then nine years of comprehensive grundskola with no streaming. At 16 pupils apply to ' +
    'gymnasieskola, choosing one of 18 three-year national programmes: 6 higher-education-preparatory ' +
    'and 12 vocational. Pupils without the grades needed go to an introduction programme. Higher ' +
    'education is free for Swedish, EU/EEA and Swiss students, and adults can always return through ' +
    'municipal adult education (komvux) or higher vocational education (yrkeshögskola). About one in ' +
    'six compulsory-school pupils and almost a third of upper-secondary students attend a tax-funded ' +
    'independent school (friskola), which may not charge fees.',
  ageNote:
    'Ages follow the calendar year: compulsory schooling starts in the autumn term of the year the ' +
    'child turns 6, so a class contains children born in the same year. The Riksdag has approved a ' +
    '10-year grundskola (prop. 2024/25:143): from the 2028/29 school year förskoleklass is replaced ' +
    'by a new year 1, so school starts at 6 and grundskola runs years 1–10. The map shows the system ' +
    'as it is in 2026/27.',
  compulsory: {
    from: 6,
    to: 16,
    label: 'Skolplikt 6–16',
    note:
      'Ten years of compulsory schooling: förskoleklass (compulsory since 2018) plus grundskola ' +
      'years 1–9. From 2028/29 this becomes a 10-year grundskola.',
  },
  costNote:
    'Schooling is free at all levels, including independent friskolor, which are funded by a school ' +
    'voucher and may not charge fees. Preschool fees are capped nationally by the maxtaxa (figures ' +
    'from 1 July 2026). Higher education is free for Swedish, EU/EEA and Swiss citizens.',
  lines: [
    { id: 'fsk', name: 'Förskola', color: '#7C8A93', lane: 0,
      desc: 'Preschool from age 1. Municipalities must offer a place within four months of ' +
        'application. Fees are income-related and capped by the national maxtaxa; from the autumn ' +
        'of the year a child turns 3 there are 525 free hours a year (allmän förskola).' },
    { id: 'fklass', name: 'Förskoleklass', color: '#E2557B', lane: 0, from: 'se-fsk2',
      desc: 'Compulsory, free preschool class at age 6, usually in the same building as the school. ' +
        'Due to be replaced by year 1 of a 10-year grundskola from 2028/29.' },
    { id: 'grund', name: 'Grundskola', color: '#1E66C9', lane: 0, from: 'se-fklass',
      desc: 'Compulsory comprehensive school, years 1–9: lågstadiet (1–3), mellanstadiet (4–6) ' +
        'and högstadiet (7–9). No streaming. Grades (A–F) start in year 6, and national tests are ' +
        'taken in years 3, 6 and 9. Free school lunches for all pupils.' },
    { id: 'hf', name: 'Högskoleförberedande', color: '#7A3E9D', lane: -1, from: 'se-g9',
      desc: 'Six higher-education-preparatory national programmes: economics, arts, humanities, ' +
        'natural science, social science and technology. Three years, ending in a ' +
        'högskoleförberedande examen. Since July 2025 (Gy25) students get subject grades (ämnesbetyg) ' +
        'instead of course grades.' },
    { id: 'uni', name: 'Universitet / högskola', color: '#4B2470', lane: -1, from: 'se-hf3',
      desc: 'Universities and university colleges. Admission through a national application ' +
        '(antagning.se) by grades or by the Swedish Scholastic Aptitude Test (högskoleprovet). ' +
        'Kandidatexamen (3 yrs, 180 credits), master (1–2 yrs) and doctorate (4 yrs). Professional ' +
        'degrees such as medicine, engineering and teaching are longer integrated programmes.' },
    { id: 'yrk', name: 'Yrkesprogram', color: '#DD7710', lane: 1, from: 'se-g9',
      desc: 'Twelve vocational national programmes (e.g. electricity and energy, vehicles and ' +
        'transport, building, health and social care, child and leisure). Three years, with at least ' +
        '15 weeks of workplace-based learning; they can also be taken as an apprenticeship ' +
        '(gymnasial lärlingsutbildning). Since autumn 2023 the programmes include the courses for ' +
        'basic university eligibility unless the student opts out.' },
    { id: 'yh', name: 'Yrkeshögskola', color: '#A85A0A', lane: 1, from: 'se-yrk3',
      desc: 'Higher vocational education: employer-designed programmes of usually 1–2 years with ' +
        'about a quarter of the time as workplace learning (LIA). Free of charge and eligible for ' +
        'student finance.' },
    { id: 'intro', name: 'Introduktionsprogram', color: '#2C9546', lane: 2, from: 'se-g9',
      desc: 'Four introduction programmes for pupils not yet eligible for a national programme: ' +
        'programme-oriented option (IMV), vocational introduction (IMY), individual alternative (IMA) ' +
        'and language introduction (IMS) for newly arrived students.' },
    { id: 'komvux', name: 'Komvux', color: '#00A0A6', lane: 2, from: 'se-intro',
      desc: 'Municipal adult education at basic and upper-secondary level, including vocational ' +
        'courses (yrkesvux) and Swedish for immigrants (sfi). Free, with a right to study ' +
        'upper-secondary courses needed for university eligibility.' },
  ],
  stations: [
    { id: 'se-fsk1', line: 'fsk', name: 'Förskola', local: 'Förskola (1–3 år)', ages: [1, 3], isced: 0,
      desc: 'Most children start at about 1, after parental leave (480 days shared between parents). ' +
        'More than 9 in 10 children aged 1–5 attend.',
      cost: { amount: 18564, note: 'Maxtaxa from July 2026: 3% of household income, at most 1,547 kr/month for the first child; less for siblings.', src: 0 } },
    { id: 'se-fsk2', line: 'fsk', name: 'Allmän förskola', local: 'Förskola (3–5 år)', ages: [3, 6], isced: 0,
      desc: 'From the autumn term of the year the child turns 3, every child has 525 free hours a ' +
        'year (allmän förskola, about 15 hours a week); fees for longer days are reduced accordingly.',
      cost: { amount: 18564, note: 'At most the maxtaxa (1,547 kr/month), minus the 525 free hours a year; households under 10,001 kr/month pay nothing.', src: 0 } },
    { id: 'se-fklass', line: 'fklass', name: 'F-klass', local: 'Förskoleklass', ages: [6, 7], isced: 0,
      desc: 'Compulsory since 2018, starting in the autumn of the year the child turns 6. Play-based ' +
        'learning with a mandatory screening (kartläggning) of language and maths skills.',
      events: ['Skolstart (August)', 'Kartläggning in language and maths'],
      cost: { amount: 0, note: 'Free, including lunch.' } },
    { id: 'se-g12', line: 'grund', name: 'Years 1–2', local: 'Årskurs 1–2 (lågstadiet)', ages: [7, 9], isced: 1,
      desc: 'Lågstadiet with a class teacher. A reading, writing and maths guarantee (läsa-skriva-' +
        'räkna-garantin) requires early checks and support. English starts in the early years.',
      cost: { amount: 0, note: 'Free, including lunch, in municipal and independent schools.' } },
    { id: 'se-g3', line: 'grund', name: 'Year 3', local: 'Årskurs 3', ages: [9, 10], isced: 1,
      desc: 'First national tests (nationella prov) in Swedish and maths, taken between March and ' +
        'May. In 2025/26 all compulsory-school tests were on paper; digitalisation has been postponed.',
      events: ['National tests, Swedish & maths (Mar–May)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'se-g45', line: 'grund', name: 'Years 4–5', local: 'Årskurs 4–5 (mellanstadiet)', ages: [10, 12], isced: 1,
      desc: 'Mellanstadiet. Subject teaching gradually increases.',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'se-g6', line: 'grund', name: 'Year 6', local: 'Årskurs 6', ages: [12, 13], isced: 1,
      desc: 'Grades (A–F) are given for the first time. National tests in Swedish, English and maths ' +
        '(in 2026: late March to early May). A modern language (moderna språk) usually starts in ' +
        'year 6.',
      events: ['First grades (A–F)', 'National tests, Swedish, English, maths (Mar–May)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'se-g78', line: 'grund', name: 'Years 7–8', local: 'Årskurs 7–8 (högstadiet)', ages: [13, 15], isced: 2,
      desc: 'Högstadiet with subject teachers. Practical work experience (prao) is compulsory.',
      events: ['Prao work experience'],
      share: { pct: 16, of: 'of grundskola pupils attend an independent friskola (2023/24)', src: 3 },
      cost: { amount: 0, note: 'Free; friskolor are funded by the municipal school voucher and may not charge fees.', src: 3 } },
    { id: 'se-g9', line: 'grund', name: 'Year 9', local: 'Årskurs 9', ages: [15, 16], isced: 2,
      desc: 'National tests in Swedish, English and maths. ' +
        'Final grades give a merit value (meritvärde, the best 16 or 17 subjects, max 340), used for ' +
        'upper-secondary admission. Applications open in January–February; pass grades in Swedish, ' +
        'English and maths plus 5–9 other subjects are needed for a national programme.',
      exam: 'Slutbetyg (final grades)',
      events: ['Gymnasium application (Jan–Feb)', 'National tests (spring)', 'Final grades (June)'],
      cost: { amount: 0, note: 'Free.' } },
    // Higher-education-preparatory programmes
    { id: 'se-hf1', line: 'hf', name: 'Year 1', local: 'Gymnasiet år 1', ages: [16, 17], isced: 3,
      desc: 'Common core subjects plus programme subjects. Students may choose a programme anywhere ' +
        'in the country, at a municipal or an independent school.',
      share: { pct: 59, of: 'of upper-secondary students are on a higher-education-preparatory programme (2025/26)', src: 2 },
      cost: { amount: 0, note: 'Free; laptops and books are usually lent by the school.' } },
    { id: 'se-hf2', line: 'hf', name: 'Year 2', local: 'Gymnasiet år 2', ages: [17, 18], isced: 3,
      desc: 'Specialisation (inriktning) within the programme.',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'se-hf3', line: 'hf', name: 'Year 3', local: 'Gymnasiet år 3', ages: [18, 19], isced: 3,
      desc: 'Diploma project (gymnasiearbete) and national tests in Swedish, English and maths. ' +
        'Graduation (studenten) in early June is a major celebration. Almost a third of ' +
        'upper-secondary students attend an independent school.',
      exam: 'Högskoleförberedande examen', events: ['Gymnasiearbete', 'Studenten (June)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'se-ba', line: 'uni', name: 'Kandidat', local: 'Kandidatexamen', ages: [19, 22], isced: 6,
      desc: 'Apply by 15 April for the autumn (15 October for spring). Places are split between ' +
        'grade-based quotas and the högskoleprov (held in April and October; fee 550 kr). Many ' +
        'students start after a gap year. Generous student finance (CSN grants and loans).',
      exam: 'Kandidatexamen (180 hp)', events: ['Application deadline 15 April', 'Högskoleprovet (Apr/Oct)'],
      cost: { amount: 0, note: 'No tuition for Swedish, EU/EEA and Swiss citizens; others have paid fees since 2011. Union membership is voluntary.', src: 7 } },
    { id: 'se-ma', line: 'uni', name: 'Master', local: 'Magister / masterexamen', ages: [22, 24], isced: 7,
      desc: 'One-year magister (60 hp) or two-year master (120 hp).', exam: 'Masterexamen (120 hp)',
      cost: { amount: 0, note: 'Free for Swedish and EU/EEA students.', src: 7 } },
    { id: 'se-phd', line: 'uni', name: 'Doktor', local: 'Doktorsexamen', ages: [24, 28], isced: 8,
      desc: 'Four years of full-time study, normally as a salaried doctoral employee ' +
        '(doktorandanställning).', exam: 'Doktorsexamen (240 hp)',
      cost: { amount: 0, note: 'Free; doctoral students are usually employed and paid a salary.' } },
    // Vocational programmes
    { id: 'se-yrk1', line: 'yrk', name: 'Year 1', local: 'Yrkesprogram år 1', ages: [16, 17], isced: 3,
      desc: 'Vocational subjects from the start, plus Swedish, English, maths and other core ' +
        'subjects. The largest programmes are electricity and energy, vehicles and transport, and ' +
        'building and construction.',
      share: { pct: 31, of: 'of upper-secondary students are on a vocational programme (2025/26)', src: 2 },
      cost: { amount: 0, note: 'Free; work clothes and tools are usually provided.' } },
    { id: 'se-yrk2', line: 'yrk', name: 'Year 2', local: 'Yrkesprogram år 2', ages: [17, 18], isced: 3,
      desc: 'Workplace-based learning (APL) of at least 15 weeks over the programme; apprentices ' +
        'spend at least half their time at a workplace.',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'se-yrk3', line: 'yrk', name: 'Year 3', local: 'Yrkesprogram år 3', ages: [18, 19], isced: 3,
      desc: 'Diploma project (gymnasiearbete). The vocational diploma qualifies for work; with the ' +
        'basic-eligibility courses (included unless opted out) it also qualifies for university.',
      exam: 'Yrkesexamen', events: ['Studenten (June)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'se-yh', line: 'yh', name: 'YH', local: 'Yrkeshögskola', ages: [20, 22], isced: 5,
      desc: 'Programmes in fields such as IT, construction management, healthcare and logistics. ' +
        'Most students are a few years past upper secondary.',
      exam: 'Yrkeshögskoleexamen',
      cost: { amount: 0, note: 'Free of charge.' } },
    // Introduction programmes and adult education
    { id: 'se-intro', line: 'intro', name: 'Intro', local: 'Introduktionsprogram', ages: [16, 18], isced: 2,
      desc: 'Individual plans to reach eligibility for a national programme or to enter work. ' +
        'Language introduction (IMS) teaches Swedish to newly arrived young people.',
      share: { pct: 10, of: 'of upper-secondary students are on an introduction programme (2025/26)', src: 2 },
      cost: { amount: 0, note: 'Free.' } },
    { id: 'se-komvux', line: 'komvux', name: 'Komvux', local: 'Kommunal vuxenutbildning', ages: [20, 22], isced: 3,
      desc: 'From the second half of the year a person turns 20 (or after upper secondary). Courses ' +
        'are flexible, often part-time or online, and lead to a gymnasieexamen or eligibility for ' +
        'higher education or yrkeshögskola.',
      exam: 'Gymnasieexamen / course grades',
      cost: { amount: 0, note: 'Free; course books may cost extra.' } },
  ],
  transfers: [
    { from: 'se-intro', to: 'se-yrk1', label: 'Intro → national programme', desc: 'Pupils who reach the required grades move on to a national programme, often a vocational one.' },
    { from: 'se-yrk3', to: 'se-ba', label: 'Yrkesexamen → university', desc: 'Vocational students who keep the basic-eligibility courses (Swedish, English) can apply to university.' },
    { from: 'se-hf3', to: 'se-yh', label: 'Gymnasium → YH', desc: 'Yrkeshögskola is open to graduates of all programmes.' },
    { from: 'se-komvux', to: 'se-ba', label: 'Komvux → university', desc: 'Adults complete missing courses at komvux, or take the högskoleprov, to qualify for university.' },
    { from: 'se-yh', to: 'se-ba', label: 'YH → university', desc: 'YH graduates with basic eligibility can apply to university; credit transfer is decided case by case.' },
  ],
  sources: [
    { title: 'Skolverket — Statsbidrag för maxtaxa 2026 (fee caps from 1 July 2026)', url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-maxtaxa-2026' },
    { title: 'Regeringen — Prop. 2024/25:143 En tioårig grundskola', url: 'https://www.regeringen.se/rattsliga-dokument/proposition/2025/03/prop.-202425143' },
    { title: 'Skolverket — Elever i gymnasieskolan läsåret 2025/26 (beskrivande statistik)', url: 'https://www.skolverket.se/download/18.4a4f973719c9357f7ba26278/1772531020461/pdf13382.pdf' },
    { title: 'Skolverket — Elever och skolenheter i grundskolan läsåret 2023/24', url: 'https://www.skolverket.se/download/18.954e82318e64549b9f1d/1711120454132/pdf12612.pdf' },
    { title: 'Eurydice — Sweden overview', url: 'https://eurydice.eacea.ec.europa.eu/eurypedia/sweden/overview' },
    { title: 'Regeringen — Regeringen sänker avgiften för förskolan (January 2026)', url: 'https://www.regeringen.se/pressmeddelanden/2026/01/regeringen-sanker-avgiften-for-forskolan/' },
    { title: 'Stockholms universitet — Högskoleprovet (dates and fee)', url: 'https://www.su.se/utbildning/anmalan-och-antagning/hogskoleprovet' },
    { title: 'University Admissions in Sweden — Who is required to pay fees', url: 'https://www.universityadmissions.se/en/fees-scholarships-residence-permit/who-is-required-to-pay-fees/' },
    { title: 'Skolverket — Grundläggande högskolebehörighet på yrkesprogram', url: 'https://www.skolverket.se/download/18.6f6ae58318ea10d6df01/1712122626099/Grundlaggande-hogskolebehorighet-pa-yrkesprogram-ppt-fran-webbinariet-2.pdf' },
  ],
};
