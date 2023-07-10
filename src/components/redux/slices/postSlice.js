import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const API_URL = "https://dummyjson.com/posts";
const initialState = {
  posts: [],
};

export const getData = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}`).then((res) => res);
    // console.log("response", response);
    dispatch(fetchPosts(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPosts: (state, action) => {
      state.posts = action.payload;
    },
    // addProduct: (state, action) => {
    //   state.products.push(action.payload);
    // },
  },
});

export const { addProduct, fetchPosts } = postSlice.actions;

export default postSlice.reducer;
