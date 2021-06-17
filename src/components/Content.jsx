import React, { Component } from 'react';
import Task from './Task'
import ProjectInfo from './ProjectInfo'

export default class Content extends Component {

	scrollwrapStyle = {
		flexGrow: 1,
		minHeight: '100px',
		height: '100%',
		overflow: 'scroll hidden',
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		paddingRight: "25px"
	}

	render() {
		return (
			<div id="scrollwrap" style={this.scrollwrapStyle}>
				<ProjectInfo project={this.props.project}></ProjectInfo>
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