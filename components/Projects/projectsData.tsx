export interface Project {
  title: string;
  description: string[];
  projectDone: boolean;
  startDate: Date;
  endDate?: Date;
  latestVersion?: string;
  link: string;
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
    link: "https://github.com/Markus-Stuppnig/FileIOPlus",
    progress: 100,
    incentive: [
      "This was one of my first, if not the first project I coded. I had a lot of fun back then."
    ]
  },
  {
    title: "Phanto",
    description: [
      "Phanto is a utility that specializes in UAC bypass and privilege escalation, enabling it to bypass User Account Control on Windows 10 and 11 systems and attain Administrator privileges.",
      "In the absence of administrative privileges, Phanto.exe attempts to elevate its own permissions by attempting to execute itself using the administrator token and gain administrator privileges, all without triggering UAC prompts.",
      "This type of attack is called a UAC bypass."
    ],
    projectDone: false,
    startDate: new Date("2023-01-0T00:00:00.000Z"),
    latestVersion: "1.0",
    link: "https://github.com/Markus-Stuppnig/Phanto",
    progress: 40,
    incentive: [
      "In the beginning of 2023 I deeply looked into Windows and its security vulnerabilities."
    ]
  },
  // {
  //   title: "VSA",
  //   description: [
  //     "Phanto is a utility that specializes in UAC bypass and privilege escalation, enabling it to bypass User Account Control on Windows 10 and 11 systems and attain Administrator privileges.",
  //     "In the absence of administrative privileges, Phanto.exe attempts to elevate its own permissions by attempting to execute itself using the administrator token and gain administrator privileges, all without triggering UAC prompts.",
  //     "This type of attack is called a UAC bypass."
  //   ],
  //   projectDone: false,
  //   startDate: new Date("2023-01-0T00:00:00.000Z"),
  //   latestVersion: "1.0",
  //   links: [
  //     "https://github.com/Markus-Stuppnig/Phanto",
  //   ],
  //   progress: 40,
  //   incentive: [
  //     "In the beginning of 2023 I deeply looked into Windows and its security vulnerabilities."
  //   ]
  // },
] as const;
