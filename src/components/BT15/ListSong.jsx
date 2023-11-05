import React, { Component } from "react";

export default class ListSong extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.listSong.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.props.index(index)}>remove</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
