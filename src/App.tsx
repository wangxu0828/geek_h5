import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Layout from './page/Layout'
import Login from './page/Login'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/home">
            <Layout></Layout>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
