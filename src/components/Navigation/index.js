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

const productHomeView = {
  id: 'product/home',
  type: 'product',
  getItems: () => [
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
          type: 'Item',
          id: 'dashboards',
          before: DashboardIcon,
          text: 'Dashboards',
        },
        { type: 'Item', 
          id: 'users', 
          before: PeopleGroupIcon, 
          text: 'Users' },
        {
          type: 'Item',
          id: 'settings',
          before: SettingsIcon,
          text: 'Settings',
        }
      ],
    },
  ],
};

class Navigation extends Component<{navigationViewController: ViewController}> {

  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.addView(productHomeView);
    navigationViewController.setView(productHomeView.id);
  }

  render() {

    return (
      <ConnectedRouter history={history}>
        <LayoutManagerWithViewController
          globalNavigation={DefaultGlobalNavigation}
          productNavigation={ProductNavigation}
        >
          <div css={{ padding: 40 }}>
            <Switch>
              <Route path="/users" component={UpdateProfilePage} />
              <Route path="/settings" component={UpdateProfilePage} />
              <Route path="/" component={HomePage} />
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