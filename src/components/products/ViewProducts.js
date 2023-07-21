import React, { useEffect } from "react";
import "../assets/css/Product.css";
import { Link, useParams } from "react-router-dom";
import { getDataById } from "../redux/slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const ViewProducts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log("products", products);
  useEffect(() => {
    dispatch(getDataById(id));
  }, []);
  console.log("id", id);
  return (
    <div>
      <div className="product-details">
        <Link to="/productList" className="back-to-list-link">
          <button className="back-to-list-button">Back to Products</button>
        </Link>
        <h2>Product Details</h2>
        {products ? (
          <div className="product-card">
            <div className="product-image">
              <img src={products.thumbnail} alt={products.title} />
            </div>
            <div className="product-info">
              <h3 className="product-title">{products.title}</h3>
              <p className="product-category">{products.category}</p>
              <p className="product-description">{products.description}</p>
              <p className="product-price">${products.price}</p>
              <p className="product-stock">In Stock: {products.stock}</p>
              <div className="product-rating">
                <span className="rating-stars">{products.rating}</span>
                <span className="rating-count">(35 ratings)</span>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ViewProducts;
