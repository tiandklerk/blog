// Indonesia — general schools fall under the Ministry of Primary and Secondary Education
// (Kemendikdasmen), Islamic madrasahs (MI, MTs, MA) under the Ministry of Religious Affairs,
// and higher education under the Ministry of Higher Education, Science and Technology.
// Provinces run public upper-secondary schools; districts run SD and SMP.
export default {
  id: 'id',
  iso3: 'IDN',
  region: 'Asia',
  currency: 'IDR',
  name: 'Indonesia',
  localName: 'Indonesia',
  flag: '🇮🇩',
  summary:
    'A 6-3-3 system: six years of primary school (SD, or Islamic MI), three years of junior secondary ' +
    '(SMP or MTs) and three years of senior secondary, where pupils choose at about 15–16 between general ' +
    'SMA/MA and vocational SMK/MAK. About one school in six is a madrasah under the Ministry of ' +
    'Religious Affairs, and private schools and pesantren are a large part of the system. There is no ' +
    'national leaving exam since 2021; a new Academic Ability Test (TKA) started in 2025. Higher education ' +
    'is offered by universities and institutes (academic S1–S3) and polytechnics (vocational D1–D4), with ' +
    'state places allocated through SNBP (school record), SNBT (the UTBK test) or each university\'s own ' +
    'selection. About half of tertiary students attend private institutions.',
  ageNote:
    'The official primary entry age is 7, and children must be at least 6 on 1 July to enter SD (5½ ' +
    'with a psychologist\'s recommendation for exceptional readiness); in practice many start at 6, so real ' +
    'ages are often a year younger than shown. The school year starts in mid-July. Some SMK programmes take ' +
    '4 years. Equivalency programmes (Paket A, B, C) offer a second chance outside school.',
  compulsory: {
    from: 7,
    to: 16,
    label: 'Wajib belajar (9 years)',
    note:
      'The 2003 National Education System Law makes nine years of basic education (SD/MI and SMP/MTs) ' +
      'compulsory, typically ages 7–15, and free at public schools. In May 2025 the Constitutional Court ' +
      'ruled that the state must also ensure free basic education at private schools.',
    extendedTo: 19,
    extendedLabel: '12-year programme',
    extendedNote:
      'Since 2015 the government has promoted a 12-year "wajib belajar" programme backed by cash grants ' +
      '(Program Indonesia Pintar), and several provinces have made SMA/SMK free. It is not yet a national ' +
      'legal duty; the draft revision of the Sisdiknas law (2025–26) proposes 13 years including one year of PAUD.',
  },
  costNote:
    'Public SD and SMP are free (funded by BOS school grants). Public SMA/SMK fees are set by provinces, ' +
    'and many are now free. State university fees (UKT) depend on family income; figures shown are UGM\'s ' +
    'middle band for 2026/27. Private schools and universities set their own fees.',
  lines: [
    { id: 'paud', name: 'PAUD', color: '#7C8A93', lane: 0,
      desc: 'Pendidikan Anak Usia Dini: playgroups (KB), day care (TPA) and kindergartens (TK, or Islamic ' +
        'RA). Not compulsory and mostly private. The government aims to build at least one TK in every ' +
        'village, and wants one year of pre-school to become compulsory.' },
    { id: 'dasar', name: 'SD / SMP', color: '#D2322D', lane: 0, from: 'id-tk',
      desc: 'Basic education: SD (Sekolah Dasar) or MI (Madrasah Ibtidaiyah), grades 1–6, then SMP ' +
        '(Sekolah Menengah Pertama) or MTs (Madrasah Tsanawiyah), grades 7–9. The national Kurikulum Merdeka ' +
        'has applied in all schools since 2024. Pesantren (Islamic boarding schools) may teach the same curriculum.' },
    { id: 'sma', name: 'SMA / MA', color: '#7A3E9D', lane: -1, from: 'id-smp9',
      desc: 'Sekolah Menengah Atas (general senior secondary) or Madrasah Aliyah, grades 10–12. Grade 10 ' +
        'is common; in grades 11–12 students choose elective subjects (Kurikulum Merdeka) instead of the ' +
        'old fixed IPA / IPS / Bahasa streams.' },
    { id: 'pt', name: 'University', color: '#4B2470', lane: -1, from: 'id-sma12',
      desc: 'Universitas, institut and sekolah tinggi offer academic degrees: Sarjana (S1, usually 4 years, ' +
        '144 credits), Magister (S2) and Doktor (S3), plus professional programmes (profesi) such as ' +
        'medicine, law notary and teaching (PPG). Public universities (PTN) select through SNBP, SNBT and ' +
        'their own Mandiri tests; private universities (PTS) admit directly.' },
    { id: 'smk', name: 'SMK / MAK', color: '#DD7710', lane: 1, from: 'id-smp9',
      desc: 'Sekolah Menengah Kejuruan (vocational senior secondary), 3 years or 4 years in some ' +
        'programmes, in fields such as engineering, ICT, business, tourism, health, agriculture and ' +
        'maritime. Includes industry placements (PKL). Most SMKs are private.' },
    { id: 'vok', name: 'Polytechnic', color: '#B8860B', lane: 1, from: 'id-smk',
      desc: 'Vocational higher education at politeknik, akademi, akademi komunitas and university vocational ' +
        'schools: Diploma 1–3 (1–3 years) and Diploma 4 / Sarjana Terapan (applied bachelor, 4 years), ' +
        'then Magister Terapan. Also open to SMA graduates.' },
    { id: 'paket', name: 'Paket C', color: '#8B6B4A', lane: 2, from: 'id-smp9',
      desc: 'Pendidikan kesetaraan (equivalency education) at community learning centres (PKBM): Paket A ' +
        '(primary), Paket B (junior secondary) and Paket C (senior secondary). Certificates are legally ' +
        'equal to school diplomas. Many pesantren pupils also use this route.' },
  ],
  stations: [
    // PAUD
    { id: 'id-kb', line: 'paud', name: 'Playgroup', local: 'Kelompok Bermain (KB) / TPA', ages: [3, 5], isced: 0,
      desc: 'Playgroups for 2–4-year-olds and day care, run mostly by foundations, mosques and communities.',
      cost: { amount: 0, note: 'Mostly private, with fees set by each provider; no national figure. About 95% of pre-primary pupils are in private settings (UIS 2018).' } },
    { id: 'id-tk', line: 'paud', name: 'TK / RA', local: 'Taman Kanak-kanak / Raudhatul Athfal (TK A, TK B)', ages: [5, 7], isced: 0,
      desc: 'Two kindergarten years (TK A and TK B). Participation of 5–6-year-olds rose from about 74% ' +
        'in 2024 to 88% in 2025 according to the ministry. SD may not require reading tests for entry.',
      cost: { amount: 0, note: 'Public TK receive operational grants (BOP PAUD); fees vary by provider and region and there is no national figure.' } },
    // Basic education
    { id: 'id-sd1', line: 'dasar', name: 'SD 1–4', local: 'Sekolah Dasar / Madrasah Ibtidaiyah, kelas 1–4', ages: [7, 11], isced: 1,
      desc: 'Primary school entry through the SPMB admission system (age first, then zoning by distance). ' +
        'Classes are taught mainly by one class teacher; religion is a compulsory subject.',
      events: ['SPMB school admissions: June–July', 'School year starts mid-July'],
      cost: { amount: 0, note: 'Free at public SD/MI (BOS grants). About 23% of primary pupils attend private schools (UIS 2018).', src: 0 } },
    { id: 'id-sd5', line: 'dasar', name: 'SD 5', local: 'Kelas 5', ages: [11, 12], isced: 1,
      desc: 'A sample of grade-5 pupils takes the National Assessment (Asesmen Nasional: literacy, numeracy ' +
        'and character surveys), which evaluates schools rather than pupils.',
      events: ['Asesmen Nasional (school evaluation)'],
      cost: { amount: 0, note: 'Free at public schools.' } },
    { id: 'id-sd6', line: 'dasar', name: 'SD 6', local: 'Kelas 6', ages: [12, 13], isced: 1,
      desc: 'Final primary year. Since 2026 pupils can take the Academic Ability Test (TKA) in Indonesian ' +
        'and maths; it does not decide graduation but can be used for the merit route into SMP.',
      exam: 'Ijazah SD/MI', events: ['TKA SD: 20–30 April 2026'],
      cost: { amount: 0, note: 'Free at public schools.' } },
    { id: 'id-smp7', line: 'dasar', name: 'SMP 7–8', local: 'Sekolah Menengah Pertama / Madrasah Tsanawiyah, kelas 7–8', ages: [13, 15], isced: 2,
      desc: 'Junior secondary with subject teachers. Grade-8 pupils sit the National Assessment (sample).',
      cost: { amount: 0, note: 'Free at public SMP/MTs. About 39% of lower-secondary pupils attend private schools (UIS 2018).', src: 0 } },
    { id: 'id-smp9', line: 'dasar', name: 'SMP 9', local: 'Kelas 9', ages: [15, 16], isced: 2,
      desc: 'End of compulsory basic education. TKA results (optional) support admission to SMA/SMK via the ' +
        'merit route, alongside zoning, affirmative and transfer quotas.',
      exam: 'Ijazah SMP/MTs', events: ['TKA SMP: 6–16 April 2026', 'Choice of SMA, SMK or MA (SPMB, June)'],
      cost: { amount: 0, note: 'Free at public schools.' } },
    // SMA
    { id: 'id-sma10', line: 'sma', name: 'SMA 10', local: 'Kelas X', ages: [16, 17], isced: 3,
      desc: 'Common general year, with guidance for choosing elective subjects for grades 11–12.',
      cost: { amount: 0, note: 'Free in many provinces; others charge monthly fees (SPP) or committee contributions. About 46% of upper-secondary pupils are in private schools (UIS 2018).', src: 0 } },
    { id: 'id-sma12', line: 'sma', name: 'SMA 11–12', local: 'Kelas XI–XII', ages: [17, 19], isced: 3,
      desc: 'Students take core subjects plus electives (e.g. physics, biology, economics, sociology). TKA for ' +
        'grade 12 is held in November and its results can be used for SNBP university entry. Graduation is ' +
        'decided by the school.',
      exam: 'Ijazah SMA/MA',
      events: ['TKA SMA/SMK: 3–9 Nov 2025', 'SNBP registration: 3–18 Feb 2026', 'UTBK test: 21–30 April 2026'],
      cost: { amount: 0, note: 'Free in many provinces; others charge monthly fees set by the province or school committee.' } },
    // University
    { id: 'id-s1', line: 'pt', name: 'Sarjana (S1)', local: 'Program Sarjana', ages: [19, 23], isced: 6,
      desc: 'Usually 4 years (144 SKS credits). State university places: SNBP (school record, results 31 ' +
        'March), SNBT (UTBK computer test, results 25 May), then Mandiri. Low-income students can get KIP ' +
        'Kuliah, which covers fees and living costs.',
      exam: 'Sarjana (S.Pd., S.T., S.H., …)',
      events: ['SNBP results: 31 March 2026', 'SNBT results: 25 May 2026'],
      cost: { amount: 9200000, note: 'UGM law, 2026/27, middle UKT band (4 of 6); bands run from Rp0 to Rp9.2 million a semester by family income.', src: 3 } },
    { id: 'id-s2', line: 'pt', name: 'Magister (S2)', ages: [23, 25], isced: 7,
      desc: 'Master\'s degree, usually 2 years. Professional programmes (e.g. medical specialists) run separately.',
      exam: 'Magister (M.Si., M.T., …)',
      cost: { amount: 9200000, note: 'Postgraduate fees are set per programme and are usually higher than S1; the S1 middle band is shown as a rough lower bound.', estimate: true } },
    { id: 'id-s3', line: 'pt', name: 'Doktor (S3)', ages: [25, 28], isced: 8,
      desc: 'Doctorate, usually 3–4 years. Many lecturers study with LPDP or ministry scholarships.',
      exam: 'Doktor (Dr.)',
      cost: { amount: 9200000, note: 'Fees are set per programme; the S1 middle band is shown as a rough lower bound. Scholarships (LPDP) are common.', estimate: true } },
    // SMK
    { id: 'id-smk', line: 'smk', name: 'SMK 10–12', local: 'Sekolah Menengah Kejuruan / Madrasah Aliyah Kejuruan', ages: [16, 19], isced: 3,
      desc: 'Vocational upper secondary with workshop practice, industry placements (PKL) and competency ' +
        'tests leading to a skills certificate. Some 4-year programmes add grade 13. Graduates go to work, ' +
        'polytechnics or universities.',
      exam: 'Ijazah SMK + sertifikat kompetensi',
      events: ['TKA SMA/SMK: 3–9 Nov 2025'],
      share: { pct: 37, of: 'of upper-secondary students are in vocational programmes (2025)', src: 0 },
      cost: { amount: 0, note: 'Free at public SMK in many provinces. About 74% of SMKs are private.', src: 8 } },
    // Polytechnic
    { id: 'id-d4', line: 'vok', name: 'D3 / D4', local: 'Diploma 3 / Sarjana Terapan (D4)', ages: [19, 23], isced: 6,
      desc: 'Diploma 3 (3 years, ISCED 5) or applied bachelor D4 (4 years). State polytechnics admit through ' +
        'SNBP, SNBT and their own tests; many programmes include long industry placements.',
      exam: 'A.Md. (D3) / Sarjana Terapan (S.Tr.)',
      cost: { amount: 11400000, note: 'UGM vocational school D4 (e.g. banking), 2026/27, middle UKT band (4 of 6); Rp0 for the lowest-income bands.', src: 3 } },
    { id: 'id-mtr', line: 'vok', name: 'M. Terapan', local: 'Magister Terapan', ages: [23, 25], isced: 7,
      desc: 'Applied master offered by some polytechnics and vocational schools.',
      exam: 'Magister Terapan (M.Tr.)',
      cost: { amount: 11400000, note: 'Set per programme; the D4 middle band is shown as a rough lower bound.', estimate: true } },
    // Paket C
    { id: 'id-paketc', line: 'paket', name: 'Paket C', local: 'Pendidikan kesetaraan Paket C (PKBM)', ages: [16, 19], isced: 3,
      desc: 'Senior-secondary equivalency for those outside school, including working youth, home-schoolers ' +
        'and pesantren pupils. The certificate gives access to higher education and the civil service.',
      exam: 'Ijazah Paket C',
      cost: { amount: 0, note: 'Free at public PKBM, which receive BOP equivalency grants; private centres may charge.' } },
  ],
  transfers: [
    { from: 'id-smk', to: 'id-s1', label: 'SMK → university',
      desc: 'SMK graduates can take SNBT and enter S1 programmes, mostly in related fields.' },
    { from: 'id-sma12', to: 'id-d4', label: 'SMA → polytechnic',
      desc: 'SMA graduates are a large share of polytechnic entrants.' },
    { from: 'id-paketc', to: 'id-s1', label: 'Paket C → university',
      desc: 'The Paket C certificate counts as an SMA diploma for SNBT and private universities.' },
    { from: 'id-d4', to: 'id-s2', label: 'D4 → Magister',
      desc: 'An applied bachelor (D4) gives access to academic master\'s programmes.' },
  ],
  sources: [
    { title: 'UNESCO UIS — Data browser (compulsory education, private enrolment, vocational share)', url: 'https://databrowser.uis.unesco.org/' },
    { title: 'UU No. 20/2003 — Sistem Pendidikan Nasional (BPK database)', url: 'https://peraturan.bpk.go.id/Details/43920/uu-no-20-tahun-2003' },
    { title: 'SNPMB — Jadwal SNBP dan SNBT 2026', url: 'https://snpmb.id/jadwal-penting' },
    { title: 'Universitas Gadjah Mada — Uang Kuliah Tunggal (UKT) 2026', url: 'https://admissions.ugm.ac.id/v26/uang-kuliah-tunggal-ukt-tahun-2026/' },
    { title: 'Bisnis.com — Jadwal TKA SD dan SMP 2026', url: 'https://kabar24.bisnis.com/read/20260404/79/1964212/jadwal-tka-sd-dan-smp-2026-resmi-ditetapkan-pelaksanaan-mulai-senin' },
    { title: 'Bisnis.com — Jadwal TKA SMA/SMK 2025', url: 'https://kabar24.bisnis.com/read/20251028/79/1924029/jadwal-gladi-bersih-dan-pelaksanaan-tka-untuk-smasmksederajat' },
    { title: 'Investortrust — Wajib belajar 13 tahun dalam RUU Sisdiknas', url: 'https://investortrust.id/national/65253/wajib-belajar-13-tahun-akan-diatur-ruu-sisdiknas-mulai-paud-hingga-sma' },
    { title: 'Antara — Mendikdasmen: satu TK untuk satu desa; PAUD participation 2024–2025', url: 'https://megapolitan.antaranews.com/berita/496002/mendikdasmen-prioritaskan-anggaran-revitalisasi-bangun-1-tk-untuk-1-desa' },
    { title: 'GoodStats — Sekolah negeri dan swasta 2024/2025 (Kemendikdasmen data)', url: 'https://goodstats.id/article/berapa-jumlah-sekolah-negeri-dan-swasta-di-indonesia-2025-ini-perbandingannya-rhjWY' },
    { title: 'Nuffic — Education system Indonesia (diploma levels)', url: 'https://www.nuffic.nl/en/education-systems/indonesia' },
    { title: 'Kemendikdasmen — Ministry of Primary and Secondary Education', url: 'https://www.kemendikdasmen.go.id/' },
    { title: 'Mahkamah Konstitusi — Constitutional Court of Indonesia', url: 'https://www.mkri.id/' },
  ],
};
