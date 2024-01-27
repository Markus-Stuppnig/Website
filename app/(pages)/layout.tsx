import React from "react";

export default function ColorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
	<div>
		<div className="relative">
			<div className="bg-[#0398fc] absolute top-[-6rem] left-[10rem] h-[31.25rem] w-[60.25rem] rounded-full blur-[10rem]"></div>

			<div className="bg-[#8c03fc] absolute top-[50rem] right-[-10rem] h-[15rem] w-[60rem] rounded-full blur-[10rem]"></div>

			<div className="bg-[#fce803] absolute top-[110rem] left-[-20rem] h-[20rem] w-[80rem] rounded-full blur-[10rem]"></div>
		
			<div className="bg-[#03fc28] absolute top-[160rem] right-[5rem] h-[25rem] w-[60rem] rounded-full blur-[7rem]"></div>
		</div>
		{children}
	</div>
  );
}
