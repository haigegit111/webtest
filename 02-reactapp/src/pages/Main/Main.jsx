import { Component } from 'react'
import Header from './Header'
import Routes from '../../Routes'
import { withRouter } from 'react-router-dom'

class Main extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      <div className='main'>
        <Header/>
        <Routes/>
      </div>
    )
  }
}

export default withRouter(Main);