import { Map, Marker, NavigationControl, InfoWindow, MapTypeControl, ScaleControl, ZoomControl, Circle, CustomOverlay, Label } from 'react-bmapgl'
import React, { Component, Fragment } from 'react'
import { Button } from 'antd'
import Com from './Com'

function Dom(props) {
  return (
    <div style={{ width: '40px', height: '40px', background: '#7759AF', borderRadius: '40px', color: '#fff', lineHeight: '40px', textAlign: 'center' }}>
      浙江
    </div>
  )
}
class Example extends Component {
  render() {
    return (
      <Map
        zoom={12}
        tilt={30}
        style={{ height: 600 }}
        center={new window.BMapGL.Point(116.404449, 39.914889)}
        enableScrollWheelZoom
      >
        {/* <Circle
          center={new window.BMapGL.Point(116.40, 39.91)}
          radius={5000}
          strokeColor='#f00'
          strokeWeight={2}
          fillColor='#f00'
          fillOpacity={0.3}
          autoViewport
          onClick={(e)=>console.log(e)}
        /> */}
        <CustomOverlay position={new window.BMapGL.Point(116.35, 39.88)}>
          <Dom/>
        </CustomOverlay>

        {/* info */}
        {/* <InfoWindow
          position={new window.BMapGL.Point(116.40, 39.91)}
          title='标题'
          text='快速文本窗口'
          onClickclose={(e) => console.log(e)}
        /> */}

        {/* label */}
        {/* <Label
          position={new window.BMapGL.Point(116.40, 39.91)}
          text='apple'
        /> */}

        {/* marker */}
      </Map>
    )
  }
}
class Maps extends Component {
  componentDidMount() {
    
  }
  //定位
  // mains = () => {
  //   var map = new window.BMapGL.Map("allmap");
  //   var point = new window.BMapGL.Point(116.331398,39.897445);
  //   map.centerAndZoom(point,12);
  //   return map
  // }
  // shows = () => {
  //   let map = this.mains();
  //   function myFun(result) {
  //     var cityName = result.name;
  //     map.setCenter(cityName);
  //   }
  //   let myCity = new window.BMapGL.LocalCity();
  //   myCity.get(myFun);
  // }
  
  render() {
    return (
      <div >
       <Example/>
        {/* <div id='map3' style={{width:'100%',height:'650px'}}></div> */}
        {/* <Button onClick={() => this.shows()}>定位</Button> */}
        <Com/>
      </div>
    )
  }
}
export default Maps;