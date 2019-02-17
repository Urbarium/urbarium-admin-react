import React, { Component } from 'react';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import UserHasPermission from '../components/UserHasPermission'

class PermissionsPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>Permissions</PageTitle>
        <MainSection />
      </ContentWrapper>
    );
  }
}

export default UserHasPermission(PermissionsPage)
