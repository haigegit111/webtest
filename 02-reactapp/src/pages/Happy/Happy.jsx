import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Col, Modal, Row, Input, Button, Cascader } from 'antd'
import Maps from '../../components/Maps'
import { DragAntdModal } from '../../components/Drag'
import './happy.css'


class Happy extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    this.mapShow()
  }
  mapShow(){
    let map = new window.BMapGL.Map('myMap');
    map.centerAndZoom(new window.BMapGL.Point(116.404, 39.915), 12)
  }
  render() {
    return (
      <div style={{position:'relative',width:'1000px',height:'1000px'}}>
        <div id='myMap'>

        </div>
      </div>
    )
  }
}

export default withRouter(Happy);