"use client";

import React from "react";
import SectionHeading from "../-General/SectionHeading";

export default function About() {

  return (
    <section id="about" className="flex justify-center w-full">
      <div className="flex flex-col justify-start w-5/6 md:w-1/3 text-center">
        <SectionHeading>About Me</SectionHeading>
        <p className="text-lg">I’m Markus, a young and driven cyber defense specialist with a passion for IT, cloud architecture, and cyber security. From the age of 12, I’ve been immersed in coding and technology, fueling my desire to make a positive impact in the field.</p>
        <p className="text-lg mt-10">I plan to use this website as my personal portfolio showingcasing some of my projects and personal life.</p>
      </div>
    </section>
  );
}
