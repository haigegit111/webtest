import React, { Component, Fragment } from 'react'

class NameForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: 'xiaomi'
    }
  }
  handleSubmit(e){
    alert(this.state.value)
    e.preventDefault()
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }
  handleInputChange = (e) => {
    const target = e.target;
    const name = target.name
    const value = target.name === 'isGoing' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  render(){
    return (
      <Fragment>
        <form onSubmit={()=>this.handleSubmit()}>
          <label htmlFor="">
            选择手机品牌:
            <select value={this.state.value} onChange={(e)=>this.handleChange(e)}>
              <option value={['iphone 12','iphone 12 pro']}>iphone</option>
              <option value='huawei'>huawei</option>
              <option value='xiaomi'>xiaomi</option>
            </select>
          </label>
          {/* <input type='file'/> */}
          {/* <input type="text" onChange={(e)=>this.handleChange(e)}/> */}
          <input type='submit' />
          <hr/>
          <label htmlFor="">
            参与人数：
            <input
              name='isGoing'
              type='checkbox'
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="">
            来宾人数：
            <input
              name='nums'
              type='number'
              value={this.state.nums}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </Fragment>
    )
  }
}
class Forms extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      <Fragment>
        <NameForm/>
      </Fragment>
    )
  }
}
export default Forms;