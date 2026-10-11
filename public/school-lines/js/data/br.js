// Brazil — national framework (LDB, BNCC) set by the MEC; municipalities run early years and most
// ensino fundamental, the 27 states run most ensino médio, and the federal government runs the
// federal universities and Institutos Federais.
export default {
  id: 'br',
  iso3: 'BRA',
  region: 'Americas',
  currency: 'BRL',
  name: 'Brazil',
  localName: 'Brasil',
  flag: '🇧🇷',
  summary:
    'Educação básica has three stages: educação infantil (creche 0–3, compulsory pré-escola 4–5), a ' +
    'nine-year ensino fundamental (anos iniciais 1º–5º, anos finais 6º–9º) and a three-year ensino ' +
    'médio, which can be combined with a técnico qualification (técnico integrado). The 2024 reform ' +
    '(Lei 14.945) restored a larger common core from 2025. Nearly all university entry runs on the ' +
    'national ENEM exam in November: public places through SISU, scholarships at private institutions ' +
    'through ProUni, and loans through FIES. Public universities are free, but about 80% of ' +
    'undergraduates attend private institutions, half of them in distance learning.',
  ageNote:
    'A child must be 4 by 31 March to start pré-escola and 6 by 31 March to start the 1º ano of ' +
    'ensino fundamental (CNE rule upheld by the Supreme Court in 2018). The school year runs from ' +
    'February to December. Repetition and late entry are common, so many pupils are older than the ' +
    'typical ages shown.',
  compulsory: {
    from: 4,
    to: 18,
    label: 'Obrigatória 4–17',
    note:
      'Since Constitutional Amendment 59 (2009), fully in force from 2016, education is compulsory and ' +
      'free from age 4 to 17: pré-escola, ensino fundamental and ensino médio. Before that it was ' +
      'compulsory only for ensino fundamental.',
  },
  costNote:
    'Public education is free at every level, including federal and state universities (Constitution ' +
    'art. 206). Private figures are average list tuition at private higher-education institutions ' +
    '(Semesp survey, 2024).',
  lines: [
    { id: 'creche', name: 'Creche', color: '#7C8A93', lane: 0,
      desc: 'Day care for 0–3-year-olds, run mostly by municipalities and partner (conveniada) ' +
        'non-profits. Not compulsory, and waiting lists are common.' },
    { id: 'pre', name: 'Pré-escola', color: '#E2557B', lane: 0, from: 'br-creche',
      desc: 'Two years of pre-school for 4- and 5-year-olds, compulsory since 2016 and run mostly by ' +
        'municipalities.' },
    { id: 'ef1', name: 'Fundamental I', color: '#D2322D', lane: 0, from: 'br-pre2',
      desc: 'Ensino fundamental, anos iniciais (1º–5º ano), usually with one class teacher. The goal ' +
        'is full literacy by the end of the 2º ano (Compromisso Nacional Criança Alfabetizada, 2023).' },
    { id: 'ef2', name: 'Fundamental II', color: '#1E66C9', lane: 0, from: 'br-ef5',
      desc: 'Ensino fundamental, anos finais (6º–9º ano), with subject teachers and the national ' +
        'common curriculum (BNCC).' },
    { id: 'em', name: 'Ensino médio', color: '#7A3E9D', lane: -1, from: 'br-ef9',
      desc: 'Three-year upper secondary (1ª–3ª série), run mostly by the states. Under Lei 14.945/2024, ' +
        'in force from 2025, at least 2,400 of the 3,000 hours are common core (formação geral ' +
        'básica) and 600 hours go to itinerários formativos (languages, maths, sciences or humanities).' },
    { id: 'uni', name: 'Graduação', color: '#4B2470', lane: -2, from: 'br-em3',
      desc: 'Undergraduate degrees: bacharelado (4–6 years) and licenciatura (teacher training, ' +
        '4 years). Then stricto sensu postgraduate study: mestrado (2 years) and doutorado ' +
        '(4 years), evaluated and funded by CAPES. Federal and state universities are free; most ' +
        'students attend private institutions.' },
    { id: 'tec', name: 'Tecnólogo', color: '#2E8FB8', lane: -1, from: 'br-em3',
      desc: 'Cursos superiores de tecnologia: 2–3-year degrees focused on a field of work (e.g. IT ' +
        'systems analysis, logistics, HR, agribusiness). They are full graduação degrees giving access ' +
        'to postgraduate study, and make up about a fifth of enrolments.' },
    { id: 'eti', name: 'Técnico integrado', color: '#2C9546', lane: 1, from: 'br-ef9',
      desc: 'Ensino médio integrated with a technical course, in state schools, the federal network ' +
        '(Institutos Federais, CEFETs, often 3–4 years full-time) and the S system (SENAI, SENAC). ' +
        'The 2024 law allows a 2,100-hour common core plus up to 1,200 technical hours.' },
    { id: 'sub', name: 'Técnico subsequente', color: '#1F6E33', lane: 1, from: 'br-eti3',
      desc: 'Técnico subsequente: technical courses of 1–2 years for those who have already finished ' +
        'ensino médio, offered by Institutos Federais, SENAI/SENAC and private schools.' },
  ],
  stations: [
    { id: 'br-creche', line: 'creche', name: 'Creche', ages: [0, 4], isced: 0,
      desc: 'Municipal or partner creches, often full-day. Not compulsory; demand exceeds supply in ' +
        'many cities.',
      cost: { amount: 0, note: 'Free in public and partner (conveniada) creches; private creches charge fees.', src: 1 } },
    { id: 'br-pre1', line: 'pre', name: 'Pré I', ages: [4, 5], isced: 0,
      desc: 'First compulsory year: children must be 4 by 31 March.',
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'br-pre2', line: 'pre', name: 'Pré II', ages: [5, 6], isced: 0,
      desc: 'Second year of pré-escola, preparing for literacy.',
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'br-ef1', line: 'ef1', name: '1º ano', ages: [6, 7], isced: 1,
      desc: 'Ensino fundamental starts at 6 (since the 2006 change from 8 to 9 years). Literacy ' +
        'cycle (ciclo de alfabetização) of 1º–2º ano, usually without retention.',
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'br-ef2', line: 'ef1', name: '2º ano', ages: [7, 8], isced: 1,
      desc: 'End of the literacy cycle. The national SAEB assessment tests literacy in the 2º ano.',
      events: ['SAEB (2º ano, odd years)'],
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'br-ef3', line: 'ef1', name: '3º–4º', ages: [8, 10], isced: 1, desc: 'Middle years of the anos iniciais.',
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'br-ef5', line: 'ef1', name: '5º ano', ages: [10, 11], isced: 1,
      desc: 'Last year of the anos iniciais. SAEB tests Portuguese and maths; results feed the IDEB ' +
        'school quality index.',
      events: ['SAEB (5º ano, Oct–Nov of odd years)'],
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'br-ef6', line: 'ef2', name: '6º ano', ages: [11, 12], isced: 2,
      desc: 'Start of the anos finais with subject teachers; pupils often move from a municipal to a ' +
        'state school.',
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'br-ef7', line: 'ef2', name: '7º–8º', ages: [12, 14], isced: 2, desc: 'Middle years of the anos finais.',
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'br-ef9', line: 'ef2', name: '9º ano', ages: [14, 15], isced: 2,
      desc: 'Last year of ensino fundamental, with SAEB tests. Pupils choose regular ensino médio or ' +
        'a técnico integrado course; Institutos Federais and some state technical schools select by ' +
        'entrance exam (vestibulinho) or lottery.',
      exam: 'Certificado de conclusão do ensino fundamental',
      events: ['SAEB (9º ano, odd years)', 'Institutos Federais selection (Oct–Dec)'],
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'br-em1', line: 'em', name: '1ª série', ages: [15, 16], isced: 3,
      desc: 'First year of ensino médio, mostly common core. Low-income public-school pupils can ' +
        'receive Pé-de-Meia (2024): monthly payments plus a yearly savings deposit for passing.',
      cost: { amount: 0, note: 'Free in public schools; Pé-de-Meia pays low-income pupils to stay in school.', src: 7 } },
    { id: 'br-em2', line: 'em', name: '2ª série', ages: [16, 17], isced: 3,
      desc: 'Itinerários formativos deepen chosen areas; schools must offer at least two.',
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'br-em3', line: 'em', name: '3ª série', ages: [17, 18], isced: 3,
      desc: 'Final year. The ENEM (two Sundays in November; 8 and 15 Nov 2026) covers languages, ' +
        'humanities, sciences, maths and an essay. Public-school final-year pupils are registered ' +
        'automatically and exempt from the R$85 fee.',
      exam: 'Certificado de conclusão do ensino médio',
      events: ['ENEM registration (May–June)', 'ENEM (November)', 'SAEB (odd years)'],
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'br-bach', line: 'uni', name: 'Bacharelado', ages: [18, 22], isced: 6,
      desc: 'Entry via SISU (one round in January, using the best of the last three ENEM scores; ' +
        'about 275,000 places in 2026), universities\' own vestibulares, ProUni scholarships at ' +
        'private institutions (full for family income up to 1.5 minimum wages per person) or FIES ' +
        'loans. The Lei de Cotas reserves 50% of federal places for public-school students, with ' +
        'sub-quotas for low-income, Black, Indigenous and disabled students.',
      exam: 'Diploma de bacharel / licenciado',
      share: { pct: 79.8, of: 'of undergraduate enrolments are in private institutions (2024)', src: 4 },
      cost: { amount: 0, private: 13600,
        note: 'Federal and state universities are free. Private average about R$1,132/month in person, R$348 online (2024).', src: 6 } },
    { id: 'br-mest', line: 'uni', name: 'Mestrado', ages: [22, 24], isced: 7,
      desc: 'Academic or professional master\'s (stricto sensu), about 2 years, with a dissertation. ' +
        'CAPES and CNPq grant monthly stipends.',
      exam: 'Título de mestre', cost: { amount: 0, note: 'Free at public universities; private programmes charge fees.', src: 8 } },
    { id: 'br-dout', line: 'uni', name: 'Doutorado', ages: [24, 28], isced: 8,
      desc: 'Doctorate of about 4 years, mostly at public universities, often with a CAPES/CNPq ' +
        'stipend.',
      exam: 'Título de doutor', cost: { amount: 0, note: 'Free at public universities.', src: 8 } },
    { id: 'br-tecn', line: 'tec', name: 'Tecnólogo', local: 'Curso superior de tecnologia', ages: [18, 20.5], isced: 6,
      desc: 'Shorter graduação degree, mostly at private institutions and often online; also at ' +
        'Institutos Federais and Fatecs (São Paulo). Classified here with bachelor-level degrees ' +
        'because it gives direct access to master\'s study.',
      exam: 'Diploma de tecnólogo',
      share: { pct: 20.2, of: 'of undergraduate enrolments are in tecnólogo courses (2024)', src: 4 },
      cost: { amount: 0, private: 4200, note: 'Free at public institutions; online private courses average about R$348/month (2024).', src: 6 } },
    { id: 'br-eti1', line: 'eti', name: 'Integrado', local: 'EM integrado ao técnico, 1º–2º ano', ages: [15, 17], isced: 3,
      desc: 'Common core plus technical subjects (e.g. IT, electronics, agriculture, nursing), often ' +
        'full-time.',
      cost: { amount: 0, note: 'Free in federal and state schools.', src: 1 } },
    { id: 'br-eti3', line: 'eti', name: '3º ano', ages: [17, 18], isced: 3,
      desc: 'Final year, often with a supervised internship (estágio). Graduates get both the ensino ' +
        'médio certificate and a técnico diploma, and can sit the ENEM.',
      exam: 'Diploma de técnico de nível médio',
      events: ['ENEM (November)'],
      cost: { amount: 0, note: 'Free in public schools.', src: 1 } },
    { id: 'br-sub', line: 'sub', name: 'Subsequente', ages: [18, 19.5], isced: 4,
      desc: 'Technical course after ensino médio (800–1,200 hours), leading to a técnico diploma.',
      exam: 'Diploma de técnico', cost: { amount: 0, note: 'Free at Institutos Federais and state schools; SENAI/SENAC and private schools may charge.', src: 9 } },
  ],
  transfers: [
    { from: 'br-em3', to: 'br-sub', label: 'Ensino médio → técnico subsequente', desc: 'Graduates of regular ensino médio can add a technical qualification in 1–2 years.' },
    { from: 'br-eti3', to: 'br-bach', label: 'Técnico integrado → university', desc: 'Técnico integrado graduates hold a full ensino médio certificate and enter university via ENEM/SISU like everyone else.' },
    { from: 'br-eti3', to: 'br-tecn', label: 'Técnico → tecnólogo', desc: 'A common route into a related tecnólogo degree.' },
    { from: 'br-tecn', to: 'br-mest', label: 'Tecnólogo → mestrado', desc: 'Tecnólogo degrees are graduação degrees, so graduates can apply for stricto sensu postgraduate programmes.' },
    { from: 'br-em1', to: 'br-eti1', label: 'Concomitante', desc: 'Pupils in regular ensino médio can take a technical course at the same time in another school (técnico concomitante).' },
  ],
  sources: [
    { title: 'MEC — Ministério da Educação', url: 'https://www.gov.br/mec/pt-br' },
    { title: 'Constituição Federal, arts. 206 and 208 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' },
    { title: 'Lei de Diretrizes e Bases da Educação (LDB, Lei 9.394/1996)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9394.htm' },
    { title: 'Agência Gov — Sancionada lei que reestrutura o ensino médio (Lei 14.945/2024)', url: 'https://agenciagov.ebc.com.br/noticias/202408/sancionada-lei-que-reestrutura-o-ensino-medio' },
    { title: 'Agência Brasil — Censo da Educação Superior 2024: Brasil tem mais alunos em cursos a distância (Sept 2025)', url: 'https://agenciabrasil.ebc.com.br/educacao/noticia/2025-09/brasil-tem-mais-alunos-em-cursos-distancia-que-em-presenciais' },
    { title: 'INEP — Enem', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem' },
    { title: 'Pravaler — Quanto custa fazer faculdade particular (Instituto Semesp tuition survey 2024)', url: 'https://www.pravaler.com.br/noticias/cursos-superiores/quanto-custa-fazer-faculdade-particular/' },
    { title: 'MEC — Pé-de-Meia', url: 'https://www.gov.br/mec/pt-br/pe-de-meia' },
    { title: 'CAPES — Coordenação de Aperfeiçoamento de Pessoal de Nível Superior', url: 'https://www.gov.br/capes/pt-br' },
    { title: 'MEC — Rede Federal de Educação Profissional, Científica e Tecnológica', url: 'https://www.gov.br/mec/pt-br/acesso-a-informacao/institucional/secretarias/secretaria-de-educacao-profissional/rede-federal' },
    { title: 'MEC — Sisu', url: 'https://acessounico.mec.gov.br/sisu' },
    { title: 'MEC — Prouni', url: 'https://acessounico.mec.gov.br/prouni' },
    { title: 'MEC — Fies', url: 'https://www.gov.br/mec/pt-br/fies' },
    { title: 'Lei 12.711/2012 (Lei de Cotas), updated by Lei 14.723/2023', url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12711.htm' },
    { title: 'INEP — SAEB', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/saeb' },
    { title: 'CNN Brasil — Inscrições para o Sisu 2026 começam em 19 de janeiro', url: 'https://www.cnnbrasil.com.br/educacao/inscricoes-para-o-sisu-2026-comecam-em-19-de-janeiro/' },
    { title: 'INEP — Censo Escolar', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/censo-escolar' },
  ],
};
