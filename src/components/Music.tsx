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

//TODO importing audio tracks for songs

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
		{ artist: 'Bad Bunny',  title: 'Yonagui',  cover: cover1  },
		{ artist: 'Bad Bunny',  title: 'Volvi',  cover: cover2  },
		{ artist: 'Bad Bunny',  title: 'A Tu Merced',  cover: cover3  },
		{ artist: 'Daddy Jankee',  title: 'Volando',  cover: cover4  },
	];

	private songI: number = 0;

	constructor(props: {}){
		super(props);
		this.state = {
			artist: 'Artist',
			cover: cover0,
			title: 'Title',
			playing: true,
			volume: 4,
			duration: 6,
		};
	}

	playPause() {
		this.setState({ playing: !this.state.playing });
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
				<img className='music-album' src={this.state.cover} alt="Album cover" /> {/*"https://picsum.photos/150"*/}
				<div className='music-info'>
					<p className="title">{this.state.title} - {this.state.artist}</p>
				</div>
				<button onClick={() => this.prevSong()}>
					<Icon path={ mdiArrowLeft } size={1} color={config.colors.primary} ></Icon>
				</button>
				<button onClick={() => this.playPause()}>
					<Icon path={ this.state.playing ? mdiPlay : mdiPause } size={1} color={config.colors.primary} ></Icon>
				</button>
				<button onClick={() => this.nextSong()}>
					<Icon path={ mdiArrowRight } size={1} color={config.colors.primary} ></Icon>
				</button>
				{/* <button > Prev </button>
				<button onClick={() => this.nextSong()}> Next </button> */}
		</div>
		);


	}
}

export default Music;