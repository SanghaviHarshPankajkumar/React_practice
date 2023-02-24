import React, { Component } from 'react'
import Title from '../components/Title'

export default class Home extends Component {
    
  render() {
    const title1 ='first title';
    const title2 = 'second title';
    const title3 = 'third title';
    return (
      <div> <Title title_name={title1}/> 
      <Title title_name={title2}  />
      <Title title_name={title3}/>
      </div>
      
    )
  }
}

