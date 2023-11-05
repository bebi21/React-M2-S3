import React, { Component } from "react";

export default class InputSong extends Component {
  constructor() {
    super();
    this.state = {
      song: "",
      count: 0,
    };
  }
  takeInput = (event) => {
    if (this.state.count == 1) {
      event.target.value = "";
      this.setState({
        count: 0,
      });
      return;
    }
    this.setState({
      song: event.target.value,
    });
  };
  render() {
    return (
      <>
        <form action="">
          <input type="text" onChange={this.takeInput} />
          <button
            onClick={(event) => {
              event.preventDefault();
              this.props.takeNewSong(this.state.song);
              this.setState({
                song: "",
                count: 1,
              });
            }}
          >
            Add Song
          </button>
        </form>
      </>
    );
  }
}
