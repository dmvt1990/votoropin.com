// src/i18n/en.ts
// English UI dictionary. Every hardcoded string in components and pages
// lives here. Shape is the canonical Dict type — ru.ts must satisfy it.

export const en = {

  // ── Shared ──────────────────────────────────────────────────────────────
  dateLocale: "en-GB",

  // ── Navigation ──────────────────────────────────────────────────────────
  nav: {
    brand: "Dmitrii Votoropin",
    brandSuffix: "CFA",
    mobileToggle: "Menu ↓",
    links: {
      home:      "Home" as string,
      cv:        "CV" as string,
      indices:   "Indices" as string,
      scanner:   "" as string,
      notes:     "Notes" as string,
      contact:   "Contact" as string,
      dashboard: "" as string,
    },
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    disclaimer: "RITIX · RHIX · RDIX are personal research prototypes — not investment advice",
  },

  // ── Base layout / meta ───────────────────────────────────────────────────
  meta: {
    locale:             "en_US",
    siteUrl:            "https://votoropin.com",
    defaultDescription: "Dmitrii Votoropin, CFA — 14+ years in private banking, wealth management, and investment advisory across Citi and Gazprombank.",
    titleSuffix:        "— Dmitrii Votoropin, CFA",
  },

  // ── Schema.org Person ────────────────────────────────────────────────────
  schema: {
    jobTitle:   "Investment Counsellor",
    knowsAbout: [
      "Private banking",
      "Wealth management",
      "Investment advisory",
      "Portfolio construction",
      "Fixed income",
      "Structured products",
    ],
  },

  // ── Constituents table ───────────────────────────────────────────────────
  constituents: {
    headingPrefix: "Constituents — as of",
    th: {
      ticker:      "Ticker",
      company:     "Company",
      subIndustry: "Sub-industry",
      sharesM:     "Shares (M)",
      freeFloat:   "Free Float",
      weight:      "Weight",
      viewFundamentals: "Financial summary",
  },
  },

  // ── Constituent fundamentals (index detail sub-pages) ────────────────────
  // Row keys come from the ritix-fa export; labels live here so one generated
  // JSON file serves both language builds.
  fundamentals: {
    heading:    "Financial summary",
    unitHeader: "mn RUB",
    unitNote:   "Millions of roubles \u00b7 LTM = FY2025 + H1\u00a02026 \u2212 H1\u00a02025",
    ltm:        "LTM",
    unitNoteLtm: "Millions of roubles \u00b7 LTM = last full year + latest half \u2212 same half a year earlier",
    unitNotePlain: "Millions of roubles",
    periodBasis: "Financial year ends 31 March",
    gapsLabel: "What is missing",
    gapNoPnl: "No income statement. Revenue, EBITDA, net income and every multiple that needs them are blank.",
    gapNoBs: "No balance sheet. Net debt, enterprise value, the multiples that need them and the return ratios are blank.",
    gapNoCf: "No cash flow statement. Free cash flow, dividends paid and their yields are blank.",
    growth:     "Growth %, YoY",
    changePp:   "Change, p.p.",
    rows: {
      enterprise_value: "Enterprise value",
      mcap:             "Market capitalisation",
      net_debt:         "+ Net debt",
      ev:               "= Enterprise value",
      pnl:              "Income statement",
      revenue:          "Revenue",
      ebitda:           "EBITDA",
      ebitda_margin:    "EBITDA margin, %",
      net_income:       "Net income",
      cash_flow:        "Cash flow",
      fcf:              "Free cash flow",
      dividends_paid:   "Dividends paid",
      mult:             "Multiples",
      ev_ebitda:        "EV/EBITDA",
      pe:               "P/E",
      nd_ebitda:        "Net debt/EBITDA",
      pb:               "P/B",
      yield:            "Yields and returns",
      div_yield:        "Dividend yield (paid), %",
      fcf_yield:        "Free cash flow yield, %",
      roe:              "Return on equity, %",
      roa:              "Return on assets, %",
      memo:             "Memo",
      ebitda_adj:       "Adjusted EBITDA (reported)",
      net_income_adj:   "Adjusted net income (reported)",
      total_assets:     "Total assets",
      total_equity:     "Total equity",
      cash:             "Cash and equivalents",
      debt:             "Total debt",
      lease:            "Lease liabilities",
      shares:           "Shares, weighted average basic, mn",
    },
    notes: {
      ebitda:         "operating profit + D&A",
      net_income:     "attributable to shareholders",
      fcf:            "operating cash flow \u2212 capex",
      roe:            "period-end equity",
      roa:            "period-end assets",
      ebitda_adj:     "company definition, non-IFRS",
      net_income_adj: "non-IFRS",
      lease:          "excluded from net debt",
    },
    page: {
      breadcrumbIndices: "Research prototypes",
      eyebrow:           "Constituent \u00b7 Financial analysis",
      subtitle:          "Constituent of",
      ribbon: {
        lastPrice:  "Last Price",
        indexWeight:"Index Weight",
        freeFloat:  "Free Float",
        lineItems:  "Line Items",
      },
      gapsLabel:        "What is missing",
      definitionsLabel: "Definitions",
      definitionsH2:    "What these figures commit to.",
      def: {
        ebitda:
          "EBITDA here is operating profit plus depreciation and amortisation, computed the same way in every column. The company's own adjusted EBITDA appears in the memo block rather than in the multiples: it is a non-IFRS measure whose add-backs the issuer defines, and mixing it into a series that also contains derived years would make the row incomparable with itself.",
        netDebt:
          "Net debt is total borrowings less cash and equivalents. Lease liabilities are excluded and shown separately, so this figure will not agree with the issuer's own adjusted net debt, which includes them.",
        ltm:
          "The last column is trailing twelve months, not a forecast: the full year plus the latest half less the same half a year earlier, with balance-sheet items taken at the interim date. There is no consensus data behind this page, so there are no forecast years.",
      },
      sourcesLabel: "Sources",
      sourcesH2:    "Every figure traces to a filing.",
      sourcesIntro:
        "Line items are read directly out of documents the issuer published, collected automatically from its investor-relations pages. Audited IFRS statements take precedence; quarterly press releases fill the gaps where a statement page did not survive conversion.",
      sourcesTh: { document: "Document", values: "Values" },
      marketLabel: "Market data",
      marketIntro:
        "Price and share count from MOEX. Market capitalisation uses the year-end close and the share count reported for that year; the trailing-twelve-month column uses the latest quote and the registered issue size.",
      generatedPrefix: "Generated",
      disclaimerLabel: "Disclaimer",
      disclaimer:
        "Figures on this page are extracted automatically from public filings and are not audited, verified, or endorsed by the issuer. They are published for research and educational purposes only. Nothing here constitutes investment advice, a solicitation, or a recommendation to buy or sell any security.",
    },
  },

  // ── Constituent snapshot (one period, all ten, on the index page) ────────
  // Row labels are reused from `fundamentals.rows` above — same keys, same
  // generator — so only the framing lives here.
  snapshot: {
    label:      "Constituent snapshot",
    heading:    "Every constituent, one period.",
    unitHeader: "mn RUB",
    periodH1:   "H1 2026",
    trailingTag: "LTM",
    intro:
      "The per-constituent pages give one company across five years. This gives one period across all ten, which is the comparison an index actually needs. Figures are generated from the same filings by the same pipeline.",
    basisHeading: "What each row is measured over",
    basisFlow:
      "Revenue, EBITDA, net income, free cash flow and dividends are the six months to 30 June 2026. The balance sheet is at 30 June 2026.",
    basisTrailing:
      "Multiples, yields and returns — marked LTM — trail the twelve months to 30 June 2026. A price-to-earnings ratio on half a year of earnings is roughly double the real one, and for a company whose year is back-loaded it is not merely scaled but meaningless, so those rows are not shown on a half-year basis.",
    basisPrice:
      "Market capitalisation is the 30 June 2026 MOEX close times shares outstanding, so the market side of every ratio is struck on the same date as the balance sheet it is compared with.",
    basisDefs:
      "EBITDA is operating profit plus depreciation and amortisation; free cash flow is operating cash flow less capital expenditure; net income is the share attributable to shareholders. Return on equity and on assets are measured against period-end balances.",
    readLabel: "Three figures not to read at face value",
    read: {
      ozon:
        "Ozon's free cash flow is not cash earned. Its operating cash flow includes the growth in fintech customer balances — 262 bn in this half alone — so the figure measures cash passing through the group. Net of that, free cash flow for the half is about −6.4 bn rather than +255.5 bn, and the 69% yield is the tell.",
      head:
        "HeadHunter's 159% return on equity and 12.5× price-to-book are arithmetic, not error: the 40.0 bn dividend paid in 2024 left group equity at a fraction of the profit earned against it. Net income is the share attributable to owners of the Company; equity is the group total including non-controlling interests.",
      cnru:
        "CIAN's 27.7% dividend yield is a special dividend, not a run rate.",
    },
    missingLabel: "Two constituents do not report a comparable first half",
    missing: {
      SOFL: "Softline publishes no interim IFRS statements. Its own fact sheet does report a first half, and adjusted EBITDA of 4,449 mn is the one figure in it that maps to a row here — with no depreciation line to go with it, the EBITDA row carries that same adjusted figure, which is why the two are identical. Turnover of 53,111 mn is not IFRS revenue: agency contracts are netted differently, and for 2025 the two are 132,127 against 95,472. There is no interim balance sheet or cash flow at all, so the rest of the column is empty.",
      DIAS: "Diasoft's financial year ends 31 March, so its interim covers the six months to 30 September rather than to 30 June — its half never lines up with the others'. The most recent one ended 30 September 2025; the next is not yet published.",
    },
    missingNote:
      "Both keep a market capitalisation and a share count, because those are prices rather than filings. Neither figure is hand-entered anywhere in this table: every number is read out of a document by the pipeline, and a figure printed as a label on a slide chart cannot be.",
    sourceNote:
      "Generated {generated} from the issuers' own filings. Per-constituent detail, including what each table cannot say, is on the pages linked from the table above.",
  },

  // ── Sub-sector map ───────────────────────────────────────────────────────
  subSectorMap: {
    heading:    "Sub-sector map",
    legendLow:  "Smaller sub-sector",
    legendHigh: "Larger",
    note:
      "Tile area is index weight at the last rebalance. The sub-sector grouping is editorial: the methodology screens a single GICS Information Technology universe and does not itself divide the index into sub-sectors.",
  },

  // ── Chart ────────────────────────────────────────────────────────────────
  chart: {
    locale:  "en",
    periods: { "1M": "1M", "3M": "3M", ytd: "YTD", "1Y": "1Y", "3Y": "3Y", "5Y": "5Y", all: "All" },
  },

  // ── Home page ─────────────────────────────────────────────────────────────
  home: {
    pageTitle:       "Dmitrii Votoropin, CFA — Investment Counsellor",
    pageDescription: "Dmitrii Votoropin, CFA — Investment Counsellor with 14+ years in private banking and wealth management at Citi and Gazprombank. Personal research on rules-based index design: RITIX, RHIX, and RDIX." as string,
    hero: {
      eyebrow:    "Investment Counsellor · Moscow",
      h1line1:    "Private banking, ",
      h1em:       "wealth management",
      h1line2:    ",",
      h1line3:    "and investment advisory",
      h1line4:    "for HNW & UHNW clients.",
      intro:      "14+ years across Citi and Gazprombank, building portfolio-based advice across global fixed income, equities, structured notes, and alternatives.",
      stats: {
        designationLabel: "Designation",
        designationValue: "CFA",
        experienceLabel:  "Experience",
        experienceValue:  "14+ years",
        focusLabel:       "Focus",
        focusValue:       "Private banking · Investment advisory",
      },
    },
    about: {
      sectionLabel: "About",
      h2part1:      "A career across ",
      h2em:         "private banking",
      h2part2:      ", wealth management, and investment advisory.",
      p1: "I currently serve as Executive Director, Investment Counsellor at Gazprombank Private Banking, advising on portfolios spanning fixed income, equities, structured notes, deposits, and alternatives. Prior to that, I spent more than a decade at Citi — most recently as Vice President and Head of Portfolio Counsellors & Analytics for Russia.",
      p2: "I work with relationship managers on portfolio reviews, rebalancing decisions, and tactical asset-allocation tilts; deliver market updates and internal training; and contribute to recommended-product platform and advisory-workflow initiatives. I am a member of the American Finance Association.",
      readCv: "Read full CV →",
    },
    research: {
      sectionLabel: "Research prototypes",
      h2part1:      "Three ",
      h2em:         "personal research",
      h2part2:      " projects on rules-based equity index design.",
      disclaimer:   "RITIX, RHIX and RDIX are personal research prototypes maintained outside of professional capacity. They are not investment products, not regulated benchmarks, and not affiliated with any employer. Levels and constituent histories are published here for research and educational purposes only.",
      ritix: {
        ticker:           "RITIX · Russia IT Index",
        h3:               "Russian technology sector concept.",
        desc:             "A square-root free-float-adjusted market-cap-weighted index concept covering 10 Russian IT issuers on the Moscow Exchange.",
        constituentsLabel: "Constituents",
        sinceInceptionLabel: "Since inception",
        rebalanceLabel:   "Rebalance",
        rebalanceValue:   "Quarterly",
        link:             "Composition & performance →",
      },
      rhix: {
        ticker:           "RHIX · Russian Healthcare Index",
        h3:               "Healthcare & biotech sector concept.",
        desc:             "A free-float market-cap weighted index concept covering core healthcare, pharmaceutical, and biotechnology issuers listed on the Moscow Exchange.",
        constituentsLabel: "Constituents",
        ytdLabel:         "Since inception",
        rebalanceLabel:   "Rebalance",
        rebalanceValue:   "Semi-annual",
        link:             "Composition & performance →",
      },
      rdix: {
        ticker:           "RDIX · Russian Dividend Index",
        h3:               "Dividend-quality concept.",
        desc:             "A composite-score dividend index concept on the Moscow Exchange — weighting reliable, sustainable payers and reinvesting dividends on a net total return basis.",
        constituentsLabel: "Constituents",
        sinceInceptionLabel: "Since inception",
        rebalanceLabel:   "Rebalance",
        rebalanceValue:   "Annual",
        link:             "Composition & performance →",
      },
      allLink: "All research prototypes →",
    },
  },

  // ── CV page ───────────────────────────────────────────────────────────────
  cv: {
    pageTitle:       "Curriculum Vitae",
    pageDescription: "Curriculum Vitae of Dmitrii Votoropin, CFA — Executive Director, Investment Counsellor at Gazprombank Private Banking. 14+ years in private banking, wealth management, and investment advisory across Citi and Gazprombank.",
    sectionLabel:    "Curriculum Vitae",
    h1part1:         "A career across ",
    h1em:            "private banking",
    h1part2:         ", wealth management, and investment advisory.",
    photoAlt:        "Dmitrii Votoropin, CFA",
    photoCaption1:   "Dmitrii Votoropin, CFA",
    photoCaption2:   "Executive Director · Investment Counsellor",
    quickFacts: {
      locationLabel:    "Location",
      locationValue:    "Moscow",
      mobilityLabel:    "Mobility",
      mobilityValue:    "Open to relocation",
      experienceLabel:  "Experience",
      experienceValue:  "14+ years",
      designationLabel: "Designation",
      designationValue: "CFA",
    },
    downloadCv: "Download full CV (PDF) →",
    cvPdfPath: "/downloads/votoropin-cv.pdf" as string,
    sections: {
      experience:   "Experience",
      education:    "Education",
      credentials:  "Credentials & Memberships",
      awards:       "Awards & Recognition",
      capabilities: "Capabilities",
      languages:    "Languages",
    },
    capabilitiesText: "Investment advisory · Qualitative portfolio framework · Asset allocation, portfolio monitoring & rebalancing for HNW/UHNW · DM and EM bonds · Equities · Structured notes (capital-protected, yield-enhancement) · Deposits and DCDs · Mutual funds and alternatives · Global markets and macro commentary · RM partnership and joint client coverage · Recommended-product platform and advisory workflow design · KYC and controls · Internal training, conferences, and webinars.",
    languages: "Russian (native) · English (full professional fluency) · Spanish (elementary)",
    openToConversations: {
      label: "Open to conversations",
      p:     "Currently exploring senior investment advisory and portfolio counsellor opportunities at international private banks and wealth-management institutions.",
    },
    experience: [
      {
        role:     "Executive Director, Investment Counsellor",
        company:  "Gazprombank · Private Banking",
        dates:    "Jun 2024 — Present",
        location: "Moscow",
        bullets: [
          "Advise HNW clients on investment strategy; build and monitor diversified portfolios across global fixed income, equities, structured products, deposits, and alternatives, aligned to each client’s risk profile.",
          "Drive portfolio reviews, rebalancing decisions, and tactical asset-allocation tilts using a qualitative portfolio framework, in close partnership with relationship managers.",
          "Deliver market updates and investment views to clients and internal stakeholders; contribute to recommended-list, product-platform, and advisory-workflow initiatives.",
        ],
      },
      {
        role:     "VP, Head of Portfolio Counsellors & Analytics",
        company:  "Citi · Wealth Management",
        dates:    "Jan 2022 — Jun 2024",
        location: "Moscow",
        bullets: [
          "Led the Russia portfolio counsellors and analytics team — hiring, mentoring, and performance management — responsible for advisory quality and analytical output for Citi’s HNW and UHNW client base.",
          "Owned both quantitative (revenue) and qualitative (diversification index) advisory KPIs; ensured portfolio-quality and investment-revenue targets were met; coordinated with brokerage, treasury, mutual funds, sales management, and analytics teams.",
          "Defined and launched advisory products, structured solutions, and recommended strategies across DM/EM bonds, equities, structured notes, deposits, and alternatives.",
        ],
      },
      {
        role:     "Senior Business Development Manager / Senior Investment Counsellor",
        company:  "Citi · Wealth Management",
        dates:    "Apr 2019 — Jan 2022",
        location: "Moscow",
        bullets: [
          "Drove client acquisition, AUM growth, and investment-revenue generation across Citi’s wealth segment; structured solutions across Citi’s full global product shelf — DM/EM bonds, equities, capital-protected and yield-enhancement notes, deposits, and alternatives.",
          "Built advisory product platform and cross-team workflows with brokerage, treasury, mutual funds, and sales management; partnered with bankers to prospect new investment business.",
          "Received the 2020 Citi Chairman’s Council Award (Singapore) — top 5% of regional BDMs globally for investment-revenue generation and portfolio-quality metrics.",
        ],
      },
      {
        role:     "Senior Citigold Executive · Deputy Branch Manager",
        company:  "Citi · Citigold Wealth Management",
        dates:    "Oct 2013 — Mar 2019",
        location: "Ekaterinburg",
        bullets: [
          "Managed a portfolio of Citigold affluent clients; delivered investment advisory, portfolio reviews, and cross-sell of wealth and banking products. Consistently exceeded acquisition and AUM-growth targets, earning promotion to Senior BDM.",
          "Owned KYC for the client base and adherence to Citi’s sales-process and control framework.",
          "Received Citi’s AHS Award 2016 (USA) and Star Awards 2018 (Singapore).",
        ],
      },
      {
        role:     "Unpaid Intern",
        company:  "Citi · International Personal Bank",
        dates:    "May 2016",
        location: "New York",
        bullets:  [],
      },
      {
        role:     "Senior Financial Advisor",
        company:  "BCS · Brokerage & Wealth",
        dates:    "Oct 2011 — Oct 2013",
        location: "Ekaterinburg",
        bullets: [
          "Advised retail and affluent clients on brokerage, mutual funds, and structured investment products; led a team of financial advisors and drove acquisition and cross-sell.",
        ],
      },
    ],
    education: [
      {
        degree:      "Master of Science, Economics & Social Science",
        institution: "Russian Academy of National Economy and Public Administration",
        dates:       "2013 — 2015",
      },
      {
        degree:      "Bachelor’s Degree, International Relations",
        institution: "Ural State University",
        dates:       "2007 — 2011",
      },
    ],
    credentials: [
      {
        name: "CFA Charterholder",
        org:  "CFA Institute.",
      },
      {
        name: "Member, American Finance Association (AFA)",
        org:  "Published academic researcher and financial-press contributor.",
      },
      {
        name: "FSCM 1.0 Certified",
        org:  "Russian Federal Securities Markets Specialist Certificate.",
      },
    ],
    awards: [
      { year: "2020", name: "Citi Chairman’s Council Award", location: "Singapore" },
      { year: "2018", name: "Citi Star Awards",              location: "Singapore" },
      { year: "2016", name: "Citi AHS Award",                location: "USA" },
    ],
  },

  // ── Contact page ──────────────────────────────────────────────────────────
  contact: {
    pageTitle:       "Contact",
    pageDescription: "Get in touch with Dmitrii Votoropin, CFA — investment professional.",
    h1part1:  "Contact me ",
    h1em:     "personally",
    h1part2:  "",
    h1part3:  "",
    linkedIn: "LinkedIn",
    downloadCv: "Download CV (PDF)",
    replyNote: "Replies typically within 48 hours. For role-specific enquiries, please include the position or institution in the subject line.",
  },

  // ── Indices overview page ─────────────────────────────────────────────────
  indicesOverview: {
    pageTitle:       "Research Prototypes — RITIX, RHIX, RDIX",
    pageDescription: "Personal research prototypes on rules-based equity index design — RHIX (Russian Healthcare), RITIX (Russia IT), and RDIX. Not investment products, not regulated benchmarks.",
    eyebrow: "Research prototypes",
    h1part1: "Three ",
    h1em:    "personal research",
    h1part2: " projects on rules-based equity index design.",
    intro:   "RITIX, RHIX, and RDIX are research prototypes I maintain in my personal capacity. All three explore rules-based weighting schemes applied to under-followed segments of the Moscow Exchange. Levels, constituent compositions, and rebalancing histories are published here for research and educational purposes.",
    disclaimer: {
      label: "Disclaimer",
      text:  "RITIX, RHIX, and RDIX are personal research prototypes maintained by the author in his personal capacity. They are not investment products, not regulated benchmarks under IOSCO, ESMA, or any other framework, and are not affiliated with, sponsored by, or endorsed by any current or former employer of the author. All constituent weights, index levels, and historical data are published for research and educational purposes only. Nothing on this site constitutes investment advice, a solicitation, or a recommendation to buy or sell any security.",
    },
  },

  // ── Index detail page ([slug].astro) ──────────────────────────────────────
  indexDetail: {
    breadcrumb:         "Research prototypes",
    subtitleMiddle:     "Personal research prototype · Inception",
    ribbon: {
      currentLevel:   "Current Level",
      sinceInception: "Since inception",
      periodReturn:   "Period Return",
      constituents:   "Constituents",
      inception:      "Inception",
    },
    chartLabel:         "Index Level — rebased to 1,000 at period start",
    rdixDataNote:       "Data delayed by one trading day · updated automatically after market close",
    dividendYield: {
      heading: "Historical dividend yield",
      year:  "Year",
      gross: "Gross",
      net:   "Net (after 15% tax)",
      avg:   "Average 2019\u20132025",
      note:  "Realised dividend income (dividends collected \u00f7 index value). 2018 and 2026 excluded as partial years.",
    },
    descriptionLabel:   "Description",
    rebalancingLabel:   "Rebalancing history",
    rebalancingH2:      "Changes to constituents and weights, most recent first.",
    rebalancingPlaceholder: "This is a placeholder log. As real rebalancings occur they will be listed here with the date, the change to the constituent set, and a brief rationale.",
    rebalancingNotes: {
      latestReview:          "Latest review — current composition published.",
      latestQuarterlyReview: "Latest quarterly review — current composition published.",
      inception:             "Inception — initial composition fixed; base value 1,000.",
    },
    disclaimer: {
      label:      "Disclaimer",
      isNotPart1: "is a personal research prototype maintained by the author in his personal capacity. It is",
      notProduct: "not",
      notBench:   "not",
      notAffiliated: "not",
      isNotPart2: "an investment product,",
      isNotPart3: "a regulated benchmark under IOSCO, ESMA, or any other framework, and is",
      isNotPart4: "affiliated with, sponsored by, or endorsed by any current or former employer of the author. All constituent weights, index levels, and historical data are published for research and educational purposes only. Nothing on this page constitutes investment advice, a solicitation, or a recommendation to buy or sell any security.",
    },
  },

  // ── Performance statistics (index detail pages) ──────────────────────────
  performanceStats: {
    sectionLabel: "Performance statistics",
    h2:           "Risk-adjusted returns vs benchmark.",
    asOf:         "As of",
    index:        "Index",
    benchmark:    "Benchmark",
    periodReturns: {
      label: "Period returns",
      "1m":  "1 Month",
      "3m":  "3 Months",
      ytd:   "YTD",
      "1y":  "1 Year",
      si:    "Since Inception",
    },
    riskStats: {
      label:    "Risk & drawdown",
      vol:      "Ann. Volatility",
      maxDD:    "Max Drawdown",
      beta:     "Beta",
    },
    riskAdjusted: {
      label:   "Risk-adjusted ratios",
      sharpe:  "Sharpe Ratio",
      sortino: "Sortino Ratio",
      calmar:  "Calmar Ratio",
    },
    disclosure: {
      label: "Methodology disclosure",
      text:  "Sharpe Ratio computed using the Sharpe (1994) ex-post formula: mean(Ra − Rf) / σ(Ra − Rf) × √12, where Ra and Rf are monthly nominal returns. Rf = CBR Key Rate (annual, end-of-month), converted to a monthly decimal rate. Denominator is the standard deviation of the excess-return series (not the standard deviation of returns). Monthly frequency; periods shorter than 12 months use available observations. Sortino Ratio: annualised return / (downside semi-deviation × √12), MAR = 0. Calmar Ratio: annualised return / |Max Drawdown|. Beta: covariance(daily index return, daily benchmark return) / variance(daily benchmark return), computed over full history. Annualised Volatility: σ(daily log returns) × √252.",
    },
  },

  // ── Note category tags (canonical enum values, translated for display) ──
  noteTags: {
    Methodology: "Methodology" as string,
    Weighting:   "Weighting" as string,
    Data:        "Data" as string,
    Markets:     "Markets" as string,
    Portfolio:   "Portfolio" as string,
    Commentary:  "Commentary" as string,
  },

  // ── Notes index page ──────────────────────────────────────────────────────
  notesOverview: {
    pageTitle:       "Notes" as string,
    pageDescription: "Occasional writing on index design, portfolio construction, and market structure." as string,
    sectionLabel:    "Notes" as string,
    h1part1:         "Occasional " as string,
    h1em:            "writing" as string,
    h1part2:         " on index design, portfolio construction, and market structure." as string,
    emptyMessage:    "No notes published yet. The first ones are in draft." as string,
    minRead:         "min read" as string,
  },

  // ── Note detail page ([slug].astro) ───────────────────────────────────────
  noteDetail: {
    backLink: "← All notes" as string,
    minRead:  "min read" as string,
  },

} as const;

export type Dict = typeof en;
