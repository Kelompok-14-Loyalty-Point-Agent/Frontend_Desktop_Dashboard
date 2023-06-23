import { createSlice } from "@reduxjs/toolkit";
import { updateDataAdmin } from "./updateDataAdminThunk";

const updateDataAdminInitState = {
  data: [],
};

const updateDataAdminSlice = createSlice({
  name: "updateDataAdmin",
  initialState: updateDataAdminInitState,
  extraReducers: (builders) => {
    builders
      .addCase(updateDataAdmin.pending, (state, action) => {
        return {
          ...state,
          updateDataAdminLoading: true,
          updateDataAdminError: undefined,
          type: action.type,
        };
      })
      .addCase(updateDataAdmin.fulfilled, (state, action) => {
        return {
          ...state,
          datas: action.payload,
          updateDataAdminLoading: undefined,
          updateDataAdminError: false,
          type: action.type,
        };
      })
      .addCase(updateDataAdmin.rejected, (state, action) => {
        return {
          ...state,
          updateDataAdminLoading: undefined,
          updateDataAdminError: action.payload,
          type: action.type,
        };
      });
  },
});

export const {
  actions: updateDataAdminAction,
  reducer: updateDataAdminReducer,
} = updateDataAdminSlice;
