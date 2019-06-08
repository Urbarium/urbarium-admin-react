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
import Drawer from '@atlaskit/drawer';
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
              onLogoutClick: () => this.props.firebase.logout(),
              profile: this.props.profile,
            })}
          />
        </ThemeProvider>
        <Drawer onClose={this.toggleSearch} isOpen={this.state.isSearchDrawerOpen}>
          <h2>Search Results</h2>
        </Drawer>
        <Drawer onClose={this.toggleProfile} isOpen={this.state.isProfileDrawerOpen}>
          <ProfileFragment />
        </Drawer>
      </Fragment>
    );
  }
}

export default enhance(withFirebase(GlobalNavigation));