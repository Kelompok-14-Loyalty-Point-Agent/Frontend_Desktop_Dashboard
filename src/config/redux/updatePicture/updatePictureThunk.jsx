import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updatePicture = createAsyncThunk(
  "updatePicture/profile",
  async (value, { getState }) => {
    const state = getState();
    try {
      const formData = new FormData();
      formData.append("filename", value);
      const res = await axios.put(
        "https://3.0.59.152.nip.io/users/profiles/picture/1",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${state.session.token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);
