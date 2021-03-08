import React, { Component, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, message, Spin } from 'antd'
import moment from 'moment'
import homeApi from '../../api/homeApi'
import './home.css'


class SearchCom extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { inputValue, changeInputValue } = this.props
    return (
      <>
        <input value={inputValue} onChange={(e) => changeInputValue(e.target.value)} type="text" />
      </>
    )
  }
}
class List1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          term: 'apple',
          description: '8499'
        },
        {
          id: 2,
          term: 'xiaomi',
          description: '3999'
        }
      ]
    }
  }
  render() {
    return (
      <>
        <Glossary
          items={this.state.items}
        />
      </>
    )
  }
}
function ListItem({ item }) {
  return (
    <>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </>
  )
}
function Glossary(props) {
  return (
    <dl>
      {
        props.items.map(item =>
          <ListItem item={item} key={item.id} />
        )
      }
    </dl>
  )
}
class CustomTextInput extends Component{
  constructor(props){
    super(props)
    // 创造一个 textInput DOM 元素的 ref
    this.textInput = React.createRef()
    this.state = {

    }
  }
  render(){
    return (
      <>
        <input type="text" ref={this.textInput}/>
      </>
    )
  }
}
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nowNews: [],
      visible: false,
      title: 'Apple',
      content: ['iphone 12', 'iphone 12 pro', 'iphone 12 pro max'],
      isSpin: true,
      inputValue: 'apple'
    }
  }
  componentWillMount() {
    this.getNowNews()
  }
  getNowNews() {
    homeApi.getNowNews().then(res => {
      if (res.status === 200) {
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
  changeValue = (val) => {
    this.setState({
      inputValue: val
    })
  }
  render() {
    const { nowNews, isSpin, inputValue } = this.state
    return (
      <Spin spinning={isSpin}>
        <div className='home contaner'>
          <div className='timeTitle'>
            <div className='desc'>今日新闻</div>
            <div className='time'>{moment().format("YYYY年MM月DD号 dddd")}</div>
          </div>
          <div className='nowNews'>
            {
              nowNews.map((item, index) => {
                return (<div className='newSon' key={index + item} style={{ fontWeight: (index === 0 || index === 1) ? '700' : null }}><a href='#'>{item.title}</a></div>)
              })
            }
          </div>
          <div className='tokeTxt'>
            热点推送
        </div>
          <SearchCom
            inputValue={inputValue}
            changeInputValue={this.changeValue}
          />
          <List1 />
        </div>

      </Spin>
    )
  }
}
export default withRouter(Home);