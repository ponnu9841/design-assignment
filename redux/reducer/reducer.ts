import { ADD_TO_CART, REMOVE_CART } from "../const";
import { DishType } from "@/components/dishListComponent/dish.type";


// CART
export const getCartData = (data: DishType[] = [], action: any) => {
	switch (action.type) {
		case ADD_TO_CART:
			return [...data, action?.data];
		case REMOVE_CART:
			return data?.filter(e => e?.dish_id !== action.data.dish_id);
		default:
			return data;
	}
};
