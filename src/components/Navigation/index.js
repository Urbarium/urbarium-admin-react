import React, { PureComponent } from 'react';

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
import { connect } from 'react-redux';

// Subcomponents
import GlobalNavigation from './components/GlobalNavigation';
import LinkItem from './components/LinkItem';
import ProjectInfoHeader from './components/ProjectInfoHeader';

// Pages
import HomePage from 'pages/HomePage';
import UsersPage from 'pages/UsersPage';
import UpdateProfilePage from 'pages/UpdateProfilePage';
import NuevoBonoPage from 'pages/NewHousingBonusPage';
import BeneficiariosPage from 'pages/steps/BeneficiariesPage';
import CasoDeBonoPage from 'pages/steps/HousingBonusPage';
import TramitesPage from 'pages/steps/TramitesPage';
import ConstruccionTramitesPage from 'pages/steps/ConstructionPage';
import DesembolsoPage from 'pages/steps/DisbursementPage';

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

class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    const { navigationViewController, navigationUIController } = props;
    initializeProductNavs(navigationViewController, navigationUIController);
  }

  componentDidMount() {
    const { navigationViewController, navigation: { key, id } } = this.props;
    if (key === 'bonos') {
      const bonoFormNav = bonoFormNavItems(id, 'In Progress');
      navigationViewController.addView(bonoFormNav);
    }
    navigationViewController.addView(usersManagementNavItems);
    navigationViewController.setView(key);
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
          <Route path="/nuevo-bono" component={NuevoBonoPage} />
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

function mapStateToProps(state) {
  return { navigation: state.navigation };
}

const ConnectedNavigation = connect(mapStateToProps, {})(Navigation);
const AppWithNavigationControllers = withNavigationViewController(withNavigationUIController(ConnectedNavigation));

const customThemeMode = modeGenerator({
  product: {
    text: '#994f7e',
    background: '#ebedf8',
  },
});

const ThemedNavigationProvider = () => (
  <NavigationProvider>
    <ThemeProvider theme={theme => ({ ...theme, mode: customThemeMode })}>
      <AppWithNavigationControllers />
    </ThemeProvider>
  </NavigationProvider>
);

export default ThemedNavigationProvider;
