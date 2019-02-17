import React, { Component } from 'react';
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import PropTypes from 'prop-types';
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { pickBy, identity } from 'lodash'
import MoveToTheRight from './MoveToTheRight';

class UpdateProfileForm extends Component {

  onSubmit = (data) => {
    console.log(JSON.stringify(data))
    return this.props.firebase.updateProfile(pickBy(data, identity))
  }

  render () {
    const { profile } = this.props

    return (
      <Form onSubmit={data => this.onSubmit(data)}>
        {({ formProps }) => (
          <form {...formProps}>
            <Field name="email" defaultValue={profile.email || ''} label="Email">
              {({ fieldProps }) => <TextField {...fieldProps} disabled/>}
            </Field>
            <Field name="name" defaultValue={profile.name || ''} label="Name">
              {({ fieldProps }) => <TextField {...fieldProps} />}
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