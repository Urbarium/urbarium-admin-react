import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainSection from '../../components/MainSection';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';

class ConstruccionPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>Construcción</PageTitle>
        <MainSection />
      </ContentWrapper>
    );
  }
}

export default ConstruccionPage;
