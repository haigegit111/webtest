import React, { Component, Fragment } from 'react'
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}
function Dialog(props) {
  return (
    <FancyBorder color='blue'>
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {
        props.children
      }
    </FancyBorder>
  )
}
function WelcomeDialog(props) {
  return (
    <Dialog
      title='Welcome'
      message='Thank you for visiting our spacecraft!'
    />
  )
}

class SignUpDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: ''
    }
  }
  handleChange(e) {
    this.setState({
      login: e.target.value
    })
  }
  handleSignUp() {
    const { login } = this.state
    alert(`Welcome aboard,${login}`)
    return
  }
  render() {
    const { login } = this.state;
    return (
      <Fragment>
        <Dialog
          title='Mars Exploration Program'
          message='How should we refer to you?'
        >
          <input value={login} onChange={(e) => this.handleChange(e)} />
          <button onClick={() => this.handleSignUp()}>Sign Me Up!</button>
        </Dialog>
      </Fragment>
    )
  }
}
class Extds extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Fragment>
        {/* <WelcomeDialog/> */}
        <SignUpDialog />
      </Fragment>
    )
  }
}
export default Extds;