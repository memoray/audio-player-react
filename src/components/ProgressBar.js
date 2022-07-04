import React from "react";
import { useEffect } from "react";

const ProgressBar = (props) => {
  const audio = props.audio;

  const timeFormat = (time) => {
    let min = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");

    let sec = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${min}:${sec}`;
  };

  useEffect(() => {
    audio.current.addEventListener("timeupdate", () => {
      document.getElementById("current-time").innerHTML = timeFormat(
        audio.current.currentTime
      );

      document.getElementById("bar").value =
        (audio.current.currentTime / audio.current.duration) * 100;
    });
  });

  useEffect(() => {
    audio.current.addEventListener("loadeddata", function () {
      if (audio.current.readyState >= 1) {
        document.getElementById("duration").innerHTML = timeFormat(
          audio.current.duration
        );
      }
    });
  });

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
