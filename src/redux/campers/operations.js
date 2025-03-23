import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, limit = 4, filters = {} }, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/`, {
        params: { page, limit, ...filters },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchMoreCampers = createAsyncThunk(
  "campers/fetchMore",
  async ({ page = 1, limit = 4, filters = {} }, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/`, {
        params: { page, limit, ...filters },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCampersById = createAsyncThunk(
  "contacts/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
