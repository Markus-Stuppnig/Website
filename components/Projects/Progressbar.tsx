import React from "react";

export default function Progressbar({number, colorDone, colorNot, height, opacityDone, opacityNot}: {number: number, colorDone: string, colorNot: string, height: string, opacityDone: string, opacityNot: string}) {

	return (
		<div className={`h-${height} rounded-lg overflow-hidden w-full md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-${opacityNot}`} style={{backgroundColor: colorNot}}>
      		<div className={`h-full md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-${opacityDone}`} style={{width: `${number}%`, backgroundColor: colorDone}}>
				<p className="ml-5">{number} %</p>
	  		</div>
    	</div>
  	);
}
