import React, { Component } from 'react';
import { Route, Switch } from "react-router";

import { ConnectedRouter } from 'connected-react-router'
import { history } from '../../configureStore'

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
import { productHomeView } from './productViews'

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
          customComponents={{ LinkItem }}
        >
          <div style={{ padding: 40 }}>
            <Switch>
              <Route path="/settings" component={UpdateProfilePage} />
              <Route path="/users" component={null} />
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