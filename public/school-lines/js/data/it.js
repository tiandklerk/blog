// Italy — national system run by the Ministero dell'Istruzione e del Merito (MIM) for schools
// and the Ministero dell'Università e della Ricerca (MUR) for universities. Regions run the
// IeFP vocational courses and plan ITS Academies; municipalities run most nurseries.
export default {
  id: 'it',
  iso3: 'ITA',
  region: 'Europe',
  currency: 'EUR',
  name: 'Italy',
  localName: 'Italia',
  flag: '🇮🇹',
  summary:
    'Nursery (nido) to 3 and scuola dell\'infanzia from 3 to 6, then a common "first cycle": ' +
    '5 years of primaria and 3 years of secondaria di primo grado (scuola media), ending in a state ' +
    'exam at about 14. Families then choose a 5-year school: a liceo (academic), an istituto ' +
    'tecnico or an istituto professionale, all ending in the maturità, which gives university ' +
    'entry. Regions also offer 3–4-year vocational courses (IeFP). Tertiary education comprises ' +
    'universities (3-year laurea + 2-year laurea magistrale, or 5–6-year single cycles), the ' +
    'short professional ITS Academies and the arts and music institutions (AFAM).',
  ageNote:
    'Children who turn 6 by 31 December start primary school that September; parents may enrol ' +
    'children turning 6 by 30 April of the following year early (anticipo). The same rule applies ' +
    'at 3 for the scuola dell\'infanzia. Pupils normally finish the maturità at 19.',
  compulsory: {
    from: 6,
    to: 16,
    label: 'Obbligo di istruzione 6–16',
    note:
      'Ten years of compulsory education: primary, lower secondary and the first two years of ' +
      'upper secondary or an IeFP course.',
    extendedTo: 18,
    extendedLabel: 'Diritto-dovere to 18',
    extendedNote:
      'Young people have the right and duty to stay in education or training until 18 or until ' +
      'they gain at least a 3-year vocational qualification; apprenticeship also counts.',
  },
  costNote:
    'State schools are free (families pay for meals, books in upper secondary, and small state ' +
    'school taxes in the last two years). University fees depend on family income (ISEE) and ' +
    'are waived below €22,000; figures for 2024/25–2025/26.',
  lines: [
    { id: 'nido', name: 'Nido', color: '#7C8A93', lane: 0,
      desc: 'Asilo nido and other early-childhood services (sezioni primavera for 2-year-olds), ' +
        'mostly run by municipalities with income-based fees. Not compulsory; places are scarce ' +
        'in the south. Since 2017 the 0–6 "integrated system" links nido and infanzia.' },
    { id: 'inf', name: 'Infanzia', color: '#E2557B', lane: 0, from: 'it-nido',
      desc: 'Scuola dell\'infanzia, 3–6: state, municipal or publicly recognised private ' +
        '(paritarie) schools. Not compulsory but attended by almost all children.' },
    { id: 'pri', name: 'Primaria', color: '#D2322D', lane: 0, from: 'it-inf',
      desc: 'Scuola primaria, 5 years (classi 1–5). Since 2020/21 pupils get descriptive judgements ' +
        'instead of number marks; a 2024 reform restored synthetic judgements (e.g. "ottimo") ' +
        'from 2024/25.' },
    { id: 'med', name: 'Secondaria I grado', color: '#1E66C9', lane: 0, from: 'it-p5',
      desc: 'Scuola secondaria di primo grado ("scuola media"): 3 years for everyone, ending in the ' +
        'first-cycle state exam. Together with primaria it forms the "primo ciclo".' },
    { id: 'lic', name: 'Liceo', color: '#7A3E9D', lane: -1, from: 'it-m3',
      desc: '5-year academic schools: classico, scientifico (incl. applied sciences and sport), ' +
        'linguistico, scienze umane, artistico, musicale e coreutico. Ends in the maturità.' },
    { id: 'uni', name: 'Università', color: '#4B2470', lane: -1, from: 'it-l5',
      desc: 'Laurea (3 years, 180 CFU), laurea magistrale (2 years, 120 CFU) and dottorato di ' +
        'ricerca (3+ years). Most courses are open-access; some are limited-number (numero ' +
        'programmato) with entrance tests.' },
    { id: 'cu', name: 'Ciclo unico', color: '#B0306A', lane: -2, from: 'it-l5',
      desc: 'Laurea magistrale a ciclo unico: 5 or 6-year single-cycle degrees in medicine (6), ' +
        'dentistry, veterinary medicine, pharmacy, law, architecture and primary-teacher education.' },
    { id: 'tec', name: 'Istituto tecnico', color: '#DD7710', lane: 1, from: 'it-m3',
      desc: 'Istituti tecnici: 5-year technical schools in economics (e.g. administration, ' +
        'tourism) and technology (e.g. IT, mechanics, construction, agriculture), with work-based ' +
        'learning (PCTO). Ends in the maturità. Since 2024 a "4+2" technological-professional ' +
        'pathway lets students finish in 4 years and continue to an ITS Academy.' },
    { id: 'its', name: 'ITS Academy', color: '#A85A0A', lane: 1, from: 'it-t5',
      desc: 'Istituti Tecnologici Superiori: 2–3-year higher technical programmes run by ' +
        'foundations of companies, schools and universities, with at least 35% of hours as ' +
        'company placements. Reformed by Law 99/2022 and expanded with EU recovery funds.' },
    { id: 'pro', name: 'Ist. professionale', color: '#2C9546', lane: 2, from: 'it-m3',
      desc: 'Istituti professionali: 5-year vocational schools (e.g. hospitality, industry and ' +
        'crafts, health and social care, agriculture, trade), reformed in 2017 with a more ' +
        'flexible first two years. Ends in the maturità.' },
    { id: 'iefp', name: 'IeFP', color: '#00A0A6', lane: 3, from: 'it-m3',
      desc: 'Istruzione e Formazione Professionale: regional vocational courses at accredited ' +
        'training centres (or in professional schools), 3 years to a qualifica and a 4th year to ' +
        'a diploma professionale. Also available as dual training/apprenticeship.' },
  ],
  stations: [
    { id: 'it-nido', line: 'nido', name: 'Nido', local: 'Asilo nido', ages: [0.5, 3], isced: 0,
      desc: 'Municipal nurseries from about 3 months; places are allocated by ranking lists. ' +
        'The INPS "bonus nido" refunds fees: up to €3,600 a year for children born from 2024 ' +
        'with ISEE ≤ €40,000, otherwise €1,500–3,000 (2026 rules).',
      cost: { amount: 0, note: 'Income-based fees (roughly €300/month for a mid-income family) are mostly refunded by the INPS bonus nido.', src: 6 } },
    { id: 'it-inf', line: 'inf', name: 'Infanzia', local: 'Scuola dell\'infanzia', ages: [3, 6], isced: 0,
      desc: 'Three years of preschool, usually 40 hours a week (25-hour options exist), in state, ' +
        'municipal or private paritarie schools.',
      cost: { amount: 0, note: 'State preschool is free; families pay for meals (municipal, income-based).' } },
    { id: 'it-p12', line: 'pri', name: 'Classi 1–2', local: 'Primaria, classi 1–2', ages: [6, 8], isced: 1,
      desc: 'School starts in mid-September (dates set by each region). English is taught from ' +
        'class 1. National INVALSI tests in Italian and maths in class 2 (May).',
      events: ['INVALSI tests, class 2 (May)'],
      cost: { amount: 0, note: 'Free; textbooks are free in primary school.' } },
    { id: 'it-p5', line: 'pri', name: 'Classi 3–5', local: 'Primaria, classi 3–5', ages: [8, 11], isced: 1,
      desc: 'INVALSI tests in Italian, maths and English in class 5 (May). Enrolment for the next ' +
        'school is online (Piattaforma Unica) in January–February.',
      events: ['INVALSI tests, class 5 (May)', 'Online enrolment for secondary (Jan–Feb)'],
      cost: { amount: 0, note: 'Free; textbooks are free in primary school.' } },
    { id: 'it-m12', line: 'med', name: 'Classi 1–2', local: 'Secondaria I grado, classi 1–2', ages: [11, 13], isced: 2,
      desc: 'Subject teaching, with English and a second EU language. Marks on a 10-point scale ' +
        '(6 = pass); conduct is graded too.',
      cost: { amount: 0, note: 'Free in state schools; families buy textbooks.' } },
    { id: 'it-m3', line: 'med', name: 'Classe 3', local: 'Secondaria I grado, classe 3', ages: [13, 14], isced: 2,
      desc: 'Teachers give a non-binding orientation advice (consiglio orientativo) in December; ' +
        'families enrol in an upper-secondary school by mid-February. Computer-based INVALSI ' +
        'tests in April are a condition for admission to the June state exam (written Italian, ' +
        'maths, and an oral).',
      exam: 'Esame di Stato del primo ciclo (diploma di licenza media)',
      events: ['Consiglio orientativo (December)', 'Upper-secondary enrolment (Jan–Feb)', 'INVALSI tests (April)', 'State exam (June)'],
      cost: { amount: 0, note: 'Free.' } },
    { id: 'it-l12', line: 'lic', name: 'Biennio', local: 'Liceo, classi 1–2', ages: [14, 16], isced: 3,
      desc: 'First two years, still within compulsory education. INVALSI tests in class 2 (May).',
      share: { pct: 55.9, of: 'of 2026/27 enrolments in upper-secondary school chose a liceo', src: 4 },
      cost: { amount: 0, note: 'Free; families buy textbooks.' } },
    { id: 'it-l34', line: 'lic', name: 'Classi 3–4', local: 'Liceo, triennio', ages: [16, 18], isced: 3,
      desc: 'School-work orientation (PCTO, at least 90 hours over the triennio in licei) and ' +
        'credits (crediti scolastici) that count towards the maturità score.',
      cost: { amount: 0, note: 'Small state school taxes from class 4, waived for lower-income families.' } },
    { id: 'it-l5', line: 'lic', name: 'Classe 5', ages: [18, 19], isced: 3,
      desc: 'INVALSI tests in March, then the maturità in mid/late June: a national written ' +
        'Italian paper, a second written paper in the school\'s core subject, and an oral. Score ' +
        'out of 100 (60 to pass). Renamed "esame di maturità" again from 2025/26 by Decree-Law ' +
        '127/2025, with the oral focused on four subjects.',
      exam: 'Diploma di maturità',
      events: ['INVALSI tests (March)', 'Maturità written papers (June)', 'Oral exam (late June–July)'],
      cost: { amount: 0, note: 'Small state exam and diploma taxes, waived for lower-income families.' } },
    { id: 'it-lt', line: 'uni', name: 'Triennale', local: 'Laurea (triennale)', ages: [19, 22], isced: 6,
      desc: '3 years, 180 CFU. Many students take longer. Since 2025/26 medicine has replaced its ' +
        'entrance test with an open first "filter semester" (semestre filtro), followed by ranked ' +
        'national exams.',
      exam: 'Laurea',
      cost: { amount: 1550, private: 7493, note: 'Average for paying students at state universities, 2024/25; 38% fully exempt (ISEE ≤ €22,000 no-tax area, reductions to €30,000).', src: 5 } },
    { id: 'it-lm', line: 'uni', name: 'Magistrale', local: 'Laurea magistrale', ages: [22, 24], isced: 7,
      desc: '2 years, 120 CFU. Entry needs a relevant laurea and the curricular requirements set ' +
        'by each degree.',
      exam: 'Laurea magistrale',
      cost: { amount: 1550, private: 7493, note: 'Same income-based system as the laurea; average for paying students 2024/25.', src: 5 } },
    { id: 'it-dott', line: 'uni', name: 'Dottorato', local: 'Dottorato di ricerca', ages: [24, 27], isced: 8,
      desc: 'At least 3 years, by competitive admission (concorso). Most places come with a ' +
        'scholarship (borsa di studio); PNRR funding added many places from 2022.',
      exam: 'Dottore di ricerca (PhD)',
      cost: { amount: 0, note: 'Scholarship holders are exempt from fees; unfunded places may pay.' } },
    { id: 'it-cu', line: 'cu', name: 'Ciclo unico', local: 'Laurea magistrale a ciclo unico', ages: [19, 24.5], isced: 7,
      desc: '5 or 6 years (300–360 CFU). Medicine, dentistry and veterinary medicine are ' +
        'limited-number; doctors then do a specialisation school (scuola di specializzazione).',
      exam: 'Laurea magistrale',
      cost: { amount: 1550, private: 7493, note: 'Average for paying students at state universities, 2024/25; income-based with no-tax area below ISEE €22,000.', src: 5 } },
    { id: 'it-t12', line: 'tec', name: 'Biennio', local: 'Istituto tecnico, classi 1–2', ages: [14, 16], isced: 3,
      desc: 'Common general and technical subjects within the chosen sector.',
      share: { pct: 30.8, of: 'of 2026/27 enrolments in upper-secondary school chose an istituto tecnico', src: 4 },
      cost: { amount: 0, note: 'Free; families buy textbooks.' } },
    { id: 'it-t5', line: 'tec', name: 'Classi 3–5', local: 'Istituto tecnico, triennio', ages: [16, 19], isced: 3,
      desc: 'Specialisation (indirizzo) with at least 150 hours of PCTO work-based learning. The ' +
        'maturità includes a technical second paper.',
      exam: 'Diploma di maturità (tecnico)',
      events: ['Maturità (June)'],
      cost: { amount: 0, note: 'Small state school taxes in the last two years, waived for lower-income families.' } },
    { id: 'it-its', line: 'its', name: 'ITS Academy', local: 'Istituti Tecnologici Superiori', ages: [19, 21], isced: 5,
      desc: '4 semesters (ISCED 5, EQF 5) or 6 semesters (EQF 6) in areas such as mechatronics, ' +
        'ICT, energy, agri-food, tourism and fashion. Strong employment outcomes; credits can ' +
        'count towards a laurea.',
      exam: 'Diploma di specializzazione per le tecnologie applicate',
      cost: { amount: 0, note: 'Largely publicly funded; foundations may charge a modest enrolment fee (varies).' } },
    { id: 'it-pr12', line: 'pro', name: 'Biennio', local: 'Istituto professionale, classi 1–2', ages: [14, 16], isced: 3,
      desc: 'Personalised learning plans and workshops; students can move to a regional IeFP ' +
        'course or obtain an IeFP qualification in partnership with the region.',
      share: { pct: 13.3, of: 'of 2026/27 enrolments in upper-secondary school chose an istituto professionale', src: 4 },
      cost: { amount: 0, note: 'Free; families buy textbooks.' } },
    { id: 'it-pr5', line: 'pro', name: 'Classi 3–5', local: 'Istituto professionale, triennio', ages: [16, 19], isced: 3,
      desc: 'Vocational specialisation with work placements, ending in the maturità.',
      exam: 'Diploma di maturità (professionale)',
      events: ['Maturità (June)'],
      cost: { amount: 0, note: 'Small state school taxes in the last two years, waived for lower-income families.' } },
    { id: 'it-ief3', line: 'iefp', name: 'Qualifica', local: 'IeFP, 3 anni', ages: [14, 17], isced: 3,
      desc: 'Three-year regional course (e.g. hairdresser, electrician, cook, mechanic) with ' +
        'internships, satisfying compulsory education. Ends in a regional exam.',
      exam: 'Qualifica professionale (EQF 3)',
      cost: { amount: 0, note: 'Free; funded by the regions.' } },
    { id: 'it-ief4', line: 'iefp', name: '4° anno', local: 'IeFP, 4° anno', ages: [17, 18], isced: 3,
      desc: 'Optional fourth year leading to a technician-level diploma professionale. Holders ' +
        'can take a one-year bridging course to sit the maturità, or enter IFTS/ITS courses.',
      exam: 'Diploma professionale (EQF 4)',
      cost: { amount: 0, note: 'Free; funded by the regions.' } },
  ],
  transfers: [
    { from: 'it-t5', to: 'it-lt', label: 'Tecnico → università', desc: 'Any maturità gives access to all university courses, subject to entry tests for limited-number degrees.' },
    { from: 'it-pr5', to: 'it-its', label: 'Professionale → ITS', desc: 'Professional-school graduates (and liceo graduates) can enter ITS Academies, usually after a selection.' },
    { from: 'it-l5', to: 'it-its', label: 'Liceo → ITS', desc: 'Any upper-secondary diploma gives access to an ITS Academy.' },
    { from: 'it-ief4', to: 'it-pr5', label: 'IeFP → maturità', desc: 'After the 4th-year diploma, a one-year bridging course (corso annuale) leads to the maturità.' },
    { from: 'it-pr12', to: 'it-ief3', label: 'Professionale ↔ IeFP', desc: 'Pupils can switch between state professional schools and regional IeFP courses with recognition of credits (passerelle).' },
    { from: 'it-its', to: 'it-lt', label: 'ITS → laurea', desc: 'Universities can recognise ITS credits towards a professionalising laurea.' },
  ],
  sources: [
    { title: 'Eurydice — Italy: overview of the education system', url: 'https://eurydice.eacea.ec.europa.eu/eurypedia/italy/overview' },
    { title: 'Ministero dell\'Istruzione e del Merito (MIM)', url: 'https://www.mim.gov.it/' },
    { title: 'Ministero dell\'Università e della Ricerca (MUR)', url: 'https://www.mur.gov.it/' },
    { title: 'Wikipedia (it) — Esame di maturità (Decree-Law 127/2025)', url: 'https://it.wikipedia.org/wiki/Esame_di_maturità' },
    { title: 'Tecnica della Scuola — Iscrizioni 2026/2027: i dati ufficiali MIM', url: 'https://www.tecnicadellascuola.it/iscrizioni-2026-2027-i-dati-ufficiali-valditara-esulta-per-il-42-il-55-dei-neo-iscritti-andra-al-liceo-pdf' },
    { title: 'QuiFinanza — Tasse universitarie 2024/25 (MUR statistical office data via Il Sole 24 Ore)', url: 'https://quifinanza.it/attualita/tasse-universita-classifica-2026/1013901/' },
    { title: 'Orizzonte Scuola — Bonus asilo nido 2026, circolare INPS n. 29/2026', url: 'https://www.orizzontescuola.it/bonus-asilo-nido-2026-domande-valide-fino-ai-3-anni-e-importi-fino-a-3-600-euro-circolare-inps/' },
    { title: 'Universita.it — ISEE universitario 2025/26 e no tax area (€22,000)', url: 'https://www.universita.it/?p=1180445' },
    { title: 'MUR Ustat — Focus: la contribuzione studentesca negli atenei', url: 'https://ustat.mur.gov.it/media/1262/focus-la-contribuzione-studentesca-negli-atenei-e-negli-istituti-afam-nellanno-accademico-2021-2022.pdf' },
    { title: 'Cittadinanzattiva — Osservatorio prezzi e tariffe: asili nido', url: 'https://www.orizzontescuola.it/nido-e-asilo-quanto-mi-costi-report-di-cittadinanzattiva/' },
  ],
};
