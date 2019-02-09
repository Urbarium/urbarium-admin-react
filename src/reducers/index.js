import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

export const initialState = {}

export default combineReducers({
  firebase: firebaseReducer
})