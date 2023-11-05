// TH1
// import React from "react";
// import "./App.css";
// import Header from "./components/TH1/Header";
// import ListItems from "./components/TH1/ListItem ";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <ListItems />
//       </div>
//     );
//   }
// }

// export default App;
// import React from "react";
// TH3
// import Demo_state from "./components/TH3/Demo-state";
// export default function App() {
//   return <Demo_state />;
// }
//BT 8
// import React, { Component } from "react";
// import Timer from "./components/BT8/Timer";
// import Buttons from "./components/BT8/Button";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       seconds: 80,
//       isRunning: false,
//     };
//   }

//   startTimer = () => {
//     this.setState({ isRunning: true }, () => {
//       this.timerInterval = setInterval(() => {
//         this.setState((prevState) => ({
//           seconds: prevState.seconds - 1,
//         }));
//       }, 1000);
//     });
//   };

//   stopTimer = () => {
//     clearInterval(this.timerInterval);
//     this.setState({ isRunning: false });
//   };

//   resetTimer = () => {
//     clearInterval(this.timerInterval);
//     this.setState({ seconds: 80, isRunning: false });
//   };

//   render() {
//     const { seconds, isRunning } = this.state;

//     return (
//       <div>
//         <Timer seconds={seconds} />
//         <Buttons
//           isRunning={isRunning}
//           startTimer={this.startTimer}
//           stopTimer={this.stopTimer}
//           resetTimer={this.resetTimer}
//         />
//       </div>
//     );
//   }
// }

// export default App;
// BT9, BT10 (2 cái giống  y  hết nhau  nên chung )
// import React, { Component } from "react";
// import BT9 from "./components/BT9,BT10/BT9";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "",
//     };
//   }
//   showText = (value) => {
//     this.setState({
//       title: value,
//     });
//   };
//   button1 = () => {};
//   render() {
//     return (
//       <>
//         <BT9></BT9>
//       </>
//     );
//   }
// }
//BT11;
// import React, { Component } from "react";
// import Table from "./components/BT11/Table";
// export default class App extends Component {
//   render() {
//     return <Table />;
//   }
// }
//BT12
// import React, { Component } from "react";
// import ShowImg from "./components/BT12/ShowImg";

// export default class App extends Component {
//   render() {
//     return <ShowImg />;
//   }
// }
//BT13
// import React, { Component } from "react";
// import Modal from "./components/BT13/Modal";

// export default class App extends Component {
//   render() {
//     return <Modal />;
//   }
// }
//BT14
// import React, { Component } from "react";
// import Taps from "./components/BT14/Taps";

// export default class App extends Component {
//   render() {
//     return <Taps />;
//   }
// }
//BT15
// import React, { Component } from "react";
// import ListSong from "./components/BT15/ListSong";
// import InputSong from "./components/BT15/InputSong";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       listSong: ["meo", "meo1", "meo2"],
//       number: 0,
//     };
//   }
//   takeNewSong = (value) => {
//     this.setState({
//       listSong: [...this.state.listSong, value],
//     });
//   };
//   takeNumber = (value) => {
//     this.setState({
//       listSong: [...this.state.listSong].filter(
//         (item, index) => index != value
//       ),
//     });
//   };
//   render() {
//     return (
//       <>
//         <InputSong takeNewSong={this.takeNewSong}></InputSong>
//         <ListSong
//           listSong={this.state.listSong}
//           index={this.takeNumber}
//         ></ListSong>
//       </>
//     );
//   }
// }
//BT16
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return <div>App</div>;
  }
}
