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
      ],
      apple: 1
    }
  }
  btnClick() {
    let { items, apple } = this.state
    items[3] = {
      abc: 123
    }
    apple = 2
    this.setState({
      apple
    })
  }
  render() {
    let { items, apple } = this.state
    console.log(items)
    console.log(apple)
    return (
      <>
        <Glossary
          items={this.state.items}
        />
        <button onClick={() => this.btnClick()}>点击</button>
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
class OuterClickExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleContainer = React.createRef();
  }
  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler)
  }
  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }))
  }
  onClickOutsideHandler = (event) => {
    console.log(event.target)
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false })
    }
  }
  render() {
    console.log(this.toggleContainer)
    return (
      <>
        <div ref={this.toggleContainer}>
          <button onClick={() => this.onClickHandler()}>Select an option</button>
          {
            this.state.isOpen && (
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )
          }
        </div>
      </>
    )
  }
}

function logProps(WrappedComponent){
  class LogProps extends Component{
    componentDidUpdate(prevProps){
      console.log('old', prevProps)
      console.log('new', this.props)
    }
    render(){
      return <WrappedComponent {...this.props}/>
    }
  }
  return LogProps
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
  componentDidMount() {
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
    const { nowNews, isSpin } = this.state
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
          <logProps/>
          
        </div>

      </Spin>
    )
  }
}
export default withRouter(Home);