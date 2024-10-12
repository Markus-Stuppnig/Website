export interface Project {
  title: string;
  description: string;
  projectDone: boolean;
  startDate: Date;
  endDate?: Date;
  latestVersion?: string;
  link: string;
  imagePath?: string;
  contributers?: Contributor[];
  progress: number;
}

export interface Contributor {
  name: string;
  description: string[];
  additionalInformation: string[];
  imagePath?: string;
}

export const projectsData: Project[] = [
  {
    title: "Digitaler Schlaganfallnotarzt",
    description:
      "The Digital Stroke Doctor App revolutionizes the initial treatment of strokes: rescue personnel communicate directly with an AI that assists with immediate diagnosis and action recommendations. This allows for rapid assessment of the likelihood of a stroke and saves lives—faster, more efficiently, and smarter.",
    projectDone: false,
    startDate: new Date("2024-09-0T00:00:00.000Z"),
    latestVersion: "0.1",
    link: "",
    progress: 15,
  },
  {
    title: "VSA",
    description:
      "The market sees a steady rise in digital products and services. Personal digital possessions like social media accounts and crypto wallets risk being lost upon the user's demise. Though some platforms offer asset transfer solutions, they're often product-specific. This project aims to provide a universal solution for managing digital assets, addressing this issue comprehensively.<br /><br />In my dual role as the project leader and developer, I lead the development process, organize stakeholder meetings, and contribute to feature implementation.",
    projectDone: false,
    startDate: new Date("2023-11-0T00:00:00.000Z"),
    latestVersion: "0.1",
    link: "",
    progress: 90,
  },
  {
    title: "Schengen-Borders-Information-Scraper",
    description:
      "This Python script scrapes information about temporary reintroduction of border control in the Schengen Area from the <a href='https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area/temporary-reintroduction-border-control_en' target='_blank'>European Commission's website</a>. You can explore this project by visiting the following URL on the official PyPI website: <a href='https://pypi.org/project/Schengen-Borders-Information-Scraper/' target='_blank'>Schengen Borders Information Scraper on PyPI</a>",
    projectDone: true,
    startDate: new Date("2023-01-0T00:00:00.000Z"),
    latestVersion: "0.0.1",
    link: "https://pypi.org/project/Schengen-Borders-Information-Scraper/",
    progress: 100,
  },
  {
    title: "Phanto",
    description:
      "Phanto is a utility that specializes in UAC bypass and privilege escalation, enabling it to bypass User Account Control on Windows 10 and 11 systems and attain Administrator privileges. In the absence of administrative privileges, Phanto.exe attempts to elevate its own permissions by attempting to execute itself using the administrator token and gain administrator privileges, all without triggering UAC prompts. This type of attack is called a UAC bypass.",
    projectDone: false,
    startDate: new Date("2023-01-0T00:00:00.000Z"),
    latestVersion: "1.0",
    link: "https://github.com/Markus-Stuppnig/Phanto",
    progress: 40,
  },
  {
    title: "FileIOPlus",
    description:
      "FileIOPlus is a Java library designed to simplify file input/output operations. It provides convenient methods and mechanism for setting, storing and retrieving key-value pairs within a text file.",
    projectDone: true,
    startDate: new Date("2020-12-0T00:00:00.000Z"),
    latestVersion: "1.0",
    link: "https://github.com/Markus-Stuppnig/FileIOPlus",
    progress: 100,
  },
] as const;
