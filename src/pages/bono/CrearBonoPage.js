import React, { Component } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { withFirebase } from 'react-redux-firebase';
import { compose, withHandlers } from 'recompose';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Modal from '@atlaskit/modal-dialog';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';
import JefeDeFamiliaSection from '../../components/Urbarium/JefeDeFamiliaSection';

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
    const {
      jefeDeFamilia,
      jefeDeFamilia: {
        nombre, primerApellido, segundoApellido, cedula,
      },
    } = this.state;
    const { onSuccess, onClose, addBono } = this.props;
    const modalCreateBonoActions = [
      { text: 'Crear', onClick: () => addBono(jefeDeFamilia) && onSuccess() },
      { text: 'Cancelar', onClick: onClose },
    ];
    return (
      <Modal actions={modalCreateBonoActions} onClose={this.closeCreateBono} width="large">
        <Page>
          <ContentWrapper>
            <Grid>
              <GridColumn medium={10}>
                <PageTitle>Nuevo Bono de Vivienda</PageTitle>
              </GridColumn>
              <GridColumn medium={2}>
                <CreationDate>
                  <Moment locale="es" format="DD-MM-YYYY">
                    {new Date()}
                  </Moment>
                </CreationDate>
              </GridColumn>
            </Grid>
            <Grid>
              <GridColumn medium={12}>
                <JefeDeFamiliaSection
                  nombre={nombre}
                  apellido1={primerApellido}
                  apellido2={segundoApellido}
                  cedula={cedula}
                />
              </GridColumn>
            </Grid>
          </ContentWrapper>
        </Page>
      </Modal>
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
