import React from "react";
import "../assets/css/Modal.css";

const Modal = ({ isOpen, onClose, title, content }) => {
  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <button onClick={onClose} className="close-btn">
          Close
        </button>
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
