"use client";

import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "@/components/Experience/experienceData";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div>
      <h3 className="!font-semibold !text-2xl text-primary mb-1">
        {experience.title}
      </h3>
      <p className="!font-medium !mt-0 !mb-5 !text-lg">{experience.location}</p>
      {experience.description.map((line: string, index: number) => (
        <React.Fragment key={index}>
          <p className="!mt-1 !font-normal !text-xl">{line}</p>
          {index !== experience.description.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
}
