import { createSlice } from "@reduxjs/toolkit";
import { getDataAdmin } from "./getDataAdminThunk";

const getDataAdminInitialState = {
  data: [],
};

const getDataAdminSlice = createSlice({
  name: "getDataAdmin",
  initialState: { getDataAdminInitialState },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAdmin.pending, (state, action) => {
        return {
          ...state,
          getDataAdminLoading: true,
          getDataAdminError: undefined,
          type: action.type,
        };
      })
      .addCase(getDataAdmin.fulfilled, (state, action) => {
        return {
          ...state,
          data: action.payload,
          getDataAdminLoading: false,
          getDataAdminError: undefined,
          type: action.type,
        };
      })
      .addCase(getDataAdmin.rejected, (state, action) => {
        return {
          ...state,
          getDataAdminLoading: false,
          getDataAdminError: action.payload,
          type: action.type,
        };
      });
  },
});

export const { actions: getDataAdminAction, reducer: getDataAdminReducer } =
  getDataAdminSlice;
