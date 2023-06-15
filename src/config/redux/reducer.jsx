import { combineReducers } from "redux";
import { signInReducer } from "./signin/SignInSlice";
import { addStockReducer } from "./addStocks/addStocksSlice";
import { getStocksReducer } from "./getStocks/getStocksSlice";

const reducer = combineReducers({
  session: signInReducer,
  addStock: addStockReducer,
  getStocks: getStocksReducer,
});

export default reducer;
