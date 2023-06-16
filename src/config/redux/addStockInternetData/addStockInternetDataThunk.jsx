import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addStockInternetData = createAsyncThunk(
  "addStockInternet/add",
  async (param, { getState }) => {
    const state = getState();
    const res = await axios.post("http://13.229.84.45/stocks/add", param, {
      headers: {
        Authorization: `Bearer ${state.session.token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
);
