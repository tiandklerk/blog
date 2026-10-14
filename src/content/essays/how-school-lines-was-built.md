---
title: "School Lines: Drawing 38 School Systems as Metro Maps"
description: "How I turned a Dutch school map into a tube-style atlas of 38 education systems, with fares, attainment and a lot of fact-checking, built with Claude Code."
date: 2026-10-14
voice: tian
minutes: 13
ai: 100
draft: true
---

I came across a page by [u/trunobozzini2](https://www.reddit.com/user/trunobozzini2) that drew the Dutch school system as a metro line. *Basisschool* was the trunk. At age 12 it split into *vmbo*, *havo* and *vwo*, and dotted transfers marked the costly detours between them. It was a lovely idea, but it covered one country and had no real data. So I asked: what would it look like for many countries, and could you put them side by side by age?

Over a weekend that became **School Lines**: 38 education systems drawn as tube maps on a shared age axis, with fares (what each stage costs), how far people actually get, and a lot of fact-checking along the way. This post covers how it was built and, more importantly, how the research was done and where it is weak.

You can try it here: [**School Lines**](/school-lines/). The full source is on [GitHub](https://github.com/tiandklerk/school-systems).

## The core idea: age is the x-axis

The original was a free-form diagram. The one change that made comparison possible was **putting age on the horizontal axis**. Then:

- **Stations** are stages of schooling (Groep 8, Year 11, Klasse 10, Seconde…), placed at the age pupils typically start them.
- **Lines** are routes (vwo, Gymnasium, T Levels, Ausbildung…), each on its own lane.
- **Branches** leave a station through a rounded vertical "trunk", like a real schematic map.
- **Transfers** are dotted links: havo → vwo 5, MSA → gymnasiale Oberstufe, BTS → licence pro.
- **Bands** shade compulsory schooling, and a hatched band marks the "must still study or train" years (the Dutch *kwalificatieplicht*, England's participation age, France's *obligation de formation*).

Because every country shares the same age scale, you can stack two or three maps and drag one age cursor through them. At 12 a Dutch child has just been sorted into a track, a Finnish child is in grade 6 of a single comprehensive school, and a German child has been in a Gymnasium or Realschule for two years already. That contrast is the point of the whole thing.

## Building it: deliberately boring tech

It's a static site with no framework and no build step: `index.html`, one stylesheet and a few ES modules.

- **`map.js`** renders each country as an SVG string. Geometry is computed in *logical* coordinates (along the age axis and across lanes) and mapped to x/y at the end. That made it cheap to add a **vertical orientation** later for phones.
- **`app.js`** handles routing (`#/nl`, `#/compare/nl,jp`), the station panel, the age cursor, the fare modes and the compare view.
- **`site/js/data/<country>.js`** holds one data file per country: lines, stations, transfers, costs and sources.

The first version shipped in a Docker container behind nginx. I then realised it's just HTML and will live on this blog, so the container went. Sometimes the best infrastructure decision is deleting it.

Later I restyled it to match this site. It uses the same palette, Inter and JetBrains Mono, and the same masthead, and it even shares the `cw-theme` preference, so dark mode follows you from the blog.

## The research process

This is where most of the effort went, and where I want to be transparent.

### 1. A schema before any research

Before researching countries, I wrote [`DATA.md`](https://github.com/tiandklerk/school-systems/blob/main/DATA.md), a contract for what every country file must contain:

- **Structure:** every stage from childcare to doctorate, with typical ages and an **ISCED 2011** level (the UNESCO classification that makes "upper secondary" mean the same thing in Japan and Brazil).
- **Exams and dates:** key exams and dates, compulsory-schooling rules and age cut-offs.
- **Costs:** the *typical out-of-pocket fee per year at a public provider*. Tuition and compulsory fees count. Living costs, voluntary contributions and private tutoring don't, but they're mentioned in notes.
- **A source for every number.** Each non-zero cost points at the specific page that supports it.

### 2. Fanning out to parallel researchers

Writing 38 countries by hand would have taken weeks. Instead, Claude Code launched **nine parallel research agents**: eight took four countries each, and one went back over the original six to add verified costs and shares. Each was told to:

- prefer **official sources**: ministries, statistics offices, exam boards, **Eurydice** (the EU's description of national education systems), UNESCO-UIS and the OECD;
- date every reform ("from 2025/26…") and say when something varies by region;
- never invent a number, and write "about" when a figure is an estimate;
- run the validator and render its map to an image to check the layout by eye.

The first pass produced **782 stations, 332 lines, 215 transfers and 416 cited sources** (461 after the second pass described below). The most-cited domains are Eurydice, GOV.UK, Brazil's gov.br, Argentina's argentina.gob.ar, the Dutch Rijksoverheid, Austria's education ministry, Singapore's MOE, Mexico's gob.mx and Japan's MEXT.

### 3. Comparable statistics from one source

Country-by-country research is great for structure but terrible for comparison: every statistics office defines things differently. So the cross-country numbers come from a single place, the **World Bank API**, through a script ([`scripts/fetch-stats.mjs`](https://github.com/tiandklerk/school-systems/blob/main/scripts/fetch-stats.mjs)):

- **How far people get:** UNESCO-UIS cumulative educational attainment ("% of the population aged 25+ with at least primary / lower secondary / … / doctorate"). For each country it picks the survey year with the most complete breakdown, so the levels are never mixed across years.
- **PPP conversion factors** (World Bank ICP) and **GDP per capita**, to compare fares fairly.
- **Official exchange rates**, as a fallback when live rates aren't available.

This powers the **median terminus**: a red dot on each line at the level where the median adult's education ends. In the Netherlands and Germany it sits at upper secondary. In South Africa it sits lower, and the "how far adults get" bars make that difference stark.

### 4. Fares that can actually be compared

Showing "€2,694" next to "¥535,800" tells you nothing, so the fare modes can convert to:

- **any currency** at live rates (open.er-api.com);
- **PPP international dollars**, which adjust for what money buys locally;
- **% of GDP per capita**, a rough affordability measure.

The last two are the honest ones. A free university looks the same everywhere, but a fee worth 5% of average income and one worth 170% are very different barriers.

### 5. Spot-checking the agents

Agents are fast but not infallible, so I checked a sample of claims myself against primary sources:

- **Dutch tuition fee:** the 2026–27 *wettelijk collegegeld* of **€2,694** matches [Rijksoverheid's own table](https://www.rijksoverheid.nl/vraag-en-antwoord/hoger-onderwijs/hoogte-van-het-collegegeld-hogeschool-universiteit), and the first-year half-price discount really was abolished from 2024–25 ([Studiekeuze123](https://www.studiekeuze123.nl/collegegeld/halvering-collegegeld)).
- **Dutch school advice:** the doorstroomtoets timeline (provisional advice 10–31 January, test by mid-February, final advice by 24 March) comes from [DUO](https://www.duo.nl/zakelijk/primair-onderwijs/leerlingenadministratie/schooladvies-en-doorstroomtoets/index.jsp) and the [VO-raad](https://www.vo-raad.nl/nieuws/data-rondom-doorstroomtoets-en-aanmelding-in-het-vo-2025-2026).
- **Egypt's new Baccalaureate:** one agent described it from memory. I corrected it against [Ahram Online](https://english.ahram.org.eg/NewsContent/1/2/549292/Egypt/Society/Thanaweya-Amma-to-remain-in-place%2C-baccalaureate-s.aspx) and the [Egyptian Ministry of Education](https://moe.gov.eg/en/what-s-on/news/house-of-rep-2). It was passed in July 2025 as an *optional* track, and Thanaweya Amma remains.
- **France:** the plan to require the brevet for entry to lycée was [dropped in 2025](https://www.24matins.fr/lentree-en-seconde-sans-brevet-des-colleges-finalement-abandonnee-1385182), so the map doesn't show it.
- **Germany's return to G9:** cross-checked with [Bavaria's ministry](https://www.km.bayern.de/meldung/erster-abschlussjahrgang-des-neuen-neunjaehrigen-gymnasiums-erhaelt-abiturzeugnisse) (first G9 Abitur in 2026) and [NRW](https://www.land.nrw/pressemitteilung/nach-rueckkehr-von-g8-zu-g9-nordrhein-westfalen-bestehen-rund-27000-schuelerinnen).
- **Broken links:** a dead French source for the 16–18 training duty was replaced with the [Éducation nationale page](https://www.education.gouv.fr/l-obligation-de-formation-des-16-18-ans-306954).

### 6. Being honest about what couldn't be verified

The most important lesson: **research agents run out of budget.** The shared web-search quota ran dry part-way through several batches. After that the agents fell back on fetching official pages directly, which works until a site blocks scripts or returns 403s (several Irish and Egyptian government sites did).

One batch's report was frank that some postgraduate fees were placeholders, with a source attached that didn't actually support the number. That's worse than having no number at all. So the data model got a rule:

- A fee that can't be tied to a source is marked **`estimate: true`**. The app shows it with a "~" and an "unverified estimate" note, and its misleading source link is removed.
- Where nothing reliable exists, the station has **no cost** and shows "?".
- The validator **refuses** a non-zero fee that has neither a source nor the estimate flag.

At the end of the first pass, **29 fees** were estimates, **19 stations** had no fee at all (mostly Chinese and Singaporean postgraduate stages), and **8 citations** were Wikipedia, used where official pages wouldn't load. Those numbers were the to-do list for the second pass.

### 7. A second pass to finish the job

A first pass that leaves "?" all over the map isn't finished, so I went back. A small script, [`scripts/audit.mjs`](https://github.com/tiandklerk/school-systems/blob/main/scripts/audit.mjs), lists every estimate, every station without a fee and every Wikipedia citation. A link checker ran over all 413 unique URLs and found **9 dead links (404s)**. The agents' own reports listed roughly 60 claims they had written "from memory".

Four agents, split by region, each got a precise checklist instead of a whole country to research. Partway through, the organisation's monthly spend limit cut all four off, twice. Their edits were saved on disk, so once the limit reset they picked up where they had stopped.

| | After pass 1 | After pass 2 |
|---|---|---|
| Stations with a sourced fee | 734 | **768** of 782 |
| Fees marked as estimates | 29 | **14** |
| Stations with no fee | 19 | **0** |
| Wikipedia citations | 8 | **0** |
| Dead links (404) | 9 | **0** |
| Cited sources | 416 | **461** |

Some highlights of what changed:

- **Gaps filled from official fee tables:**
  - China: Nanjing's public kindergarten and high-school fee table, Sun Yat-sen University's graduate fees, and Shanghai's vocational and top-up bachelor charters.
  - Singapore: ECDA's childcare cap and the NUS fee schedule.
  - Indonesia: UGM's 2026/27 rector's decree.
  - South Africa: UCT's and UJ's 2026 fee booklets.
  - Kenya: Egerton University's postgraduate fees.
  - Portugal: Aveiro's 2026/27 fees circular.
  - Belgium: UGent's doctoral fee.
  - Argentina: Córdoba's 2026 postgraduate fees.
- **Facts that were out of date or wrong:**
  - Ireland's Budget 2027 (6 October 2026) cut the student contribution to €2,350.
  - Japan's kōsen tuition became free for years 1–3 from April 2026.
  - New Zealand's under-3 childcare figure was far too low; it is about NZ$21,000 a year, not NZ$7,000.
  - Saudi Arabia's Masarat tracks started in 2022–23, after a common first year in 2021–22.
  - Finland's numerical grades start in grade 4 everywhere, following the 2020 assessment reform.
  - Polish second-stage trade schools are ISCED 3, not 4.
- **Softened claims:** "about 18 million out-of-school children" in Nigeria became UNICEF's actual breakdown (10.2 million primary-age plus 8.1 million junior-secondary). Uncited "most cantons" became "15 of 26 cantons" for Switzerland's HarmoS agreement, although that count is still from memory.

What's still open, and labelled as such in the app:

- **Estimates:** 14 fees remain estimates. Nine are Egyptian, because I found no published public-university, postgraduate, technical or Al-Azhar fee schedule, and Egyptian news sites blocked fetching. The other five are a Nigerian college-of-education fee, a Mexican engineering degree, Irish childcare, a Swiss higher-vocational course, and a German Meister course after subsidy.
- **Blocked or slow sites:** 35 links return 403 to scripts and 23 time out from the build server. Most are Australian, Russian, Japanese and Irish government sites that block bots or non-local traffic; they work in a normal browser.
- **Single examples:** many fees are one city's or one university's figure, where no national figure exists, for example Nanjing for Chinese schools, UCT for South African postgraduate study, and Delhi University for Indian degrees. Each note says so.
- **Unchanged claims:** a handful of claims the agents could not re-verify were kept as they were, such as Russia's post-Bologna law (reports conflict on whether it passed), Brazil's tecnólogo ISCED level (INEP's site was down), and several Irish details where every official site returned 403.

## Guard rails: the validator

[`scripts/validate.mjs`](https://github.com/tiandklerk/school-systems/blob/main/scripts/validate.mjs) catches both data mistakes and drawing mistakes:

- broken references between stations, lines and transfers;
- stations that overlap in age, or two lines fighting for the same lane;
- a branch whose trunk would **cut across another line**, which was the most common layout bug;
- costs without sources, and labels too long for their station.

Combined with [`scripts/preview.mjs`](https://github.com/tiandklerk/school-systems/blob/main/scripts/preview.mjs), which renders a single map to PNG, every agent could check its own work visually before handing it back.

## Making it work on a phone

A horizontal map 2,400 pixels wide is miserable on a phone. The fix was to let the map **rotate**. In vertical mode age runs down the screen, routes become columns, and in compare mode the countries sit literally side by side. It's the default on narrow screens, the country picker collapses, and you scroll down rather than sideways.

## What I learned

1. **Pick the axis that makes comparison free.** Age on one axis did more for this project than any feature.
2. **Write the data contract first.** Parallel research only works when everyone fills in the same shape.
3. **Fan out, then verify.** Agents produced the bulk of the research quickly. Spot-checks caught a confidently wrong Egyptian reform and a pile of placeholder fees.
4. **Make uncertainty visible.** A "~" and a "?" are more trustworthy than a clean-looking table of numbers nobody checked.
5. **Budget for a second pass, and make it measurable.** An audit script turned "finish the research" into a to-do list with numbers that go down. Saving work to disk as it went meant a spend limit interrupting the agents twice cost time, not progress.

If you spot something wrong for a country you know, each data file lists its sources, and corrections are very welcome.

---

## References

**Cross-country data**
- World Bank, *World Development Indicators* API: [educational attainment (UNESCO-UIS)](https://data.worldbank.org/indicator/SE.TER.CUAT.BA.ZS), [PPP conversion factor](https://data.worldbank.org/indicator/PA.NUS.PPP), [GDP per capita (LCU)](https://data.worldbank.org/indicator/NY.GDP.PCAP.CN), [official exchange rate](https://data.worldbank.org/indicator/PA.NUS.FCRF)
- UNESCO, [International Standard Classification of Education (ISCED 2011)](https://uis.unesco.org/en/topic/international-standard-classification-education-isced)
- European Commission, [Eurydice: national education systems](https://eurydice.eacea.ec.europa.eu/national-education-systems)
- [ExchangeRate-API open access endpoint](https://www.exchangerate-api.com/docs/free) (live currency rates)

**Checked directly during the build (both passes)**
- Rijksoverheid: [Hoogte van het collegegeld](https://www.rijksoverheid.nl/vraag-en-antwoord/hoger-onderwijs/hoogte-van-het-collegegeld-hogeschool-universiteit)
- Studiekeuze123: [Halvering collegegeld](https://www.studiekeuze123.nl/collegegeld/halvering-collegegeld)
- DUO: [Schooladvies en doorstroomtoets](https://www.duo.nl/zakelijk/primair-onderwijs/leerlingenadministratie/schooladvies-en-doorstroomtoets/index.jsp)
- VO-raad: [Data rondom doorstroomtoets en aanmelding 2025–2026](https://www.vo-raad.nl/nieuws/data-rondom-doorstroomtoets-en-aanmelding-in-het-vo-2025-2026)
- Ahram Online: [Thanaweya Amma to remain, baccalaureate optional](https://english.ahram.org.eg/NewsContent/1/2/549292/Egypt/Society/Thanaweya-Amma-to-remain-in-place%2C-baccalaureate-s.aspx)
- Egyptian Ministry of Education: [House of Representatives approves the Egyptian Baccalaureate](https://moe.gov.eg/en/what-s-on/news/house-of-rep-2)
- 24matins: [L'entrée en seconde sans brevet abandonnée](https://www.24matins.fr/lentree-en-seconde-sans-brevet-des-colleges-finalement-abandonnee-1385182)
- Éducation nationale: [L'obligation de formation des 16–18 ans](https://www.education.gouv.fr/l-obligation-de-formation-des-16-18-ans-306954)
- Bavarian State Ministry: [first G9 Abitur cohort](https://www.km.bayern.de/meldung/erster-abschlussjahrgang-des-neuen-neunjaehrigen-gymnasiums-erhaelt-abiturzeugnisse)
- Land NRW: [Rückkehr von G8 zu G9](https://www.land.nrw/pressemitteilung/nach-rueckkehr-von-g8-zu-g9-nordrhein-westfalen-bestehen-rund-27000-schuelerinnen)
- Irish Times: [Student contribution fees permanently cut by €150 in Budget 2027](https://www.irishtimes.com/your-money/2026/10/06/students-set-for-lower-fees-as-budget-brings-increase-in-education-spending/)
- National Institute of Technology, Asahikawa College: [2026 tuition support notice](https://www.asahikawa-nct.ac.jp/guide/pdf/R8_tsuikamusho.pdf) (kōsen years 1–3)
- Stuttgarter Zeitung: [G9 und Schulreform in Baden-Württemberg](https://www.stuttgarter-zeitung.de/lokales/baden-wuerttemberg/g9-und-schulreform-in-baden-wuerttemberg-was-kommt-jetzt-auf-eltern-und-schulkinder-zu-79020740.html)

**Per-country sources.** All 461 sources are listed in the app (each country's "Sources" section) and in the data files under [`site/js/data/`](https://github.com/tiandklerk/school-systems/tree/main/site/js/data).

**Inspiration.** A Dutch "School Line" map that drew the Dutch system as a metro line.
