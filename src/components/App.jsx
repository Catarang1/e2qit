import React, { Component } from 'react';
import {Data} from '../data.js'
// Component imports
import Menu from './Menu';
import Separator from './Separator';
import Scrollwrap from './Scrollwrap';
import MessageBox from './MessageBox';

export default class App extends Component {
	state = { ...Data };

	render() {
		return (
			<React.Fragment>
				<Menu projects={this.state.projects} />
				<Separator />
				<Scrollwrap project={this.state.projects[0]}/>
				<MessageBox type='context' icon='notification' text='somehint'/>
			</React.Fragment>
		);
	}
}