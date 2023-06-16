import { combineReducers } from "redux";
import { signInReducer } from "./signin/SignInSlice";
import { addStockReducer } from "./addStocks/addStocksSlice";
import { addStockInternetDataReducer } from "./addStockInternetData/addStockInternetDataSlice";
import { getStockCreditReducer } from "./getStockCredit/getStockCreditSlice";
import { getStockInternetDataReducer } from "./getStockInternetData/getStockInternetDataSlice";
import { get_customerReducer } from "./customer/customerSlice";

const reducer = combineReducers({
  session: signInReducer,
  addStock: addStockReducer,
  addStockInternetData: addStockInternetDataReducer,
  getStockCredit: getStockCreditReducer,
  getStockInternetData: getStockInternetDataReducer,

  getCustomer: get_customerReducer,
});

export default reducer;
