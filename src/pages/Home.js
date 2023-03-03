import React, { Component } from 'react'
import Counter from '../components/Counter';
import FocusInput from '../components/FocusInput';
import List from '../components/List';
import LoginForm from '../components/LoginForm';
import UserList from '../components/UserList';
import HOC from '../components/HOC'
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
	 userData = [
		{ id: 1, name: 'first' },
		{ id: 2, name: 'second' },
		{ id: 3, name: 'third' },
	  ];
	   Users = HOC(UserList, this.userData);
	render() {
		
		return (
			<div >
				{this.props.isLogin? 
				(<LoginForm/>):
              (<div style={this.style}>
				<List />
				<Counter />
				<FocusInput/>
				{/* <this.Users/> */}
			</div>)
			}
           {/* <Title title ={this.state.title} description = {this.state.description}/> 
             <Title title={this.state.title} description ={this.state.description}  />
			<Title title={this.state.title} description={this.state.description}/> */}
			
		</div>
				

		)
	}
}

