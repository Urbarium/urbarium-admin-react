import React, { Component } from 'react'
import ContentWrapper from '../components/ContentWrapper'
import PageTitle from '../components/PageTitle'
import LoginForm from '../components/LoginForm'
import Page, { Grid, GridColumn } from '@atlaskit/page'
import FullBackground from '../components/FullBackground';
import Card from '../components/Card';

class LoginPage extends Component {

  render() {
    return (
      <FullBackground centered>
        <Card>
          <PageTitle>Urbarium Login</PageTitle>
          <LoginForm />
        </Card>
      </FullBackground>
    );
  }
}

export default LoginPage