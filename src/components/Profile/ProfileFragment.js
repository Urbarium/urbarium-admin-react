import React, { Component } from 'react';
import styled from 'styled-components'
import Avatar from '@atlaskit/avatar';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import ButtonWithLoading from '../ButtonWithLoading';

import { withFirebase } from 'react-redux-firebase'
import { connect } from 'react-redux'

const enhance = connect(
  ({ firebase: { profile } }) => ({ profile })
)

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  width: 100%;
  margin-top: 20px;
`

const Subtitle = styled.div`
  width: 100%;
`

const FullWidthFragment = styled.div`
  width: 100%;
  padding-top: 50px;
`

class ProfileFragment extends Component {

  onLogoutClick = () => {
    console.log(this.props.firebase.auth);
    this.props.firebase.logout();
  };

  render () {
    const { name, email, avatar } = this.props.profile

    return (
      <FullWidthFragment>
        <Page>
          <Grid>
            <GridColumn medium={3}/>
            <GridColumn medium={6}>
              <Avatar src={avatar} size="xlarge" />
            </GridColumn>
            <GridColumn medium={3}/>
          </Grid>
          <Grid>
            <GridColumn>
              <Title>
                {name}
              </Title>
              <Subtitle>
                {email}
              </Subtitle>
            </GridColumn>
          </Grid>
          <Grid>
            <GridColumn medium={8}/>
            <GridColumn medium={4}>
              <ButtonWithLoading onClick={this.onLogoutClick}>Logout</ButtonWithLoading>
            </GridColumn>
          </Grid>
        </Page>
      </FullWidthFragment>
    )
  }
}

export default enhance(withFirebase(ProfileFragment));