import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersById, fetchMoreCampers } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "campers",
  initialState: {
    camper: {},
    items: [],
    isLoading: false,
    isLoadingMore: false,
    error: null,
    total: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, handleRejected)

      .addCase(fetchMoreCampers.pending, (state) => {
        state.isLoadingMore = true;
      })
      .addCase(fetchMoreCampers.fulfilled, (state, action) => {
        state.isLoadingMore = false;
        state.error = null;
        state.items = [...state.items, ...action.payload.items];
      })
      .addCase(fetchMoreCampers.rejected, (state, action) => {
        state.isLoadingMore = false;
        state.error = action.payload;
      })

      .addCase(fetchCampersById.pending, handlePending)
      .addCase(fetchCampersById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = action.payload;
      })
      .addCase(fetchCampersById.rejected, handleRejected);
  },
});

export const selectCampers = (state) => state.campers.items;
export const selectCampersById = (state) => state.campers.camper;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsLoadingMore = (state) => state.campers.isLoadingMore;
export const selectError = (state) => state.campers.error;
export const selectTotal = (state) => state.campers.total;

export default slice.reducer;
