import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/miscellaneous/SectionHeading";
import { data } from "@/components/miscellaneous/generalData";

export default function Introduction() {
  return (
    <section id="introduction" className="flex flex-col w-full mt-[10rem]">
      <div className="w-full grid grid-cols-12 bg-secondary shadow-inner shadow-2xl text-white pt-[5rem] py-[15rem] ">
        <div className="col-span-12 mx-5 lg:mx-0 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 justify-center items-center text-center">
          <SectionHeading className="font-semibold mb-7">
            Hi, I’m Markus. Nice to meet you.
          </SectionHeading>
          <h4 className="text-2xl tracking-wider leading-9">
            Since my early childhood, I have been immersed in coding. The
            technical topics I am most passionate about are data science, cloud
            computing and cybersecurity.
          </h4>
        </div>
        <div className="lg:block mr-2 col-start-12 xl:mr-0 xl:col-start-11 flex justify-center items-center">
          <Link
            href="/contact"
            className="flex flex-col py-[1rem] px-[1rem] rounded-full bg-[#42d7f5] justify-center items-center text-center ease-in-out duration-300 hover:scale-105"
          >
            <p className="text-xl font-bold">{data.callForAction1}</p>
          </Link>
        </div>
      </div>
      <div className="-mt-[10rem] flex flex-col w-full justify-center items-center">
        <div className="flex flex-col md:flex-row w-11/12 bg-white text-black py-[5rem] h-full rounded-2xl shadow-2xl">
          <div className="flex w-full md:w-1/3 justify-center mt-7 md:mt-0">
            <div className="flex flex-col w-3/4 text-center">
              <h3 className="text-[2rem] font-semibold">Data Science</h3>
              <p className="text-2xl mt-5">
                I decided to pursue the Data Science track in my current school.
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-1/3 justify-center">
            <div className="flex flex-col w-3/4 text-center">
              <h3 className="text-[2rem] font-semibold">Cloud Computing</h3>
              <p className="text-2xl mt-5">
                I am currently studying for the AWS Certified Solutions
                Architect Certificate.
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-1/3 justify-center mt-7 md:mt-0">
            <div className="flex flex-col w-3/4 text-center">
              <h3 className="text-[2rem] font-semibold">Cybersecurity</h3>
              <p className="text-2xl mt-5">
                I am a proud recipient of the TestOut CyberDefense Pro
                Certification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
