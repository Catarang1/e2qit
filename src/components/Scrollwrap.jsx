import React, { Component } from 'react';
import Task from './Task'
import Tab from './Tab'
import './Scrollwrap.css';

export default class Scrollwrap extends Component {
	state = {  }
	render() {
		return (
			<div id="scrollwrap">
				<Tab projectName={this.props.name} created={this.props.created}></Tab>
				{this.props.tasks.map((task) => {
					return <Task name={task.name} steps={task.steps} key={this.props.tasks.indexOf(task)}></Task>;
				})}
			</div>
		);
	}
}