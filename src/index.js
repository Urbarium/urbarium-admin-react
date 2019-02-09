import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'

/* Firebase Config */
import firebase from 'firebase/app'
import 'firebase/auth'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import FirebaseApp from './modules/FirebaseApp'
import rootReducer, { initialState } from './reducers'

const fbConfig = {
  apiKey: "AIzaSyDysVlFw_qKzvzmBxAs3jYwdWdI2qlmFS8",
  authDomain: "urbarium-org.firebaseapp.com",
  databaseURL: "https://urbarium-org.firebaseio.com",
  projectId: "urbarium-org",
  storageBucket: "urbarium-org.appspot.com",
  messagingSenderId: "1043005680434"
};

// react-redux
const rrfConfig = {
  userProfile: 'users'
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

/* Store */
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}

const AppRoot = () => (
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <FirebaseApp />
      </ReactReduxFirebaseProvider>
    </Provider>
);

render(<AppRoot />, document.getElementById('app-root'));