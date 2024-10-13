import React from "react";
import { projectsData } from "@/components/Projects/projectsData";
import Heading from "@/components/miscellaneous/Heading";
import ProjectCard from "@/components/Projects/ProjectCard";
import SectionDivider from "../miscellaneous/SectionDivider";

export default function Growth() {
  return (
    <section id="growth" className="mt-[5rem]">
      <div className="grid grid-cols-12 h-[30rem]">
        <div className="col-span-12 md:col-start-4 md:col-span-6 bg-secondary py-[10rem] rounded-[5rem] flex justify-center items-center text-center zoom-on-hover-small">
          <div>
            <Heading
              color="white"
              size="text-xl md:text-3xl"
              weight="font-semibold"
              className="mb-5"
            >
              Personal Growth
            </Heading>
            <Heading
              color="white"
              size="text-base md:text-basePlus"
              weight="font-medium"
              capitalize={false}
            >
              Life is about creating yourself
            </Heading>
          </div>
        </div>
      </div>
      <div className="bg-secondary w-full h-[13rem] mt-[4rem] flex justify-center items-center shadow-3xl">
        <div className="flex w-3/4 justify-center items-center text-center">
          <Heading color="white" size="text-md" className="w-1/4">
            Books
          </Heading>
          <Heading color="white" size="text-md" className="w-1/4">
            Nutrition
          </Heading>
          <Heading color="white" size="text-md" className="w-1/4">
            Fitness
          </Heading>
          <Heading color="white" size="text-md" className="w-1/4">
            Cybernetics
          </Heading>
        </div>
      </div>

      <SectionDivider height="h-[30rem]" />
      <div className="flex justify-center w-full">
        <div className="w-4/5">
          <Heading
            color="black"
            size="text-2xl"
            weight="font-semibold"
            className="mt-[5rem]"
          >
            Introduction
          </Heading>
        </div>
      </div>
    </section>
  );
}
