import React from "react";
import SectionHeading from "@/components/-General/SectionHeading";
import { projectsData } from "./projectsData";
import SectionDivider from "../-General/SectionDivider";
import Progressbar from "./Progressbar";
import Link from "next/link";

export default function Projects() {
  return (
	<section id="projects" className="mt-[5rem]">
		<div className="grid grid-cols-12 h-[30rem]">
			<div className="col-span-12 md:col-start-4 md:col-span-9 bg-secondary py-[10rem] md:rounded-l-3xl grid grid-cols-12">
				<div className="text-center col-start-2 col-span-10 md:col-start-3 md:col-span-5 flex flex-col items-center justify-center">
					<SectionHeading additional="font-semibold mb-5" textColor="text-mywhite">Projects</SectionHeading>
					<h4 className="text-2xl text-mywhite">Here are some of my projects</h4>
				</div>
			</div>
		</div>
		{/* <SectionDivider /> */}
		<div className="grid grid-cols-3 mt-[10rem]">
			<div className="col-span-3 md:col-span-2 bg-secondary text-mywhite py-[6rem] grid grid-cols-12 md:rounded-r-3xl">
				<div className="col-start-2 md:col-start-3 col-span-10 md:col-span-8 flex flex-col">
					<Link href={projectsData[0].link} target="_blank">
						<SectionHeading additional="font-semibold mb-5" textColor="text-mywhite">{projectsData[0].title}</SectionHeading>
					</Link>
					<div className="w-full grid grid-cols-9">
						<div className="col-start-1 col-span-8 flex flex-col">
							<p className="font-medium text-2xl mb-[2rem]" dangerouslySetInnerHTML={{ __html: projectsData[0].description }} />
							<Progressbar number={projectsData[0].progress} colorDone={"bg-primary"} colorNot={"#fff"} height={"[1.5rem]"} opacityDone={"40"} opacityNot={"20"} />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="grid grid-cols-3 mt-[10rem]">
			<div className="col-span-3 md:col-start-2 md:col-span-2 bg-secondary text-mywhite py-[6rem] grid grid-cols-12 md:rounded-l-3xl">
				<div className="col-start-2 md:col-start-3 col-span-10 md:col-span-8 flex flex-col">
					<Link href={projectsData[1].link} target="_blank">
						<SectionHeading additional="font-semibold mb-5" textColor="text-mywhite">{projectsData[1].title}</SectionHeading>
					</Link>
					<div className="w-full grid grid-cols-9">
						<div className="col-start-1 col-span-8 flex flex-col">
							<p className="font-medium text-2xl mb-[2rem]" dangerouslySetInnerHTML={{ __html: projectsData[1].description }} />
							<Progressbar number={projectsData[1].progress} colorDone={"bg-primary"} colorNot={"#fff"} height={"[1.5rem]"} opacityDone={"40"} opacityNot={"20"} />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="grid grid-cols-3 mt-[10rem]">
			<div className="col-span-3 md:col-span-2 bg-secondary text-mywhite py-[6rem] grid grid-cols-12 md:rounded-r-3xl">
				<div className="col-start-2 md:col-start-3 col-span-10 md:col-span-8 flex flex-col">
					<Link href={projectsData[2].link} target="_blank">
						<SectionHeading additional="font-semibold mb-5" textColor="text-mywhite">{projectsData[2].title}</SectionHeading>
					</Link>
					<div className="w-full grid grid-cols-9">
						<div className="col-start-1 col-span-8 flex flex-col">
							<p className="font-medium text-2xl mb-[2rem]" dangerouslySetInnerHTML={{ __html: projectsData[2].description }} />
							<Progressbar number={projectsData[2].progress} colorDone={"bg-primary"} colorNot={"#fff"} height={"[1.5rem]"} opacityDone={"40"} opacityNot={"20"} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  );
}
