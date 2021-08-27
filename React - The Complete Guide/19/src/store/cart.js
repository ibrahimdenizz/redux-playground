import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [{ id: 1, title: "Test Item", quantity: 3, price: 6 }],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (item) item.quantity++;
      else state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    increaseItemQuantity(state, action) {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (item) item.quantity++;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (item && item.quantity === 1)
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== item.id
        );
      else if (item) item.quantity--;
    },
    showCart(state) {
      state.showCart = true;
    },
    hideCart(state) {
      state.showCart = false;
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
