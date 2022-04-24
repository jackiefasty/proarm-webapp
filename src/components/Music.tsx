//music.tsx file
import React from "react";
import "./Music.css";
import Icon from '@mdi/react';
import { mdiArrowRight, mdiArrowLeft, mdiPlay, mdiPause } from '@mdi/js';
import config from '../common/config'

//importing cover images for songs
import cover0 from "../images/cov0.png";
import cover1 from "../images/cov1.jpg";
import cover2 from "../images/cov2.jpg";
import cover3 from "../images/cov3.jpg";
import cover4 from "../images/cov4.jpg";

//importing audio tracks for songs
const song1 = require("../music/aud1.mp3");
const song2 = require("../music/aud1.mp3");
const song3 = require("../music/aud1.mp3");
const song4 = require("../music/aud1.mp3");

type SongInfo = {
	title: string;
	artist: string;
	cover: string;
	audio: HTMLAudioElement;
}

type AudioState = SongInfo & {
	duration: number;
	isPlaying: boolean;
	volume: number;
}

class Music extends React.Component<{}, AudioState> {

	private readonly songs: SongInfo[] = [
		{ artist: 'Bad Bunny',  title: 'Yonagui',  cover: cover1, audio: song1 },
		{ artist: 'Bad Bunny',  title: 'Volvi',  cover: cover2, audio: song2  },
		{ artist: 'Bad Bunny',  title: 'A Tu Merced',  cover: cover3, audio: song3  },
		{ artist: 'Daddy Jankee',  title: 'Volando',  cover: cover4, audio: song4  },
		//{ artist: 'Daddy Jankee',  title: 'Volando',  cover: cover5, audio: song5  },
	];

	private songI: number = 0;

	constructor(props: {}){
		super(props);
		this.state = {
			artist: '',
			cover: cover0,
			title: '',
			isPlaying: false,
			volume: 4,
			duration: 6,
			audio: new Audio(song1),
		};
	}

	playPause() {
		let isPlaying = this.state.isPlaying;

		if (isPlaying) {
			// Pause the song if it is playing
			this.state.audio.pause();
		  } else {
	  
			// Play the song if it is paused
			this.state.audio.play();
		  }

		  this.setState({ isPlaying: !this.state.isPlaying });

	}

	nextSong() {
		this.updateSongState(1);
		this.state.audio.load();
		this.state.audio.play();

	}

	prevSong() {
		this.updateSongState(-1);
		this.state.audio.load();
		this.state.audio.play();

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
				<img className='music-album' src={this.state.cover} alt="Album cover" /> {/*"https://picsum.photos/150"*/}
				<div className='music-info'>
					<p className="title">{this.state.title} - {this.state.artist}</p>
				</div>
				<button onClick={() => this.prevSong()}>
					<Icon path={ mdiArrowLeft } size={1} color={config.colors.primary} ></Icon>
				</button>
				<button onClick={() => this.playPause()}>
					<Icon path={ this.state.isPlaying ? mdiPlay : mdiPause } size={1} color={config.colors.primary} ></Icon>
				</button>
				<button onClick={() => this.nextSong()}>
					<Icon path={ mdiArrowRight } size={1} color={config.colors.primary} ></Icon>
				</button>
		</div>
		);


	}
}

export default Music;