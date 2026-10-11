// Chile — national system run by the Ministerio de Educación (Mineduc). Schools are public (municipal
// or the new Servicios Locales de Educación Pública), voucher-funded private (particular
// subvencionado) or fee-paying private (particular pagado).
export default {
  id: 'cl',
  iso3: 'CHL',
  region: 'Americas',
  currency: 'CLP',
  name: 'Chile',
  localName: 'Chile',
  flag: '🇨🇱',
  summary:
    'After sala cuna and jardín, two transition years (prekínder and the compulsory kínder) lead into ' +
    'eight years of educación básica and four of educación media. Pupils split only at 16: in 3º medio ' +
    'they choose científico-humanista (academic) or técnico-profesional (vocational) media. More than ' +
    'half of all pupils attend voucher-funded private schools, which since the 2015 Ley de Inclusión ' +
    'cannot select pupils, make a profit or (progressively) charge fees. Higher education has three ' +
    'kinds of institution: universities, institutos profesionales (IP) and centros de formación técnica ' +
    '(CFT). Universities admit through the PAES exam. Tuition is charged everywhere, including at state ' +
    'universities, but gratuidad makes it free for students from the poorest 60% of households.',
  ageNote:
    'Children must be 4 by 31 March to start prekínder (NT1), 5 for kínder and 6 for 1º básico; schools ' +
    'may admit children who reach the age by 30 June. The school year runs from early March to ' +
    'December. A 6+6 structure planned in the 2009 Ley General de Educación has not been introduced.',
  compulsory: {
    from: 5,
    to: 18,
    label: 'Obligatoria: kínder – 4º medio',
    note:
      'Twelve years of school (básica and media) have been compulsory and free since 2003 (Ley 19.876), ' +
      'with the State obliged to provide them up to age 21. The 2013 constitutional reform (Ley ' +
      '20.710) made kínder compulsory as a requirement for entering 1º básico.',
  },
  costNote:
    'School is free at public schools and, almost everywhere, at voucher-funded private schools; ' +
    'about 10% of pupils attend fee-paying private schools. Tertiary figures are median list fees ' +
    '(arancel + matrícula) for 2026 programmes from SIES; students under gratuidad pay nothing.',
  lines: [
    { id: 'cuna', name: 'Sala cuna & jardín', color: '#7C8A93', lane: 0,
      desc: 'Educación parvularia before the transition years: sala cuna (0–2) and niveles medios ' +
        '(2–4), in free public JUNJI and Integra centres or private jardines. Employers with 20 or more ' +
        'women employees must pay for sala cuna.' },
    { id: 'nt', name: 'Transición', color: '#E2557B', lane: 0, from: 'cl-medio',
      desc: 'Niveles de transición: NT1 (prekínder) and NT2 (kínder), usually held in schools. ' +
        'Kínder is compulsory.' },
    { id: 'bas', name: 'Educación básica', color: '#D2322D', lane: 0, from: 'cl-nt2',
      desc: 'Eight years of basic education (1º–8º básico). SIMCE national tests are given in ' +
        'several grades by the Agencia de Calidad de la Educación. Public schools are moving from ' +
        'municipalities to Servicios Locales de Educación Pública (SLEP) under Ley 21.040 (2017).' },
    { id: 'med', name: 'Media común', color: '#1E66C9', lane: 0, from: 'cl-b8',
      desc: 'The first two years of educación media (1º–2º medio) share a common curriculum in every ' +
        'school, including technical liceos.' },
    { id: 'hc', name: 'Científico-humanista', color: '#7A3E9D', lane: -1, from: 'cl-m2',
      desc: 'Academic upper secondary (3º–4º medio), with a common core plus elective deepening ' +
        'subjects chosen by the pupil. It prepares for the PAES and university.' },
    { id: 'uni', name: 'Universidad', color: '#4B2470', lane: -2, from: 'cl-hc4',
      desc: 'Universities award licenciaturas and professional titles (4–7 years), and postgraduate ' +
        'degrees. The 18 state universities and 12 private ones form the CRUCH; most other students ' +
        'are at private universities. About 55% of undergraduates are at universities.' },
    { id: 'tp', name: 'Media TP', color: '#2C9546', lane: 1, from: 'cl-m2',
      desc: 'Vocational upper secondary (3º–4º medio) in one of 35 specialities (e.g. electricity, ' +
        'administration, nursing assistance, mechanics, gastronomy), sometimes in dual mode with ' +
        'companies. A work placement (práctica profesional) after 4º medio earns the title of ' +
        'técnico de nivel medio.' },
    { id: 'ip', name: 'IP', color: '#DD7710', lane: 1, from: 'cl-tp4',
      desc: 'Institutos profesionales (IP) award professional titles without a licenciatura (about 4 ' +
        'years) and higher technical titles (2–2½ years). All IPs are private; they hold about 37% ' +
        'of undergraduates.' },
    { id: 'cft', name: 'CFT', color: '#A85A0A', lane: 2, from: 'cl-tp4',
      desc: 'Centros de formación técnica award higher technical titles (técnico de nivel superior, ' +
        '2–2½ years). A network of 15 state CFTs, one per region, has been created since 2016.' },
  ],
  stations: [
    { id: 'cl-cuna', line: 'cuna', name: 'Sala cuna', ages: [0, 2], isced: 0,
      desc: 'Infant care from 84 days to 2 years. Not compulsory.',
      cost: { amount: 0, note: 'Free at JUNJI and Integra centres; private sala cuna is often employer-paid.', src: 10 } },
    { id: 'cl-medio', line: 'cuna', name: 'Nivel medio', local: 'Medio menor y medio mayor', ages: [2, 4], isced: 0,
      desc: 'Medio menor (2–3) and medio mayor (3–4). Not compulsory.',
      cost: { amount: 0, note: 'Free at JUNJI and Integra centres.', src: 10 } },
    { id: 'cl-nt1', line: 'nt', name: 'Prekínder', local: 'NT1', ages: [4, 5], isced: 0,
      desc: 'First transition level, offered free in public and subsidised schools. Not compulsory, ' +
        'but most children attend. Applications for subsidised schools from prekínder onwards go ' +
        'through the centralised Sistema de Admisión Escolar (SAE).',
      events: ['SAE applications (August)', 'SAE results (October)'],
      cost: { amount: 0, note: 'Free in public and subsidised schools.', src: 9 } },
    { id: 'cl-nt2', line: 'nt', name: 'Kínder', local: 'NT2', ages: [5, 6], isced: 0,
      desc: 'Second transition level, compulsory and required for entering 1º básico.',
      cost: { amount: 0, note: 'Free in public and subsidised schools.', src: 9 } },
    { id: 'cl-b1', line: 'bas', name: '1º básico', ages: [6, 7], isced: 1,
      desc: 'Start of básica at 6. Children learn to read in 1º–2º básico.',
      cost: { amount: 0, note: 'Free at public and almost all subsidised schools. About 53% of pupils attend subsidised private schools (2025).', src: 6 } },
    { id: 'cl-b2', line: 'bas', name: '2º–3º', local: '2º y 3º básico', ages: [7, 9], isced: 1, desc: 'Second and third year of básica.',
      cost: { amount: 0, note: 'Free at public and subsidised schools.', src: 6 } },
    { id: 'cl-b4', line: 'bas', name: '4º básico', ages: [9, 10], isced: 1,
      desc: 'SIMCE tests in reading and maths; results are published by school.',
      events: ['SIMCE (4º básico, Oct–Nov)'],
      cost: { amount: 0, note: 'Free at public and subsidised schools.', src: 6 } },
    { id: 'cl-b5', line: 'bas', name: '5º–7º', local: '5º a 7º básico', ages: [10, 13], isced: 1,
      desc: 'Upper básica; subject teachers take over from 5º–7º. Under ISCED, 7º–8º básico count as ' +
        'lower secondary, but they are taught in basic schools.',
      cost: { amount: 0, note: 'Free at public and subsidised schools.', src: 6 } },
    { id: 'cl-b8', line: 'bas', name: '8º básico', ages: [13, 14], isced: 2,
      desc: 'Last year of básica. Pupils apply for liceos (secondary schools) through SAE; a few ' +
        'traditional public liceos also select part of their intake by academic merit.',
      exam: 'Licencia de educación básica', events: ['SAE applications for 1º medio (August)'],
      cost: { amount: 0, note: 'Free at public and subsidised schools.', src: 6 } },
    { id: 'cl-m1', line: 'med', name: '1º medio', ages: [14, 15], isced: 3,
      desc: 'First year of educación media with a common curriculum.',
      cost: { amount: 0, note: 'Free at public and subsidised schools.', src: 6 } },
    { id: 'cl-m2', line: 'med', name: '2º medio', ages: [15, 16], isced: 3,
      desc: 'SIMCE tests in reading and maths. Pupils choose the científico-humanista or ' +
        'técnico-profesional branch for 3º–4º medio, often by changing school.',
      events: ['SIMCE (2º medio, Oct–Nov)'],
      cost: { amount: 0, note: 'Free at public and subsidised schools.', src: 6 } },
    { id: 'cl-hc3', line: 'hc', name: '3º medio', ages: [16, 17], isced: 3,
      desc: 'Common core plus 3 elective deepening subjects.',
      cost: { amount: 0, note: 'Free at public and subsidised schools.', src: 6 } },
    { id: 'cl-hc4', line: 'hc', name: '4º medio', ages: [17, 18], isced: 3,
      desc: 'Final school year. The PAES (Prueba de Acceso a la Educación Superior, since 2022) is ' +
        'taken in late November or early December: reading (competencia lectora) and maths M1 are ' +
        'compulsory, with optional M2, history or science. Results come out in early January, and ' +
        'applications follow immediately. Students also apply for gratuidad and grants via FUAS.',
      exam: 'Licencia de enseñanza media',
      events: ['PAES registration (June–July)', 'FUAS application (Oct)', 'PAES (30 Nov – 2 Dec 2026)', 'Results & applications (4–7 Jan 2027)'],
      cost: { amount: 0, note: 'Free at public and subsidised schools.', src: 6 } },
    { id: 'cl-lic', line: 'uni', name: 'Licenciatura', local: 'Licenciatura + título profesional', ages: [18, 23], isced: 6,
      desc: 'Undergraduate programmes of 4–7 years, most leading to both a licenciatura and a ' +
        'professional title (e.g. ingeniería civil, derecho, pedagogía, medicina). Admission ranks ' +
        'PAES scores together with school grades (NEM) and class rank (ranking). Students outside ' +
        'gratuidad rely on grants or the state-guaranteed CAE loan (2006); a bill to replace CAE with ' +
        'a new income-contingent FES and ease existing debts passed the Chamber in August 2025 but ' +
        'was still stalled in the Senate in 2026, with the Kast government resisting it.',
      events: ['Gratuidad since 2016 (Ley 21.091, 2018)', 'FES bill passes Chamber (Aug 2025)'],
      exam: 'Licenciatura / título profesional',
      share: { pct: 55.3, of: 'of undergraduate students are enrolled at universities (2026)', src: 2 },
      cost: { amount: 4889000, private: 4730000,
        note: 'Median state-university fee 2026; private CRUCH ~6.2M. Free under gratuidad (poorest 60%); others use CAE loans or grants.', src: 1 } },
    { id: 'cl-mag', line: 'uni', name: 'Magíster', ages: [23, 25], isced: 7,
      desc: 'Master\'s degree, usually 2 years. ANID offers scholarships (Becas de Magíster). Not ' +
        'covered by gratuidad.',
      exam: 'Grado de magíster',
      cost: { amount: 3340000, private: 4030000, note: 'Median 2026 fee at state universities; private universities about CLP 4.0 million.', src: 1 } },
    { id: 'cl-doc', line: 'uni', name: 'Doctorado', ages: [25, 29], isced: 8,
      desc: 'Doctorate of about 4 years, often funded by an ANID national doctoral scholarship that ' +
        'covers fees and a stipend.',
      exam: 'Grado de doctor',
      cost: { amount: 4515000, note: 'Median 2026 fee at state universities; ANID scholarships usually cover it.', src: 1 } },
    { id: 'cl-tp3', line: 'tp', name: '3º medio', ages: [16, 17], isced: 3,
      desc: 'Speciality training alongside the general core, in a liceo técnico or polivalente.',
      share: { pct: 35, of: 'of 3º medio youth enrolment is técnico-profesional or artística (2025)', src: 5 },
      cost: { amount: 0, note: 'Free at public and subsidised schools.', src: 5 } },
    { id: 'cl-tp4', line: 'tp', name: '4º medio', ages: [17, 18], isced: 3,
      desc: 'Final year; graduates may sit the PAES like any other pupil. The práctica profesional ' +
        '(a supervised work placement) follows to earn the técnico de nivel medio title.',
      exam: 'Licencia de enseñanza media + título de técnico de nivel medio',
      events: ['PAES (Nov–Dec)', 'Práctica profesional'],
      cost: { amount: 0, note: 'Free at public and subsidised schools.', src: 5 } },
    { id: 'cl-ip', line: 'ip', name: 'Carrera IP', local: 'Título profesional (sin licenciatura) / técnico de nivel superior', ages: [18, 22], isced: 6,
      desc: 'Professional programmes of about 4 years (e.g. social work, design, accounting); ' +
        'IPs also run 2-year technical programmes. Admission usually needs only the secondary ' +
        'licence, not the PAES. Many IPs offer evening and online study for working adults.',
      exam: 'Título profesional',
      share: { pct: 37.1, of: 'of undergraduate students are enrolled at institutos profesionales (2026)', src: 2 },
      cost: { amount: 2890000, note: 'All IPs are private: median 2026 fee. Free under gratuidad at the 7 adscribed IPs.', src: 1 } },
    { id: 'cl-cft', line: 'cft', name: 'Técnico sup.', local: 'Técnico de nivel superior (CFT)', ages: [18, 20.5], isced: 5,
      desc: 'Two- to two-and-a-half-year technical programmes with open admission.',
      exam: 'Título de técnico de nivel superior',
      share: { pct: 7.6, of: 'of undergraduate students are enrolled at CFTs (2026)', src: 2 },
      cost: { amount: 2125000, private: 2556000, note: 'Median 2026 fee at state CFTs; 23 CFTs are in gratuidad.', src: 1 } },
  ],
  transfers: [
    { from: 'cl-tp4', to: 'cl-lic', label: 'TP → universidad', desc: 'Técnico-profesional graduates can take the PAES and enter university; universities also run special access programmes (PACE, ranking).' },
    { from: 'cl-hc4', to: 'cl-ip', label: 'HC → IP / CFT', desc: 'Científico-humanista graduates often enrol at IPs and CFTs, which do not require the PAES.' },
    { from: 'cl-cft', to: 'cl-ip', label: 'CFT → IP', desc: 'Técnicos de nivel superior can continue to a professional title at an IP, with credit for prior study (articulación).' },
    { from: 'cl-ip', to: 'cl-mag', label: 'IP → magíster', desc: 'Professional titles of 8+ semesters can give access to some master\'s programmes.' },
    { from: 'cl-cft', to: 'cl-lic', label: 'CFT → universidad', desc: 'Some universities offer continuation routes (prosecución de estudios) for técnicos.' },
  ],
  sources: [
    { title: 'Mineduc — Ministerio de Educación de Chile', url: 'https://www.mineduc.cl/' },
    { title: 'SIES (Mineduc) — Base de datos de Oferta Académica 2026 (aranceles por carrera)', url: 'https://www.mifuturo.cl/bases-de-datos-de-oferta-academica/' },
    { title: 'SIES (Mineduc) — Informe Matrícula en Educación Superior 2026', url: 'https://www.mifuturo.cl/informes-de-matricula/' },
    { title: 'Mineduc — Beneficios estudiantiles: Gratuidad', url: 'https://portal.beneficiosestudiantiles.cl/gratuidad' },
    { title: 'DEMRE (Universidad de Chile) — Calendario Admisión 2027 / PAES', url: 'https://demre.cl/calendario' },
    { title: 'Mineduc Datos Abiertos — Resumen de matrícula por curso 2025', url: 'https://datosabiertos.mineduc.cl/resumen-de-matricula-por-curso/' },
    { title: 'Mineduc Datos Abiertos — Resumen de matrícula por establecimiento 2025', url: 'https://datosabiertos.mineduc.cl/resumen-de-matricula-por-establecimiento-educacional/' },
    { title: 'Mineduc — Proyecto que pone fin al CAE y crea el FES inicia su tramitación en el Senado', url: 'https://www.mineduc.cl/proyecto-que-pone-fin-al-cae-y-crea-un-nuevo-financiamiento-para-la-educacion-superior-fes-inicia-su-tramitacion-en-el-senado/' },
    { title: 'La Tercera — ¿Flota el FES? (Jan 2026)', url: 'https://www.latercera.com/nacional/noticia/flota-el-fes-pese-a-cambios-del-ejecutivo-al-proyecto-expertos-difieren-si-alcanzan-y-gobierno-de-kast-aun-se-resiste/' },
    { title: 'Sistema de Admisión Escolar (SAE)', url: 'https://www.sistemadeadmisionescolar.cl/' },
    { title: 'JUNJI — Junta Nacional de Jardines Infantiles', url: 'https://www.junji.gob.cl/' },
    { title: 'Agencia de Calidad de la Educación — SIMCE', url: 'https://www.agenciaeducacion.cl/' },
    { title: 'Fundación Integra', url: 'https://www.integra.cl/' },
  ],
};
