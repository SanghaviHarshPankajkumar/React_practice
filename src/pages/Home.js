import React, { Component } from 'react'
import Counter from '../components/Counter';
import Title from '../components/Title'

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          title:'title',
          description:'desciption'
        };
      }
  render() {
    
    return (
      <div>
        <Counter/>
         <Title title ={this.state.title} description = {this.state.description}/> 
      <Title title={this.state.title} description ={this.state.description}  />
      <Title title={this.state.title} description={this.state.description}/>
      </div>
      
    )
  }
}

