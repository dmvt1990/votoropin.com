// src/i18n/en.ts
// English UI dictionary. Every hardcoded string in components and pages
// lives here. Shape is the canonical Dict type — ru.ts must satisfy it.

export const en = {

  // ── Shared ──────────────────────────────────────────────────────────────
  dateLocale: "en-GB",

  // ── Navigation ──────────────────────────────────────────────────────────
  nav: {
    brand: "Dmitrii Votoropin",
    brandSuffix: "",
    mobileToggle: "Menu ↓",
    links: {
      home:      "Home" as string,
      cv:        "CV" as string,
      indices:   "Indices" as string,
      notes:     "Notes" as string,
      contact:   "Contact" as string,
      dashboard: "" as string,
    },
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    disclaimer: "RHIX · RITIX are personal research prototypes — not investment advice",
  },

  // ── Base layout / meta ───────────────────────────────────────────────────
  meta: {
    locale:             "en_US",
    siteUrl:            "https://votoropin.com",
    defaultDescription: "Dmitrii Votoropin — 14+ years in private banking, wealth management, and investment advisory across Citi and Gazprombank.",
    titleSuffix:        "— Dmitrii Votoropin",
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
    },
  },

  // ── Chart ────────────────────────────────────────────────────────────────
  chart: {
    locale:  "en",
    periods: { "1M": "1M", "3M": "3M", ytd: "YTD", "1Y": "1Y", all: "All" },
  },

  // ── Home page ─────────────────────────────────────────────────────────────
  home: {
    pageTitle: "Dmitrii Votoropin — Investment Counsellor",
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
        designationValue: "",
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
      p1: "I currently serve as Executive Director, Investment Counsellor at Gazprombank Private Banking, building portfolio-based advice across global fixed income, equities, structured notes, deposits, and alternatives. Prior to that, I spent more than a decade at Citi — most recently as Vice President and Head of Portfolio Counsellors & Analytics for Russia.",
      p2: "I work with relationship managers on portfolio reviews, rebalancing decisions, and tactical asset-allocation tilts; deliver market updates and internal trainings; and contribute to recommended-product platform and advisory-workflow initiatives. I am a member of the American Finance Association.",
      readCv: "Read full CV →",
    },
    research: {
      sectionLabel: "Research prototypes",
      h2part1:      "Two ",
      h2em:         "personal research",
      h2part2:      " projects on rules-based equity index design.",
      disclaimer:   "RHIX and RITIX are personal research prototypes maintained outside of professional capacity. They are not investment products, not regulated benchmarks, and not affiliated with any employer. Levels and constituent histories are published here for research and educational purposes only.",
      ritix: {
        ticker:           "RITIX · Russia IT Index",
        h3:               "Russian technology sector concept.",
        desc:             "A square-root free-float-adjusted market-cap weighted index concept covering ten Russian IT issuers on the Moscow Exchange.",
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
        ytdLabel:         "YTD",
        rebalanceLabel:   "Rebalance",
        rebalanceValue:   "Semi-ann.",
        link:             "Composition & levels →",
      },
      allLink: "All research prototypes →",
    },
  },

  // ── CV page ───────────────────────────────────────────────────────────────
  cv: {
    pageTitle:       "Curriculum Vitae",
    pageDescription: "Curriculum Vitae of Dmitrii Votoropin — Executive Director, Investment Counsellor at Gazprombank Private Banking. 14+ years in private banking, wealth management, and investment advisory across Citi and Gazprombank.",
    sectionLabel:    "Curriculum Vitae",
    h1part1:         "A career across ",
    h1em:            "private banking",
    h1part2:         ", wealth management, and investment advisory.",
    photoAlt:        "Dmitrii Votoropin",
    photoCaption1:   "Dmitrii Votoropin",
    photoCaption2:   "Executive Director · Investment Counsellor",
    quickFacts: {
      locationLabel:    "Location",
      locationValue:    "Moscow",
      mobilityLabel:    "Mobility",
      mobilityValue:    "Open to relocation",
      experienceLabel:  "Experience",
      experienceValue:  "14+ years",
      designationLabel: "Designation",
      designationValue: "",
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
    capabilitiesText: "Investment advisory · Qualitative portfolio framework · Asset allocation, portfolio monitoring & rebalancing for HNW/UHNW · DM and EM bonds · Equities · Structured notes (capital-protected, yield-enhancement) · Deposits and DCDs · Mutual funds and alternatives · Global markets and macro commentary · RM partnership and joint client coverage · Recommended-product platform and advisory workflow design · KYC and controls · Internal trainings, conferences, and webinars.",
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
          "Investment counselling and portfolio advice for HNW clients; build and monitor diversified portfolios across global fixed income, equities, structured products, deposits, and alternatives, aligned to each client's risk profile.",
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
          "Led the Russia portfolio counsellors and analytics team — hiring, mentoring, and performance management — responsible for advisory quality and analytical output for Citi's HNW and UHNW client base.",
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
          "Drove client acquisition, AUM growth, and investment-revenue generation across Citi's wealth segment; structured solutions across Citi's full global product shelf — DM/EM bonds, equities, capital-protected and yield-enhancement notes, deposits, and alternatives.",
          "Built advisory product platform and cross-team workflows with brokerage, treasury, mutual funds, and sales management; partnered with bankers to prospect new investment business.",
          "Received the 2020 Citi Chairman's Council Award (Singapore) — top 5% of regional BDMs globally for investment-revenue generation and portfolio-quality metrics.",
        ],
      },
      {
        role:     "Senior Citigold Executive · Deputy Branch Manager",
        company:  "Citi · Citigold Wealth Management",
        dates:    "Oct 2013 — Mar 2019",
        location: "Ekaterinburg",
        bullets: [
          "Managed a portfolio of Citigold affluent clients; delivered investment advisory, portfolio reviews, and cross-sell of wealth and banking products. Consistently exceeded acquisition and AUM-growth targets, earning promotion to Senior BDM.",
          "Owned KYC for the client base and adherence to Citi's sales-process and control framework.",
          "Achievement Recognition: AHS 2016 (USA) and Star Awards 2018 (Singapore).",
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
          "Advised retail and affluent clients on brokerage, mutual funds, and structured investment products; led a team of financial advisors, drove acquisition and cross-sell.",
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
        degree:      "Bachelor's Degree, International Relations",
        institution: "Ural State University",
        dates:       "2007 — 2011",
      },
    ],
    credentials: [
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
      { year: "2020", name: "Citi Chairman's Council Award", location: "Singapore" },
      { year: "2018", name: "Citi Star Awards",              location: "Singapore" },
      { year: "2016", name: "Citi AHS Award",                location: "USA" },
    ],
  },

  // ── Contact page ──────────────────────────────────────────────────────────
  contact: {
    pageTitle:       "Contact",
    pageDescription: "Get in touch with Dmitrii Votoropin — investment professional.",
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
    pageTitle:       "Research Prototypes — RHIX, RITIX",
    pageDescription: "Personal research prototypes on rules-based equity index design — RHIX (Russian Healthcare) and RITIX (Russia IT). Not investment products, not regulated benchmarks.",
    eyebrow: "Research prototypes",
    h1part1: "Two ",
    h1em:    "personal research",
    h1part2: " projects on rules-based equity index design.",
    intro:   "RHIX and RITIX are research prototypes I maintain in my personal capacity. Both explore rules-based weighting schemes applied to under-followed segments of the Moscow Exchange. Levels, constituent compositions, and rebalancing histories are published here for research and educational purposes.",
    disclaimer: {
      label: "Disclaimer",
      text:  "RHIX and RITIX are personal research prototypes maintained by the author in his personal capacity. They are not investment products, not regulated benchmarks under IOSCO, ESMA, or any other framework, and are not affiliated with, sponsored by, or endorsed by any current or former employer of the author. All constituent weights, index levels, and historical data are published for research and educational purposes only. Nothing on this site constitutes investment advice, a solicitation, or a recommendation to buy or sell any security.",
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
      si:    "Since inception",
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
      text:  "Sharpe Ratio computed using the Sharpe (1994) ex-post formula: mean(Ra − Rf) / σ(Ra − Rf) × √12, where Ra and Rf are monthly nominal returns. Rf = CBR Key Rate (annual, end-of-month), converted to monthly decimal. Denominator is the standard deviation of the excess-return series (not return standard deviation). Monthly frequency; periods shorter than 12 months use available observations. Sortino Ratio: annualised return / (downside semi-deviation × √12), MAR = 0. Calmar Ratio: annualised return / |Max Drawdown|. Beta: covariance(daily index return, daily benchmark return) / variance(daily benchmark return), computed over full history. Annualised Volatility: σ(daily log returns) × √252.",
    },
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
