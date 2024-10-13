"use client";

import React from "react";
import { recommendationsData } from "./recommendationsData";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Heading from "@/components/miscellaneous/Heading";
import SectionDivider from "@/components/miscellaneous/SectionDivider";

export default function Recommendations() {
  return (
    <section id="about" className="flex justify-center w-full">
      <div className="flex flex-col justify-center items-center w-full text-center">
        <Heading
          color="primary"
          size="text-xl md:text-3xl"
          weight="font-semibold"
          className="mb-[2rem]"
        >
          Recommendations
        </Heading>
        <Heading
          color="primary"
          size="text-md md:text-mdPlus"
          weight="font-medium"
        >
          What people say about me
        </Heading>
        <SectionDivider height="h-[1rem] md:h-[4rem]" />

        {recommendationsData.map((recommendation, index) => (
          <div
            key={`recommendation${index}`}
            className="flex flex-col justify-center items-center w-full shadow-inner shadow-3xl py-[5vw] text-white bg-secondary"
          >
            <div className="flex flex-col items-center justify-center w-11/12 md:w-[85vw]">
              <div className="flex flex-col ml-[1rem] md:ml-[2rem] text-start">
                <Link
                  href={recommendation.person.link}
                  target="_blank"
                  className="flex flex-row zoom-on-hover-200"
                >
                  <div className="flex flex-row transform">
                    <div>
                      <Image
                        className="rounded-full animate-slidein"
                        src={recommendation.person.imagePath}
                        width={90}
                        height={90}
                        alt={recommendation.person.alt}
                      />
                    </div>
                    <div className="flex flex-col text-start ml-5">
                      <Heading
                        color="white"
                        size="text-md md:text-mdMinus"
                        weight="font-medium"
                      >
                        {recommendation.person.name}
                      </Heading>
                      <Heading
                        color="white"
                        size="text-base md:basePlus"
                        weight="font-medium"
                      >
                        {recommendation.person.position}
                      </Heading>
                      <Heading
                        color="white"
                        size="text-base md:basePlus"
                        weight="font-regular"
                      >
                        {recommendation.person.additionalInformation}
                      </Heading>
                    </div>
                  </div>
                  <div className="mt-5 ml-10 hidden md:block">
                    <SocialIcon
                      as="div"
                      url={recommendation.person.link}
                      bgColor="#fff"
                      fgColor="#4a65ff"
                      className="zoom-on-hover-200 animate-slidein"
                    />
                  </div>
                </Link>
                <div className="mt-10 sm:mr-10">
                  <p
                    className="text-sm md:text-base md:font-normal animate-slidein"
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
