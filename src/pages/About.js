import React, { Component } from 'react'

export class About extends Component {
  render() {
    const style={
        margin:'30px',
        textAlign:'center'
    }
    return (
      <div style={style}>
       <h1> Abount Page</h1>
       <p> this is about page of this application.</p>
      </div>
    )
  }
}

export default About