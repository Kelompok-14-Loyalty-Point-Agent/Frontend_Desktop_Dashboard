import { combineReducers } from "redux";
import { signInReducer } from "./signin/SignInSlice";
import { addStockReducer } from "./addStocks/addStocksSlice";
<<<<<<< HEAD
import { addStockInternetDataReducer } from "./addStockInternetData/addStockInternetDataSlice";
import { getStockCreditReducer } from "./getStockCredit/getStockCreditSlice";
import { getStockInternetDataReducer } from "./getStockInternetData/getStockInternetDataSlice";
=======
import { get_customerReducer } from "./customer/customerSlice";
>>>>>>> fba2bdcd7b76f7fa2299edece07142c6a41929eb

const reducer = combineReducers({
  session: signInReducer,
  addStock: addStockReducer,
<<<<<<< HEAD
  addStockInternetData: addStockInternetDataReducer,
  getStockCredit: getStockCreditReducer,
  getStockInternetData: getStockInternetDataReducer,
=======
  getCustomer: get_customerReducer,
>>>>>>> fba2bdcd7b76f7fa2299edece07142c6a41929eb
});

export default reducer;
