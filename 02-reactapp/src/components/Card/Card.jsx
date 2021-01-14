import React, { Component } from 'react'
import './card.css'
class Card extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render(){
    let { cImgUrl, cTitle, cTime  } = this.props;
    return (
      <div className='card'>
        <div className='pic'>
          <img src={cImgUrl} alt=""/>
        </div>
        <div className='content'>
          <div className='cTitle'>{cTitle}</div>
          <div className='descEt'>{cTime}</div>
        </div>
      </div>
    )
  }
}

export default Card;