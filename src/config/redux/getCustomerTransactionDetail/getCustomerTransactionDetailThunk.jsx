import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const get_transactionDetail = createAsyncThunk(
	'transaction/retrieve_transactionDetail',
	async (param, { getState }) => {
		const state = getState();
		try {
			const res = await axios.get(
				`https://3.0.59.152.nip.io/transactions/${param.id}`,
				{
					headers: { Authorization: `Bearer ${state.session.token}` },
				}
			);
			return res.data;
		} catch (error) {
			return error.message;
		}
	}
);
