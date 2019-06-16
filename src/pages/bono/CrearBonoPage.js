import React, { Component } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { withFirebase } from 'react-redux-firebase';
import { compose, withHandlers } from 'recompose';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import MainSection from '../../components/MainSection';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';
import Label from '../../components/Urbarium/Label';

const CreationDate = styled.label`
  font-size: 15px;
`;

// eslint-disable-next-line react/prefer-stateless-function
class CrearBonoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jefeDeFamilia: {
        nombre: null,
        primerApellido: null,
        segundoApellido: null,
        cedula: null,
      },
    };
  }

  render() {
    return (
      <Page>
        <ContentWrapper>
          <Grid>
            <GridColumn medium={10}>
              <PageTitle>Nuevo Bono de Vivienda</PageTitle>
            </GridColumn>
            <GridColumn medium={2}>
              <CreationDate>
                <Moment locale="es">
                  {new Date()}
                </Moment>
              </CreationDate>
            </GridColumn>
          </Grid>

          <MainSection />
        </ContentWrapper>
      </Page>
    );
  }
}

const enhance = compose(
  withFirebase,
  withHandlers({
    addBono: props => (payload) => {
      props.firebase.push('bonos', payload);
    },
  }),
);

export default enhance(CrearBonoPage);
