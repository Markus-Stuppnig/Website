const Lines = () => {
  return (
    <div className="fixed top-0 left-0 z-1 flex h-full w-full items-center justify-around">
      <span className="w-[1px] h-1/2 bg-primarySelected dark:bg-strokedark flex animate-line5"></span>
      <span className="w-[1px] h-1/2 bg-primarySelected dark:bg-strokedark flex animate-line1"></span>
      <span className="w-[0px] h-1/2 bg-primarySelected dark:bg-strokedark flex animate-line3"></span>

      <span className="w-[1px] h-1/2 bg-primarySelected dark:bg-strokedark flex animate-line2"></span>
      <span className="w-[1px] h-1/2 bg-primarySelected dark:bg-strokedark flex animate-line4"></span>
    </div>
  );
};

export default Lines;
