import React, { useState, useRef, useEffect } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState(""); // ✅ fixed
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = () => {
    if (name.trim() === "") return;

    addStudent(name);
    setName("");
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Student name"
      />

      <button onClick={submitHandler}>ADD +</button>
    </div>
  );
};

export default StudentForm;
