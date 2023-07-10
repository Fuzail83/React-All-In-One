import React from "react";
import "../assets/css/Home.css";

const Drawer = ({ columns, visibleColumns, onColumnShowHide, onClose }) => {
  console.log("columns", columns, visibleColumns, onColumnShowHide);

  return (
    <div
      className={`column-drawer ${visibleColumns ? "open" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: "300px",
        background: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        transform: visibleColumns ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Manage Column</h3>
        <button
          className="close-button"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <div>
        {columns.map((item, index) => (
          <label
            key={index}
            className="checkbox"
            style={{ display: "block", marginBottom: "10px" }}
          >
            <input
              type="checkbox"
              name={item.value}
              checked={visibleColumns[item.value]}
              onChange={onColumnShowHide}
            />
            {item.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Drawer;
