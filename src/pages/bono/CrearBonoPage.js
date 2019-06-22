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
import Form, { submitForm } from '../../components/Form';
import { today } from '../../helpers/time';

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
const modalCreateBonoActions = [
  {
    text: 'Crear',
    onClick: submitForm(formID),
  },
  { text: 'Cancelar', onClick: () => {} },
];

// eslint-disable-next-line react/prefer-stateless-function
class CrearBonoPage extends Component {
  errorSection = (isFailure, { severity, msg }) => (
    isFailure ? (
      <SectionMessage appearance={severity}>
        {msg}
      </SectionMessage>
    ) : null
  )

  handleSubmit(argsPassedByTheForm) {
    const { addBono } = this.props;
    addBono({ newBono: argsPassedByTheForm });
  }

  render() {
    const {
      log,
      isCompleted,
      isFailure,
    } = this.props;

    return (
      <Modal actions={modalCreateBonoActions} onClose={isCompleted} width="large">
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
                <Form id={formID} onSubmit={args => this.handleSubmit(args)}>
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
