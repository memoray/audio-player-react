import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
//import { useState } from "react";

export const VolumeSlider = () => {
  const defaultValue = 0.15;

  const setVolume = (vol) => {
    console.log(vol);
    const aud = document.querySelector("audio");
    aud.volume = parseFloat(vol);
  };

  return (
    <div className="volume">
      <button className="mute">
        <IoVolumeMute />
      </button>
      <div className="player-volume">
        <div className="vol-slider">
          <input
            type="range"
            id="vol"
            defaultValue={defaultValue}
            max="1"
            step="0.01"
            onChange={(e) => setVolume(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};
