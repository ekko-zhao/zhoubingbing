import React, { Component } from 'react';
import MyContainer from './Test';
import ReactDom from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Animate from 'react-smooth';


import './App.css';
import './less/button.css';

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
				<div style={{ width: 200 + 'px', height: 200 + 'px', 'backgroundColor': 'red' }}></div>
			</div>
		)
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'zhoubb',
			list: []
		}
	}

	static defaultProps = {
		title: 'this is title',
		text: 'this is text'
	}


	componentDidMount() {
		setTimeout(() => {
			this.setState({
				name: 'zhoubingbing',
				list: [{},{}]
			})
		}, 2000)
		setTimeout(() => {
			this.setState({
				name: 'zhoubingbing',
				list:[{}]
			})
		}, 6000)
	}

	/* conponentWillEnter() {
		console.log(11)
	} */


	handleClick = (agr0) => {
		console.log(agr0)
		// this.props.title = agr0
	}

	render() {
		var A = MyContainer(Chlid);
		return (
			<div>
				<span>{this.state.name}</span>
				
			</div>
		)
	}
}

export default App;













