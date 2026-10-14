// Norway — ten-year comprehensive school, then upper secondary with a general and a
// vocational "2+2" (school + apprenticeship) route.
export default {
  id: 'no',
  iso3: 'NOR',
  region: 'Europe',
  currency: 'NOK',
  name: 'Norway',
  localName: 'Norge',
  flag: '🇳🇴',
  summary:
    'Kindergarten (barnehage) from age 1 at a nationally capped price, then ten years of ' +
    'compulsory comprehensive school from 6: barneskole (years 1–7) and ungdomsskole (years 8–10), ' +
    'with no streaming and no grade repetition. At 16 pupils choose upper secondary ' +
    '(videregående opplæring): a three-year study-preparatory programme or one of ten vocational ' +
    'programmes, usually two years at school and two as a paid apprentice, ending with a trade or ' +
    'journeyman certificate (fagbrev). Vocational students can add a supplementary year (påbygging) ' +
    'to qualify for university. Public universities and university colleges charge no tuition to ' +
    'Norwegian and EU/EEA students.',
  ageNote:
    'Children start school in August of the calendar year they turn 6, so a class is made up of ' +
    'children born in the same year. Upper secondary normally starts at 16. Since the new Education ' +
    'Act (opplæringslova) of August 2024, young people have the right to upper secondary education ' +
    'until they complete it.',
  compulsory: {
    from: 6,
    to: 16,
    label: 'Grunnskole 6–16',
    note: 'Ten years of compulsory education (years 1–10). Upper secondary is a right, not an obligation.',
  },
  costNote:
    'School and upper secondary are free. Kindergarten fees are capped at 1,200 kr a month (700 kr in ' +
    'the least central municipalities) from August 2025, with the cap frozen for 2027. Public higher ' +
    'education is free for Norwegian and EU/EEA students apart from a semester fee; students from ' +
    'outside the EU/EEA and Switzerland have paid tuition since autumn 2023.',
  lines: [
    { id: 'bhg', name: 'Barnehage', color: '#7C8A93', lane: 0,
      desc: 'Kindergarten for ages 1–5. Children who turn 1 by the end of November have a legal right ' +
        'to a place from August. About half of kindergartens are private but publicly funded, and the ' +
        'same maximum price applies to both.' },
    { id: 'barn', name: 'Barneskole', color: '#D2322D', lane: 0, from: 'no-bhg2',
      desc: 'Primary school, years 1–7, in the same comprehensive system for all. No grades are ' +
        'given; pupils get written and oral feedback. After-school care (SFO) is offered for years ' +
        '1–4, with 12 free hours a week in the first school years.' },
    { id: 'ungd', name: 'Ungdomsskole', color: '#1E66C9', lane: 0, from: 'no-b67',
      desc: 'Lower secondary, years 8–10. Grades (1–6) start in year 8, and the final grades ' +
        '(standpunkt) plus exam results decide upper-secondary admission in most counties.' },
    { id: 'sf', name: 'Studieforberedende', color: '#7A3E9D', lane: -1, from: 'no-u10',
      desc: 'Five study-preparatory programmes (general studies, sports, music/dance/drama, ' +
        'art/design/architecture, media and communication). Three years (Vg1–Vg3), leading to ' +
        'general university admission (generell studiekompetanse).' },
    { id: 'uni', name: 'Universitet / høgskole', color: '#4B2470', lane: -1, from: 'no-vg3',
      desc: 'Universities and university colleges. Admission through the national application ' +
        'system (Samordna opptak, deadline 15 April). Bachelor 3 years, master 2 years (some ' +
        'integrated 5-year programmes, e.g. teaching and engineering), PhD 3 years.' },
    { id: 'yf', name: 'Yrkesfag', color: '#DD7710', lane: 1, from: 'no-u10',
      desc: 'Ten vocational programmes (e.g. building, electrical, health and youth work, technology ' +
        'and industrial production). Usually two years at school (Vg1–Vg2) followed by two years ' +
        'as an apprentice in a company: the "2+2 model".' },
    { id: 'lærl', name: 'Lærling', color: '#A85A0A', lane: 1, from: 'no-yf2',
      desc: 'Apprenticeship (læretid) in an approved company, usually two years, paid at a rising ' +
        'share of a skilled worker\'s wage. Ends with the trade or journeyman test.' },
    { id: 'fagsk', name: 'Fagskole', color: '#8A5A00', lane: 1, from: 'no-lærl',
      desc: 'Tertiary vocational college: practical programmes of six months to two years, mostly ' +
        'for people with a fagbrev (e.g. technician, health-care specialisations).' },
    { id: 'pab', name: 'Påbygging', color: '#2C9546', lane: 2, from: 'no-yf2',
      desc: 'Supplementary year (Vg3 påbygging til generell studiekompetanse) for vocational ' +
        'students who want university admission instead of, or after, an apprenticeship.' },
  ],
  stations: [
    { id: 'no-bhg1', line: 'bhg', name: 'Småbarn', local: 'Barnehage (1–2 år)', ages: [1, 3], isced: 0,
      desc: 'Most children start at about 1, after parental leave. Over 90% of 1–5-year-olds attend.',
      cost: { amount: 13200, note: 'National maximum 1,200 kr/month × 11 months (700 kr in the least central areas); max 6% of household income.', src: 0 } },
    { id: 'no-bhg2', line: 'bhg', name: 'Barnehage', local: 'Barnehage (3–5 år)', ages: [3, 6], isced: 0,
      desc: 'Play-based kindergarten under a national framework plan. Low-income households pay ' +
        'reduced fees and get free core hours.',
      cost: { amount: 13200, note: 'Same cap, 1,200 kr/month × 11 months; sibling discounts, and the cap is frozen for 2027.', src: 1 } },
    { id: 'no-b1', line: 'barn', name: '1. trinn', local: '1. trinn', ages: [6, 7], isced: 1,
      desc: 'School starts in August of the year the child turns 6. Play-based learning in the ' +
        'first year; mandatory screening tests (kartleggingsprøver) in reading and numeracy in ' +
        'years 1–3.',
      events: ['Skolestart (August)'],
      cost: { amount: 0, note: 'Free; SFO after-school care has a fee, 12 hours/week free in the first years.' } },
    { id: 'no-b24', line: 'barn', name: '2.–4. trinn', ages: [7, 10], isced: 1,
      desc: 'Class teacher. English is taught from year 1.',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'no-b5', line: 'barn', name: '5. trinn', ages: [10, 11], isced: 1,
      desc: 'National tests (nasjonale prøver) in reading, numeracy and English, taken in ' +
        'September (31 August–25 September in 2026).',
      events: ['National tests (Sep)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'no-b67', line: 'barn', name: '6.–7. trinn', ages: [11, 13], isced: 1,
      desc: 'Last years of barneskole. Pupils move to ungdomsskole, often a different school, with ' +
        'no selection.',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'no-u8', line: 'ungd', name: '8. trinn', ages: [13, 14], isced: 2,
      desc: 'Grades (1–6) are given for the first time. National tests in reading, numeracy and ' +
        'English in September. A second foreign language or extra in-depth study is chosen.',
      events: ['First grades', 'National tests (Sep)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'no-u9', line: 'ungd', name: '9. trinn', ages: [14, 15], isced: 2,
      desc: 'National tests in reading and numeracy are repeated in September to measure progress. ' +
        'Optional working-life subject (arbeidslivsfag) in many schools.',
      events: ['National tests (Sep)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'no-u10', line: 'ungd', name: '10. trinn', ages: [15, 16], isced: 2,
      desc: 'Final year. Pupils apply for upper secondary by 1 March. Pupils are drawn for one ' +
        'written exam (Norwegian, maths or English) in May and one oral exam in June. The ' +
        'leaving certificate\'s grade points decide admission.',
      exam: 'Vitnemål fra grunnskolen',
      events: ['Application to upper secondary (1 Mar)', 'Written exam (May)', 'Oral exam (June)'],
      cost: { amount: 0, note: 'Free.' } },
    // Study preparatory
    { id: 'no-vg1s', line: 'sf', name: 'Vg1', local: 'Vg1 studieforberedende', ages: [16, 17], isced: 3,
      desc: 'Common core subjects. General studies (studiespesialisering) is by far the largest programme.',
      share: { pct: 46, of: 'of Vg1 applicants chose a study-preparatory programme (2025/26)', src: 2 },
      cost: { amount: 0, note: 'Free; students get a loan of books and often a PC (counties may charge a small PC fee).' } },
    { id: 'no-vg2s', line: 'sf', name: 'Vg2', local: 'Vg2 studieforberedende', ages: [17, 18], isced: 3,
      desc: 'In-depth programme subjects such as science, social science, economics or languages.',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'no-vg3', line: 'sf', name: 'Vg3', local: 'Vg3 studieforberedende', ages: [18, 19], isced: 3,
      desc: 'Final year with written and oral exams in May–June; the "russ" celebrations precede ' +
        'them in spring. Many students take a gap year or do military service before university.',
      exam: 'Generell studiekompetanse', events: ['Russefeiring (Apr–17 May)', 'Exams (May–June)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'no-ba', line: 'uni', name: 'Bachelor', ages: [19, 22], isced: 6,
      desc: 'Three years (180 ECTS). Student finance from Lånekassen: a loan, of which part can ' +
        'be converted to a grant.', exam: 'Bachelorgrad',
      cost: { amount: 1820, note: 'No tuition; compulsory semester fee (690 kr) and copy fee (220 kr) per semester at Oslo. Non-EEA students pay tuition since 2023.', src: 3 } },
    { id: 'no-ma', line: 'uni', name: 'Master', ages: [22, 24], isced: 7,
      desc: 'Two years (120 ECTS), or the final part of an integrated five-year programme.', exam: 'Mastergrad',
      cost: { amount: 1820, note: 'Semester fees only.', src: 3 } },
    { id: 'no-phd', line: 'uni', name: 'PhD', ages: [24, 28], isced: 8,
      desc: 'Three years of research, usually as a salaried research fellow (stipendiat) on a ' +
        'four-year contract that includes teaching duties.', exam: 'Ph.d.',
      cost: { amount: 0, note: 'Free; doctoral fellows are employees.' } },
    // Vocational
    { id: 'no-yf1', line: 'yf', name: 'Vg1', local: 'Vg1 yrkesfag', ages: [16, 17], isced: 3,
      desc: 'Broad vocational programme with in-depth practical training (yrkesfaglig fordypning) ' +
        'in companies. A record share of applicants now choose vocational programmes.',
      share: { pct: 54, of: 'of Vg1 applicants chose a vocational programme (2025/26)', src: 2 },
      cost: { amount: 0, note: 'Free; work clothes and tools usually provided.' } },
    { id: 'no-yf2', line: 'yf', name: 'Vg2', local: 'Vg2 yrkesfag', ages: [17, 18], isced: 3,
      desc: 'Narrower trade programme. During the year students apply for an apprenticeship ' +
        '(læreplass); those without one can finish Vg3 at school.',
      events: ['Apprenticeship applications (by 1 Mar)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'no-lærl', line: 'lærl', name: 'Lærling', local: 'Læretid i bedrift', ages: [18, 20], isced: 3,
      desc: 'Two years of paid training in a company under a training contract. The final ' +
        'practical test (fagprøve or svenneprøve) is assessed by a county examination board.',
      exam: 'Fagbrev / svennebrev', events: ['Fagprøve'],
      cost: { amount: 0, note: 'Free; apprentices are paid a wage.' } },
    { id: 'no-fagsk', line: 'fagsk', name: 'Fagskole', ages: [21, 23], isced: 5,
      desc: 'Vocational college diploma, often studied part-time alongside work. Two-year ' +
        'programmes give access to some higher education.',
      exam: 'Fagskolegrad',
      cost: { amount: 0, note: 'No tuition at public fagskoler; a student-welfare semester fee may apply.' } },
    { id: 'no-pab', line: 'pab', name: 'Påbygg', local: 'Vg3 påbygging', ages: [18, 19], isced: 3,
      desc: 'One intensive year of core subjects (Norwegian, maths, history, science) giving ' +
        'general university admission. It can also be taken after a fagbrev.',
      exam: 'Generell studiekompetanse',
      cost: { amount: 0, note: 'Free.' } },
  ],
  transfers: [
    { from: 'no-pab', to: 'no-ba', label: 'Påbygging → university', desc: 'Påbygging gives the same general admission as the study-preparatory route.' },
    { from: 'no-lærl', to: 'no-pab', label: 'Fagbrev → påbygging', desc: 'Skilled workers can take påbygging after their fagbrev, keeping both qualifications.' },
    { from: 'no-fagsk', to: 'no-ba', label: 'Fagskole → bachelor', desc: 'Some programmes (e.g. engineering via Y-veien) admit applicants with a fagbrev or fagskole degree.' },
    { from: 'no-vg2s', to: 'no-yf2', label: 'Change of programme', desc: 'Students can switch between study-preparatory and vocational programmes, often repeating a year.' },
  ],
  sources: [
    { title: 'Regjeringen — Finansiering av barnehager (maximum price)', url: 'https://www.regjeringen.no/nb/tema/familie-og-barn/barnehager/innsiktsartikler/finansiering-av-barnehager/id2344788/' },
    { title: 'Regjeringen — Statsbudsjettet 2027: maksprisen i barnehage vidareførast (Oct 2026)', url: 'https://www.regjeringen.no/no/aktuelt/regjeringa-vidareforer-den-historiske-lage-maksprisen-i-barnehage/id3174270/' },
    { title: 'Regjeringen — Søkertall til videregående opplæring 2025/2026 ("Aldri før har flere søkt yrkesfag")', url: 'https://www.regjeringen.no/no/aktuelt/aldri-for-har-flere-sokt-yrkesfag/id3092842/' },
    { title: 'Universitetet i Oslo — Semesteravgift og Kopinor-avgift', url: 'https://www.uio.no/studier/registrering/semesteravgift/' },
    { title: 'Eurydice — Norway overview', url: 'https://eurydice.eacea.ec.europa.eu/eurypedia/norway/overview' },
    { title: 'Udir — Datoer for nasjonale prøver (31 Aug – 25 Sep 2026; 5., 8. og 9. trinn)', url: 'https://www.udir.no/eksamen-og-prover/prover/nasjonale-prover/datoer-for-nasjonale-prover2/' },
    { title: 'Regjeringen — Høringsnotat om studieavgift for studenter fra land utenfor EØS og Sveits', url: 'https://www.regjeringen.no/contentassets/d1b4ecc81268477c8496534943e49eb3/horingsnotat-om-endringer-i-universitets-og-hoyskoleloven-studieavgift-advokatutgifter-og-klagesensur.pdf' },
    { title: 'SSB — Foreldrebetaling i barnehagar', url: 'https://www.ssb.no/utdanning/barnehager/statistikk/foreldrebetaling-i-barnehagar/artikler/kraftig-nedgang-i-foreldrebetalinga-i-barnehagar' },
    { title: 'utdanning.no — Søknadsfrister til videregående opplæring (1 March, incl. læreplass)', url: 'https://utdanning.no/tema/videregaende_opplaering/soknadsfrister_til_videregaende_opplaering' },
  ],
};
