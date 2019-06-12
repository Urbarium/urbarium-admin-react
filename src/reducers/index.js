import { combineReducers } from 'redux';
import { firebaseReducer, firestoreReducer } from 'react-redux-firebase';
import { connectRouter } from 'connected-react-router';

export default history => combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  router: connectRouter(history),
});
