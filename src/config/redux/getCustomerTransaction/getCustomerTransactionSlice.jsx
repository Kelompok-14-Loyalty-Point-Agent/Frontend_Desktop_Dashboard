import { createSlice } from '@reduxjs/toolkit';
import { get_transaction } from './getCustomerTransactionThunk';

const getCustomerTransactionInitState = {
	transactions: [],
};

const getCustomerTransactionSlice = createSlice({
	name: 'getCustomerTransaction',
	initialState: getCustomerTransactionInitState,
	reducers: {
		setTransaction: (state, action) => {
			return {
				...state,
				transactions: action.payload,
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(get_transaction.pending, (state, action) => {
				return {
					...state,
					get_transactionLoading: true,
					get_transactionError: undefined,
					type: action.type,
				};
			})
			.addCase(get_transaction.fulfilled, (state, action) => {
				return {
					...state,
					transactions: action.payload,
					get_transactionLoading: false,
					get_transactionError: undefined,
					type: action.type,
				};
			})
			.addCase(get_transaction.rejected, (state, action) => {
				return {
					...state,
					get_transactionLoading: false,
					get_transactionError: action.payload,
					type: action.type,
				};
			});
	},
});

export const {
	action: get_transactionAction,
	reducer: get_transactionReducer,
} = getCustomerTransactionSlice;
