import React from "react";
import { projectsData } from "@/components/Projects/projectsData";
import Heading from "@/components/miscellaneous/Heading";
import ProjectCard from "@/components/Projects/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mt-[5rem]">
      <div className="grid grid-cols-12 h-[30rem]">
        <div className="col-span-12 md:col-start-4 md:col-span-9 bg-secondary py-[10rem] md:rounded-l-3xl grid grid-cols-12 zoom-on-hover-200">
          <div className="text-center col-start-2 col-span-10 md:col-start-3 md:col-span-5 flex flex-col items-center justify-center">
            <Heading
              color="white"
              size="text-xl md:text-3xl"
              weight="font-semibold"
              className="mb-5"
            >
              Projects
            </Heading>
            <Heading
              color="white"
              size="text-base md:text-basePlus"
              weight="font-medium"
              capitalize={false}
            >
              Here are some of my projects
            </Heading>
          </div>
        </div>
      </div>

      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectCard project={project} index={index} />
        </React.Fragment>
      ))}
    </section>
  );
}
