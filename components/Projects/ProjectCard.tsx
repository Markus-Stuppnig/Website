"use client";

import React from "react";
import Heading from "@/components/miscellaneous/Heading";
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
    <section id={"project" + index} className="mt-[5rem] zoom-on-hover-200">
      {index % 2 == 0 && (
        <div className="grid grid-cols-3 mt-[10rem]">
          <div className="col-span-3 md:col-span-2 bg-secondary text-white py-[6rem] grid grid-cols-12 md:rounded-r-3xl">
            <div className="col-start-2 md:col-start-3 col-span-10 md:col-span-8 flex flex-col">
              <Link href={project.link} target="_blank">
                <Heading
                  color="white"
                  size="text-xl md:text-3xl"
                  weight="font-semibold"
                  zoom={false}
                  className="mb-5"
                >
                  {project.title}
                </Heading>
              </Link>
              <div className="w-full grid grid-cols-9">
                <div className="col-start-1 col-span-8 flex flex-col">
                  <p
                    className="font-medium text-basePlus mb-[2rem]"
                    dangerouslySetInnerHTML={{
                      __html: project.description,
                    }}
                  />
                  <Progressbar
                    number={project.progress}
                    colorDone={"bg-primary"}
                    colorNot={"#fff"}
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
                <Heading
                  color="white"
                  size="text-xl md:text-3xl"
                  weight="font-semibold"
                  zoom={false}
                  className="mb-5"
                >
                  {project.title}
                </Heading>
              </Link>
              <div className="w-full grid grid-cols-9">
                <div className="col-start-1 col-span-8 flex flex-col">
                  <p
                    className="font-medium text-basePlus mb-[2rem]"
                    dangerouslySetInnerHTML={{
                      __html: project.description,
                    }}
                  />
                  <Progressbar
                    number={project.progress}
                    colorDone={"bg-primary"}
                    colorNot={"#fff"}
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
