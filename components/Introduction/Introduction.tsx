import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/miscellaneous/SectionHeading";
import { data } from "@/components/miscellaneous/generalData";

export default function Introduction() {
  return (
    <section id="introduction" className="flex flex-col w-full mt-[10rem]">
      <div className="w-full grid grid-cols-12 bg-secondary shadow-inner shadow-2xl text-white pt-[5rem] py-[15rem] ">
        <div className="col-span-12 mx-5 lg:mx-0 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 justify-center items-center text-center">
          <SectionHeading className="font-semibold mb-7 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
            {data.introduction_main}
          </SectionHeading>
          <h4 className="text-2xl tracking-wider leading-9 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
            {data.introduction_sub}
          </h4>
        </div>
        <div className="lg:block mr-2 col-start-12 xl:mr-0 xl:col-start-11 flex justify-center items-center">
          <Link
            href="/contact"
            className="flex flex-col py-[1rem] px-[1rem] rounded-full bg-[#42d7f5] justify-center items-center text-center ease-in-out duration-200 hover:scale-105"
          >
            <p className="text-xl font-bold">{data.callForAction1}</p>
          </Link>
        </div>
      </div>
      <div className="-mt-[10rem] flex flex-col w-full justify-center items-center">
        <div className="flex flex-col md:flex-row w-11/12 bg-white text-black py-[5rem] h-full rounded-2xl shadow-2xl">
          <div className="flex w-full md:w-1/3 justify-center mt-7 md:mt-0 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
            <div className="flex flex-col w-3/4 text-center">
              <h3 className="text-[2rem] font-semibold">{data.title1}</h3>
              <p className="text-2xl mt-5">{data.text1}</p>
            </div>
          </div>
          <div className="flex w-full md:w-1/3 justify-center transform transition-transform duration-200 hover:scale-105 cursor-pointer">
            <div className="flex flex-col w-3/4 text-center">
              <h3 className="text-[2rem] font-semibold">{data.title2}</h3>
              <p className="text-2xl mt-5">{data.text2}</p>
            </div>
          </div>
          <div className="flex w-full md:w-1/3 justify-center mt-7 md:mt-0 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
            <div className="flex flex-col w-3/4 text-center">
              <h3 className="text-[2rem] font-semibold">{data.title3}</h3>
              <p className="text-2xl mt-5">{data.text3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
