import { PureComponent } from "react";
import StudentItem from "./StudentItem";

class StudentList extends PureComponent {
  render() {
    console.log("StudentList Rendered");

    return (
      <div>
        {this.props.students.map(student => (
          <StudentItem key={student.id} student={student} />
        ))}
      </div>
    );
  }
}

export default StudentList;
