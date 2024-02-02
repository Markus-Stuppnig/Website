import React from "react";
import SectionHeading from "@/components/-General/SectionHeading";
import { projectsData } from "./projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
	<section id="projects" className="mt-[5rem]">
		<div className="flex justify-center w-full">
      		<div className="flex flex-col justify-start w-full md:w-1/3 text-center">
				<SectionHeading>Projects</SectionHeading>
				<p>Here are some of my projects</p>
			</div>
		</div>
		<div>
			{projectsData.map((item, index) => (
				<React.Fragment key={index}>
					<ProjectCard project={item} indexOfProject={index} />
				</React.Fragment>
			))}
		</div>
	</section>
  );
}
