import './App.css';
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Main from './pages/Main'
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render(){
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
  }
}
export default App;
