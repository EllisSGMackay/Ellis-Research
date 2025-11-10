export interface Publication {
  year: string;
  conference: string;
  journal: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
export const publicationData: Publication[] = [
  {
    year: "2025",
    journal: "Science of the Total Environment",
    title: "Urban possums as sentinels for environmental contamination: First evidence of PFAS in Australian marsupials",
    authors: "Ellis S.G. Mackay, Subharthe Samandra, Jordan M. Partington, K.L.D. Tharaka D. Liyanage, Bradley O. Clarke, Jasmin Hufschmid",
    paperUrl: "https://doi.org/10.1016/j.scitotenv.2025.180727",
    imageUrl:
      "https://ars.els-cdn.com/content/image/1-s2.0-S0048969725023678-ga1_lrg.jpg",
  },
  {
    year: "2019",
    journal: "Biological Invasions",
    title: "Interactions between two species of recently-sympatric invasive honeybees: Apis cerana induces aggression in Apis mellifera during foraging",
    authors: "Caroline L. Gross, Joshua D. Whitehead, Ellis S.G. Mackay, K. David Mackay, Nigel R. Andrew, Dean Paini",
    paperUrl: "https://doi.org/10.1007/s10530-019-02081-y",
    imageUrl:
      "https://media.springernature.com/full/springer-static/image/art%3A10.1007%2Fs10530-019-02081-y/MediaObjects/10530_2019_2081_Fig1_HTML.jpg?as=webp",
  },
];
