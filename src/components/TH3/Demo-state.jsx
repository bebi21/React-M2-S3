import React, { Component } from "react";

export default class Demo_state extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          click me
        </button>
        <br />
        <label>{this.state.value}</label>
      </div>
    );
  }
}
