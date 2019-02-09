import React from 'react'
import PropTypes from 'prop-types';
import { withFirebase } from 'react-redux-firebase'
import { compose, withHandlers } from 'recompose'
import MainRouter from './MainRouter';

function FirebaseApp({ firebase}){
  return <MainRouter />
}

const enhance = compose(
  withFirebase
)

export default enhance(FirebaseApp)