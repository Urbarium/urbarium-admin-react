import React, { Component } from 'react';
import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { pickBy, identity } from 'lodash';
import MoveToTheRight from 'components/MoveToTheRight';
import ButtonWithLoading from 'components/ButtonWithLoading';

class UpdateProfileForm extends Component {
  state = {
    updating: false,
  }

  onSubmit = (data) => {
    const { firebase } = this.props;
    this.setState({ updating: true });
    return firebase.updateProfile(pickBy(data, identity))
      .then(() => {
        this.setState({ updating: false });
      })
      .catch(() => {
        this.setState({ updating: false });
      });
  }

  render() {
    const { profile } = this.props;
    const { updating } = this.state;

    return (
      <Form onSubmit={data => this.onSubmit(data)}>
        {({ formProps }) => (
          <form {...formProps}>
            <Field name="email" defaultValue={profile.email || ''} label="Email">
              {({ fieldProps }) => <TextField {...fieldProps} disabled />}
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
    );
  }
}

export default compose(
  withFirebase,
  connect(
    ({ firebase: { profile } }) => ({
      profile,
    }),
  ),
)(UpdateProfileForm);
