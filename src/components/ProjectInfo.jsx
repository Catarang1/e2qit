import React, { Component } from 'react';
import './css/content.css'

import OwnerIco from '../assets/person.svg'
import ContributorsIco from '../assets/group.svg'
import TaskCountIco from '../assets/number.svg'
import DoneTaskIco from '../assets/checkbox.svg'

export default class ProjectInfo extends Component {
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
		return (
			<div className="tab_border">
				<div className="tab">
					<p>Created {this.props.project.created}</p>
					<h1>Project {this.props.project.name}</h1>
					<ul>
						<li><img src={OwnerIco} alt="owner" />{this.props.project.owner} is owner</li>
						<li><img src={ContributorsIco} alt="contributors" /><span>{this.props.project.contributors.join(', ') + " are collaborating"}</span></li>
						<li><img src={TaskCountIco} alt="task count" />{this.props.project.tasks.length} tasks in project</li>
						<li><img src={DoneTaskIco} alt="done task count" />{this.countFinishedTasks()} finished tasks</li>
					</ul>
				</div>
			</div>
		);
	}
}