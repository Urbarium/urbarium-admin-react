import React, { Component } from 'react';
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Avatar from '@atlaskit/avatar'
import Page, { Grid, GridColumn } from '@atlaskit/page';


const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  width: 100%;
`

const FullWidthFragment = styled.div`
  width: 100%;
`

class ProfileFragment extends Component {

  render () {
    const { profile } = this.props

    return (
      <FullWidthFragment>
        <Page>
          <Grid>
            <GridColumn medium={3}>
            </GridColumn>
            <Avatar></Avatar>
            <GridColumn medium={3}>
            </GridColumn>
            <Title>{profile.name}</Title>
          </Grid>
        </Page>
      </FullWidthFragment>
    )
  }
}

export default compose(
  withFirebase,
  connect(
    ({ firebase: { profile } }) => ({
      profile
    })
  )
)(ProfileFragment)