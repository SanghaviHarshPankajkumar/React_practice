import React, { Component } from 'react'

export class InputRef extends Component {
    constructor(props) {
		super(props);
	    this.InputRef  = React.createRef()
	}
    focusInput(){
        console.log('focusInput');
        this.InputRef.current.focus()
    }
  render() {
    return (
      <div>
        <input type="text" ref= {this.InputRef}/>
      </div>
    )
  }
}

export default InputRef