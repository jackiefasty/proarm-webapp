//music.tsx file
import React from "react";
import "./Music.css";
// import cover1 from "../images/cov1.jpg";
// import cover2 from "../images/cov2.jpg";
// import cover3 from "../images/cov3.jpg";
// import cover4 from "../images/cov4.jpg";

type SongInfo = {
	title: string;
	artist: string;
	cover: string;
}

type AudioState = SongInfo & {
	duration: number;
	playing: boolean;
	volume: number;
}




class Music extends React.Component<{}, AudioState> {

	private readonly songs: SongInfo[] = [
		{ artist: 'Bad Bunny',  title: 'Yonagui',  cover: ''  },
		{ artist: 'Bad Bunny',  title: 'Volvi',  cover: ''  },
		{ artist: 'Bad Bunny',  title: 'A Tu Merced',  cover: ''  },
		{ artist: 'Daddy Jankee',  title: 'Volando',  cover: ''  },
	];

	private songI: number = 0;

	constructor(props: {}){
		super(props);
		this.state = {
			artist: 'Artist',
			cover: '',
			title: 'Title',
			playing: true,
			volume: 4,
			duration: 6,
		};
	}

	nextSong() {
		this.updateSongState(1);
	}

	prevSong() {
		this.updateSongState(-1);


	}

	updateSongState(songSkip: number) {
		this.songI += songSkip;
		const song = this.songs.at(this.songI % this.songs.length);
		this.setState({
			title: song?.title ?? '',
			artist: song?.artist ?? '',
			cover: song?.cover ?? '',
		})
	}

	render(){
		return (
			<div className="music">
		    	<p className="albumCover">
					{this.state.cover}
					<img src="https://picsum.photos/150"></img>
				</p>
		    	<p className="title">{this.state.title}</p>
		    	<p className="artist">{this.state.artist}</p>
		    	<p className="controls">Controls</p>
				{/* <button onClick={() => this.prevSong()}> Prev </button>
				<button onClick={() => this.nextSong()}> Next </button> */}
		    </div>
		    
		);


	}
}

export default Music;