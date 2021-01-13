import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom' 
import Logo from '../../static/images/logo.jpeg'
import './main.css'

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      showId: 0
    }
    this.menus = [
      {
        title: '首页',
        toPath: '/home',
        aId: 0
      },
      {
        title: '科技',
        toPath: '/science',
        aId: 1
      },
      {
        title: '娱乐',
        toPath: '/happy',
        aId: 2
      }
    ]
  }
  barBtn = (val) => {
    this.setState({
      showId: val
    })
    console.log(this.props)
  }
  render(){
    let { showId } = this.state;
    const { pathname } = this.props.location;
    //debugger
    return (
      <div className='header'>
        <div className='logo'>
          <img src={Logo} alt=""/>
        </div>
        <div className='menus'>
          {
            this.menus.map((item,index)=>{
              return (<div className={'menuSon'+' '+(item.aId === showId && 'lineBar')}  key={item+index} onClick={()=>this.barBtn(item.aId)}><Link to={item.toPath}>{item.title}</Link></div>)
            })
          }
        </div>
      </div>
    )
  }
}
export default withRouter(Header);