import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuDatabase, LuCode } from "react-icons/lu";
import { HiOutlineDesktopComputer } from "react-icons/hi";

export const projectsData = [
  {
    title: "Polgargymnasium",
    location: "ISCED 2 - Bundes Real Gymnasium - Vienna, Austria",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "September 2016 - June 2020",
  },
  {
    title: "Technologisches Gerwerbemuseum (TGM)",
    location: "ISCED 5 - Information Technology - Vienna, Austria",
    description:
      "The TGM is a HTL ",
    icon: React.createElement(HiOutlineDesktopComputer),
    date: "September 2020 - December 2022",
  },
  {
    title: "Washington Community High School",
    location: "ISCED 3 - Exchange Semester - Washington, Illinois",
    description:
      "Grateful for the opportunity to experience American education during my exchange semester in Illinois. I am a proud recipient of an Honorary High School Diploma from Washington Community High School, acknowledging the completion of graduation requirements. This semester has taught me so much and I truly value the time I spent there and the friends I made.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2022 - June 2023",
  },
  {
    title: "Siemens Full-Stack Developer",
    location: "Summer Internship - Vienna, Austria",
    description:
      "Adding a SaaS feature to import offline SimBench powergrids into an internal powergrid of a Network Analysis Tool for Supervisory Control and Data Acquisition (SCADA). Visualizing powerflow and state estimation data with an Angular WebServer that sends requests to a Java Backend via Spring Boot on the same machine for offline usage.",
    icon: React.createElement(LuCode),
    date: "July 2022 - August 2023",
  },
  {
    title: "Technologisches Gerwerbemuseum (TGM)",
    location: "ISCED 5 - Data Science - Vienna, Austria",
    description:
      "",
      icon: React.createElement(LuDatabase),
    date: "September 2023 - present",
  },
] as const;
