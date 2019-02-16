import React from 'react'
import Page, { Grid, GridColumn } from '@atlaskit/page'
import UpdateProfileForm from '../components/UpdateProfileForm';
import PageTitle from '../components/PageTitle';

const UpdateProfilePage = () => (
  <Page>
    <PageTitle>Profile</PageTitle>
    <Grid>
      <GridColumn medium={6}>
          <UpdateProfileForm />
      </GridColumn>
    </Grid>
  </Page>
)
export default UpdateProfilePage