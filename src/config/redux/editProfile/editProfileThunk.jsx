import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_profile = createAsyncThunk(
  "profile/retrieve_profile",
  async () => {
    const res = await axios.get(
      `https://648c652d8620b8bae7ecd59c.mockapi.io/profile`
    );
    return res.data;
  }
);

export const update_profile = createAsyncThunk(
  "profile/update_profile",
  async (data) => {
    const res = await axios.put(
      `https://648c652d8620b8bae7ecd59c.mockapi.io/profile/${data.id}`,
      data
    );
    return res.data;
  }
);
