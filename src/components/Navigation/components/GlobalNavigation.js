import React, { Fragment, Component } from 'react';
import {
  GlobalNav,
  modeGenerator,
  ThemeProvider,
  ViewControllerSubscriber,
} from '@atlaskit/navigation-next';
import Drawer from '@atlaskit/drawer';
import { withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import LogRocket from 'logrocket';
import ProfileFragment from 'components/Profile/ProfileFragment';
import {
  globalNavPrimaryItems,
  globalNavSecondaryItems,
} from 'components/Navigation/menus/globalNavItems';
import CrearBonoPage from 'pages/steps/CrearBonoPage';
import {
  actionBonoStart,
} from 'actions/bonoActions';

const enhance = connect(
  ({ firebase: { profile } }) => ({ profile }),
);

const customThemeMode = modeGenerator({
  product: {
    text: '#FFFFFF',
    background: '#994f7e',
  },
});

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
    history.push('/nuevo-bono');
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
        <CrearBonoPage width="large" />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openCreateBonoModal: () => dispatch(actionBonoStart()),
});

const ConnectedGlobalNavigation = connect(null, mapDispatchToProps)(GlobalNavigation);

export default enhance(withFirebase(withRouter(ConnectedGlobalNavigation)));
