import React, { Fragment, PureComponent } from 'react';
import {
  GlobalNav,
  modeGenerator,
  ThemeProvider,
} from '@atlaskit/navigation-next';
import {
  globalNavPrimaryItems,
  globalNavSecondaryItems
} from '../menus/globalItems';
import SearchDrawer from './SearchDrawer';
import ProfileDrawer from './ProfileDrawer';
import ProfileFragment from '../../Profile/ProfileFragment';

import { withFirebase } from 'react-redux-firebase'
import { connect } from 'react-redux'

const enhance = connect(
  ({ firebase: { profile } }) => ({ profile })
)

const customThemeMode = modeGenerator({
  product: {
    text: '#FFFFFF',
    background: '#994f7e',
  }
});

class GlobalNavigation extends PureComponent<*, *> {

  state = {
    isSearchDrawerOpen: false,
    isProfileDrawerOpen: false
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = ({ key }: *) => {
    if (key === '/' && !this.state.isSearchDrawerOpen) {
      this.toggleSearch();
    }
  };

  toggleSearch = () => {
    this.setState(state => ({ isSearchDrawerOpen: !state.isSearchDrawerOpen }));
  };

  toggleProfile = () => {
    this.setState(state => ({ isProfileDrawerOpen: !state.isProfileDrawerOpen }));
  };

  onLogoutClick = () => {
    console.log(this.props.firebase.auth);
    this.props.firebase.logout();
  };

  render() {
    return (
      <Fragment>
        <ThemeProvider theme={theme => ({ ...theme, mode: customThemeMode })}>
          <GlobalNav
            primaryItems={globalNavPrimaryItems({
              onSearchClick: this.toggleSearch
            })}
            secondaryItems={globalNavSecondaryItems({
              onProfileClick: this.toggleProfile,
              onLogoutClick: this.onLogoutClick,
              profile: this.props.profile,
            })}
          />
        </ThemeProvider>
        <SearchDrawer onClose={this.toggleSearch} isOpen={this.state.isSearchDrawerOpen}>
          <h2>Search Results</h2>
        </SearchDrawer>
        <ProfileDrawer onClose={this.toggleProfile} isOpen={this.state.isProfileDrawerOpen}>
          <ProfileFragment />
        </ProfileDrawer>
      </Fragment>
    );
  }
}

export default enhance(withFirebase(GlobalNavigation));