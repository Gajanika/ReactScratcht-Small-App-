import { useState, useEffect, useRef } from "react";

function Login({ setUser }) {
    // useState – Input field value store panna
  const [name, setName] = useState("");
  //  useRef – DOM access panna (input focus)
  const inputRef = useRef();

  //  useEffect – Lifecycle maadhiri work
  // Component load aagumbodhu mattum run aagum
  useEffect(() => {
    console.log("Login page loaded");
    // useRef use panni input-ku focus kudukrom
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <input
        ref={inputRef}  //  DOM-ku reference
        type="text"
        placeholder="Enter username"
        value={name}     // State value
        onChange={(e) => setName(e.target.value)}  //  State update
      />

      <br /><br />

      <button onClick={() => setUser(name)}>Login</button>
    </div>
  );
}

export default Login;
