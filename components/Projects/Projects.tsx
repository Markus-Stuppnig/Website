import React from "react";
import { projectsData } from "./projectsData";
import SectionHeading from "@/components/miscellaneous/SectionHeading";
import SectionDivider from "@/components/miscellaneous/SectionDivider";
import ProjectCard from "@/components/Projects/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mt-[5rem]">
      <div className="grid grid-cols-12 h-[30rem]">
        <div className="col-span-12 md:col-start-4 md:col-span-9 bg-secondary py-[10rem] md:rounded-l-3xl grid grid-cols-12">
          <div className="text-center col-start-2 col-span-10 md:col-start-3 md:col-span-5 flex flex-col items-center justify-center">
            <SectionHeading className="text-white font-semibold mb-5 hover:underline duration-300">
              Projects
            </SectionHeading>
            <h4 className="text-2xl text-white">
              Here are some of my projects
            </h4>
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
