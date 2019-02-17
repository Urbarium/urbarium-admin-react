import SetActiveView from './SetActiveView'
import React, { Fragment } from 'react';
import HomePage from '../../pages/HomePage';
import UpdateProfilePage from '../../pages/UpdateProfilePage';

export const HomeRootView = () => (
  <Fragment>
    <SetActiveView id="product/home" />
    <HomePage />
  </Fragment>
)

export const UsersRootView = () => (
  <Fragment>
    <SetActiveView id="product/users" />
  </Fragment>
)

export const SettingsRootView = () => (
  <Fragment>
    <SetActiveView id="product/settings" />
    <UpdateProfilePage />
  </Fragment>
)
