import React from "react";
import SectionHeading from "@/components/-General/SectionHeading";
import { journeysData } from "./journeysData";
import SectionDivider from "../-General/SectionDivider";
import JourneySection from "./JourneySection";

export default function Journeys() {
  return (
	<section id="projects" className="mt-[5rem]">
		<div className="flex justify-center w-full">
      		<div className="flex flex-col justify-start w-full md:w-1/3 text-center">
				<SectionHeading>Journeys</SectionHeading>
				<p>This page is about my life</p>
				<p>Work in Progress</p>
			</div>
		</div>
		<div>
			{journeysData.map((item, index) => (
				<React.Fragment key={index}>
					<JourneySection journey={item} indexOfJourney={index} />
					<SectionDivider />
				</React.Fragment>
			))}
		</div>
	</section>
  );
}
