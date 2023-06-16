import { combineReducers } from "redux";
import { signInReducer } from "./signin/SignInSlice";
import { addStockReducer } from "./addStocks/addStocksSlice";
import { get_customerReducer } from "./customer/customerSlice";

const reducer = combineReducers({
  session: signInReducer,
  addStock: addStockReducer,
  getCustomer: get_customerReducer,
});

export default reducer;
