import { createSlice } from '@reduxjs/toolkit';
import { get_transactionDetail } from './getCustomerTransactionDetailThunk';

const getCustomerTransactionDetailInitState = {
	transactionDetail: {},
};

const getCustomerTransactionDetailSlice = createSlice({
	name: 'getCustomerTransactionDetail',
	initialState: getCustomerTransactionDetailInitState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(get_transactionDetail.pending, (state, action) => {
				return {
					...state,
					get_transactionDetailLoading: true,
					get_transactionDetailError: undefined,
					type: action.type,
				};
			})
			.addCase(get_transactionDetail.fulfilled, (state, action) => {
				return {
					...state,
					transactionDetail: action.payload,
					get_transactionDetailLoading: false,
					get_transactionDetailError: undefined,
					type: action.type,
				};
			})
			.addCase(get_transactionDetail.rejected, (state, action) => {
				return {
					...state,
					get_transactionDetailLoading: false,
					get_transactionDetailError: action.payload,
					type: action.type,
				};
			});
	},
});

export const {
	action: get_transactionDetailAction,
	reducer: get_transactionDetailReducer,
} = getCustomerTransactionDetailSlice;
