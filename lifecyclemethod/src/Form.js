import React, { useState, useEffect } from "react";

const Form = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Welcome! Page Loaded");
  }, []);

  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
};

export default Form;
