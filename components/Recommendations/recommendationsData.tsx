export interface Recommendation {
	person: Person;
	text: string;
}
  
export interface Person {
	name: string;
	position: string;
	additionalInformation: string;
	imagePath: string;
	link: string;
}
  
export const recommendationsData: Recommendation[] = [
	{
	  person: {
		name: "Benjamin Knauss",
		position: "Vice President, Security Engineering at News Corp",
		additionalInformation: "November 25, 2023, Benjamin was Markus' mentor",
		imagePath: "/people/benjamin_knauss.jpeg",
		link: "https://www.linkedin.com/in/racter/",
	  },
	  text: `Markus has a solid grasp of Python programming. He's at the stage where he can confidently navigate the language, and he's not afraid to dive into new challenges or problem-solving scenarios. His grasp of basic web technologies is also commendable for his age, showing an appreciation for the broader context of his work.<br /><br />Working with Markus is a genuine pleasure. He brings a positive attitude to every interaction, making him a friendly and approachable collaborator. He's also shown a knack for explaining his thoughts clearly, which is a critical skill in any technical role.<br /><br />What really stands out about Markus is his aspiration to become an engineer. His fascination with technology and eagerness to learn more clearly indicate this ambition. He's always seeking to improve his skills, adapt to new technologies, and explore the latest trends.<br /><br />In conclusion, Markus Stuppnig is a promising young talent with a keen interest in technology and engineering. His curiosity, dedication, and growing skill set make him a great fit for any team looking to nurture future talent. I'm confident that Markus will make significant strides in his pursuit of becoming an engineer, and I wholeheartedly recommend him to anyone seeking a young, enthusiastic, and capable individual for their team.`,
	},
] as const;
  