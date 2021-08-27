import { createSlice } from "@reduxjs/toolkit";

const shopInitialState = {
  products: [
    {
      id: 1,
      title: "Test Item",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id: 2,
      title: "Test2 Item",
      price: 12,
      description: "This is a first product - amazing!",
    },
  ],
};

const shopSlice = createSlice({
  name: "shop",
  initialState: shopInitialState,
});

export const shopReducer = shopSlice.reducer;
export const shopActions = shopSlice.actions;
