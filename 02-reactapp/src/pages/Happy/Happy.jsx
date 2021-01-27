import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'
class Happy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      abc: 123,
      bsc: 123
    }
  }
  render() {
    return (
      <div className='happy contaner'>
        <h1 style={{textAlign:'center',padding: '0 15px'}}>欢迎来到娱乐的世界</h1>
      </div>
    )
  }
}

export default withRouter(Happy);