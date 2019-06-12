import React, { Component } from 'react';
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import FlexView from 'react-flexview';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import InlineMessage from '@atlaskit/inline-message';

const enhance = connect(
  ({ firebase: { auth } }) => ({ auth }),
);

class LoginForm extends Component {
  state = { message: { type: 'none' } };

  login(credentials) {
    const { firebase } = this.props;
    firebase.login(credentials).then(
      // eslint-disable-next-line no-unused-vars
      (response) => {
        this.setState({ message: { type: 'confirmation', description: 'Login succeeded!' } });
      },
      (err) => {
        this.setState({ message: { type: 'error', description: err.message } });
      },
    );
  }

  render() {
    let action = '';
    const { message } = this.state;
    if (message.type === 'confirmation' || message.type === 'error') {
      action = <InlineMessage title={message.description} type={message.type} />;
    }

    return (
      <Form onSubmit={credentials => this.login(credentials)}>
        {({ formProps }) => (
          <form {...formProps} style={{ minWidth: 300 }}>
            {action}
            <Field name="email" defaultValue="" label="User name" isRequired>
              {({ fieldProps }) => <TextField {...fieldProps} />}
            </Field>
            <Field name="password" defaultValue="" label="Password" isRequired>
              {({ fieldProps }) => <TextField type="password" {...fieldProps} />}
            </Field>
            <FlexView style={{ marginTop: 20 }}>
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
