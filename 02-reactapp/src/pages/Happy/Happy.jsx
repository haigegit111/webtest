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
      visible1: false,
      visible2: false
    }
  }
  componentDidMount() {
  }
  onCancel1 = () => {
    this.setState({
      visible1: false
    })
  }
  onCancel2 = () => {
    this.setState({
      visible2: false
    })
  }
  render() {
    const { visible1, visible2 } = this.state;
    return (
      <></>
    )
  }
}

export default withRouter(Happy);