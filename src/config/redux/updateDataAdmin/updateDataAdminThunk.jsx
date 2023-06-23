import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateDataAdmin = createAsyncThunk(
  "updateDataAdmin/updateData",
  async (value, { getState }) => {
    const state = getState();
    try {
      const res = await axios.put(
        "https://3.0.59.152.nip.io/users/profiles/admin/1",
        value,
        {
          headers: { Authorization: `Bearer ${state.session.token}` },
        }
      );
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);
