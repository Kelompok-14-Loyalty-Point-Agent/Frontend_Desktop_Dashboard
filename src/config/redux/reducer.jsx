import { combineReducers } from "redux";
import { signInReducer } from "./signin/SignInSlice";
import { addStockReducer } from "./addStocks/addStocksSlice";

const reducer = combineReducers({
  signIn: signInReducer,
  addStock: addStockReducer,
});

export default reducer;
