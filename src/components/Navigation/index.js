import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import {
  LayoutManagerWithViewController,
  withNavigationViewController,
  withNavigationUIController,
  ThemeProvider,
} from '@atlaskit/navigation-next';
import compose from 'recompose/compose';
import customThemeMode from './theme';
import GlobalNavigation from './components/GlobalNavigation';
import LinkItem from './components/LinkItem';
import ProjectInfoHeader from './components/ProjectInfoHeader';
import HomePage from '../../pages/HomePage';
import UsersPage from '../../pages/UsersPage';
import UpdateProfilePage from '../../pages/UpdateProfilePage';
import NuevoBonoPage from '../../pages/bono/NuevoBonoPage';
import BeneficiariosPage from '../../pages/bono/BeneficiariosPage';
import CasoDeBonoPage from '../../pages/bono/CasoDeBonoPage';
import TramitesPage from '../../pages/bono/TramitesPage';
import ConstruccionTramitesPage from '../../pages/bono/ConstruccionTramitesPage';
import DesembolsoPage from '../../pages/bono/DesembolsoPage';
import navigationOptions from './menus/navigationOptions';
import bonoFormNavItems from './menus/bonoFormNavItems';
import usersManagementNavItems from './menus/usersManagementNavItems';

class Navigation extends Component {
  constructor(props) {
    super(props);
    const {
      id, key, isCollapsed, isResizeDisabled,
    } = navigationOptions();
    const { navigationViewController, navigationUIController } = this.props;
    if (key === 'bonos') {
      const bonoFormNav = bonoFormNavItems(id, 'In Progress');
      navigationViewController.addView(bonoFormNav);
    } else if (key === 'users') {
      navigationViewController.addView(usersManagementNavItems);
    }
    navigationViewController.setView(key);
    navigationUIController.isCollapsed = isCollapsed;
    navigationUIController.isResizeDisabled = isResizeDisabled;
  }

  render() {
    return (
      <ThemeProvider theme={theme => ({ ...theme, mode: customThemeMode })}>
        <LayoutManagerWithViewController
          globalNavigation={GlobalNavigation}
          customComponents={{ LinkItem, ProjectInfoHeader }}
        >
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/settings" component={UpdateProfilePage} />
            <Route path="/users" component={UsersPage} />
            <Route path="/bonos/nuevo" component={NuevoBonoPage} />
            <Route path="/bonos/:id/beneficiarios" component={BeneficiariosPage} />
            <Route path="/bonos/:id/casos-de-bono" component={CasoDeBonoPage} />
            <Route path="/bonos/:id/tramites" component={TramitesPage} />
            <Route path="/bonos/:id/construccion" component={ConstruccionTramitesPage} />
            <Route path="/bonos/:id/desembolso" component={DesembolsoPage} />
          </Switch>
        </LayoutManagerWithViewController>
      </ThemeProvider>
    );
  }
}

const enhance = compose(
  withNavigationUIController,
  withNavigationViewController,
);

export default enhance(Navigation);
