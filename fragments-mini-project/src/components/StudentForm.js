import React, { useState, useRef, useEffect } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = () => {
    if (name.trim() === "") return;
    addStudent(name);
    setName("");
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter student name"
      />
      <button onClick={submitHandler}>Add</button>
    </>
  );
};

export default StudentForm;
