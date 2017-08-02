import React, { Component } from 'react';

/* const MyContainer = (WrappedComponent) => {

	return class extends Component {
		componentDidMount(){
			console.log(1)
		}

		render() {
			console.log(3)
			const np = {
				name: {
					id: '1212',
					name: 'is name'
				}
			}

			return <WrappedComponent {...np} />
		}
	}
} */

const MyContainer = (WrappedComponent) => {
	return class extends WrappedComponent{
		componentDidMount(){
			console.log(this.props)
		}
		render(){
			return super.render()
		}
	}
} 

export default MyContainer;























