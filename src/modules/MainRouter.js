import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import App from './App'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import history from '../components/History/history'
import PermissionsPage from '../pages/PermissionsPage'
import UpdateProfilePage from '../pages/UpdateProfilePage'
import { UserIsAuthenticated, UserIsNotAuthenticated } from '../components/AuthorizedPages'

export default class MainRouter extends Component {
  constructor() {
    super()
    this.state = {
      navOpenState: {
        isOpen: true,
        width: 304,
      }
    }
  }

  getChildContext () {
    return {
      navOpenState: this.state.navOpenState,
    }
  }

  appWithPersistentNav = () => (props) => (
    <App
      onNavResize={this.onNavResize}
      {...props}
    />
  )

  onNavResize = (navOpenState) => {
    this.setState({
      navOpenState,
    })
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/login" component={UserIsNotAuthenticated(LoginPage)} />
          <Route component={this.appWithPersistentNav()}>
            <Route path="/" component={UserIsAuthenticated(HomePage)} />
            <Route path="/permissions" component={UserIsAuthenticated(PermissionsPage)} />
            <Route path="/update_profile" component={UserIsAuthenticated(UpdateProfilePage)} />
          </Route>
        </div>
      </Router>
    )
  }
}

MainRouter.childContextTypes = {
  navOpenState: PropTypes.object,
}
