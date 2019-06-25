import 'firebase/firestore'; //
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { connectRouter } from 'connected-react-router';
import bonosReducer from './bonos';
import navigationReducer from './navigation';

export default history => combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  router: connectRouter(history),
  bonos: bonosReducer,
  navigation: navigationReducer,
});
