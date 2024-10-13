import React from "react";
import { journeysData } from "./journeysData";
import JourneySection from "@/components/Journeys/JourneySection";
import Heading from "@/components/miscellaneous/Heading";
import SectionDivider from "@/components/miscellaneous/SectionDivider";

export default function Journeys() {
  return (
    <section
      id="projects"
      className="mt-[5rem] flex flex-col justify-center items-center"
    >
      <div className="mt-[4rem] mb-[14rem] flex justify-center items-center w-[300rem] h-[35rem] bg-secondary transform rotate-[3.5deg]">
        <div className="flex flex-col w-full text-white text-center transform -rotate-[3.5deg]">
          <Heading
            color="white"
            size="text-xl md:text-3xl"
            weight="font-semibold"
            className="mb-5"
          >
            Journeys
          </Heading>
          <Heading
            color="white"
            size="text-base md:text-basePlus"
            weight="font-medium"
            capitalize={false}
          >
            This page is about my life
          </Heading>
        </div>
      </div>

      <div className="flex flex-col h-full">
        {journeysData.map((item, index) => (
          <React.Fragment key={index}>
            <JourneySection journey={item} indexOfJourney={index} />
            <SectionDivider height="h-[15rem]" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
