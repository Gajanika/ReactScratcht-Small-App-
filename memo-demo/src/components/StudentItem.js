import React from "react";

const StudentItem = ({ name }) => {
  console.log("StudentItem rendered:", name);
  return <li>{name}</li>;
};

export default React.memo(StudentItem);
