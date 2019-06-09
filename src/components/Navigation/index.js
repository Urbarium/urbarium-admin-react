import React, { Component } from 'react';

// Routes
import { Route, Switch } from "react-router";
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../../configureStore'

// Navigation-Next Component
import {
  LayoutManagerWithViewController,
  NavigationProvider,
  ViewController,
  withNavigationViewController,
  modeGenerator,
  ThemeProvider
} from "@atlaskit/navigation-next";

// Subcomponents
import GlobalNavigation from './components/GlobalNavigation'
import LinkItem from './components/LinkItem'
import ProjectInfoHeader from './components/ProjectInfoHeader'

// Pages
import UpdateProfilePage from '../../pages/UpdateProfilePage';
import NuevoBonoDeViviendaPage from '../../pages/bono/NuevoBonoDeViviendaPage';
import CasoDeBonoPage from '../../pages/bono/CasoDeBonoPage';
import ConstruccionPage from '../../pages/bono/ConstruccionPage';
import DesembolsoPage from '../../pages/bono/DesembolsoPage';
import TramitesPage from '../../pages/bono/TramitesPage';
import BeneficiariosPage from '../../pages/bono/BeneficiariosPage';


// Menus
import bonoFormNavItems from './menus/bonoFormNavItems';
import usersManagementNavItems from './menus/usersManagementNavItems';

class Navigation extends Component<{navigationViewController: ViewController}> {

  componentDidMount() {
    const { navigationViewController } = this.props;
    const bonoFormNav = bonoFormNavItems(30, 'In Progress');
    navigationViewController.addView(bonoFormNav);
    navigationViewController.addView(usersManagementNavItems);
    navigationViewController.setView('crear-bono');
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <LayoutManagerWithViewController
          globalNavigation={GlobalNavigation}
          customComponents={{LinkItem, ProjectInfoHeader}}
        >
          <div style={{ padding: 40 }}>
            <Switch>
              <Route path="/settings" component={UpdateProfilePage} />
              <Route path="/users" component={null} />
              <Route path="/beneficiarios" component={BeneficiariosPage} />
              <Route path="/casos-de-bono" component={CasoDeBonoPage} />
              <Route path="/tramites" component={TramitesPage} />
              <Route path="/construccion" component={ConstruccionPage} />
              <Route path="/desembolso" component={DesembolsoPage} />
              <Route path="/nuevo" component={NuevoBonoDeViviendaPage} />
            </Switch>
          </div>
        </LayoutManagerWithViewController>
      </ConnectedRouter>
    )
  }
}

const AppWithNavigationViewController = withNavigationViewController(Navigation)

const customThemeMode = modeGenerator({
  product: {
    text: '#994f7e',
    background: '#ebedf8',
  }
});

export default () => (
  <NavigationProvider>
    <ThemeProvider theme={theme => ({ ...theme, mode: customThemeMode })}>
      <AppWithNavigationViewController />
    </ThemeProvider>
  </NavigationProvider>
);