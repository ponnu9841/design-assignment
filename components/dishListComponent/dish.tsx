import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import NextImage from "../NextImage/image";
import SquareDot from "./squreDot";
import { DishType } from "./dish.type";
import { addToCart, removeCart } from "@/redux/action/action";
import { useDispatch, useSelector } from "react-redux";

interface PropType {
	dishData: DishType;
	index: number;
}

export default function DishItem(props: PropType) {
	let { dishData, index } = props;

	const [qty, setQty] = React.useState(0);

	const cartData = useSelector((state: any) => state?.getCartData);
	const dispatch = useDispatch()

	React.useEffect(() => {
		setQty(0);
	}, [dishData]);

	function setQuantity(type: string,) {
		if (type == "add") {
			// call redux if needed
			if(!cartData){
				dispatch(addToCart(dishData))
			}else{
				const cartAdded = cartData?.some((item: DishType) => item?.dish_id === dishData?.dish_id);
				if(!cartAdded){
					dispatch(addToCart(dishData))
				}
			}

			setQty(qty + 1);
		} else if (type == "sub") {
			if (qty > 0) {
				setQty(qty - 1);
				if(qty == 1){
					dispatch(removeCart(dishData))
				}
			}
		}
	}

	const squareDotColor = index % 2 == 0 ? "primary" : "secondary";

	return (
		<div className="flex w-full justify-between items-center space-x-4">
			<div className="flex-1">
				<div className="flex space-x-3 items-center">
					{/* <FaRegCircleStop /> */}
					<SquareDot squareDotColor={squareDotColor} />
					<h2 className="font-semibold flex-1">{dishData?.dish_name}</h2>
				</div>
				<div className="text-[12px] font-medium mt-1 mb-2 flex items-center justify-between">
					<span>{`${dishData?.dish_currency} ${dishData?.dish_price}`}</span>
					<span className="text-xs text-slate-300">
						{dishData?.dish_calories} Calories
					</span>
				</div>
				<div className="text-slate-500 text-xs mb-3">
					{dishData?.dish_description}
				</div>

				<div className="bg-primary rounded-full flex space-x-4 items-center justify-between px-4 py-1 max-w-[120px]">
					<button
						className="bg-transparent border-0"
						onClick={() => setQuantity("sub")}
					>
						<FaMinus className="text-xs" />
					</button>
					<div className="text-sm">{qty}</div>
					<button
						className="bg-transparent border-0 flex items-center justify-center"
						onClick={() => setQuantity("add")}
					>
						<FaPlus className="text-xs" />
					</button>
				</div>

				{dishData?.addonCat?.length > 0 && (
					<div className="text-secondary text-xs mt-3">
						Customization available
					</div>
				)}
			</div>

			<div className="mb-auto aspect-square lg:aspect-[5/4] max-w-[80px] lg:max-w-[130px] max-h-[110px] lg:max-h-[150px] w-full">
				<NextImage
					src={dishData?.dish_image || ""}
					className={"rounded-md object-contain rounded-md"}
					style={{ objectFit: "cover" }}
				/>
			</div>
		</div>
	);
}
