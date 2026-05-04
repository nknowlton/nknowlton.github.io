import { publications } from "./publications";

export const locales = ["en", "mi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const secondaryLocales = locales.filter(
  (locale) => locale !== defaultLocale
) as Locale[];

export const pageSlugs = [
  "about",
  "research",
  "students",
  "teaching",
  "publications"
] as const;

export type PageSlug = (typeof pageSlugs)[number];

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const isPageSlug = (value: string): value is PageSlug =>
  pageSlugs.includes(value as PageSlug);

export const siteMeta = {
  name: "Knowlton Lab",
  site: "https://knowlton.co.nz",
  email: "n.knowlton@auckland.ac.nz",
  description:
    "Knowlton Lab at Massey University and the University of Auckland, focused on applied statistics, machine learning, and translational biomedical research.",
  institutions: ["Massey University", "University of Auckland"],
  socialLinks: [
    {
      label: "Massey University",
      href: "https://www.massey.ac.nz/massey/expertise/profile.cfm?stref=284822"
    },
    {
      label: "University of Auckland",
      href: "https://profiles.auckland.ac.nz/n-knowlton"
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?hl=en&user=Bb32KDoAAAAJ"
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-7022-3352"
    },
    {
      label: "GitHub - Personal",
      href: "https://github.com/nknowlton"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nsknowlton/"
    }
  ]
} as const;

export const localeNames: Record<Locale, string> = {
  en: "English",
  mi: "Te Reo Maori"
};

export const navigationLabels: Record<Locale, Record<PageSlug, string>> = {
  en: {
    about: "About",
    research: "Research",
    students: "Students",
    teaching: "Teaching",
    publications: "Publications"
  },
  mi: {
    about: "Mo te taiwhanga / About",
    research: "Rangahau / Research",
    students: "Akonga / Students",
    teaching: "Akoranga / Teaching",
    publications: "Whakaputanga / Publications"
  }
};

export const uiText = {
  en: {
    home: "Home",
    language: "Language",
    localeNoticeTitle: "Multilingual routing is active",
    localeNoticeBody:
      "This locale uses the shared content system, so copy can be translated incrementally without redesigning the site.",
    viewProfile: "View profile",
    exploreAll: "Explore all",
    currentFocus: "Current focus",
    selectedWork: "Selected work",
    courseResources: "Course resources",
    currentStudents: "Current students",
    readAbstract: "Read abstract"
  },
  mi: {
    home: "Kainga / Home",
    language: "Reo",
    localeNoticeTitle: "Kei te rere te aratau reo-maha",
    localeNoticeBody:
      "The bilingual route structure is active here. Detailed page copy can be translated gradually from the shared data files.",
    viewProfile: "Tirohia te korero",
    exploreAll: "Tirohia katoa",
    currentFocus: "Nga kaupapa matua",
    selectedWork: "Nga mahi kua tohua",
    courseResources: "Nga rauemi akoranga",
    currentStudents: "Nga akonga o naianei",
    readAbstract: "Panuihia te abstract"
  }
} as const;

export const pageMeta: Record<
  "home" | PageSlug,
  Record<Locale, { title: string; description: string; eyebrow: string }>
> = {
  home: {
    en: {
      title: "Knowlton Lab",
      description:
        "Applied statistics and machine learning for breast imaging, reproductive biology, and translational biomedical decision support.",
      eyebrow: "Clinically grounded computational science"
    },
    mi: {
      title: "Knowlton Lab",
      description:
        "A bilingual-ready research site for applied statistics, machine learning, and translational biomedical collaboration.",
      eyebrow: "Bilingual-ready research platform"
    }
  },
  about: {
    en: {
      title: "About",
      description:
        "Overview of the Knowlton Lab, its translational research approach, affiliations, and contact points.",
      eyebrow: "About the lab"
    },
    mi: {
      title: "Mo te taiwhanga / About",
      description:
        "Overview of the Knowlton Lab, its translational research approach, affiliations, and contact points.",
      eyebrow: "Mo te taiwhanga / About the lab"
    }
  },
  research: {
    en: {
      title: "Research",
      description:
        "Research programmes spanning breast imaging AI, reproductive biology, and robust translational statistics.",
      eyebrow: "Research programmes"
    },
    mi: {
      title: "Rangahau / Research",
      description:
        "Research programmes spanning breast imaging AI, reproductive biology, and robust translational statistics.",
      eyebrow: "Rangahau / Research programmes"
    }
  },
  students: {
    en: {
      title: "Students",
      description:
        "Current PhD students, lab alumni, supervision commitments, and mentoring priorities.",
      eyebrow: "Students and trainees"
    },
    mi: {
      title: "Akonga / Students",
      description:
        "Current PhD students, lab alumni, supervision commitments, and mentoring priorities.",
      eyebrow: "Akonga / Students and trainees"
    }
  },
  teaching: {
    en: {
      title: "Teaching",
      description:
        "Current courses, course resource links, and the lab's practical teaching approach.",
      eyebrow: "Teaching and materials"
    },
    mi: {
      title: "Akoranga / Teaching",
      description:
        "Current courses, course resource links, and the lab's practical teaching approach.",
      eyebrow: "Akoranga / Teaching and materials"
    }
  },
  publications: {
    en: {
      title: "Publications",
      description:
        "Selected recent publications and external scholarly profiles for the Knowlton Lab.",
      eyebrow: "Publications and scholarly profiles"
    },
    mi: {
      title: "Whakaputanga / Publications",
      description:
        "Selected recent publications and external scholarly profiles for the Knowlton Lab.",
      eyebrow: "Whakaputanga / Publications and profiles"
    }
  }
};

