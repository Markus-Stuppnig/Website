"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/miscellaneous/SectionHeading";
import { Project } from "@/components/Projects/projectsData";
import Link from "next/link";
import Progressbar from "./Progressbar";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <section id={"project" + index} className="mt-[5rem]">
      {index % 2 == 0 && (
        <div className="grid grid-cols-3 mt-[10rem]">
          <div className="col-span-3 md:col-span-2 bg-secondary text-white py-[6rem] grid grid-cols-12 md:rounded-r-3xl">
            <div className="col-start-2 md:col-start-3 col-span-10 md:col-span-8 flex flex-col">
              <Link href={project.link} target="_blank">
                <SectionHeading className="text-white font-semibold mb-5">
                  {project.title}
                </SectionHeading>
              </Link>
              <div className="w-full grid grid-cols-9">
                <div className="col-start-1 col-span-8 flex flex-col">
                  <p
                    className="font-medium text-2xl mb-[2rem]"
                    dangerouslySetInnerHTML={{
                      __html: project.description,
                    }}
                  />
                  <Progressbar
                    number={project.progress}
                    colorDone={"bg-primary"}
                    colorNot={"#fff"}
                    height={"[1.5rem]"}
                    opacityDone={"40"}
                    opacityNot={"20"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {index % 2 != 0 && (
        <div className="grid grid-cols-3 mt-[10rem]">
          <div className="col-span-3 md:col-start-2 md:col-span-2 bg-secondary text-white py-[6rem] grid grid-cols-12 md:rounded-l-3xl">
            <div className="col-start-2 md:col-start-3 col-span-10 md:col-span-8 flex flex-col">
              <Link href={project.link} target="_blank">
                <SectionHeading className="text-white font-semibold mb-5">
                  {project.title}
                </SectionHeading>
              </Link>
              <div className="w-full grid grid-cols-9">
                <div className="col-start-1 col-span-8 flex flex-col">
                  <p
                    className="font-medium text-2xl mb-[2rem]"
                    dangerouslySetInnerHTML={{
                      __html: project.description,
                    }}
                  />
                  <Progressbar
                    number={project.progress}
                    colorDone={"bg-primary"}
                    colorNot={"#fff"}
                    height={"[1.5rem]"}
                    opacityDone={"40"}
                    opacityNot={"20"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
