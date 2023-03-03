import React from 'react'
import './Title.css';
 function Title({title,description}) {
  
  return (
    <div className='container'> 
    <h1>{title}</h1>
    <p>{description}</p>
    </div>
  )
}
export default React.memo(Title)