export const homeContent: Record<
  Locale,
  {
    title: string;
    lead: string;
    primaryCta: { label: string; href: PageSlug };
    secondaryCta: { label: string; href: PageSlug };
    tertiaryCta: { label: string; href: PageSlug };
    focusItems: string[];
    pillars: { eyebrow: string; title: string; body: string; href: PageSlug }[];
    stats: { value: string; label: string }[];
  }
> = {
  en: {
    title:
      "Statistical and machine learning systems for clinically grounded translational research.",
    lead:
      "The Knowlton Lab develops interpretable analytics, evaluation workflows, and decision support methods for breast imaging, reproductive biology, and biomedical discovery in real clinical settings.",
    primaryCta: { label: "Explore research", href: "research" },
    secondaryCta: { label: "View publications", href: "publications" },
    tertiaryCta: { label: "Meet the lab", href: "students" },
    focusItems: [
      "Explainable AI for breast cancer screening, risk, and prognosis.",
      "Computer vision and morphokinetic modelling for embryo assessment.",
      "Deployment-aware statistics that hold up outside curated benchmark datasets."
    ],
    pillars: [
      {
        eyebrow: "Research",
        title: "Research programmes",
        body: "Method development connected to translational use cases, not benchmark theatre.",
        href: "research"
      },
      {
        eyebrow: "Training",
        title: "Supervision",
        body: "PhD and Masters training across imaging, machine learning, and biomedical data science.",
        href: "students"
      },
      {
        eyebrow: "Education",
        title: "Teaching",
        body: "Practical statistics and data science courses with direct links to hosted materials.",
        href: "teaching"
      }
    ],
    stats: [
      { value: "4", label: "Selected recent publications" },
      { value: "6", label: "Current PhD students" },
      { value: "2", label: "Institutional homes" }
    ]
  },
  mi: {
    title:
      "A bilingual-ready research site for clinically grounded statistics, machine learning, and translational science.",
    lead:
      "The new site architecture supports multiple languages while keeping the core research, teaching, and supervision information in a single shared content system.",
    primaryCta: { label: "Rangahau / Research", href: "research" },
    secondaryCta: { label: "Whakaputanga / Publications", href: "publications" },
    tertiaryCta: { label: "Akonga / Students", href: "students" },
    focusItems: [
      "Breast imaging, density, and clinically useful decision support.",
      "Embryology and fertility analytics with accessible machine learning workflows.",
      "Robust evaluation strategies for translational biomedical deployment."
    ],
    pillars: [
      {
        eyebrow: "Rangahau / Research",
        title: "Research programmes",
        body: "Programme pages can be translated independently without changing the layout system.",
        href: "research"
      },
      {
        eyebrow: "Akonga / Students",
        title: "Supervision",
        body: "Supervision and trainee information stays structured and easy to extend across locales.",
        href: "students"
      },
      {
        eyebrow: "Whakaputanga / Publications",
        title: "Selected publications",
        body: "Selected outputs are now a first-class section rather than an off-site afterthought.",
        href: "publications"
      }
    ],
    stats: [
      { value: "2", label: "Active locales" },
      { value: "4", label: "Selected publications" },
      { value: "5", label: "Core sections" }
    ]
  }
};

export const aboutContent = {
  intro:
    "The Knowlton Lab focuses on applied statistics and machine learning for translational biomedical problems, with an emphasis on methods that remain interpretable, reproducible, and clinically useful once they leave the sandbox.",
  principles: [
    {
      title: "Translational first",
      body: "Projects are framed around decisions, workflows, and deployment constraints encountered in practice."
    },
    {
      title: "Interpretability by design",
      body: "The lab prioritises methods that can be explained to collaborators, clinicians, and domain experts."
    },
    {
      title: "Collaboration across the pipeline",
      body: "Work spans method development, validation, and the communication needed to move results into applied settings."
    }
  ],
  affiliations: [
    "University of Auckland",
    "Massey University",
    "Cross-disciplinary collaborations across imaging, reproductive biology, and translational data science"
  ]
};

