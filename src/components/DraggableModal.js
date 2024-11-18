import React, { useState } from "react";
import Draggable from "react-draggable"; // Import Draggable
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Button } from "react-bootstrap"; // Import Bootstrap Button for demo purposes

const DraggableBox = () => {
  const [showBox, setShowBox] = useState(false);

  const openBox = () => setShowBox(true);
  const closeBox = () => setShowBox(false);

  return (
    <div>
      <Button variant="primary" onClick={openBox}>
        Open Draggable Box
      </Button>

      {showBox && (
        <Draggable handle=".box-header" bounds="body" axis="both">
          <div className="draggable-box" style={boxStyle}>
            <div className="box-header" style={headerStyle}>
              <h5 className="box-title">Draggable Box</h5>
              <Button variant="close" onClick={closeBox} style={closeBtnStyle}>
                ✕
              </Button>
            </div>
            <div className="box-body">
              <p>
                You can drag this box by the header, and it stays within the
                body.
              </p>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

// Styles for the draggable box and header
const boxStyle = {
  width: "300px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#fff",
  padding: "10px",
  position: "absolute",
  top: "100px",
  left: "100px",
  zIndex: 1000,
};

const headerStyle = {
  cursor: "move",
  backgroundColor: "#f7f7f7",
  padding: "10px",
  borderBottom: "1px solid #ccc",
};

const closeBtnStyle = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: "16px",
  float: "right",
};

export default DraggableBox;
