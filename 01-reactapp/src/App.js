import './App.css';
import { Component, Fragment } from 'react'
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      name: 'iphone',
      nameArr: []
    }
  }
  add(){
    this.setState({
      name: 'huawei'
    },()=>{
      this.add()
    })
  }
  render(){
    const { nameArr } = this.state
    return (
      <Fragment>
        <h1>apple</h1>
        <div>
          {
            nameArr.map(res => {
              return (
                <div>{res}</div>
              )
            })
          }
        </div>
      </Fragment>
    )
  }
}

export default App;
