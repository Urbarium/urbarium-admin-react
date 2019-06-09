import React, { Fragment, Component } from 'react';
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
import { withRouter } from 'react-router-dom'

const enhance = connect(
  ({ firebase: { profile } }) => ({ profile })
)

const customThemeMode = modeGenerator({
  product: {
    text: '#FFFFFF',
    background: '#994f7e',
  }
});

class GlobalNavigation extends Component{

  state = {
    isSearchDrawerOpen: false,
    isProfileDrawerOpen: false,
    productNavView: ''
  };


  toggleSearch = () => {
    this.setState(state => ({ isSearchDrawerOpen: !state.isSearchDrawerOpen }));
  };

  toggleProfile = () => {
    this.setState(state => ({ isProfileDrawerOpen: !state.isProfileDrawerOpen }));
  };

  toggle = (viewController,id) => {
    console.log(`ViewController => ${id}`)
    viewController.setView(id);
    this.props.history.push(`/${id}`);
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
                  onUsersManagementClick: () => this.toggle(viewController,'users'),
                  onAddBonoClick: () => this.toggle(viewController,'bonos'),
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

export default enhance(withFirebase(withRouter(GlobalNavigation)));