import React from "react";
import SectionHeading from "../-General/SectionHeading";

export default function Intro() {

  return (
    <section
      className="flex flex-col items-center w-full mt-[5rem] text-center"
    >
      <div
        className="flex flex-col items-center md:w-1/3"
      >
        <SectionHeading>About Me</SectionHeading>

        <p className="text-lg mt-10">I’m Markus, a young and driven cyber defense specialist with a passion for IT, cloud architecture, and cyber security. From the age of 12, I’ve been immersed in coding and technology, fueling my desire to make a positive impact in the field.</p>
      </div>
    </section>
  );
}
