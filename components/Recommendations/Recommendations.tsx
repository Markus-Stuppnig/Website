"use client";

import React from "react";
import { recommendationsData } from "./recommendationsData";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import SectionHeading from "../miscellaneous/SectionHeading";
import SectionDivider from "../miscellaneous/SectionDivider";

export default function Recommendations() {
  return (
    <section id="about" className="flex justify-center w-full">
      <div className="flex flex-col justify-center items-center w-full text-center">
        <SectionHeading className="text-primary text-[2.2rem] mb-[2rem] font-semibold">
          Recommendations
        </SectionHeading>
        <SectionHeading className="!text-2xl !font-medium text-primary">
          What people say about me
        </SectionHeading>
        <SectionDivider height="h-[1rem] md:h-[4rem]" />

        {recommendationsData.map((recommendation, index) => (
          <div
            key={`recommendation${index}`}
            className="flex flex-col justify-center items-center w-[300rem] transform rotate-[3.5deg] bg-secondary shadow-3xl py-[6rem] text-white"
          >
            <div className="flex flex-col items-center justify-center transform rotate-[-3.5deg] w-11/12 md:w-[45rem] lg:w-[80rem] bg-white rounded-3xl shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-20">
              <div className="flex flex-col ml-[1rem] md:ml-[2rem] text-start">
                <div className="flex flex-row mt-[1rem] md:mt-[2rem] justify-between">
                  <Link
                    href={recommendation.person.link}
                    target="_blank"
                    className="flex flex-row"
                  >
                    <div>
                      <Image
                        className="rounded-full drop-shadow-lg"
                        src={recommendation.person.imagePath}
                        width={90}
                        height={90}
                        alt={recommendation.person.alt}
                      />
                    </div>
                    <div className="flex flex-col text-start ml-5">
                      <h2 className="text-md font-medium text-lg md:text-2xl">
                        {recommendation.person.name}
                      </h2>
                      <h2 className="text-md font-medium text-md md:text-xl">
                        {recommendation.person.position}
                      </h2>
                      <h2 className="text-sm font-medium text-md md:text-xl sm:font-normal 2xl:font-medium">
                        {recommendation.person.additionalInformation}
                      </h2>
                    </div>
                  </Link>
                  <Link
                    href={recommendation.person.link}
                    target="_blank"
                    className="mr-10 hidden md:block"
                  >
                    <SocialIcon as="div" network="linkedin" />
                  </Link>
                </div>
                <div className="mt-10 mb-10 mr-4 ml-0 sm:mr-10 sm:ml-0">
                  <p
                    className="text-xl md:font-normal"
                    dangerouslySetInnerHTML={{ __html: recommendation.text }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
