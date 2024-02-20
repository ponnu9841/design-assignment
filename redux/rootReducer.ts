import { combineReducers, Reducer, Action } from "redux";
import { windowSizeData, getProfileData } from "./reducer/reducer";

type RootState = ReturnType<typeof appReducer>;

const appReducer = combineReducers({
	windowSizeData,
	getProfileData,
});

const rootReducer: Reducer<RootState, Action > = (state, action) => {
    return appReducer(state, action);
  };
export default rootReducer;
