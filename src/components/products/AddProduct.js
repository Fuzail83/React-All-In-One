import React, { useState } from "react";
import { addProduct } from "../redux/slices/ProductSlice";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ToastBar, Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const initialState = {
    brand: "",
    title: "",
    description: "",
    price: "",
    thumbnail: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addProduct(data));
    setData(initialState);
    toast.success("Successfully Added!");

    navigate("/productList"); // Redirect to List page
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <Form className="add-product-form">
        <Form.Control
          type="text"
          name="brand"
          value={data.brand}
          onChange={handleChange}
          placeholder="Brand"
        />

        <Form.Control
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Title"
        />

        <Form.Control
          type="text"
          name="description"
          value={data.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <Form.Control
          type="text"
          name="price"
          value={data.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <Form.Control
          type="text"
          name="thumbnail"
          value={data.thumbnail}
          onChange={handleChange}
          placeholder="Thumbnail"
        />

        <Button onClick={handleSubmit}>Add Product</Button>
      </Form>
      <Toaster position="top-right" />
    </div>
  );
};

export default AddProduct;
