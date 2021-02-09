import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import Login from './pages/Login'
import Main from './pages/Main'
import Home from './pages/Home'
import Science from './pages/Science'
import Happy from './pages/Happy'
import { Charts } from './components/Maps'
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
  },
  "/science": {
    title: '科技',
    component: Science
  },
  "/happy": {
    title: '娱乐',
    component: Happy
  },
  "/charts": {
    title: '图表',
    component: Charts
  }
}

const Routes = () => (
  <Switch>
    {
      Object.keys(nav).map((key, index) => {
        let item = nav[key]
        return <Route exact key={key} component={item.component} path={key} />
      })
    }
    <Redirect to='/home' />
  </Switch>
)
export default Routes;
export {
  nav
}
