import React from "react";
import { FiShoppingCart } from "react-icons/fi";

interface LayoutProps {
	children: React.ReactNode;
	restaurantName?: string;
}

export default function Layout(props: LayoutProps) {
	const { restaurantName } = props;
	return (
		<div className="min-h-screen">
			<div className="container">
				<nav className="flex justify-between items-center py-6">
					<div className="max-w-[200px] max-h-[150px] position-sticky top-0 font-semibold">
						{restaurantName || "Artisan Resto Cafe"}
					</div>
					<div className="flex space-x-4 items-center">
						<div>My orders</div>
						<div className="relative">
							<FiShoppingCart className="text-xl" />
							<div className="absolute top-[-7px] right-[-7px] bg-[#b91919] text-xs w-[10px] h-[10px] rounded-full p-2 flex items-center justify-center">
								<small>5</small>
							</div>
						</div>
					</div>
				</nav>
				{props?.children}
			</div>
		</div>
	);
}
