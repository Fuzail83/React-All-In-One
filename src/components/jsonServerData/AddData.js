import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const AddData = () => {
  // const history = useHistory();
  const [data, setData] = useState({
    fname: "",
    email: "",
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
    console.log("fieldName:", fieldName, "fieldValue:", fieldValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let response = axios.post("http://localhost:3006/contacts/", data);
    if (response) {
      alert("data added");
    } else {
      alert("data not added");
    }
    setData({
      fname: "",
      email: "",
    });
    // history.push("/list");
  };

  return (
    <div>
      <input
        type="text"
        name="fname"
        value={data.fname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default AddData;
