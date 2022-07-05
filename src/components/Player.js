import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";
import { VolumeSlider } from "./VolumeSlider";

const Player = (props) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
    const [mute, setMute] = useState(true);
    const defaultVolume = 0.15;

  useEffect(() => {
      const audio = document.querySelector('audio');
      audio.volume = defaultVolume;
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

    const setMuted = () => {
        setMute(!mute)
        const audio = document.querySelector('audio').muted = mute;
        console.info(audio.muted)
    };

  const setVolume = (vol) => {
      const audio = document.querySelector('audio');
      audio.volume = parseFloat(vol);
  };

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
  return (
    <div className="c-player">
      <audio
        onEnded={SkipSong}
        src={props.songs[props.currentSongIndex].song}
        ref={audioEl}
      ></audio>
      {isPlaying ? <h4>Playing now</h4> : <h4>Audio Player</h4>}
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <ProgressBar audio={audioEl} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
        audio={audioEl}
      />
      <VolumeSlider defaultVolume={defaultVolume} setVolume={setVolume} muted={mute} setMuted={setMuted} />
      <p>
        <strong>Next Song: </strong>
        {props.songs[props.nextSongIndex].title} -{" "}
        {props.songs[props.nextSongIndex].artist}
      </p>
    </div>
  );
};

export default Player;
