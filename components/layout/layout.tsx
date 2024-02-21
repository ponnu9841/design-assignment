import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

interface LayoutProps {
	children: React.ReactNode;
	restaurantName?: string;
}

export default function Layout(props: LayoutProps) {
	const cartData = useSelector((state: any) => state?.getCartData) || [];

	const { restaurantName } = props;
	return (
		<div className="min-h-screen position-relative">
			<nav className="w-full sticky top-0 left-0 py-6 bg-[var(--background)] z-10">
				<div className="container flex justify-between items-center">
					<div className="max-w-[200px] max-h-[150px] font-semibold">
						{restaurantName || "Artisan Resto Cafe"}
					</div>
					<div className="flex space-x-4 items-center">
						<div>My orders</div>
						<div className="relative">
							<FiShoppingCart className="text-xl" />
							<div className="absolute top-[-7px] right-[-7px] bg-[#b91919] text-xs w-[10px] h-[10px] rounded-full p-2 flex items-center justify-center">
								<small>{cartData?.length}</small>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<div className="container">{props?.children}</div>
		</div>
	);
}
