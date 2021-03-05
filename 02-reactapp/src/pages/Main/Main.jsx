import { Component, Fragment } from 'react'
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
    const { pathname } = this.props.location;
    return (
      <div className='main'>
        {
          pathname !== '/login' &&  <Header/>
        }
        <Routes/>
      </div>
    )
  }
}

export default withRouter(Main);