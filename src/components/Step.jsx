import React, { Component } from 'react';
import './css/content.css'

export default class Step extends Component {

	renderCheckbox() {
		if (this.props.done) {
			return <input type="checkbox" defaultChecked />
		} return <input type="checkbox" />
	}

	render() {
		return (
			<div className="step">
				<div className="step_headline">
					{this.renderCheckbox()}
					<h2>{this.props.description}</h2>
				</div>
				<ul>
					{this.props.notes.map( note => {
						return <li key={this.props.notes.indexOf(note)}>{note}</li>
					})}
				</ul>
			</div>
		);
	}
}