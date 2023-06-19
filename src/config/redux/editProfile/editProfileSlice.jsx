import { createSlice } from "@reduxjs/toolkit";
import { get_profile, update_profile } from "./editProfileThunk";

const getProfileInitState = {
  profile: [],
};

const getProfileSlice = createSlice({
  name: "getProfile",
  initialState: getProfileInitState,
  reducers: {
    setProfile: (state, action) => {
      return {
        ...state,
        getProfileInitState: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // GET PROFILE
      .addCase(get_profile.pending, (state, action) => {
        return {
          ...state,
          get_profileLoading: true,
          get_profileError: undefined,
          type: action.type,
        };
      })
      .addCase(get_profile.fulfilled, (state, action) => {
        return {
          ...state,
          profile: action.payload,
          get_profileLoading: false,
          get_profileError: undefined,
          type: action.type,
        };
      })
      .addCase(get_profile.rejected, (state, action) => {
        return {
          ...state,
          get_profileLoading: false,
          get_profileError: action.payload,
          type: action.type,
        };
      })
      // GET PROFILE

      // UPDATE PROFILE
      .addCase(update_profile.pending, (state, action) => {
        return {
          ...state,
          update_profileLoading: true,
          update_profileError: undefined,
          type: action.type,
        };
      })
      .addCase(update_profile.fulfilled, (state, action) => {
        // const updateProfile = state.profile.map((profile) =>
        //   profile.id === action.payload.no ? action.payload : profile
        // );
        return {
          ...state,
          profile: action.payload,
          update_profileLoading: false,
          update_profileError: undefined,
          type: action.type,
        };
      })
      .addCase(update_profile.rejected, (state, action) => {
        return {
          ...state,
          update_profileLoading: false,
          update_profileError: action.payload,
          type: action.type,
        };
      });
    // UPDATE PROFILE
  },
});

export const { actions: get_profileAction, reducer: get_profileReducer } =
  getProfileSlice;
