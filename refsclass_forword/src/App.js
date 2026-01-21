import React, { Component } from "react";
import ClassInput from "./components/ClassInput";
import ForwardInput from "./components/ForwardInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.forwardRef = React.createRef();
  }

  focusForwardInput = () => {
    this.forwardRef.current.focus();
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Refs Mini Project</h2>

        <ClassInput />

        <hr />

        <ForwardInput ref={this.forwardRef} />
        <button onClick={this.focusForwardInput}>
          Focus Forward Ref Input
        </button>
      </div>
    );
  }
}

export default App;
