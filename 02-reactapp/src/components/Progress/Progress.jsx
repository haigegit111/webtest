import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './progress.css'
class Progress extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    const { percentage, bgColor } = this.props;
    let pWidth = percentage ? (percentage/100)*120 + 'px' : '0px';
    return (
      <div className='progress'>
        <div className='contentBox'>
          <div className='content' style={{backgroundColor:bgColor ? bgColor : '#f7f7f7',width:pWidth,height:'100%',borderRadius:'10px'}}></div>
        </div>
        <div className='txt'>
          {percentage ? (percentage + '%') : '0%'}
        </div>
      </div>
    )
  }
}
export default withRouter(Progress)
