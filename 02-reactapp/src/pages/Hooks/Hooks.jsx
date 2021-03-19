import React, { Component } from 'react'
import HookSon from './HookSon'

class Hooks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      app: 'apple',
      url: 'https://www.apple.cn'
    }
  }
  render() {
    return (
      <>
        <HookSon/>
      </>
    )
  }
}
export default Hooks;