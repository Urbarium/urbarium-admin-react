import React, { Component } from 'react'
import ContentWrapper from '../components/ContentWrapper'
import PageTitle from '../components/PageTitle'
import LoginForm from '../components/LoginForm'
import Page, { Grid, GridColumn } from '@atlaskit/page'
import { B500, N0 } from '@atlaskit/theme/dist/cjs/colors';

export default class LoginPage extends Component {

  render() {
    return (
      <div style={{height: '100vh', backgroundColor: B500}}>
        <ContentWrapper>
          <Page>
            <Grid>
              <GridColumn medium={3} />
              <GridColumn medium={6}>
                <div style={{backgroundColor: N0, padding: 20, borderRadius: 5, marginTop: 50}}>
                  <PageTitle>Urbarium Login</PageTitle>
                  <LoginForm />
                </div>
              </GridColumn>
              <GridColumn medium={3} />
            </Grid>
          </Page>
        </ContentWrapper>
      </div>
    );
  }
}
