import React, { Component} from 'react'
import { UserConsumer } from './userContext'

export class RenderPropsComponent extends Component {
  render() {
    return (
        <div>
            <h1>inside the render component</h1>
            <UserConsumer>
              {
                values=>{
                  return <h2>{values.greeting}</h2>
                }
              }
            </UserConsumer>
            {this.props.render()}
            
        </div>
      
    )
  }
}

export default RenderPropsComponent