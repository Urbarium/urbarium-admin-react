import React, { Component, Fragment } from 'react';

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

const WithProductNav = (props) => {
  const controller = props.navigationViewController;
  if ( controller.state.activeView == null || controller.state.activeView.id !== props.viewId ){
    controller.setView(props.viewId);
  }

  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}

const BonoSteps = (props) => (
  <WithProductNav viewId="bono" navigationViewController={props.navigationViewController}>
    <Route path='/bono/:id/beneficiarios' component={BeneficiariosPage} />
    <Route path='/bono/:id/casos-de-bono' component={CasoDeBonoPage} />
    <Route path='/bono/:id/tramites' component={TramitesPage} />
    <Route path='/bono/:id/construccion' component={ConstruccionPage} />
    <Route path='/bono/:id/desembolso' component={DesembolsoPage} />
  </WithProductNav>
)

class Navigation extends Component<{navigationViewController: ViewController}> {

  componentDidMount() {
    const { navigationViewController } = this.props;
    const bonoFormNav = bonoFormNavItems(30, 'In Progress');
    navigationViewController.addView(bonoFormNav);
    navigationViewController.addView(usersManagementNavItems);
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <LayoutManagerWithViewController
          globalNavigation={GlobalNavigation}
          customComponents={{LinkItem, ProjectInfoHeader}}
        >
          <div style={{ padding: 40 }}>
            <Route path='/settings' component={UpdateProfilePage} />
            <Route path='/users' component={null} />
            <Route path='/bono/crear' component={NuevoBonoDeViviendaPage} />
            <Route path='/bono' component={withNavigationViewController(BonoSteps)} />
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