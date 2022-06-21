import React from "react";

const PlayerDetails = (props) => {
	const imgSrc = "http://localhost:8000/storage/albumImages/" + props.song.image
	return (
		<div className="c-player--details">
			<div className="details-img">
				<img src={imgSrc} alt=""/>
			</div>
			<h3 className="details-title">{props.song.title}</h3>
			<h4 className="details-artist">{props.song.artist.name}</h4>
		</div>
	);
};

export default PlayerDetails;
