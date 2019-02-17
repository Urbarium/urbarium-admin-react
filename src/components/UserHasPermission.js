import { get } from 'lodash';
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper';
import Loading from './Loading';

/**
 * @description Higher Order Component that redirects to the homepage if
 * the user does not have the required permission. This HOC requires that the user
 * profile be loaded and the role property populated
 * @param {Component} componentToWrap - Component to wrap
 * @return {Component} wrappedComponent
 */
export const userHasPermission = permission => UserAuthWrapper({
  wrapperDisplayName: 'UserHasPermission',
  AuthenticatingComponent: Loading,
  allowRedirectBack: false,
  redirectPath: (state, ownProps) => '/login',
  authSelector: ({ firebase: { profile, auth } }) => ({ auth, profile }),
  authenticatingSelector: ({ firebase: { profile, auth, isInitializing } }) =>
    !auth.isLoaded || !profile.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && !auth.isEmpty,
  predicate: auth => get(auth, `profile.role.${permission}`, false),
  redirectAction: newLoc => (dispatch) => {
    routerActions.replace(newLoc); // or routerActions.replace
    dispatch({ type: 'UNAUTHED_REDIRECT' });
  }
});

export default userHasPermission