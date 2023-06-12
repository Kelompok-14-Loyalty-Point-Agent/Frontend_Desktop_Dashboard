// import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
import { signin } from './SignInThunk';

const signInInitialState = {
	token: null,
};

const SignInSlice = createSlice({
	name: 'signIn',
	initialState: signInInitialState,
	reducers: {
		setToken: (state, action) => {
			return {
				...state,
				token: action.payload,
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signin.pending, (state, action) => {
				return {
					...state,
					signinLoading: true,
					signinError: undefined,
					type: action.type,
				};
			})
			.addCase(signin.fulfilled, (state, action) => {
				return {
					...state,
					token: action.payload.accessToken,
					signinLoading: false,
					signinError: undefined,
					type: action.type,
				};
			})
			.addCase(signin.rejected, (state, action) => {
				return {
					...state,
					signinLoading: false,
					signinError: action.payload,
					type: action.type,
				};
			});
	},
});

export const { actions: signInAction, reducer: signInReducer } = SignInSlice;
