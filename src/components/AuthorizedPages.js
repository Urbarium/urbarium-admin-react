import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import Loading from './Loading';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

/**
 * Redirects an user to /login when trying to access an unauthorized page.
 */
export let UserIsAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: 'UserIsAuthenticated',
  AuthenticatingComponent: Loading,
  allowRedirectBack: true,
  redirectPath: (state, ownProps) => '/login',
  authenticatingSelector: ({ firebase: { auth, profile, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && !auth.isEmpty,
  redirectAction: newLoc => (dispatch) => {
    // eslint-disable-next-line
    browserHistory.replace(newLoc)
    dispatch({ type: 'UNAUTHED_REDIRECT' });
  },
});

/**
 * Redirects an user to / login was succesful.
 */
export let UserIsNotAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: 'UserIsNotAuthenticated',
  AuthenticatingComponent: Loading,
  allowRedirectBack: false,
  redirectPath: (state, ownProps) => '/',
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && auth.isEmpty,
  redirectAction: newLoc => (dispatch) => {
    // eslint-disable-next-line
    browserHistory.replace(newLoc)
    dispatch({ type: 'UNAUTHED_REDIRECT' });
  },
})

export let UserHasPermission = connectedRouterRedirect({
  wrapperDisplayName: 'UserIsNotAuthenticated',
  AuthenticatingComponent: Loading,
  allowRedirectBack: false,
  redirectPath: (state, ownProps) => '/',
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && auth.isEmpty,
  redirectAction: newLoc => (dispatch) => {
    // eslint-disable-next-line
    browserHistory.replace(newLoc)
    dispatch({ type: 'UNAUTHED_REDIRECT' });
  },
});

export default UserIsAuthenticated