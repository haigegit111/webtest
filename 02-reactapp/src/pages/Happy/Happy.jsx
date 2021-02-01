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
      <div className='happy contaner'>
        <h1 style={{ textAlign: 'center', padding: '0 15px' }} onClick={() => this.setState({ visible1: true })}>欢迎来到娱乐的世界1</h1>
        <h1 style={{ textAlign: 'center', padding: '0 15px' }} onClick={() => this.setState({ visible2: true })}>欢迎来到娱乐的世界2</h1>
        <Maps/>
        <Modal
          visible={visible1}
          onCancel={this.onCancel1}
          width={500}
          bodyStyle={{ background: '#F5F5F5' }}
          footer={null}
        >
          <h2>物业基本信息</h2>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;投资人姓名
            </Col>
            <Col span={14}>
              <Input placeholder='姓名' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;投资人联系方式
            </Col>
            <Col span={14}>
              <Input placeholder='联系方式' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;投资人邮箱地址
            </Col>
            <Col span={14}>
              <Input placeholder='邮箱地址' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              物业出租方
            </Col>
            <Col span={14}>
              <Input placeholder='物业出租房名称' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              物业联系人姓名
            </Col>
            <Col span={14}>
              <Input placeholder='姓名' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              物业联系人联系方式
            </Col>
            <Col span={14}>
              <Input placeholder='联系方式' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              物业定位图片
            </Col>
            <Col span={14}>
              <Input placeholder='联系方式' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10} >
              物业详细地址
            </Col>
            <Col span={14}>
              <Cascader style={{ width: '100%', marginBottom: '10px' }} />
              <Input placeholder='详细地址' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;物业建筑属性
            </Col>
            <Col span={14}>
              <Input placeholder='商业' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;总楼层数
            </Col>
            <Col span={14}>
              <Input placeholder='0层' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;大堂层分布
            </Col>
            <Col span={14}>
              <Input placeholder='0层' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;客房层分布
            </Col>
            <Col span={14}>
              <Input placeholder='0层-x层' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;各层面积/m²
            </Col>
            <Col span={14}>
              <Input placeholder='0' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify="space-around" align="center" style={{ marginTop: '10px', borderBottom: 'none' }}>
            <Col span={12} style={{ textAlign: 'center' }}>
              <Button size='large' type='default' style={{ width: '60%' }} >保存</Button>
            </Col>
            <Col span={12} style={{ textAlign: 'center' }}>
              <Button size='large' type="primary" style={{ width: '60%' }} >确认</Button>
            </Col>
          </Row>
        </Modal>
        <Modal
          visible={visible2}
          onCancel={this.onCancel2}
          bodyStyle={{background:'#F5F5F5'}}
          width={500}
          footer={null}
        >
          <h2 style={{marginBottom:'30px'}}>物业建筑结构资料</h2>
          <h3 style={{marginTop:'10px'}}>原建筑总体结构</h3>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              竣工时间
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;建筑结构
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;建筑外观尺寸-长/m
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;建筑外观尺寸-宽/m
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;建筑外观尺寸-高/m
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <h3 style={{marginTop:'10px'}}>建筑外观尺寸-高/m</h3>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;现场图片
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;楼板结构
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;楼层荷载/kn
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;屋面荷载/kn
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <h3 style={{marginTop:'10px'}}>柱子结构/轴距</h3>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;结构
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;轴距/m
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;大堂层图片
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <h3 style={{marginTop:'10px'}}>大堂层高</h3>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;梁底净高/m
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;楼板底净高/m
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;客房层图片
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <h3 style={{marginTop:'10px'}}>客房层高</h3>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;梁底净高/m
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;楼板底净高/m
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <h3 style={{marginTop:'10px'}}>自定义说明</h3>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;非同层排水楼层
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;层高/m
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;无停车场/院落
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;现场图片
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify='space-around' align='middle'>
            <Col span={10}>
              <span style={{ color: '#EB594B' }}>*</span>&nbsp;现状说明
            </Col>
            <Col span={14}>
              <Input placeholder='' size='middle' style={{ textAlign: 'right' }} />
            </Col>
          </Row>
          <Row justify="space-around" align="center" style={{ marginTop: '10px', borderBottom: 'none' }}>
            <Col span={12} style={{ textAlign: 'center' }}>
              <Button size='large' type='default' style={{ width: '60%' }} >保存</Button>
            </Col>
            <Col span={12} style={{ textAlign: 'center' }}>
              <Button size='large' type="primary" style={{ width: '60%' }} >确认</Button>
            </Col>
          </Row>
        </Modal>
      </div>

    )
  }
}

export default withRouter(Happy);