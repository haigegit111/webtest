import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Col, message, Row } from 'antd'
import Card from '../../components/Card'
import Tk from '../../components/Tk'
import moment from 'moment'
import './science.css'
class Science extends Component{
  constructor(props){
    super(props)
    this.state = {
      phones: [
        {
          cImgUrl: 'https://img14.360buyimg.com/n0/jfs/t1/147564/27/10740/61500/5f861436Ec145cee7/4297977df96064cf.jpg',
          cTitle: 'iphone 12 pro',
          cTime: moment().format('LLL')
        },
        {
          cImgUrl: 'https://img14.360buyimg.com/n0/jfs/t1/132022/23/12216/60913/5f86195bEacd08599/c5dc348d3f943324.jpg',
          cTitle: 'iphone 12',
          cTime: moment().format('LLL')
        },
        {
          cImgUrl: 'https://img14.360buyimg.com/n0/jfs/t1/153455/36/12113/54148/5fe94a8bEce7c87e3/302326ac2e323570.jpg',
          cTitle: 'xiaomi 11',
          cTime: moment().format('LLL')
        }
      ],
      computers: [

      ],
      cars: [

      ],
      visible: false,
      content: [
        'iphone',
        'macbook',
        'ipad'
      ]
    }
  }
  componentDidMount(){
    
  }
  tkShow = () => {
    this.setState({
      visible: true
    })
    return
  }
  onCancel = () => {
    this.setState({
      visible: false
    })
  }
  onOk = () => {
    this.setState({
      visible: false
    },() => {
      message.success('提交成功！')
    })
  }
  render(){
    const {  } = this.props
    const { phones, visible, content } = this.state;
    return (
        <div className='science contaner'>
          {/* <Skeleton active/> */}
          <div className='phone'>
            <div className='title'>手机圈</div>
            <div className='content'>
              {
                phones.map((item,index) => {
                  return (
                    <Card 
                      key={index}
                      cTitle={item.cTitle}
                      cImgUrl={item.cImgUrl}
                      cTime={item.cTime}
                    />
                  )
                })
              }
            </div>
          </div>
          <div className='computer'>
            <div className='title'>电脑圈</div>
            <div className='content'>
              {
                phones.map((item,index) => {
                  return (
                    <Card
                      key={index}
                      cTitle={item.cTitle}
                      cImgUrl={item.cImgUrl}
                      cTime={item.cTime}
                    />
                  )
                })
              }
            </div>
          </div>
          <div className='car'>
            <div className='title'>汽车圈</div>
            <div className='content'>
              {
                phones.map((item,index) => {
                  return (
                    <Card
                      key={index}
                      cTitle={item.cTitle}
                      cImgUrl={item.cImgUrl}
                      cTime={item.cTime}
                    />
                  )
                })
              }
            </div>
          </div>
          <div>
          </div>
          <Tk
            title={'apple'}
            visible={visible}
            onCancel={this.onCancel}
          >
            <ul>
              {
                content.map((item, index) => {
                  return (
                    <li key={index}>{item}</li>
                  )
                })
              }
            </ul>
            <div className='tfooter' style={{borderTop:'1px solid #bfcce5',padding:'10px'}}>
              <Row justify='space-between' >
                <Col span={12}></Col>
                <Col span={6}>
                  <Button type='primary' onClick={this.onOk}>确认</Button>
                </Col>
                <Col span={6}>
                  <Button type='ghost' onClick={this.onCancel}>取消</Button>
                </Col>
              </Row>
            </div>
            
          </Tk>
        </div>
    )
  }
}
export default withRouter(Science);