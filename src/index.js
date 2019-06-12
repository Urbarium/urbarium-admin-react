import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/* Firebase Config */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'; // make sure you add this for firestore
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { ConnectedRouter } from 'connected-react-router';
import '@atlaskit/css-reset';
import * as Sentry from '@sentry/browser';

import { createBrowserHistory } from 'history';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import ErrorBoundary from './components/ErrorBoundary';
import MainRouter from './modules/MainRouter';
import configureStore from './configureStore';

LogRocket.init('eobsev/urbarium');
setupLogRocketReact(LogRocket);
Sentry.init({
  dsn: 'https://a0005fa943094213b8be655bbdfae8ac@sentry.io/1480102',
});
LogRocket.getSessionURL((sessionURL) => {
  Sentry.configureScope((scope) => {
    scope.setExtra('sessionURL', sessionURL);
  });
});

// react-redux
const reactReduxConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  profileParamsToPopulate: [
    ['role:groups'], // populates user's role with matching role object from roles
  ],
};

const history = createBrowserHistory();
const store = configureStore({}, history);

const firebaseConfig = {
  apiKey: 'AIzaSyDysVlFw_qKzvzmBxAs3jYwdWdI2qlmFS8',
  authDomain: 'urbarium-org.firebaseapp.com',
  databaseURL: 'https://urbarium-org.firebaseio.com',
  projectId: 'urbarium-org',
  storageBucket: 'urbarium-org.appspot.com',
  messagingSenderId: '1043005680434',
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const reactReduxProps = {
  firebase,
  config: reactReduxConfig,
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
