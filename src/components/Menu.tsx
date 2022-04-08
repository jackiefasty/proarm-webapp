//music.tsx file
import React from "react";
import "./Menu.css";
import config from '../common/config'
import Icon from '@mdi/react';
import { mdiTorch, mdiPhone } from '@mdi/js';

type MenuState = {
	active: boolean[];
}




class Music extends React.Component<{}, MenuState> {

	constructor(props: {}){
		super(props);
		this.state = { active: Array(6).map(x => false) };
	}

	activateMenuItem(i: number) {
		const a = this.state.active;
		a[i] = !a[i];
		this.setState({ active: a });
	}

	menuIcon(i: number, text: string, icon: string, action: () => void = () => {}) {
		return (
			<div
				className={this.state.active[i] ? 'menu-item active': 'menu-item'}
				onClick={ () => { this.activateMenuItem(i); action() } }
			>
				<div></div>
				<Icon path={ icon } size={3} color={config.colors.primary} ></Icon>
				<p>{text}</p>
			</div>
		)
	}

	openPhone() {
		window.location.href = 'tel:0034634406243';
	}
	openApp(name: string) {
		window.location.href  = `https://play.google.com/store/apps/details?id=${name}`;
	}

	render(){
		return (
			<div className="menu">
				{ this.menuIcon(0, 'Light', mdiTorch) }
				{ this.menuIcon(1, 'Phone', mdiPhone, () => this.openPhone() ) }
				{ this.menuIcon(2 ,'Instagram', mdiTorch, () => this.openApp('com.instagram.android') ) }
				{ this.menuIcon(3 ,'Light', mdiTorch) }
				{ this.menuIcon(4, 'Light', mdiTorch) }
				{ this.menuIcon(5, 'Light', mdiTorch) }
			</div>
		);


	}
}

export default Music;