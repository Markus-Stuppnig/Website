"use client";

import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function ExperienceCard({title, location, description, index}: {title: string, location: string, description: string, index: number}) {

  const [ref, inView] = useInView({
		triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
	});

	const fadeInAnimationVariants = {
		initial: {
		  opacity: 0,
		  x: index % 2 == 0 ? -100 : 100
		},
		animate: {
		  opacity: 1,
		  x: 0,
		  transition: {
			delay: 0.5,
		  },
		},
	  };
  
  return (
	<motion.div
		ref={ref}
		key={index}
		variants={fadeInAnimationVariants}
		initial="initial"
		animate={inView ? "animate" : "initial"}
		custom={index}
	>
		<h3 className="font-semibold capitalize">{title}</h3>
		<p className="font-normal !mt-0">{location}</p>
		<p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
			{description}
		</p>
	</motion.div>
  );
}
