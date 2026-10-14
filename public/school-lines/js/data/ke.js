// Kenya — school system as a metro map, during the switch from 8-4-4 to Competency-Based Education.
// The school year runs January to November in three terms; ages are typical ages at the start of the year.
export default {
  id: 'ke',
  iso3: 'KEN',
  region: 'Africa',
  currency: 'KES',
  name: 'Kenya',
  localName: 'Kenya',
  flag: '🇰🇪',
  summary:
    'Kenya is replacing the 8-4-4 system (8 years primary, 4 secondary, 4 university) with Competency-Based ' +
    'Education (CBE, first called CBC) in a 2-6-3-3-3 structure: two years of pre-primary, six of primary, ' +
    'three of junior school, three of senior school and at least three of university. The first CBE cohort ' +
    'sat the Kenya Junior School Education Assessment (KJSEA) in 2025 and entered senior school in January ' +
    '2026, placed in one of three pathways: STEM, Social Sciences, or Arts & Sports Science. The last 8-4-4 ' +
    'students sit the KCSE in 2026 and 2027. After school, students go to university or to TVET colleges.',
  ageNote:
    'Children usually enter PP1 at 4 and Grade 1 at 6. Late entry and repetition still occur, especially in ' +
    'arid counties, but CBE discourages repetition. Pre-primary is run by the 47 county governments; ' +
    'primary, junior and senior school by the national Ministry of Education.',
  compulsory: {
    from: 4,
    to: 18,
    label: 'Free & compulsory basic education',
    note:
      'The Constitution (Art. 53) and the Basic Education Act 2013 give every child the right to free and ' +
      'compulsory basic education, from pre-primary to the end of secondary. Since 2018 a 100% transition ' +
      'policy aims to move every pupil on to secondary school; in practice attendance is not fully enforced.',
  },
  costNote:
    'Figures are for 2026. Public primary, junior school and day senior school are tuition-free and funded ' +
    'by per-learner capitation grants (KES 22,244 a year for senior school), although late or partial ' +
    'payments push some schools to levy parents. Public boarding schools may charge up to KES 53,554 a year. ' +
    'University and TVET costs depend on a means-tested band under the 2023 funding model: the bachelor figure is a ' +
    'typical household share, TVET figures the full KES 67,189 fee before support, postgraduate fees one university\'s rates.',
  lines: [
    { id: 'early', name: 'Pre-primary', color: '#7C8A93', lane: 0,
      desc: 'Pre-primary (PP1 and PP2), offered in county-run ECDE centres attached to public primary ' +
        'schools and in many private schools. Before that, private day care and baby classes are common in ' +
        'towns.' },
    { id: 'pri', name: 'Primary', color: '#D2322D', lane: 0, from: 'ke-pp2',
      desc: 'Primary school, Grades 1–6: lower primary (1–3) and upper primary (4–6). Learning areas ' +
        'include literacy, Kiswahili, English, mathematics, environmental and creative activities. ' +
        'Assessment is largely school-based, recorded by KNEC.' },
    { id: 'js', name: 'Junior School', color: '#1E66C9', lane: 0, from: 'ke-g6',
      desc: 'Junior school, Grades 7–9, usually hosted in primary schools (“comprehensive schools”). ' +
        'The first CBE cohort entered Grade 7 in 2023. Learners take core subjects plus pre-technical, ' +
        'agriculture, creative arts and religious education.' },
    { id: 'stem', name: 'STEM pathway', color: '#5B2C83', lane: -1, from: 'ke-g9',
      desc: 'Senior school pathway in science, technology, engineering and mathematics, with tracks such ' +
        'as pure sciences, applied sciences and technical studies. Started January 2026 with Grade 10; the ' +
        'Ministry aims for about 60% of learners in STEM.' },
    { id: 'soc', name: 'Social Sciences', color: '#7A3E9D', lane: -2, from: 'ke-g9',
      desc: 'Senior school pathway in languages & literature and humanities & business studies.' },
    { id: 'arts', name: 'Arts & Sports', color: '#C2407A', lane: -3, from: 'ke-g9',
      desc: 'Senior school pathway in the arts (performing and visual arts) and sports science, often in ' +
        'specialised senior schools.' },
    { id: 'uni', name: 'University', color: '#3B1F5E', lane: 0, from: 'ke-stem12',
      desc: 'Public and private universities, with government-sponsored students placed by the Kenya ' +
        'Universities and Colleges Central Placement Service (KUCCPS). Since 2023 government-sponsored ' +
        'students are funded under a means-tested model: scholarship + HELB loan + household contribution. ' +
        'The High Court declared it unconstitutional in December 2024, but the Court of Appeal stayed that ' +
        'ruling in March 2025, so the model remains in use; no final appeal judgment had been reported by October 2026.' },
    { id: 'tvet', name: 'TVET', color: '#2C9546', lane: 1, from: 'ke-f4',
      desc: 'Technical and vocational education and training: national polytechnics, technical training ' +
        'institutes and vocational training centres, with competency-based courses at KNQF levels ' +
        '3–6 (artisan, craft certificate, diploma). Students are funded under the same means-tested model ' +
        'as universities.' },
    { id: 'legacy', name: '8-4-4 secondary', color: '#DD7710', lane: 2,
      desc: 'The phasing-out 8-4-4 secondary school (Forms 1–4). The last KCPE was sat in 2023 and the last ' +
        'Form 1 intake was in 2024, so only Forms 3 and 4 remain in 2026 and the final KCSE is in 2027.' },
  ],
  stations: [
    // Pre-primary
    { id: 'ke-pp1', line: 'early', name: 'PP1', local: 'Pre-Primary 1', ages: [4, 5], isced: 0,
      desc: 'First pre-primary year: play-based language, mathematical and environmental activities.',
      cost: { amount: 0, note: 'Free in public ECDE centres by policy; counties and schools often charge small levies. Private nurseries charge fees.' } },
    { id: 'ke-pp2', line: 'early', name: 'PP2', local: 'Pre-Primary 2', ages: [5, 6], isced: 0,
      desc: 'Second pre-primary year, preparing for Grade 1.',
      cost: { amount: 0, note: 'Free in public ECDE centres by policy; levies vary by county.' } },
    // Primary
    { id: 'ke-g13', line: 'pri', name: 'Grades 1–3', local: 'Lower primary', ages: [6, 9], isced: 1,
      desc: 'Lower primary. Teaching is in the language of the catchment area in the early grades, ' +
        'alongside English and Kiswahili. A Grade 3 school-based monitoring assessment is run by KNEC.',
      cost: { amount: 0, note: 'Tuition-free since Free Primary Education (2003), funded by capitation grants.' } },
    { id: 'ke-g45', line: 'pri', name: 'Grades 4–5', local: 'Upper primary', ages: [9, 11], isced: 1,
      desc: 'Upper primary: science & technology, social studies, agriculture and creative arts are added.',
      cost: { amount: 0, note: 'Tuition-free in public schools.' } },
    { id: 'ke-g6', line: 'pri', name: 'Grade 6', ages: [11, 12], isced: 1,
      desc: 'End of primary. The Kenya Primary School Education Assessment (KPSEA) in October/November ' +
        'combines school-based assessment with a national test. It is formative: it does not decide ' +
        'admission, and all learners move on to junior school.',
      exam: 'KPSEA', events: ['KPSEA (October–November)'],
      cost: { amount: 0, note: 'Tuition-free; KPSEA is free for public-school candidates.' } },
    // Junior school
    { id: 'ke-g7', line: 'js', name: 'Grade 7', ages: [12, 13], isced: 2,
      desc: 'Start of junior school, usually in the same institution as primary.',
      cost: { amount: 0, note: 'Tuition-free, funded by government capitation.' } },
    { id: 'ke-g8', line: 'js', name: 'Grade 8', ages: [13, 14], isced: 2,
      desc: 'Junior school; school-based assessments count towards the final junior-school result.',
      cost: { amount: 0, note: 'Tuition-free, funded by government capitation.' } },
    { id: 'ke-g9', line: 'js', name: 'Gr 9', ages: [14, 15], isced: 2,
      desc: 'End of junior school. The Kenya Junior School Education Assessment (KJSEA) combines ' +
        'school-based assessment with a national exam. Results (first released 11 December 2025 for 1.13 ' +
        'million candidates) and learner choices place pupils in a senior school and pathway; placements ' +
        'are announced in December and learners report in January.',
      exam: 'KJSEA',
      events: ['KJSEA (October–November)', 'Results and senior-school placement: December', 'Senior school starts in January (12 January 2026)'],
      cost: { amount: 0, note: 'Tuition-free; KJSEA is free for public-school candidates.' } },
    // STEM
    { id: 'ke-stem10', line: 'stem', name: 'Grades 10–11', ages: [15, 17], isced: 3,
      desc: 'First two senior-school years (first Grade 10 cohort in 2026). In 2025, 59% of KJSEA candidates qualified for ' +
        'STEM. Learners take core subjects (English, Kiswahili, community service learning, physical ' +
        'education) plus pathway subjects.',
      cost: { amount: 0, note: 'Free day schooling; public boarding fees capped at KES 53,554 a year (top cluster).', src: 5 } },
    { id: 'ke-stem12', line: 'stem', name: 'Grade 12', ages: [17, 18], isced: 3,
      desc: 'Final senior-school year. The first CBE senior-school national assessment (the successor to ' +
        'the KCSE) is due in 2028; its name and university-entry rules were still being finalised.',
      exam: 'Senior school certificate (first in 2028)',
      cost: { amount: 0, note: 'Free day schooling; boarding fees capped by the Ministry.', src: 5 } },
    // Social Sciences
    { id: 'ke-soc10', line: 'soc', name: 'Grades 10–11', ages: [15, 17], isced: 3,
      desc: 'Grades 10–11, Social Sciences pathway (about 47% of 2025 KJSEA candidates were eligible).',
      cost: { amount: 0, note: 'Free day schooling; boarding fees capped by the Ministry.', src: 5 } },
    { id: 'ke-soc12', line: 'soc', name: 'Grade 12', ages: [17, 18], isced: 3,
      desc: 'Final senior-school year, Social Sciences pathway; first national assessment in 2028.',
      exam: 'Senior school certificate (first in 2028)',
      cost: { amount: 0, note: 'Free day schooling; boarding fees capped by the Ministry.', src: 5 } },
    // Arts & Sports
    { id: 'ke-arts10', line: 'arts', name: 'Grades 10–11', ages: [15, 17], isced: 3,
      desc: 'Grades 10–11, Arts & Sports Science pathway (about 49% of 2025 KJSEA candidates were eligible).',
      cost: { amount: 0, note: 'Free day schooling; boarding fees capped by the Ministry.', src: 5 } },
    { id: 'ke-arts12', line: 'arts', name: 'Grade 12', ages: [17, 18], isced: 3,
      desc: 'Final senior-school year, Arts & Sports pathway; first national assessment in 2028.',
      exam: 'Senior school certificate (first in 2028)',
      cost: { amount: 0, note: 'Free day schooling; boarding fees capped by the Ministry.', src: 5 } },
    // University
    { id: 'ke-ba', line: 'uni', name: 'Bachelor', ages: [18, 22], isced: 6,
      desc: 'Bachelor\'s degrees usually take 4 years (medicine 6, engineering 5). Under 8-4-4 a KCSE mean ' +
        'grade of C+ is the minimum for degree entry; KUCCPS places government-sponsored students, and ' +
        'others can pay full fees as self-sponsored students. Programme costs range from about KES 144,000 ' +
        'to 600,000 a year; households pay 5–40% depending on their band, the rest is scholarship and ' +
        'HELB loan.',
      exam: 'Bachelor\'s degree',
      cost: { amount: 30000, note: 'About; household share (5–40% by means-tested band) of the programme cost. Self-sponsored students pay the full cost.', src: 8 } },
    { id: 'ke-ma', line: 'uni', name: 'Master\'s', ages: [22, 24], isced: 7,
      desc: 'Master\'s degrees take 1.5–2 years, often part-time; they are not covered by the government ' +
        'funding model.', exam: 'Master\'s degree',
      cost: { amount: 216400, note: 'Egerton University 2024/25 MSc (science) year 1, KES 427,300 for two years; one university\'s figure, set by each university.', src: 13 } },
    { id: 'ke-phd', line: 'uni', name: 'PhD', ages: [24, 27], isced: 8,
      desc: 'Doctoral research, at least 3 years.', exam: 'Doctorate (PhD)',
      cost: { amount: 255900, note: 'Egerton University 2024/25 PhD (arts/social sciences) year 1; business PhDs cost about KES 350,000. One university\'s figure.', src: 13 } },
    // TVET
    { id: 'ke-cert', line: 'tvet', name: 'Certificate', local: 'Artisan / craft certificate', ages: [18, 20], isced: 4,
      desc: 'Artisan (KNQF 4, about 1 year) and craft certificate (KNQF 5, about 2 years) courses. Craft ' +
        'certificates usually need a KCSE mean grade of D; artisan courses have lower entry requirements. ' +
        'Assessed by KNEC or the TVET Curriculum Development, Assessment and Certification Council (CDACC).',
      exam: 'Artisan / craft certificate',
      cost: { amount: 67189, note: 'Consolidated annual TVET fee from May 2026, before scholarship, capitation and HELB loan; households pay a means-tested share.', src: 14 } },
    { id: 'ke-dip', line: 'tvet', name: 'Diploma', local: 'National diploma (KNQF 6)', ages: [20, 22], isced: 5,
      desc: 'Three-year diploma (KNQF 6); direct entry needs a KCSE mean grade of C− or a craft certificate. ' +
        'A higher diploma (1 year) can follow.',
      exam: 'Diploma',
      cost: { amount: 67189, note: 'Consolidated annual TVET fee from May 2026, incl. assessment; scholarship and HELB loan cover most of it for needy students.', src: 14 } },
    // 8-4-4 legacy
    { id: 'ke-f3', line: 'legacy', name: 'Form 3', ages: [16, 17], isced: 3,
      desc: 'Penultimate 8-4-4 year; in 2026 the last-but-one 8-4-4 class is in Form 4 and the final class in Form 3.',
      cost: { amount: 0, note: 'Free Day Secondary Education since 2008; boarding fees capped.', src: 4 } },
    { id: 'ke-f4', line: 'legacy', name: 'Form 4', ages: [17, 18], isced: 3,
      desc: 'KCSE exams in October–November, results in January. A mean grade of C+ gives eligibility for ' +
        'a degree course, C− for a diploma and D for a certificate. The final KCSE under 8-4-4 is in 2027.',
      exam: 'Kenya Certificate of Secondary Education (KCSE)',
      events: ['KCSE October–November', 'Results in January', 'KUCCPS placement for university and TVET'],
      cost: { amount: 0, note: 'Free Day Secondary Education since 2008; boarding fees capped.', src: 4 } },
  ],
  transfers: [
    { from: 'ke-soc12', to: 'ke-ba', label: 'Social Sciences → university', desc: 'All three pathways lead to university programmes that match their subject clusters.' },
    { from: 'ke-arts12', to: 'ke-ba', label: 'Arts & Sports → university', desc: 'Arts and sports graduates can enter related degree programmes.' },
    { from: 'ke-f4', to: 'ke-ba', label: 'KCSE C+ → university', desc: 'A KCSE mean grade of C+ or above gives eligibility for degree programmes through KUCCPS.' },
    { from: 'ke-stem12', to: 'ke-cert', label: 'Senior school → TVET', desc: 'Senior-school leavers from any pathway can join TVET courses at the matching level.' },
    { from: 'ke-dip', to: 'ke-ba', label: 'Diploma → degree', desc: 'Diploma holders can enter related degrees, often with credit transfer, including those who missed C+ in the KCSE.' },
  ],
  sources: [
    { title: 'Ministry of Education, Kenya', url: 'https://www.education.go.ke/' },
    { title: 'Kenya National Examinations Council (KNEC)', url: 'https://www.knec.ac.ke/' },
    { title: 'Citizen Digital — 2025 KJSEA results released', url: 'https://citizen.digital/article/2025-kjsea-results-released-how-learners-performed-n374326' },
    { title: 'Nation — Grade 10 placements: KJSEA candidates know senior schools', url: 'https://beta.nation.co.ke/kenya/news/education/grade-10-placements-kjsea-candidates-know-senior-schools-5300692' },
    { title: 'Capital FM — MoE gazettes school fee caps', url: 'https://capitalfm.africa/moe-gazettes-school-fees-caps-in-efforts-to-protect-households/' },
    { title: 'HapaKenya — Senior school fees standardised at KES 53,554 in 2026', url: 'https://hapakenya.com/2025/11/05/senior-school-fees-standardized-at-ksh-53554-in-2026/' },
    { title: 'Dawan Africa — No extra charges in 2026, Ministry reassures parents', url: 'https://www.dawan.africa/news/no-extra-charges-in-2026-education-ministry-reassures-parents-on-school-fees' },
    { title: 'Higher Education Financing (HEF) portal — Universities Fund / HELB', url: 'https://www.hef.co.ke/' },
    { title: 'Kenyans.co.ke — How much students pay under the new university funding model', url: 'https://www.kenyans.co.ke/news/103664-how-much-students-will-pay-new-university-funding-model-explained' },
    { title: 'Business Daily — Emerging key issues in new university funding model', url: 'https://www.businessdailyafrica.com/bd/corporate/education/emerging-key-issues-in-new-university-funding-model-4783872' },
    { title: 'Eastleigh Voice — Court of Appeal stays ruling on university funding model', url: 'https://eastleighvoice.co.ke/university%20funding%20model/130782/court-of-appeal-overturns-ruling-suspending-ruto-s-university-funding-model' },
    { title: 'KICD / UNESCO — Basic Education Curriculum Framework', url: 'https://unesdoc.unesco.org/ark:/48223/pf0000250431' },
    { title: 'KUCCPS — Kenya Universities and Colleges Central Placement Service', url: 'https://www.kuccps.ac.ke/' },
    { title: 'Egerton University — Approved fees for postgraduate diploma, master\'s and PhD programmes (2024/25)', url: 'https://www.egerton.ac.ke/images/egerton_university/downloads/students/Approved_Fees_Structures_Postgraduate_Programmes_2024.pdf' },
    { title: 'People Daily — CS Ogamba announces KES 67,189 annual TVET fee (March 2026)', url: 'https://peopledaily.digital/news/cs-ogamba-announces-ksh67k-annual-tvet-fee' },
  ],
};
