export interface Project {
  title: string;
  description: string[];
  projectDone: boolean;
  startDate: Date;
  endDate?: Date;
  latestVersion?: string;
  links: string[];
  imagePath?: string;
  contributers?: Contributor[];
  progress: number;
  incentive?: string[];
}

export interface Contributor {
  name: string;
  description: string[];
  additionalInformation: string[];
  imagePath?: string;
}

export const projectsData: Project[] = [
  {
    title: "FileIOPlus",
    description: [
      "FileIOPlus is a Java library designed to simplify file input/output operations. It provides convenient methods and mechanism for setting, storing and retrieving key-value pairs within a text file.",
    ],
    projectDone: true,
    startDate: new Date("2020-12-0T00:00:00.000Z"),
    latestVersion: "1.0",
    links: [
      "https://github.com/Markus-Stuppnig/FileIOPlus",
    ],
    progress: 32,
    incentive: [
      "This was one of my first, if not the first project I coded. I had a lot of fun back then."
    ]
  },
] as const;
