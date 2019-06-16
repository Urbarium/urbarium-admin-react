import 'firebase/firestore'; //
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { connectRouter } from 'connected-react-router';

export default history => combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  router: connectRouter(history),
});
