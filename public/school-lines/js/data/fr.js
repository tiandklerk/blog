// France — national system run by the Ministère de l'Éducation nationale.
export default {
  id: 'fr',
  iso3: 'FRA',
  region: 'Europe',
  currency: 'EUR',
  costNote:
    'Public school is free from maternelle to the bac, and BTS and CPGE in public lycées charge no tuition. ' +
    'Universities charge small national fees plus the CVEC. Figures are for 2026–27; crèche fees depend on income.',
  name: 'France',
  localName: 'France',
  flag: '🇫🇷',
  summary:
    'A single national system. École maternelle (3–6) is compulsory, followed by école élémentaire ' +
    '(CP–CM2) and a common collège for everyone (6e–3e, ending in the brevet). At 15 pupils go to a ' +
    'lycée général et technologique (leading to the bac général or bac technologique) or a lycée ' +
    'professionnel (bac pro or CAP). Higher education is split between universities (Licence–Master–' +
    'Doctorat, the LMD system), short technical programmes (BTS, BUT), and the selective prépas ' +
    'leading to the grandes écoles. Applications go through Parcoursup.',
  ageNote:
    'Children are grouped by calendar year of birth (January–December), not by school year. ' +
    'Classes count down in collège (6e → 3e) and up again in lycée (Seconde → Première → Terminale).',
  compulsory: {
    from: 3,
    to: 16,
    label: 'Instruction obligatoire 3–16',
    note: 'Since the 2019 law “pour une école de la confiance”, schooling is compulsory from age 3 (it was 6 before) until 16.',
    extendedTo: 18,
    extendedLabel: 'Obligation de formation 16–18',
    extendedNote:
      'Since 2020, 16- to 18-year-olds must be in school, an apprenticeship, employment, ' +
      'civic service or a support scheme.',
  },
  lines: [
    { id: 'creche', name: 'Crèche', color: '#7C8A93', lane: 0,
      desc: 'Childcare before school: crèches, licensed childminders (assistantes maternelles), and micro-crèches.' },
    { id: 'mat', name: 'Maternelle', color: '#E2557B', lane: 0, from: 'fr-creche',
      desc: 'École maternelle, cycle 1: petite, moyenne and grande section. Compulsory since 2019, ' +
        'with a curriculum focused on language.' },
    { id: 'elem', name: 'Élémentaire', color: '#D2322D', lane: 0, from: 'fr-gs',
      desc: 'École élémentaire, CP to CM2. Cycle 2 covers CP–CE2 (basic learning) and cycle 3 ' +
        'covers CM1–6e (consolidation). Many schools have Wednesdays off.' },
    { id: 'col', name: 'Collège', color: '#1E66C9', lane: 0, from: 'fr-cm2',
      desc: 'A common lower-secondary school for all pupils, 6e to 3e. Since 2024 the “choc des ' +
        'savoirs” reform has added ability grouping in French and maths in 6e–5e.' },
    { id: 'gt', name: 'Seconde GT', color: '#2E8FB8', lane: -1, from: 'fr-3e',
      desc: 'Lycée général et technologique: a common first year (seconde) before choosing the général or technologique route.' },
    { id: 'gen', name: 'Bac général', color: '#7A3E9D', lane: -2, from: 'fr-2gt',
      desc: 'Voie générale. In Première students pick 3 spécialités and drop one in Terminale. The ' +
        'bac grade combines continuous assessment (40%) and final exams (60%).' },
    { id: 'univ', name: 'Université', color: '#4B2470', lane: -2, from: 'fr-tle',
      desc: 'Universities follow the LMD system: Licence (3 yrs), Master (2 yrs), Doctorat (3 yrs). ' +
        'Tuition fees are low for EU students: €178 a year for a licence in 2026–27, plus the €105 ' +
        'student life contribution (CVEC).' },
    { id: 'cpge', name: 'Prépa → Grandes écoles', color: '#B0306A', lane: -3, from: 'fr-tle',
      desc: 'Classes préparatoires aux grandes écoles (CPGE): 2 years of intensive study (science, ' +
        'economics, literature) leading to competitive exams (concours) for engineering schools, ' +
        'business schools, the ENS and others.' },
    { id: 'techno', name: 'Bac techno', color: '#2C9546', lane: -1, from: 'fr-2gt',
      desc: 'Voie technologique, with 8 series: STMG, STI2D, ST2S, STL, STD2A, STHR, STAV and S2TMD. ' +
        'It leads mostly to BUT and BTS.' },
    { id: 'but', name: 'BUT / BTS', color: '#1F6E33', lane: -1, from: 'fr-tle-t',
      desc: 'Short and mid-length technical higher education. The BUT (bachelor universitaire de ' +
        'technologie, 3 yrs) is taught at an IUT; the BTS (2 yrs) is taught in lycées. Both are selective via Parcoursup.' },
    { id: 'pro', name: 'Voie pro', color: '#DD7710', lane: 1, from: 'fr-3e',
      desc: 'Lycée professionnel: a 3-year bac professionnel in a trade family, with 18–22 weeks of work placements (PFMP). It can also be done as an apprenticeship.' },
    { id: 'bts', name: 'BTS', color: '#A85A0A', lane: 1, from: 'fr-tpro',
      desc: 'Brevet de technicien supérieur: 2 years after the bac, in a lycée or as an apprenticeship. Many places are reserved for bac pro holders.' },
    { id: 'cap', name: 'CAP', color: '#8B6B4A', lane: 2, from: 'fr-3e',
      desc: 'Certificat d\'aptitude professionnelle: 2 years (1–3 depending on profile), preparing ' +
        'for a specific trade such as cooking, hairdressing, construction or childcare. Often done as an ' +
        'apprenticeship at a CFA.' },
  ],
  stations: [
    { id: 'fr-creche', line: 'creche', name: 'Crèche', ages: [0, 3], isced: 0,
      desc: 'Not compulsory. Parents pay income-based fees and receive CAF benefits.',
      cost: { amount: 3500, note: 'About €3,500 a year full-time at ~€4,000/month household income: CNAF hourly rate set by income, less the 50% childcare tax credit', src: 7 } },
    { id: 'fr-ps', line: 'mat', name: 'PS', local: 'Petite section', ages: [3, 4], isced: 0,
      desc: 'Petite section. Compulsory schooling starts in September of the year the child turns 3. ' +
        'Some schools in priority areas take “toute petite section” (TPS) pupils from age 2.',
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-ms', line: 'mat', name: 'MS', local: 'Moyenne section', ages: [4, 5], isced: 0, desc: 'Moyenne section.',
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-gs', line: 'mat', name: 'GS', local: 'Grande section', ages: [5, 6], isced: 0,
      desc: 'Grande section. Pupils prepare to read: sounds, letters and counting.',
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-cp', line: 'elem', name: 'CP', local: 'Cours préparatoire', ages: [6, 7], isced: 1,
      desc: 'The year children learn to read. National assessments take place in September and January. Class sizes are capped at 12 in priority-education areas (REP/REP+).',
      events: ['Évaluations nationales (September & January)'],
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-ce1', line: 'elem', name: 'CE1', local: 'Cours élémentaire 1', ages: [7, 8], isced: 1,
      desc: 'National assessments in French and maths.', events: ['Évaluations nationales'],
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-ce2', line: 'elem', name: 'CE2', local: 'Cours élémentaire 2', ages: [8, 9], isced: 1, desc: 'End of cycle 2.',
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-cm1', line: 'elem', name: 'CM1', local: 'Cours moyen 1', ages: [9, 10], isced: 1, desc: 'Cycle 3 begins.',
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-cm2', line: 'elem', name: 'CM2', local: 'Cours moyen 2', ages: [10, 11], isced: 1,
      desc: 'Last year of primary school; the child is assigned to the local collège (sectorisation).',
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-6e', line: 'col', name: '6e', local: 'Sixième', ages: [11, 12], isced: 2,
      desc: 'End of cycle 3. National assessments take place, and French and maths are taught in ' +
        'ability groups.', events: ['Évaluations nationales (September)'],
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-5e', line: 'col', name: '5e', local: 'Cinquième', ages: [12, 13], isced: 2,
      desc: 'Cycle 4 begins. Pupils start a second modern language (LV2), and Latin is an option.',
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-4e', line: 'col', name: '4e', local: 'Quatrième', ages: [13, 14], isced: 2,
      desc: 'Cycle 4 continues, with national assessments.', events: ['Évaluations nationales'],
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-3e', line: 'col', name: '3e', local: 'Troisième', ages: [14, 15], isced: 2,
      desc: 'Orientation year. The class council (conseil de classe) recommends general/' +
        'technological or vocational upper secondary, and places are assigned via Affelnet. ' +
        'Pupils do a work-observation placement and sit the brevet in June (a plan to make it ' +
        'compulsory for lycée entry was dropped in 2025).',
      exam: 'Diplôme national du brevet (DNB)',
      events: ['Observation work placement (stage de 3e)', 'Orientation choices (vœux, Affelnet)', 'Brevet exams (late June)'],
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-2gt', line: 'gt', name: '2de GT', local: 'Seconde générale et technologique', ages: [15, 16], isced: 3,
      desc: 'Common core year with a positioning test at the start. At the end, students choose the ' +
        'général route (and 3 spécialités) or a technological series. Since 2024 it includes a ' +
        'compulsory 2-week work placement in June.', events: ['Tests de positionnement', 'Stage de seconde (June)'],
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-1re', line: 'gen', name: '1re', local: 'Première générale', ages: [16, 17], isced: 3,
      desc: 'Students take 3 spécialités, such as maths, physics-chemistry, SES, HGGSP, or ' +
        'humanities, literature & philosophy. At the end of the year they sit the bac français ' +
        '(written and oral) and, from June 2026, a new anticipated maths exam (épreuve ' +
        'anticipée de mathématiques).',
      events: ['Bac de français (written & oral, June)', 'Épreuve anticipée de mathématiques (from 2026)'],
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-tle', line: 'gen', name: 'Terminale', local: 'Terminale générale', ages: [17, 18], isced: 3,
      desc: 'Students keep 2 spécialités and take philosophy. Exams include the spécialités, ' +
        'philosophy and the Grand oral, all in June. Parcoursup wishes are submitted from January ' +
        'to mid-March, and admissions come from early June.',
      exam: 'Baccalauréat général',
      events: ['Parcoursup wishes (Jan–Mar)', 'Spécialité, philosophy & Grand oral exams (June)'],
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-l', line: 'univ', name: 'Licence', local: 'L1–L3', ages: [18, 21], isced: 6,
      desc: 'Licence: 3 years, 180 ECTS. University entry is open to bac holders, but popular ' +
        'courses select via Parcoursup. Medicine and health studies use the PASS/L.AS route.',
      exam: 'Licence',
      cost: { amount: 283, note: 'Licence fee €178 plus the €105 CVEC (2026–27). Scholarship holders are exempt; many universities charge non-EU students more', src: 6 } },
    { id: 'fr-m', line: 'univ', name: 'Master', local: 'M1–M2', ages: [21, 23], isced: 7,
      desc: 'Master: 2 years, 120 ECTS. Selection takes place at entry to M1 via the “Mon Master” platform.', exam: 'Master',
      cost: { amount: 360, note: 'Master fee €255 plus the €105 CVEC (2026–27); scholarship holders are exempt', src: 6 } },
    { id: 'fr-doc', line: 'univ', name: 'Doctorat', ages: [23, 26], isced: 8,
      desc: 'Usually 3 years, often funded by a doctoral contract (contrat doctoral).', exam: 'Doctorat',
      cost: { amount: 503, note: 'Doctorat fee €398 plus the €105 CVEC (2026–27); most doctoral students are paid under a contrat doctoral', src: 6 } },
    { id: 'fr-cpge', line: 'cpge', name: 'CPGE (prépa)', ages: [18, 20], isced: 6,
      desc: 'Two years of intensive preparation for the concours, the competitive entrance exams. ' +
        'Students earn ECTS credits that let them move into university.',
      exam: 'Concours',
      cost: { amount: 283, note: 'No tuition in public lycées, but students also enrol at a university (€178 licence fee) and pay the €105 CVEC (2026–27)', src: 6 } },
    { id: 'fr-ge', line: 'cpge', name: 'Grande école', ages: [20, 23], isced: 7,
      desc: 'Engineering or business school (e.g. Polytechnique, Centrale, HEC, ESSEC) or the ENS. ' +
        'The diploma is master-level (grade de master).', exam: 'Diplôme d\'ingénieur / grande école (master)',
      cost: { amount: 735, note: 'Most public engineering schools: €630 plus €105 CVEC (2026–27); some charge €2,620. Business schools are mostly private and far dearer', src: 6 } },
    { id: 'fr-1re-t', line: 'techno', name: '1re techno', local: 'Première technologique', ages: [16, 17], isced: 3,
      desc: 'First year of a technological series such as STMG (management), STI2D (industry), or ST2S (health & social).',
      events: ['Bac de français (June)'],
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-tle-t', line: 'techno', name: 'Tle techno', local: 'Terminale technologique', ages: [17, 18], isced: 3,
      desc: 'Final year of the technological series.', exam: 'Baccalauréat technologique',
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-but', line: 'but', name: 'BUT', local: 'IUT', ages: [18, 21], isced: 6,
      desc: 'Bachelor universitaire de technologie: 3 years and 180 ECTS, with long internships. ' +
        'Half of the places are reserved for bac techno holders.', exam: 'BUT (grade de licence)',
      cost: { amount: 283, note: 'University licence-level fee €178 plus the €105 CVEC (2026–27); scholarship holders are exempt', src: 6 } },
    { id: 'fr-2pro', line: 'pro', name: '2de pro', local: 'Seconde professionnelle', ages: [15, 16], isced: 3,
      desc: 'Students start in a broad trade family (famille de métiers), then specialise.',
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-1pro', line: 'pro', name: '1re pro', local: 'Première professionnelle', ages: [16, 17], isced: 3,
      desc: 'Specialisation year with work placements. Students who hold a CAP can join here.',
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-tpro', line: 'pro', name: 'Tle pro', local: 'Terminale professionnelle', ages: [17, 18], isced: 3,
      desc: 'Since the 2023 reform, students choose in the final weeks between a module preparing ' +
        'for higher education and an extended work placement.',
      exam: 'Baccalauréat professionnel',
      cost: { amount: 0, note: 'Free at public schools; private schools under state contract charge modest fees', src: 0 } },
    { id: 'fr-bts', line: 'bts', name: 'BTS', ages: [18, 20], isced: 5,
      desc: 'Two-year technician diploma (120 ECTS). Often followed by a licence professionnelle ' +
        '(1 yr) or the third year of a BUT.', exam: 'BTS',
      cost: { amount: 0, note: 'No fee in a public lycée, and BTS students in lycées do not pay the CVEC', src: 6 } },
    { id: 'fr-cap', line: 'cap', name: 'CAP', ages: [15, 17], isced: 3,
      desc: 'Two-year trade diploma (ISCED 353). Leads directly to work or to Première pro.', exam: 'CAP',
      cost: { amount: 0, note: 'Free in a lycée professionnel; apprentices in a CFA pay nothing and earn a wage', src: 0 } },
  ],
  transfers: [
    { from: 'fr-2pro', to: 'fr-2gt', label: 'Passerelle pro → GT', desc: 'Bridges (passerelles) allow moves between the vocational and general/technological routes, usually at the end of Seconde.' },
    { from: 'fr-cap', to: 'fr-1pro', label: 'CAP → bac pro', desc: 'CAP holders can join Première pro and get a bac pro in 2 more years.' },
    { from: 'fr-tle-t', to: 'fr-l', label: 'Bac techno → licence', desc: 'All bac holders can apply to university.' },
    { from: 'fr-tle-t', to: 'fr-bts', label: 'Bac techno → BTS', desc: 'A very common route for STMG and STI2D students.' },
    { from: 'fr-tle', to: 'fr-but', label: 'Bac général → BUT', desc: 'General bac holders take about half of the BUT places.' },
    { from: 'fr-tpro', to: 'fr-but', label: 'Bac pro → BUT', desc: 'Possible but less common, with quotas in some programmes.' },
    { from: 'fr-bts', to: 'fr-l', label: 'BTS → licence pro / L3', desc: 'After a BTS, students often add a 1-year licence professionnelle or enter L3.' },
    { from: 'fr-cpge', to: 'fr-l', label: 'Prépa → université', desc: 'Prépa ECTS credits allow entry into L2 or L3.' },
    { from: 'fr-but', to: 'fr-m', label: 'BUT → master', desc: 'BUT graduates can apply for masters or engineering schools.' },
  ],
  sources: [
    { title: 'Ministère de l\'Éducation nationale — L\'organisation de l\'école', url: 'https://www.education.gouv.fr/' },
    { title: 'Service-public.fr — Instruction obligatoire dès 3 ans', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1865' },
    { title: 'Éducation nationale — L’obligation de formation des 16–18 ans', url: 'https://www.education.gouv.fr/l-obligation-de-formation-des-16-18-ans-306954' },
    { title: 'Parcoursup — accès à l\'enseignement supérieur', url: 'https://www.parcoursup.gouv.fr/' },
    { title: 'Onisep — Après la 3e / après le bac', url: 'https://www.onisep.fr/' },
    { title: '24matins — L\'entrée en seconde sans brevet: mesure abandonnée', url: 'https://www.24matins.fr/lentree-en-seconde-sans-brevet-des-colleges-finalement-abandonnee-1385182' },
    { title: 'Service-public.gouv.fr — Coût d\'une inscription dans l\'enseignement supérieur (2026–2027)', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2865' },
    { title: 'monenfant.fr (CNAF) — Le coût en crèche', url: 'https://monenfant.fr/le-cout-en-creche' },
  ],
};
