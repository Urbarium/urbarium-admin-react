import React, { Component } from 'react';

// Routes
import { Route, Switch } from 'react-router';

// Navigation-Next Component
import {
  LayoutManagerWithViewController,
  NavigationProvider,
  withNavigationViewController,
  withNavigationUIController,
  modeGenerator,
  ThemeProvider,
} from '@atlaskit/navigation-next';

// Subcomponents
import GlobalNavigation from './components/GlobalNavigation';
import LinkItem from './components/LinkItem';
import ProjectInfoHeader from './components/ProjectInfoHeader';

// Pages
import UpdateProfilePage from '../../pages/UpdateProfilePage';
import CasoDeBonoPage from '../../pages/bono/CasoDeBonoPage';
import ConstruccionTramitesPage from '../../pages/bono/ConstruccionTramitesPage';
import DesembolsoPage from '../../pages/bono/DesembolsoPage';
import TramitesPage from '../../pages/bono/TramitesPage';
import BeneficiariosPage from '../../pages/bono/BeneficiariosPage';
import HomePage from '../../pages/HomePage';
import UsersPage from '../../pages/UsersPage';

// Menus
import bonoFormNavItems from './menus/bonoFormNavItems';
import usersManagementNavItems from './menus/usersManagementNavItems';

const initializeProductNavs = (navigationViewController, navigationUIController) => {
  // eslint-disable-next-line no-undef
  if (window.location.pathname.match(/^\/bono/)) {
    navigationViewController.setView('bonos');
  // eslint-disable-next-line no-undef
  } else if (window.location.pathname.match(/^\/users/)) {
    navigationViewController.setView('users');
  } else {
    // eslint-disable-next-line no-param-reassign
    navigationUIController.state.isCollapsed = true;
    // eslint-disable-next-line no-param-reassign
    navigationUIController.state.isResizeDisabled = true;
  }
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    const { navigationViewController, navigationUIController } = props;
    initializeProductNavs(navigationViewController, navigationUIController);
  }

  componentDidMount() {
    const { navigationViewController } = this.props;
    const bonoFormNav = bonoFormNavItems(30, 'In Progress');
    navigationViewController.addView(bonoFormNav);
    navigationViewController.addView(usersManagementNavItems);
  }

  render() {
    return (
      <LayoutManagerWithViewController
        globalNavigation={GlobalNavigation}
        customComponents={{ LinkItem, ProjectInfoHeader }}
      >
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/settings" component={UpdateProfilePage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/bonos/:id/beneficiarios" component={BeneficiariosPage} />
          <Route path="/bonos/:id/casos-de-bono" component={CasoDeBonoPage} />
          <Route path="/bonos/:id/tramites" component={TramitesPage} />
          <Route path="/bonos/:id/construccion" component={ConstruccionTramitesPage} />
          <Route path="/bonos/:id/desembolso" component={DesembolsoPage} />
        </Switch>
      </LayoutManagerWithViewController>
    );
  }
}
const AppWithNavigationControllers = withNavigationViewController(withNavigationUIController(Navigation));

const customThemeMode = modeGenerator({
  product: {
    text: '#994f7e',
    background: '#ebedf8',
  },
});

export default () => (
  <NavigationProvider>
    <ThemeProvider theme={theme => ({ ...theme, mode: customThemeMode })}>
      <AppWithNavigationControllers />
    </ThemeProvider>
  </NavigationProvider>
);
