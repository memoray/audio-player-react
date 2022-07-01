import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="player-progress">
      <div className="prg-bar">
        <progress value="0" max="100" id="bar"></progress>
        <span id="current-time">00:00</span>
        <span id="duration"></span>
      </div>
    </div>
  );
};

export default ProgressBar;
