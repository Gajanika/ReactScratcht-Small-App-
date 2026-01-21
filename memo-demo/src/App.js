import React, { useState } from "react";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Arun" },
    { id: 2, name: "Bala" }
  ]);

  const [counter, setCounter] = useState(0);

  const addStudent = () => {
    setStudents(prev => [
      ...prev,
      { id: prev.length + 1, name: "Student " + (prev.length + 1) }
    ]);
  };

  console.log("App rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h2>React.memo Mini Project</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <br /><br />

      <button onClick={addStudent}>
        Add Student
      </button>

      <StudentList students={students} />
    </div>
  );
}

export default App;
