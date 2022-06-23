import React from "react";

const PlayerDetails = (props) => {
	return (
		<div className="c-player--details">
			<div className="details-img">
				<img src={props.song.image_url} alt={props.song.title}/>
			</div>
			<h3 className="details-title">{props.song.title}</h3>
			<h4 className="details-artist">{props.song.artist.name}</h4>
		</div>
	);
};

export default PlayerDetails;
