import React from "react";

const StudentList = ({ students }) => {
  return (
    <ul>
      {students.map((stu, index) => (
        <li key={index}>{stu}</li>
      ))}
    </ul>
  );
};

export default StudentList;
