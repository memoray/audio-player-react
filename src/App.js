import {useState, useEffect} from "react";
import Player from "./components/Player";
import axios from "axios";

function App() {
	const apiURL = 'http://localhost:8000/api/songs',
		[songs, setSongs] = useState([]),
		[currentSongIndex, setCurrentSongIndex] = useState(0),
		[nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

	useEffect( () => {
		async function fetchData() {
			const resp = await axios.get(apiURL);
			setSongs(resp.data)		}
		fetchData();
	}, [])

	useEffect(() => {
		setNextSongIndex(() => {
			if (currentSongIndex + 1 > songs.length - 1) {
				return 0;
			} else {
				return currentSongIndex + 1;
			}
		});
	}, [songs, currentSongIndex]);

	if(songs && songs.length > 0) {
		return (
			<div className="App">
				<Player
					currentSongIndex={currentSongIndex}
					setCurrentSongIndex={setCurrentSongIndex}
					nextSongIndex={nextSongIndex}
					songs={songs}
				/>
			</div>
		);
	}
	return (<div><h3>No Songs available</h3></div>);
}

export default App;
