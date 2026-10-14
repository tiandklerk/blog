// Türkiye — a centralised system run by the Ministry of National Education (MEB) for schools
// and the Council of Higher Education (YÖK) for universities. Schooling follows the "4+4+4"
// structure introduced in 2012.
export default {
  id: 'tr',
  iso3: 'TUR',
  region: 'Europe',
  currency: 'TRY',
  name: 'Türkiye',
  localName: 'Türkiye',
  flag: '🇹🇷',
  summary:
    'Twelve years of compulsory schooling in three four-year stages (4+4+4, since 2012): primary school ' +
    '(ilkokul), middle school (ortaokul, also as imam hatip middle schools) and upper secondary (lise). ' +
    'At about 14 pupils move into an upper-secondary type: selective science and social-science high ' +
    'schools and some Anatolian high schools fill places by the central LGS exam; most pupils are placed ' +
    'in a nearby Anatolian, vocational and technical, or Anatolian imam hatip high school by address. About ' +
    'two in five formal upper-secondary students are in vocational education, including the MESEM ' +
    'apprenticeship route. University places are allocated centrally by score in the YKS exam, for 2-year ' +
    'associate (önlisans) and 4-year bachelor (lisans) programmes.',
  ageNote:
    'Children start primary school in the September after they turn about 5¾–6: those who have completed ' +
    '69 months by the end of September are enrolled automatically, and 66–68-month-olds can start at the ' +
    'parents\' request. The school year runs from September to June. The new "Türkiye Century Maarif Model" ' +
    'curriculum began in 2024-25 in pre-school and grades 1, 5 and 9 and is being phased into the other grades.',
  compulsory: {
    from: 6,
    to: 18,
    label: 'Zorunlu eğitim 12 yıl',
    note:
      'Law 6287 (April 2012) made 12 years of schooling compulsory, from primary school to the end of ' +
      'upper secondary (about ages 6 to 18). Upper secondary can be completed in formal schools, ' +
      'through MESEM apprenticeships, or by open education.',
  },
  costNote:
    'Public schools charge no tuition, and daytime ("normal öğretim") programmes at state universities ' +
    'have been free since 2012; evening programmes, open education and students who overrun the normal ' +
    'duration pay fees. Private schools enrol about 8% of school pupils and foundation universities about ' +
    '11% of tertiary students (2025/26 MEB; UIS 2023).',
  lines: [
    { id: 'pre', name: 'Okul öncesi', color: '#7C8A93', lane: 0,
      desc: 'Pre-school: crèches (kreş), kindergartens (anaokulu) and pre-school classes in primary schools ' +
        '(anasınıfı). Not compulsory, but 84% of 5-year-olds were enrolled in 2025/26.' },
    { id: 'ilk', name: 'İlkokul / Ortaokul', color: '#D2322D', lane: 0, from: 'tr-ana',
      desc: 'Primary school (ilkokul, grades 1–4) and middle school (ortaokul, grades 5–8). Imam hatip ' +
        'middle schools (imam hatip ortaokulu) follow the same curriculum with extra religious subjects.' },
    { id: 'fen', name: 'Fen lisesi', color: '#4B2470', lane: -3, from: 'tr-o8',
      desc: 'Science high schools (fen lisesi) and social-science high schools (sosyal bilimler lisesi): ' +
        'highly selective 4-year schools that admit only by LGS score, with an intensive maths and science ' +
        '(or humanities) programme.' },
    { id: 'anl', name: 'Anadolu lisesi', color: '#7A3E9D', lane: -2, from: 'tr-o8',
      desc: 'Anatolian high school, the main academic upper-secondary school (4 years; some with a ' +
        'preparatory foreign-language year). Top schools select by LGS; others admit by address. Fine-arts ' +
        'and sports high schools admit by aptitude test.' },
    { id: 'uni', name: 'Üniversite', color: '#5B2C83', lane: -2, from: 'tr-a12',
      desc: 'State and foundation (private, non-profit) universities offer bachelor (lisans, 4 years; ' +
        'medicine 6), master (yüksek lisans) and doctorate (doktora). Anadolu, İstanbul and Atatürk ' +
        'universities run very large open-education faculties.' },
    { id: 'aihl', name: 'İmam hatip lisesi', color: '#1E66C9', lane: -1, from: 'tr-o8',
      desc: 'Anatolian imam hatip high school (Anadolu imam hatip lisesi): general academic subjects plus ' +
        'Arabic, Qur\'an and religious studies. Graduates can enter any university programme.' },
    { id: 'mtal', name: 'Meslek lisesi', color: '#DD7710', lane: 1, from: 'tr-o8',
      desc: 'Vocational and technical Anatolian high school (mesleki ve teknik Anadolu lisesi, MTAL), ' +
        '4 years, in fields such as IT, electrics/electronics, machinery, health, accounting, tourism ' +
        'and child development. Students choose a field (alan) in grade 10 and a branch (dal) in grade 11.' },
    { id: 'myo', name: 'Önlisans (MYO)', color: '#B8860B', lane: 1, from: 'tr-m12',
      desc: 'Two-year associate degree (önlisans) at vocational schools of higher education (meslek ' +
        'yüksekokulu, MYO). Vocational high-school graduates in the same field once had direct entry; ' +
        'now placement is by TYT score. Graduates can move to a bachelor through the DGS exam.' },
    { id: 'mesem', name: 'MESEM', color: '#2C9546', lane: 2, from: 'tr-o8',
      desc: 'Vocational education centres (mesleki eğitim merkezi, MESEM): apprenticeship with one day ' +
        'a week at school and four days in a firm, paid a wage. Since 2016 it counts as formal upper ' +
        'secondary within compulsory schooling, and leads to journeyman (kalfa) and master (usta) certificates.' },
    { id: 'aol', name: 'Açık lise', color: '#8B6B4A', lane: 3, from: 'tr-o8',
      desc: 'Open high schools (açık öğretim lisesi, plus open vocational and open imam hatip high schools): ' +
        'distance study with central exams three times a year. About 1.05 million students used open ' +
        'education in 2025/26.' },
  ],
  stations: [
    // Pre-school
    { id: 'tr-kres', line: 'pre', name: 'Anaokulu', local: 'Kreş / Anaokulu (3–5 yaş)', ages: [3, 5], isced: 0,
      desc: 'Kindergarten for children aged 36–60 months, in public kindergartens and many private providers ' +
        '(about 17% of pre-primary pupils are in private institutions, UIS 2023).',
      cost: { amount: 0, note: 'No tuition at public kindergartens; parents may contribute to meals and materials.' } },
    { id: 'tr-ana', line: 'pre', name: 'Anasınıfı', ages: [5, 6], isced: 0,
      desc: 'Pre-school year for 5-year-olds, mostly in classes attached to primary schools. Enrolment of ' +
        '5-year-olds reached 84% in 2025/26.',
      share: { pct: 84, of: 'of 5-year-olds were enrolled in pre-school (2025/26)', src: 0 },
      cost: { amount: 0, note: 'No tuition at public schools; parents may contribute to meals and materials.' } },
    // Primary / middle
    { id: 'tr-i1', line: 'ilk', name: '1. sınıf', local: 'İlkokul 1. sınıf', ages: [6, 7], isced: 1,
      desc: 'Start of compulsory school. The first weeks include an orientation programme; reading and ' +
        'writing are taught with a sound-based method.',
      events: ['e-Okul automatic enrolment: summer', 'School starts in September'],
      cost: { amount: 0, note: 'Free at public schools. About 6% of primary pupils attend private schools (UIS 2023).', src: 3 } },
    { id: 'tr-i24', line: 'ilk', name: '2–4. sınıf', local: 'İlkokul 2–4. sınıf', ages: [7, 10], isced: 1,
      desc: 'Class-teacher stage. English starts in grade 2. Number grades begin in grade 4.',
      cost: { amount: 0, note: 'Free at public schools.' } },
    { id: 'tr-o57', line: 'ilk', name: '5–7. sınıf', local: 'Ortaokul / İmam hatip ortaokulu', ages: [10, 13], isced: 2,
      desc: 'Middle school with subject teachers and electives. Twice a term schools hold written exams; ' +
        'some are common nationwide exams (ortak yazılı) set by the ministry.',
      cost: { amount: 0, note: 'Free at public schools.' } },
    { id: 'tr-o8', line: 'ilk', name: '8. sınıf', ages: [13, 14], isced: 2,
      desc: 'Final middle-school year. Pupils who want a selective high school take the central LGS exam ' +
        '(Liselere Geçiş Sistemi merkezi sınavı) in June; it covers the grade-8 curriculum. Everyone else ' +
        'is placed by preference and address (adrese dayalı yerleştirme).',
      exam: 'Ortaokul diploma; LGS (optional)',
      events: ['LGS central exam: 13 June 2026', 'High-school preferences and placement: July'],
      cost: { amount: 0, note: 'Free at public schools; the LGS exam is free.' } },
    // Fen lisesi
    { id: 'tr-fen', line: 'fen', name: 'Fen lisesi', local: 'Fen lisesi / Sosyal bilimler lisesi (9–12)', ages: [14, 18], isced: 3,
      desc: 'Four years of advanced science and maths (or humanities in social-science schools). Admission ' +
        'needs a top LGS score; graduates mostly enter medicine and engineering.',
      exam: 'Lise diploması', events: ['YKS: 20–21 June 2026'],
      cost: { amount: 0, note: 'Free; many are boarding schools with free places for some students.' } },
    // Anadolu lisesi
    { id: 'tr-a9', line: 'anl', name: '9. sınıf', local: 'Anadolu lisesi 9 (or hazırlık)', ages: [14, 15], isced: 3,
      desc: 'First year of upper secondary, common subjects. Some schools add a preparatory language year.',
      cost: { amount: 0, note: 'Free at public schools. About 8% of upper-secondary pupils attend private schools (UIS 2023).', src: 3 } },
    { id: 'tr-a11', line: 'anl', name: '10–11. sınıf', ages: [15, 17], isced: 3,
      desc: 'Students choose elective courses that shape their YKS score type: numerical (sayısal), ' +
        'equal-weight (eşit ağırlık), verbal (sözel) or foreign language (dil).',
      cost: { amount: 0, note: 'Free at public schools.' } },
    { id: 'tr-a12', line: 'anl', name: '12. sınıf', ages: [17, 18], isced: 3,
      desc: 'Final year. There is no school-leaving exam: the diploma rests on school grades. Most students ' +
        'prepare for the YKS, often with private tutoring centres. TYT is taken by all candidates; AYT ' +
        '(field tests) and YDT (language) are needed for bachelor programmes.',
      exam: 'Lise diploması',
      events: ['YKS application: 6 Feb – 12 Mar 2026', 'YKS: TYT 20 June, AYT/YDT 21 June 2026', 'Results 21 July; placement 18 Aug 2026'],
      cost: { amount: 0, note: 'Free at public schools. ÖSYM charges a fee for each YKS session.' } },
    // University
    { id: 'tr-lis', line: 'uni', name: 'Lisans', local: 'Lisans (bachelor)', ages: [18, 22], isced: 6,
      desc: 'Four-year bachelor (medicine 6, dentistry and pharmacy 5, law 4). Many programmes taught in ' +
        'English begin with a one-year English preparatory year. Placement is purely by YKS score and ' +
        'ranked preferences.',
      exam: 'Lisans diploması',
      cost: { amount: 0, note: 'Free for daytime programmes at state universities since 2012. Foundation universities charge fees and enrol about 11% of tertiary students (UIS 2023).', src: 3 } },
    { id: 'tr-yl', line: 'uni', name: 'Yüksek lisans', local: 'Yüksek lisans (master)', ages: [22, 24], isced: 7,
      desc: 'Master with thesis (usually 2 years) or without thesis (1–1.5 years). Admission uses the ALES ' +
        'exam and a language score (YDS/YÖKDİL) for many programmes.',
      exam: 'Yüksek lisans diploması',
      cost: { amount: 0, note: 'Thesis-based master programmes at state universities are generally tuition-free; non-thesis programmes charge fees.' } },
    { id: 'tr-dr', line: 'uni', name: 'Doktora', ages: [24, 28], isced: 8,
      desc: 'Doctorate, normally 4 years after a master (5 after a bachelor), with a qualifying exam and a thesis.',
      exam: 'Doktora (PhD)',
      cost: { amount: 0, note: 'Generally tuition-free at state universities within the normal duration.' } },
    // İmam hatip
    { id: 'tr-aihl', line: 'aihl', name: 'Anadolu imam hatip', local: 'Anadolu imam hatip lisesi (9–12)', ages: [14, 18], isced: 3,
      desc: 'Four-year academic high school with religious vocational subjects. Some project schools ' +
        'select by LGS. 464,613 students in 2025/26.',
      exam: 'Lise diploması',
      share: { pct: 9, of: 'of upper-secondary students attend Anatolian imam hatip high schools (2025/26)', src: 0 },
      cost: { amount: 0, note: 'Free at public schools.' } },
    // MTAL
    { id: 'tr-m12', line: 'mtal', name: '9–12. sınıf', local: 'Mesleki ve teknik Anadolu lisesi (MTAL)', ages: [14, 18], isced: 3,
      desc: 'Common first year with general subjects and introductory vocational courses; field in grade 10, branch in grade 11; in grade 12 most students spend three days a week in a ' +
        'company (skills training in business), paid a share of the minimum wage. Graduates receive a ' +
        'diploma and a vocational certificate and may sit the YKS.',
      exam: 'Lise diploması + meslek sertifikası',
      share: { pct: 40, of: 'of formal upper-secondary students are in vocational and technical education (2025/26)', src: 0 },
      cost: { amount: 0, note: 'Free at public schools.' } },
    // MYO
    { id: 'tr-onl', line: 'myo', name: 'Önlisans', local: 'Önlisans (associate degree, MYO)', ages: [18, 20], isced: 5,
      desc: 'Two-year associate programmes such as computer programming, health technicians, justice, ' +
        'logistics. Placement by TYT score only.',
      exam: 'Önlisans diploması',
      events: ['DGS (vertical transfer exam): 19 July 2026'],
      cost: { amount: 0, note: 'Free for daytime programmes at state universities; evening programmes charge fees.' } },
    // MESEM
    { id: 'tr-mesem', line: 'mesem', name: 'Çırak / Kalfa', local: 'Çıraklık eğitimi (MESEM)', ages: [14, 18], isced: 3,
      desc: 'Apprenticeship: four days at a workplace and one day at the centre. Apprentices in grades 9–11 are ' +
        'paid at least 30% of the minimum wage and journeymen in grade 12 at least half, partly reimbursed by the state. Ends with the journeyman ' +
        'certificate (kalfalık) and, after further training, the master certificate (ustalık), which ' +
        'allows opening a business. Diploma courses can give a high-school diploma.',
      exam: 'Kalfalık / ustalık belgesi',
      cost: { amount: 0, note: 'Free, and apprentices receive a wage.' } },
    // Açık lise
    { id: 'tr-aol', line: 'aol', name: 'Açık lise', local: 'Açık öğretim lisesi (AÖL / MAÖL / AÖİHL)', ages: [14, 18], isced: 3,
      desc: 'Self-study with central term exams (December, March, July). Used by working youth, adults ' +
        'and students who left formal school; the diploma has the same value for the YKS.',
      exam: 'Lise diploması',
      events: ['Term exams: 20–21 Dec 2025, 14–15 Mar 2026, 18–19 Jul 2026'],
      cost: { amount: 0, note: 'No tuition; small registration fees may apply.' } },
  ],
  transfers: [
    { from: 'tr-onl', to: 'tr-lis', label: 'Önlisans → lisans (DGS)',
      desc: 'Associate-degree graduates can enter year 3 of a related bachelor through the vertical transfer exam (DGS, dikey geçiş sınavı).' },
    { from: 'tr-fen', to: 'tr-lis', label: 'Fen lisesi → university',
      desc: 'Science high-school graduates enter universities through the YKS like everyone else.' },
    { from: 'tr-aihl', to: 'tr-lis', label: 'İmam hatip → university',
      desc: 'Graduates can enter any bachelor programme through the YKS.' },
    { from: 'tr-m12', to: 'tr-lis', label: 'Meslek lisesi → lisans',
      desc: 'Vocational graduates can take TYT and AYT and enter bachelor programmes.' },
    { from: 'tr-aol', to: 'tr-onl', label: 'Açık lise → university',
      desc: 'The open high-school diploma gives the same access to YKS placement.' },
    { from: 'tr-mesem', to: 'tr-m12', label: 'MESEM → diploma',
      desc: 'Apprentices can take extra courses to earn a vocational high-school diploma.' },
  ],
  sources: [
    { title: 'MEB Strateji Geliştirme Başkanlığı — 2025-2026 Örgün Eğitim İstatistikleri (1 Oct 2026)', url: 'https://sgb.meb.gov.tr/www/2025-2026-orgun-egitim-istatistikleri-aciklandi/icerik/915/tr' },
    { title: 'MEB ÖDSGM — 2026 Yılı Sınav Uygulama Takvimi (LGS, open-school exams)', url: 'https://odsgm.meb.gov.tr/meb_iys_dosyalar/2026_04/69cf935dccf31165847573_2026_SINAV_UYGULAMA_TAKV%C4%B0M%C4%B0.pdf' },
    { title: 'ÖSYM — 2026 Sınav Takvimi (YKS, DGS)', url: 'https://www.osym.gov.tr/Sayfa/SinavTakvimi' },
    { title: 'UNESCO UIS — Data browser (private enrolment, compulsory education)', url: 'https://databrowser.uis.unesco.org/' },
    { title: 'Resmî Gazete — Law 6287 (11 April 2012), 4+4+4', url: 'https://www.resmigazete.gov.tr/eskiler/2012/04/20120411-8.htm' },
    { title: 'ÖSYM — 2026-YKS application and results announcements', url: 'https://www.osym.gov.tr/SinavGrubu/Index/2' },
    { title: 'Council of Higher Education (YÖK)', url: 'https://www.yok.gov.tr/' },
    { title: 'Memurlar.net — Okul Öncesi Eğitim ve İlköğretim Kurumları Yönetmeliği amendment, art. 11: 69 / 66–68 months (10 Jul 2019)', url: 'https://www.memurlar.net/haber/841153/' },
    { title: 'MEB (Espiye MTAL) — Mesleki eğitim merkezi (MESEM) nedir? (apprentice pay as share of minimum wage)', url: 'https://espiye75yilcpl.meb.k12.tr/meb_iys_dosyalar/28/05/354198/dosyalar/2025_01/10104535_mesemnedirweb.pdf' },
  ],
};
