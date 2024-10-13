"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/components/Experience/experienceData";
import ExperienceCard from "@/components/Experience/ExperienceCard";
import Heading from "@/components/miscellaneous/Heading";

export default function Experience() {
  return (
    <div>
      <Heading
        color="primary"
        size="text-xl md:text-3xl"
        className="mb-[5rem] text-center"
      >
        My experience
      </Heading>
      <div className="hidden xl:flex justify-center w-full">
        <span className="relative flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
        </span>
      </div>
      <VerticalTimeline lineColor="#74c1fc" animate={true}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "rgba(243, 244, 246, 0.4)",
                boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "20px",
              }}
              contentArrowStyle={{
                borderRight: "0.6rem solid rgba(250, 250, 250, 0.7)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
              className="zoom-on-hover-200 cursor-pointer"
            >
              <ExperienceCard experience={item} />
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      <div className="hidden xl:flex justify-center w-full">
        <span className="relative flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
        </span>
      </div>
    </div>
  );
}
