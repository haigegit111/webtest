import { Map, Marker, NavigationControl, InfoWindow, MapTypeControl, ScaleControl, ZoomControl, Circle, CustomOverlay, Label } from 'react-bmapgl'
import React, { Component, Fragment } from 'react'
import { Button } from 'antd'
import Com from './Com'
import Charts from './Charts'
function Dom(props) {
  return (
    <div style={{ width: '40px', height: '40px', background: '#7759AF', borderRadius: '40px', color: '#fff', lineHeight: '40px', textAlign: 'center' }}>
      浙江
    </div>
  )
}
class Example extends Component {
  componentDidMount() {
    this.maps()
  }
  maps() {
    let maps = new window.BMapGL.Map('maps');
    let point = new window.BMapGL.Point(116.404, 39.915);
    maps.centerAndZoom(point, 16)
    maps.enableScrollWheelZoom()
    // let opts = {
    //   anchor: window.BMAP_ANCHOR_TOP_RIGHT
    // }
    // let LocationControl = new window.BMapGL.LocationControl(opts);
    // maps.addControl(LocationControl)

    function myFun(result) {
      var cityName = result.name;
      maps.setCenter(cityName);
    }
    let myCity = new window.BMapGL.LocalCity();
    myCity.get(myFun);
  }
  render() {
    return (
      // <Map
      //   zoom={5}
      //   tilt={30}
      //   style={{ height: 600 }}
      //   center={new window.BMapGL.Point(116.404449, 39.914889)}
      //   enableScrollWheelZoom
      // >
      //   <CustomOverlay position={new window.BMapGL.Point(116.35, 39.88)}>
      //     <Dom/>
      //   </CustomOverlay>
      // </Map>
      <div id='maps' style={{ width: '100%', height: '600px' }}>

      </div>
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
        <Example />
        <Com />
        {/* <Charts/> */}
      </div>
    )
  }
}
export default Maps;