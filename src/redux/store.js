import { configureStore, combineReducers } from "@reduxjs/toolkit";
import campersReducer from "./campers/campersSlice";
import filtersReducer from "./filter/filtersSlice";
import locationReducer from "./locations/locationsSlice";
import favoritesReducer from "./favorites/favoritesSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["filters", "favorites"],
};

const rootReducer = combineReducers({
  filters: filtersReducer,
  campers: campersReducer,
  locations: locationReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
