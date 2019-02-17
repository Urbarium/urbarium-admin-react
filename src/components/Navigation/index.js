import React, { Component, Fragment } from 'react';
import GlobalNavigation from '@atlaskit/global-navigation';
import styled from 'styled-components';
import { GroupHeading, Item, Section, Separator, Wordmark } from '@atlaskit/navigation-next';
import { Route, Switch } from "react-router";
import { Label } from "@atlaskit/field-base";
import { ToggleStateless } from "@atlaskit/toggle";

import { ConnectedRouter } from 'connected-react-router'
import { history } from '../../configureStore'

import {
  LayoutManager,
  NavigationProvider
} from "@atlaskit/navigation-next";

import {
  DefaultGlobalNavigation,
  LinkItem,
  ProjectSwitcher,
} from './components'
import HomePage from '../../pages/HomePage';
import UpdateProfilePage from '../../pages/UpdateProfilePage';
import LoginPage from '../../pages/LoginPage';
import ProductNavigation from './ProductNavigation';

class Navigation extends Component{

  render() {

    return (
      <ConnectedRouter history={history}>
        <NavigationProvider>
          <LayoutManager
            globalNavigation={DefaultGlobalNavigation}
            productNavigation={ProductNavigation}
          >
            <div style={{ padding: 40 }}>
              <Switch>
                <Route path="/users" component={UpdateProfilePage} />
                <Route path="/settings" component={UpdateProfilePage} />
                <Route path="/" component={HomePage} />
              </Switch>
            </div>
          </LayoutManager>
        </NavigationProvider>
      </ConnectedRouter>
    )
  }
}

export default Navigation