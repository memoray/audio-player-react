import { FaPlay, FaBackward, FaForward, FaPause } from "react-icons/fa";
import { MdReplay10, MdForward10 } from "react-icons/md";

const PlayerControls = (props) => {
  const audio = props.audio;
  return (
    <div className="c-player--controls">
      <button
        className="for-backward"
        onClick={() => (audio.current.currentTime -= 10)}
      >
        <MdReplay10 />
      </button>
      <button className="skip-btn" onClick={() => props.SkipSong(false)}>
        <FaBackward />
      </button>
      <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        {props.isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <button className="skip-btn" onClick={() => props.SkipSong()}>
        <FaForward />
      </button>
      <button
        className="for-backward"
        onClick={() => (audio.current.currentTime += 10)}
      >
        <MdForward10 />
      </button>
    </div>
  );
};

export default PlayerControls;
