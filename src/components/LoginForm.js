import React from 'react';
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';

const printData = (data) => console.log('form data', data);

const LoginForm = () => (
  <Form onSubmit={(data) => printData(data)}>
    {({ formProps }) => (
      <form {...formProps}>
        <Field name="username" defaultValue="" label="User name" isRequired>
          {({ fieldProps }) => <TextField {...fieldProps} />}
        </Field>
        <Field name="password" defaultValue="" label="Password" isRequired>
          {({ fieldProps }) => <TextField {...fieldProps} />}
        </Field>
        <Button type="submit" appearance="primary">
          Submit
        </Button>
      </form>
    )}
  </Form>
);

export default LoginForm;