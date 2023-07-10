import React, { useState } from "react";
import "../components/assets/css/AddRowDelete.css";
import { Helmet } from "react-helmet";
const AddRowDelete = () => {
  const initialMediaResource = {
    label: "",
    keywords: "",
    isPublished: true,
    resourceType: "Media",
  };

  const [mediaInfos, setMediaInfos] = useState([initialMediaResource]);

  const handleAddRow = () => {
    setMediaInfos((prevMediaInfos) => [
      ...prevMediaInfos,
      initialMediaResource,
    ]);
  };

  const handleDeleteRow = (index) => {
    if (index === 0) {
      // Prevent deleting the first row
      return;
    }
    setMediaInfos((prevMediaInfos) => {
      const updatedMediaInfos = [...prevMediaInfos];
      updatedMediaInfos.splice(index, 1);
      return updatedMediaInfos;
    });
  };

  const handleChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    setMediaInfos((prevMediaInfos) => {
      const updatedMediaInfos = [...prevMediaInfos];
      const updatedMediaInfo = { ...updatedMediaInfos[index] };
      updatedMediaInfo[name] = type === "checkbox" ? checked : value;
      updatedMediaInfos[index] = updatedMediaInfo;
      return updatedMediaInfos;
    });
  };

  const handleSaveData = () => {
    // Perform any actions you need with the mediaInfos data
    console.log(mediaInfos);
  };

  return (
    <>
      {" "}
      <Helmet title="Row Add Delete" />
      <div className="container">
        {mediaInfos.map((mediaInfo, index) => (
          <div key={index} className="row">
            <div className="col">
              <label>
                Label:
                <input
                  type="text"
                  name="label"
                  value={mediaInfo.label}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
            </div>
            <div className="col">
              <label>
                Keywords:
                <input
                  type="text"
                  name="keywords"
                  value={mediaInfo.keywords}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
            </div>
            <div className="col">
              <label>
                Is Published:
                <input
                  type="checkbox"
                  name="isPublished"
                  checked={mediaInfo.isPublished}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
            </div>
            <div className="col">
              <label>
                Type:
                <select
                  name="resourceType"
                  value={mediaInfo.resourceType}
                  onChange={(e) => handleChange(e, index)}
                >
                  <option value="Media">Media</option>
                  <option value="Image">Image</option>
                  <option value="Video">Video</option>
                </select>
              </label>
            </div>
            {index !== 0 && (
              <div className="col">
                <button onClick={() => handleDeleteRow(index)}>Delete</button>
              </div>
            )}
            <hr />
          </div>
        ))}
        <div className="button-container">
          <button onClick={handleAddRow}>Add Row</button>
          <button onClick={handleSaveData}>Save Data</button>
        </div>
      </div>
    </>
  );
};

export default AddRowDelete;
