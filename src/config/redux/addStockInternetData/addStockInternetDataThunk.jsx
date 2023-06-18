import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addStockInternetData = createAsyncThunk(
  "addStockInternet/add",
  async (param, { getState }) => {
    const state = getState();
    const res = await axios.post(
      "hthttps://3.0.59.152.nip.io/stocks/add",
      param,
      {
        headers: {
          Authorization: `Bearer ${state.session.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  }
);
