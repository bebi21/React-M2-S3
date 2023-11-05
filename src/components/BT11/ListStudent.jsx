import React, { Component } from "react";

export default class ListStudent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.students.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.school}</td>
      </tr>
    ));
  }
}
