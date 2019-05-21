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

const customThemeMode = modeGenerator({
  product: {
    text: '#FFFFFF',
    background: '#994f7e',
  }
});

class GlobalNavigation extends PureComponent<*, *> {
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

export default GlobalNavigation;