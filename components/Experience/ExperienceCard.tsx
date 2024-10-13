"use client";

import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "@/components/Experience/experienceData";
import Heading from "@/components/miscellaneous/Heading";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div>
      <Heading
        zoom={false}
        className="!text-primary !font-semibold !text-base md:!text-basePlus !mb-2"
      >
        {experience.title}
      </Heading>
      <Heading
        zoom={false}
        className="!text-black !font-medium !text-base !mt-0 !mb-5"
      >
        {experience.location}
      </Heading>
      {experience.description.map((line: string, index: number) => (
        <React.Fragment key={index}>
          <p className="!mt-3 !font-normal !text-base">{line}</p>
        </React.Fragment>
      ))}
    </div>
  );
}
