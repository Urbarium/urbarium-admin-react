import React, { Component } from 'react'
import ContentWrapper from '../components/ContentWrapper'
import PageTitle from '../components/PageTitle'
import LoginForm from '../components/LoginForm'
import Page, { Grid, GridColumn } from '@atlaskit/page'
import FullBackground from '../components/FullBackground';
import Card from '../components/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class LoginPage extends Component {

  componentWillReceiveProps({ authExists }) {
    if (authExists) {
      this.context.router.push('/')
    }
  }

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

LoginPage.propTypes = {
  authExists: PropTypes.bool,
}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default connect(
  ({ firebase: { auth } }) => ({ authExists: !!auth && !!auth.uid })
)(LoginPage)