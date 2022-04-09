//music.tsx file
import React from "react";
import "./Menu.css";
import config from '../common/config'
import Icon from '@mdi/react';
import { mdiTorch } from '@mdi/js';

type MenuState = {
}

class Music extends React.Component<{}, MenuState> {

	constructor(props: {}){
		super(props);
	}

	menuIcon(text: string, icon: string) {
		return (
			<div className='menu-item'>
				<div></div>
				<Icon path={ icon } size={3} color={config.colors.primary} ></Icon>
				<p>{text}</p>
			</div>
		)
	}

	render(){
		return (
			<div className="menu">
				{ this.menuIcon('Light', mdiTorch) }
				{ this.menuIcon('Light', mdiTorch) }
				{ this.menuIcon('Light', mdiTorch) }
				{ this.menuIcon('Light', mdiTorch) }
				{ this.menuIcon('Light', mdiTorch) }
				{ this.menuIcon('Light', mdiTorch) }
			</div>
		);


	}
}

export default Music;