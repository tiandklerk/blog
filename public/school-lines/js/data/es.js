// Spain — the State sets the basic structure (LOMLOE 2020, FP law 2022, university law
// LOSU 2023); the 17 autonomous communities run schools and set university fees.
export default {
  id: 'es',
  iso3: 'ESP',
  region: 'Europe',
  currency: 'EUR',
  name: 'Spain',
  localName: 'España',
  flag: '🇪🇸',
  summary:
    'Educación infantil in two cycles (0–3 and 3–6, the second free and almost universal), then ' +
    '6 years of primaria and 4 years of compulsory secondary (ESO) for everyone, ending at 16 with ' +
    'the Graduado en ESO. Students then choose the 2-year bachillerato, ending in the university ' +
    'entrance exam (PAU), or vocational training (FP): Grado Medio after ESO and Grado Superior ' +
    '(short-cycle tertiary) after bachillerato or Grado Medio. An FP Grado Básico from 15 offers a ' +
    'second route to the ESO certificate. Universities offer 4-year grados, 1–2-year másteres ' +
    'and doctorates; public fees are set per credit by each region.',
  ageNote:
    'Children are grouped by calendar year of birth: they start 1º of primaria in September of ' +
    'the year they turn 6. Grade repetition is still fairly common, so many students are older ' +
    'than shown. School calendars are set by each autonomous community.',
  compulsory: {
    from: 6,
    to: 16,
    label: 'Enseñanza obligatoria 6–16',
    note:
      'Primary and ESO are compulsory and free. Students may stay in ordinary schooling until 18 ' +
      'if they repeat years.',
  },
  costNote:
    'Public schooling is free, including the 3–6 cycle. Families pay for books and meals in ' +
    'most regions. University tuition is per ECTS credit at prices set by each region; figures ' +
    'are for 2024/25 new students.',
  lines: [
    { id: 'inf1', name: 'Infantil 0–3', color: '#7C8A93', lane: 0,
      desc: 'Primer ciclo de educación infantil (escuelas infantiles), voluntary. Provision and ' +
        'fees depend on the region and municipality; several regions have made it free in recent ' +
        'years, at least for 2-year-olds.' },
    { id: 'inf2', name: 'Infantil 3–6', color: '#E2557B', lane: 0, from: 'es-inf1',
      desc: 'Segundo ciclo de educación infantil: free in public and publicly funded (concertado) ' +
        'schools, usually in the same school as primary. Not compulsory, but practically all ' +
        'children attend.' },
    { id: 'pri', name: 'Primaria', color: '#D2322D', lane: 0, from: 'es-inf2',
      desc: 'Educación primaria: 6 years (1º–6º) in three 2-year cycles. Regional co-official ' +
        'languages (Catalan, Basque, Galician, Valencian…) are taught and often used as the ' +
        'language of instruction.' },
    { id: 'eso', name: 'ESO', color: '#1E66C9', lane: 0, from: 'es-p6',
      desc: 'Educación Secundaria Obligatoria: 4 years (1º–4º) for everyone. Since LOMLOE (2020) ' +
        'the certificate is awarded by the teaching team without a final exam. 4º ESO is ' +
        'oriented towards bachillerato or FP through elective subjects.' },
    { id: 'bach', name: 'Bachillerato', color: '#7A3E9D', lane: -1, from: 'es-e4',
      desc: 'Two years in one of four modalities: Ciencias y Tecnología, Humanidades y Ciencias ' +
        'Sociales, Artes, or General (new with LOMLOE). Ends in the Título de Bachiller.' },
    { id: 'uni', name: 'Universidad', color: '#4B2470', lane: -1, from: 'es-b2',
      desc: 'Grado (usually 4 years, 240 ECTS; 5–6 years for medicine, architecture, ' +
        'veterinary, pharmacy, dentistry), máster (60–120 ECTS) and doctorado. Places are ' +
        'allocated by PAU-based admission scores (nota de corte).' },
    { id: 'gm', name: 'FP Medio / Superior', color: '#DD7710', lane: 1, from: 'es-e4',
      desc: 'Formación Profesional: Grado Medio (2 years, ISCED 3) leads to a técnico title; ' +
        'Grado Superior (2 years, ISCED 5) to técnico superior. Since the 2022 FP law all ' +
        'programmes include in-company training (general or intensive dual).' },
    { id: 'gb', name: 'FP Grado Básico', color: '#2C9546', lane: 2, from: 'es-e3',
      desc: 'Ciclos Formativos de Grado Básico (replaced FP Básica in 2022/23): 2 years for ' +
        '15–17-year-olds at risk of not completing ESO, on the advice of the school. Passing ' +
        'gives the Graduado en ESO and a basic professional qualification.' },
  ],
  stations: [
    { id: 'es-inf1', line: 'inf1', name: 'Infantil 0–3', local: 'Primer ciclo de educación infantil', ages: [0.5, 3], isced: 0,
      desc: 'Escuelas infantiles, public or private. Royal Decree 95/2022 aims to extend free ' +
        'places, prioritising disadvantaged children.',
      cost: { amount: 0, note: 'Varies widely: free in a growing number of regions (often from age 2); income-based regional or municipal fees elsewhere.', src: 1 } },
    { id: 'es-inf2', line: 'inf2', name: 'Infantil 3–6', local: 'Segundo ciclo de educación infantil', ages: [3, 6], isced: 0,
      desc: 'Every child over 3 has a legal right to a place. Enrolment is in spring, with ' +
        'points for siblings, proximity and family income.',
      events: ['School admission applications (spring)'],
      cost: { amount: 0, note: 'Free in public and concertado schools; meals and voluntary contributions extra.', src: 1 } },
    { id: 'es-p14', line: 'pri', name: '1º–4º', local: 'Primaria, 1º–4º', ages: [6, 10], isced: 1,
      desc: 'English from 1º. A national diagnostic assessment (evaluación de diagnóstico) in 4º ' +
        'checks competences; it does not affect progression.',
      events: ['Diagnostic assessment (4º)'],
      cost: { amount: 0, note: 'Free; many regions lend or fund textbooks.' } },
    { id: 'es-p6', line: 'pri', name: '5º–6º', local: 'Primaria, 5º–6º', ages: [10, 12], isced: 1,
      desc: 'End of primary. Pupils usually move to a public secondary school (IES), while ' +
        'concertado schools often continue through ESO.',
      cost: { amount: 0, note: 'Free; many regions lend or fund textbooks.' } },
    { id: 'es-e12', line: 'eso', name: '1º–2º ESO', ages: [12, 14], isced: 2,
      desc: 'Subject teaching. A diagnostic assessment takes place in 2º ESO. Diversification ' +
        'programmes (PDC) for students with difficulties start in 3º.',
      events: ['Diagnostic assessment (2º ESO)'],
      cost: { amount: 0, note: 'Free in public schools.' } },
    { id: 'es-e3', line: 'eso', name: '3º ESO', ages: [14, 15], isced: 2,
      desc: 'The teaching team can propose FP Grado Básico for students at 15 who are unlikely ' +
        'to complete ESO.',
      cost: { amount: 0, note: 'Free in public schools.' } },
    { id: 'es-e4', line: 'eso', name: '4º ESO', ages: [15, 16], isced: 2,
      desc: 'Final year of compulsory schooling with elective subjects pointing to bachillerato ' +
        'or FP. The Graduado en ESO is awarded on continuous assessment; it is required for ' +
        'bachillerato and FP Grado Medio.',
      exam: 'Graduado en Educación Secundaria Obligatoria',
      cost: { amount: 0, note: 'Free in public schools.' } },
    { id: 'es-b1', line: 'bach', name: '1º Bach', local: '1º de Bachillerato', ages: [16, 17], isced: 3,
      desc: 'Choice of modality and specialised subjects. With LOMLOE students can be promoted ' +
        'with up to two failed subjects.',
      cost: { amount: 0, note: 'Free in public schools.' } },
    { id: 'es-b2', line: 'bach', name: '2º Bach', ages: [17, 18], isced: 3,
      desc: 'The PAU (Prueba de Acceso a la Universidad, called EBAU/EvAU until 2024) is held in ' +
        'early June, with a resit in late June or July. Since 2025 it follows Royal Decree ' +
        '534/2024 with more competence-based questions. The access mark combines 60% bachillerato ' +
        'average and 40% PAU (≥5/10 to pass); optional subject exams add up to 4 points, for ' +
        'an admission score out of 14.',
      exam: 'Título de Bachiller + PAU',
      events: ['PAU (early June)', 'Extraordinary PAU (late June–July)', 'University pre-enrolment (June–July)'],
      cost: { amount: 78, note: 'Bachillerato free; PAU registration fee, e.g. €78.20 in the Valencian Community (2026), halved for large families. Set by each region.', src: 8 } },
    { id: 'es-gr', line: 'uni', name: 'Grado', local: 'Grado universitario (4 años)', ages: [18, 22], isced: 6,
      desc: 'Usually 4 years (240 ECTS). Popular degrees (medicine, double degrees) have high ' +
        'cut-off marks. Public price per credit varies by region and field; repeated credits ' +
        'cost more. Many regions waive fees for credits passed (e.g. Andalusia), and state ' +
        'grants (becas MEC) cover tuition for lower-income students.',
      exam: 'Graduado/a',
      cost: { amount: 924, note: '60 ECTS at the 2024/25 average first-enrolment price of €15.4/credit (regional range €8.6–22.7).', src: 2 } },
    { id: 'es-ma', line: 'uni', name: 'Máster', local: 'Máster universitario', ages: [22, 23], isced: 7,
      desc: '60–120 ECTS (1–2 years). Masters that qualify for a regulated profession ' +
        '(teaching, law, engineering) are priced like grados; others cost about twice as much.',
      exam: 'Máster',
      cost: { amount: 1800, note: '60 ECTS at the 2024/25 average of €30/credit (non-regulated); regulated masters average €15.8/credit.', src: 2 } },
    { id: 'es-doc', line: 'uni', name: 'Doctorado', ages: [23, 26], isced: 8,
      desc: 'About 3 years full-time (up to 5 part-time), ending with a thesis defence. Many ' +
        'doctoral students hold 4-year FPU or FPI contracts.',
      exam: 'Doctor/a',
      cost: { amount: 350, note: 'UNED 2026/27: €335.13 tutela académica + €15.15 secretariat fee a year. Regions range from €60 (Andalusia) to €401 (Catalonia).', src: 9 } },
    { id: 'es-gm', line: 'gm', name: 'Grado Medio', local: 'Ciclo formativo de Grado Medio', ages: [16, 18], isced: 3,
      desc: 'Two years (about 2,000 hours) in one of 26 professional families, with in-company ' +
        'training. Leads to the título de Técnico and direct access to Grado Superior.',
      exam: 'Técnico',
      cost: { amount: 0, note: 'Free in public centres.', src: 4 } },
    { id: 'es-gs', line: 'gm', name: 'Grado Superior', local: 'Ciclo formativo de Grado Superior', ages: [18, 20], isced: 5,
      desc: 'Two-year short-cycle higher education (120 ECTS) leading to Técnico Superior. ' +
        'Graduates can enter university grados without the PAU (only the optional subject exams ' +
        'to raise their score), with recognition of credits.',
      exam: 'Técnico Superior',
      cost: { amount: 0, note: 'Free in public centres in most regions; Madrid (€400 a year in 2023, with merit discounts) and Catalonia have charged fees.', src: 10 } },
    { id: 'es-gb', line: 'gb', name: 'Grado Básico', local: 'Ciclo formativo de Grado Básico', ages: [15, 17], isced: 3,
      desc: 'Practical training in a trade (e.g. electricity, hospitality, IT services) plus ' +
        'core subjects, with small groups and tutoring.',
      exam: 'Graduado en ESO + Técnico Básico',
      cost: { amount: 0, note: 'Free in public centres.', src: 4 } },
  ],
  transfers: [
    { from: 'es-gb', to: 'es-gm', label: 'Grado Básico → Medio', desc: 'The Grado Básico title gives direct access to FP Grado Medio.' },
    { from: 'es-gm', to: 'es-b1', label: 'Grado Medio → Bachillerato', desc: 'Técnicos can enter bachillerato, with some subjects recognised.' },
    { from: 'es-b2', to: 'es-gs', label: 'Bachiller → Grado Superior', desc: 'Bachillerato holders enter Grado Superior directly (no PAU needed).' },
    { from: 'es-gs', to: 'es-gr', label: 'Técnico Superior → Grado', desc: 'Grado Superior graduates can enter university without the PAU and get credits recognised.' },
  ],
  sources: [
    { title: 'Eurydice — Spain: overview of the education system', url: 'https://eurydice.eacea.ec.europa.eu/eurypedia/spain/overview' },
    { title: 'Eurydice — Spain: early childhood education and care', url: 'https://eurydice.eacea.ec.europa.eu/eurypedia/spain/early-childhood-education-and-care' },
    { title: 'Eurydice — Spain: higher education funding (public prices 2024/25)', url: 'https://eurydice.eacea.ec.europa.eu/eurypedia/spain/higher-education-funding' },
    { title: 'BOE — Real Decreto 534/2024, requisitos de acceso a la universidad (PAU)', url: 'https://www.boe.es/eli/es/rd/2024/06/11/534' },
    { title: 'Ministerio de Educación, FP y Deportes — TodoFP', url: 'https://www.todofp.es/' },
    { title: 'Eurydice — Spain: national student fee and support systems', url: 'https://eurydice.eacea.ec.europa.eu/countries/spain' },
    { title: 'BOE — Ley Orgánica 3/2020 (LOMLOE)', url: 'https://www.boe.es/eli/es/lo/2020/12/29/3' },
    { title: 'BOE — Ley Orgánica 3/2022 de ordenación e integración de la FP', url: 'https://www.boe.es/eli/es/lo/2022/03/31/3' },
    { title: 'IES Escultor Badia (GVA) — Instrucciones PAU 2026: tasas de inscripción (UPV)', url: 'https://portal.edu.gva.es/iesescultorbadia/wp-content/uploads/sites/1040/2026/05/Instrucciones-PAU-2026.pdf' },
    { title: 'UNED — Precios de doctorado 2026-27 (Orden CNU/573/2026)', url: 'https://www.uned.es/universidad/inicio/dam/jcr:ee8455a0-ae17-4098-b44e-2e7e302ec74c/Folleto_precios_doctorado_2026-27.pdf' },
    { title: 'Comunidad de Madrid — Bonificación de precios públicos de FP de Grado Superior (21 Jun 2023)', url: 'https://www.comunidad.madrid/node/66430' },
  ],
};
