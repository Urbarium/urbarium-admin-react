import React, { Component } from 'react';
import MainSection from '../../components/MainSection';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';

class TramitesPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>Trámites</PageTitle>
        <MainSection />
      </ContentWrapper>
    );
  }
}

export default TramitesPage;
