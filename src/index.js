import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

/* Firebase Config */
import firebase from 'firebase/app';
import 'firebase/auth'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import MainRouter from './modules/MainRouter'
import rootReducer, { initialState } from './reducers'

// react-redux
const reactReduxConfig = {
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

/* Store */
const store = createStore(rootReducer, initialState)


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