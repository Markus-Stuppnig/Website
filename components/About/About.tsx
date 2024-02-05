"use client";

import React from "react";
import SectionHeading from "../-General/SectionHeading";

export default function About() {

  return (
    <section id="about" className="flex justify-center w-full">
      <div className="flex flex-col justify-start w-5/6 md:w-1/3 text-center">
        <SectionHeading>About Me</SectionHeading>
        <p className="text-lg font-medium">I’m Markus, a young, driven and passionate full-stack developer. I am particularly expertised in cloud architecture, cyber security and recently data science as well.</p>
        <p className="text-lg mt-10 font-medium">I plan to use this website as my personal portfolio, please keep in mind that this website is still in progress.</p>
      </div>
    </section>
  );
}
