import React, { Fragment, Component } from 'react';
import {
  GlobalNav,
  ThemeProvider,
  ViewControllerSubscriber,
} from '@atlaskit/navigation-next';
import Drawer from '@atlaskit/drawer';
import { withFirebase } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import LogRocket from 'logrocket';
import ProfileFragment from '../../Profile/ProfileFragment';
import {
  globalNavPrimaryItems,
  globalNavSecondaryItems,
} from '../menus/globalNavItems';
import customThemeMode from '../theme';

class GlobalNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchDrawerOpen: false,
      isProfileDrawerOpen: false,
    };
    LogRocket.identify(props.profile.email, {
      name: props.profile.name,
      email: props.profile.email,
    });
  }

  toggleSearch = () => {
    this.setState(state => ({ isSearchDrawerOpen: !state.isSearchDrawerOpen }));
  };

  toggleProfile = () => {
    this.setState(state => ({ isProfileDrawerOpen: !state.isProfileDrawerOpen }));
  };

  toggle = (viewController, id) => {
    const { history } = this.props;
    viewController.setView(id);
    history.push(`/${id}`);
  }

  goHome = () => {
    const { history } = this.props;
    history.push('/');
  }

  goNuevoBono = () => {
    const { history } = this.props;
    history.push('/bonos/nuevo');
  }

  render() {
    const { firebase, profile } = this.props;
    const { isSearchDrawerOpen, isProfileDrawerOpen } = this.state;
    return (
      <Fragment>
        <ThemeProvider theme={theme => ({ ...theme, mode: customThemeMode })}>
          <ViewControllerSubscriber>
            {viewController => (
              <GlobalNav
                primaryItems={globalNavPrimaryItems({
                  onDashboardClick: this.goHome,
                  onSearchClick: this.toggleSearch,
                  onUsersManagementClick: () => this.toggle(viewController, 'users'),
                  onAddBonoClick: this.goNuevoBono,
                })}
                secondaryItems={globalNavSecondaryItems({
                  onProfileClick: this.toggleProfile,
                  onLogoutClick: () => firebase.logout(),
                  profile,
                })}
              />
            )
            }
          </ViewControllerSubscriber>
        </ThemeProvider>
        <Drawer onClose={this.toggleSearch} isOpen={isSearchDrawerOpen}>
          <h2>Resultados</h2>
        </Drawer>
        <Drawer onClose={this.toggleProfile} isOpen={isProfileDrawerOpen}>
          <ProfileFragment />
        </Drawer>
      </Fragment>
    );
  }
}

export default compose(
  withFirebase,
  withRouter,
  connect(({ firebase: { profile } }) => ({ profile })),
)(GlobalNavigation);
