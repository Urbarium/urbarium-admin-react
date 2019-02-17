import { get } from 'lodash';
import { routerActions } from 'react-router-redux'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect'
import Loading from './Loading';

/**
 * @description Higher Order Component that redirects to the homepage if
 * the user does not have the required permission. This HOC requires that the user
 * profile be loaded and the role property populated
 * @param {Component} componentToWrap - Component to wrap
 * @return {Component} wrappedComponent
 */

export const UserHasPermission = connectedRouterRedirect({
  redirectPath: '/',
  allowRedirectBack: false,
  authenticatedSelector: state => state.profile.role === 'admin',
  AuthenticatingComponent: Loading,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAdmin'
})


// export const UserIsAdmin = UserAuthWrapper({
//   authSelector: ({ firebase: { profile, auth } }) => ({ auth, profile }),
//   authenticatingSelector: ({ firebase: { profile, auth, isInitializing } }) =>
//     auth === undefined || profile === undefined || isInitializing === true,
//   redirectAction: newLoc => (dispatch) => {
//     routerActions.replace(newLoc);
//     dispatch({ type: 'UNAUTHED_REDIRECT' });
//   },
//   allowRedirectBack: false,
//   failureRedirectPath: '/login',
//   wrapperDisplayName: 'UserIsAdmin',
//   predicate: auth => get(auth, `profile.role.name`) === 'admin',
//   LoadingComponent: Loading,
// });

export default UserHasPermission