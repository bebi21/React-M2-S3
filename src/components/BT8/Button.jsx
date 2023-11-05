import React from "react";

const Buttons = ({ isRunning, startTimer, stopTimer, resetTimer }) => {
  return (
    <div>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Buttons;
