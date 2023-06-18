import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signin = createAsyncThunk('session/signin', async (param) => {
	try {
		const res = await axios.post('https://3.0.59.152.nip.io/auth/login', param);
		return res.data;
	} catch (error) {
		return error.message;
	}
});
