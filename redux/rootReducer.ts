import { combineReducers, Reducer, Action } from "redux";
import { getCartData } from "./reducer/reducer";

type RootState = ReturnType<typeof appReducer>;

const appReducer = combineReducers({
	getCartData
});

const rootReducer: Reducer<RootState, Action > = (state, action) => {
    return appReducer(state, action);
  };
export default rootReducer;
