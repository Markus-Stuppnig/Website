import React from "react";
import Heading from "@/components/miscellaneous/Heading";
import SectionDivider from "../miscellaneous/SectionDivider";
import { data } from "@/components/miscellaneous/generalData";

export default function Growth() {
  return (
    <section id="growth">
      <div className="grid grid-cols-12 min-h-screen">
        <div className="mt-[5rem] h-[30rem] col-span-12 md:col-start-4 md:col-span-6 bg-secondary py-[10rem] rounded-[5rem] flex justify-center items-center text-center zoom-on-hover-small">
          <div>
            <Heading
              color="white"
              size="text-xl md:text-3xl"
              weight="font-semibold"
              className="mb-5"
            >
              Personal Growth
            </Heading>
            <Heading
              color="white"
              size="text-base md:text-basePlus"
              weight="font-medium"
              capitalize={false}
            >
              Life is about creating yourself
            </Heading>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="mt-[-10rem] w-2/3 h-[8rem] flex justify-center items-center border-b-4 border-secondary zoom-on-hover-small">
          <div className="flex w-full justify-center items-center text-center">
            <a href="#fitness" className="w-1/4">
              <Heading color="black" size="text-mdPlus">
                Fitness
              </Heading>
            </a>
            <a href="#nutrition" className="w-1/4">
              <Heading color="black" size="text-mdPlus">
                Nutrition
              </Heading>
            </a>
            <a href="#knowledge" className="w-1/4">
              <Heading color="black" size="text-mdPlus">
                Knowledge
              </Heading>
            </a>
            <a href="#mindset" className="w-1/4">
              <Heading color="black" size="text-mdPlus">
                Mindset
              </Heading>
            </a>
          </div>
        </div>
      </div>

      <SectionDivider height="h-[8rem]" />
      <div className="flex justify-center w-full">
        <div className="w-2/3 text-base">
          <Heading color="black" size="text-2xl" weight="font-semibold">
            Introduction
          </Heading>
          <SectionDivider height="h-[30rem]" />

          <Heading
            id="fitness"
            color="black"
            size="text-2xl"
            weight="font-semibold"
          >
            Fitness
          </Heading>
          <SectionDivider height="h-[15rem]" />

          <Heading
            id="nutrition"
            color="black"
            size="text-2xl"
            weight="font-semibold"
            className="mb-[2rem]"
          >
            Nutrition
          </Heading>

          <div className="flex flex-col">
            <p className="text-gray-800 md:leading-normal">
              <em>{data.text3}</em>
            </p>
            <p className="italic">- Hippocrates</p>
          </div>

          <SectionDivider height="h-[15rem]" />

          <Heading
            id="knowledge"
            color="black"
            size="text-2xl"
            weight="font-semibold"
          >
            Knowledge
          </Heading>
          <SectionDivider height="h-[15rem]" />

          <Heading
            id="mindset"
            color="black"
            size="text-2xl"
            weight="font-semibold"
          >
            Mindset
          </Heading>
        </div>
      </div>
    </section>
  );
}
