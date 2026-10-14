// Denmark — ten years of compulsory education (0.–9. klasse) in the comprehensive folkeskole,
// then gymnasium or vocational education. Big upper-secondary reform (epx) due in 2030.
export default {
  id: 'dk',
  iso3: 'DNK',
  region: 'Europe',
  currency: 'DKK',
  name: 'Denmark',
  localName: 'Danmark',
  flag: '🇩🇰',
  summary:
    'Municipal day care (dagpleje or vuggestue, then børnehave) is followed by ten years of ' +
    'compulsory education from 6: a reception year (0. klasse) and grades 1–9 in the comprehensive ' +
    'folkeskole, with no streaming. Many pupils add an optional 10th year, often at a boarding ' +
    '"continuation school" (efterskole). At about 16 young people choose a three-year gymnasium ' +
    '(stx, hhx or htx), the two-year hf, or vocational education (EUD/EUX) that alternates school ' +
    'with paid placements. Higher education is split between business academies, university ' +
    'colleges (professionsbachelor) and universities, is free for Danish and EU/EEA students, and ' +
    'comes with a universal state grant (SU).',
  ageNote:
    'Children start 0. klasse in August of the year they turn 6, so classes follow birth years; ' +
    'parents can apply to defer a year. Many students take one or more gap years (sabbatår) ' +
    'before higher education. From August 2030 a new two-year vocationally oriented gymnasium ' +
    '(epx) is due to replace hf, eux, 10. klasse and the first part of the vocational basic course.',
  compulsory: {
    from: 6,
    to: 16,
    label: 'Undervisningspligt 6–16',
    note:
      'Ten years of compulsory education (undervisningspligt), not schooling: 0.–9. klasse at a ' +
      'folkeskole, a free (private) school or at home. 0. klasse has been compulsory since 2009.',
    extendedTo: 18,
    extendedLabel: 'Uddannelsespligt to 18',
    extendedNote: 'Young people aged 15–17 must be in education, work or another agreed activity.',
  },
  costNote:
    'Day care is charged at municipal rates (parents pay at most 25% of the cost; figures are 2026 ' +
    'national averages from Statistics Denmark). All public education is free, including books, and ' +
    'higher education is free for Danish and EU/EEA students. Efterskoler and free schools charge ' +
    'fees after state support.',
  lines: [
    { id: 'dag', name: 'Dagtilbud', color: '#7C8A93', lane: 0,
      desc: 'Municipal day care: childminders (dagpleje) or nurseries (vuggestue) for 0–2-year-olds, ' +
        'kindergarten (børnehave) for 3–5-year-olds. Every child has a place guarantee from 26 ' +
        'weeks. Parents pay at most 25% of operating costs, with sibling and low-income discounts.' },
    { id: 'fs', name: 'Folkeskole', color: '#D2322D', lane: 0, from: 'dk-bh',
      desc: 'Comprehensive municipal school covering 0.–9. klasse, with the same class group for ' +
        'many years and no streaming. About four in five pupils attend a folkeskole; most others go ' +
        'to state-subsidised free or private schools.' },
    { id: 'tiende', name: '10. klasse', color: '#E2557B', lane: 0, from: 'dk-9',
      desc: 'Optional 10th year, at a folkeskole/10th-grade centre or an efterskole. To be ' +
        'replaced by epx from 2030.' },
    { id: 'hf', name: 'hf', color: '#C04BA5', lane: -2, from: 'dk-9',
      desc: 'Højere forberedelseseksamen: two-year general upper secondary, often after 10. klasse ' +
        'and also open to adults. It leads mainly to business-academy and professionsbachelor ' +
        'programmes. To be replaced by epx from 2030.' },
    { id: 'pba', name: 'Professionshøjskole', color: '#8E2C78', lane: -2, from: 'dk-hf',
      desc: 'University colleges (professionshøjskoler) offering professionsbachelor degrees ' +
        '(3–4 years) in teaching, nursing, social work, pedagogy, engineering and more.' },
    { id: 'gym', name: 'Gymnasium', color: '#7A3E9D', lane: -1, from: 'dk-9',
      desc: 'Three-year upper secondary: stx (general), hhx (business) and htx (technical). Entry ' +
        'needs a grade average of at least 5 in 9th/10th grade (or an admission test). All give ' +
        'general admission to higher education.' },
    { id: 'uni', name: 'Universitet', color: '#4B2470', lane: -1, from: 'dk-g3',
      desc: 'Research universities: bachelor (3 years), kandidat (2 years) and PhD (3 years). ' +
        'Admission through optagelse.dk: quota 1 by grade average (deadline 5 July), quota 2 by ' +
        'other criteria (deadline 15 March). Students get the SU grant (7,426 kr/month in 2026 ' +
        'for those living away from home).' },
    { id: 'eud', name: 'EUD / EUX', color: '#DD7710', lane: 1, from: 'dk-9',
      desc: 'Vocational education: a basic course at a vocational college, then a main course ' +
        'alternating school and paid placements with an employer under a training agreement ' +
        '(uddannelsesaftale). About 100 programmes. EUX adds gymnasium subjects and gives general ' +
        'higher-education admission.' },
    { id: 'ak', name: 'Erhvervsakademi', color: '#A85A0A', lane: 1, from: 'dk-hfl',
      desc: 'Business academies: two-year academy profession degrees (erhvervsakademiuddannelse, ' +
        'e.g. IT, marketing, construction technician), which can be topped up to a ' +
        'professionsbachelor in 1–1.5 years.' },
    { id: 'eft', name: 'Efterskole', color: '#2C9546', lane: 2, from: 'dk-78',
      desc: 'Boarding "continuation schools" for 8.–10. klasse, a distinctive Danish tradition. ' +
        'Most pupils go for one year, usually 9th or 10th grade; about 31,000 started in 2026/27.' },
  ],
  stations: [
    { id: 'dk-vug', line: 'dag', name: 'Vuggestue', local: 'Vuggestue / dagpleje', ages: [1, 3], isced: 0,
      desc: 'Most children start at about 10–12 months, after parental leave.',
      cost: { amount: 47191, note: '2026 national average municipal nursery rate; lunch scheme, sibling and low-income discounts vary.', src: 0 } },
    { id: 'dk-bh', line: 'dag', name: 'Børnehave', ages: [3, 6], isced: 0,
      desc: 'Kindergarten with a national pedagogical curriculum. Language assessment at about 3 ' +
        'and before school start.',
      events: ['Language assessment (age 3)'],
      cost: { amount: 26491, note: '2026 national average municipal kindergarten rate before discounts.', src: 0 } },
    { id: 'dk-0', line: 'fs', name: '0. klasse', local: 'Børnehaveklasse', ages: [6, 7], isced: 0,
      desc: 'Compulsory reception year, mainly play-based, with a language screening at the start.',
      events: ['Skolestart (August)'],
      cost: { amount: 0, note: 'Free; after-school club (SFO) is charged separately.' } },
    { id: 'dk-13', line: 'fs', name: '1.–3. klasse', ages: [7, 10], isced: 1,
      desc: 'Class teacher (klasselærer) follows the class. English from 1. klasse. National ' +
        'tests in reading and maths: from 2026/27 the new Folkeskolens Nationale Færdighedstest ' +
        'replaces the transitional tests used since 2022/23.',
      events: ['National tests (autumn)'],
      cost: { amount: 0, note: 'Free, including books.' } },
    { id: 'dk-46', line: 'fs', name: '4.–6. klasse', ages: [10, 13], isced: 1,
      desc: 'Second foreign language (German or French) from 5. klasse.',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'dk-78', line: 'fs', name: '7.–8. klasse', ages: [13, 15], isced: 2,
      desc: 'Grades on the 7-point scale (−3 to 12) start in 8. klasse, with a first assessment ' +
        'of readiness for upper secondary (uddannelsesparathedsvurdering).',
      events: ['Grades from 8. klasse', 'Readiness assessment (8. klasse)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'dk-9', line: 'fs', name: '9. klasse', ages: [15, 16], isced: 2,
      desc: 'Compulsory leaving exams (folkeskolens afgangsprøver) in May–June. Applications to ' +
        'upper secondary go through optagelse.dk by 1 March.',
      exam: 'Folkeskolens afgangsprøve (FP9)',
      events: ['Application by 1 March', 'Leaving exams (May–June)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'dk-10', line: 'tiende', name: '10. klasse', ages: [16, 17], isced: 2,
      desc: 'An optional year to improve grades or try out vocational subjects, with optional FP10 exams.',
      exam: 'FP10 (optional)',
      cost: { amount: 0, note: 'Free at a public school or 10th-grade centre.' } },
    // hf and professionsbachelor
    { id: 'dk-hf', line: 'hf', name: 'hf', local: 'Højere forberedelseseksamen', ages: [16, 18], isced: 3,
      desc: 'Two years, ending in written and oral exams in May–June. Many students start after ' +
        '10. klasse.',
      exam: 'hf-eksamen',
      cost: { amount: 0, note: 'Free; students aged 18+ can get youth SU.' } },
    { id: 'dk-pba', line: 'pba', name: 'PBA', local: 'Professionsbachelor', ages: [19, 22.5], isced: 6,
      desc: 'Professional bachelor of 3–4 years (180–240 ECTS) with long internships, e.g. ' +
        'teacher, nurse, social worker, pedagogue.',
      exam: 'Professionsbachelor',
      cost: { amount: 0, note: 'Free for Danish and EU/EEA students.' } },
    // Gymnasium and university
    { id: 'dk-g1', line: 'gym', name: '1.g', local: '1. g (stx / hhx / htx)', ages: [16, 17], isced: 3,
      desc: 'Starts with a three-month basic course, after which students choose a study ' +
        'specialisation (studieretning).',
      cost: { amount: 0, note: 'Free, including books.' } },
    { id: 'dk-g2', line: 'gym', name: '2.g', ages: [17, 18], isced: 3,
      desc: 'Study specialisation subjects at A level; a major written assignment (SRP/SOP) ' +
        'follows in 3.g.',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'dk-g3', line: 'gym', name: '3.g', ages: [18, 19], isced: 3,
      desc: 'Final exams in May–June; the grade average decides most higher-education ' +
        'admissions. Graduates celebrate in white caps (studenterhue) and on a truck ride.',
      exam: 'Studentereksamen', events: ['Exams (May–June)', 'Studenterkørsel'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'dk-ba', line: 'uni', name: 'Bachelor', ages: [19, 22], isced: 6,
      desc: 'Three years (180 ECTS). Many students start at 20–21 after gap years.',
      exam: 'Bachelor (BA/BSc)',
      cost: { amount: 0, note: 'Free for Danish and EU/EEA students; SU grant of 7,426 kr/month (2026) when living away from home.', src: 5 } },
    { id: 'dk-ka', line: 'uni', name: 'Kandidat', ages: [22, 24], isced: 7,
      desc: 'Two-year master (120 ECTS), traditionally seen as the normal university degree. A ' +
        '2023 reform plans shorter and work-based (erhvervskandidat) master programmes from 2028.',
      exam: 'Kandidat (cand.)',
      cost: { amount: 0, note: 'Free for Danish and EU/EEA students.' } },
    { id: 'dk-phd', line: 'uni', name: 'Ph.d.', ages: [24, 27], isced: 8,
      desc: 'Three-year salaried PhD, or an integrated 4+4 route starting during the kandidat.',
      exam: 'Ph.d.',
      cost: { amount: 0, note: 'Free; PhD students are salaried.' } },
    // Vocational
    { id: 'dk-gf', line: 'eud', name: 'GF', local: 'Grundforløb (GF1 + GF2)', ages: [16, 17], isced: 3,
      desc: 'Basic course at a vocational college: GF1 (20 weeks, straight after 9th/10th grade) ' +
        'and GF2 (20 weeks, aimed at a specific trade). Students then need a training agreement ' +
        'with an employer or a school-based placement (skolepraktik).',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'dk-hfl', line: 'eud', name: 'Hovedforløb', local: 'Hovedforløb (lærling)', ages: [17, 20], isced: 3,
      desc: 'Main course of 1.5–4.5 years, alternating school periods with paid work as an ' +
        'apprentice. Ends with a journeyman test (svendeprøve). EUX students also take ' +
        'gymnasium-level exams.',
      exam: 'Svendebrev / EUX', events: ['Svendeprøve'],
      cost: { amount: 0, note: 'Free; apprentices are paid a wage.' } },
    { id: 'dk-ak', line: 'ak', name: 'AK', local: 'Erhvervsakademiuddannelse', ages: [20, 22], isced: 5,
      desc: 'Two-year academy profession degree (120 ECTS) with an internship. Admission needs a ' +
        'gymnasium exam, EUX or a relevant vocational qualification.',
      exam: 'Erhvervsakademigrad (AK)',
      cost: { amount: 0, note: 'Free for Danish and EU/EEA students.' } },
    // Efterskole
    { id: 'dk-eft', line: 'eft', name: 'Efterskole', ages: [15, 17], isced: 2,
      desc: 'Boarding school year with a profile such as sport, music, arts or outdoor life, ' +
        'ending with the same exams as the folkeskole. Typically 42 weeks.',
      exam: 'FP9 / FP10',
      cost: { amount: 75000, note: 'About; parents typically pay 50,000–100,000 kr a year after income-related state support.', src: 4 } },
  ],
  transfers: [
    { from: 'dk-eft', to: 'dk-g1', label: 'Efterskole → gymnasium', desc: 'Most efterskole pupils go on to a gymnasium or vocational education.' },
    { from: 'dk-10', to: 'dk-gf', label: '10. klasse → EUD', desc: 'After 10. klasse students can enter vocational education or the gymnasium.' },
    { from: 'dk-hf', to: 'dk-ba', label: 'hf → university', desc: 'hf gives access to university, though many programmes need extra subjects at A level.' },
    { from: 'dk-g3', to: 'dk-pba', label: 'Studentereksamen → PBA', desc: 'Gymnasium graduates also go to professionsbachelor programmes.' },
    { from: 'dk-hfl', to: 'dk-ba', label: 'EUX → university', desc: 'EUX gives the same general admission to higher education as the gymnasium.' },
    { from: 'dk-ak', to: 'dk-pba', label: 'AK → top-up bachelor', desc: 'An academy degree can be topped up to a professionsbachelor in 1–1.5 years.' },
    { from: 'dk-pba', to: 'dk-ka', label: 'PBA → kandidat', desc: 'Professionsbachelors can go on to some university kandidat programmes.' },
  ],
  sources: [
    { title: 'Statistics Denmark — RES88: Yearly rates of child-care (2026)', url: 'https://www.statistikbanken.dk/RES88' },
    { title: 'Eurydice — Denmark overview', url: 'https://eurydice.eacea.ec.europa.eu/eurypedia/denmark/overview' },
    { title: 'Børne- og Undervisningsministeriet — Aftale om ny gymnasieuddannelse (epx), 18 Feb 2025', url: 'https://uvm.dk/aktuelt/nyheder/2025/februar/250218-aftale-om-ny-gymnasieuddannelse-paa-plads/' },
    { title: 'Børne- og Undervisningsministeriet — Epx: ikrafttrædelse', url: 'https://uvm.dk/uddannelse-til-unge/gymnasiale-uddannelser/love-og-regler/politiske-aftaler/aftale-om-ny-gymnasieuddannelse/ikrafttraedelse/' },
    { title: 'Efterskoleforeningen — Hvad koster et efterskoleophold?', url: 'https://efterskolerne.dk/for-elever-og-foraeldre/hvad-koster-et-efterskoleophold/' },
    { title: 'Lovguiden — SU-satser for 2026', url: 'https://lovguiden.dk/det-offentlige/su-kontoret/2025-11-11-satser-for-2026' },
    { title: 'Børne- og Undervisningsministeriet — Resultater fra Folkeskolens Nationale Overgangstest 2025/26 (Færdighedstest from 2026/27)', url: 'https://uvm.dk/aktuelt/nyheder/2025/november/251127-resultater-fra-folkeskolens-nationale-overgangstest-20252026-er-nu-offentliggjort/' },
    { title: 'Efterskoleforeningen — efterskolerne.dk (2026/27 intake)', url: 'https://www.efterskolerne.dk/' },
  ],
};
