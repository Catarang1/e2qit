import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
	render() {
		return (
			<div id="menu" style={this.style}>
				<button><div className="tooltip">Add Project</div></button>
				{this.props.projects.map((project) => {
					return (
					<button
						className={project.ico + " workgroup"}
						key={this.props.projects.indexOf(project)}
					>
						<div className="tooltip">{project.name}</div>
					</button>
					);
				})}
				<button><div className="tooltip">Settings</div></button>
				<button><div className="tooltip">Log Out</div></button>
			</div>
		);
	}
}
