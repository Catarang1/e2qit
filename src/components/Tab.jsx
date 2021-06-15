import React, { Component } from 'react';
import './Task.css'

export default class Tab extends Component {
	state = {  }

	countFinishedTasks() {
		let finishedTasks = 0
		this.props.project.tasks.forEach(task => {
			let finishedSteps = task.steps.filter(step => step.done)
			if (finishedSteps.length === task.steps.length) finishedTasks++
		})
		return finishedTasks;
	}

	render() {
		this.countFinishedTasks()
		return (
			<div className="tab_border">
				<div className="tab">
					<p>Created {this.props.project.created}</p>
					<h1>Project {this.props.project.name}</h1>
					<ul>
						<li>Project Owner: <span className="white">{this.props.project.owner}</span></li>
						<li>Contributors: <span className="white">{this.props.project.contributors.join(', ')}</span></li>
						<li>Tasks in Project: <span className="white">{this.props.project.tasks.length}</span></li>
						<li>finished tasks: <span className="white">{this.countFinishedTasks()}</span></li>
					</ul>
				</div>
			</div>
		);
	}
}