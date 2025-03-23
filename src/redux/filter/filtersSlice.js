import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    transmission: "",
    engine: "",
    AC: "",
    kitchen: "",
    TV: "",
    bathroom: "",
    radio: "",
    refrigerator: "",
    gas: "",
    microwave: "",
    water: "",
    diesel: "",
    hybrid: "",
    form: "",
  },

  reducers: {
    setFilters(_, action) {
      return action.payload;
    },
    toggleFilter: (state, action) => {
      const key = action.payload;
      if (key === "automatic") {
        state.transmission =
          state.transmission === "automatic" ? "" : "automatic";
      } else {
        state[key] = state[key] === true ? "" : true;
      }
    },
    toggleForm: (state, action) => {
      const key = action.payload;
      state.form = state.form === key ? "" : key;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const selectFilters = (state) => state.filters;

export const { setFilters, toggleFilter, toggleForm, setLocation } =
  slice.actions;

export default slice.reducer;
