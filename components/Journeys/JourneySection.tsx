"use client";

import React from "react";
import { FcCheckmark } from "react-icons/fc";
import Image from 'next/image'
import { motion } from "framer-motion";
import { Journey } from "./journeysData";
import SectionHeading from "../-General/SectionHeading";

export default function JourneySection({journey, indexOfJourney}: {journey: Journey, indexOfJourney: number}) {

  return (
	<section id={"project" + indexOfJourney} className="mt-[5rem]">
		<div className="flex flex-row justify-center items-center w-full h-[30rem]">
			<div className="w-full md:w-1/2 h-full">
				<div className="m-[2rem] ml-[10rem]">
					<Image width={500} height={10000} src={journey.imagePath} alt="Image of Project" className="rounded-2xl shadow-2xl" />
				</div>
			</div>
			<div className="w-full md:w-1/2">
				<div className="flex flex-col justify-start items-start m-[2rem] h-full">
					<SectionHeading>
						{journey.title}
					</SectionHeading>
					<p className="text-lg" dangerouslySetInnerHTML={{ __html: journey.description }} />
				</div>
			</div>
		</div>
	</section>
  );
}
