import React, { Component } from 'react';
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import FlexView from 'react-flexview'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'

const enhance = connect(
  // Map redux state to component props
  ({ firebase: { auth, profile } }) => ({
    auth,
    profile
  })
)

class LoginForm extends Component {

  render () {
    return (
    <Form onSubmit={(credentials) => this.props.firebase.login(credentials)}>
        {({ formProps }) => (
          <form {...formProps}>
            <Field name="email" defaultValue="" label="User name" isRequired>
              {({ fieldProps }) => <TextField {...fieldProps} />}
            </Field>
            <Field name="password" defaultValue="" label="Password"isRequired>
              {({ fieldProps }) => <TextField type="password" {...fieldProps} />}
            </Field>
            <FlexView style={ {marginTop: 20} }>
              <FlexView grow={1} />
              <FlexView>
                <Button type="submit" appearance="primary">
                  Submit
                </Button>
              </FlexView>
            </FlexView>
          </form>
        )}
      </Form>
    );
  }
}

export default enhance(withFirebase(LoginForm));