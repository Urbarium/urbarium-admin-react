// @flow
/* eslint-disable react/no-multi-comp */

import React, { Fragment, PureComponent } from 'react';
import { withRouter, Link, Route } from 'react-router-dom';
import Avatar from '@atlaskit/avatar';
import Drawer from '@atlaskit/drawer';
import ChevronDown from '@atlaskit/icon/glyph/chevron-down';
import LinkIcon from '@atlaskit/icon/glyph/link';
import AddIcon from '@atlaskit/icon/glyph/add';
import QuestionCircleIcon from '@atlaskit/icon/glyph/question-circle';
import SearchIcon from '@atlaskit/icon/glyph/search';
import { JiraIcon } from '@atlaskit/logo';
import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/atlassian';
import GraphBarIcon from '@atlaskit/icon/glyph/graph-bar';
import colors from '../../colors'
import { createTheme } from '@atlaskit/theme';

// Theme: check https://ak-mk-2-prod.netlify.com/packages/core/navigation-next/example/theming

import {
  ConnectedItem,
  GlobalNav,
  ContainerHeader,
  ItemAvatar,
  modeGenerator,
  ThemeProvider,
  Switcher,
} from '@atlaskit/navigation-next';


export const GlobalLink = ({ className, to, onClick, children }: any) => {
  return (
    <Link className={className} to={to} onClick={onClick}>
      {children}
    </Link>
  );
};

const globalNavPrimaryItems = ({ onSearchClick }: *) => [
  {
    id: 'jira',
    icon: ({ label }: { label: string }) => (
      <EmojiAtlassianIcon size="medium" label={label} />
    ),
    label: 'Jira',
    to: '/',
    component: GlobalLink,
  },
  { id: 'metrics', icon: GraphBarIcon },
  { id: 'search', icon: SearchIcon, onClick: onSearchClick },
  { id: 'create', icon: AddIcon },
];

const globalNavSecondaryItems = [
  { id: 'help', icon: QuestionCircleIcon, label: 'Help', size: 'small' },
  {
    icon: () => (
      <Avatar
        borderColor="transparent"
        isActive={false}
        isHover={false}
        size="small"
      />
    ),
    label: 'Profile',
    size: 'small',
    id: 'profile',
  },
];

// ==============================
// Simple global navigation
// ==============================

const customThemeMode = modeGenerator({
  product: {
    text: '#FFFFFF',
    background: '#994f7e',
  }
});

export class DefaultGlobalNavigation extends PureComponent<*, *> {
  state = {
    isOpen: false,
  };
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };
  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyDown);
  };
  handleKeyDown = ({ key }: *) => {
    if (key === '/' && !this.state.isOpen) {
      this.toggleSearch();
    }
  };
  toggleSearch = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Fragment>
        <ThemeProvider theme={theme => ({ ...theme, mode: customThemeMode })}>
          <GlobalNav
            primaryItems={globalNavPrimaryItems({
              onSearchClick: this.toggleSearch,
            })}
            secondaryItems={globalNavSecondaryItems}
          />
        </ThemeProvider>
        <SearchDrawer onClose={this.toggleSearch} isOpen={isOpen}>
          <h2>Search Results</h2>
        </SearchDrawer>
      </Fragment>
    );
  }
}