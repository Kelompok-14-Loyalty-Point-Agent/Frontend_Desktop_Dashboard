import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "./logoutUserThunk";

const logoutUserInitState = {
  datas: [],
};

const logoutUserSlice = createSlice({
  name: "logoutUser",
  initialState: logoutUserInitState,
  reducers: {
    setClearDatas: (state, action) => {
      return {
        ...state,
        datas: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser.pending, (state, action) => {
        return {
          ...state,
          logoutUserLoading: true,
          logoutUserError: undefined,
          type: action.type,
        };
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        return {
          ...state,
          datas: action.payload,
          logoutUserLoading: false,
          logoutUserError: undefined,
          type: action.type,
        };
      })
      .addCase(logoutUser.rejected, (state, action) => {
        return {
          ...state,
          logoutUserLoading: false,
          logoutUserError: action.payload,
          type: action.type,
        };
      });
  },
});

export const { actions: logoutUserAction, reducer: logoutUserReducer } =
  logoutUserSlice;
