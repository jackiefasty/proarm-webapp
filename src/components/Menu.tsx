//music.tsx file
import React from "react";
import "./Menu.css";
import config from '../common/config'
import Icon from '@mdi/react';
import { mdiTorch, mdiPhone, mdiInstagram, mdiCalculator, mdiClock, mdiWhatsapp, mdiContactlessPayment  } from '@mdi/js';

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

	menuIcon(i: number, text: string, icon: string, action: () => void = () => {}, keep: boolean = false) {
		return (
			<div
				className={this.state.active[i] ? 'menu-item active': 'menu-item'}
				onClick={ () => {
					this.activateMenuItem(i);
					action();
					if (!keep) setTimeout(() => this.activateMenuItem(i), 500);
				} }
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
	openInstagram() {
		window.location.href  = `intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end`;
	}
	openCalculator() {
		window.location.href  = `intent:#Intent;scheme=https;package=com.google.android.calculator;end`;
	}
	openClock() {
		window.location.href  = `intent:#Intent;scheme=https;package=com.android.deskclock.DeskClock;end`;
	}
	openWhatsapp() {
		window.location.href  = `https://wa.me/34634406243`;
	}

	render(){
		return (
			<div className="menu">
				{ this.menuIcon(0, 'Phone', mdiPhone, () => this.openPhone() ) }
				{ this.menuIcon(1 ,'Calculator', mdiCalculator , () => this.openCalculator()) }
				{ this.menuIcon(2, 'Light', mdiTorch, () => {}, true) }
				{ this.menuIcon(3 ,'Instagram', mdiInstagram, () => this.openInstagram() ) }
				{ this.menuIcon(4, 'Whatsapp ', mdiWhatsapp, () => this.openWhatsapp() ) }
				{ this.menuIcon(5, 'NFC', mdiContactlessPayment, () => {}, true ) }
			</div>
		);


	}
}

export default Music;