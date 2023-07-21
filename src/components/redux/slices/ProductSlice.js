import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const API_URL = "https://dummyjson.com/products";
const initialState = {
  products: [],
};

export const getData = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}`).then((res) => res);
    // console.log("response", response);
    dispatch(fetchProducts(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const getDataById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`).then((res) => res);
    console.log("gggggggg", response.data);
    dispatch(fetchProducts(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/add`, product);
    const addedProduct = response.data;
    dispatch(productAdded(addedProduct));
    console.log("Product added successfully:", addedProduct);
    dispatch(getData());
  } catch (error) {
    console.error("Error ", error);
  }
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
    productAdded: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { productAdded, fetchProducts } = productSlice.actions;

export default productSlice.reducer;
