import {
  ImVolumeMute2,
  ImVolumeLow,
  ImVolumeMedium,
  ImVolumeHigh,
} from "react-icons/im";

export const VolumeSlider = (props) => {
  return (
    <div className="volume">
      <button className="mute" onClick={() => props.setIsMuted(!props.isMuted)}>
        {props.isMuted || props.volume === 0 ? (
          <ImVolumeMute2 />
        ) : !props.isMuted && props.volume > 0 && props.volume <= 0.3 ? (
          <ImVolumeLow />
        ) : !props.isMuted && props.volume > 0.3 && props.volume <= 0.7 ? (
          <ImVolumeMedium />
        ) : (
          <ImVolumeHigh />
        )}
      </button>

      <div className="player-volume">
        <div className="vol-slider">
          <input
            type="range"
            id="vol"
            defaultValue={props.volume}
            max="1"
            step="0.01"
            onChange={(e) => props.setVolume(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};
