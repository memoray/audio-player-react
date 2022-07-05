import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";
import { VolumeSlider } from "./VolumeSlider";

const Player = (props) => {
  const audioEl = useRef(null);
  const defaultVolume = 0.15;
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(defaultVolume);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  useEffect(() => {
    audioEl.current.volume = volume;
  });

  useEffect(() => {
    if (isMuted) {
      audioEl.current.muted = true;
    } else {
      audioEl.current.muted = false;
    }
  });

  const setVolumeRange = (vol) => {
    audioEl.current.volume = parseFloat(vol);
    setVolume(audioEl.current.volume);
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
      <VolumeSlider
        volume={volume}
        setVolume={setVolumeRange}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        defaultVolume={defaultVolume}
        audio={audioEl}
      />
      <p>
        <strong>Next song: </strong>
        {props.songs[props.nextSongIndex].title} -{" "}
        {props.songs[props.nextSongIndex].artist}
      </p>
    </div>
  );
};

export default Player;
