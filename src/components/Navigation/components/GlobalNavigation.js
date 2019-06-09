import React, { Fragment, PureComponent } from 'react';
import {
  GlobalNav,
  modeGenerator,
  ThemeProvider,
} from '@atlaskit/navigation-next';
import {
  globalNavPrimaryItems,
  globalNavSecondaryItems
} from '../menus/globalNavItems';
import Drawer from '@atlaskit/drawer';
import ProfileFragment from '../../Profile/ProfileFragment';
import { withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { ViewControllerSubscriber } from '@atlaskit/navigation-next';

const enhance = connect(
  ({ firebase: { profile } }) => ({ profile })
)

const customThemeMode = modeGenerator({
  product: {
    text: '#FFFFFF',
    background: '#994f7e',
  }
});

class GlobalNavigation extends PureComponent{

  state = {
    isSearchDrawerOpen: false,
    isProfileDrawerOpen: false,
    productNavView: ''
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

  toggle = (viewController,id) => {
    console.log(`ViewController => ${id}`)
    viewController.setView(id)
  }

  render() {
    return (
      <Fragment>
        <ThemeProvider theme={theme => ({ ...theme, mode: customThemeMode })}>
          <ViewControllerSubscriber>
            {viewController => (
              <GlobalNav
                primaryItems={globalNavPrimaryItems({
                  onSearchClick: this.toggleSearch,
                  onUsersManagementClick: () => this.toggle(viewController,'users-management'),
                  onAddBonoClick: () => this.toggle(viewController,'crear-bono'),
                })}
                secondaryItems={globalNavSecondaryItems({
                  onProfileClick: this.toggleProfile,
                  onLogoutClick: () => this.props.firebase.logout(),
                  profile: this.props.profile,
                })}
              />)
            }
          </ViewControllerSubscriber>
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