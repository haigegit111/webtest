import React, { Component, Fragment } from 'react';
import "./loading.less"

class Loading extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { children, icon, color, loading } = this.props
    let iconDom = (
      icon ? (
        <span className="loading-icon">
          {icon}
        </span>
      ) : (
        <span className="loading-icon default">
          <i style={{background : color ? color : '#1890ff'}}></i>
          <i style={{background : color ? color : '#1890ff'}}></i>
          <i style={{background : color ? color : '#1890ff'}}></i>
          <i style={{background : color ? color : '#1890ff'}}></i>
        </span>
      )
    )
    return (
      loading ? (
        children ? (
          <div className="loading">
            <div className="loading-transition">
              {iconDom}
            </div>
            <div className="loading-opacity">
              {children}
            </div>
          </div>
        ) : (
          <div className="loading" style={{display: "inline-block"}}>
            {iconDom}
          </div>
        )
      ) : (
        <Fragment>
          {children}
        </Fragment>
      )
    )
  }
}

export default Loading
