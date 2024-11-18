import React, { useState } from "react";
import Validation from "./common/Validations";

const ContactUs = () => {
  const initialState = {
    name: "",
    phnNumber: "",
    email: "",
  };

  const [data, setData] = useState(initialState);

  const [submitData, setSubmitData] = useState([]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    const error = { ...errors };

    delete error[fieldName];
    setErrors(error);

    setData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = Validation(data);
    if (Object.keys(err).length > 0) {
      setErrors({ ...err });
      return;
    } else {
      console.log("11111111111111", data);
      setSubmitData([...submitData, data]);
      setData(initialState);
    }
  };

  console.log("data", submitData);

  const onDelete = (index) => {
    const filterData = submitData.filter((value, i) => {
      return i !== index;
    });
    setSubmitData(filterData);
  };

  const deleteAll = () => {
    setSubmitData([]);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  error={errors["name"]}
                />
                <p style={{ color: "red" }}>{errors && errors["name"]}</p>
              </div>
              <div className="form-group">
                <label htmlFor="phnNumber">Phone Number:</label>
                <input
                  type="text"
                  name="phnNumber"
                  id="phnNumber"
                  className="form-control"
                  value={data.phnNumber}
                  onChange={handleChange}
                  //   error={errors["phnNumber"]}
                />
              </div>
              {/* <p>{errors && errors["phnNumber"]}</p> */}
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  value={data.email}
                  onChange={handleChange}
                  //   error={errors["email"]}
                />
              </div>

              {/* <p>{errors && errors["email"]}</p> */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>

              {/* <Toaster position="top-right" /> */}
            </form>
          </div>
          <div className="col-md-6">
            {/* <button className="btn btn-secondary" onClick={openDrawerColumn}>
              Open Drawer
            </button> */}
            <button onClick={deleteAll}>Delete All</button>
            {/* <button className="btn btn-danger" onClick={handleDeleteAll}>
              Delete All
            </button> */}

            {/* <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchText}
                  onChange={handleSearchChange}
                />
              </div>
            </div> */}
            <div>{/* <p>Search Results: {searchResultsLength}</p> */}</div>
            <table className="table submit-data-table mt-4">
              {/* Head  Data  Start  */}
              {/* <thead>
                <tr className="light-bg">
                  {Object.keys(visibleColumns).map((key, index) =>
                    visibleColumns[key] ? (
                      <th key={index}>
                        <div className="fixed-content">{key}</div>
                      </th>
                    ) : null
                  )}
                </tr>
              </thead> */}
              <thead>
                <tr className="light-bg">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              {/* Head  Data  End  */}
              <tbody>
                {submitData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phnNumber}</td>
                    <button onClick={() => onDelete(index)}>Delete</button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Drawer Start  */}
        {/* {openDrwaer && (
          <Drawer
            columns={tableHeaders}
            visibleColumns={visibleColumns}
            onColumnShowHide={handleColumnShowHide}
            onClose={closeDrawerColumn}
          />
        )} */}
      </div>
    </>
  );
};

export default ContactUs;
