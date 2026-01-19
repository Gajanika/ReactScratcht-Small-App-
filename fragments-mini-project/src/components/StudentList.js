import React, { Fragment } from "react";

const StudentList = ({ students, removeStudent }) => {
  return (
    <Fragment>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}
            <button onClick={() => removeStudent(index)}>❌</button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default StudentList;
