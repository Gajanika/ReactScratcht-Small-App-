import React from "react";

const Student = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Student;
//Parent component → Child component-க்கு data அனுப்புறது தான் props