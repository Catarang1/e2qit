import React, { Component } from 'react';
import Task from './Task'
import Tab from './Tab'

export default class Scrollwrap extends Component {

	style = {
		flexGrow: 1,
		minHeight: '100px',
		height: '100%',
		overflow: 'scroll hidden',
		display: 'flex',
		alignItems: 'center'
	}

	render() {
		return (
			<div id="scrollwrap" style={this.style}>
				<Tab project={this.props.project}></Tab>
				{this.props.project.tasks.map( task => {
					return (
					<Task
						name={task.name}
						steps={task.steps}
						key={this.props.project.tasks.indexOf(task)}>
					</Task>);
				})}
			</div>
		);
	}
}