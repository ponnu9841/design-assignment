import { PROFILE_DATA, WINDOW_SIZE } from "../const";

interface Action {
    type: string;
    data?: any; // You can define a more specific type for data if needed
  }
// WINDOW SIZE
export const windowSizeData = (data = null, action: Action) => {
	switch (action.type) {
		case WINDOW_SIZE:
			return action.data.windowSize;
		default:
			return data;
	}
};

export const getProfileData = (data = null, action: Action) => {
	switch (action.type) {
		case PROFILE_DATA:
			return action.data.profileData;
		default:
			return data;
	}
};
