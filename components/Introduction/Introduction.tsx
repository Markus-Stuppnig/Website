import React from "react";
import SectionHeading from "../-General/SectionHeading";

export default function Introduction() {

  return (
    <section id="introduction" className="flex flex-col w-full mt-[10rem] md:mt-0">
		<div className="flex flex-col justify-center items-center bg-secondary text-mywhite pt-[5rem] py-[15rem]">
			<div className="flex flex-col w-11/12 md:w-2/3 max-w-[60rem] text-center">
				<SectionHeading additional="font-semibold mb-7">Hi, I’m Markus. Nice to meet you.</SectionHeading>
				<h4 className="text-2xl tracking-wider leading-9">Since my early childhood, I have been immersed in coding. Solving complex problems and appreciating the simplicity of the solutions was truly fascinating for me. I was always good in math and decided to pursue my hobby in a technical college, an <a href="https://datatopics.worldbank.org/education/wRsc/classification" target="_blank" style={{ textDecoration: "underline" }}>ISCED 5</a> school which prepared me for the real world. Having returned from my exchange semester in the united states, I will continue my education and simultaneously get work experience. The technical topics I am most passionate about are cloud, cybersecurity and data science.</h4>
			</div>
		</div>
		<div className="-mt-[10rem] flex flex-col w-full justify-center items-center">
			<div className="flex flex-col md:flex-row w-11/12 bg-white text-black py-[5rem] h-full rounded-2xl shadow shadow-2xl">
				<div className="flex w-full md:w-1/3 justify-center">
					<div className="flex flex-col w-3/4 text-center">
						<h3 className="text-[2rem] font-semibold">Cloud Architecture</h3>
						<p className="text-2xl mt-5">The future is cloud. I am currently studying for the AWS Certified Solutions Architect Certificate</p>
					</div>
				</div>
				<div className="flex w-full md:w-1/3 justify-center">
					<div className="flex flex-col w-3/4 text-center">
						<h3 className="text-[2rem] font-semibold">Data Science</h3>
						<p className="text-2xl mt-5">Everybody knows ChatGPT. It’s incredible what AI can do these days. I decided to pusue the Data Science branch in my current school to learn how to develop such huge data models.</p>
					</div>
				</div>
				<div className="flex w-full md:w-1/3 justify-center">
					<div className="flex flex-col w-3/4 text-center">
						<h3 className="text-[2rem] font-semibold">Cybersecurity</h3>
						<p className="text-2xl mt-5">I received the TestOut CyberDefense Pro Certification and deeply focused onto Windows vulnerabilies, since I found this the most interesting.</p>
					</div>
				</div>
			</div>
		</div>
    </section>
  );
}
