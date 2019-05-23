import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainSection from '../../components/MainSection';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';

// TODO: @richifg, check how to use a shared component.
// import { InputDropdown } from 'urbarium-shared-components'

class BeneficiariosPage extends Component {

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Beneficiarios</PageTitle>
          {/* <InputDropdown placeholder='Provincia' options={['San Jose', 'Alajuela', 'Heredia', 'Cartago', 'Limon', 'Puntarenas', 'Guancaste']}/> */}
        <MainSection />
      </ContentWrapper>
    );
  }
}

export default BeneficiariosPage