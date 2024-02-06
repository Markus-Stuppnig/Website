"use client";

import React from "react";
import SectionHeading from "../-General/SectionHeading";
import { recommendationsData } from "./recommendationsData";
import Image from "next/image";
import Link from "next/link";
import SectionDivider from "../-General/SectionDivider";

export default function Recommendations() {

  return (
    <section id="about" className="flex justify-center w-full">
		<div className="flex flex-col justify-center items-center w-full text-center">
			<SectionHeading>Recommendations</SectionHeading>
			<p className="text-lg font-medium">Here, you’ll see some of my recommendations</p>
			<SectionDivider height="h-[1rem] md:h-[4rem]" />

			{recommendationsData.map((recommendation, index) => (
				<div key={`recommendation${index}`} className="flex flex-col items-center justify-center w-11/12 md:w-[60rem] bg-white rounded-3xl shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-30">
					<div className="flex flex-col ml-4 sm:ml-10 text-start">
						<Link href={recommendation.person.link} target="_blank" className="flex flex-row mt-10 align-middle">
							<div>
								<Image className="rounded-full drop-shadow-lg" src={recommendation.person.imagePath} width={70} height={70} alt="Portrait of Benjamin Knauss" />
							</div>
							<div className="flex flex-col text-start ml-5">
								<h2 className="text-md font-medium">{recommendation.person.name}</h2>
								<h2 className="text-md font-medium">{recommendation.person.position}</h2>
								<h2 className="text-sm font-medium sm:font-normal 2xl:font-medium">{recommendation.person.additionalInformation}</h2>
							</div>
						</Link>
						<div className="mt-10 mb-10 mr-4 ml-0 sm:mr-10 sm:ml-0">
							<p className="font-medium sm:font-normal 2xl:font-medium" dangerouslySetInnerHTML={{ __html: recommendation.text }} />
						</div>
					</div>
				</div>
			))}
		</div>
	</section>
  );
}
