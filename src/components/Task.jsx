import React, { Component } from 'react';
import Step from './Step'
import './Task.css'

export default class Task extends Component {
	state = {  }

	completed() {
		let doneState = this.props.steps.map(step => { return step.done })
		return doneState.every(state => state === true)
	}

	render() {
		this.completed()
		return (
			<div className={"tab_border " + (this.completed() ? "green" : "red")}>
				<div className="tab">
					<p>Completed by: </p>
					<h1>{this.props.name}</h1>
					{this.props.steps.map(step => {
						return (
							<Step
								description={step.description}
								notes={step.notes}
								done={step.done}
								key={this.props.steps.indexOf(step)}
							/>
						)
					} )}
				</div>
			</div>
		);
	}
}