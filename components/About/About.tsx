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
        <div className="flex w-1/2 items-center justify-center">
          <Image
            src="/cloud.png"
            alt="The Future is Cloud Text"
            width={600}
            height={100}
          />
        </div>
        <div className={`flex flex-col w-1/2 text-center`}>
          <SectionHeading className="text-secondary mt-[10rem] font-semibold mb-5">
            {data.profession}
          </SectionHeading>
          <h4 className="text-2xl text-secondary">{data.slogan}</h4>
        </div>
      </div>
    </section>
  );
}
