import React, { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Portal Mini Project</h1>

      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default App;
