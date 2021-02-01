import React, { Component } from 'react';
import Drag from '.'

export default class DragAntdModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  updateTransform = (transformStr, x, y, tdom) => {
    let modalDom = tdom.parentNode.parentNode.parentNode.parentNode
    modalDom.style.transform = transformStr;
  };
  render() {
    return (
      <Drag updateTransform={this.updateTransform}>
        <div>{this.props.title}</div>
      </Drag>
    );
  }
}