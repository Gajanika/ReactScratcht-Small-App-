import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div style={backdropStyle}>
      <div style={modalStyle}>
        <h2>React Portal Modal 🚀</h2>
        <p>This modal is rendered using React Portal</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot
  );
}

const backdropStyle = {
  position: "fixed", 
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  margin: "100px auto",
  width: "300px",
  borderRadius: "8px",
  textAlign: "center",
};

export default Modal;
