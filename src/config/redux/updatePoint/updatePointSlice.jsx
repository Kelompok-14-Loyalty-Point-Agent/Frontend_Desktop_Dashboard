import { createSlice } from '@reduxjs/toolkit';
import { update_point } from './updatePointThunk';

const updatePointInitState = {
	point: '',
};

const updatePointSlice = createSlice({
	name: 'updatePoint',
	initialState: updatePointInitState,
	extraReducers: (builders) => {
		builders
			.addCase(update_point.pending, (state, action) => {
				return {
					...state,
					update_pointLoading: true,
					update_pointError: undefined,
					type: action.type,
				};
			})
			.addCase(update_point.fulfilled, (state, action) => {
				return {
					...state,
					point: action.payload,
					update_pointLoading: undefined,
					update_pointError: false,
					type: action.type,
				};
			})
			.addCase(update_point.rejected, (state, action) => {
				return {
					...state,
					update_pointLoading: undefined,
					update_pointError: action.payload,
					type: action.type,
				};
			});
	},
});

export const { actions: updatePointAction, reducer: updatePointReducer } =
	updatePointSlice;
