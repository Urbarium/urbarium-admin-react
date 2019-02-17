import React, { Component } from 'react';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import { UserIsAuthenticated } from '../components/AuthorizedPages'

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

export default UserIsAuthenticated(PermissionsPage)
