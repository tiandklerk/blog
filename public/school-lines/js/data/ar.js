// Argentina — federal system: the national Ley de Educación Nacional (26.206) sets the framework,
// and the 24 jurisdictions (23 provinces + the City of Buenos Aires) run schools and teacher colleges.
export default {
  id: 'ar',
  iso3: 'ARG',
  region: 'Americas',
  currency: 'ARS',
  name: 'Argentina',
  localName: 'Argentina',
  flag: '🇦🇷',
  summary:
    'Nivel inicial (jardín maternal and jardín de infantes, with compulsory salas de 4 and 5) is ' +
    'followed by 12 years of primaria and secundaria, split 6+6 or 7+5 depending on the province. ' +
    'Secundaria has a common ciclo básico and a ciclo orientado (bachiller in a chosen orientation); ' +
    'technical schools run a year longer and award a técnico title. After secundaria students can ' +
    'go to a free terciario institute (teacher training or higher technical programmes) or to a ' +
    'university. Public universities charge no tuition for undergraduate degrees and admit without ' +
    'an entrance exam, though many have an introductory cycle such as the UBA\'s CBC.',
  ageNote:
    'Children start primaria in the year they turn 6 by 30 June; the school year runs from ' +
    'late February/March to December. The map shows the 6+6 structure used by Buenos Aires province ' +
    'and most provinces; the City of Buenos Aires and some provinces (e.g. Santa Fe, Neuquén) use 7 ' +
    'years of primaria and 5 of secundaria, with the same total.',
  compulsory: {
    from: 4,
    to: 18,
    label: 'Obligatoria 4 – fin de secundaria',
    note:
      'The 2006 Ley de Educación Nacional made secundaria compulsory, and Ley 27.045 (2014) lowered ' +
      'the starting age to 4 (sala de 4). The State must also make sala de 3 universally available.',
  },
  costNote:
    'Public education is free at every level, including undergraduate degrees at national ' +
    'universities (Ley 27.204, 2015). Private schools, most of them state-subsidised, charge monthly ' +
    'fees. Postgraduate programmes usually charge fees, even at public universities.',
  lines: [
    { id: 'mat', name: 'Jardín maternal', color: '#7C8A93', lane: 0,
      desc: 'Educación inicial from 45 days to 2 years: jardines maternales, community centres ' +
        '(centros de desarrollo infantil) and private nurseries. Not compulsory; public supply is limited.' },
    { id: 'jar', name: 'Jardín de infantes', color: '#E2557B', lane: 0, from: 'ar-mat',
      desc: 'Jardín de infantes for 3- to 5-year-olds: sala de 3 (to be universalised), and the ' +
        'compulsory salas de 4 and 5.' },
    { id: 'prim', name: 'Primaria', color: '#D2322D', lane: 0, from: 'ar-s5',
      desc: 'Primary school, 1º to 6º grado (7º in 7+5 jurisdictions), in two cycles. National ' +
        'Aprender tests assess literacy in 3º grado and language and maths at the end of primaria.' },
    { id: 'sb', name: 'Secundaria básica', color: '#1E66C9', lane: 0, from: 'ar-p6',
      desc: 'Ciclo básico, a common lower-secondary cycle (1º–3º año in 6+6 provinces, 1º–2º in 7+5).' },
    { id: 'or', name: 'Ciclo orientado', color: '#7A3E9D', lane: -1, from: 'ar-sb3',
      desc: 'Ciclo orientado (4º–6º año): a bachiller in an orientation such as natural sciences, ' +
        'social sciences, economics and administration, arts, languages, communication, IT or ' +
        'physical education. There is no national leaving exam.' },
    { id: 'uni', name: 'Universidad', color: '#4B2470', lane: -2, from: 'ar-o6',
      desc: 'National (public) universities are free for undergraduate study and open to every ' +
        'secundaria graduate (ingreso irrestricto, Ley 27.204), with introductory or levelling courses ' +
        'instead of entrance exams. Grado degrees (licenciatura, ingeniería, abogacía, medicina) ' +
        'take 4–6 years in principle, longer in practice. Private universities charge fees.' },
    { id: 'isfd', name: 'Profesorado', color: '#B0306A', lane: 0, from: 'ar-o6',
      desc: 'Institutos Superiores de Formación Docente (terciario no universitario): 4-year ' +
        'profesorados for nivel inicial, primaria and secondary subjects. Most of Argentina\'s ' +
        'teachers train here rather than at universities.' },
    { id: 'tec', name: 'Secundaria técnica', color: '#2C9546', lane: 1, from: 'ar-p6',
      desc: 'Escuelas técnicas (Ley 26.058 de Educación Técnico Profesional): 7 years in 6+6 provinces ' +
        '(6 in 7+5 ones), with workshops and a final professional practice, in specialities such as ' +
        'electromechanics, construction, electronics, chemistry, IT or agriculture.' },
    { id: 'tsup', name: 'Tecnicatura superior', color: '#1F6E33', lane: 2, from: 'ar-t2',
      desc: 'Higher technical programmes (tecnicaturas superiores, 2½–3 years) at public or private ' +
        'institutos superiores, e.g. nursing, IT, tourism or industrial automation. Universities ' +
        'also offer short pregrado tecnicaturas.' },
  ],
  stations: [
    { id: 'ar-mat', line: 'mat', name: 'Maternal', local: 'Jardín maternal (45 días – 2 años)', ages: [0, 3], isced: 0,
      desc: 'Not compulsory. Mostly private or community provision; some provinces and the City of ' +
        'Buenos Aires run public jardines maternales.',
      cost: { amount: 0, note: 'Free where public places exist; private nurseries charge monthly fees.', src: 0 } },
    { id: 'ar-s3', line: 'jar', name: 'Sala de 3', ages: [3, 4], isced: 0,
      desc: 'Not compulsory, but the State must make it universally available (Ley 26.206 art. 19).',
      cost: { amount: 0, note: 'Free in public jardines.', src: 0 } },
    { id: 'ar-s4', line: 'jar', name: 'Sala de 4', ages: [4, 5], isced: 0,
      desc: 'Compulsory since Ley 27.045 (2014).',
      cost: { amount: 0, note: 'Free in public jardines.', src: 0 } },
    { id: 'ar-s5', line: 'jar', name: 'Sala de 5', ages: [5, 6], isced: 0,
      desc: 'Compulsory final year of nivel inicial.',
      cost: { amount: 0, note: 'Free in public jardines.', src: 0 } },
    { id: 'ar-p1', line: 'prim', name: '1º grado', ages: [6, 7], isced: 1,
      desc: 'Start of primaria for children who are 6 by 30 June. Literacy is the focus of 1º–3º grado.',
      cost: { amount: 0, note: 'Free; schools\' cooperadoras ask for voluntary contributions.', src: 0 } },
    { id: 'ar-p2', line: 'prim', name: '2º–5º', local: '2º a 5º grado', ages: [7, 11], isced: 1,
      desc: 'Second to fifth grade. Aprender Alfabetización (since 2024) tests reading in 3º grado.',
      events: ['Aprender Alfabetización (3º grado)'],
      cost: { amount: 0, note: 'Free in public schools.', src: 0 } },
    { id: 'ar-p6', line: 'prim', name: '6º grado', ages: [11, 12], isced: 1,
      desc: 'Last year of primaria in 6+6 provinces (7º grado elsewhere). Aprender tests language and ' +
        'maths. Pupils choose a common or a technical secondary school.',
      exam: 'Certificado de nivel primario',
      events: ['Aprender (end of primaria)'],
      cost: { amount: 0, note: 'Free in public schools.', src: 0 } },
    { id: 'ar-sb1', line: 'sb', name: '1º–2º año', ages: [12, 14], isced: 2,
      desc: 'Common subjects with subject teachers.',
      cost: { amount: 0, note: 'Free in public schools.', src: 0 } },
    { id: 'ar-sb3', line: 'sb', name: '3º año', ages: [14, 15], isced: 2,
      desc: 'End of the ciclo básico; pupils choose an orientation for the ciclo orientado.',
      cost: { amount: 0, note: 'Free in public schools.', src: 0 } },
    { id: 'ar-o4', line: 'or', name: '4º–5º año', ages: [15, 17], isced: 3,
      desc: 'Orientation subjects alongside the common core.',
      cost: { amount: 0, note: 'Free in public schools.', src: 0 } },
    { id: 'ar-o6', line: 'or', name: '6º año', ages: [17, 18], isced: 3,
      desc: 'Final year, with Aprender tests and university pre-registration. Pupils who still owe ' +
        'failed subjects (materias previas) must pass them before getting the title. Adults and ' +
        'early leavers can finish through Plan FinEs.',
      exam: 'Bachiller (título secundario)',
      events: ['Aprender (final year)', 'University pre-registration (Sept–Dec)'],
      cost: { amount: 0, note: 'Free in public schools.', src: 0 } },
    { id: 'ar-cbc', line: 'uni', name: 'CBC', local: 'Ciclo Básico Común (UBA) / ingreso', ages: [18, 19], isced: 6,
      desc: 'Many universities start with an introductory cycle. At the UBA every student takes the ' +
        'Ciclo Básico Común: six subjects that count as the first year of the degree. Some faculties ' +
        'elsewhere set levelling courses that must be passed.',
      cost: { amount: 0, note: 'Free at national universities.', src: 3 } },
    { id: 'ar-gr', line: 'uni', name: 'Carrera de grado', local: 'Licenciatura · Ingeniería · Abogacía', ages: [19, 23], isced: 6,
      desc: 'The rest of the grado degree. Funding has been disputed since 2024: Congress passed the ' +
        'Ley de Financiamiento Universitario (Ley 27.795) over a presidential veto in October 2025, the ' +
        'government suspended it by decree, and in October 2026 a federal court ordered it applied.',
      exam: 'Título de grado',
      events: ['University funding law overridden veto (Oct 2025)', 'Court orders application (Oct 2026)'],
      cost: { amount: 0, note: 'No tuition at national universities (Ley 27.204). Private universities charge monthly fees.', src: 3 } },
    { id: 'ar-mae', line: 'uni', name: 'Maestría', ages: [23, 25], isced: 7,
      desc: 'Master\'s degree (about 2 years), plus shorter especializaciones. Postgraduate ' +
        'programmes usually charge fees, also at public universities.',
      exam: 'Magíster',
      cost: { amount: 948000, note: 'Example: UNC Ciencias Sociales from Jul 2026, matrícula + 11 monthly cuotas of $79,000. Fees vary widely by faculty.', src: 12 } },
    { id: 'ar-doc', line: 'uni', name: 'Doctorado', ages: [25, 30], isced: 8,
      desc: 'Doctorate of about 5 years; many doctoral students hold CONICET scholarships.',
      exam: 'Doctor',
      cost: { amount: 1098000, note: 'Example: UNC Ciencias Sociales from Jul 2026, $91,500 a month (matrícula + 33 cuotas). Some science doctorates charge little or nothing.', src: 12 } },
    { id: 'ar-prof', line: 'isfd', name: 'Profesorado', local: 'Instituto Superior de Formación Docente', ages: [18, 22], isced: 6,
      desc: 'Four-year teacher-training degree at a provincial institute. Graduates can continue to ' +
        'university licenciaturas through articulation programmes (ciclos de complementación).',
      exam: 'Profesor/a', cost: { amount: 0, note: 'Free at public institutes; private institutes charge fees.', src: 0 } },
    { id: 'ar-t1', line: 'tec', name: 'Ciclo básico', ages: [12, 15], isced: 2,
      desc: 'Common subjects plus workshops (talleres).',
      cost: { amount: 0, note: 'Free in public schools.', src: 0 } },
    { id: 'ar-t2', line: 'tec', name: 'Ciclo superior', local: 'Ciclo superior técnico (4º–7º año)', ages: [15, 19], isced: 3,
      desc: 'Specialisation in a technical field, ending with a professionalising practice (prácticas ' +
        'profesionalizantes) in a company or institution. Graduates may enter university or terciario.',
      exam: 'Técnico/a (título técnico de nivel medio)',
      cost: { amount: 0, note: 'Free in public schools.', src: 4 } },
    { id: 'ar-tsup', line: 'tsup', name: 'Técnico superior', ages: [19, 22], isced: 5,
      desc: 'Two-and-a-half- to three-year higher technical programme at a terciario institute.',
      exam: 'Técnico/a superior', cost: { amount: 0, note: 'Free at public institutes.', src: 0 } },
  ],
  transfers: [
    { from: 'ar-t2', to: 'ar-gr', label: 'Técnica → universidad', desc: 'The técnico title is a full secondary title, so it gives access to university.' },
    { from: 'ar-o6', to: 'ar-tsup', label: 'Bachiller → tecnicatura superior', desc: 'Terciario institutes admit any secondary graduate.' },
    { from: 'ar-prof', to: 'ar-gr', label: 'Profesorado → licenciatura', desc: 'Teachers can complete a university licenciatura in a shorter articulation cycle.' },
    { from: 'ar-tsup', to: 'ar-gr', label: 'Tecnicatura → licenciatura', desc: 'Some universities offer ciclos de complementación curricular for técnicos superiores.' },
    { from: 'ar-p6', to: 'ar-t1', label: 'Choice at 12', desc: 'At the end of primaria families choose a common or a technical secondary school.' },
  ],
  sources: [
    { title: 'Ley de Educación Nacional 26.206 (texto actualizado)', url: 'https://www.argentina.gob.ar/normativa/nacional/ley-26206-123542/actualizacion' },
    { title: 'Ley 27.045 (2014): obligatoriedad desde los 4 años', url: 'https://www.argentina.gob.ar/normativa/nacional/ley-27045-240450' },
    { title: 'Ministerio de Capital Humano — Educación: universidades', url: 'https://www.argentina.gob.ar/educacion/universidades' },
    { title: 'Ley 27.204 (2015): gratuidad e ingreso irrestricto a la universidad pública', url: 'https://www.argentina.gob.ar/normativa/nacional/ley-27204-256578' },
    { title: 'Ley 26.058 de Educación Técnico Profesional', url: 'https://www.argentina.gob.ar/normativa/nacional/ley-26058-109525' },
    { title: 'Ley de Educación Superior 24.521 (texto actualizado)', url: 'https://www.argentina.gob.ar/normativa/nacional/ley-24521-25394/actualizacion' },
    { title: 'Universidad de Buenos Aires — Ciclo Básico Común', url: 'https://www.cbc.uba.ar/' },
    { title: 'Infobae — La Justicia ordenó aplicar la Ley de Financiamiento Universitario (6 Oct 2026)', url: 'https://www.infobae.com/judiciales/2026/10/06/la-justicia-ordeno-al-gobierno-aplicar-la-ley-de-financiamiento-universitario-y-declaro-inconstitucional-el-decreto-que-la-frenaba/' },
    { title: 'Ministerio de Capital Humano — Evaluaciones Aprender', url: 'https://www.argentina.gob.ar/educacion/evaluacion-informacion-educativa/aprender' },
    { title: 'Plan FinEs — terminalidad educativa', url: 'https://www.argentina.gob.ar/educacion/fines' },
    { title: 'INET — Instituto Nacional de Educación Tecnológica', url: 'https://www.inet.edu.ar/' },
    { title: 'CONICET — becas doctorales', url: 'https://www.conicet.gov.ar/' },
    { title: 'Universidad Nacional de Córdoba, Fac. de Ciencias Sociales — RD-2026-314: aranceles de posgrado 2º semestre 2026', url: 'https://sociales.unc.edu.ar/sites/default/files/rd-2026-314_aranceles_de_posgrado_2do_semestre_2026.pdf' },
  ],
};
