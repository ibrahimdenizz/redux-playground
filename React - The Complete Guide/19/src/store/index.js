import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart";
import { shopReducer } from "./shop";
import { uiReducer } from "./ui";

export default configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
    ui: uiReducer,
  },
});
