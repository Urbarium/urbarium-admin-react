import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import LoginPage from '../pages/LoginPage'
import Navigation from '../components/Navigation';
import { BrowserRouter } from "react-router-dom";
import Loading from '../components/Loading';
export default class MainRouter extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/loading" component={Loading} />
          <Route path="/" component={Navigation} />
        </Switch>
      </BrowserRouter>
    )
  }
}