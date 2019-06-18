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
import Form from '../../components/Form';

const CreationDate = styled.label`
  font-size: 15px;
`;

const myFormID = "anyString_noSpaces";

// eslint-disable-next-line react/prefer-stateless-function
class CrearBonoPage extends Component {

  handleSubmit(argsPassedByTheForm) {
    // TODO: do whatever backend thingy you were going to do
    // here you can access CrearBonoPage as this
    // and the arguments received are a name-value pair list of all input fields
    console.log(this);
    console.log(argsPassedByTheForm);
    // you will only get here if the input fields had correct data..

    // actionAddBono(newBono, firestore, dispatch);
  }

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


    // TODO: why is modalCreateBonoActions and errorSection inside the reder method?
    const modalCreateBonoActions = [
      {
        text: 'Crear', onClick: () => {    
          // My plan was to have the submit button inside the form
          // this can't always be the case, the modal 'crear' button is outside for example
          // so query below is a workaround for these cases.
          // for some reason calling the form's submit function bypasses the forms onSubmit event
          // so I added a hidden button inside every form that we can click so the onSubmit event triggers properly
          document.querySelector(`#${myFormID}`).click();          
        },
      },
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
                {/* The idea here is to keep the input fields as simple as possible
                  The form component allows us to fetch all data from the input fields */}
                <Form id={myFormID} onSubmit={args => this.handleSubmit(args)}>
                  <JefeDeFamiliaSection />
                </Form>
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
