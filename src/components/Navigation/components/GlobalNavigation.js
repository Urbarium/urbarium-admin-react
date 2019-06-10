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
import Lorem from 'react-lorem-component';
import Modal from '@atlaskit/modal-dialog';
import ProfileFragment from '../../Profile/ProfileFragment';
import {
  globalNavPrimaryItems,
  globalNavSecondaryItems,
} from '../menus/globalNavItems';
import LogRocket from 'logrocket';

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
      isCreateBonoOpen: false,
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

  onCreatedBono = (id) => {
    const { history } = this.props;
    const nid = 30;
    history.push(`/bonos/${nid}/beneficiarios`);
  }

  openCreateBono = () => this.setState({ isCreateBonoOpen: true });

  closeCreateBono = () => this.setState({ isCreateBonoOpen: false });

  render() {
    const { firebase, profile } = this.props;
    const { isSearchDrawerOpen, isProfileDrawerOpen, isCreateBonoOpen } = this.state;
    const modalCreateBonoActions = [
      { text: 'Crear', onClick: this.onCreatedBono },
      { text: 'Cancelar', onClick: this.closeCreateBono },
    ];
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
                  onAddBonoClick: this.openCreateBono,
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
        {
          isCreateBonoOpen && (
            <Modal actions={modalCreateBonoActions} onClose={this.closeCreateBono} heading="Nuevo Bono">
              <Lorem count={2} />
            </Modal>
          )
        }
      </Fragment>
    );
  }
}

export default enhance(withFirebase(withRouter(GlobalNavigation)));
