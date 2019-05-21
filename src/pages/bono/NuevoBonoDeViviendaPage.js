import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainSection from '../../components/MainSection';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';

class NuevoBonoDeViviendaPage extends Component {

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Nuevo bono de vivienda</PageTitle>
        <MainSection />
      </ContentWrapper>
    );
  }
}

export default NuevoBonoDeViviendaPage