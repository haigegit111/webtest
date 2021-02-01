import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Drag extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  static defaultProps = {
    updateTransform: (transformStr, tx, ty, tdom) => {
      tdom.style.transform = transformStr;
    }
  };
  constructor(props) {
    super(props);
    this.position = {
      startX: 0,
      startY: 0,
      dx: 0,
      dy: 0,
      tx: 0,
      ty: 0
    };
  }
  componentDidMount() {
    this.tdom.addEventListener("mousedown", this.start);
    document.addEventListener("mouseup", this.docMouseUp);
  }
  componentWillUnmount() {
    this.tdom.removeEventListener("mousedown", this.start);
    document.removeEventListener("mouseup", this.docMouseUp);
    document.removeEventListener("mousemove", this.docMove);
  }
  start = event => {
    if (event.button !== 0) {
      return;
    }
    document.addEventListener("mousemove", this.docMove);
    this.position.startX = event.pageX - this.position.dx;
    this.position.startY = event.pageY - this.position.dy;
  };
  docMove = event => {
    const tx = event.pageX - this.position.startX;
    const ty = event.pageY - this.position.startY;
    const transformStr = `translate(${tx}px,${ty}px)`;
    this.props.updateTransform(transformStr, tx, ty, this.tdom);
    this.position.dx = tx;
    this.position.dy = ty;
  };
  docMouseUp = event => {
    document.removeEventListener("mousemove", this.docMove);
  };
  render() {
    const { children } = this.props;
    const newStyle = { ...children.props.style, userSelect: "none" };
    return React.cloneElement(React.Children.only(children), {
      ref: tdom => {
        return (this.tdom = tdom);
      },
      style: newStyle
    });
  }
}