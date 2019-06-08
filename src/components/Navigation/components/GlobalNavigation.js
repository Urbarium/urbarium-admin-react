import React, { Fragment, PureComponent } from 'react';
import {
  ConnectedItem,
  GlobalNav,
  ContainerHeader,
  ItemAvatar,
  modeGenerator,
  ThemeProvider,
  Switcher,
} from '@atlaskit/navigation-next';
import {
  globalNavPrimaryItems,
  globalNavSecondaryItems
} from '../menus/globalItems';
import SearchDrawer from './SearchDrawer';
import ProfileDrawer from './ProfileDrawer';

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
  }

  render() {
    return (
      <Fragment>
        <ThemeProvider theme={theme => ({ ...theme, mode: customThemeMode })}>
          <GlobalNav
            primaryItems={globalNavPrimaryItems({
              onSearchClick: this.toggleSearch
            })}
            secondaryItems={globalNavSecondaryItems({
              onProfileClick: this.toggleProfile
            })}
          />
        </ThemeProvider>
        <SearchDrawer onClose={this.toggleSearch} isOpen={this.state.isSearchDrawerOpen}>
          <h2>Search Results</h2>
        </SearchDrawer>
        <ProfileDrawer onClose={this.toggleProfile} isOpen={this.state.isProfileDrawerOpen}>
          <h2>Profile</h2>
        </ProfileDrawer>
      </Fragment>
    );
  }
}

export default GlobalNavigation;