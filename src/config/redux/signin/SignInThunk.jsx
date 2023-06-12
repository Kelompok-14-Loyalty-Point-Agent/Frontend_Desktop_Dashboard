import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signin = createAsyncThunk('session/signin', async (param) => {
	const res = await axios.post('https://13.229.84.45/auth/login', param);
	return res.data;
});
