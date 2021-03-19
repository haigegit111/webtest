import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Col, Modal, Row, Input, Button, Cascader } from 'antd'
import './happy.css'


class Happy extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.menu = [
      {
        id: 1,
        title: '音乐'
      },
      {
        id: 2,
        title: 'k歌'
      },
      {
        id: 3,
        title: '赛车'
      }
    ]
    this.content = [
      {
        forTo: '音乐',
        type: '忧伤',
        name: '一万个理由'
      },
      {
        forTo: '音乐',
        type: 'DJ',
        name: '电音之王'
      },
      {
        forTo: 'k歌',
        type: '古风',
        name: '山水之间'
      }
    ]
  }

  render() {
    return (
      <>
        <div className='happy contaner'>
          <div className='hotTitle'>
            {
              this.menu.map(item => {
                return <div key={item.id}>{item.title}</div>
              })
            }
          </div>
          <div className='hotContent'>
            {
              this.content.map((item,index) => {
                return (
                  <Fragment key={index}>
                    {
                      item.forTo === '音乐' ? (
                        <div>
                          {item.name}
                        </div>
                      ): null
                    }
                  </Fragment>
                )
              })
            }
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Happy);