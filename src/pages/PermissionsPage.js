import React, { Component } from 'react';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';

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

export default PermissionsPage;
