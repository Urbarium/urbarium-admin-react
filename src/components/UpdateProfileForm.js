import React, { Component } from 'react';
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import FlexView from 'react-flexview'
import InlineMessage from '@atlaskit/inline-message'
import PropTypes from 'prop-types';
import { compose } from 'redux'
import { withFirebase, isLoaded } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { pickBy, identity } from 'lodash'
import MoveToTheRight from './MoveToTheRight';

class UpdateProfileForm extends Component {

  render () {
    const { firebase, profile } = this.props

    return (
      <Form onSubmit={data => firebase.updateProfile(pickBy(data, identity))}>
        {({ formProps }) => (
          <form {...formProps}>
            <Field name="email" defaultValue={profile.email || ''} label="Email">
              {({ fieldProps }) => <TextField {...fieldProps} disabled/>}
            </Field>
            <Field name="name" defaultValue={profile.name || ''} label="Name">
              {({ fieldProps }) => <TextField {...fieldProps} />}
            </Field>
            <Field name="role" defaultValue={profile.role || ''} label="Role">
              {({ fieldProps }) => <TextField {...fieldProps} disabled/>}
            </Field>
            <MoveToTheRight>
              <Button type="Save" appearance="primary">
                Submit
              </Button>
            </MoveToTheRight>
          </form>
        )}
      </Form>
    )
  }
}

UpdateProfileForm.propTypes = {
  profile: PropTypes.object,
}

export default compose(
  withFirebase,
  connect(
    ({ firebase: { profile } }) => ({
      profile
    })
  )
)(UpdateProfileForm)