import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

/* Firebase Config */
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // make sure you add this for firestore
import { ReactReduxFirebaseProvider, reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'
import MainRouter from './modules/MainRouter'
import rootReducer, { initialState } from './reducers'

// react-redux
const reactReduxConfig = {
  userProfile: 'users',
}

const firebaseConfig = {
  apiKey: "AIzaSyDysVlFw_qKzvzmBxAs3jYwdWdI2qlmFS8",
  authDomain: "urbarium-org.firebaseapp.com",
  databaseURL: "https://urbarium-org.firebaseio.com",
  projectId: "urbarium-org",
  storageBucket: "urbarium-org.appspot.com",
  messagingSenderId: "1043005680434"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

/* Store */
const createStoreWithFirebase = compose(
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, reactReduxConfig)
)(createStore)

const store = createStoreWithFirebase(rootReducer, initialState)

const reactReduxProps = {
  firebase,
  config: reactReduxConfig,
  dispatch: store.dispatch
}

const AppRoot = () => (
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...reactReduxProps}>
        <MainRouter />
      </ReactReduxFirebaseProvider>
    </Provider>
);

render(<AppRoot />, document.getElementById('app-root'));