import React, { Component } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import LoginForm from '../components/LoginForm';
import Page, { Grid, GridColumn } from '@atlaskit/page';

export default class LoginPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>Login</PageTitle>
        <Page>
          <Grid>
            <GridColumn medium={3} />
            <GridColumn medium={6}>
              <LoginForm />
            </GridColumn>
            <GridColumn medium={3} />
          </Grid>
        </Page>
      </ContentWrapper>
    );
  }
}
