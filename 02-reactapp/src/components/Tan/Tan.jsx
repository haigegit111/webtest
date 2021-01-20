import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './tan.css'

class Tan extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render(){
    let { visible, content, title, onCancel, onOk } = this.props;
    return (
      <div className='tan' style={{display: visible ? 'block' : 'none'}}>
        <div className='main'>
          <div className='tHeader'>
            {title}
          </div>
          <div className='content'>
            {
              content ? (
                content.map(item => {
                  return (<div key={item}>{item}</div>)
                })
              ): null
            }
          </div>
          <div className='tFooter'>
            <div className='ok' onClick={()=>onOk()}>确认</div>
            <div className='cancel' onClick={()=>onCancel()}>取消</div>
          </div>
          <div className='cha' onClick={()=>onCancel()}>
            <i className='iconfont icon-cha'/>
          </div>
        </div>
        
      </div>
    )
  }
}
export default withRouter(Tan);