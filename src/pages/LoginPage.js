import React, { Component } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import LoginForm from '../components/LoginForm';
import Page, { Grid, GridColumn } from '@atlaskit/page';

export default class LoginPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <Page>
          <Grid>
            <GridColumn medium={2} />
            <GridColumn medium={6}>
              <PageTitle>Login</PageTitle>
              <LoginForm />
            </GridColumn>
            <GridColumn medium={4} />
          </Grid>
        </Page>
      </ContentWrapper>
    );
  }
}
