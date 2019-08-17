import React from 'react';
import { Switch, Route } from 'react-router';
import LoginPage from 'pages/LoginPage';
import Navigation from 'components/Navigation';
import Loading from 'components/Loading';
import { UserIsAuthenticated, UserIsNotAuthenticated } from 'components/AuthorizedPages';

const MainRouter = () => (
  <Switch>
    <Route path="/login" component={UserIsNotAuthenticated(LoginPage)} />
    <Route path="/loading" component={Loading} />
    <Route path="/" component={UserIsAuthenticated(Navigation)} />
  </Switch>
);
export default MainRouter;
