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

type SongInfo = {
	title: string;
	artist: string;
	cover: string;
	audio: string | null;
}

type AudioState = SongInfo & {
	duration: number;
	isPlaying: boolean;
	volume: number;
}

class Music extends React.Component<{}, AudioState> {

	private readonly songs: SongInfo[] = [
		{ artist: 'Bad Bunny',  title: 'Yonagui',  cover: cover1, audio: "/music/aud1.mp3" },
		{ artist: 'Bad Bunny',  title: 'Volvi',  cover: cover2, audio: "/music/aud2.mp3"  },
		{ artist: 'Bad Bunny',  title: 'A Tu Merced',  cover: cover3, audio: "/music/aud3.mp3"  },
		{ artist: 'Daddy Jankee',  title: 'Volando',  cover: cover4, audio: "/music/aud4.mp3"  },
		//{ artist: 'Daddy Jankee',  title: 'Volando',  cover: cover5, audio: song5  }
	];

	private audio: HTMLAudioElement | null = null;
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
			audio: null,
		};
	}

	playPause() {
		console.log("MUSICA")
		if (this.state.isPlaying) {
			this.audio?.play()
		} else {
			this.audio?.pause()
		}
		this.setState({ isPlaying: !this.state.isPlaying });
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
		this.audio?.pause()
		this.audio = song?.audio ? new Audio(song.audio) : null;
		console.log(song?.audio);
		if (this.state.isPlaying) {
			this.audio?.play();
		}
	}

	render(){
		return (
			<div className="music to-hide">
				<img className='music-album' src={this.state.cover} alt="Album cover" />
				<div className='music-info'>
					<p className="title">{this.state.title} - {this.state.artist} - { this.state.isPlaying }</p>
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