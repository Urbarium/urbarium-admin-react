import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'; //
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import '@atlaskit/css-reset';
import { createBrowserHistory } from 'history';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import * as Sentry from '@sentry/browser';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import MainRouter from 'modules/MainRouter';
import ErrorBoundary from 'components/ErrorBoundary';
import createRootReducer from 'reducers';

Sentry.init({
  dsn: 'https://09c10ad8e29341d59fe1bb79ab58d757@sentry.io/1480103',
});

LogRocket.init('urbarium/urbarium');
setupLogRocketReact(LogRocket);
LogRocket.getSessionURL((sessionURL) => {
  Sentry.configureScope((scope) => {
    scope.setExtra('sessionURL', sessionURL);
  });
});

export const firebaseConfig = {
  apiKey: 'AIzaSyDysVlFw_qKzvzmBxAs3jYwdWdI2qlmFS8',
  authDomain: 'urbarium-org.firebaseapp.com',
  databaseURL: 'https://urbarium-org.firebaseio.com',
  projectId: 'urbarium-org',
  storageBucket: 'urbarium-org.appspot.com',
  messagingSenderId: '1043005680434',
};

// react-redux
export const firebaseReduxConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  profileParamsToPopulate: [
    ['role:groups'], // populates user's role with matching role object from roles
  ],
};

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export const configureStore = (preloadedState, fbConfig, history) => {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        logger,
        thunk,
        routerMiddleware(history),
        LogRocket.reduxMiddleware(),
      ),
    ),
  );

  return store;
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const history = createBrowserHistory();
const store = configureStore({}, firebaseConfig, history);

const reactReduxProps = {
  firebase,
  config: firebaseReduxConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AppRoot = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ReactReduxFirebaseProvider {...reactReduxProps}>
          <MainRouter />
        </ReactReduxFirebaseProvider>
      </ConnectedRouter>
    </Provider>
  </ErrorBoundary>
);

// eslint-disable-next-line no-undef
render(<AppRoot />, document.getElementById('app-root'));
