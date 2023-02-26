import React from 'react'
import './Title.css';
export default function Title({title,description}) {
  
  return (
    <div className='container'> 
    <h1>{title}</h1>
    <p>{description}</p>
    </div>
  )
}
