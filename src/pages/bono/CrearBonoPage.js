import React, { Component } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { withFirestore } from 'react-redux-firebase';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Modal from '@atlaskit/modal-dialog';
import SectionMessage from '@atlaskit/section-message';
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
      onSuccess: props.onSuccess,
      onClose: props.onClose,
      newBono: {
        nombre: null,
        apellido1: null,
        apellido2: null,
        cedula: null,
      },
      firestore: props.firestore,
      creating: false,
      error: null,
    };
  }

  addBono() {
    const {
      newBono,
      firestore,
      onSuccess,
      creating,
    } = this.state;
    if (!creating) {
      this.setState({ creating: true });
      firestore.add({ collection: 'bonos' }, newBono).then((result) => {
        // TRANSACTION_SUCCESS action dispatched
        onSuccess(result.id);
      }).catch((err) => {
        // TRANSACTION_FAILURE action dispatched
        this.setState({ creating: false });
      });
    }
  }

  render() {
    const {
      onClose,
      error,
      newBono: {
        nombre, apellido1, apellido2, cedula,
      },
    } = this.state;

    const modalCreateBonoActions = [
      { text: 'Crear', onClick: () => this.addBono() },
      { text: 'Cancelar', onClick: onClose },
    ];

    const errorSection = (
      <SectionMessage appearance="error">
        {error}
      </SectionMessage>
    );

    return (
      <Modal actions={modalCreateBonoActions} onClose={this.closeCreateBono} width="large">
        <Page>
          <ContentWrapper>
            {error != null ? errorSection : null}
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
                  apellido1={apellido1}
                  apellido2={apellido2}
                  cedula={cedula}
                  onChange={props => this.setState({ newBono: props })}
                />
              </GridColumn>
            </Grid>
          </ContentWrapper>
        </Page>
      </Modal>
    );
  }
}

export default withFirestore(CrearBonoPage);
