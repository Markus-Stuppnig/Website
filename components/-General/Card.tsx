import React from "react";

interface CardProps {
    description: string;
    colorBg: string;
    colorTxt: string;
  }
  
interface CardSpecialFunctionProps extends CardProps {
    extClassNamer: string; // Add the className prop

}


export default function Card(props: CardProps | CardSpecialFunctionProps) {
    const isSpecialFunction = (props: any): props is CardSpecialFunctionProps => {
        return props.extClassNamer !== undefined; // Check for className instead
      };
    
      const { description, colorBg, colorTxt, extClassNamer} = props;

      return (
        <div className={`${colorBg} shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl ${extClassNamer || ''}`}>
          <div className="p-6">
            <p className={`mt-2 ${colorTxt} text-lg leading-relaxed`}>{description}</p>
          </div>
        </div>
      );
}

