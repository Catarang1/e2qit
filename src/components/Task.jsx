import React, { Component } from 'react';
import Step from './Step'
import './css/content.css'

export default class Task extends Component {

	isDone() {
		return this.props.steps.every(step => step.done)
	}

	getPercFinished() {
		let totalSteps = this.props.steps.length
		let finishedSteps = 0
		this.props.steps.forEach( step => {
			step.done && finishedSteps ++
		});

		return (finishedSteps / totalSteps * 100).toFixed(0)
	}

	handleCheckboxChange(projectID, taskID, stepIndex) {
		console.log(projectID, taskID, stepIndex);
	}

	render() {
		return (
			<div className={"tab_border task " + (this.isDone() ? "green" : "red")}><div className="tab">
				<p>{this.getPercFinished()}% done</p>
				<h1 onClick={this.props.onTaskNameChangeRequest}>{this.props.name}</h1>
				<div className="steps">
					{this.props.steps.map((step) => {
							return <Step
								key={this.props.steps.indexOf(step)}
								done={step.done}
								name={step.name}
								notes={step.notes}
								onCheckboxChange={ () => this.props.onCheckboxChange(step.id) }>
							</Step>
					})}
				</div>


			</div></div>
		);
	}
}

