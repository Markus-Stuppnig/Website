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
    <section
      id="recommendation"
      className="flex flex-col justify-center items-center w-full"
    >
      <div className="flex flex-col justify-center items-center w-full pt-[10vh] pb-[15vh] px-[8vw] bg-secondary">
        <Heading
          color="white"
          size="text-xl md:text-3xl"
          weight="font-semibold"
          className="mb-[2rem]"
        >
          Recommendations
        </Heading>
        <SectionDivider height="h-[1rem] md:h-[2rem]" />
        <p
          className="text-sm md:text-basePlus md:font-normal animate-slidein text-white text-start"
          dangerouslySetInnerHTML={{ __html: recommendationsData[0].text }}
        />
      </div>

      <Link
        href={recommendationsData[0].person.link}
        target="_blank"
        className="mt-[-6rem] w-3/5 flex flex-row animate-slidein zoom-on-hover-small rounded-2xl shadow-2xl bg-white p-[3rem]"
      >
        <div className="flex flex-row transform">
          <div>
            <Image
              className="rounded-full animate-slidein"
              src={recommendationsData[0].person.imagePath}
              width={90}
              height={90}
              alt={recommendationsData[0].person.alt}
            />
          </div>
          <div className="flex flex-col text-start ml-5">
            <Heading
              color="black"
              size="text-md md:text-mdMinus"
              weight="font-medium"
              zoom={false}
            >
              {recommendationsData[0].person.name}
            </Heading>
            <Heading
              color="black"
              size="text-base md:basePlus"
              weight="font-medium"
              zoom={false}
            >
              {recommendationsData[0].person.position}
            </Heading>
            <Heading
              color="black"
              size="text-base md:basePlus"
              weight="font-regular"
              zoom={false}
            >
              {recommendationsData[0].person.additionalInformation}
            </Heading>
          </div>
        </div>
        <div className="mt-5 ml-10 hidden md:block">
          <SocialIcon
            as="div"
            url={recommendationsData[0].person.link}
            fgColor="#fff"
            bgColor="#4a65ff"
            className="zoom-on-hover-200 animate-slidein"
          />
        </div>
      </Link>
    </section>
  );
}
