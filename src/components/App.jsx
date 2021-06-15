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
		const { tasks, name, created } = this.state.workgroups[0]
		return (
			<React.Fragment>
				<Menu workgroups={this.state.workgroups} />
				<Separator />
				<Scrollwrap tasks={tasks} name={name} created={created}/>
				<MessageBox type='context' icon='notification' text='somehint'/>
			</React.Fragment>
		);
	}
}