/* eslint-disable react/no-unused-state */
import React from 'react';
import { ConnectedLabeledInput as Input } from 'components/Urbarium/LabeledInput';
import Label from 'components/Urbarium/Label';
import ButtonRound from 'components/Urbarium/ButtonRound';
import IconTitle from 'components/Urbarium/IconTitle';
import { headerNameTheme, headerValueTheme } from 'components/Urbarium/BonoTitle';
import { colors } from 'components/Urbarium/urbarium-styles';
import { Row, Column } from 'components/Structural';
import { todayAsString as today } from 'helpers/time';

import Form, { submitForm } from 'components/Form';
import {
  PageWrapper,
  PageHeader,
  PageContent,
  PageFooter,
} from 'components/PageWrapper';


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

// TODO: route to beneficiarios
const handleSubmit = () => {
  /* eslint-disable-next-line no-alert, no-undef */
  alert('Route me to beneficiarios page!');
};


const CrearBonoPage = ({ number }) => (
  <PageWrapper>

    <PageHeader>
      <Row>
        <Label theme={titleTheme}>Nuevo Bono de Vivienda</Label>
        <Column justify="end">
          <Label theme={headerNameTheme}>FECHA DE CREACION</Label>
          <Label theme={headerValueTheme}>{today()}</Label>
        </Column>
      </Row>
    </PageHeader>

    <PageContent>
      <Form id={formID} onSubmit={handleSubmit}>
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

CrearBonoPage.defaultProps = {
  number: 124345,
};

export default CrearBonoPage;
