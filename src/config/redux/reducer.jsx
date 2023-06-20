import { combineReducers } from "redux";
import { signInReducer } from "./signin/SignInSlice";
import { addStockReducer } from "./addStocks/addStocksSlice";
import { addStockInternetDataReducer } from "./addStockInternetData/addStockInternetDataSlice";
import { getStockCreditReducer } from "./getStockCredit/getStockCreditSlice";
import { getStockInternetDataReducer } from "./getStockInternetData/getStockInternetDataSlice";
import { get_customerReducer } from "./customer/customerSlice";
import { getStockDetailReducer } from "./getStockDetail/getStockDetailSlice";
import { addStockDetailReducer } from "./addStockDetail/addStockDetailSlice";
import { deleteStockDetailReducer } from "./deleteStockDetail/deleteStockDetailSlice";
import { updateDataStockReducer } from "./updateStockDetail/updateStockDetailSlice";

const reducer = combineReducers({
  session: signInReducer,
  addStock: addStockReducer,
  addStockInternetData: addStockInternetDataReducer,
  addStockDetail: addStockDetailReducer,
  getStockCredit: getStockCreditReducer,
  getStockInternetData: getStockInternetDataReducer,
  getCustomer: get_customerReducer,
  getStockDetail: getStockDetailReducer,
  deleteStockDetail: deleteStockDetailReducer,
  updateStockDetail: updateDataStockReducer,
});

export default reducer;
