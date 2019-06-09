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
import NuevoBonoDeViviendaPage from '../../pages/bono/NuevoBonoDeViviendaPage';
import CasoDeBonoPage from '../../pages/bono/CasoDeBonoPage';
import ConstruccionPage from '../../pages/bono/ConstruccionPage';
import DesembolsoPage from '../../pages/bono/DesembolsoPage';
import TramitesPage from '../../pages/bono/TramitesPage';
import BeneficiariosPage from '../../pages/bono/BeneficiariosPage';
import HomePage from '../../pages/HomePage';


// Menus
import bonoFormNavItems from './menus/bonoFormNavItems';
import usersManagementNavItems from './menus/usersManagementNavItems';

const initializeProductNavs = (navigationViewController, navigationUIController) => {
  if (window.location.pathname.match(/^\/bono/)) {
    navigationViewController.setView('bonos');
  } else if (window.location.pathname.match(/^\/users/)) {
    navigationViewController.setView('users');
  } else {
    navigationUIController.state.isCollapsed = true;
    navigationUIController.state.isResizeDisabled = true;
  }
}

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
        <div style={{ padding: 40 }}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/settings" component={UpdateProfilePage} />
            <Route path="/users" component={HomePage} />
            <Route path="/bonos/crear" component={NuevoBonoDeViviendaPage} />
            <Route path="/bonos/:id/beneficiarios" component={BeneficiariosPage} />
            <Route path="/bonos/:id/casos-de-bono" component={CasoDeBonoPage} />
            <Route path="/bonos/:id/tramites" component={TramitesPage} />
            <Route path="/bonos/:id/construccion" component={ConstruccionPage} />
            <Route path="/bonos/:id/desembolso" component={DesembolsoPage} />
          </Switch>
        </div>
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
