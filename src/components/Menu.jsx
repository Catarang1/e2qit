import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
	render() {
		return (
			<div id="menu" style={this.style}>
				<button><div className="tooltip">Add Project</div></button>
				{this.props.workgroups.map((workgroup) => {
					return (
					<button
						className={workgroup.ico + " workgroup"}
						key={this.props.workgroups.indexOf(workgroup)}
					>
						<div className="tooltip">{workgroup.name}</div>
					</button>
					);
				})}
				<button><div className="tooltip">Settings</div></button>
				<button><div className="tooltip">Log Out</div></button>
			</div>
		);
	}
}
