"use client";

import React from "react";
import Image from "next/image";
import { data } from "@/components/miscellaneous/generalData";
import Heading from "../miscellaneous/Heading";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center w-full md:h-screen items-center mt-[5rem] xl:mt-0"
    >
      <div className="flex flex-col xl:flex-row justify-center items-center h-[40rem] w-full">
        <a
          href="https://en.wikipedia.org/wiki/Carpe_diem"
          target="_blank"
          className="flex w-1/2 items-center justify-center ml-[10vh] animate-slidein"
        >
          <Image
            src={data.slogan_img}
            alt="The Future is Cloud Text"
            width={data.slogan_img_size}
            height={100}
            className="zoom-on-hover-200"
          />
        </a>
        <div className="flex flex-col w-1/2 text-center mr-[10vh]">
          <Heading
            color="secondary"
            size="text-xl md:text-3xl"
            className="mt-[10rem] mb-5"
          >
            {data.name}
          </Heading>
          <Heading
            color="secondary"
            size="text-md md:text-mdPlus"
            weight="font-medium"
          >
            {data.main_title}
          </Heading>
        </div>
      </div>
    </section>
  );
}
