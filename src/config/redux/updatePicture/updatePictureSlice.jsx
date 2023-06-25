import { createSlice } from "@reduxjs/toolkit";
import { updatePicture } from "./updatePictureThunk";

const updatePictureInitState = {
  data: [],
};

const updatePictureSlice = createSlice({
  name: "updatePicture",
  initialState: updatePictureInitState,
  extraReducers: (builders) => {
    builders
      .addCase(updatePicture.pending, (state, action) => {
        return {
          ...state,
          updatePictureLoading: true,
          updatePictureError: undefined,
          type: action.type,
        };
      })
      .addCase(updatePicture.fulfilled, (state, action) => {
        return {
          ...state,
          datas: action.payload,
          updatePictureLoading: undefined,
          updatePictureError: false,
          type: action.type,
        };
      })
      .addCase(updatePicture.rejected, (state, action) => {
        return {
          ...state,
          updatePictureLoading: undefined,
          updatePictureError: action.payload,
          type: action.type,
        };
      });
  },
});

export const { actions: updatePictureAction, reducer: updatePictureReducer } =
  updatePictureSlice;
