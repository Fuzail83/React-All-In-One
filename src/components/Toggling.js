import React, { useState } from "react";
import "../components/assets/css/Toggle.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from "./common/Modal";

const Toggling = () => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const [checkBoxToggle, setCheckBoxToggle] = useState(false);
  const [isImageLogo, setIsImageLogo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(false);

  const handleButtonToggle = () => {
    setButtonToggle(!buttonToggle);
  };

  const handleCheckBoxToggle = (prevState) => {
    console.log("prevState", prevState);
    setCheckBoxToggle((prevState) => !prevState);
    // setCheckBoxToggle(!checkBoxToggle);
  };

  // Image Toggle
  const imageLogoToggle = () => {
    setIsImageLogo(!isImageLogo);
    setSelectedImage(null);
    setImagePreview(false);
  };

  // Image Upload Method

  const handleImageUpload = (e) => {
    const file = e.target?.files?.[0];
    if (file) {
      // Create a FileReader to read the image data
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedImage(reader.result);
        console.log(reader.result);
      };
    }
  };

  // Remove Image
  const handleImageRemove = () => {
    setSelectedImage(null);
    // clear the value of image name
    const fileInput = document.getElementById("image-input");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  // Image preview
  const handleImagePreview = () => {
    setImagePreview(selectedImage);
    setImagePreview(true);
  };

  // Close Image Preview Modal
  const handleImagePreviewClose = () => {
    setImagePreview(false);
  };

  return (
    <>
      <Helmet title="Toggling" />
      <div className="container-data">
        <div>
          <button onClick={handleButtonToggle} className="button">
            Button Toggle Data
          </button>
          {buttonToggle && <p className="content">Content</p>}
        </div>
      </div>
      <div className="checkbox-wrapper-14">
        <input
          id="s1-14"
          type="checkbox"
          className="switch"
          onChange={handleCheckBoxToggle}
          checked={checkBoxToggle}
        />
        <label htmlFor="s1-14">Switch</label>
        {checkBoxToggle && <h3 className="checkboxContent">Checkbox Data</h3>}
      </div>
      <div>
        <input type="checkbox" onChange={imageLogoToggle} />
        {isImageLogo && (
          <input
            id="image-input"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              handleImageUpload(e);
            }}
          />
        )}
        {selectedImage && (
          <div className="preview-show">
            <img src={selectedImage} alt="Image" />
            <Button variant="add-data" onClick={handleImageRemove}>
              Remove{" "}
            </Button>
            <Link className="theme-color" to="#" onClick={handleImagePreview}>
              <ins>Preview</ins>
            </Link>
          </div>
        )}

        {/* {imagePreview && <img src={imagePreview} alt="Preview" />} */}

        {imagePreview && (
          <Modal
            isOpen={imagePreview}
            onClose={handleImagePreviewClose}
            title="Preview Image"
            content={<img src={selectedImage} alt="Preview" />}
          />
        )}
      </div>
    </>
  );
};

export default Toggling;
