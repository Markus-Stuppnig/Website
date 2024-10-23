import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuDatabase, LuCode } from "react-icons/lu";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaCodeBranch, FaUserDoctor, FaPencil } from "react-icons/fa6";

export interface Experience {
  title: string;
  location: string;
  description: string[];
  icon: JSX.Element;
  date: string;
  education: boolean;
}

export const experiencesData: Experience[] = [
  {
    title: "Technologisches Gewerbemuseum",
    location: "Student Representative HIT - 556 students - Vienna",
    description: [
      "Within the Computer Science branch I was elected as the Department Representative for 556 students.",
      "In this role, I represent my peers and help organize events and initiatives to enhance our school experience.",
    ],
    icon: React.createElement(FaPencil),
    date: "September 2024 - present",
    education: false,
  },
  {
    title: "Digital Stroke Doctor Project Manager",
    location: "Diploma Project - Vienna",
    description: [
      "I'm developing the Digital Stroke Doctor App with a team of four for my diploma.",
      "The app aids rescue personnel in the initial treatment of strokes by using AI to provide immediate diagnosis and action recommendations.",
    ],
    icon: React.createElement(FaUserDoctor),
    date: "September 2024 - present",
    education: false,
  },
  {
    title: "Giesecke+Devrient Software Architect",
    location: "Summer Internship - Dubai, United Arabic Emirates",
    description: [
      "Developing a competitor analysis platform for market intelligence.",
      "Retrieving competitor data (business strategies, prices, products and features) from social media and analyzing it using AI.",
    ],
    icon: React.createElement(FaCodeBranch),
    date: "July 2024 - August 2024",
    education: false,
  },
  {
    title: "VSA Project Manager",
    location: "E-Commerce Project - Vienna",
    description: [
      "As a team of six, we developed a platform that helps people manage and pass on their digital legacy.",
    ],
    icon: React.createElement(LuDatabase),
    date: "September 2023 - present",
    education: false,
  },
  {
    title: "Siemens Software Engineer",
    location: "Summer Internship - Vienna",
    description: [
      "Adding a SaaS feature to import offline SimBench powergrids into an internal powergrid of a Network Analysis Tool for Supervisory Control and Data Acquisition (SCADA).",
      "Visualizing powerflow and state estimation data with an Angular WebServer that sends requests to a Java Backend via Spring Boot on the same machine for offline usage.",
    ],
    icon: React.createElement(LuCode),
    date: "July 2023 - August 2023",
    education: false,
  },
  {
    title: "Washington Community High School",
    location: "ISCED 3 - Exchange Semester - Washington, Illinois",
    description: [
      "Grateful to experience American education during my exchange semester in Illinois where I received an Honorary High School Diploma, acknowledging the completion of graduation requirements.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "December 2022 - May 2023",
    education: true,
  },
  {
    title: "Technologisches Gerwerbemuseum",
    location: "ISCED 5 - Technical College - Vienna",
    description: [
      "I decided to study Computer Science at TGM, one of Vienna's largest and most prestigious technical schools with nearly 3,000 students, where I focus on Data Science.",
    ],
    icon: React.createElement(HiOutlineDesktopComputer),
    date: "September 2020 - present",
    education: true,
  },
  {
    title: "Polgargymnasium",
    location: "ISCED 2 - Bundesrealgymnasium (BRG) - Vienna",
    description: [
      "Due to my huge interest in mathematics, I decided to pursue my education in the mathematics oriented track.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "September 2016 - June 2020",
    education: true,
  },
] as const;
