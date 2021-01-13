import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './science.css'
class Science extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      <div className='science contaner'>
        <div className='phone'>
          <div className='title'>手机圈</div>
          <div className='content'>
            {
              
            }
          </div>
        </div>
        <div className='computer'>
          <div className='title'>电脑圈</div>
          <div className='content'>
            {

            }
          </div>
        </div>
        <div className='car'>
          <div className='title'>汽车圈</div>
          <div className='content'>
            {

            }
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Science);