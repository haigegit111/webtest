import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import Logo from '../../static/images/logo.jpeg'
import './main.css'

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
    this.menus = [
      {
        title: '首页',
        toPath: '/home'
      },
      {
        title: '科技',
        toPath: '/science '
      },
      {
        title: '娱乐',
        toPath: '/happy'
      }
    ]
  }
  render(){
    return (
      <div className='header'>
        <div className='logo'>
          <img src={Logo} alt=""/>
        </div>
        <div className='menus'>
          {
            this.menus.map((item,index)=>{
              return (<div className='menuSon' key={item+index}><Link to={item.toPath}>{item.title}</Link></div>)
            })
          }
        </div>
      </div>
    )
  }
}
export default Header;