import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteStockDetail = createAsyncThunk(
  "deleteStockDetail/deleteStock",
  async (id, { getState }) => {
    const state = getState();
    const token = state.session.token;
    try {
      const res = axios.delete(
        `https://3.0.59.152.nip.io/stocks/details/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);
