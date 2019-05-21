import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainSection from '../../components/MainSection';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';

class NewBonoPage extends Component {

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Nuevo Bono de vivienda</PageTitle>
        <MainSection />
      </ContentWrapper>
    );
  }
}

export default NewBonoPage