/* eslint-disable react/no-unused-state */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  withNavigationViewController,
  withNavigationUIController,
} from '@atlaskit/navigation-next';
import { withFirestore } from 'react-redux-firebase';
import Input from '../../components/Urbarium/LabeledInput';
import Label from '../../components/Urbarium/Label';
import ButtonRound from '../../components/Urbarium/ButtonRound';
import IconTitle from '../../components/Urbarium/IconTitle';
import { headerNameTheme, headerValueTheme } from '../../components/Urbarium/BonoTitle';
import { colors } from '../../components/Urbarium/urbarium-styles';
import { Row, Column } from '../../components/Structural/index';
import Form, { submitForm } from '../../components/Form';
import {
  PageWrapper,
  PageHeader,
  PageContent,
  PageFooter,
} from '../../components/PageWrapper';
import { actionSaveBono } from '../../actions/bonoActions';

const bonoNumberTheme = {
  label_fontSize: '35px',
  label_color: colors.primary,
  label_fontWeight: 'bold',
};

const titleTheme = {
  label_fontSize: '24px',
  label_color: colors.black,
  label_fontWeight: 'bold',
};

const formID = "nuevo-bono-form";

const CrearBonoPage = ({ number, date, createBono }) => (
  <PageWrapper>
    <PageHeader>
      <Row>
        <Label theme={titleTheme}>Nuevo Bono de Vivienda</Label>
        <Column justify="end">
          <Label theme={headerNameTheme}>FECHA DE CREACION</Label>
          <Label theme={headerValueTheme}>{date}</Label>
        </Column>
      </Row>
    </PageHeader>
    <PageContent>
      <Form id={formID} onSubmit={createBono}>
        <Column gap={55}>
          <Column gap={20}>
            <IconTitle>El nuevo bono a crear es el número</IconTitle>
            <Label theme={bonoNumberTheme}>{`#${number}`}</Label>
          </Column>
          <Column gap={20}>
            <IconTitle>Datos del Jefe de familia</IconTitle>
            <Row>
              <Input
                type="text"
                label="Nombre"
                placeholder="nombre"
                name="jefeDeFamilia-nombre"
                required
              />
              <Input
                type="text"
                label="Primer Apellido"
                placeholder="apellido"
                name="jefeDeFamilia-primer_apellido"
                required
              />
              <Input
                type="text"
                label="Segundo Apellido"
                placeholder="apellido"
                name="jefeDeFamilia-segundo_apellido"
                required
              />
            </Row>
          </Column>
          <Input
            type="text"
            label="Cedula del Jefe de Familia"
            placeholder="00000000"
            name="jefeDeFamilia-cedula"
            required
          />
        </Column>
      </Form>
    </PageContent>
    <PageFooter>
      <ButtonRound onMouseUp={submitForm(formID)}>Crear bono</ButtonRound>
    </PageFooter>
  </PageWrapper>
);

const mapDispatchToProps = (dispatch, { firestore, history }) => ({
  createBono: () => {
    dispatch(actionSaveBono(firestore, history));
  },
});

const enhance = compose(
  withNavigationViewController,
  withNavigationUIController,
  withFirestore,
  connect(null, mapDispatchToProps),
);

CrearBonoPage.defaultProps = {
  number: 124345,
  date: '12-02-2014',
};

export default enhance(CrearBonoPage);
