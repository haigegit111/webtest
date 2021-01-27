import { Component, Fragment } from 'react'
import { Button } from 'antd'
import Forms from './pages/Forms'
import Status from './pages/Status'
import 'antd/dist/antd.css'
import './App.css';

class Clock extends Component{
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount(){
    this.timerId = setInterval(
      () => this.tick(), 1000
    )
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }
  tick(){
    this.setState({
      date: new Date()
    })
  }
  render(){
    let { date } = this.state
    return (
      <div>
        <div>apple</div>
        <div>{date.toLocaleTimeString()}</div>
      </div>
    )
  }
}


function ActionLink(props){
  function handleClick(e){
    e.preventDefault()
    //console.log(e)
  }
  return (
    <Fragment>
      <a href='https://www.apple.cn' onClick={handleClick}>
        hello
      </a>
      <hr/>
    </Fragment>
  )
}
class Toggle extends Component{
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: false
    }
  }
  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
    return
  }
  render(){
    const { isToggleOn } = this.state;
    return (
      <Fragment>
        <Button type='dashed' onClick={this.handleClick}>
          {isToggleOn ? 'ON' : 'OFF'}
        </Button>
        <hr/>
      </Fragment>
    )
  }
}

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render(){
    return (
      <div className='app'>
        <Clock/>
        <Clock/>
        <Clock/>
        <ActionLink/>
        <Toggle/>
        <Forms/>
        <hr/>
        <Status/>
      </div>
    )
  }
}
export default App;
