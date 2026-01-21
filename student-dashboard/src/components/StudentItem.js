import { PureComponent } from "react";

class StudentItem extends PureComponent {
  render() {
    console.log("StudentItem Rendered:", this.props.student.name);

    return (
      <div
        style={{
          border: "1px solid #ccc",
          margin: "10px",
          padding: "10px",
          borderRadius: "5px"
        }}
      >
        <h4>{this.props.student.name}</h4>
        <p>Mark: {this.props.student.mark}</p>
      </div>
    );
  }
}

export default StudentItem;
