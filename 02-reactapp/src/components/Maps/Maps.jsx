import { Map, Marker, NavigationControl, InfoWindow, MapTypeControl, ScaleControl, ZoomControl, Circle, CustomOverlay, Label } from 'react-bmapgl'
import React, { Component, Fragment } from 'react'
import { Button } from 'antd'


function Dom(props) {
  return (
    <div style={{ width: '60px', height: '60px', background: 'pink', borderRadius: '60px', color: '#fff', lineHeight: '60px', textAlign: 'center' }}>
      杭州
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
        mapType='earth'
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
        {/* 自定义覆盖物 */}
        {/* <CustomOverlay
          position={new window.BMapGL.Point(116.35, 39.88)}
        >
          <Dom/>
        </CustomOverlay> */}

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
    // this.mains()
    // this.map1()
    // this.map2()
    this.map3()
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
  // map1(){
  //   //创建地图实例
  //   let map1 = new window.BMapGL.Map('map1')
  //   //设置中心点坐标
  //   let point1 = new window.BMapGL.Point(116.404, 39.915);
  //   //地图初始化，同时设置级别
  //   map1.centerAndZoom(point1,12)
  //   //开启鼠标滚轮缩放
  //   map1.enableScrollWheelZoom(true)
  //   map1.setHeading(50);   //旋转角度
  //   map1.setTilt(73)  //倾斜角度
  //   //map1.setMapType(window.BMAP_EARTH_MAP)  //设置地图类型

  //   //控件
  //   let opts = {
  //     anchor: window.BMAP_ANCHOR_TOP_RIGHT
  //   }
  //   let LocationControl = new window.BMapGL.LocationControl(opts);
  //   map1.addControl(LocationControl);
  //   let CityListControl = new window.BMapGL.CityListControl();
  //   map1.addControl(CityListControl);
  // }
  // map2() {
  //   let map2 = new window.BMapGL.Map('map2');
  //   let point2 = new window.BMapGL.Point(116.404, 39.915);
  //   let marker = new window.BMapGL.Marker(point2)    //创建标注
  //   map2.addOverlay(marker)  //将标注添加到地图上去
  //   map2.centerAndZoom(point2, 12)

  //   // let myIcon = new window.BMapGL.Icon("markers.png", new window.BMapGL.Size(23, 25), {
  //   //   anchor: new window.BMapGL.Size(10,25),
  //   //   imageOffset:new window.BMapGL.Size(0,0 - 25)
  //   // })
  //   // let marker = new window.BMapGL.Marker(point2,{icon:myIcon});
  //   // map2.addOverlay(marker)
  // }
  map3(){
    let map3 = new window.BMapGL.Map('map3');
    let point3 = new window.BMapGL.Point(116.404, 39.915);
    map3.centerAndZoom(point3,7);
    map3.addEventListener('click',e => {
      let mercator = map3.lnglatToMercator(e.latlng.lng, e.latlng.lat);
      console.log(mercator)
    })
  }
  render() {
    return (
      <Fragment>
        {/* <div id='allmap' style={{width:'600px',height:'600px',borderRadius:'150px'}}></div> */}
        
        {/* <div id='map2' style={{ width: '500px', height: '500px' }}></div> */}
        <div id='map3' style={{width:'500px',height:'500px'}}></div>
        {/* <Button onClick={() => this.shows()}>定位</Button> */}
      </Fragment>
    )
  }
}
export default Maps;