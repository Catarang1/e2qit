import React, { Component } from 'react';

export default class Separator extends Component {
	style = { height: '5%', borderRight: '5px dotted white' }
	render() {
		return ( <div style={this.style} className="separator"></div> );
	}
}