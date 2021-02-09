import { Card, Progress, Table } from 'antd'
import React, { Component, Fragment, PureComponent } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from 'recharts'
import './map.css'



class OuterClickExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleContainer = React.createRef();
  }
  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler)
  }
  onClickHandler = () => {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }))
  }
  onClickOutsideHandler = (event) => {
    let { isOpen } = this.state
    isOpen && !this.toggleContainer.current.contains(event.target) && this.setState({ isOpen: false })
  }
  render() {
    return (
      <div ref={this.toggleContainer}>
        <button onClick={this.onClickHandler}>选择</button>
        {
          this.state.isOpen && (
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )
        }
      </div>
    )
  }
}
function Ttitle(props) {
  return (
    <div className='Ttitle'>{props.title}</div>
  )
}
class Com extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.data = [
      {
        "name": "Group A",
        "value": 400
      },
      {
        "name": "Group B",
        "value": 300
      },
      {
        "name": "Group C",
        "value": 500
      },
      {
        "name": "Group D",
        "value": 200
      },
      {
        "name": "Group E",
        "value": 278
      },
      {
        "name": "Group F",
        "value": 189
      }
    ]
    this.colors = ['red', 'yellow', 'blue', 'pink', 'orange', 'green']
    this.columns = [
      {
        title: '城市名称',
        dataIndex: 'name',
        align: 'center'
      },
      {
        title: '进行中',
        dataIndex: 'progress',
        align: 'center',
        render: (text) => {
          return <span style={{color:'green'}}>{text}</span>
        }
      },
      {
        title: '异常',
        dataIndex: 'faile',
        align: 'center',
        render: text => {
          return <span style={{color:'orange'}}>{text}</span>
        }
      },
      {
        title: '开业',
        dataIndex: 'kaiye',
        align: 'center',
        render: text => {
          return <span style={{color:'purple'}}>{text}</span>
        }
      }
    ]
    this.dataSource=[
      {
        name: '北京',
        progress: 9,
        faile: 0,
        kaiye: 0
      },
      {
        name: '上海',
        progress: 9,
        faile: 0,
        kaiye: 0
      },
      {
        name: '广州',
        progress: 9,
        faile: 0,
        kaiye: 0
      },
      {
        name: '深圳',
        progress: 9,
        faile: 0,
        kaiye: 0
      },
      {
        name: '杭州',
        progress: 9,
        faile: 0,
        kaiye: 0
      },
      {
        name: '南昌',
        progress: 9,
        faile: 0,
        kaiye: 0
      }
    ]
  }
  render() {
    return (
      <Fragment>
        {/* 门店版本 */}
        <br />
        <div className='cards banben'>
          <Ttitle title='门店版本' />
          <div >
            <p>1.0:</p>&nbsp;&nbsp;&nbsp;
            <Progress percent={30} />
          </div>
          <div >
            <p>2.0:</p>&nbsp;&nbsp;&nbsp;
            <Progress percent={20} />
          </div>
          <div >
            <p>3.0:</p>&nbsp;&nbsp;&nbsp;
            <Progress percent={60} />
          </div>
        </div>
        {/* 开业门店 */}
        <div className='cards kaiye'>
          <Ttitle title='开业门店' />
          <div >
            <p>本月开业:</p>&nbsp;&nbsp;&nbsp;
            <Progress percent={30} />
          </div>
          <div >
            <p>预计开业:</p>&nbsp;&nbsp;&nbsp;
            <Progress percent={20} />
          </div>
          <div >
            <p>下月开业:</p>&nbsp;&nbsp;&nbsp;
            <Progress percent={60} />
          </div>
        </div>
        {/* 门店数据 */}
        <div className='cards shuju'>
          <Ttitle title='门店数据'/>
          <div className='titles'>
            <div>
              <div style={{fontSize:'30px',fontWeight:600,color:'green'}}>723</div>
              <div>进行中</div>
            </div>
            <div>
              <div style={{fontSize:'30px',fontWeight:600,color:'orange'}}>70</div>
              <div>异常</div>
            </div>
            <div>
              <div style={{fontSize:'30px',fontWeight:600,color:'purple'}}>17</div>
              <div>开业</div>
            </div>
          </div>
          <Table
            rowKey='name'
            columns={this.columns}
            dataSource={this.dataSource}
            width={260}
            pagination={false}
            style={{marginTop:'10px',overflow:'hidden'}}
          />
        </div>
        <PieChart width={730} height={250}>
          <Pie data={this.data} cx="50%" cy="50%" outerRadius={80} label>
            {
              this.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={this.colors[index]} />
              ))
            }
          </Pie>
        </PieChart>
      </Fragment>
    )
  }
}

export default Com;
