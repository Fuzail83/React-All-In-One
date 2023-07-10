import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Drawer from "./common/Drawer";
import Validation from "./common/Validations";
import useDebounce from "./common/UseDebounce";
import { Helmet } from "react-helmet";
import ViewDataModal from "./common/ViewDataModal";
import { ToastBar, Toaster, toast } from "react-hot-toast";

// ConfirmationPopup component
// const ConfirmationPopup = ({ message, onConfirm, onCancel }) => {
//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <h3>{message}</h3>
//         <button onClick={onConfirm}>Yes</button>
//         <button onClick={onCancel}>No</button>
//       </div>
//     </div>
//   );
// };
const Contact = () => {
  // const [showConfirmation, setShowConfirmation] = useState(false);
  // const [deleteIndex, setDeleteIndex] = useState(null);

  const initialState = {
    name: "",
    phnNumber: "",
    email: "",
  };

  const [data, setData] = useState(initialState);

  const [submitData, setSubmitData] = useState([]);
  const [openDrwaer, setOpenDrwawer] = useState(false);
  // Errors  State
  const [errors, setErrors] = useState({});
  // Search State
  const [searchText, setSeachText] = useState("");
  // Show Hide Data State
  const [visibleColumns, setVisibleColumns] = useState({
    name: true,
    phnNumber: true,
    email: true,
  });
  //  Use debounce search data
  const debounce = useDebounce(searchText, 2000);

  console.log("Debounced", debounce);

  // Handle for search
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSeachText(value);
  };

  console.log("submitData", submitData);

  //  Open drawer method
  const openDrawerColumn = () => {
    setOpenDrwawer((prevState) => !prevState);
  };

  // Close Drawer method

  const closeDrawerColumn = () => {
    setOpenDrwawer(false);
  };

  // handle change for checkbox show hide data

  const handleColumnShowHide = (e) => {
    const columnName = e.target.name;
    const columnValue = e.target.checked;
    setVisibleColumns((prevState) => ({
      ...prevState,
      [columnName]: columnValue,
    }));
  };

  // Handle  Change for Input

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
    console.log("fieldName:", fieldName, "fieldValue:", fieldValue);
  };

  // Save data Method

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = Validation(data);
    if (Object.keys(err).length > 0) {
      setErrors({ ...err });
      return;
    } else {
      setSubmitData([...submitData, data]);
      setData(initialState);
    }
    toast.success("Successfully created!");
  };
  // Table Header Data
  const tableHeaders = [
    {
      name: "Name",
      value: "name",
      isVisible: visibleColumns.name,
    },
    {
      name: "Phone Number",
      value: "phnNumber",
      isVisible: visibleColumns.phnNumber,
    },
    {
      name: "Email",
      value: "email",
      isVisible: visibleColumns.email,
    },
  ];
  // Delete Data
  const onDelete = (index) => {
    const filterData = submitData.filter((value, i) => {
      return i !== index;
    });
    setSubmitData(filterData);
    toast.success("Successfully Deleted!");
  };

  // const onDelete = (index) => {
  //   setDeleteIndex(index);
  //   setShowConfirmation(true);
  // };

  // const confirmDelete = () => {
  //   const filterData = submitData.filter((value, i) => i !== deleteIndex);
  //   setSubmitData(filterData);
  //   setShowConfirmation(false);
  //   setDeleteIndex(null);
  // };

  // const cancelDelete = () => {
  //   setShowConfirmation(false);
  //   setDeleteIndex(null);
  // };

  //  all data search
  const filteredData = submitData.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );
  //  single search

  const filteredPosts = submitData.filter((post) =>
    post.name.includes(debounce)
  );

  // Delete All Method
  const handleDeleteAll = () => {
    setSubmitData([]);
  };

  // showing search result
  const searchResultsLength = filteredPosts.length;

  return (
    <>
      <Helmet title="Contact Us" />
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
                  error={errors["phnNumber"]}
                />
                <p style={{ color: "red" }}>{errors && errors["phnNumber"]}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  value={data.email}
                  onChange={handleChange}
                  error={errors["email"]}
                />
                <p style={{ color: "red" }}>{errors && errors["email"]}</p>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>

              <Toaster position="top-right" />
            </form>
          </div>
          <div className="col-md-6">
            <button className="btn btn-secondary" onClick={openDrawerColumn}>
              Open Drawer
            </button>

            <button className="btn btn-danger" onClick={handleDeleteAll}>
              Delete All
            </button>

            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchText}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div>
              <p>Search Results: {searchResultsLength}</p>
            </div>
            <table className="table submit-data-table mt-4">
              {/* Head  Data  Start  */}
              <thead>
                <tr className="light-bg">
                  {Object.keys(visibleColumns).map((key, index) =>
                    visibleColumns[key] ? (
                      <th key={index}>
                        <div className="fixed-content">{key}</div>
                      </th>
                    ) : null
                  )}
                </tr>
              </thead>
              {/* Head  Data  End  */}
              <tbody>
                {filteredPosts.map((item, index) => (
                  <tr key={index}>
                    {Object.keys(visibleColumns).map((key) =>
                      visibleColumns[key] ? <td>{item[key]}</td> : null
                    )}

                    <button onClick={() => onDelete(index)}>Delete</button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Drawer Start  */}
        {openDrwaer && (
          <Drawer
            columns={tableHeaders}
            visibleColumns={visibleColumns}
            onColumnShowHide={handleColumnShowHide}
            onClose={closeDrawerColumn}
          />
        )}
        {/* Drawer End  */}
        {/* {showConfirmation && (
        <ConfirmationPopup
          message="Are you sure you want to delete this item?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )} */}
      </div>
    </>
  );
};

export default Contact;
