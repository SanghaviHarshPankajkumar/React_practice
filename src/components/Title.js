import React from 'react'

export default function Title({title,description}) {
    const style1 = {border:'1px solid black',margin:'5px', borderRadius:'5px'};
  
  return (
    <div style={style1}> 
    <h1>Title Component</h1>
    <h1>{title}</h1>
    <p>{description}</p>
    </div>
  )
}
