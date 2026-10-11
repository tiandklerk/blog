// Mexico — national system run by the Secretaría de Educación Pública (SEP) together with the 32 states.
export default {
  id: 'mx',
  iso3: 'MEX',
  region: 'Americas',
  currency: 'MXN',
  name: 'Mexico',
  localName: 'México',
  flag: '🇲🇽',
  summary:
    'Educación básica runs from three years of preescolar through six years of primaria and three years ' +
    'of secundaria (general, técnica or the TV-supported telesecundaria), with one national curriculum ' +
    '(the Nueva Escuela Mexicana). At about 15 pupils choose a media superior route: bachillerato general, ' +
    'bachillerato tecnológico (with a technical qualification) or CONALEP\'s profesional técnico ' +
    'bachiller. Since 2025 these are being merged into one “Bachillerato Nacional” with a common ' +
    'curriculum and two certificates. Higher education offers 2-year TSU programmes, licenciaturas ' +
    '(4–5 years) and posgrado; UNAM and the other federal public universities are practically free, ' +
    'while about 38% of students attend private institutions.',
  ageNote:
    'A child must be 3 by 31 December to start preescolar and 6 by 31 December to start primaria, so ' +
    'classes are grouped by calendar year of birth. The school year runs from late August or ' +
    'September to July. States run most schools, but the SEP sets the curriculum and calendar.',
  compulsory: {
    from: 3,
    to: 18,
    label: 'Obligatoria 3–18',
    note:
      'Preescolar became compulsory in 2002 (phased in to 2008–09) and media superior in 2012, so ' +
      'schooling is compulsory from preescolar to the end of bachillerato. Since the 2019 reform of ' +
      'Article 3 the State must also provide educación inicial and higher education, but attendance at ' +
      'those levels is not compulsory.',
  },
  costNote:
    'Public education is free by constitution at every level; parents\' associations may ask for ' +
    'voluntary “cuotas”, which cannot be a condition of enrolment. UNAM charges a symbolic fee. ' +
    'Private figures are typical annual tuition at private universities (2025–26).',
  lines: [
    { id: 'ini', name: 'Educación inicial', color: '#7C8A93', lane: 0,
      desc: 'Educación inicial for children from 45 days to 3 years: public day-care centres (CENDI), ' +
        'IMSS and ISSSTE guarderías for insured workers, community programmes (CONAFE) and private ' +
        'nurseries. A constitutional right since 2019, but not compulsory.' },
    { id: 'pre', name: 'Preescolar', color: '#E2557B', lane: 0, from: 'mx-ini',
      desc: 'Three years of preescolar (jardín de niños), compulsory since the 2002 reform. Offered as ' +
        'general, indigenous and community (CONAFE) preescolar.' },
    { id: 'prim', name: 'Primaria', color: '#D2322D', lane: 0, from: 'mx-p3',
      desc: 'Six years of primary school (1º–6º) with one class teacher, free textbooks for all and ' +
        'the Nueva Escuela Mexicana curriculum (2022 plan, organised in fases). General, indigenous ' +
        'and community primarias.' },
    { id: 'sec', name: 'Secundaria', color: '#1E66C9', lane: 0, from: 'mx-e6',
      desc: 'Three years of lower secondary in one of three main formats: secundaria general, ' +
        'secundaria técnica (with technology workshops) and telesecundaria, where one teacher ' +
        'per group teaches with TV and video materials, mainly in rural areas. There is no exit ' +
        'exam; the certificate gives access to any media superior route.' },
    { id: 'bg', name: 'Bachillerato general', color: '#7A3E9D', lane: -1, from: 'mx-s3',
      desc: 'Propedéutico (university-preparatory) upper secondary, usually 3 years (6 semesters): ' +
        'Colegio de Bachilleres, state COBACH, UNAM\'s Escuela Nacional Preparatoria and CCH, ' +
        'state university prepas and private prepas. Since 2025 the SEP\'s Bachillerato Nacional ' +
        'gives it a common core plus basic work skills.' },
    { id: 'uni', name: 'Universidad', color: '#4B2470', lane: -2, from: 'mx-b3',
      desc: 'Licenciatura (4–5 years; medicine longer), then especialidad, maestría and doctorado. ' +
        'Public universities (UNAM, IPN, UAM, the state autonomous universities, TecNM institutes, ' +
        'escuelas normales for teachers) sit alongside a large private sector, from elite ' +
        'universities to low-cost colleges.' },
    { id: 'bt', name: 'Bachillerato tecnológico', color: '#2C9546', lane: 1, from: 'mx-s3',
      desc: 'Bivalent upper secondary: a bachillerato plus a técnico qualification, in DGETI schools ' +
        '(CBTIS, CETIS), agricultural and marine schools, state CECyTE and IPN\'s CECyT “vocacionales”. ' +
        'Graduates can go to university or work.' },
    { id: 'tsu', name: 'Técnico superior', color: '#1F6E33', lane: 1, from: 'mx-bt',
      desc: 'Short-cycle higher education at the universidades tecnológicas and politécnicas: the ' +
        'Técnico Superior Universitario (TSU, 2 years, with a work placement), which can be ' +
        'extended to a licenciatura or ingeniería in about 1½ more years.' },
    { id: 'cona', name: 'CONALEP', color: '#DD7710', lane: 2, from: 'mx-s3',
      desc: 'Colegio Nacional de Educación Profesional Técnica: 3-year profesional técnico bachiller ' +
        'programmes (e.g. nursing, automotive, IT, tourism). Graduates now also receive the ' +
        'bachillerato, so they can enter higher education.' },
  ],
  stations: [
    { id: 'mx-ini', line: 'ini', name: 'Inicial', local: 'Educación inicial (CENDI, guardería)', ages: [0, 3], isced: 0,
      desc: 'Not compulsory. Insured working parents can use IMSS or ISSSTE guarderías; others use ' +
        'CENDI, community programmes, family care or private nurseries.',
      cost: { amount: 0, note: 'Public CENDI and IMSS/ISSSTE guarderías are free for eligible families; private nurseries charge fees.' } },
    { id: 'mx-p1', line: 'pre', name: '1º', local: 'Primero de preescolar', ages: [3, 4], isced: 0,
      desc: 'First year of preescolar, for children who are 3 by 31 December. Compulsory in law, but ' +
        'attendance in this first year is lower than in the last two.',
      cost: { amount: 0, note: 'Free in public jardines de niños; voluntary parents\' contributions are common.', src: 1 } },
    { id: 'mx-p2', line: 'pre', name: '2º', local: 'Segundo de preescolar', ages: [4, 5], isced: 0,
      desc: 'Second year of preescolar.', cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'mx-p3', line: 'pre', name: '3º', local: 'Tercero de preescolar', ages: [5, 6], isced: 0,
      desc: 'Last year of preescolar; the preescolar certificate is needed for primaria. Pre-' +
        'registration for the next level (preinscripciones) takes place in February.',
      events: ['Preinscripción a primaria (February)'],
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'mx-e1', line: 'prim', name: '1º', local: 'Primero de primaria', ages: [6, 7], isced: 1,
      desc: 'Start of primaria at 6 (by 31 December). Children learn to read and write in 1º–2º.',
      cost: { amount: 0, note: 'Free; free textbooks (libros de texto gratuitos) for every pupil.', src: 1 } },
    { id: 'mx-e2', line: 'prim', name: '2º–5º', local: 'Grados 2–5', ages: [7, 11], isced: 1,
      desc: 'Middle years of primaria. Schools run national diagnostic assessments at the start of ' +
        'each year; the former PLANEA and ENLACE tests have been discontinued.',
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'mx-e6', line: 'prim', name: '6º', ages: [11, 12], isced: 1,
      desc: 'Last year of primaria. Families pre-register for secundaria in February; places are ' +
        'assigned mainly by residence.',
      exam: 'Certificado de primaria', events: ['Preinscripción a secundaria (February)'],
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'mx-s1', line: 'sec', name: '1º', ages: [12, 13], isced: 2,
      desc: 'Start of secundaria, with subject teachers (or one teacher in telesecundaria).',
      cost: { amount: 0, note: 'Free. Since 2025 every public-secundaria pupil gets the Beca Rita Cetina (about MXN 1,900 per bimester).', src: 10 } },
    { id: 'mx-s2', line: 'sec', name: '2º', ages: [13, 14], isced: 2,
      desc: 'Second year of secundaria.', cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'mx-s3', line: 'sec', name: '3º', ages: [14, 15], isced: 2,
      desc: 'Last year of compulsory basic education. Pupils apply for media superior: in the Mexico ' +
        'City metropolitan area the COMIPEMS exam was abolished in 2025 and replaced by the ' +
        '“Mi derecho, mi lugar” platform (choose up to 10 schools; places without an exam). UNAM ' +
        'and IPN still use a joint entrance exam. Registration ran March–April in 2026, with ' +
        'results on 18 August.',
      exam: 'Certificado de secundaria',
      events: ['“Mi derecho, mi lugar” registration (March–April)', 'UNAM/IPN exam (May–June)', 'Assignment results (August)'],
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'mx-b1', line: 'bg', name: '1º año', ages: [15, 16], isced: 3,
      desc: 'Common core (currículum fundamental) of the Marco Curricular Común: language, maths, ' +
        'sciences, social sciences and socio-emotional education. Since 2025–26 pupils can move ' +
        'between subsystems without starting over.',
      cost: { amount: 0, note: 'Free in public schools. Beca Universal Benito Juárez pays about MXN 1,900 per bimester to every public-school student.', src: 10 } },
    { id: 'mx-b2', line: 'bg', name: '2º año', ages: [16, 17], isced: 3,
      desc: 'Second year; elective areas (propedéuticas) begin.',
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'mx-b3', line: 'bg', name: '3º año', ages: [17, 18], isced: 3,
      desc: 'Final year. Students apply to universities: UNAM and IPN hold their own entrance exams ' +
        '(UNAM\'s ENP and CCH pupils can enter UNAM by “pase reglamentado”), and many universities ' +
        'use CENEVAL\'s EXANI-II. From 2026 graduates receive a certificate of completion plus a ' +
        'certificate of professional training backed by universities.',
      exam: 'Certificado de bachillerato',
      events: ['University entrance exams (February–June)', 'Double certificate (from July 2026)'],
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'mx-lic', line: 'uni', name: 'Licenciatura', ages: [18, 22], isced: 6,
      desc: 'Bachelor-level degree of 4–5 years (8–10 semesters), professionally oriented from the ' +
        'first semester; it ends with a titulación requirement (thesis, exam or other option) and ' +
        'social service (servicio social). Escuelas normales train teachers at this level.',
      exam: 'Título de licenciatura',
      share: { pct: 38, of: 'of higher-education students attend private institutions (2024–25)', src: 7 },
      cost: { amount: 0, private: 49000,
        note: 'UNAM charges an optional 25-centavo fee; some state universities charge modest fees. Private: about MXN 49,000 average; elite ones far more.', src: 11 } },
    { id: 'mx-mae', line: 'uni', name: 'Maestría', ages: [22, 24], isced: 7,
      desc: 'Master\'s degree, usually 2 years. Programmes in the national postgraduate system ' +
        '(SNP) come with SECIHTI (formerly CONAHCYT) stipends for full-time students.',
      exam: 'Grado de maestro', cost: { amount: 0, note: 'Free or low-cost at UNAM and many public universities; private master\'s programmes charge fees.', src: 12 } },
    { id: 'mx-doc', line: 'uni', name: 'Doctorado', ages: [24, 28], isced: 8,
      desc: 'Doctorate, usually 3–4 years, often funded by a SECIHTI scholarship.',
      exam: 'Grado de doctor', cost: { amount: 0, note: 'Free or low-cost at public universities; SECIHTI stipends for SNP programmes.', src: 12 } },
    { id: 'mx-bt', line: 'bt', name: 'Bach. tecnológico', local: 'CBTIS · CETIS · CECyT · CECyTE', ages: [15, 18], isced: 3,
      desc: 'Three years combining the common bachillerato core with a technical career (e.g. ' +
        'programming, electricity, accounting, nursing).',
      exam: 'Bachillerato + título de técnico',
      cost: { amount: 0, note: 'Free in public schools; Beca Benito Juárez applies.', src: 10 } },
    { id: 'mx-tsu', line: 'tsu', name: 'TSU', local: 'Técnico Superior Universitario', ages: [18, 20], isced: 5,
      desc: 'Two-year applied programme at a universidad tecnológica, with a final work placement ' +
        '(estadía) in a company.',
      exam: 'Título de TSU', cost: { amount: 0, note: 'Public; universidades tecnológicas charge only modest, state-set fees.', src: 8 } },
    { id: 'mx-ing', line: 'tsu', name: 'Lic./Ing.', local: 'Continuación a licenciatura o ingeniería', ages: [20, 21.5], isced: 6,
      desc: 'TSU graduates can continue for about 1½ years to a licenciatura or ingeniería at the ' +
        'same university.',
      exam: 'Licenciatura / Ingeniería', cost: { amount: 0, note: 'Public; modest state-set fees.', src: 8 } },
    { id: 'mx-cona', line: 'cona', name: 'Prof. técnico', local: 'Profesional Técnico Bachiller (CONALEP)', ages: [15, 18], isced: 3,
      desc: 'Three-year vocational programme with workplace training (including a dual model) ' +
        'leading to a profesional técnico bachiller title.',
      exam: 'Profesional Técnico Bachiller',
      cost: { amount: 0, note: 'Public; Beca Benito Juárez applies.', src: 10 } },
  ],
  transfers: [
    { from: 'mx-bt', to: 'mx-lic', label: 'Bach. tecnológico → universidad', desc: 'The bachillerato tecnológico is bivalent: graduates can enter any licenciatura (IPN\'s CECyT pupils often go on to IPN).' },
    { from: 'mx-cona', to: 'mx-tsu', label: 'CONALEP → TSU', desc: 'Profesional técnico bachiller graduates often continue at a universidad tecnológica.' },
    { from: 'mx-cona', to: 'mx-lic', label: 'CONALEP → licenciatura', desc: 'Since CONALEP also awards the bachillerato, graduates can apply to universities.' },
    { from: 'mx-b3', to: 'mx-tsu', label: 'Bach. general → TSU', desc: 'General bachillerato graduates can also enter universidades tecnológicas.' },
    { from: 'mx-b1', to: 'mx-bt', label: 'Change of subsystem', desc: 'Under the Bachillerato Nacional (2025) pupils can switch between subsystems (e.g. Bachilleres, CBTIS, CONALEP) with credit for semesters completed.' },
    { from: 'mx-ing', to: 'mx-mae', label: 'Ingeniería → maestría', desc: 'The TSU + continuation route gives a full licenciatura/ingeniería, so graduates can go on to a master\'s.' },
  ],
  sources: [
    { title: 'SEP — Secretaría de Educación Pública', url: 'https://www.gob.mx/sep' },
    { title: 'Constitución Política de los Estados Unidos Mexicanos, Art. 3 (Cámara de Diputados)', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf' },
    { title: 'Ley General de Educación (Cámara de Diputados)', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LGE.pdf' },
    { title: 'SEP — Boletín 346: Sistema Nacional de Bachillerato, doble certificación', url: 'https://www.gob.mx/sep/prensa/boletin-346-sistema-nacional-de-bachillerato-doble-certificacion-mejores-planes-de-estudio-y-nuevas-carreras-mario-delgado-carrillo' },
    { title: 'SEP — Boletín 34: “Mi derecho, mi lugar”, desaparece el examen Comipems (Feb 2025)', url: 'https://www.gob.mx/sep/prensa/boletin-34-con-el-bachillerato-nacional-para-todas-y-todos-mi-derecho-mi-lugar-ningun-joven-sera-rechazado-mario-delgado' },
    { title: 'SEP — Boletín 247: Bachillerato Nacional, 527,000 graduates with double certificate (July 2026)', url: 'https://www.gob.mx/sep/prensa/boletin-247-con-el-bachillerato-nacional-2-millones-de-jovenes-amplian-sus-oportunidades-academicas-y-laborales-mario-delgado' },
    { title: 'Expansión — “Mi derecho, mi lugar” 2026: registro', url: 'https://politica.expansion.mx/cdmx/2026/02/23/mi-derecho-mi-lugar-2026-registro' },
    { title: 'SEP Subsecretaría de Educación Superior / ANUIES — Panorama actual (June 2026), enrolment by sostenimiento (Formato 911)', url: 'https://organoscolegiados.anuies.mx/asambleageneral/wp-content/uploads/sites/3/2026/06/7-Panorama-actual-y-acciones-prioritarias-de-la-Subsecretaria-de-Educacion-Superior-1.pdf' },
    { title: 'Ley General de Educación Superior (2021)', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LGES_200421.pdf' },
    { title: 'Generación Universitaria — ¿Cuánto cuesta estudiar en la UNAM en 2025?', url: 'https://generacionuniversitaria.com.mx/?p=50300' },
    { title: 'Gobierno de México — Becas para el Bienestar (Benito Juárez, Rita Cetina)', url: 'https://www.gob.mx/becasbenitojuarez' },
    { title: 'El Imparcial — Las universidades más costosas de México en 2026 (INEGI average private spending)', url: 'https://www.elimparcial.com/dinero/2026/05/11/estas-son-las-10-universidades-mas-costosas-de-mexico-en-2026-del-itesm-a-tecmilenio-los-costos-semestrales-oscilan-entre-79-mil-y-185-mil-pesos/' },
    { title: 'SECIHTI — Secretaría de Ciencia, Humanidades, Tecnología e Innovación (posgrado scholarships)', url: 'https://secihti.mx/' },
    { title: 'CENEVAL — EXANI-II admission exam', url: 'https://www.ceneval.edu.mx/' },
  ],
};
