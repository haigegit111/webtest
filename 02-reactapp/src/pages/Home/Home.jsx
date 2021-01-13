import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'
import Tan from '../../components/Tan'
import moment from 'moment'
import homeApi from '../../api/homeApi'
import './home.css'

class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      nowNews: [],
      tokes: [],
      isVisible: false,
      title: 'Apple',
      content: [
        'iphone',
        'macbook'
      ]
    }
  }
  componentWillMount(){
    this.getNowNews()
    this.getTokes()
  }
  getNowNews(){
    homeApi.getNowNews().then(res => {
      if(res.status === 200) {
        this.setState({
          nowNews: res.data.data
        })
      }
    })
  }
  getTokes(){
    homeApi.getTokes().then(res => {
      if(res.status === 200){
        console.log(res)
        this.setState({
          tokes: res.data.data.list
        })
      }
    })
  }
  showTan = () => {
    this.setState({
      isVisible: true
    })
  }
  render(){
    const { nowNews, tokes, isVisible, title, content } = this.state
    return (
      <div className='home contaner'>
        <div className='timeTitle'>
          <div className='desc'>今日新闻</div>
          <div className='time'>{moment().format("YYYY年MM月DD号 dddd")}</div>
        </div>
        <div className='nowNews'>
          {
            nowNews.map((item,index) => {
              return (<div className='newSon' key={index+item} style={{fontWeight:(index === 0 || index === 1) ? '700' : null}}><a href='#'>{item.title}</a></div>)
            })
          }
        </div>
        <div className='tokeTxt'>
          热点推送
        </div>
        {/* <div className='tokeMain'>
          {
            tokes.map((item,index) => {
              return (
                <div className='tokeSon'>
                  <div className='pic'>
                    <img src="" alt=""/>
                  </div>
                  <div className='desc'>
                    <div className='title'></div>
                    <div className='other'></div>
                  </div>
                </div>
              )
            })
          }
        </div> */}
        <Button type='primary' onClick={()=>this.showTan()}>弹框</Button>
        <Tan
          title={title}
          isVisible={isVisible}
          content={content}
        />
        
      </div>
    )
  }
}
export default withRouter(Home);