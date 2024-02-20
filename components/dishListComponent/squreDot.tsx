import React from "react";

export default function SquareDot({squareDotColor}: {squareDotColor: string}) {
	return (
		<div className={`w-[12px] h-[12px] border-2 border-${squareDotColor} flex items-center justify-center`}>
			<div className={`h-[6px] w-[6px] rounded-full bg-${squareDotColor}`}></div>
		</div>
	);
}
