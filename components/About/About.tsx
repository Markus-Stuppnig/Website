import React from "react";
import SectionHeading from "../-General/SectionHeading";
import Image from "next/image";

export default function About() {

  return (
    <section id="about" className="flex justify-center w-full md:h-screen items-center mt-[5rem] xl:mt-0">
      <div className="flex flex-col xl:flex-row justify-center items-center h-[40rem] w-full">
        <div className="flex w-1/2 items-center justify-center">
          <Image src="/cloud.png" alt="The Future is Cloud Text" width={600} height={100} />
        </div>
        <div className={`flex flex-col w-1/2 text-center`}>
          <SectionHeading additional="mt-[10rem] font-semibold mb-5" textColor="text-secondary">Full-Stack Developer</SectionHeading>
          <h4 className="text-2xl text-secondary">Join me building wonderful software.</h4>
        </div>
      </div>
    </section>
  );
}
