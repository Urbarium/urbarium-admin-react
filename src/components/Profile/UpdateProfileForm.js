import React, { Component } from 'react';
import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import PropTypes from 'prop-types';
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { pickBy, identity } from 'lodash'
import MoveToTheRight from '../MoveToTheRight';
import ButtonWithLoading from '../ButtonWithLoading';

class UpdateProfileForm extends Component {

  state = {
    updating: false
  }

  onSubmit = (data) => {
    console.log(JSON.stringify(data))
    this.setState({ updating: true })
    return this.props.firebase.updateProfile(pickBy(data, identity))
      .then(() => {
        console.log('done')
        this.setState({ updating: false })
      })
      .catch(error => {
        console.log(error)
        this.setState({ updating: false })
      })
  }

  render () {
    const { profile } = this.props
    const { updating } = this.state

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
              <ButtonWithLoading type="Save" appearance="primary" isLoading={updating}>
                Submit
              </ButtonWithLoading>
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