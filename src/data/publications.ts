export type Publication = {
  title: string;
  year: number;
  venue: string;
  href: string;
  summary: string;
  tags: string[];
};

export const publications: Publication[] = [
  {
    title:
      "Improving Breast Cancer Detection in Higher Risk Women: A Multi-Modality Imaging Evaluation in a Private Screening Clinic",
    year: 2026,
    venue: "Journal of Medical Imaging and Radiation Oncology",
    href: "https://pubmed.ncbi.nlm.nih.gov/41578843/",
    summary:
      "Evaluates tomosynthesis, ultrasound, and MRI in a risk-stratified breast screening workflow for women with dense breasts and elevated risk.",
    tags: ["Breast imaging", "Clinical translation", "Risk stratification"]
  },
  {
    title: "Accurate machine learning model for human embryo morphokinetic stage detection",
    year: 2025,
    venue: "Journal of Assisted Reproduction and Genetics",
    href: "https://pubmed.ncbi.nlm.nih.gov/40833447/",
    summary:
      "Describes a machine learning pipeline for identifying 17 morphokinetic stages in pre-implantation embryo development from time-lapse imagery.",
    tags: ["Embryology", "Computer vision", "Machine learning"]
  },
  {
    title: "Analysis of HER2-Low Breast Cancer in Aotearoa New Zealand: A Nationwide Retrospective Cohort Study",
    year: 2024,
    venue: "Cancers",
    href: "https://pubmed.ncbi.nlm.nih.gov/39335175/",
    summary:
      "National cohort analysis of HER2-positive, HER2-low, and HER2-zero invasive breast cancers in Aotearoa New Zealand.",
    tags: ["Breast cancer", "Population study", "Aotearoa"]
  },
  {
    title:
      "Breast Cancer Patient Prognosis Is Determined by the Interplay between TP53 Mutation and Alternative Transcript Expression: Insights from TP53 Long Amplicon Digital PCR Assays",
    year: 2021,
    venue: "Cancers",
    href: "https://pubmed.ncbi.nlm.nih.gov/33810361/",
    summary:
      "Links molecular profiling and transcript expression patterns to breast cancer prognosis using assay-driven translational analysis.",
    tags: ["Molecular oncology", "Biomarkers", "Breast cancer"]
  }
];
