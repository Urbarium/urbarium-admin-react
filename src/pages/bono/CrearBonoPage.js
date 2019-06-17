import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Moment from 'react-moment';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Modal from '@atlaskit/modal-dialog';
import SectionMessage from '@atlaskit/section-message';
import {
  actionAddBono,
  actionAddBonoBuild,
} from '../../actions/bonoActions';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';
import JefeDeFamiliaSection from '../../components/Urbarium/JefeDeFamiliaSection';

const CreationDate = styled.label`
  font-size: 15px;
`;

// eslint-disable-next-line react/prefer-stateless-function
class CrearBonoPage extends Component {
  render() {
    const {
      newBono,
      newBono: {
        nombre, apellido1, apellido2, cedula,
      },
      log,
      isFetching,
      isCompleted,
      isFailure,
      dispatch,
      firestore,
    } = this.props;

    const modalCreateBonoActions = [
      { text: 'Crear', onClick: () => actionAddBono(newBono, firestore, dispatch) },
      { text: 'Cancelar', onClick: () => {} },
    ];

    const errorSection = isFailure ? (
      <SectionMessage appearance={log.severity}>
        {log.msg}
      </SectionMessage>
    ) : null;

    return (
      <Modal actions={modalCreateBonoActions} onClose={isCompleted} width="large">
        <Page>
          <ContentWrapper>
            { errorSection }
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
                  onChange={() => dispatch(actionAddBonoBuild(newBono))}
                />
              </GridColumn>
            </Grid>
          </ContentWrapper>
        </Page>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.bonos };
}

const ConnectedFirestore = withFirestore(CrearBonoPage);
const ConnectedNewBono = connect(mapStateToProps)(ConnectedFirestore);

export default ConnectedNewBono;
