import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";

export const VolumeSlider = (props) => {

    const btnMute = props.muted ? (<IoVolumeMute />) : (<IoVolumeHigh />)
  return (
    <div className="volume">
      <button className="mute" onClick={props.setMuted}>
          {btnMute}
      </button>
      <div className="player-volume">
        <div className="vol-slider">
          <input
            type="range"
            id="vol"
            defaultValue={props.volume}
            max="1"
            step="0.01"
            onChange={e => props.setVolume(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};
