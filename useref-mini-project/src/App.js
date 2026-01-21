import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (name) => {
    setStudents((prev) => [...prev, name]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Manager (useRef)</h2>

      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
