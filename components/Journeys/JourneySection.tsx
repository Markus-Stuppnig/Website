"use client";

import React from "react";
import Image from 'next/image'
import { Journey } from "./journeysData";
import SectionHeading from "../-General/SectionHeading";

export default function JourneySection({journey, indexOfJourney}: {journey: Journey, indexOfJourney: number}) {

  return (
	<section id={"project" + indexOfJourney} className="mt-[5rem]">
		
			{(indexOfJourney % 2 == 0) &&
				<div className="flex flex-col md:flex-row justify-center items-center w-full">
					<div className="w-2/3 md:w-1/3 flex justify-center">
						<div className={`${journey.margin}`}>
							<Image width={journey.width} height={journey.height} src={journey.imagePath} alt={`Title image of Journey ${journey.title}`} className="rounded-2xl shadow-2xl" />
						</div>
					</div>
					<div className="w-full md:w-2/3 flex justify-center items-center md:justify-start md:items-start mt-[5rem] md:mt-[0rem]">
						<div className="flex flex-col md:ml-[5rem] w-5/6 md:w-2/3 md:justify-start md:items-start text-start">
							<SectionHeading>
								{journey.title}
							</SectionHeading>
							<p className="text-lg" dangerouslySetInnerHTML={{ __html: journey.description }} />
						</div>
					</div>
				</div>
			}
			
			{(indexOfJourney % 2 != 0) &&
				<div className="flex flex-col md:flex-row justify-center items-center w-full">
					<div className="w-full md:w-7/12 flex justify-center items-center md:justify-start md:items-start mt-[5rem] md:mt-[0rem]">
						<div className="flex flex-col md:ml-[10rem] w-5/6 md:w-2/3 md:justify-start md:items-start text-start">
							<SectionHeading>
								{journey.title}
							</SectionHeading>
							<p className="text-lg" dangerouslySetInnerHTML={{ __html: journey.description }} />
						</div>
					</div>
					<div className="w-2/3 md:w-1/3 flex justify-center">
						<div className={`${journey.margin}`}>
							<Image width={journey.width} height={journey.height} src={journey.imagePath} alt={`Title image of Journey ${journey.title}`} className="rounded-2xl shadow-2xl" />
						</div>
					</div>
				</div>
			}
	</section>
  );
}
