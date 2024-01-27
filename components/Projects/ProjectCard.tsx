"use client";

import React from "react";
import { Project } from "./projectsData";
import Progressbar from "./Progressbar";
import { FcCheckmark } from "react-icons/fc";

export default function ProjectCard({project, index}: {project: Project, index: number}) {
  return (
	<section id={"project" + index} className="mt-[5rem]">
		<div className="flex flex-col justify-center items-center w-full">
			<div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-white rounded-3xl shadow-xl md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-40">
				<div className="flex flex-row text-center mt-10">
					<h1 className="text-2xl font-medium">{project.title}</h1>
					<h1 className="text-2xl font-normal ml-5">v{project.latestVersion}</h1>
				</div>
				<div className="flex flex-row w-11/12 mt-5">
					<Progressbar number={project.progress} colorDone="#41fc03" colorNot="white" height="[5rem]" opacityDone="70" opacityNot="40" />
					{project.progress == 100 && <FcCheckmark className="ml-2" size={20} />}
				</div>
				<div className="mt-10 ml-10 mr-[20rem] mb-7">
					<p>{project.description}</p>
				</div>
				<div className="ml-10 mr-[20rem] mb-7">
					<p>{project.incentive}</p>
				</div>
			</div>
		</div>
	</section>
  );
}
