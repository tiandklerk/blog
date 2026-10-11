// The Netherlands — school system as a metro map.
// Ages are typical ages at the start of each stage (school year starts ~1 September).
export default {
  id: 'nl',
  iso3: 'NLD',
  region: 'Europe',
  currency: 'EUR',
  costNote:
    'School is free from age 4 to 18; parents may be asked for a voluntary contribution. Childcare, mbo ' +
    'for students aged 18+ and higher education charge fees. Figures are for 2026 or the 2026/27 school year.',
  name: 'Netherlands',
  localName: 'Nederland',
  flag: '🇳🇱',
  summary:
    'Eight years of primary school (basisschool, groep 1–8), then an early split at age 12 into ' +
    'three main secondary tracks — vmbo (4 yrs, pre-vocational), havo (5 yrs, senior general) and vwo ' +
    '(6 yrs, pre-university) — plus praktijkonderwijs. Each track feeds a matching tertiary level: ' +
    'vmbo → mbo, havo → hbo (universities of applied sciences), vwo → wo (research universities). ' +
    'Stacking (“stapelen”) between tracks is possible but usually costs an extra year.',
  ageNote:
    'Children may start basisschool the day after their 4th birthday, so a “groep 1” class contains ' +
    'children who joined throughout the year. Ages shown are typical; summer-born children and ' +
    'children who repeat a year (zittenblijven) or skip one shift accordingly.',
  compulsory: {
    from: 5,
    to: 16,
    label: 'Leerplicht 5–16',
    note:
      'Leerplicht starts on the first school day of the month after the 5th birthday and lasts ' +
      'until the end of the school year in which the child turns 16.',
    extendedTo: 18,
    extendedLabel: 'Kwalificatieplicht to 18',
    extendedNote:
      'From 16 to 18 young people must keep studying until they hold a startkwalificatie: a havo or ' +
      'vwo diploma, or an mbo diploma at level 2 or higher.',
  },
  lines: [
    { id: 'early', name: 'Voorschool', color: '#7C8A93', lane: 0,
      desc: 'Childcare and pre-school, not compulsory. Toddlers with a language or development ' +
        'need can get subsidised early-childhood education (VVE).' },
    { id: 'basis', name: 'Basisschool', color: '#D2322D', lane: 0, from: 'nl-pre',
      desc: 'Primary school, groep 1 to 8 (ages 4–12). Groep 1–2 are the kindergarten years. ' +
        'Formal reading and arithmetic start in groep 3. Pupils with additional needs may attend ' +
        'speciaal basisonderwijs (SBO) or speciaal onderwijs (SO).' },
    { id: 'vwo', name: 'vwo', color: '#7A3E9D', lane: -2, from: 'nl-g8',
      desc: 'Voorbereidend wetenschappelijk onderwijs, 6 years (pre-university). Offered as ' +
        'atheneum, or as gymnasium with Latin and Greek. Many schools start with a mixed havo/vwo ' +
        'brugklas (transition year).' },
    { id: 'wo', name: 'wo', color: '#5B2C83', lane: -2, from: 'nl-vwo6',
      desc: 'Wetenschappelijk onderwijs: research universities. Bachelor (3 yrs, 180 EC), then a ' +
        'master (1–3 yrs) and optionally a PhD (promotie, usually 4 yrs as a paid employee).' },
    { id: 'havo', name: 'havo', color: '#1E66C9', lane: -1, from: 'nl-g8',
      desc: 'Hoger algemeen voortgezet onderwijs, 5 years (senior general secondary). ' +
        'Prepares mainly for hbo.' },
    { id: 'hbo', name: 'hbo', color: '#174E9C', lane: -1, from: 'nl-havo5',
      desc: 'Hoger beroepsonderwijs: universities of applied sciences (hogescholen). The bachelor ' +
        'takes 4 years (240 EC). There is also a 2-year Associate degree, and professional masters.' },
    { id: 'vmbo', name: 'vmbo', color: '#DD7710', lane: 1, from: 'nl-g8',
      desc: 'Voorbereidend middelbaar beroepsonderwijs, 4 years (pre-vocational). It is the largest ' +
        'track, with about half of all pupils. There are three learning pathways (leerwegen): ' +
        'basisberoepsgerichte (BB), kaderberoepsgerichte (KB), and the combined ' +
        'gemengde/theoretische leerweg (GL/TL). Pupils can get extra support through ' +
        'leerwegondersteunend onderwijs (lwoo).' },
    { id: 'mbo', name: 'mbo', color: '#2C9546', lane: 2, from: 'nl-vmbo4',
      desc: 'Middelbaar beroepsonderwijs, run by vocational colleges (ROC/vakschool). Levels 1–4 ' +
        'take 0.5 to 4 years. Students follow either the school-based route (BOL, with ' +
        'internships) or the work-based apprenticeship route (BBL, 4 days work + 1 day school).' },
    { id: 'pro', name: 'Praktijkonderwijs', color: '#8B6B4A', lane: 3, from: 'nl-g8',
      desc: 'Practical education for pupils who are not expected to obtain a vmbo diploma. The goal ' +
        'is direct entry into work, with lots of internships, and pupils can earn industry ' +
        'certificates (branchecertificaten). It usually runs from age 12 to 18.' },
  ],
  stations: [
    // Voorschool
    { id: 'nl-kdv', line: 'early', name: 'Kinderopvang', local: 'Kinderdagverblijf', ages: [0, 2], isced: 0,
      desc: 'Day care for babies and toddlers. It is privately run, and working parents get a ' +
        'means-tested childcare allowance (kinderopvangtoeslag).',
      cost: { amount: 3000, note: 'About €3,000 a year for 3 days a week at ~€80k joint income: allowance covers 86% of up to €11.23/h (2026); parents pay the rest', src: 6 } },
    { id: 'nl-pre', line: 'early', name: 'Peuteropvang', local: 'Peuteropvang / VVE', ages: [2, 4], isced: 0,
      desc: 'Pre-school playgroup for 2- to 4-year-olds. Children with a language or development ' +
        'need get vroeg- en voorschoolse educatie (VVE), usually 16 hours a week.',
      cost: { amount: 300, note: 'About €150–630 a year for 8 h/week of municipal peuteropvang, income-based (VNG 2026 table); VVE hours are often free', src: 7 } },
    // Basisschool
    { id: 'nl-g1', line: 'basis', name: 'Groep 1', ages: [4, 5], isced: 0,
      desc: 'Kindergarten year 1 (kleuters). Children may start the day after their 4th birthday, ' +
        'often after a few trial days (wendagen).',
      events: ['Start any time after the 4th birthday', 'Leerplicht begins at age 5'],
      cost: { amount: 0, note: 'Free. Schools may ask a voluntary parental contribution (vrijwillige ouderbijdrage) for trips and extras; children cannot be excluded', src: 8 } },
    { id: 'nl-g2', line: 'basis', name: 'Groep 2', ages: [5, 6], isced: 0,
      desc: 'Kindergarten year 2, focused on play-based learning and getting ready to read. ' +
        'The teacher decides whether a child moves on to groep 3 (sometimes children have a ' +
        '“verlengde kleuterperiode” instead).',
      cost: { amount: 0, note: 'Free. Schools may ask a voluntary parental contribution (vrijwillige ouderbijdrage) for trips and extras; children cannot be excluded', src: 8 } },
    { id: 'nl-g3', line: 'basis', name: 'Groep 3', ages: [6, 7], isced: 1,
      desc: 'Formal reading, writing and arithmetic begin. Progress is tracked with a pupil ' +
        'monitoring system (leerlingvolgsysteem, e.g. Cito/IEP/Boom tests), usually in the middle ' +
        'and at the end of the year.',
      cost: { amount: 0, note: 'Free. Schools may ask a voluntary parental contribution (vrijwillige ouderbijdrage) for trips and extras; children cannot be excluded', src: 8 } },
    { id: 'nl-g4', line: 'basis', name: 'Groep 4', ages: [7, 8], isced: 1,
      desc: 'Fluent reading (technisch lezen), times tables (tafels) and cursive or joined writing.',
      cost: { amount: 0, note: 'Free. Schools may ask a voluntary parental contribution (vrijwillige ouderbijdrage) for trips and extras; children cannot be excluded', src: 8 } },
    { id: 'nl-g5', line: 'basis', name: 'Groep 5', ages: [8, 9], isced: 1,
      desc: 'World orientation subjects (geography, history, nature) become more prominent. Some schools start English here or earlier.',
      cost: { amount: 0, note: 'Free. Schools may ask a voluntary parental contribution (vrijwillige ouderbijdrage) for trips and extras; children cannot be excluded', src: 8 } },
    { id: 'nl-g6', line: 'basis', name: 'Groep 6', ages: [9, 10], isced: 1,
      desc: 'Middle years. Monitoring results from now on feed into the trajectory toward the school advice.',
      cost: { amount: 0, note: 'Free. Schools may ask a voluntary parental contribution (vrijwillige ouderbijdrage) for trips and extras; children cannot be excluded', src: 8 } },
    { id: 'nl-g7', line: 'basis', name: 'Groep 7', ages: [10, 11], isced: 1,
      desc: 'Many schools give an indicative pre-advice (pre-advies / voorlopig perspectief) at the end of groep 7, based on test trends, work attitude and the teacher\'s view.',
      events: ['Pre-advies at many schools (end of year)', 'English is compulsory by groep 7–8'],
      cost: { amount: 0, note: 'Free. Schools may ask a voluntary parental contribution (vrijwillige ouderbijdrage) for trips and extras; children cannot be excluded', src: 8 } },
    { id: 'nl-g8', line: 'basis', name: 'Groep 8', ages: [11, 12], isced: 1,
      desc: 'Final year. The school gives a provisional school advice (voorlopig schooladvies) by ' +
        '31 January, before the national doorstroomtoets. The advice decides which secondary track ' +
        'a pupil can enrol in. If the test result is higher, the school must raise the advice ' +
        'unless that is not in the pupil\'s interest. A lower result never lowers the advice.',
      exam: 'Doorstroomtoets (national transfer test)',
      events: [
        'Provisional advice: 10–31 January',
        'Doorstroomtoets: late January – mid February (2026: 26 Jan – 15 Feb)',
        'Test results to schools: by 15 March',
        'Final school advice: by 24 March',
        'Secondary school registration: late March',
      ],
      cost: { amount: 0, note: 'Free. Schools may ask a voluntary parental contribution (vrijwillige ouderbijdrage) for trips and extras; children cannot be excluded', src: 8 } },
    // vwo
    { id: 'nl-vwo1', line: 'vwo', name: 'vwo 1', local: 'Brugklas', ages: [12, 13], isced: 2,
      desc: 'Transition year (brugklas), often a mixed havo/vwo class. Pupils choose atheneum or gymnasium (Latin and Greek) on entry.',
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 } },
    { id: 'nl-vwo2', line: 'vwo', name: 'vwo 2', ages: [13, 14], isced: 2,
      desc: 'Lower secondary (onderbouw). The school decides on promotion or a switch to havo ' +
        'each year based on report grades.',
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 } },
    { id: 'nl-vwo3', line: 'vwo', name: 'vwo 3', ages: [14, 15], isced: 2,
      desc: 'Last onderbouw year. Pupils choose a subject profile for the upper years: Cultuur & ' +
        'Maatschappij (CM), Economie & Maatschappij (EM), Natuur & Gezondheid (NG) or Natuur & ' +
        'Techniek (NT).',
      events: ['Profile choice (profielkeuze)'],
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 },
      share: { pct: 21.2, of: 'of 3rd-year secondary pupils are in vwo (2024/25); 3.5% are still in mixed havo/vwo classes', src: 13 } },
    { id: 'nl-vwo4', line: 'vwo', name: 'vwo 4', ages: [15, 16], isced: 3,
      desc: 'Start of the upper years (tweede fase/bovenbouw). The school exam (schoolexamen, SE) record begins.',
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 } },
    { id: 'nl-vwo5', line: 'vwo', name: 'vwo 5', ages: [16, 17], isced: 3,
      desc: 'Upper secondary. Students write their profile project (profielwerkstuk) in year 5 or 6.',
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 } },
    { id: 'nl-vwo6', line: 'vwo', name: 'vwo 6', ages: [17, 18], isced: 3,
      desc: 'Final year. The central exams (centraal eindexamen, CE) are in May; the diploma ' +
        'averages the school exam and the CE. It gives access to wo, and to hbo as well.',
      exam: 'vwo diploma (eindexamen)', events: ['Central exams in May', 'Results mid-June'],
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 } },
    // wo
    { id: 'nl-wo-ba', line: 'wo', name: 'Bachelor (wo)', ages: [18, 21], isced: 6,
      desc: 'Three-year academic bachelor (180 EC). In year 1 students get a binding study advice (BSA), ' +
        'often 40–45 of 60 EC, or must leave the programme. Some programmes are selective (numerus ' +
        'fixus, e.g. medicine). The statutory tuition fee (wettelijk collegegeld) for EU/EEA students is €2,694 in 2026–27.',
      exam: 'Bachelor\'s degree (BSc/BA)', events: ['Binding study advice (BSA) end of year 1'],
      cost: { amount: 2694, note: 'Wettelijk collegegeld 2026–27 for EU/EEA students. The half-price first year was abolished from 2024–25', src: 11 } },
    { id: 'nl-wo-ma', line: 'wo', name: 'Master (wo)', ages: [21, 23], isced: 7,
      desc: 'Master: 1 year (60 EC) for most programmes; 2 years for research masters, ' +
        'technical, and teacher programmes; 3 years for medicine.',
      exam: 'Master\'s degree (MSc/MA)',
      cost: { amount: 2694, note: 'Wettelijk collegegeld 2026–27 for EU/EEA students on a first master; second degrees pay a higher institutional fee', src: 11 } },
    { id: 'nl-phd', line: 'wo', name: 'PhD (promotie)', ages: [23, 27], isced: 8,
      desc: 'Usually a 4-year paid position as a PhD candidate (promovendus). The PhD ends with ' +
        'a public defence.', exam: 'Doctorate (dr.)',
      cost: { amount: 0, note: 'No fee: most PhD candidates are salaried university employees (promovendi)' } },
    // havo
    { id: 'nl-havo1', line: 'havo', name: 'havo 1', local: 'Brugklas', ages: [12, 13], isced: 2,
      desc: 'Transition year (brugklas), often combined with vmbo-tl or vwo.',
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 } },
    { id: 'nl-havo2', line: 'havo', name: 'havo 2', ages: [13, 14], isced: 2,
      desc: 'Lower secondary (onderbouw).',
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 } },
    { id: 'nl-havo3', line: 'havo', name: 'havo 3', ages: [14, 15], isced: 2,
      desc: 'Last onderbouw year; students choose a profile (CM, EM, NG or NT).',
      events: ['Profile choice (profielkeuze)'],
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 },
      share: { pct: 22.2, of: 'of 3rd-year secondary pupils are in havo (2024/25)', src: 13 } },
    { id: 'nl-havo4', line: 'havo', name: 'havo 4', ages: [15, 16], isced: 3,
      desc: 'Upper years start, and the school-exam record (SE) begins. Students moving up from ' +
        'vmbo GL/TL join here.',
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 } },
    { id: 'nl-havo5', line: 'havo', name: 'havo 5', ages: [16, 17], isced: 3,
      desc: 'Final year; central exams in May. The diploma gives access to hbo, mbo level 4, or vwo 5.',
      exam: 'havo diploma (eindexamen)', events: ['Central exams in May'],
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 } },
    // hbo
    { id: 'nl-hbo-p', line: 'hbo', name: 'Propedeuse', local: 'hbo year 1', ages: [17, 18], isced: 6,
      desc: 'First (foundation) year of the hbo bachelor, with a binding study advice (BSA). ' +
        'Completing the propedeuse also gives access to many wo bachelors.',
      exam: 'Propedeuse certificate',
      cost: { amount: 2694, note: 'Wettelijk collegegeld 2026–27 for EU/EEA students. The half-price first year was abolished from 2024–25', src: 11 } },
    { id: 'nl-hbo-b', line: 'hbo', name: 'Bachelor (hbo)', ages: [18, 21], isced: 6,
      desc: 'Main phase (hoofdfase) of the 4-year professional bachelor (240 EC), with a long work ' +
        'placement and a final project. The Associate degree is a 2-year alternative (ISCED 5).',
      exam: 'Bachelor\'s degree (BBA, BEng, BEd…)',
      cost: { amount: 2694, note: 'Wettelijk collegegeld 2026–27 for EU/EEA students (full-time); part-time and dual programmes may charge less', src: 11 } },
    { id: 'nl-hbo-m', line: 'hbo', name: 'Master (hbo)', ages: [21, 23], isced: 7,
      desc: 'Professional master, often part-time alongside work (e.g. MEd, MSc in applied fields).',
      exam: 'Master\'s degree',
      cost: { amount: 2694, note: 'Wettelijk collegegeld 2026–27 for funded professional masters; many part-time masters are unfunded and charge more', src: 11 } },
    // vmbo
    { id: 'nl-vmbo1', line: 'vmbo', name: 'vmbo 1', ages: [12, 13], isced: 2,
      desc: 'First year; many schools combine leerwegen or start a vmbo-tl/havo brugklas.',
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 } },
    { id: 'nl-vmbo2', line: 'vmbo', name: 'vmbo 2', ages: [13, 14], isced: 2,
      desc: 'End of the lower years. At the end of the year the pupil\'s leerweg (BB, KB or GL/TL) is fixed.',
      events: ['Choice of profiel for the upper years (e.g. Zorg & Welzijn, Economie & Ondernemen, Bouwen Wonen Interieur…)'],
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 } },
    { id: 'nl-vmbo3', line: 'vmbo', name: 'vmbo 3', ages: [14, 15], isced: 2,
      desc: 'Upper years (bovenbouw). Pupils follow one of 10 vocational profiles (GL/TL pupils ' +
        'take more general subjects), and the school exams begin.',
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 },
      share: { pct: 50.3, of: 'of 3rd-year secondary pupils are in vmbo (2024/25)', src: 13 } },
    { id: 'nl-vmbo4', line: 'vmbo', name: 'vmbo 4', ages: [15, 16], isced: 2,
      desc: 'Final exam year. A BB diploma gives access to mbo level 2; KB and GL/TL give access ' +
        'to mbo levels 3–4. A GL/TL diploma with an extra exam subject gives the right to move to ' +
        'havo 4.',
      exam: 'vmbo diploma (BB / KB / GL / TL)', events: ['Central exams in May'],
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 } },
    // mbo
    { id: 'nl-mbo1', line: 'mbo', name: 'Intake', local: 'mbo year 1', ages: [16, 17], isced: 3,
      desc: 'Entry into an mbo programme at level 1, 2, 3 or 4, chosen by prior diploma. Level 1 ' +
        '(Entree) needs no diploma and takes about a year.',
      cost: { amount: 0, note: 'Free under 18 (on 1 August). From 18, full-time students pay lesgeld of €1,511 (2026/27); BBL students pay cursusgeld', src: 10 } },
    { id: 'nl-mbo2', line: 'mbo', name: 'Level 2', local: 'Basisberoepsopleiding', ages: [17, 18], isced: 3,
      desc: 'Level 2 diploma (1–2 yrs). This is the minimum startkwalificatie.',
      exam: 'mbo-2 diploma (startkwalificatie)',
      cost: { amount: 0, note: 'Free under 18 (on 1 August). From 18, lesgeld of €1,511 a year (2026/27) applies', src: 10 } },
    { id: 'nl-mbo3', line: 'mbo', name: 'Level 3', local: 'Vakopleiding', ages: [18, 19], isced: 3,
      desc: 'Level 3: skilled professional (2–3 yrs).', exam: 'mbo-3 diploma',
      cost: { amount: 1511, note: 'Lesgeld for full-time (BOL) students aged 18+ in 2026/27; BBL cursusgeld is €314 (levels 1–2) or €762 (levels 3–4)', src: 10 } },
    { id: 'nl-mbo4', line: 'mbo', name: 'Level 4', local: 'Middenkader / specialist', ages: [19, 20], isced: 3,
      desc: 'Level 4: middle management or specialist (3–4 yrs). It gives access to hbo.',
      exam: 'mbo-4 diploma',
      cost: { amount: 1511, note: 'Lesgeld for full-time (BOL) students aged 18+ in 2026/27; BBL students pay €762 cursusgeld', src: 10 } },
    // praktijkonderwijs
    { id: 'nl-pro1', line: 'pro', name: 'Praktijkonderwijs', ages: [12, 16], isced: 2,
      desc: 'Small classes and a practical curriculum built around an individual development plan (IOP).',
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 },
      share: { pct: 2.8, of: 'of 3rd-year secondary pupils are in praktijkonderwijs (2024/25)', src: 13 } },
    { id: 'nl-pro2', line: 'pro', name: 'Work placements', local: 'Stage & uitstroom', ages: [16, 18], isced: 2,
      desc: 'Long work placements leading to a job, a sector certificate, or entry to mbo Entree.',
      exam: 'Branchecertificaat / praktijkverklaring',
      cost: { amount: 0, note: 'Free, including most textbooks. Schools may ask a voluntary ouderbijdrage and suggest a laptop, but cannot require either', src: 9 } },
  ],
  transfers: [
    { from: 'nl-vmbo4', to: 'nl-havo4', label: 'vmbo GL/TL → havo 4',
      desc: 'A GL/TL diploma with one extra exam subject gives the right to enter havo 4 (law since 2020). Costs one year compared with going to havo directly.' },
    { from: 'nl-havo5', to: 'nl-vwo5', label: 'havo → vwo 5',
      desc: 'A havo diploma gives the right to enter vwo 5, subject to profile requirements. This adds a year.' },
    { from: 'nl-havo5', to: 'nl-mbo1', label: 'havo → mbo 4',
      desc: 'A havo diploma gives direct access to mbo level 4, often in a shortened route.' },
    { from: 'nl-vwo3', to: 'nl-havo4', label: 'vwo → havo (afstroom)',
      desc: 'Moving down a track is common at the end of year 2 or 3, or after failing vwo 4.' },
    { from: 'nl-mbo4', to: 'nl-hbo-p', label: 'mbo 4 → hbo',
      desc: 'An mbo level 4 diploma gives access to hbo. Some programmes have extra subject requirements.' },
    { from: 'nl-vwo6', to: 'nl-hbo-p', label: 'vwo → hbo',
      desc: 'A vwo diploma also gives access to every hbo programme.' },
    { from: 'nl-hbo-p', to: 'nl-wo-ba', label: 'hbo propedeuse → wo',
      desc: 'A completed hbo propedeuse gives access to many wo bachelors, although extra subject ' +
        'requirements may apply. This is the usual route for havo graduates who want to go to university.' },
    { from: 'nl-hbo-b', to: 'nl-wo-ma', label: 'hbo bachelor → wo master',
      desc: 'Usually via a pre-master (schakelprogramma) of 0.5–1 year.' },
    { from: 'nl-pro2', to: 'nl-mbo1', label: 'pro → mbo Entree',
      desc: 'Pupils can move on to mbo level 1 (Entree), and from there climb the mbo levels.' },
  ],
  sources: [
    { title: 'Rijksoverheid — Schooladvies en doorstroomtoets', url: 'https://www.rijksoverheid.nl/onderwerpen/toelating-middelbare-school' },
    { title: 'DUO — Schooladvies en doorstroomtoets (timeline 2025–2026)', url: 'https://www.duo.nl/zakelijk/primair-onderwijs/leerlingenadministratie/schooladvies-en-doorstroomtoets/index.jsp' },
    { title: 'VO-raad — Data rondom doorstroomtoets en aanmelding 2025–2026', url: 'https://www.vo-raad.nl/nieuws/data-rondom-doorstroomtoets-en-aanmelding-in-het-vo-2025-2026' },
    { title: 'Onderwijsloket — Het Nederlandse onderwijssysteem', url: 'https://www.onderwijsloket.com/kennisbank/' },
    { title: 'Rijksoverheid — Leerplicht en kwalificatieplicht', url: 'https://www.rijksoverheid.nl/onderwerpen/leerplicht' },
    { title: 'Nuffic — Education system the Netherlands', url: 'https://www.nuffic.nl/en/education-systems/the-netherlands' },
    { title: 'Rijksoverheid — Bedragen kinderopvangtoeslag 2026', url: 'https://www.rijksoverheid.nl/onderwerpen/kinderopvangtoeslag/bedragen-kinderopvangtoeslag-2026' },
    { title: 'VNG — Adviestabel ouderbijdrage peuteropvang 2026', url: 'https://vng.nl/nieuws/vng-adviestabel-ouderbijdrage-peuteropvang-2026' },
    { title: 'Rijksoverheid — Is de vrijwillige ouderbijdrage verplicht?', url: 'https://www.rijksoverheid.nl/onderwerpen/financiering-onderwijs/vraag-en-antwoord/is-de-vrijwillige-ouderbijdrage-op-de-basisschool-en-middelbare-school-verplicht' },
    { title: 'Rijksoverheid — Kosten voor mijn kind in het voortgezet onderwijs', url: 'https://www.rijksoverheid.nl/onderwerpen/voortgezet-onderwijs/vraag-en-antwoord/kosten-voor-kind-in-voortgezet-onderwijs' },
    { title: 'Rijksoverheid — Hoogte lesgeld en cursusgeld mbo', url: 'https://www.rijksoverheid.nl/vraag-en-antwoord/middelbaar-beroepsonderwijs/hoogte-lesgeld-en-cursusgeld-mbo' },
    { title: 'Rijksoverheid — Hoogte van het collegegeld (2026–2027: €2,694)', url: 'https://www.rijksoverheid.nl/vraag-en-antwoord/hoger-onderwijs/hoogte-van-het-collegegeld-hogeschool-universiteit' },
    { title: 'Studiekeuze123 — Halvering collegegeld gestopt per 2024–2025', url: 'https://www.studiekeuze123.nl/collegegeld/halvering-collegegeld' },
    { title: 'CBS StatLine — Vo; leerlingen, onderwijssoort, leerjaar (85380NED)', url: 'https://opendata.cbs.nl/statline/#/CBS/nl/dataset/85380NED/table' },
  ],
};
