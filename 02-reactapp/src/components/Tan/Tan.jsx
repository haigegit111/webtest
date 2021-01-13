import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './tan.css'

class Tan extends Component{
  constructor(props){
    super(props)
    let { isVisible, title, content } = this.props
    this.state = {
      isVisible,
      title,
      content
    }
  }
  componentDidMount(){
    console.log(this.props)
  }
  hideTan = () => {
    this.setState({
      isVisible: false
    })
  }
  render(){
    const { isVisible, content, title } = this.state;
    return (
      <div className='tan' style={{display: isVisible ? 'block' : 'none'}}>
        <div className='main'>
          <div className='tHeader'>
            {title}
          </div>
          <div className='content'>
            {
              content.map(item => {
                return (<div key={item}>{item}</div>)
              })
            }
          </div>
          <div className='tFooter'>
          </div>
          <div className='cha' onClick={()=>this.hideTan()}>
            <i className='iconfont icon-cha'/>
          </div>
        </div>
        
      </div>
    )
  }
}
export default withRouter(Tan);