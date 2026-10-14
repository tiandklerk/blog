// Poland — national system run by the Ministry of National Education (MEN) and,
// for universities, the Ministry of Science and Higher Education. Structure since the
// 2017 reform, which abolished the gimnazjum and restored the 8-year primary school.
export default {
  id: 'pl',
  iso3: 'POL',
  region: 'Europe',
  currency: 'PLN',
  name: 'Poland',
  localName: 'Polska',
  flag: '🇵🇱',
  summary:
    'Nursery (żłobek) to 3 and preschool (przedszkole) to 6, with a compulsory preschool year ' +
    '("zerówka") at 6. Everyone then attends the same 8-year primary school (szkoła podstawowa), ' +
    'ending in the national eighth-grade exam, whose points decide admission at about 15 to a ' +
    '4-year general liceum, a 5-year technikum (vocational diploma plus matura) or a 3-year ' +
    'branżowa szkoła I stopnia (trade school). The matura gives access to higher education: ' +
    'first-cycle (licencjat / inżynier), second-cycle (magister) or 5–6-year long-cycle master ' +
    'programmes, then doctoral schools. Full-time study at public universities is free.',
  ageNote:
    'Children are grouped by calendar year of birth: they start grade 1 in September of the year ' +
    'they turn 7 (parents may opt for 6 if the child attended preschool or has a positive ' +
    'readiness opinion). The compulsory preschool year falls in the year they turn 6. ' +
    'The school year runs from 1 September to late June.',
  compulsory: {
    from: 6,
    to: 15,
    label: 'Zerówka + obowiązek szkolny 6–15',
    note:
      'One year of preschool preparation is compulsory at 6. Obowiązek szkolny then lasts until ' +
      'the end of primary school (at most until 18).',
    extendedTo: 18,
    extendedLabel: 'Obowiązek nauki to 18',
    extendedNote:
      'After primary school, learning is compulsory until 18 in a secondary school, or through ' +
      'vocational training with an employer or courses.',
  },
  costNote:
    'Public schools and full-time study at public universities are free. Parents pay for meals ' +
    'and for preschool hours beyond the free 5 a day; nursery fees are largely offset by a ' +
    'state benefit. Figures for 2025/26.',
  lines: [
    { id: 'zlobek', name: 'Żłobek', color: '#7C8A93', lane: 0,
      desc: 'Nurseries and children\'s clubs (kluby dziecięce) for children from 20 weeks to 3 years, ' +
        'run by municipalities or private providers. Not compulsory.' },
    { id: 'przed', name: 'Przedszkole', color: '#E2557B', lane: 0, from: 'pl-zlobek',
      desc: 'Preschool for 3- to 6-year-olds. Every 3-, 4- and 5-year-old has a right to a place; ' +
        'the year at 6 ("zerówka", roczne przygotowanie przedszkolne) is compulsory and may be ' +
        'in a preschool or a "class 0" at a primary school. About 97% of 3–6-year-olds attended in 2024.' },
    { id: 'sp', name: 'Szkoła podstawowa', color: '#D2322D', lane: 0, from: 'pl-zero',
      desc: '8-year primary school: integrated early education in grades 1–3 with one teacher, ' +
        'subject teaching in grades 4–8. From September 2026 the "Kompas Jutra" reform brings a ' +
        'new core curriculum, starting with preschool and grades 1 and 4.' },
    { id: 'lo', name: 'Liceum', color: '#7A3E9D', lane: -1, from: 'pl-k8',
      desc: 'Liceum ogólnokształcące: 4-year general secondary school with 2–3 subjects at an ' +
        'extended level (profile classes), ending in the matura.' },
    { id: 'uni', name: 'Studia', color: '#4B2470', lane: -1, from: 'pl-lo4',
      desc: 'Two-cycle studies: first cycle (licencjat 3 years, inżynier 3.5–4 years), second cycle ' +
        '(magister, 1.5–2 years), then a doctoral school. Admission is by matura results.' },
    { id: 'jm', name: 'Long-cycle master', color: '#B0306A', lane: -2, from: 'pl-lo4',
      desc: 'Jednolite studia magisterskie: 5–6-year single-cycle master in medicine (6 years), ' +
        'dentistry, pharmacy, law, psychology, veterinary science, architecture-related fields ' +
        'and teacher training for early years.' },
    { id: 'tech', name: 'Technikum', color: '#DD7710', lane: 1, from: 'pl-k8',
      desc: '5-year technical secondary school combining general education with an occupation ' +
        '(IT, mechatronics, logistics, hospitality…). Students take vocational qualification exams ' +
        'during their studies and can take the matura at the end.' },
    { id: 'bs', name: 'Branżowa szkoła', color: '#2C9546', lane: 2, from: 'pl-k8',
      desc: 'Branżowa szkoła I stopnia: 3-year trade school (often with practical training at an ' +
        'employer as a young worker) leading to a skilled-worker qualification. Graduates can ' +
        'continue in a 2-year branżowa szkoła II stopnia (technician level, with a matura option) ' +
        'or in a liceum for adults from grade 2.' },
  ],
  stations: [
    { id: 'pl-zlobek', line: 'zlobek', name: 'Żłobek', local: 'Żłobek / klub dziecięcy', ages: [1, 3], isced: 0,
      desc: 'Places are limited, especially in small towns. Since October 2024 the "Aktywny ' +
        'Rodzic" programme pays working parents up to 1,500 zł a month ("Aktywnie w żłobku") ' +
        'towards the fee, replacing the earlier 400 zł subsidy.',
      cost: { amount: 0, note: 'Fees are covered up to 1,500 zł/month by the state benefit, so most municipal places cost parents only meals.', src: 4 } },
    { id: 'pl-przed', line: 'przed', name: 'Przedszkole', local: 'Wychowanie przedszkolne (3–5 lat)', ages: [3, 6], isced: 0,
      desc: 'Five hours a day are free in public preschools; extra hours cost at most about 1.4 ' +
        'zł each (1.44 zł from September 2024; re-indexed only after cumulative inflation exceeds 5%).' +
        ' Children aged 6 pay no fees for extra hours.',
      cost: { amount: 0, note: '5 hours a day free; extra hours about 1.4 zł/hour, plus meals.', src: 5 } },
    { id: 'pl-zero', line: 'przed', name: 'Zerówka', local: 'Roczne przygotowanie przedszkolne', ages: [6, 7], isced: 0,
      desc: 'The compulsory preschool year at age 6, in a preschool or a "class 0" in a primary ' +
        'school. Focus on school readiness; a readiness diagnosis is given to parents in April.',
      events: ['School-readiness information for parents (April)'],
      cost: { amount: 0, note: 'Free; 6-year-olds pay no fees for extra hours.', src: 5 } },
    { id: 'pl-k13', line: 'sp', name: 'Klasy 1–3', local: 'Edukacja wczesnoszkolna', ages: [7, 10], isced: 1,
      desc: 'Integrated early-school education with one class teacher and descriptive (not ' +
        'numerical) assessment in grades 1–3. A foreign language (usually English) is taught from grade 1.',
      cost: { amount: 0, note: 'Free in public schools; free textbooks.' } },
    { id: 'pl-k46', line: 'sp', name: 'Klasy 4–6', ages: [10, 13], isced: 1,
      desc: 'Subject teaching and grades on a 1–6 scale begin in grade 4, with a new set of ' +
        'subject teachers.',
      cost: { amount: 0, note: 'Free in public schools; free textbooks.' } },
    { id: 'pl-k7', line: 'sp', name: 'Klasa 7', ages: [13, 14], isced: 2,
      desc: 'Lower-secondary stage of primary school (ISCED 2): a second foreign language, ' +
        'physics and chemistry are added; careers guidance begins.',
      cost: { amount: 0, note: 'Free in public schools; free textbooks.' } },
    { id: 'pl-k8', line: 'sp', name: 'Klasa 8', ages: [14, 15], isced: 2,
      desc: 'Pupils must sit the eighth-grade exam in Polish, maths and a foreign language (11–13 ' +
        'May in 2026; results in early July). There is no pass mark, but exam points and ' +
        'certificate grades decide admission to secondary schools through electronic recruitment ' +
        'in May–July.',
      exam: 'Egzamin ósmoklasisty',
      events: ['Eighth-grade exam (May)', 'Secondary-school applications (May–June)', 'Results and admission lists (July)'],
      cost: { amount: 0, note: 'Free; no exam fee.' } },
    { id: 'pl-lo13', line: 'lo', name: 'Klasy 1–3', local: 'Liceum, klasy 1–3', ages: [15, 18], isced: 3,
      desc: 'Profile classes (e.g. biology-chemistry, maths-physics, humanities) with extended-level ' +
        'subjects chosen at entry. Popular city licea are highly selective.',
      share: { pct: 46.6, of: 'of 2023/24 graduates of upper-secondary schools for youth were from licea', src: 3 },
      cost: { amount: 0, note: 'Free in public schools.' } },
    { id: 'pl-lo4', line: 'lo', name: 'Klasa 4', ages: [18, 19], isced: 3,
      desc: 'The matura in May: compulsory written Polish, maths and a foreign language at basic ' +
        'level, oral Polish and foreign language, and at least one subject at extended level; ' +
        '30% is needed in each compulsory exam. Results in early July; universities rank ' +
        'applicants by matura scores.',
      exam: 'Matura (świadectwo dojrzałości)',
      events: ['Matura written and oral exams (May)', 'Matura results (early July)', 'University admissions (June–September)'],
      cost: { amount: 0, note: 'Free; the first matura attempt has no fee.' } },
    { id: 'pl-lic', line: 'uni', name: 'I stopień', local: 'Studia I stopnia (licencjat / inżynier)', ages: [19, 22], isced: 6,
      desc: 'Licencjat (3 years, 180+ ECTS) or inżynier (3.5–4 years). Full-time (stacjonarne) ' +
        'study is free at public universities; part-time (niestacjonarne, weekend) study is paid.',
      exam: 'Licencjat / inżynier',
      cost: { amount: 0, note: 'Full-time study at public universities is free; part-time and private study charge fees.', src: 6 } },
    { id: 'pl-mgr', line: 'uni', name: 'II stopień', local: 'Studia II stopnia (magister)', ages: [22, 24], isced: 7,
      desc: 'Second-cycle master of 1.5–2 years (90–120 ECTS), ending in a thesis and diploma exam.',
      exam: 'Magister',
      cost: { amount: 0, note: 'Free full-time at public universities.', src: 6 } },
    { id: 'pl-doc', line: 'uni', name: 'Szkoła doktorska', ages: [24, 28], isced: 8,
      desc: 'Since the 2018 "Law 2.0" reform, doctorates are earned in doctoral schools (3–4 years) ' +
        'with a competitive entry, a mid-term evaluation and a monthly stipend for all doctoral ' +
        'students. An "extramural" route for employed researchers also exists.',
      exam: 'Doktor',
      cost: { amount: 0, note: 'Free; all doctoral-school students receive a stipend.', src: 6 } },
    { id: 'pl-jm', line: 'jm', name: 'Jednolite magisterskie', local: 'Jednolite studia magisterskie', ages: [19, 24], isced: 7,
      desc: 'Single-cycle master of 5 years (6 for medicine). Medicine admissions are among the ' +
        'most competitive, based on extended biology and chemistry matura results.',
      exam: 'Magister / lekarz',
      cost: { amount: 0, note: 'Free full-time at public universities.', src: 6 } },
    { id: 'pl-t14', line: 'tech', name: 'Klasy 1–4', local: 'Technikum, klasy 1–4', ages: [15, 19], isced: 3,
      desc: 'General subjects plus vocational training and work placements. Students take state ' +
        'vocational qualification exams (egzamin zawodowy) during the course.',
      share: { pct: 35.8, of: 'of 2023/24 graduates of upper-secondary schools for youth were from technika', src: 3 },
      events: ['Vocational qualification exams (January or June)'],
      cost: { amount: 0, note: 'Free in public schools.' } },
    { id: 'pl-t5', line: 'tech', name: 'Klasa 5', ages: [19, 20], isced: 3,
      desc: 'The technician diploma requires passing all qualification exams and the placements. ' +
        'Most students also take the matura in May, opening university entry.',
      exam: 'Dyplom technika + matura',
      events: ['Matura (May)'],
      cost: { amount: 0, note: 'Free in public schools.' } },
    { id: 'pl-bs1', line: 'bs', name: 'I stopnia', local: 'Branżowa szkoła I stopnia', ages: [15, 18], isced: 3,
      desc: 'Three years; many students are young workers trained by an employer (craft ' +
        'apprenticeships) and attend school part of the week. About 212,000 students in 2024/25. ' +
        'Ends with a vocational exam for one qualification.',
      exam: 'Świadectwo + dyplom zawodowy',
      cost: { amount: 0, note: 'Free in public schools; young workers get a training wage.' } },
    { id: 'pl-bs2', line: 'bs', name: 'II stopnia', local: 'Branżowa szkoła II stopnia', ages: [18, 20], isced: 3,
      desc: 'Two years, often part-time, adding a second qualification to reach technician level. ' +
        'Graduates can take the matura (vocational matura route). Eurydice classifies it as upper ' +
        'secondary (ISCED 3).',
      exam: 'Dyplom technika / matura',
      cost: { amount: 0, note: 'Free in public schools.' } },
  ],
  transfers: [
    { from: 'pl-t5', to: 'pl-lic', label: 'Technikum → studia', desc: 'Technikum graduates with the matura apply to universities on the same terms, often to engineering programmes.' },
    { from: 'pl-bs2', to: 'pl-lic', label: 'Branżowa II + matura → studia', desc: 'With a matura, graduates of branżowa szkoła II stopnia can enter higher education.' },
    { from: 'pl-bs1', to: 'pl-lo4', label: 'Branżowa → liceum for adults', desc: 'Trade-school graduates can enter a liceum for adults from grade 2 and take the matura.' },
    { from: 'pl-jm', to: 'pl-doc', label: 'Long-cycle → doctorate', desc: 'A long-cycle master gives access to doctoral schools.' },
  ],
  sources: [
    { title: 'Eurydice — Poland: overview of the education system', url: 'https://eurydice.eacea.ec.europa.eu/eurypedia/poland/overview' },
    { title: 'Ministry of National Education (MEN) — gov.pl/edukacja', url: 'https://www.gov.pl/web/edukacja' },
    { title: 'Centralna Komisja Egzaminacyjna (CKE) — egzamin ósmoklasisty and matura', url: 'https://cke.gov.pl/' },
    { title: 'Prawo.pl — GUS: Oświata i wychowanie w roku szkolnym 2024/25', url: 'https://www.prawo.pl/oswiata/liczba-uczniow-w-polsce-2025,535575.html' },
    { title: 'gov.pl — Aktywny Rodzic (Aktywnie w żłobku)', url: 'https://www.gov.pl/web/rodzina/aktywny-rodzic' },
    { title: 'Portal Oświatowy — Opłaty za przedszkole (waloryzacja, 1.44 zł)', url: 'https://www.portaloswiatowy.pl/zmiany-w-prawie-oswiatowym/oplaty-za-przedszkole-moga-byc-wyzsze-24582.html' },
    { title: 'Eurydice — Poland: higher education (Law on Higher Education and Science 2018)', url: 'https://eurydice.eacea.ec.europa.eu/eurypedia/poland/higher-education' },
    { title: 'PAP — Kompas Jutra: new core curriculum from 2026/27', url: 'https://www.pap.pl/aktualnosci/rok-szkolny-20252026-dla-czesci-uczniow-ostatni-rok-z-dotychczasowa-podstawa-programowa' },
    { title: 'Forsal — Egzamin ósmoklasisty 2026: terminy (CKE)', url: 'https://forsal.pl/lifestyle/edukacja/artykuly/11235757,egzamin-osmoklasisty-2026-terminy-harmonogram-wyniki-i-arkusze-cke.html' },
  ],
};
