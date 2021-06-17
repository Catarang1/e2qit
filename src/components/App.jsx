import React, { Component } from 'react';
import {Data} from '../data.js'
// Component imports
import Menu from './Menu';
import Content from './Content';
import MessageBox from './MessageBox';

export default class App extends Component {
	state = { ...Data };

	shadowStyle = {
		background: 'linear-gradient(to right, transparent, var(--dark-bg))',
		position: 'absolute',
		width: '25px',
		height: '100%',
		right: '42px',
	}

	render() {
		return (
			<React.Fragment>

				<Menu projects={this.state.projects} />

				<Content project={this.state.projects[0]}/>

				<div style={this.shadowStyle}></div>

				<MessageBox type='context' icon='notification' text='some longer message in message box.. bit longer?'/>

			</React.Fragment>
		);
	}
}