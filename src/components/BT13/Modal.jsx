import React, { Component } from "react";

export default class Modal extends Component {
  constructor() {
    super();
    this.state = {
      listCard: [
        {
          color: "red",
        },
        {
          color: "white",
        },
        {
          color: "black",
        },
        {
          color: "pink",
        },
      ],
      show: false,
      styleDiv: "hidden",
    };
  }
  showModal = () => {
    if (this.state.show == false) {
      this.setState({
        show: true,
        styleDiv: "visible",
      });
    } else if (this.state.show == true) {
      this.setState({
        show: false,
        styleDiv: "hidden",
      });
    }
  };
  render() {
    return (
      <>
        <div
          style={{
            visibility: this.state.styleDiv,
            width: "200px",
            height: "200px",
            border: "1px solid black",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          Hello Anh Em
        </div>
        <br />

        <button onClick={this.showModal}>Change Color</button>
      </>
    );
  }
}
