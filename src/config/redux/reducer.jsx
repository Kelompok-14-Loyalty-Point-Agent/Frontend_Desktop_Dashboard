import { combineReducers } from "redux";
import { signInReducer } from "./signin/SignInSlice";
import { addStockReducer } from "./addStocks/addStocksSlice";
import { addStockInternetDataReducer } from "./addStockInternetData/addStockInternetDataSlice";
import { getStockCreditReducer } from "./getStockCredit/getStockCreditSlice";
import { getStockInternetDataReducer } from "./getStockInternetData/getStockInternetDataSlice";
import { get_customerReducer } from "./customer/customerSlice";
import { getStockDetailReducer } from "./getStockDetail/getStockDetailSlice";
import { get_profileReducer } from "./editProfile/editProfileSlice";
import { addStockDetailReducer } from "./addStockDetail/addStockDetailSlice";
import { deleteStockDetailReducer } from "./deleteStockDetail/deleteStockDetailSlice";
import { updateDataStockReducer } from "./updateStockDetail/updateStockDetailSlice";
import { updateCustomerReducer } from "./updateCustomer/updateCustomerSlice";
import { deleteCustomerReducer } from "./deleteCustomer/deleteCustomerSlice";

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
  getProfile: get_profileReducer,
  updateCustomerDetail: updateCustomerReducer,
  deleteCustomer: deleteCustomerReducer,
});

export default reducer;
