import { ADD_TO_CART, REMOVE_CART } from "../const";

export const addToCart = (data: any) => {
	return {
		type: ADD_TO_CART,
		data,
	};
};

export const removeCart = (data: any) => {
	return {
		type: REMOVE_CART,
		data,
	};
};
