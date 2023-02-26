import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        count:0
        };
      }
     
  render() {
    const btn={
        padding:'7px',
        borderRadius:'3px',
        fontSize:'20px',
        backgroundColor:'#007BFF',
        color:'white',
       
    }
    return (
      <div>
        <h1> Total Count: {this.state.count}</h1>
        <button style={btn} onClick={()=>{
            let count = this.state.count
            this.setState({count:count+1})
        }}>Counter</button>
      </div>
    )
  }
}

export default Counter