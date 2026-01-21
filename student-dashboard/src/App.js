import { Component } from "react";
import StudentList from "./components/StudentList";

class App extends Component {
  state = {
    students: [
      { id: 1, name: "GaJu", mark: 85 },
      { id: 2, name: "Jathu", mark: 90 },
      { id: 3, name: "GaJu_Ja", mark: 78 }
    ]
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Student Dashboard</h2>
        <StudentList students={this.state.students} />
      </div>
    );
  }
}

export default App;
