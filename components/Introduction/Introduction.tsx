import React from "react";
import Link from "next/link";
import Heading from "@/components/miscellaneous/Heading";
import { data } from "@/components/miscellaneous/generalData";

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="flex flex-col w-full mt-[3rem] sm:mt-[10rem]"
    >
      <div className="w-full grid grid-cols-12 bg-secondary text-white pt-[5rem] py-[15rem] ">
        <div className="col-span-12 mx-5 lg:mx-0 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 justify-center items-center text-center">
          <Heading
            color="white"
            size="text-2xl md:text-3xl"
            className="mb-7 zoom-on-hover-200"
          >
            {data.introduction_main}
          </Heading>
          <Heading
            color="white"
            size="text-base md:text-basePlus"
            weight="font-normal"
            capitalize={false}
            className="sm:tracking-wider sm:leading-9"
          >
            {data.introduction_sub}
          </Heading>
        </div>
        <div className="hidden md:flex mr-2 md:col-start-11 col-span-2 xl:col-start-11 xl:col-span-1 justify-center items-center">
          <Link
            href="/contact"
            className="flex flex-col py-[1rem] px-[1rem] rounded-full bg-[#42d7f5] justify-center items-center text-center zoom-on-hover-200"
          >
            <p className="text-base font-bold">{data.callForAction1}</p>
          </Link>
        </div>
      </div>
      <div className="-mt-[10rem] flex flex-col w-full justify-center items-center">
        <div className="flex flex-col md:flex-row w-11/12 bg-white text-black pt-[2rem] pb-[4rem] md:py-[5rem] h-full rounded-2xl shadow-2xl">
          <div className="flex w-full md:w-1/3 justify-center mt-10 md:mt-0 sm:zoom-on-hover-200">
            <div className="flex flex-col w-3/4 text-center">
              <a href={data.link1}>
                <Heading color="black" size="text-lg md:text-xl">
                  {data.title1}
                </Heading>
                <Heading
                  color="black"
                  size="text-base md:text-basePlus"
                  weight="font-normal"
                  capitalize={false}
                  className="mt-5"
                >
                  {data.text1}
                </Heading>
              </a>
            </div>
          </div>
          <div className="flex w-full md:w-1/3 justify-center mt-10 md:mt-0 sm:zoom-on-hover-200">
            <div className="flex flex-col w-3/4 text-center">
              <a href={data.link1}>
                <Heading color="black" size="text-lg md:text-xl">
                  {data.title2}
                </Heading>
                <Heading
                  color="black"
                  size="text-base md:text-basePlus"
                  weight="font-normal"
                  capitalize={false}
                  className="mt-5"
                >
                  {data.text2}
                </Heading>
              </a>
            </div>
          </div>
          <div className="flex w-full md:w-1/3 justify-center mt-10 md:mt-0 sm:zoom-on-hover-200">
            <div className="flex flex-col w-3/4 text-center">
              <a href={data.link1}>
                <Heading color="black" size="text-lg md:text-xl">
                  {data.title3}
                </Heading>
                <Heading
                  color="black"
                  size="text-base md:text-basePlus"
                  weight="font-normal"
                  capitalize={false}
                  className="mt-5"
                >
                  {data.text3}
                </Heading>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
