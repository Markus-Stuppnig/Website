"use client";

import React from "react";
import Image from "next/image";
import { Journey } from "@/components/Journeys/journeysData";
import SectionHeading from "@/components/miscellaneous/SectionHeading";

export default function JourneySection({
  journey,
  indexOfJourney,
}: {
  journey: Journey;
  indexOfJourney: number;
}) {
  return (
    <section id={"project" + indexOfJourney} className="mt-[5rem]">
      {indexOfJourney % 2 == 0 && (
        <div className="flex flex-col xl:flex-row justify-center items-center w-full">
          <div className="w-2/3 xl:w-2/5 justify-center xl:justify-end xl:mr-[6rem] flex">
            <div className={`${journey.margin}`}>
              <Image
                width={journey.width}
                height={journey.height}
                src={journey.imagePath}
                alt={`Title image of Journey ${journey.title}`}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full xl:w-3/5 flex justify-center items-center xl:justify-start xl:items-start mt-[5rem] xl:mt-[0rem]">
            <div className="flex flex-col xl:ml-[4rem] w-5/6 xl:w-2/3 xl:justify-start xl:items-start text-start">
              <SectionHeading className="text-primary font-semibold mb-5">
                {journey.title}
              </SectionHeading>
              <p
                className="text-[1.5rem] font-medium"
                dangerouslySetInnerHTML={{ __html: journey.description }}
              />
            </div>
          </div>
        </div>
      )}

      {indexOfJourney % 2 != 0 && (
        <div className="flex flex-col xl:flex-row justify-center items-center w-full">
          <div className="block xl:hidden w-2/3 xl:w-2/5 flex justify-center">
            <div className={`${journey.margin}`}>
              <Image
                width={journey.width}
                height={journey.height}
                src={journey.imagePath}
                alt={`Title image of Journey ${journey.title}`}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full xl:w-3/5 xl:mr-[6rem] flex justify-end items-end mt-[5rem] xl:mt-[0rem]">
            <div className="flex flex-col xl:mr-[4rem] w-5/6 xl:w-2/3 xl:justify-start xl:items-start text-start">
              <SectionHeading
                additional="font-semibold mb-5"
                textColor="text-primary"
              >
                {journey.title}
              </SectionHeading>
              <p
                className="text-[1.5rem] font-medium"
                dangerouslySetInnerHTML={{ __html: journey.description }}
              />
            </div>
          </div>
          <div className="hidden xl:block w-2/3 xl:w-2/5 flex justify-center xl:justify-start">
            <div className={`${journey.margin}`}>
              <Image
                width={journey.width}
                height={journey.height}
                src={journey.imagePath}
                alt={`Title image of Journey ${journey.title}`}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
