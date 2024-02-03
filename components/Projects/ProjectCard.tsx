"use client";

import React from "react";
import { Project } from "./projectsData";
import Progressbar from "./Progressbar";
import { FcCheckmark } from "react-icons/fc";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({project, indexOfProject}: {project: Project, indexOfProject: number}) {

	return (
		<section id={"project" + indexOfProject} className="mt-[5rem]">
			<div className="flex flex-col justify-center items-center w-full">
				<motion.div
					id={"div" + indexOfProject}
					initial={{ scale: 1 }}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3 }}
					viewport={{ once: false }}
					className="flex flex-col items-center justify-center w-full md:w-1/2 bg-white rounded-3xl shadow-xl hover:shadow-2xl md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-40 hover:md:bg-opacity-60"
				>
					<Link href={project.link} target="_blank" className="flex flex-col items-center justify-center">
						<div className="flex flex-row text-center mt-10">
							<h1 className="text-2xl font-medium">{project.title}</h1>
							<h1 className="text-2xl font-normal ml-5">v{project.latestVersion}</h1>
						</div>
						<div className="flex flex-row w-11/12 mt-5">
							<Progressbar number={project.progress} colorDone="#ccf" colorNot="#eee" height="[5rem]" opacityDone="50" opacityNot="40" />
							{project.progress == 100 && <FcCheckmark className="ml-2" size={20} />}
						</div>
						<div className="mt-10 ml-10 mr-10 mb-7">
							{project.description.map((line: string, index: number) => (
								<React.Fragment key={index}>
									<p>{line}</p>
									{index !== project.description.length - 1 && <br />}
								</React.Fragment>
							))}
						</div>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
