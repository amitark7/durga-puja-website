import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from "./reducer/reducer";

const store = configureStore({
  reducer: {
    list: reducerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
