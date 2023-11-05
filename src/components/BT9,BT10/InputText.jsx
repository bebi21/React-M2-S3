import React, { Component } from "react";

export default class InputText extends Component {
  constructor() {
    super();
    this.state = {
      write: "",
    };
  }
  showText1 = (event) => {
    this.state.showText(event.target.value);
  };

  render() {
    return (
      <>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onClick={this.showText}
        ></textarea>
        <button>Write</button>
      </>
    );
  }
}
