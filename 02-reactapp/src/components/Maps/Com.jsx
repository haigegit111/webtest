import { Card, Progress } from 'antd'
import React, { Component, Fragment, PureComponent } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts'
import './map.css'




function Ttitle(props) {
  return (
    <div className='Ttitle'>{props.title}apple</div>
  )
}
class Com extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Fragment>
        {/* 门店版本 */}
        <br />
        <div className='cards'>
          <Ttitle />
          <div >
            <p>1.0:</p>&nbsp;&nbsp;&nbsp;
            <Progress percent={30}/>
          </div>
          <div >
            <p>2.0:</p>&nbsp;&nbsp;&nbsp;
            <Progress percent={20}/>
          </div>
          <div >
            <p>3.0:</p>&nbsp;&nbsp;&nbsp;
            <Progress percent={60} />
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Com;
