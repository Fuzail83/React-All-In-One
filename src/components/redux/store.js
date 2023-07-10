import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/ProductSlice";
import postReducer from "./slices/postSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    posts: postReducer,
  },
});

// console.log("store", store);
export default store;
