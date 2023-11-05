import React, { Component } from "react";

export default class BT9 extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      showTitle: "",
    };
  }
  showText1 = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  showText = () => {
    this.setState({
      showTitle: this.state.title,
    });
  };
  render() {
    return (
      <>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={this.showText1}
        ></textarea>
        <button onClick={this.showText}>write</button>
        <p>{this.state.showTitle}</p>
      </>
    );
  }
}
