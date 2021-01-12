import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import Login from './pages/Login'
import Main from './pages/Main'
import Home from './pages/Home'

const nav = {
  "/login": {
    title: '登陆',
    component: Login
  },
  "/home": {
    title: '首页',
    component: Home
  },
  "/main": {
    title: '主要内容',
    component: Main
  }
}

const Routes = () => (
  <Switch>
    {
      object.keys(nav).map((key, index) => {
        let item = nav[key]
        return <Route exact component={item.component} path={key}/>
      })
    }
    <Redirect to='/main'/>
  </Switch>
)
export default Routes;
export {
  nav
}
