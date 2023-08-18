import React, { useState } from "react";

const MultipleImagesUpload = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [editedImageName, setEditedImageName] = useState("");

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      id: Math.random().toString(36).substring(7),
      name: file.name,
      file: file,
    }));
    setUploadedImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleEditImageName = (id, name) => {
    setEditedImageName(name);
    const newImages = uploadedImages.map((image) =>
      image.id === id ? { ...image, isEditing: true } : image
    );
    setUploadedImages(newImages);
  };

  const handleSaveImageName = (id) => {
    const newImages = uploadedImages.map((image) =>
      image.id === id
        ? { ...image, isEditing: false, name: editedImageName }
        : image
    );
    setUploadedImages(newImages);
    setEditedImageName("");
  };

  const handleDeleteImage = (id) => {
    const newImages = uploadedImages.filter((image) => image.id !== id);
    setUploadedImages(newImages);
  };
  return (
    <div>
      <h2>Multiple Image Upload</h2>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileSelect}
      />
      <div>
        <h3>Uploaded Images:</h3>
        <ul>
          {uploadedImages.map((image) => (
            <li key={image.id}>
              {image.isEditing ? (
                <>
                  <input
                    type="text"
                    value={editedImageName}
                    onChange={(e) => setEditedImageName(e.target.value)}
                  />
                  <button onClick={() => handleSaveImageName(image.id)}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <img
                    src={URL.createObjectURL(image.file)}
                    alt={image.name}
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                  <span>{image.name}</span>
                  <button
                    onClick={() => handleEditImageName(image.id, image.name)}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteImage(image.id)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultipleImagesUpload;
