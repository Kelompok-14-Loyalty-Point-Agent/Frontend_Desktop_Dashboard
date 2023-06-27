import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const update_point = createAsyncThunk(
	'transaction/update_transactionDetailPoint',
	async (param, { getState }) => {
		const state = getState();
		try {
			const res = await axios.put(
				`https://3.0.59.152.nip.io/transactions/${param.id}`,
				param,
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
