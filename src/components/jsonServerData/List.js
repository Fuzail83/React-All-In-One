import axios from "axios";
import React, { useEffect, useState } from "react";

const List = () => {
  const [submitData, setSubmitData] = useState([]);

  useEffect(() => {
    getContact();
    console.log("submitData", submitData);
  }, []);

  const getContact = async () => {
    try {
      const response = await axios.get("http://localhost:3006/contacts");
      setSubmitData(response.data);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  return (
    <div>
      {submitData.map((contact) => (
        <div key={contact.id}>
          <h3>First Name: {contact.fname}</h3>
          <p>Email: {contact.email}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
