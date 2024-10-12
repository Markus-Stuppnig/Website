"use client";

import React from "react";
import Image from "next/image";
import { data } from "@/components/miscellaneous/generalData";
import SectionHeading from "../miscellaneous/SectionHeading";

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
          className="flex w-1/2 items-center justify-center ml-[10vh]"
        >
          <Image
            src={data.slogan_img}
            alt="The Future is Cloud Text"
            width={data.slogan_img_size}
            height={100}
            className="transform transition-transform duration-200 hover:scale-105"
          />
        </a>
        <div className="flex flex-col w-1/2 text-center mr-[10vh]">
          <SectionHeading className="text-secondary mt-[10rem] font-semibold mb-5 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
            {data.name}
          </SectionHeading>
          <h4 className="text-3xl font-medium text-secondary transform transition-transform duration-200 hover:scale-105 cursor-pointer">
            {data.main_title}
          </h4>
        </div>
      </div>
    </section>
  );
}
