import React, { Component } from "react";

export default class ShowImg extends Component {
  constructor() {
    super();
    this.state = {
      currentNumberImg: 0,
      listImg: [
        { id: 1, img: "/img/Bat-Cuoi-Truoc-Nhung-07.jpg", title: "anh 1" },
        { id: 2, img: "/img/images.jpeg", title: "anh 2" },
        { id: 3, img: "/img/images (1).jpeg", title: "anh 3" },
        {
          id: 4,
          img: "/img/hinh-anh-meo-hai-huoc-yodyvn2.webp",
          title: "anh 4",
        },
        { id: 5, img: "/img/anh .jpeg", title: "anh 5" },
      ],
    };
  }
  changeImg = (status) => {
    if (status == "1") {
      this.setState({
        currentNumberImg: this.state.currentNumberImg + 1,
      });
      if (this.state.currentNumberImg === this.state.listImg.length - 1) {
        this.setState({
          currentNumberImg: 0,
        });
      }
    } else if (status == "0") {
      this.setState({
        currentNumberImg: this.state.currentNumberImg - 1,
      });
      if (this.state.currentNumberImg <= 0) {
        this.setState({
          currentNumberImg: this.state.listImg.length - 1,
        });
      }
    }
  };
  render() {
    return (
      <>
        <div key={1} style={{ height: "300px" }}>
          <img
            src={this.state.listImg[this.state.currentNumberImg].img}
            alt=""
            style={{ width: "200px" }}
          />
          <p>{this.state.listImg[this.state.currentNumberImg].title}</p>
        </div>
        <button onClick={() => this.changeImg(1)}>next</button>
        <button onClick={() => this.changeImg(0)}>back</button>
      </>
    );
  }
}
