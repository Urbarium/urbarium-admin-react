import React, { Component } from 'react';
import MainSection from '../../components/MainSection';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';

//import { LabeledInput } from 'urbarium-shared-components';

// ubarium shared comps is now recognized but when reading its exports,
// this project is not able to parse them. I get the following error:
//    Module parse failed: Unexpected token (16:31)
//    You may need an appropriate loader to handle this file type.
// It happens no matter which file I export from shared-components

// I read it has somenthing to do with babel presets / webpack, but I couldn't solve it.
// good luck emma-sensei!

class BeneficiariosPage extends Component {

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Beneficiarios</PageTitle>
        <MainSection/>
      </ContentWrapper>
    );
  }
}

export default BeneficiariosPage