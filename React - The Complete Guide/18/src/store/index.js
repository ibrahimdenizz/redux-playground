// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

/* 
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  
  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }
  
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  
  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }
  
  return state;
};

const store = createStore(counterReducer);

export default store;
*/
