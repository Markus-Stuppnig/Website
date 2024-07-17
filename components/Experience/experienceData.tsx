import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuDatabase, LuCode } from "react-icons/lu";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaCodeBranch } from "react-icons/fa6";

export interface Experience {
  title: string;
  location: string;
  description: string[];
  icon: JSX.Element;
  date: string;
}


export const experiencesData: Experience[] = [
  {
    title: "Polgargymnasium",
    location: "ISCED 2 - Bundes Real Gymnasium - Vienna, Austria",
    description: [
      "Due to my huge interest in mathematics, I decided to pursue my education in the mathematics oriented track (Realgymnasium).",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "September 2016 - June 2020",
  },
  {
    title: "Technologisches Gerwerbemuseum",
    location: "ISCED 5 - Information Technology - Vienna, Austria",
    description: [
      "I am very proud to consider myself a student of this technologically advanced school. My interest in technology dates back to my early childhood, and this school has truly allowed me to blossom.",
      "As an active member of the students parliament, my goal is to improve cooperation among all 2200 students and create a better study environment for everyone.",
    ],
    icon: React.createElement(HiOutlineDesktopComputer),
    date: "September 2020 - December 2022",
  },
  {
    title: "Washington Community High School",
    location: "ISCED 3 - Exchange Semester - Washington, Illinois",
    description: [
      "Grateful for the opportunity to experience American education during my exchange semester in Illinois.",
      "I am a proud recipient of an Honorary High School Diploma from Washington Community High School, acknowledging the completion of graduation requirements. This semester has taught me so much and I truly value the time I spent there and the friends I made.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "December 2022 - May 2023",
  },
  {
    title: "Siemens Software Engineer",
    location: "Summer Internship - Vienna, Austria",
    description: [
      "Adding a SaaS feature to import offline SimBench powergrids into an internal powergrid of a Network Analysis Tool for Supervisory Control and Data Acquisition (SCADA).",
      "Visualizing powerflow and state estimation data with an Angular WebServer that sends requests to a Java Backend via Spring Boot on the same machine for offline usage.",
    ],
    icon: React.createElement(LuCode),
    date: "July 2023 - August 2023",
  },
  {
    title: "Technologisches Gerwerbemuseum",
    location: "ISCED 5 - Data Science - Vienna, Austria",
    description: [
      "Having returned from america and completed my summer internship, I now find myself back in 12th grade in Vienna. I have decided to pursue the Data Science track within the system technology branch, as I find it the most interesting.",
    ],
    icon: React.createElement(LuDatabase),
    date: "September 2023 - present",
  },
  {
    title: "Giesecke+Devrient Software Architect",
    location: "Summer Internship - Dubai, United Arabic Emirates",
    description: [
      "Developing an unbeatable competitor analysis platform for market intelligence. Retrieving data from competitors websites and digital identity content creators on social media and saving it to a database.",
      "This data contains business strategies, prices, products and features and will be fed into an LLM which summarizes and analyzes it as well as recommending ways to improve sales. Finally, a report will be sent to the C-Levels via mail automatically every month.",
    ],
    icon: React.createElement(FaCodeBranch),
    date: "July 2024 - August 2024",
  },
] as const;
