import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'

import App from './App'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import PermissionsPage from '../pages/PermissionsPage'
import UpdateProfilePage from '../pages/UpdateProfilePage'
import { UserIsAuthenticated, UserIsNotAuthenticated } from '../components/AuthorizedPages'
import Navigation from '../components/Navigation';
import { BrowserRouter } from "react-router-dom";
export default class MainRouter extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={UserIsNotAuthenticated(LoginPage)} />
          <Route path="/" component={Navigation} />
        </Switch>
      </BrowserRouter>
    )
  }
}