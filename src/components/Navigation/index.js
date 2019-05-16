import React, { Component } from 'react';
import { Route, Switch } from "react-router";

import { ConnectedRouter } from 'connected-react-router'
import { history } from '../../configureStore'

import {
  LayoutManagerWithViewController,
  NavigationProvider,
  ViewController,
  withNavigationViewController,
  modeGenerator,
  ThemeProvider,
  HeaderSection,
  MenuSection,
  Item,
  ContainerHeader,
  ItemAvatar,
  Separator,
  GroupHeading
} from "@atlaskit/navigation-next";

import { colors, gridSize } from '@atlaskit/theme';

import Avatar from '@atlaskit/avatar';
import AddIcon from '@atlaskit/icon/glyph/add';
import BacklogIcon from '@atlaskit/icon/glyph/backlog';
import BoardIcon from '@atlaskit/icon/glyph/board';
import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import FolderIcon from '@atlaskit/icon/glyph/folder';
import GraphLineIcon from '@atlaskit/icon/glyph/graph-line';
import IssuesIcon from '@atlaskit/icon/glyph/issues';
import QuestionCircleIcon from '@atlaskit/icon/glyph/question-circle';
import SearchIcon from '@atlaskit/icon/glyph/search';
import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';
import { JiraIcon, JiraWordmark } from '@atlaskit/logo';

import {
  DefaultGlobalNavigation,
} from './components'
import HomePage from '../../pages/HomePage';
import UpdateProfilePage from '../../pages/UpdateProfilePage';
import LinkItem from './LinkItem'
import ProjectInfoHeader from './ProjectInfoHeader'
import { productHomeViewCreate } from './productViews'


const ContainerNavigation = () => (
  <div data-webdriver-test-key="container-navigation">
    <HeaderSection>
      {({ css }) => (
        <div
          data-webdriver-test-key="container-header"
          css={{
            ...css,
            paddingBottom: gridSize() * 2.5,
          }}
        >
          <ContainerHeader
            before={itemState => (
              <ItemAvatar
                itemState={itemState}
                appearance="square"
                size="large"
              />
            )}
            text="My software project"
            subText="Software project"
          />
        </div>
      )}
    </HeaderSection>
    <MenuSection>
      {({ className }) => (
        <div className={className}>
          <Item
            before={BacklogIcon}
            text="Backlog"
            isSelected
            testKey="container-item-backlog"
          />
          <Item
            before={BoardIcon}
            text="Active sprints"
            testKey="container-item-sprints"
          />
          <Item
            before={GraphLineIcon}
            text="Reports"
            testKey="container-item-reports"
          />
          <Separator />
          <GroupHeading>Shortcuts</GroupHeading>
          <Item before={ShortcutIcon} text="Project space" />
          <Item before={ShortcutIcon} text="Project repo" />
        </div>
      )}
    </MenuSection>
  </div>
);


class Navigation extends Component<{navigationViewController: ViewController}> {

  componentDidMount() {
    const { navigationViewController } = this.props;
    const productHomeView = productHomeViewCreate(30, 'In Progress');
    navigationViewController.addView(productHomeView);
    navigationViewController.setView(productHomeView.id);
  }

  render() {

    return (
      <ConnectedRouter history={history}>
        <LayoutManagerWithViewController
          globalNavigation={DefaultGlobalNavigation}
          containerNavigation={ContainerNavigation}
          customComponents={{LinkItem, ProjectInfoHeader}}
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

const customThemeMode = modeGenerator({
  product: {
    text: '#994f7e',
    background: '#ebedf8',
  }
});

export default () => (
  <NavigationProvider>
    <ThemeProvider theme={theme => ({ ...theme, mode: customThemeMode })}>
      <AppWithNavigationViewController />
    </ThemeProvider>
  </NavigationProvider>
);