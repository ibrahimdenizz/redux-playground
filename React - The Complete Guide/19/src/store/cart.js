import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [],
  totalItemQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      state.totalItemQuantity++;

      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
      } else
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
    },
    removeItemToCart(state, action) {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      state.totalItemQuantity--;

      if (item && item.quantity === 1)
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== item.id
        );
      else if (item) {
        item.quantity--;
        item.totalPrice -= item.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
