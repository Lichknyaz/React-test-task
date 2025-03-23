import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    toggleFavorites: (state, action) => {
      const favoritesId = action.payload;
      if (state.favorites.includes(favoritesId)) {
        state.favorites = state.favorites.filter((id) => id !== favoritesId);
      } else {
        state.favorites.push(favoritesId);
      }
    },
  },
});

export const selectFavorites = (state) => state.favorites.favorites;

export const { toggleFavorites } = slice.actions;

export default slice.reducer;
