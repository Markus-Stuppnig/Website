"use client";

import React from "react";
import Heading from "@/components/miscellaneous/Heading";
import { Project } from "@/components/Projects/projectsData";
import Link from "next/link";
import Progressbar from "./Progressbar";
import { FaGithub, FaGlobe, FaPython } from "react-icons/fa6";

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
          <div className="zoom-on-hover-small animate-moveright col-span-3 md:col-span-2 bg-secondary text-white py-[6rem] grid grid-cols-12 md:rounded-r-3xl">
            <div className="col-start-2 md:col-start-3 col-span-10 md:col-span-8 flex flex-col">
              <Heading
                color="white"
                size="text-xl md:text-3xl"
                weight="font-semibold"
                zoom={false}
                animate="false"
                className="mb-5"
              >
                {project.title}
              </Heading>
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
            <div className="col-start-11 col-span-1 py-10 rounded-3xl flex flex-col items-center text-secondary space-y-3">
              {project.weblink != "" ? (
                <Link
                  href={project.weblink}
                  target="_blank"
                  className="bg-white rounded-full p-1"
                >
                  <FaGlobe size={30} />
                </Link>
              ) : null}
              {project.githublink != "" ? (
                <Link
                  href={project.githublink}
                  target="_blank"
                  className="bg-white rounded-full p-1"
                >
                  <FaGithub size={30} />
                </Link>
              ) : null}
              {project.pypilink != "" ? (
                <Link
                  href={project.pypilink}
                  target="_blank"
                  className="bg-white rounded-full p-1"
                >
                  <FaPython size={30} />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      )}
      {index % 2 != 0 && (
        <div className="grid grid-cols-3 mt-[10rem]">
          <div className="zoom-on-hover-small animate-moveleft col-span-3 md:col-start-2 md:col-span-2 bg-secondary text-white py-[6rem] grid grid-cols-12 md:rounded-l-3xl">
            <div className="col-start-2 md:col-start-3 col-span-10 md:col-span-8 flex flex-col">
              <Heading
                color="white"
                size="text-xl md:text-3xl"
                weight="font-semibold"
                zoom={false}
                className="mb-5"
              >
                {project.title}
              </Heading>
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
            <div className="col-start-11 col-span-1 py-10 rounded-3xl flex flex-col items-center text-secondary space-y-3">
              {project.weblink != "" ? (
                <Link
                  href={project.weblink}
                  target="_blank"
                  className="bg-white rounded-full p-1"
                >
                  <FaGlobe size={30} />
                </Link>
              ) : null}
              {project.githublink != "" ? (
                <Link
                  href={project.githublink}
                  target="_blank"
                  className="bg-white rounded-full p-1"
                >
                  <FaGithub size={30} />
                </Link>
              ) : null}
              {project.pypilink != "" ? (
                <Link
                  href={project.pypilink}
                  target="_blank"
                  className="bg-white rounded-full p-1"
                >
                  <FaPython size={30} />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
