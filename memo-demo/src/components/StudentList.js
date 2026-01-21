import React from "react";
import StudentItem from "./StudentItem";

const StudentList = ({ students }) => {
  console.log("StudentList rendered");

  return (
    <ul>
      {students.map(student => (
        <StudentItem
          key={student.id}
          name={student.name}
        />
      ))}
    </ul>
  );
};

export default StudentList;
