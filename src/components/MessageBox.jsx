import React, { Component } from 'react';
import './MessageBox.css'
import WarningIco from '../assets/warning.svg'
import NotificationIco from '../assets/alert.svg'
import Tick from '../assets/m_check.svg'
import Cross from '../assets/m_cross.svg'

export default class MessageBox extends Component {
	iconDictionary = {
		warning: <img src={WarningIco} alt="warning"></img>,
		notification: <img src={NotificationIco} alt="notification"></img>
	}

	render() {
		return (
			<div id="messageBox">
				{this.iconDictionary[this.props.icon]}
				<span>{this.props.text}</span>
				<img src={Cross} alt="dismiss"></img>
				<img src={Tick} alt="accept"></img>
			</div>
		);
	}
}