import React, { Component } from 'react'
import Counter from '../components/Counter';
import List from '../components/List';
import LoginForm from '../components/LoginForm';
// import Title from '../components/Title'

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: 'title',
			description: 'desciption',
		};
	}
	style={
      display:'flex',
	  justifyContent:'center',
	  alignItem:'center',
	  flexDirection: 'column'
	}
	render() {

		return (
			<div >
				{this.props.isLogin? 
				(<LoginForm/>):
              (<div style={this.style}>
				<List />
				<Counter />
			</div>)
			}
           {/* <Title title ={this.state.title} description = {this.state.description}/> 
             <Title title={this.state.title} description ={this.state.description}  />
			<Title title={this.state.title} description={this.state.description}/> */}
			
		</div>
				

		)
	}
}

