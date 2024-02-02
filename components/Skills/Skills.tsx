"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "./skillsData";
import SectionHeading from "../-General/SectionHeading";
import { useInView } from "react-intersection-observer";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
	scale: 1,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {

	const [ref, inView] = useInView({
		triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
	});
	   
	return (
		<section
		id="skills"
		className="flex flex-col items-center w-full mt-[5rem]"
		>
			<div
				className="flex flex-col items-center md:w-1/2 max-w-[53rem] text-center"
			>
				<SectionHeading>My skills</SectionHeading>
				<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
					{skillsData.map((skill, index) => (
					<motion.li
						ref={ref}
						className="bg-white rounded-xl px-5 py-3 shadow-xl md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-40"
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileHover={{ scale: 1.05 }}
						animate={inView ? "animate" : "initial"}
						custom={index}
						transition={{ duration: 0.3 }}
						viewport={{ once: false }}
					>
							{skill}
					</motion.li>
					))}
				</ul>
		</div>
		</section>
	);
}
