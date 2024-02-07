"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "./experienceData";
import SectionHeading from "../-General/SectionHeading";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  
  return (
    <div>
      <SectionHeading additional="mb-[5rem] font-semibold" textColor="text-primary">My experience</SectionHeading>
      <VerticalTimeline lineColor="#74c1fc" animate={true}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: 'rgba(243, 244, 246, 0.4)',
                boxShadow: '0px 0px 10px 4px rgba(0, 0, 0, 0.1)',
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
                background:"white",
                fontSize: "1.5rem",
              }}
            >
              <ExperienceCard experience={item} />
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
  );
}
