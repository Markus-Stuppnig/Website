"use client";

import React from "react";
import SectionHeading from "../-General/SectionHeading";
import { recommendationsData } from "./recommendationsData";
import Image from "next/image";
import Link from "next/link";
import SectionDivider from "../-General/SectionDivider";
import { SocialIcon } from "react-social-icons";

export default function Recommendations() {

  return (
    <section id="about" className="flex justify-center w-full">
		<div className="flex flex-col justify-center items-center w-full text-center">
			<SectionHeading additional="mb-[2rem] font-semibold" textColor="text-secondary">Recommendations</SectionHeading>
			<p className="text-2xl font-medium text-secondary">Here, you’ll see some of my recommendations</p>
			<SectionDivider height="h-[1rem] md:h-[4rem]" />

			{recommendationsData.map((recommendation, index) => (
				<div key={`recommendation${index}`} className="flex flex-col w-full justify-center items-center bg-secondary shadow shadow-3xl py-[6rem] text-white">
					<div className="flex flex-col items-center justify-center w-11/12 md:w-[45rem] lg:w-[60rem] bg-white rounded-3xl shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-20">
						<div className="flex flex-col ml-[3rem] text-start">
							<div className="flex flex-row mt-10 justify-between">
								<Link href={recommendation.person.link} target="_blank" className="flex flex-row">
									<div>
										<Image className="rounded-full drop-shadow-lg" src={recommendation.person.imagePath} width={90} height={90} alt="Portrait of Benjamin Knauss" />
									</div>
									<div className="flex flex-col text-start ml-5">
										<h2 className="text-md font-medium text-2xl">{recommendation.person.name}</h2>
										<h2 className="text-md font-medium text-xl">{recommendation.person.position}</h2>
										<h2 className="text-sm font-medium text-xl sm:font-normal 2xl:font-medium">{recommendation.person.additionalInformation}</h2>
									</div>
								</Link>
								<Link href={recommendation.person.link} target="_blank" className="mr-10">
									<SocialIcon as="div" network="linkedin" />
								</Link>
							</div>
							<div className="mt-10 mb-10 mr-4 ml-0 sm:mr-10 sm:ml-0">
								<p className="font-normal text-xl sm:font-normal 2xl:font-medium" dangerouslySetInnerHTML={{ __html: recommendation.text }} />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	</section>
  );
}
