import React, { Component } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import LoginForm from '../components/LoginForm';

export default class LoginPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>Login</PageTitle>
        <LoginForm />
      </ContentWrapper>
    );
  }
}
