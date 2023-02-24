import React, { Component } from 'react'

export default function Title(props) {
    const style1 = {border:'1px solid black',margin:'5px', borderRadius:'5px'};
  return (
    <div style={style1}> 
    <h1>Title Component</h1>
    <h1>{props.title_name}</h1>
    </div>
  )
}
