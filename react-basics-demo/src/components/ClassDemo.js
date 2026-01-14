import React, { Component } from "react";

class ClassDemo extends Component {
  handleClick = () => {
    alert("Class Button Clicked");
  };

  render() {
    return (
      <div>
        <h2>Binding Event Handler</h2>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default ClassDemo;
