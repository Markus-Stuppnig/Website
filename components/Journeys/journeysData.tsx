export interface Journey {
	title: string;
	description: string[];
	imagePath: string;
	link: string;
}
  
export const journeysData: Journey[] = [
	{
		title: "Exchange Semester USA",
		description: [
			"On December 13<sup>th</sup> I stepped onto a plane, headed to Chicago, United States. With only 16 years of age, I was on my way into a completely different life, meeting people from another culture and staying there for a whole semester. Now that it's all over, I can comfortably say that it was the best decision I ever made. I built so many friendships, still being close with some of them. And of course, my ability and my skills with the english language skyrocketed. I not only created lasting memories, but also improved as a person. I am sooo thankful for the time I spent there and all the opportunities that came up for me. Experiencing american culture was truly fascinating.<br />Thank you Ben, Fred, Skyler, Marifer, Jefferson, Ashton, Derek, Christian, and all of you. You made my time in the USA great!",
		],
		imagePath: "/img1.jpeg",
		link: "www.google.com",
	},
] as const;
