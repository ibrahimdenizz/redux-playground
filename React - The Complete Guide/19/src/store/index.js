import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart";
import { shopReducer } from "./shop";

export default configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
  },
});
