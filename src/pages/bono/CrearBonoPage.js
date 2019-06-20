import React, { Component } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Modal from '@atlaskit/modal-dialog';
import SectionMessage from '@atlaskit/section-message';
import {
  actionAddBono,
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
    const { addBono } = this.props;
    addBono({ newBono: argsPassedByTheForm });
  }

  render() {
    const {
      log,
      // isFetching,
      isCompleted,
      isFailure,
    } = this.props;

    // TODO: why is modalCreateBonoActions and errorSection inside the reder method?
    const modalCreateBonoActions = [
      {
        text: 'Crear',
        onClick: () => {
          // My plan was to have the submit button inside the form
          // this can't always be the case, the modal 'crear' button is outside for example
          // so query below is a workaround for these cases.
          // for some reason calling the form's submit function bypasses the forms onSubmit event
          // so I added a hidden button inside every form that we can click so the onSubmit event triggers properly
          // eslint-disable-next-line no-undef
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

const mapDispatchToProps = (dispatch, { firestore }) => ({
  addBono: payload => dispatch(actionAddBono(payload, firestore)),
});

const ConnectedNewBono = connect(mapStateToProps, mapDispatchToProps)(CrearBonoPage);
const ConnectedFirestore = withFirestore(ConnectedNewBono);

export default ConnectedFirestore;
