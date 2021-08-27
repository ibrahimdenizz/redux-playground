import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToCart(state, action) {
      const item = state.items.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      state.totalQuantity++;
      state.changed = true;

      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
      } else
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
    },
    removeItemToCart(state, action) {
      const item = state.items.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      state.totalQuantity--;
      state.changed = true;

      if (item && item.quantity === 1)
        state.items = state.items.filter((cartItem) => cartItem.id !== item.id);
      else if (item) {
        item.quantity--;
        item.totalPrice -= item.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
