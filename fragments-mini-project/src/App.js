import React, { useState, useMemo, useCallback } from "react";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = useCallback((name) => {
    setStudents((prev) => [...prev, name]);
  }, []);

  const removeStudent = useCallback((index) => {
    setStudents((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const totalStudents = useMemo(() => {
    return students.length;
  }, [students]);

  return (
    <ThemeContext.Provider value="dark">
      <>
        <Header />
        <StudentForm addStudent={addStudent} />
        <StudentList students={students} removeStudent={removeStudent} />
        <h4>Total Students: {totalStudents}</h4>
      </>
    </ThemeContext.Provider>
  );
};

export default App;
