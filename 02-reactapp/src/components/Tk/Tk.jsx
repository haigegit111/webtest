import { Component, Fragment } from 'react'
import './tk.css'
class Tk extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render(){
    const { children, visible, title } = this.props
    return (
      visible ? (
        <Fragment>
          <div className='tk'>
            <div className='tMain'>
              <div className='tHeader'>
                {title}
              </div>
              <div className='tBody'>
                {
                  children
                }
              </div>
              
            </div>
          </div>
          
        </Fragment>
      ): (
        <Fragment>

        </Fragment>
      )
      
    )
  }
}
export default Tk