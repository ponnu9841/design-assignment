import { WINDOW_SIZE, PROFILE_DATA, USER_LOGOUT } from "../const";

export const getWindowSize = (data: any) => {
	return {
		type: WINDOW_SIZE,
		data,
	};
};

export const profieDetails = (data: any) => {
	return {
		type: PROFILE_DATA,
		data,
	};
};

export const logOut = (data: any) => {
	return {
		type: USER_LOGOUT,
		data,
	};
};
