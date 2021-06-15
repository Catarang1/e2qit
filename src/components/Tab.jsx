import React, { Component } from 'react';
import './Task.css'

export default class Tab extends Component {
	state = {  }

	render() {
		return (
			<div className="tab_border">
				<div className="tab">
					<p>Created {this.props.created}</p>
					<h1>Project {this.props.projectName}</h1>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		);
	}
}