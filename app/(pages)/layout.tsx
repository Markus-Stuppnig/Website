export default function ColorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
	<>
		<div className="bg-[#0398fc] absolute top-[-6rem] z-[0] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
		<div className="bg-[#03e8fc] absolute top-[-1rem] z-[0] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
		
		<div className="bg-[#0703fc] absolute top-[45rem] z-[0] right-[-20rem] h-[5rem] w-[20rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
		<div className="bg-[#8c03fc] absolute top-[50rem] z-[0] right-[-10rem] h-[15rem] w-[40rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

		<div className="bg-[#fc6b03] absolute top-[90rem] z-[0] left-[0rem] h-[10rem] w-[20rem] rounded-full blur-[6rem] sm:w-[68.75rem]"></div>
		<div className="bg-[#fce803] absolute top-[80rem] z-[0] left-[-20rem] h-[20rem] w-[40rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

		{children}
    </>
  );
}
