import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addStockDetail = createAsyncThunk(
  "addStockDetail/addStock",
  async (param, { getState }) => {
    const state = getState();
    try {
      const res = await axios.post(
        "https://3.0.59.152.nip.io/stocks/details",
        param,
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
