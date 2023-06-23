import { createSlice } from "@reduxjs/toolkit";
import { updatePassword } from "./updatePasswordThunk";

const updatePasswordInitState = {
  data: [],
};

const updatePasswordSlice = createSlice({
  name: "updatePassword",
  initialState: updatePasswordInitState,
  extraReducers: (builders) => {
    builders
      .addCase(updatePassword.pending, (state, action) => {
        return {
          ...state,
          updatePasswordLoading: true,
          updatePasswordError: undefined,
          type: action.type,
        };
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        return {
          ...state,
          datas: action.payload,
          updatePasswordLoading: undefined,
          updatePasswordError: false,
          type: action.type,
        };
      })
      .addCase(updatePassword.rejected, (state, action) => {
        return {
          ...state,
          updatePasswordLoading: undefined,
          updatePasswordError: action.payload,
          type: action.type,
        };
      });
  },
});

export const { actions: updatePasswordAction, reducer: updatePasswordReducer } =
  updatePasswordSlice;
