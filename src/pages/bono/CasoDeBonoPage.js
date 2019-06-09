/* eslint-disable eol-last */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainSection from '../../components/MainSection';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';

class CasoDeBonoPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>Caso de bono</PageTitle>
        <MainSection />
      </ContentWrapper>
    );
  }
}

export default CasoDeBonoPage;