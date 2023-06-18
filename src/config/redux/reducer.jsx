import { combineReducers } from "redux";
import { signInReducer } from "./signin/SignInSlice";
import { addStockReducer } from "./addStocks/addStocksSlice";
import { get_customerReducer } from "./customer/customerSlice";
import { getStockCreditReducer } from "./getStockCredit/getStockCreditSlice";
import { getStockInternetDataReducer } from "./getStockInternetData/getStockInternetDataSlice";
import { getStockDetailReducer } from "./getStockDetail/getStockDetailSlice";

const reducer = combineReducers({
  session: signInReducer,
  addStock: addStockReducer,
  getCustomer: get_customerReducer,
  getStockCredit: getStockCreditReducer,
  getStockInternetData: getStockInternetDataReducer,
  getStockDetail: getStockDetailReducer,
});

export default reducer;
