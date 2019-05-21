import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainSection from '../../components/MainSection';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';

class BeneficiariosPage extends Component {

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Beneficiarios</PageTitle>
        <MainSection />
      </ContentWrapper>
    );
  }
}

export default BeneficiariosPage