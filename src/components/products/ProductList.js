import React from "react";
import "../assets/css/Product.css";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const { products } = props.data;

  return (
    <div className="product-container">
      <div className="header">
        <Link to="/addProduct" className="add-product-link">
          Add Product
        </Link>
      </div>
      <div className="product-list">
        {products?.map((product) => {
          const { id, brand, title, description, price, thumbnail, images } =
            product;

          return (
            <Link key={id} to={`/productList/${id}`} className="product-link">
              <div className="product-card">
                <div className="product-image">
                  <img src={thumbnail} alt={brand} />
                </div>
                <div className="product-details">
                  <h3 className="product-brand">{brand}</h3>
                  <h4 className="product-title">{title}</h4>
                  <p className="product-description">{description}</p>
                  <p className="product-price">${price}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
