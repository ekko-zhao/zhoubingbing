import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDom from 'react-dom'

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/

/*const App = React.createClass({
	getDefaultProps(){
		return {
			title: 'this is title',
			text: 'this is text'
		}
	},
	render(){
		const {title, text} = this.props;
		return (
			<button type="button" title={title}>
				<span>{text}</span>
			</button>
		)
	}
})*/

class Chlid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			props: props
		}
	}

	componentWillReceiveProps(nextProps) {
		//console.log(nextProps);

		if ('title' in nextProps) {
			this.setState({
				props: {
					title: nextProps.title
				}
			})
		}


	}

	render() {
		return (
			<div title={this.state.props.title}>
				Child
			</div>

		)
	}
}


class App extends Component {
	constructor(props) {
		super(props);
		this.handelClick = this.handelClick.bind(this)

		this.state = {
			name: '',
			age: 29,
			props: props,
			select: []
		}



	}

	static defaultProps = {
		title: 'this is title',
		text: 'this is text'
	}

	static propTypes = {
		title: React.PropTypes.string

	}


	componentWillMount() {

	}

	componentDidMount() {

	}

	handelClick = (agr0, proxy, event) => {
		console.log(1)
	}

	handleInputChange = e => {
		
		const { options } = e.target;
		const select = Object.keys(options)
						.filter(i => options[i].selected === true)
						.map(i => options[i].value) 

		
		this.setState({
			select 	
		})

	}

	/*componentWillReceiveProps(nextProps){
		return false
	}*/
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	};


	render() {
		const { title, text } = this.props;
		const { select } = this.state;
		return (
			<div>
				<button ref="button" type="button" title={this.state.props.title} >
					<span>{text}</span>
				</button>
				<span>{this.state.name}</span>
				<br />
				<Chlid ref="chlid" title={this.state.props.title} />
				<p></p>

				<select multiple={true} value={select} onChange={this.handleInputChange}>
					<option value="">请选择</option>
					<option value="beijing">北京</option>
					<option value="shanghai">shanghai</option>
					<option value="tianjin">tianjin</option>
				</select>

			</div>

		)
	}

}


export default App;






















