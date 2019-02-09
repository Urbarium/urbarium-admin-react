import React from 'react';
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import FlexView from 'react-flexview'

const printData = (data) => console.log('form data', data);

const LoginForm = () => (
  <Form onSubmit={(data) => printData(data)}>
    {({ formProps }) => (
      <form {...formProps}>
        <Field name="username" defaultValue="" label="User name" isRequired>
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

export default LoginForm;