import React from "react";

export default function ColorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
	<div>
		<div className="relative">
			<div style={{backgroundColor: 'rgba(3, 20, 255, 1)'}} className="absolute top-[-5rem] left-[-10rem] h-[15rem] w-[60rem] rounded-full blur-[200px]"></div>

			<div style={{backgroundColor: 'rgba(140, 3, 252, 1)'}} className="absolute top-[50rem] right-[-10rem] h-[15rem] w-[60rem] rounded-full blur-[200px]"></div>

			<div style={{backgroundColor: 'rgba(3, 122, 255, 1)'}} className="absolute top-[120rem] left-[-20rem] h-[20rem] w-[80rem] rounded-full blur-[200px]"></div>
		
			<div style={{backgroundColor: 'rgba(3, 252, 40, 0.3)'}} className="absolute top-[160rem] right-[5rem] h-[25rem] w-[60rem] rounded-full blur-[200px]"></div>
		</div>
		{children}
	</div>
  );
}
