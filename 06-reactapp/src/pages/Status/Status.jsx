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
//转化为C
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}
//转化为F
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}
//检查格式
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
//输入组件
class TemperatureInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: ''
    }
  }
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    const { scale, temperature } = this.props;
    return (
      <Fragment>
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input
            value={temperature}
            onChange={this.handleChange}
          />
        </fieldset>
      </Fragment>
    )
  }
}
//主组件
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }
  handleCelsiusChange = (temperature) => {
    this.setState({
      scale: 'c',
      temperature
    })
  }
  handleFahrenheitChange = (temperature) => {
    this.setState({
      scale: 'f',
      temperature
    })
  }
  render() {
    const { scale, temperature } = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <Fragment>
        <TemperatureInput
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)}/>
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
        <Calculator/>
      </Fragment>
    )
  }
}
export default Status;