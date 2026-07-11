export type Publication = { title: string; year: number | string; venue: string; href: string; summary: string; outcomes: string[] };

export const publications: Publication[] = [
  { title: "Improving Breast Cancer Detection in Higher Risk Women: A Multi-Modality Imaging Evaluation in a Private Screening Clinic", year: 2026, venue: "Journal of Medical Imaging and Radiation Oncology", href: "https://pubmed.ncbi.nlm.nih.gov/41578843/", summary: "Evaluation of tomosynthesis, ultrasound, and MRI in a risk-stratified screening workflow.", outcomes: ["policy", "product"] },
  { title: "Accurate machine learning model for human embryo morphokinetic stage detection", year: 2025, venue: "Journal of Assisted Reproduction and Genetics", href: "https://pubmed.ncbi.nlm.nih.gov/40833447/", summary: "A machine learning pipeline identifying 17 stages of pre-implantation embryo development.", outcomes: ["patent", "product"] },
  { title: "Analysis of HER2-Low Breast Cancer in Aotearoa New Zealand: A Nationwide Retrospective Cohort Study", year: 2024, venue: "Cancers", href: "https://pubmed.ncbi.nlm.nih.gov/39335175/", summary: "National analysis of HER2-positive, HER2-low, and HER2-zero invasive breast cancers.", outcomes: ["policy"] },
  { title: "Breast Cancer Patient Prognosis Is Determined by the Interplay between TP53 Mutation and Alternative Transcript Expression", year: 2021, venue: "Cancers", href: "https://pubmed.ncbi.nlm.nih.gov/33810361/", summary: "Assay-driven analysis linking molecular profiles and transcript expression to prognosis.", outcomes: ["guideline"] }
];
