import React, { Component } from 'react';
import MyContainer from './Test';
import ReactDom from 'react-dom'

import './App.css';
// import './less/button.css';

class Chlid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			props: props
		}
	}
	componentDidMount() {
		console.log(2)
	}
	static defaultProps = {
		title: 'this is title',
		'data-text': 'this is text'
	}

	render() {
		console.log(4)
		return (
			<div {...this.props.name}>
				Child
			</div>
		)
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'zhoubb'
		}
	}

	static defaultProps = {
		title: 'this is title',
		text: 'this is text'
	}


	componentDidMount() { }

	handleClick = (agr0) => {
		console.log(agr0)
		// this.props.title = agr0
	}

	render() {
		var A = MyContainer(Chlid);
		return (
			<div>
				<span>{this.state.name}</span>
				<p onClick={this.handleClick.bind(this,"asd")}>{this.props.title}</p>

			</div>
		)
	}
}

export default App;






















