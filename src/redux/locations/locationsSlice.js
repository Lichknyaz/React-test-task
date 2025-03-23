import { createSlice } from "@reduxjs/toolkit";
import { fetchLocations } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    isLoading: false,
    error: null,
    locations: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, handlePending)
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.locations = [
          ...new Set(action.payload.map((item) => item.location)),
        ];
      })
      .addCase(fetchLocations.rejected, handleRejected);
  },
});

export const selectLocation = (state) => state.locations.locations;

export default locationsSlice.reducer;
