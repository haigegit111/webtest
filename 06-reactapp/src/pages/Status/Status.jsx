import React, { Component, Fragment } from 'react'

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>the water id boil</p>
  }
  return <p>the water is not boil</p>
}
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      temperature: e.target.value
    })
    return
  }
  render() {
    const { temperature } = this.state
    return (
      <Fragment>
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input
            value={temperature}
            onChange={this.handleChange}
          />
          <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
      </Fragment>
    )
  }
}
class Status extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Fragment>
        <Calculator />
      </Fragment>
    )
  }
}
export default Status;