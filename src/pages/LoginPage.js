import React, { Component } from 'react'
import ContentWrapper from '../components/ContentWrapper'
import PageTitle from '../components/PageTitle'
import LoginForm from '../components/LoginForm'
import Page, { Grid, GridColumn } from '@atlaskit/page'
import FullBackground from '../components/FullBackground';
import Card from '../components/Card';

export default class LoginPage extends Component {

  render() {
    return (
      <FullBackground>
        <ContentWrapper>
          <Page>
            <Grid>
              <GridColumn medium={3} />
              <GridColumn medium={6}>
                <Card>
                  <PageTitle>Urbarium Login</PageTitle>
                  <LoginForm />
                </Card>
              </GridColumn>
              <GridColumn medium={3} />
            </Grid>
          </Page>
        </ContentWrapper>
      </FullBackground>
    );
  }
}