export const researchThemes = [
  {
    title: "Breast cancer and imaging AI",
    body:
      "Interpretable models for mammography, risk prediction, dense-breast workflows, and imaging-led decision support.",
    methods: ["Risk modelling", "Screening evaluation", "Clinical validation"],
    accent: "coral"
  },
  {
    title: "Reproductive biology and IVF analytics",
    body:
      "Computer vision, morphokinetic analysis, and statistical pipelines for embryo and sperm phenotyping.",
    methods: ["Computer vision", "Time-series analysis", "Fertility decision support"],
    accent: "aqua"
  },
  {
    title: "Robust translational statistics",
    body:
      "Evaluation, uncertainty quantification, and modelling strategies designed for messy biomedical deployment environments.",
    methods: ["Uncertainty modelling", "Validation", "Study design"],
    accent: "gold"
  }
] as const;

export const studentGroups = {
  phd: [
    {
      label: "Hooman Misaghi",
      href: "https://www.linkedin.com/in/hooman-misaghi/",
      detail: "Started 2023"
    },
    {
      label: "Yuting Yang",
      href: "https://www.linkedin.com/in/yang-yuting0501/",
      detail: "Started 2024"
    },
    {
      label: "Grace Donaldson",
      href: "https://www.linkedin.com/in/grace-donaldson-674a4b346/",
      detail: "Started 2025"
    },
    {
      label: "Reihaneh Hosseini",
      href: "https://www.linkedin.com/in/reihaneh-hosseini-122836237/",
      detail: "Started 2026"
    },
    {
      label: "Rooshan Ghous",
      href: "https://www.linkedin.com/in/rooshan-ghous-9a4a5036/",
      detail: "Started 2026"
    },
    {
      label: "Duhita Dey",
      href: "https://www.linkedin.com/in/duhita-dey-359a06120/",
      detail: "Started 2026"
    },
    {
      label: "Yuqi Duan",
      href: "https://www.linkedin.com/in/yuqi-duan-320300382/",
      detail: "Started 2025"
    }
  ],
  masters: [
    {
      label: "Braden Woodhouse",
      href: "https://www.linkedin.com/in/braden-woodhouse/",
      detail: "MSc Data Science, University of Auckland (started 2023)."
    },
    {
      label: "Nooriyah Poonawala",
      href: "https://www.linkedin.com/in/nooriyahpoonawala/",
      detail: "MSc, University of Auckland."
    },
    {
      label: "Soo Yeon Kang",
      href: "https://www.linkedin.com/in/suyeon-kang-b61100221/",
      detail: "MSc, University of Auckland."
    }
  ],
  mentoring:
    "Supervision emphasises rigorous quantitative practice, clear communication with domain collaborators, and projects that can survive contact with real data."
};

export const teachingContent = {
  courses: [
    {
      title: "161.251 Regression Modelling",
      href: "https://www.massey.ac.nz/study/courses/regression-modelling-161251/"
    },
    {
      title: "161.762 Multivariate Analysis for Big Data",
      href: "https://www.massey.ac.nz/study/courses/multivariate-analysis-for-big-data-161762/"
    },
    {
      title: "161.777 Practical Data Mining",
      href: "https://www.massey.ac.nz/study/courses/practical-data-mining-161777/"
    },
    {
      title: "297.101 Statistical Data Science",
      href: "https://www.massey.ac.nz/study/courses/statistical-data-science-297101/",
      note: "Albany, Semester 2"
    }
  ],
  resources: [
    { label: "161.251 resources", href: "/161251/" },
    { label: "161.324 resources", href: "/161324/" },
    { label: "161.762 resources", href: "/161762/" },
    { label: "161.762 lecture 1 example", href: "/161762/slides/lecture1.html" }
  ],
  philosophy:
    "Teaching is structured around practical statistical reasoning, reproducible workflows, and problem setups students are likely to encounter outside coursework."
};

export const publicationContent = {
  intro:
    "This section surfaces selected recent work directly on the site while keeping complete profile links available for the broader publication record.",
  featured: publications,
  externalProfiles: [
    {
      label: "Google Scholar profile",
      href: "https://scholar.google.com/citations?hl=en&user=Bb32KDoAAAAJ"
    },
    {
      label: "ORCID profile",
      href: "https://orcid.org/0000-0002-7022-3352"
    }
  ]
};
