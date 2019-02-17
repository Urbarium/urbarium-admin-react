import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import LoginPage from '../pages/LoginPage'
import Navigation from '../components/Navigation';
import { Router } from "react-router-dom";
import Loading from '../components/Loading';

class MainRouter extends Component {

  render() {
    return (
      <Router history={this.props.history}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/loading" component={Loading} />
          <Route path="/" component={Navigation} />
        </Switch>
      </Router>
    )
  }
}

export default MainRouter