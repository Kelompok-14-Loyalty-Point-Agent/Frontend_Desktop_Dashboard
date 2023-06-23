import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const get_transaction = createAsyncThunk(
	'transaction/retrieve_transactions',
	async (_, { getState }) => {
		const state = getState();
		try {
			const res = await axios.get('https://3.0.59.152.nip.io/transactions', {
				headers: { Authorization: `Bearer ${state.session.token}` },
			});
			return res.data;
		} catch (error) {
			return error.message;
		}
	}
);
