import React, { Component } from 'react';
import { Route, Switch } from "react-router";

import { ConnectedRouter } from 'connected-react-router'
import { history } from '../../configureStore'

import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';
import SettingsIcon from '@atlaskit/icon/glyph/settings';

import {
  LayoutManagerWithViewController,
  NavigationProvider,
  ViewController,
  withNavigationViewController,
} from "@atlaskit/navigation-next";

import {
  DefaultGlobalNavigation,
} from './components'
import HomePage from '../../pages/HomePage';
import UpdateProfilePage from '../../pages/UpdateProfilePage';
import ProductNavigation from './ProductNavigation';

import LinkItem from './LinkItem'

const commonGetItems = () => [
  {
    type: 'HeaderSection',
    id: 'product/home:header',
    items: [
      {
        type: 'Item',
        text: 'Urbarium',
        id: 'urbarium-wordmark',
      },
    ],
  },
  {
    type: 'MenuSection',
    id: 'product/home:menu',
    items: [
      {
        type: 'LinkItem',
        id: 'dashboards',
        before: DashboardIcon,
        text: 'Dashboards',
        to: '/'
      },
      { type: 'LinkItem', 
        id: 'users', 
        before: PeopleGroupIcon, 
        text: 'Users',
        to: '/users'
      },
      {
        type: 'LinkItem',
        id: 'settings',
        before: SettingsIcon,
        text: 'Settings',
        to: '/settings'
      }
    ],
  },
]

const productHomeView = {
  id: 'product/home',
  type: 'product',
  getItems: commonGetItems
};

const productSettingsView = {
  id: 'product/settings',
  type: 'product',
  getItems: commonGetItems
};

class DashboardsRouteBase extends Component<{navigationViewController: ViewController}> {
  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.setView(productHomeView.id);
  }

  render() {
    return <HomePage />
  }
}
const DashboardsRoute = withNavigationViewController(DashboardsRouteBase);

class SettingsRouteBase extends Component<{navigationViewController: ViewController}> {
  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.setView(productSettingsView.id);
  }

  render() {
    return <UpdateProfilePage />
  }
}
const SettingsRoute = withNavigationViewController(SettingsRouteBase);

class Navigation extends Component<{navigationViewController: ViewController}> {

  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.addView(productHomeView);
    navigationViewController.addView(productSettingsView);
    navigationViewController.setView(productHomeView.id);
  }

  render() {

    return (
      <ConnectedRouter history={history}>
        <LayoutManagerWithViewController
          globalNavigation={DefaultGlobalNavigation}
          productNavigation={ProductNavigation}
          customComponents={{ LinkItem }}
        >
          <div style={{ padding: 40 }}>
            <Switch>
              <Route path="/settings" component={SettingsRoute} />
              <Route path="/users" component={null} />
              <Route path="/" component={DashboardsRoute} />
            </Switch>
          </div>
        </LayoutManagerWithViewController>
      </ConnectedRouter>
    )
  }
}

const AppWithNavigationViewController = withNavigationViewController(Navigation)

export default () => (
  <NavigationProvider>
    <AppWithNavigationViewController />
  </NavigationProvider>
);