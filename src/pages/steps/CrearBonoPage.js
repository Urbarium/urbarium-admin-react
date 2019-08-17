import React, { Component } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import SectionMessage from '@atlaskit/section-message';
import { withRouter } from "react-router";
import {
  actionAddBono, actionBonoCanceled,
} from 'actions/bonoActions';
import ContentWrapper from 'components/ContentWrapper';
import PageTitle from 'components/PageTitle';
import JefeDeFamiliaSection from 'components/Urbarium/JefeDeFamiliaSection';
import Form, { submitForm } from 'components/Form';
import { today } from 'helpers/time';

const StyledDate = styled.label`
  font-size: 15px;
`;

const Today = ({ date }) => (
  <StyledDate>
    <Moment locale="es" format="DD-MM-YYYY">
      {date}
    </Moment>
  </StyledDate>
);

const formID = "crear-bono-form";

// eslint-disable-next-line react/prefer-stateless-function
class CrearBonoPage extends Component {
  modalCreateBonoActions = close => [
    {
      text: 'Crear', onClick: submitForm(formID),
    },
    { text: 'Cancelar', onClick: () => { close(); } },
  ];

  errorSection = (isFailure, { severity, msg } = {}) => (
    isFailure ? (
      <SectionMessage appearance={severity}>
        {msg}
      </SectionMessage>
    ) : null
  )

  handleSubmit() {
    // form no longer return anything but still handles type checking
    // succesfully submiting form should mean that data on store is ready for upload to DB
    const { addBono } = this.props;
    // const newBono = formNameValues
    //   .map(({ name, value }) => ({ [name]: value }))
    //   .reduce((accumulator, current) => ({ ...accumulator, ...current }), {});
    addBono({});
  }

  render() {
    const {
      log,
      close,
      isFailure,
      isCreating,
    } = this.props;

    return (
      <ModalTransition>
        { isCreating && (
          <Modal actions={this.modalCreateBonoActions(close)} onClose={close} width="large">
            <Page>
              <ContentWrapper>
                { this.errorSection(isFailure, log) }
                <Grid>
                  <GridColumn medium={10}>
                    <PageTitle>Nuevo Bono de Vivienda</PageTitle>
                  </GridColumn>
                  <GridColumn medium={2}>
                    <Today date={today()} />
                  </GridColumn>
                </Grid>
                <Grid>
                  <GridColumn medium={12}>
                    <Form id={formID} onSubmit={() => this.handleSubmit()}>
                      <JefeDeFamiliaSection />
                    </Form>
                  </GridColumn>
                </Grid>
              </ContentWrapper>
            </Page>
          </Modal>
        )}
      </ModalTransition>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.bonos };
}

const mapDispatchToProps = (dispatch, { firestore, history }) => ({
  addBono: payload => dispatch(actionAddBono(payload, firestore, history)),
  close: () => dispatch(actionBonoCanceled()),
});

const ConnectedNewBono = connect(mapStateToProps, mapDispatchToProps)(CrearBonoPage);
const ConnectedFirestore = withFirestore(ConnectedNewBono);
const ConnectedRouter = withRouter(ConnectedFirestore);

export default ConnectedRouter;
