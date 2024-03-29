import { combineReducers } from 'redux';
import { signInReducer } from './signin/SignInSlice';
import { addStockReducer } from './addStocks/addStocksSlice';
import { addStockInternetDataReducer } from './addStockInternetData/addStockInternetDataSlice';
import { getStockCreditReducer } from './getStockCredit/getStockCreditSlice';
import { getStockInternetDataReducer } from './getStockInternetData/getStockInternetDataSlice';
import { get_customerReducer } from './customer/customerSlice';
import { getStockDetailReducer } from './getStockDetail/getStockDetailSlice';
import { addStockDetailReducer } from './addStockDetail/addStockDetailSlice';
import { deleteStockDetailReducer } from './deleteStockDetail/deleteStockDetailSlice';
import { updateDataStockReducer } from './updateStockDetail/updateStockDetailSlice';
import { getDataAdminReducer } from './getDataAdmin/getDataAdminSlice';
import { updateDataAdminReducer } from './updateDataAdmin/updateDataAdminSlice';
import { updatePasswordReducer } from './updatePassword/updatePasswordSlice';
import { get_transactionReducer } from './getCustomerTransaction/getCustomerTransactionSlice';
import { logoutUserReducer } from './logout/logoutUserSlice';
import { updateCustomerReducer } from './updateCustomer/updateCustomerSlice';
import { deleteCustomerReducer } from './deleteCustomer/deleteCustomerSlice';
import { updatePictureReducer } from './updatePicture/updatePictureSlice';
import { get_transactionDetailReducer } from './getCustomerTransactionDetail/getCustomerTransactionDetailSlice';
import { updatePointReducer } from './updatePoint/updatePointSlice';

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
	getCustomerTransaction: get_transactionReducer,
	logoutUser: logoutUserReducer,
	updateCustomerDetail: updateCustomerReducer,
	deleteCustomer: deleteCustomerReducer,
	updatePicture: updatePictureReducer,
	getCustomerTransactionDetail: get_transactionDetailReducer,
	updatePoint: updatePointReducer,
});

export default reducer;
