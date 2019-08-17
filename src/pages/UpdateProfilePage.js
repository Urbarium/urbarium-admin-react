import React from 'react';
import ContentWrapper from 'components/ContentWrapper';
import UpdateProfileForm from 'components/Profile/UpdateProfileForm';
import PageTitle from 'components/PageTitle';

const UpdateProfilePage = () => (
  <ContentWrapper>
    <PageTitle>Profile</PageTitle>
    <UpdateProfileForm />
  </ContentWrapper>
);
export default UpdateProfilePage;
