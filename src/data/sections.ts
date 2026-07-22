export const outcomeClass: Record<string, string> = {
  patent: "tag-patent", policy: "tag-policy", product: "tag-product",
  guideline: "tag-guideline", teaching: "tag-teaching", cohort: "tag-teaching",
  "open-source": "tag-teaching", epidemiology: "tag-guideline",
  ml: "tag-policy", research: "tag-teaching"
};

export const researchStreams = [
  {
    area: "Breast cancer", question: "Can a risk model survive messy screening data?",
    summary: "Multi-modality imaging evaluation, nationwide HER2-Low cohort analysis, breast density AI, and Wāhine Māori health equity.",
    problem: "Screening data combine different modalities, referral patterns, clinical contexts, and population-level inequities.",
    method: "Risk modelling, population cohort analysis, explainable imaging AI, and deployment-aware validation.",
    landed: "Led the analysis for the 30,000 Voices national breast cancer report, which shaped ~half of NZ's national breast cancer KPIs.",
    outcomes: ["policy", "product", "guideline"]
  },
  {
    area: "Reproductive AI", question: "Can machine learning rank embryos better than an embryologist?",
    summary: "Morphokinetic stage detection, embryo annotation and segmentation, and cohort-relative ranking behind WyldBloom's clinic tools.",
    problem: "Embryo assessment is information-rich, time-sensitive, and difficult to make consistently measurable.",
    method: "Computer vision turns time-lapse imagery into traceable morphology, timing, expansion, and transition measurements.",
    landed: "Patent-pending WyldBloom decision-support tools, international validation, and clinic-pilot workflows.",
    outcomes: ["patent", "product"]
  },
  {
    area: "Fertility practice impact", question: "Can AI and automation reduce IVF transfer burden and reclaim embryologist time?",
    summary: "Cohort-relative embryo ranking and lab automation tools now running in NZ fertility clinics.",
    problem: "Embryo selection is subjective, time-pressured, and burdened by manual paperwork that scales poorly across clinics.",
    method: "Patent-pending cohort-relative embryo ranking on a 45K-embryo, hardware-agnostic dataset, plus lab automation reducing transfers and administrative load.",
    landed: "Patent-pending embryo ranking and lab automation tools now running in NZ fertility clinics, reducing transfers and reclaiming embryologist time.",
    outcomes: ["patent", "product"]
  },
  {
    area: "Reproducibility", question: "Can a method be trusted if no one can reproduce it?",
    summary: "Open tools and workflows that make translational research auditable from raw data to published conclusion.",
    problem: "Biomedical results lose value when the path from data to conclusion cannot be inspected or repeated.",
    method: "Reproducible workflows, transparent validation, interactive statistics tools, and explicit assumptions.",
    landed: "Open-source practice and teaching resources for PCA, collinearity, regression, and applied research.",
    outcomes: ["teaching", "open-source"]
  }
] as const;

export const aboutContent = {
  intro: "The Knowlton Lab builds applied statistics and machine learning for translational biomedical problems. The test is not whether a method performs on a curated benchmark, but whether it remains interpretable, reproducible, and useful once it leaves the sandbox.",
  principles: [
    { title: "Translational first", body: "Frame projects around the decisions, workflows, and deployment constraints encountered in practice." },
    { title: "Interpretability by design", body: "Build methods that collaborators, clinicians, and domain experts can inspect and explain." },
    { title: "Research that teaches. Teaching that builds.", body: "Treat research, teaching, supervision, and citizenship as mutually reinforcing work." }
  ],
  affiliations: ["University of Auckland", "Massey University"]
} as const;

export const peopleContent = {
  groups: [
    { title: "Breast cancer & epidemiology", people: [
      ["Yuqi Duan", "PhD · Auckland", "Epidemiology of early-onset cancers with a focus on breast cancer", "https://www.linkedin.com/in/yuqi-duan-320300382/"],
      ["Yuting Yang", "PhD · Auckland", "Histological and molecular subtypes of breast cancer in NZ women", "https://www.linkedin.com/in/yang-yuting0501/"],
      ["Rooshan Ghous", "PhD · Massey", "Equity by Design: a code-to-bedside pathway for breast cancer care in NZ", "https://www.linkedin.com/in/rooshan-ghous-9a4a5036/"],
      ["Reihaneh Hosseini", "PhD · Massey", "AI-driven breast cancer screening equity for Aotearoa", "https://www.linkedin.com/in/reihaneh-hosseini-122836237/"],
      ["Duhita Dey", "PhD · Auckland", "Breast cancer incidence, screening, workforce, and economics", "https://www.linkedin.com/in/duhita-dey-359a06120/"]
    ]},
    { title: "Reproductive AI & methods", people: [
      ["Hooman Misaghi", "PhD · Auckland", "Artificial Intelligence Enabled IVF", "https://www.linkedin.com/in/hooman-misaghi/"],
      ["Grace Donaldson", "PhD · Auckland", "Improving sperm assessment using AI", "https://www.linkedin.com/in/grace-donaldson-674a4b346/"],
      ["Zeyu Liu", "MSc · Massey", "Applied statistical modelling and thesis development"]
    ]}
  ],
  alumni: [
    ["Nooriyah Poonawala · MSc, Auckland", "https://www.linkedin.com/in/nooriyahpoonawala/"],
    ["Soo Yeon Kang · MSc, Auckland", "https://www.linkedin.com/in/suyeon-kang-b61100221/"],
    ["Braden Woodhouse · MSc Data Science, Auckland", "https://www.linkedin.com/in/braden-woodhouse/"]
  ]
} as const;

export const teachingContent = {
  philosophy: "If a method can't survive messy data, it doesn't belong in the toolkit.",
  body: "Courses centre practical statistical reasoning, reproducible workflows, and the problem setups students will encounter outside coursework.",
  courses: [
    { code: "161.251", title: "Regression Modelling", href: "https://www.massey.ac.nz/study/courses/regression-modelling-161251/", resources: "/161251/" },
    { code: "161.762", title: "Multivariate Analysis for Big Data", href: "https://www.massey.ac.nz/study/courses/multivariate-analysis-for-big-data-161762/", resources: "/161762/" },
    { code: "161.777", title: "Practical Data Mining", href: "https://www.massey.ac.nz/study/courses/practical-data-mining-161777/", resources: "/161777/" },
    { code: "161.101", title: "Statistics", href: "https://www.massey.ac.nz/study/courses/", resources: null },
    { code: "297.101", title: "Statistical Data Science", href: "https://www.massey.ac.nz/study/courses/statistical-data-science-297101/", resources: null }
  ]
} as const;

export const joinContent = {
  lead: "I take students who want to build things that leave the building.",
  body: "PhD and MSc students across Massey and Auckland work as one methods and manuscript-development environment, with shared meetings, datasets, and translational targets.",
  availability: "I am not accepting new students at present. The next intake will be in 2028.",
  values: ["Rigorous quantitative practice", "Clear communication with domain collaborators", "Reproducible work that survives real data", "Generous, cross-institutional collaboration"],
  send: ["Curriculum vitae", "A short research statement", "Academic transcript"]
} as const;
