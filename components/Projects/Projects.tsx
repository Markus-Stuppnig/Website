import React from "react";
import SectionHeading from "@/components/-General/SectionHeading";
import { projectsData } from "./projectsData";
import ProjectCard from "./ProjectCard";
import SectionDivider from "../-General/SectionDivider";
import Progressbar from "./Progressbar";
import Link from "next/link";

export default function Projects() {
  return (
	<section id="projects" className="mt-[5rem]">
		<div className="flex w-full h-[30rem]">
			<div className="w-1/3 h-full" />
			<div className="flex flex-col w-full justify-start md:w-2/3 h-full bg-secondary px-[10rem] rounded-l-3xl">
				<div className="text-center w-2/3 flex flex-col items-center justify-center h-full">
					<SectionHeading additional="font-semibold mb-5" textColor="text-mywhite">Projects</SectionHeading>
					<h4 className="text-2xl text-mywhite">Here are some of my projects</h4>
				</div>
			</div>
		</div>
		<SectionDivider />
		<div className="grid grid-cols-3">
			<div className="col-span-2 bg-secondary text-mywhite py-[6rem] grid grid-cols-5 rounded-r-3xl">
				<Link href={projectsData[0].link} target="_blank" className="col-start-2 col-span-3 flex flex-col">
					<SectionHeading additional="font-semibold mb-5" textColor="text-mywhite">{projectsData[0].title}</SectionHeading>
					<div className="w-full grid grid-cols-9">
						<div className="col-start-1 col-span-8 flex flex-col">
							<p className="font-medium text-2xl mb-[2rem]" dangerouslySetInnerHTML={{ __html: projectsData[0].description }} />
							<Progressbar number={projectsData[0].progress} colorDone={"bg-primary"} colorNot={"#fff"} height={"[1.5rem]"} opacityDone={"40"} opacityNot={"20"} />
						</div>
					</div>
				</Link>
			</div>
		</div>
		<div className="grid grid-cols-3 mt-[10rem]">
			<div className="col-start-2 col-span-2 bg-secondary text-mywhite py-[6rem] grid grid-cols-5 rounded-l-3xl">
				<Link href={projectsData[1].link} target="_blank" className="col-start-2 col-span-3 flex flex-col">
					<SectionHeading additional="font-semibold mb-5" textColor="text-mywhite">{projectsData[1].title}</SectionHeading>
					<div className="w-full grid grid-cols-9">
						<div className="col-start-1 col-span-8 flex flex-col">
							<p className="font-medium text-2xl mb-[2rem]" dangerouslySetInnerHTML={{ __html: projectsData[1].description }} />
							<Progressbar number={projectsData[1].progress} colorDone={"bg-primary"} colorNot={"#fff"} height={"[1.5rem]"} opacityDone={"40"} opacityNot={"20"} />
						</div>
					</div>
				</Link>
			</div>
		</div>
	</section>
  );
}
