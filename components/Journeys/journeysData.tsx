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
			"",
		],
		imagePath: "/img1.jpeg",
		link: "www.google.com",
	},
] as const;
