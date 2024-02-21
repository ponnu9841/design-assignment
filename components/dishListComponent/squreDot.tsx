import React from "react";

export default function SquareDot({
	squareDotColor,
}: {
	squareDotColor: string;
}) {
	return (
		<div
			className={
				[
					"w-[12px] h-[12px] border-2 flex items-center justify-center",
					squareDotColor == 'primary' ? 'border-primary' : 'border-secondary'
				]
				.filter(Boolean)
				.join(" ")}
		>
			<div
				className={[
					"h-[6px] w-[6px] rounded-full",
					squareDotColor == 'primary' ? 'bg-primary' : 'bg-secondary'

				].filter(Boolean).join(" ")}
			></div>
		</div>
	);
}
