import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/slices/ProductSlice";
import ProductList from "./ProductList";
import { Helmet } from "react-helmet";

const ManageProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log("products", products);

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
      <Helmet title="Redux" />
      <h2>Product List</h2>

      <ProductList data={products} />
    </div>
  );
};

export default ManageProduct;
