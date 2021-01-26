import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Happy extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render(){
    return (
      <div className='happy contaner'>
        <h1>这是娱乐页面</h1>
      </div>
    )
  }
}

export default withRouter(Happy);