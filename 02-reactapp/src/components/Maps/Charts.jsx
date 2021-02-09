import React, { Component, Fragment, PureComponent } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Pie, PieChart, Sector, Cell } from 'recharts'
import { Upload, Button, message, Switch} from 'antd'
class Charts extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.data = [
      {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 550, pv: 2500, amt: 2500},
      {name: 'Page C', uv: 300, pv: 2600, amt: 2600},
      {name: 'Page D', uv: 200, pv: 2600, amt: 2600},
      {name: 'Page E', uv: 260, pv: 2600, amt: 2600}
    ]

  }
  setKey(type, e){
    console.log(type,e)
  }
  render() {
    const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
      return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}`}</text>;
    };
    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    }
    const data = [
      { name: 'Group A', value: 800 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 100 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
      <Fragment>
        <br/>
        <LineChart width={600} height={300} data={this.data} margin={{top:5,right:20,bottom:5,left:0}}>
          <Line type='monotone' dataKey='uv' stroke="#8884d8" ></Line>
          <CartesianGrid stroke="#ccc" strokeDasharray='5 5' />
          <XAxis dataKey='name'/>
          <YAxis/>
          <Tooltip/>
        </LineChart>
        <br/>
        <BarChart width={600} height={300} data={this.data}>
          <XAxis dataKey='name' stroke='#8884d8'/>
          <YAxis/>
          <Tooltip/>
          <Bar 
            dataKey='uv' 
            fill='#8884d8' 
            barSize={30} 
            onClick={e=>console.log(e)}
            label={renderCustomBarLabel}
          />
        </BarChart>
        <br/>
        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={null}
            dataKey="value"
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
        <br/>
        <Upload {...props}>
          <Button icon={<i className='iconfont icon-cha'/>}></Button>
        </Upload>
        <Switch checkedChildren={'否'} unCheckedChildren={'是'} size="default" onChange={(e)=>this.setKey('ok',e)}/>
      </Fragment>
    )
  }
}
export default Charts;