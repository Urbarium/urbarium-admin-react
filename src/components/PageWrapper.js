import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import BonoTitle from './Urbarium/BonoTitle';
import ButtonRound from './Urbarium/ButtonRound';
import { submitForm } from './Form';
import { Row } from './Structural/index';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');;
    font-family: 'Lato', sans-serif;
  }
`;

export const PageWrapper = props => (
  <div>
    <GlobalStyles />
    <Wrapper {...props} />
  </div>
);

export const Wrapper = styled.div`
  padding: 60px 20px 30px 80px;
  box-sizing: border-box;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 65px 1fr 30px;
  grid-template-areas:
      'header'
      'content'
      'footer'
`;

export const PageHeader = styled.div`
  grid-area: header;
  padding-right: 100px; 
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

export const PageContent = styled.div`
  grid-area: content;
  padding: 40px 0px;
  padding-right: 100px;
  box-sizing: border-box;    
  overflow-y: auto;
  height: 100%;
`;

export const PageFooter = styled.div`
  grid-area: footer;
  padding-right: 100px;
  box-sizing: border-box;    
  position: relative
`;

export const BonoHeader = ({ bono }) => (
  <PageHeader>
    <BonoTitle {...bono} />
  </PageHeader>
);

export const BonoFooter = ({ id }) => (
  <PageFooter>
    <Row justify="end">
      <ButtonRound onClick={submitForm(id)}>Guardar y continuar</ButtonRound>
    </Row>
  </PageFooter>
);
