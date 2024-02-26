import { itemReducer } from "_redux/slices/itemSlice";

import { configureStore } from "@reduxjs/toolkit";

const store: any = configureStore({
  reducer: {
    item: itemReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {items: ItemState}
export type AppDispatch = typeof store.dispatch;

export default store;
