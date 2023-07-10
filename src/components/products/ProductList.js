import React from "react";
import "../assets/css/Product.css";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const { products } = props.data;

  return (
    <>
      <Link to="/addProduct"> Add Product</Link>
      <div className="product-list">
        {products?.map((product) => {
          const { id, brand, title, description, price, thumbnail, images } =
            product;

          return (
            <div key={id} className="product-card">
              <div className="product-image">
                <img src={thumbnail} alt={brand} />
              </div>
              <div className="product-details">
                <h3 className="product-brand">{brand}</h3>
                <h4 className="product-title">{title}</h4>
                <p className="product-description">{description}</p>
                <p className="product-price">${price}</p>
              </div>
              {/* <div className="product-gallery">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Product ${index + 1}`} />
              ))}
            </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
