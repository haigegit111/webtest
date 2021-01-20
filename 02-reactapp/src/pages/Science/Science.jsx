import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../../components/Card'
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

      ]
    }
  }
  componentDidMount(){
    
  }
  render(){
    const {  } = this.props
    const { phones } = this.state;
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
                      cTitle={item.cTitle}
                      cImgUrl={item.cImgUrl}
                      cTime={item.cTime}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
    )
  }
}
export default withRouter(Science);