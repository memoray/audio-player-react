import React from "react";
import {FaPlay, FaBackward, FaForward, FaPause} from "react-icons/fa";

const PlayerControls = (props) => {
	return (
		<div className="c-player--controls">
			<button className="skip-btn" onClick={() => props.SkipSong(false)}>
				<FaBackward/>
			</button>
			<button
				className="play-btn"
				onClick={() => props.setIsPlaying(!props.isPlaying)}
			>
				{props.isPlaying ? <FaPause/> : <FaPlay/>}
			</button>

			<button className="skip-btn" onClick={() => props.SkipSong()}>
				<FaForward/>
			</button>
		</div>
	);
};

export default PlayerControls;
