import { publications } from "./publications";

export const locales = ["en", "mi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const secondaryLocales = locales.filter((locale) => locale !== defaultLocale) as Locale[];
export const localeNames: Record<Locale, string> = { en: "English", mi: "Te Reo Māori" };

export const pageSlugs = ["about", "research", "students", "teaching", "publications", "join"] as const;
export type PageSlug = (typeof pageSlugs)[number];

export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);
export const isPageSlug = (value: string): value is PageSlug => pageSlugs.includes(value as PageSlug);

export const siteMeta = {
  name: "Knowlton Lab",
  site: "https://knowlton.co.nz",
  emails: ["nknowlton@massey.ac.nz", "n.knowlton@auckland.ac.nz"],
  description: "Translational statistical science with a clear line of sight to clinical impact.",
  institutions: ["Massey University", "University of Auckland"],
  wyldBloom: "https://wyldbloom.ai",
  socialLinks: [
    { label: "Massey University", href: "https://www.massey.ac.nz/massey/expertise/profile.cfm?stref=284822" },
    { label: "University of Auckland", href: "https://profiles.auckland.ac.nz/n-knowlton" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=Bb32KDoAAAAJ" },
    { label: "ORCID", href: "https://orcid.org/0000-0002-7022-3352" },
    { label: "GitHub", href: "https://github.com/nknowlton" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nsknowlton/" }
  ]
} as const;

export const navigationLabels: Record<PageSlug, string> = {
  about: "About",
  research: "Research",
  students: "People",
  teaching: "Teaching",
  publications: "Publications",
  join: "Join"
};

const meta = {
  home: ["Knowlton Lab", "Statistical methods with a line of sight to clinical impact."],
  about: ["About", "The approach, affiliations, and values behind the Knowlton Lab."],
  research: ["Research", "Clinical questions, statistical methods, and where the work landed."],
  students: ["People", "Students working across biomedical research, statistical methods, applied AI, and translational science at Massey and Auckland."],
  teaching: ["Teaching", "Practical statistical reasoning for the data students actually encounter."],
  publications: ["Publications", "Recent scholarly outputs."],
  join: ["Join the lab", "Work on statistical methods that can survive contact with real data."]
} as const;

export const pageMeta = Object.fromEntries(
  Object.entries(meta).map(([key, [title, description]]) => [key, {
    en: { title, description, eyebrow: key === "home" ? "Translational statistical science" : title },
    mi: { title, description, eyebrow: key === "home" ? "Translational statistical science" : title }
  }])
) as Record<"home" | PageSlug, Record<Locale, { title: string; description: string; eyebrow: string }>>;

export const homeContent = {
  kicker: "Massey University & University of Auckland — one integrated cohort",
  titleBefore: "Statistical methods with a",
  titleAccent: "line of sight",
  titleAfter: "to clinical impact.",
  tagline: "Methods that survive messy data. Proven in the clinic.",
  lead: "Breast cancer risk modelling, endocrine therapy adherence, embryo selection AI, and reproducible research methods — from statistical problem to clinical decision.",
  byline: [
    "Senior Lecturer, Statistics · Massey University",
    "Translational science · Machine learning",
    "Models used to monitor 1M+ patients"
  ],
  stats: [
    { value: "2", label: "US patents granted" },
    { value: "1M+", label: "patients monitored with VectraDA" },
    { value: "~50%", label: "of NZ breast cancer KPIs shaped by 30,000 Voices" },
    { value: "2", label: "institutions, one cohort" }
  ],
  wyldBloom: {
    eyebrow: "Research into practice · WyldBloom",
    title: "Making embryo development measurable.",
    body: "AI, imaging, and clinical decision support turn embryo development into structured, traceable observations — supporting judgement rather than replacing it.",
    videoLabel: "Annotated embryo review showing AI-derived morphology measurements and developmental observations",
    href: siteMeta.wyldBloom
  },
  selectedPeople: [
    { name: "Hooman Misaghi", role: "PhD · Auckland", question: "Artificial Intelligence Enabled IVF" },
    { name: "Reihaneh Hosseini", role: "PhD · Massey", question: "AI-driven breast cancer screening equity for Aotearoa" },
    { name: "Yuqi Duan", role: "PhD · Auckland", question: "Epidemiology of early-onset cancers with a focus on breast cancer" },
    { name: "Yuting Yang", role: "PhD · Auckland", question: "Histological and molecular subtypes of breast cancer in NZ women" }
  ],
  featuredPublications: publications.slice(0, 4)
} as const;
