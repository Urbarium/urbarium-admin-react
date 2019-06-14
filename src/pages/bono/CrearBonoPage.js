import React, { Component } from 'react';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import styled from 'styled-components';
import moment from 'moment';
import MainSection from '../../components/MainSection';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';

const CreationDate = styled.label`
  font-size: 15px;
`;

// eslint-disable-next-line react/prefer-stateless-function
class CrearBonoPage extends Component {
  render() {
    return (
      <Page>
        <ContentWrapper>
          <Grid>
            <GridColumn medium={9}>
              <PageTitle>Nuevo Bono de Vivienda</PageTitle>
            </GridColumn>
            <GridColumn medium={3}>
              <CreationDate>
                { moment('es').format('dd-MM-YYYY') }
              </CreationDate>
            </GridColumn>
          </Grid>
          <MainSection />
        </ContentWrapper>
      </Page>
    );
  }
}

export default CrearBonoPage;
