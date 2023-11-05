import React, { Component } from "react";
import ListStudent from "./ListStudent";
import Search from "./Search";

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      listStudent: [
        {
          name: "AC",
          age: 22,
          school: "ab",
        },
        {
          name: "B",
          age: 24,
          school: "ac",
        },
        {
          name: "C",
          age: 23,
          school: "ad",
        },
        {
          name: "C",
          age: 27,
          school: "ad",
        },
      ],
      searchValue: "",
      usedListStudent: [
        {
          name: "AC",
          age: 22,
          school: "ab",
        },
        {
          name: "B",
          age: 24,
          school: "ac",
        },
        {
          name: "C",
          age: 23,
          school: "ad",
        },
        {
          name: "C",
          age: 27,
          school: "ad",
        },
      ],
    };
  }

  searchValue = (value) => {
    if (value == "") {
      this.setState({
        usedListStudent: this.state.listStudent,
      });
    } else {
      let result = this.state.usedListStudent.filter((item) => {
        return item.name.includes(value);
      });
      this.setState({
        usedListStudent: result,
      });
    }
  };
  sortValue = (value) => {
    if (value == "up") {
      this.setState({
        usedListStudent: this.state.usedListStudent.sort((a, b) => {
          return a.age - b.age;
        }),
      });
    } else if (value == "down") {
      this.setState({
        usedListStudent: this.state.usedListStudent.sort((a, b) => {
          return -a.age + b.age;
        }),
      });
    } else if (value == "normal") {
      this.setState({
        usedListStudent: this.state.listStudent,
      });
    }
  };
  render() {
    return (
      <>
        <Search searchValue={this.searchValue} sortValue={this.sortValue} />
        <table border="1px solid black" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>Trường</th>
            </tr>
          </thead>
          <tbody>
            <ListStudent students={this.state.usedListStudent}></ListStudent>
          </tbody>
        </table>
      </>
    );
  }
}
