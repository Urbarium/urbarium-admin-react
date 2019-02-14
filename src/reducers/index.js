import { combineReducers } from 'redux'
import { firebaseReducer, firestoreReducer } from 'react-redux-firebase'

export const initialState = {}

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})