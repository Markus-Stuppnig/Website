import React from "react";
import SectionHeading from "@/components/-General/SectionHeading";
import { projectsData } from "./projectsData";

export default function Projects() {
  return (
	<section id="projects" className="mt-[5rem]">
		<SectionHeading>Projects</SectionHeading>
		<div className="flex justify-center w-full">
			<div className="flex items-center text-center w-full md:w-1/3">
				<p>Here are some of my projects</p>
			</div>
		</div>
		<div>
			{projectsData.map((item, index) => (
				<React.Fragment key={index}>
					<div className="bg-white shadow-2xl">
						<h2 className="text-lg">{item.title}</h2>
					</div>
				</React.Fragment>
			))}
		</div>
	</section>
  );
}
