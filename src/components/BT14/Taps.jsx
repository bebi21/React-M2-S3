import React, { Component } from "react";

export default class Taps extends Component {
  constructor() {
    super();
    this.state = {
      taps: [
        {
          name: "Ấn để đổi các taps khác nhau,(ấn Thể Thao 3 lần sẽ có điều đặc  biệt)",
        },
        {
          name: "Thể Thao",
        },
        {
          name: "Văn  Học",
        },
        {
          name: "Khoa Học",
        },
        {
          name: "Hellu Các Bạn",
        },
        {
          name: "Chúc mọi người Buổi sáng vui  vẻ",
        },
        {
          name: "Bay  màu code chưa fixx  được ",
        },
      ],
      number: 0,
      count: 0,
    };
  }

  changeTaps = (taps) => {
    if (this.state.count > 1) {
      this.setState({
        number: 4,
        count: 0,
      });
      setTimeout(() => {
        console.log(1);
        this.setState({
          number: 5,
        });
      }, 2000);
      setTimeout(() => {
        console.log(2);
        this.setState({
          number: 6,
        });
      }, 4000);
      setTimeout(() => {
        console.log(3);
        this.setState({
          number: 5,
        });
      }, 6000);
      setTimeout(() => {
        console.log(4);
        this.setState({
          number: 0,
        });
      }, 8000);
      return;
    }
    if (taps == 1) {
      this.setState({
        number: 1,
        count: this.state.count + 1,
      });
      {
        setTimeout(() => {
          this.setState({
            number: 0,
          });
        }, 2000);
      }
    } else if (taps == 2) {
      this.setState({
        number: 2,
      });
      {
        setTimeout(() => {
          this.setState({
            number: 0,
          });
        }, 3000);
      }
    } else if (taps == 3) {
      this.setState({
        number: 3,
      });
      {
        setTimeout(() => {
          return this.setState({
            number: 0,
          });
        }, 3000);
      }
    }
  };
  render() {
    return (
      <>
        <p>{this.state.taps[this.state.number].name}</p>
        <p></p>
        <button onClick={() => this.changeTaps(1)}>Thể Thao</button>
        <button onClick={() => this.changeTaps(2)}>Văn Hóa</button>
        <button onClick={() => this.changeTaps(3)}>Khoa Học</button>
      </>
    );
  }
}
