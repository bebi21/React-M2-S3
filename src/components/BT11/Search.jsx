import React, { Component } from "react";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      student: "",
      reset: "",
    };
  }
  takeInput = (event) => {
    if (event.target.value == "") {
      this.props.searchValue(this.state.reset);
      return;
    }
    this.setState({
      student: event.target.value,
    });
  };
  takeValue = (event) => {
    this.props.sortValue(event.target.value);
  };

  render() {
    return (
      <>
        <input type="text" onChange={this.takeInput} />
        <button onClick={() => this.props.searchValue(this.state.student)}>
          Search
        </button>

        <select name="" id="" onChange={this.takeValue}>
          <option value="normal">Sắp xếp theo tuổi</option>
          <option value="up">Bé đến Lớn</option>
          <option value="down">Lớn đến bé</option>
        </select>
      </>
    );
  }
}
