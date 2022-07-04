import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";

const Player = (props) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });
  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };
  const setVolume = (vol) => {
    console.info("volume", vol);
    const audio = document.querySelector('audio');
    audio.volume = parseFloat(vol);
  }
  return (
    <div className="c-player">
      <audio
        onEnded={SkipSong}
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio>
      {isPlaying ? <h4>Playing now</h4> : <h4>Audio Player</h4>}
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
        audio={audioEl}
        setVolume={setVolume}
      />
      <ProgressBar audio={audioEl} />
      <div className="row">
        <input className="volume" type="range" min="0" max="1" step="0.01"
               onChange={(e) => setVolume(e.target.value)}
        />
      </div>
      <p>
        <strong>Next Song: </strong>
        {props.songs[props.nextSongIndex].title} -{" "}
        {props.songs[props.nextSongIndex].artist}
      </p>
    </div>
  );
};

export default Player;
