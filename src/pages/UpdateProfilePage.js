import React from 'react'
import ContentWrapper from '../components/ContentWrapper';
import UpdateProfileForm from '../components/UpdateProfileForm';
import PageTitle from '../components/PageTitle';
import { UserIsAuthenticated } from '../components/AuthorizedPages'

const UpdateProfilePage = () => (
  <ContentWrapper>
    <PageTitle>Profile</PageTitle>
    <UpdateProfileForm />
  </ContentWrapper>
)
export default UserIsAuthenticated(UpdateProfilePage)