import { Component } from 'react'
import { Button } from 'antd'
import Header from './Header'

class Main extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  btnClick(e){
    console.log(e)
  }
  render(){
    return (
      <div>
        <Header/>
        <h1>这是mian页面</h1>
        <Button onClick={(e)=>this.btnClick(e)}>点击</Button>
      </div>
    )
  }
}

export default Main;