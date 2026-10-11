// India — education is a shared (concurrent) responsibility of the Union and the 36 states/UTs,
// so details vary by state. This map shows the national NEP 2020 structure (5+3+3+4) with
// CBSE as the reference board; the notes call out the main state differences.
export default {
  id: 'in',
  iso3: 'IND',
  region: 'Asia',
  currency: 'INR',
  name: 'India',
  localName: 'भारत (Bhārat)',
  flag: '🇮🇳',
  summary:
    'The National Education Policy 2020 (NEP) replaces the old 10+2 pattern with a 5+3+3+4 design: ' +
    'a Foundational stage (3 years of pre-school plus Classes 1–2), Preparatory (Classes 3–5), ' +
    'Middle (Classes 6–8) and Secondary (Classes 9–12). Schooling is free and compulsory from 6 to 14 ' +
    'under the Right to Education Act, but more than a third of pupils attend fee-charging private unaided schools. ' +
    'Pupils sit public board exams in Class 10 and Class 12, and choose a stream (science, commerce or ' +
    'humanities) for Classes 11–12. University places are allocated through national entrance tests ' +
    '(JEE for engineering, NEET for medicine, CUET for central universities) and state tests.',
  ageNote:
    'The Ministry of Education has asked all states to admit children to Class 1 at age 6+ (letters of ' +
    '2021 and 2023, applied from 2024-25 in most states), with three pre-school years (Balvatika) from ' +
    'age 3. Some states still admit at 5+ or use different cut-off dates (often 31 March or 30 September). ' +
    'The school year starts in April in CBSE and most northern states, and in June in many southern states. ' +
    'Each state has its own board (e.g. UP, Maharashtra, Tamil Nadu), alongside the national CBSE and CISCE.',
  compulsory: {
    from: 6,
    to: 14,
    label: 'RTE Act 6–14',
    note:
      'The Right of Children to Free and Compulsory Education Act 2009 guarantees free schooling from ' +
      'age 6 to 14 (Classes 1–8) in a neighbourhood school. Private unaided schools must reserve 25% of ' +
      'entry-class seats for disadvantaged children, with fees reimbursed by the state. NEP 2020 aims for ' +
      'universal participation from 3 to 18, but this is not a legal duty.',
  },
  costNote:
    'Government schools charge no tuition up to Class 8 and little or nothing after; the NSS 2025 survey ' +
    'found families still spend about ₹2,900 a year per government pupil (mostly books, uniform, transport) ' +
    'against about ₹28,700 in private unaided schools. "Private" figures below are total household spending ' +
    'per pupil in private unaided schools (fees are the largest part). Tertiary fees vary widely by state and institution.',
  lines: [
    { id: 'early', name: 'Pre-school', color: '#7C8A93', lane: 0,
      desc: 'Pre-school for ages 3–6: government anganwadi centres (run under the Integrated Child ' +
        'Development Services, which also provide meals and health checks) and pre-primary classes in ' +
        'schools, renamed Balvatika under NEP 2020. Private nursery/LKG/UKG classes are common in towns.' },
    { id: 'school', name: 'School (Classes 1–10)', color: '#D2322D', lane: 0, from: 'in-bv3',
      desc: 'Common schooling from Class 1 to Class 10. NEP stages: Foundational (Classes 1–2), ' +
        'Preparatory (3–5), Middle (6–8) and the first half of Secondary (9–10). Schools are government, ' +
        'government-aided or private unaided; they affiliate to a state board, CBSE or CISCE. Pupils who ' +
        'leave can use open schooling (NIOS or state open schools).' },
    { id: 'sci', name: 'Science stream', color: '#7A3E9D', lane: -2, from: 'in-c10',
      desc: 'Senior secondary (Classes 11–12) with physics, chemistry and maths (PCM) and/or biology ' +
        '(PCB). Leads to engineering, medicine and science degrees; most aspirants also attend private ' +
        'coaching for the entrance tests.' },
    { id: 'eng', name: 'Engineering / medicine', color: '#4B2470', lane: -2, from: 'in-s12',
      desc: 'Professional degrees: B.Tech/B.E. (4 years) at IITs, NITs, state and private engineering ' +
        'colleges; MBBS (5.5 years including a 1-year internship) and other health degrees. Admission ' +
        'by JEE Main/Advanced, NEET-UG or state tests, through central counselling (JoSAA, MCC).' },
    { id: 'hum', name: 'Commerce / humanities', color: '#1E66C9', lane: -1, from: 'in-c10',
      desc: 'Senior secondary (Classes 11–12) in the commerce stream (accountancy, business studies, ' +
        'economics) or humanities/arts stream (history, political science, languages, etc.). NEP 2020 ' +
        'aims to soften the hard separation between streams, and CBSE already allows mixing subjects.' },
    { id: 'uni', name: 'University', color: '#174E9C', lane: -1, from: 'in-h12',
      desc: 'Universities and their affiliated colleges (about 1,170 universities and 45,000 colleges). ' +
        'Bachelor degrees take 3 or 4 years under the UGC four-year undergraduate programme (FYUGP) ' +
        'framework, followed by a 1–2 year master and a PhD. About 44.6% of students are in private ' +
        'unaided colleges (AISHE 2021-22).' },
    { id: 'poly', name: 'Polytechnic diploma', color: '#DD7710', lane: 1, from: 'in-c10',
      desc: 'Three-year engineering diploma after Class 10 at government or private polytechnics ' +
        '(approved by AICTE, examined by state technical boards). Holders can join a B.Tech in the ' +
        'second year (lateral entry).' },
    { id: 'iti', name: 'ITI', color: '#2C9546', lane: 2, from: 'in-c10',
      desc: 'Industrial Training Institutes offer 1- or 2-year craft courses (electrician, fitter, ' +
        'welder, COPA, etc.) under the Craftsmen Training Scheme of the Directorate General of Training. ' +
        'Some trades accept pupils after Class 8. Courses end in the All India Trade Test, followed by an ' +
        'apprenticeship. About 4% of upper-secondary pupils are in vocational programmes (UIS).' },
  ],
  stations: [
    // Pre-school
    { id: 'in-bv1', line: 'early', name: 'Anganwadi', local: 'Anganwadi / Nursery, LKG (Balvatika 1–2)', ages: [3, 5], isced: 0,
      desc: 'Play-based early education in anganwadi centres or pre-primary classes (Nursery, LKG). ' +
        'Anganwadis also provide supplementary nutrition and health services. Not compulsory.',
      cost: { amount: 0, private: 21899, note: 'Anganwadis are free. Private: average household spending in private unaided pre-primary, 2025.', src: 2 } },
    { id: 'in-bv3', line: 'early', name: 'Balvatika', local: 'UKG', ages: [5, 6], isced: 0,
      desc: 'Final pre-school year, increasingly offered inside primary schools as "Balvatika" to prepare ' +
        'children for Class 1.',
      cost: { amount: 0, private: 21899, note: 'Free in government schools. Private: average household spending in private unaided pre-primary, 2025.', src: 2 } },
    // School
    { id: 'in-c12', line: 'school', name: 'Class 1–2', local: 'Foundational stage', ages: [6, 8], isced: 1,
      desc: 'Entry to Class 1 at age 6+. Focus on foundational literacy and numeracy (NIPUN Bharat mission). ' +
        'Government schools provide free textbooks and a free midday meal (PM POSHAN).',
      events: ['Admissions: Feb–April (CBSE/north) or May–June (many southern states)'],
      cost: { amount: 0, private: 24663, note: 'Free under the RTE Act. Private unaided schools enrol about 32–37% of pupils (NSS 2025; UDISE+ 2024-25).', src: 2 } },
    { id: 'in-c35', line: 'school', name: 'Class 3–5', local: 'Preparatory stage', ages: [8, 11], isced: 1,
      desc: 'Preparatory stage: textbooks, more formal subjects, a third language in many states. No-detention ' +
        'policy was relaxed in 2019; since December 2024 central schools may hold back pupils in Classes 5 ' +
        'and 8 after a re-exam.',
      exam: 'Class 5 exam (state-dependent)',
      cost: { amount: 0, private: 24663, note: 'Free under the RTE Act. Private: average household spending in private unaided primary, 2025.', src: 2 } },
    { id: 'in-c68', line: 'school', name: 'Class 6–8', local: 'Middle stage', ages: [11, 14], isced: 2,
      desc: 'Middle stage: subject teaching in sciences, maths, social sciences, languages; NEP adds ' +
        'vocational exposure (e.g. a 10-day bagless period with local craftspeople). Free schooling ' +
        'under RTE ends after Class 8.',
      cost: { amount: 0, private: 30869, note: 'Free under the RTE Act. Private: average household spending in private unaided middle schools, 2025.', src: 2 } },
    { id: 'in-c9', line: 'school', name: 'Class 9', local: 'Secondary stage', ages: [14, 15], isced: 2,
      desc: 'Start of the secondary stage. Pupils register with the board; Class 9 marks do not count ' +
        'toward the board result. Drop-out rises sharply from here, especially in rural areas.',
      cost: { amount: 0, private: 35426, note: 'Most states charge no or nominal tuition in government schools. Private: average household spending in private unaided secondary, 2025.', src: 2 } },
    { id: 'in-c10', line: 'school', name: 'Class 10', local: 'Secondary School Examination', ages: [15, 16], isced: 2,
      desc: 'Class 10 board exam (state board, CBSE or CISCE ICSE). From 2026 CBSE holds two Class 10 ' +
        'exams: a compulsory main exam in February–March and an optional second exam in May to improve up ' +
        'to three subjects; the better score counts. Results decide stream and school options for Class 11.',
      exam: 'Class 10 board certificate (CBSE AISSE / SSC / ICSE)',
      events: [
        'CBSE main exam: 17 Feb – 11 Mar 2026',
        'CBSE second exam: 15–21 May 2026 (results 18 July)',
        'Stream choice for Class 11 (April–June)',
      ],
      cost: { amount: 1600, private: 35426, note: 'CBSE exam fee for five subjects (2025-26). State boards charge their own, often lower, fees.', src: 6 } },
    // Science stream
    { id: 'in-s12', line: 'sci', name: 'Class 11–12', local: 'Senior secondary — science (PCM/PCB)', ages: [16, 18], isced: 3,
      desc: 'Physics, chemistry, maths and/or biology plus English; admission often needs good Class 10 marks, and many students also attend coaching institutes. Class 12 board exam in February–March. Engineering aspirants take JEE Main (January and April ' +
        'sessions); the top 250,000 may take JEE Advanced for the IITs. Medical aspirants take NEET-UG ' +
        'in May.',
      exam: 'Class 12 board certificate (AISSCE / HSC / ISC)',
      events: [
        'Board exams: mid-Feb – early April',
        'JEE Main: January and April sessions',
        'NEET-UG: 3 May 2026 (cancelled; re-held 21 June 2026)',
        'JEE Advanced: 17 May 2026',
      ],
      cost: { amount: 1600, private: 40601, note: 'CBSE exam fee for five subjects (2025-26), plus practical fees. Private: average household spending, 2025.', src: 6 } },
    // Engineering / medicine
    { id: 'in-btech', line: 'eng', name: 'B.Tech / MBBS', local: 'B.Tech / B.E. (4 yrs), MBBS (5.5 yrs)', ages: [18, 22], isced: 6,
      desc: 'Four-year engineering degree; MBBS lasts 5.5 years including a compulsory internship. Seats ' +
        'are filled by rank in JEE/NEET through JoSAA (IITs, NITs) and MCC/state counselling (medicine). ' +
        'About 18,000 IIT seats for over a million JEE candidates.',
      exam: 'B.Tech / MBBS',
      cost: { amount: 200000, note: 'IIT tuition is about ₹2 lakh a year; waived fully below ₹1 lakh family income and two-thirds up to ₹5 lakh.', src: 12 } },
    { id: 'in-mtech', line: 'eng', name: 'M.Tech / MD', local: 'M.Tech / M.E. (2 yrs), MD/MS (3 yrs)', ages: [22, 24], isced: 7,
      desc: 'Postgraduate engineering via GATE (with a monthly stipend at many public institutes); ' +
        'medical specialisation via NEET-PG.',
      exam: 'M.Tech / MD / MS',
      cost: { amount: 0, note: 'GATE-qualified M.Tech students at public institutes usually receive a stipend; fees vary by institute.' } },
    // Commerce / humanities
    { id: 'in-h12', line: 'hum', name: 'Class 11–12', local: 'Senior secondary — commerce / humanities', ages: [16, 18], isced: 3,
      desc: 'Commerce (accountancy, business studies, economics) or humanities (history, political science, psychology, languages); vocational subjects can be added. Class 12 board exam in February–March. Central universities (and many state and private ones) admit through ' +
        'CUET-UG, run by the National Testing Agency in May–June; others admit on board marks.',
      exam: 'Class 12 board certificate',
      events: ['Board exams: mid-Feb – early April', 'CUET-UG: 11 May – 7 June 2026'],
      cost: { amount: 1600, private: 40601, note: 'CBSE exam fee for five subjects (2025-26). Private: average household spending, 2025.', src: 6 } },
    // University
    { id: 'in-ug', line: 'uni', name: 'Bachelor', local: 'B.A. / B.Sc. / B.Com. (3–4 yrs)', ages: [18, 21], isced: 6,
      desc: 'Three-year degree, or four years with Honours / Honours with Research under the FYUGP ' +
        'framework, with exit points: certificate after 1 year, diploma after 2. About 79% of the 43 ' +
        'million higher-education students are at undergraduate level; arts is the largest field (34%).',
      exam: 'Bachelor\'s degree',
      cost: { amount: 10120, note: 'Example: University of Delhi B.A. Programme, first year 2025-26. State colleges often charge less; private colleges much more.', src: 13 } },
    { id: 'in-pg', line: 'uni', name: 'Master', local: 'M.A. / M.Sc. / M.Com. / MBA', ages: [21, 23], isced: 7,
      desc: 'Two years after a 3-year bachelor, or one year after a 4-year Honours degree (UGC 2022 ' +
        'framework). MBA admission uses CAT and other tests.',
      exam: 'Master\'s degree',
      cost: { amount: 10000, note: 'About the same as bachelor fees at central universities; varies widely by state and programme.', estimate: true } },
    { id: 'in-phd', line: 'uni', name: 'PhD', ages: [23, 27], isced: 8,
      desc: 'Minimum 3 years (UGC 2022 regulations). Entry with a master, or directly after a 4-year ' +
        'Honours with Research degree. UGC-NET (June and December) qualifies for Junior Research ' +
        'Fellowships. PhD enrolment was about 213,000 in 2021-22.',
      exam: 'Doctorate (Ph.D.)',
      cost: { amount: 0, note: 'Fees are small and many scholars receive JRF or institutional fellowships.' } },
    // Polytechnic
    { id: 'in-dip', line: 'poly', name: 'Diploma', local: 'Polytechnic diploma in engineering (3 yrs)', ages: [16, 19], isced: 4,
      desc: 'Three-year diploma (e.g. civil, mechanical, electrical, computer engineering), with entrance ' +
        'tests set by each state. Graduates become technicians or join B.Tech year 2 by lateral entry.',
      exam: 'Diploma in Engineering',
      cost: { amount: 13000, private: 35000, note: 'Example: Uttarakhand government polytechnics, 2025 (tuition + student welfare fee). Fees vary by state.', src: 14 } },
    // ITI
    { id: 'in-iti', line: 'iti', name: 'ITI trade', local: 'Industrial Training Institute (1–2 yrs)', ages: [16, 18], isced: 3,
      desc: 'Practical craft training, with admission on Class 8 or Class 10 marks. Most ITIs are ' +
        'private. The National Trade Certificate (NTC) is awarded after the All India Trade Test.',
      exam: 'National Trade Certificate',
      cost: { amount: 3350, private: 19315, note: 'Example: Punjab annual admission fee, government vs private ITIs. Fees vary by state.', src: 15 } },
    { id: 'in-appr', line: 'iti', name: 'Apprentice', local: 'Apprenticeship (Apprentices Act 1961)', ages: [18, 19], isced: 3,
      desc: 'Paid apprenticeship in industry (usually 1 year), supported by the National Apprenticeship ' +
        'Promotion Scheme. Ends with the National Apprenticeship Certificate.',
      exam: 'National Apprenticeship Certificate',
      cost: { amount: 0, note: 'Apprentices receive a stipend from the employer.' } },
  ],
  transfers: [
    { from: 'in-dip', to: 'in-btech', label: 'Diploma → B.Tech year 2',
      desc: 'Polytechnic diploma holders can join the second year of a B.Tech (lateral entry), usually through a state test.' },
    { from: 'in-s12', to: 'in-ug', label: 'Science → B.Sc. / other degrees',
      desc: 'Science students who do not take engineering or medicine go on to B.Sc. or any other bachelor through CUET or board marks.' },
    { from: 'in-iti', to: 'in-dip', label: 'ITI → polytechnic',
      desc: 'Many states let ITI graduates join the second year of a polytechnic diploma.' },
    { from: 'in-iti', to: 'in-h12', label: 'ITI → Class 12 equivalence',
      desc: 'A 2-year ITI course plus language exams (via NIOS or state boards) can give Class 12 equivalence for further study.' },
    { from: 'in-ug', to: 'in-mtech', label: 'B.Sc. → M.Sc./M.Tech',
      desc: 'Science graduates can take GATE or institute tests for M.Sc. or M.Tech programmes.' },
    { from: 'in-btech', to: 'in-phd', label: 'B.Tech → PhD',
      desc: 'Strong B.Tech graduates can enter PhD programmes directly at IITs and other institutes.' },
  ],
  sources: [
    { title: 'Ministry of Education — National Education Policy 2020', url: 'https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf' },
    { title: 'PIB / MoSPI — Results of Comprehensive Modular Survey: Education 2025 (26 Aug 2025)', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2160863' },
    { title: 'NSO — NSS Report No. 595, CMS: Education 2025 (Statements 1.3, 2.5)', url: 'https://microdata.gov.in/NADA/index.php/catalog/255' },
    { title: 'Ministry of Education — UDISE+ 2024-25 booklet', url: 'https://dashboard.udiseplus.gov.in/report-new-v.6-demo2025/static/media/UDISE%2B2024_25_Booklet_existing.118ba29d4773e6372f72.pdf' },
    { title: 'Ministry of Education — All India Survey on Higher Education 2021-22', url: 'https://education.gov.in/sites/upload_files/mhrd/files/statistics-new/AISHE%20Book_2021-22_4.pdf' },
    { title: 'Rajya Sabha — Unstarred Q. 342 (6 Dec 2023): age of admission to Class 1', url: 'https://rsdebate.nic.in/bitstream/123456789/746053/1/PQ_262_06122023_U342_p175_p176.pdf' },
    { title: 'Business Standard — CBSE 2026 board exam fee structure', url: 'https://www.business-standard.com/education/news/what-is-cbse-2026-board-exams-fee-structure-all-class-10-12-details-here-nc-125110301081_1.html' },
    { title: 'Onmanorama — CBSE Class 10 second board exam results 2026', url: 'https://www.onmanorama.com/news/india/2026/07/18/cbse-class-10-second-board-exam-results-declared-59-improve-scores.html' },
    { title: 'Deccan Herald — NEET-UG 2026 re-test', url: 'https://deccanherald.com/india/neet-ug-over-27-lakh-candidates-skipped-re-test-highest-absentee-count-ever-4077328' },
    { title: 'PW — JEE Advanced 2026 on 17 May (IIT Roorkee)', url: 'https://www.pw.live/news/jee-advanced-2026-exam-may-17-iit-roorkee' },
    { title: 'Careers360 — CUET-UG 2026 schedule', url: 'https://news.careers360.com/cuet-ug-2026-exam-date-registration-begins-nta-hold-exams-from-may-11-31-admission-central-state-universities-cbt-link/amp' },
    { title: 'IIT Guwahati — Fee waiver notice for UG students (April 2026)', url: 'https://academic.iitg.ac.in/acad/Notice/Submission_of_Income_Certificate_Income_Affidavit_MEB_OEB_2026.pdf' },
    { title: 'FindMyCollege — IIT B.Tech fees (tuition about ₹2 lakh a year)', url: 'https://articles.findmycollege.com/btech-iit-btech-fees/' },
    { title: 'University of Delhi — Admissions (UG prospectus and fee structure)', url: 'https://admission.uod.ac.in/' },
    { title: 'Directorate of Technical Education Uttarakhand — Polytechnic admission 2025 fees', url: 'https://dte.uk.gov.in/?p=6122' },
    { title: 'The Tribune — Punjab ITI admission fees (government vs private)', url: 'https://www.tribuneindia.com/news/punjab/snag-hampers-iti-admission-process' },
    { title: 'UNESCO UIS — Data browser (vocational share, private enrolment, compulsory education)', url: 'https://databrowser.uis.unesco.org/' },
    { title: 'Directorate General of Training — Craftsmen Training Scheme (ITI)', url: 'https://dgt.gov.in/' },
  ],
};
