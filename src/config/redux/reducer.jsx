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
import { getDataAdminReducer } from "./getDataAdmin/getDataAdminSlice";
import { updateDataAdminReducer } from "./updateDataAdmin/updateDataAdminSlice";
import { updatePasswordReducer } from "./updatePassword/updatePasswordSlice";
import { get_profileReducer } from './editProfile/editProfileSlice';
import { get_transactionReducer } from './getCustomerTransaction/getCustomerTransactionSlice';

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
  getDataAdmin: getDataAdminReducer,
  updateDataAdmin: updateDataAdminReducer,
  updatePassword: updatePasswordReducer,
  getProfile: get_profileReducer,
	getCustomerTransaction: get_transactionReducer,
});

export default reducer;
