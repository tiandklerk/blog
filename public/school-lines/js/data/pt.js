// Portugal (mainland; the Azores and Madeira run their own education departments within the same framework).
export default {
  id: 'pt',
  iso3: 'PRT',
  region: 'Europe',
  currency: 'EUR',
  name: 'Portugal',
  localName: 'Portugal',
  flag: '🇵🇹',
  summary:
    'Free crèche (Creche Feliz) for under-3s and pre-school from 3, then nine years of ensino básico in ' +
    'three cycles (1º ciclo grades 1–4, 2º ciclo 5–6, 3º ciclo 7–9) in a common, untracked curriculum. At ' +
    'about 15 pupils choose a three-year secondary course: científico-humanístico (academic, ending in ' +
    'national exams used for university entry) or profissional (vocational, with workplace training), ' +
    'plus smaller artistic courses. Schooling is compulsory to 18 or the end of 12th grade. Higher education ' +
    'is binary (universities and polytechnics): 2-year CTeSP, 3–4-year licenciatura, mestrado and ' +
    'doutoramento, with a capped annual fee (propina) of €697 for first degrees.',
  ageNote:
    'Children who turn 6 by 15 September must start 1st grade that school year; those turning 6 between ' +
    '16 September and 31 December may start if places allow. The school year starts in mid-September. ' +
    'Grade repetition (retenção) has fallen but still makes some pupils older than shown.',
  compulsory: {
    from: 6,
    to: 18,
    label: 'Escolaridade obrigatória 6–18',
    note:
      'Twelve years of compulsory schooling (since 2009, Law 85/2009): from age 6 until the 12th grade is ' +
      'completed or the pupil turns 18. A free place is guaranteed for every pupil.',
  },
  costNote:
    'Public schooling is free, and textbooks have been free in public schools since 2019. Creche Feliz makes ' +
    'crèche free in participating settings. The higher-education figure is the legal maximum propina for ' +
    '2025/26; stand-alone masters and doctorates set their own fees.',
  lines: [
    { id: 'creche', name: 'Creche', color: '#7C8A93', lane: 0,
      desc: 'Crèche for children from 4 months to 3 years, supervised by the Ministry of Labour, Solidarity ' +
        'and Social Security. Free since the Creche Feliz programme (phased in from 2022) in social-sector ' +
        'and participating private crèches.' },
    { id: 'pre', name: 'Pré-escolar', color: '#E2557B', lane: 0, from: 'pt-creche',
      desc: 'Educação pré-escolar (jardim de infância), ages 3–6. Optional but universal: Law 22/2025 extends ' +
        'the guaranteed place to all 3-year-olds. The teaching component (25 hours a week) is free.' },
    { id: 'c1', name: '1º ciclo', color: '#D2322D', lane: 0, from: 'pt-pre',
      desc: '1st cycle of basic education, grades 1–4, with one class teacher (professor titular). English ' +
        'starts in grade 3.' },
    { id: 'c2', name: '2º ciclo', color: '#DD7710', lane: 0, from: 'pt-4',
      desc: '2nd cycle, grades 5–6, with subject teachers. Often in a different school of the same ' +
        'agrupamento (school cluster).' },
    { id: 'c3', name: '3º ciclo', color: '#1E66C9', lane: 0, from: 'pt-6',
      desc: '3rd cycle, grades 7–9: a common curriculum with a second foreign language. Ends with the ' +
        'national provas finais in Portuguese and maths.' },
    { id: 'ch', name: 'Científico-hum.', color: '#7A3E9D', lane: -1, from: 'pt-9',
      desc: 'Cursos científico-humanísticos, grades 10–12: Ciências e Tecnologias, Ciências Socioeconómicas, ' +
        'Línguas e Humanidades or Artes Visuais. National exams (exames finais nacionais) serve as ' +
        'entrance exams (provas de ingresso) for higher education.' },
    { id: 'uni', name: 'Ensino superior', color: '#4B2470', lane: -1, from: 'pt-12',
      desc: 'Universities and polytechnics. Places are allocated by the national access competition ' +
        '(Concurso Nacional de Acesso), based on the secondary average and entrance exams; first phase ' +
        'applications are in late July–August.' },
    { id: 'prof', name: 'Profissional', color: '#2C9546', lane: 1, from: 'pt-9',
      desc: 'Cursos profissionais, grades 10–12: vocational courses with workplace training (formação em ' +
        'contexto de trabalho) leading to a secondary diploma plus a level-4 professional qualification ' +
        '(dual certification). Offered by public secondary schools and professional schools.' },
    { id: 'ctesp', name: 'CTeSP', color: '#00A0A6', lane: 1, from: 'pt-p12',
      desc: 'Cursos técnicos superiores profissionais: two-year, 120-credit short-cycle programmes at ' +
        'polytechnics, with a work placement. They give a diploma, not a degree, but lead on to a licenciatura.' },
  ],
  stations: [
    { id: 'pt-creche', line: 'creche', name: 'Creche', ages: [0.5, 3], isced: 0,
      desc: 'Childcare from 4 months. Since September 2022 crèche has been made free in stages under Creche ' +
        'Feliz, first for the youngest cohort and then for all crèche ages, including participating private ' +
        'crèches where social places run short. Places are allocated by priority criteria.',
      cost: { amount: 0, note: 'Free under Creche Feliz in social-sector and participating private crèches.', src: 4 } },
    { id: 'pt-pre', line: 'pre', name: 'Pré-escolar', local: 'Jardim de infância', ages: [3, 6], isced: 0,
      desc: 'Play-based learning guided by national curriculum guidelines. Public jardins de infância offer ' +
        '25 free hours a week; extended hours and meals (componente de apoio à família) are charged by income.',
      cost: { amount: 0, note: 'Teaching component free; extended-hours and meal charges are means-tested.', src: 1 } },
    // 1º ciclo
    { id: 'pt-13', line: 'c1', name: '1º–3º ano', ages: [6, 9], isced: 1,
      desc: 'Reading, writing and maths with one teacher. Optional enrichment activities (AEC) after lessons.',
      cost: { amount: 0, note: 'Free; textbooks free in public schools.' } },
    { id: 'pt-4', line: 'c1', name: '4º ano', ages: [9, 10], isced: 1,
      desc: 'End of the 1st cycle. Pupils take national monitoring tests (ModA, Provas de Monitorização da ' +
        'Aprendizagem), which replaced the earlier provas de aferição; they do not count for grades.',
      events: ['ModA monitoring tests (spring)'],
      cost: { amount: 0, note: 'Free.' } },
    // 2º ciclo
    { id: 'pt-5', line: 'c2', name: '5º ano', ages: [10, 11], isced: 1,
      desc: 'Subject teachers start. In Portugal grades 5–6 are still classed as primary (ISCED 1).',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'pt-6', line: 'c2', name: '6º ano', ages: [11, 12], isced: 1,
      desc: 'End of the 2nd cycle, with ModA monitoring tests.',
      events: ['ModA monitoring tests (spring)'],
      cost: { amount: 0, note: 'Free.' } },
    // 3º ciclo
    { id: 'pt-78', line: 'c3', name: '7º–8º ano', ages: [12, 14], isced: 2,
      desc: 'Lower secondary with a second foreign language (French, Spanish or German).',
      cost: { amount: 0, note: 'Free.' } },
    { id: 'pt-9', line: 'c3', name: '9º ano', ages: [14, 15], isced: 2,
      desc: 'End of basic education. Pupils sit the national provas finais in Portuguese and maths (first ' +
        'phase in June) and choose a secondary course on the Portal das Matrículas, ranking up to five schools.',
      exam: 'Provas finais do 9º ano', events: ['Provas finais (June)', 'Secondary enrolment (Portal das Matrículas)'],
      cost: { amount: 0, note: 'Free.' } },
    // Científico-humanístico
    { id: 'pt-10', line: 'ch', name: '10º ano', ages: [15, 16], isced: 3,
      desc: 'Start of the three-year course: Portuguese, a foreign language, philosophy and PE plus two-year ' +
        '(bienal) and three-year (trienal) specific subjects.',
      cost: { amount: 0, note: 'Free; textbooks free.' } },
    { id: 'pt-11', line: 'ch', name: '11º ano', ages: [16, 17], isced: 3,
      desc: 'Two-year subjects end; students sit national exams in them if they need them for access ' +
        'to higher education.',
      events: ['Exames nacionais, 1st phase (June–July)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'pt-12', line: 'ch', name: '12º ano', ages: [17, 18], isced: 3,
      desc: 'Final year. National exams are held in a first phase (June–July) and a second phase ' +
        '(July); 2026 first-phase results came out on 21 July. Candidates then apply through the national ' +
        'access competition.',
      exam: 'Diploma do ensino secundário + exames nacionais',
      events: ['Exames nacionais (June–July)', 'Concurso Nacional de Acesso, 1st phase (late July–August)'],
      cost: { amount: 0, note: 'Free.' } },
    // Ensino superior
    { id: 'pt-lic', line: 'uni', name: 'Licenciatura', ages: [18, 21], isced: 6,
      desc: 'First degree, 180–240 ECTS (3–4 years), at a university or polytechnic. Medicine, architecture, ' +
        'pharmacy and some engineering are integrated masters (mestrado integrado, 300–360 ECTS).',
      exam: 'Licenciado',
      cost: { amount: 697, note: 'Maximum propina at public institutions for 2025/26 (unchanged); also applies to CTeSP and integrated masters.', src: 2 } },
    { id: 'pt-mes', line: 'uni', name: 'Mestrado', ages: [21, 23], isced: 7,
      desc: 'Master, 90–120 ECTS (1½–2 years), with a dissertation, project or internship. Fees for masters ' +
        'that are not required for professional practice are set by each institution.',
      exam: 'Mestre' },
    { id: 'pt-dout', line: 'uni', name: 'Doutoramento', ages: [23, 27], isced: 8,
      desc: 'Doctorate, typically 3–4 years, often funded by an FCT grant. Fees are set by each institution.',
      exam: 'Doutor' },
    // Profissional
    { id: 'pt-p1011', line: 'prof', name: '10º–11º', local: 'Curso profissional', ages: [15, 17], isced: 3,
      desc: 'Modular courses in areas such as IT, tourism, electronics or health, combining general, ' +
        'scientific and technical training.',
      cost: { amount: 0, note: 'Free; students may receive grants for meals and transport.' } },
    { id: 'pt-p12', line: 'prof', name: '12º (PAP)', local: 'Prova de Aptidão Profissional', ages: [17, 18], isced: 3,
      desc: 'Final year with a long work placement and the Prova de Aptidão Profissional (PAP), a project ' +
        'presented to a jury. Graduates can enter higher education through a special competition for ' +
        'vocational graduates without taking national exams, or through the general competition with exams.',
      exam: 'Diploma + qualificação profissional nível 4',
      cost: { amount: 0, note: 'Free.' } },
    // CTeSP
    { id: 'pt-ctesp', line: 'ctesp', name: 'CTeSP', local: 'Técnico Superior Profissional', ages: [18, 20], isced: 5,
      desc: 'Four semesters (120 credits) at a polytechnic, including a work placement. Admission by each ' +
        'institution\'s own competition.',
      exam: 'Diploma de técnico superior profissional',
      cost: { amount: 697, note: 'Same €697 maximum propina as a licenciatura (2025/26).', src: 2 } },
  ],
  transfers: [
    { from: 'pt-p12', to: 'pt-lic', label: 'Profissional → licenciatura',
      desc: 'A special access competition lets vocational graduates enter higher education without national exams.' },
    { from: 'pt-12', to: 'pt-ctesp', label: 'Secundário → CTeSP',
      desc: 'Any secondary diploma gives access to a CTeSP.' },
    { from: 'pt-ctesp', to: 'pt-lic', label: 'CTeSP → licenciatura',
      desc: 'CTeSP graduates can apply to licenciaturas and integrated masters through a dedicated competition, with credit for prior study.' },
    { from: 'pt-p1011', to: 'pt-11', label: 'Change of course',
      desc: 'Students can switch between secondary courses (permuta), sometimes needing extra subjects or exams.' },
  ],
  sources: [
    { title: 'Eurydice — Portugal: overview', url: 'https://eurydice.eacea.ec.europa.eu/national-education-systems/portugal/overview' },
    { title: 'Eurydice — Portugal: early childhood education and care', url: 'https://eurydice.eacea.ec.europa.eu/national-education-systems/portugal/early-childhood-education-and-care' },
    { title: 'DGES — Propinas (ensino superior público)', url: 'https://www.dges.gov.pt/pt/pagina/propinas' },
    { title: 'EduQA / JNE — Provas e exames 2025/26', url: 'https://eduqa.pt/provas-e-exames/' },
    { title: 'Segurança Social — Creche Feliz', url: 'https://www.seg-social.pt/creche-feliz' },
    { title: 'Eurydice — Portugal: organisation of upper secondary education', url: 'https://eurydice.eacea.ec.europa.eu/national-education-systems/portugal/organisation-general-upper-secondary-education' },
    { title: 'DGES — Cursos técnicos superiores profissionais', url: 'https://www.dges.gov.pt/pt/pagina/cursos-tecnicos-superiores-profissionais' },
  ],
};
