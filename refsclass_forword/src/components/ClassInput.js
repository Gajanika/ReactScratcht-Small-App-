import React, { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <h3>Class Component Input</h3>
        <input ref={this.inputRef} placeholder="Class Input" />
        <br />
        <button onClick={this.focusInput}>
          Focus Class Input
        </button>
      </div>
    );
  }
}

export default ClassInput;
