import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirebase, isLoaded } from 'react-redux-firebase'

const UpdateProfilePage = ({ profile, firebase }) => (
  <div>
    <h2>Update User Profile</h2>
    <span>
      Click the button to update profile to include role parameter
    </span>
    <button onClick={() => firebase.updateProfile({ role: 'admin' })}>
      Add Role To User
    </button>
    <div>
      {
        isLoaded(profile)
          ? JSON.stringify(profile, null, 2)
          : 'Loading...'
      }
    </div>
  </div>
)

UpdateProfilePage.propTypes = {
 profile: PropTypes.object,
}

export default compose(
  withFirebase, // add props.firebase (firebaseConnect() can also be used)
  connect(
    ({ firebase: { profile } }) => ({
      profile
    })
  )
)(UpdateProfilePage)