import React, { useState, useEffect } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(text.length);
  }, [text]);

  return (
    <div>
      <h3>Character Counter</h3>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />

      <p>Characters: {count}</p>
    </div>
  );
};

export default Form;
