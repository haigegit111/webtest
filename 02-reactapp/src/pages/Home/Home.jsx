import React, { Component, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, message, Spin } from 'antd'
import Tan from '../../components/Tan'
import Progress from '../../components/Progress'
import moment from 'moment'
import homeApi from '../../api/homeApi'
import './home.css'

function Count(props){
  const [countAll,setCountAll] = useState(0)
  return 
}
class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      nowNews: [],
      visible: false,
      title: 'Apple',
      content:['iphone 12','iphone 12 pro','iphone 12 pro max'],
      isSpin:true
    }
  }
  componentWillMount(){
    this.getNowNews()
  }
  getNowNews(){
    homeApi.getNowNews().then(res => {
      if(res.status === 200) {
        this.setState({
          nowNews: res.data.data,
          isSpin: false
        })
      }
    })
  }
  showTan = () => {
    this.setState({
      visible: true
    })
  }
  onCancel = () => {
    this.setState({
      visible: false
    })
  }
  onOk = () => {
    message.success('提交成功！')
    this.onCancel()
  }
  render(){
    const { nowNews, visible, title, content, isSpin } = this.state
    return (
      <Spin spinning={isSpin}>
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
        {/* 弹框组件 */}
        <Tan
          title={title}
          visible={visible}
          content={content}
          onCancel={this.onCancel}
          onOk={this.onOk}
        >
          <div>
            <h1>apple</h1>
            <h1>huawei</h1>
            <h1>xiaomi</h1>
          </div>
        </Tan>
        <br/>
        <br/>
        {/* 进度条组件 */}
        <Progress
          percentage={90}
          bgColor={'blue'}
        />
        
      </div>

      </Spin>
    )
  }
}
export default withRouter(Home);