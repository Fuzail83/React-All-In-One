import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const LocalStorage = () => {
  const [fname, setName] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("authenticate")) || []
  );

  // AFTER REFRESH DATA ADD TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("authenticate", JSON.stringify(data));
  }, [data]);

  // AFTER REFRESH DATA Get TO LOCAL STORAGE
  useEffect(() => {
    const storedData = localStorage.getItem("authenticate");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const newDATA = {
      name: fname,
      id: new Date().getTime().toString(),
    };

    setData([...data, newDATA]);
    setName("");
  };
  console.log("data", data);

  const onDelete = (index) => {
    const deleteData = data.filter((ele) => {
      return ele.id !== index;
    });
    setData(deleteData);
  };

  const deleteAll = () => {
    setData([]);
  };
  return (
    <>
      <Helmet title="Local Storage" />
      <div className="App">
        <input
          type="text"
          value={fname}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={onSubmit}>submit</button>
        <button onClick={deleteAll}>Delete All</button>
      </div>
      {data.map((currentElem) => (
        <div>
          <h3>{currentElem.name}</h3>
          <button onClick={() => onDelete(currentElem.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default LocalStorage;
