"use client";

import React from "react";
import Image from "next/image";
import { Journey } from "@/components/Journeys/journeysData";
import Heading from "@/components/miscellaneous/Heading";

export default function JourneySection({
  journey,
  index,
}: {
  journey: Journey;
  index: number;
}) {
  return (
    <section id={"project" + index} className="mt-[5rem]">
      {index % 2 == 0 && (
        <div className="flex flex-col xl:flex-row justify-center items-center w-full">
          <div className="w-2/3 xl:w-2/5 justify-center xl:justify-end xl:mr-[6rem] flex">
            <Image
              width={journey.width}
              height={1}
              src={journey.imagePath}
              alt={`Title image of Journey ${journey.title}`}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="w-full xl:w-3/5 flex justify-center items-center xl:justify-start xl:items-start mt-[5rem] xl:mt-[0rem]">
            <div className="flex flex-col xl:ml-[4rem] w-5/6 xl:w-2/3 xl:justify-start xl:items-start text-start">
              <a href={journey.link}>
                <Heading color="primary" className="mb-5">
                  {journey.title}
                </Heading>
              </a>
              <p
                className="text-[1.5rem] font-medium"
                dangerouslySetInnerHTML={{ __html: journey.description }}
              />
            </div>
          </div>
        </div>
      )}

      {index % 2 != 0 && (
        <div className="flex flex-col xl:flex-row justify-center items-center w-full">
          <div className="xl:hidden w-2/3 xl:w-2/5 flex justify-center">
            <Image
              width={journey.width}
              height={1}
              src={journey.imagePath}
              alt={`Title image of Journey ${journey.title}`}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="w-full xl:w-3/5 xl:mr-[6rem] flex justify-end items-end mt-[5rem] xl:mt-[0rem]">
            <div className="flex flex-col xl:mr-[4rem] w-5/6 xl:w-2/3 xl:justify-start xl:items-start text-start">
              <Heading color="primary" className="mb-5">
                {journey.title}
              </Heading>
              <p
                className="text-[1.5rem] font-medium"
                dangerouslySetInnerHTML={{ __html: journey.description }}
              />
            </div>
          </div>
          <div className="xl:block w-2/3 xl:w-2/5 flex justify-center xl:justify-start">
            <Image
              width={journey.width}
              height={1}
              src={journey.imagePath}
              alt={`Title image of Journey ${journey.title}`}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
