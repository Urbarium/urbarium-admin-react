/* eslint-disable react/no-unused-state */
import React from 'react';
import BeneficiariesSection from 'components/Urbarium/BeneficiariosSection';
import { ConnectedLabeledInput as Input } from 'components/Urbarium/LabeledInput';
import DropdownGroup from 'components/Urbarium/DropdownGroup';
import IconTitle from 'components/Urbarium/IconTitle';
import { Row, Column } from 'components/Structural';
import Form from 'components/Form';
import {
  PageWrapper,
  BonoHeader,
  PageContent,
  BonoFooter,
} from 'components/PageWrapper';

const formID = "beneficiarios-page-form";

const BeneficiariosPage = ({ bono }) => (
  <PageWrapper>

    <BonoHeader bono={bono} />

    <PageContent>
      <Form id={formID}>
        <Column gap={30}>

          <BeneficiariesSection />

          <Column gap={20}>
            <IconTitle icon="map">Dirección</IconTitle>
            <DropdownGroup
              labels={['Provincia', 'Cantón', 'Distrito']}
              placeholders={['Provincia', 'Cantón', 'Distrito']}
              names={['provincia', 'canton', 'distrito']}
            />
            <Input
              type="textarea"
              placeholder="Dirección exacta"
              name="direccion"
              fill
              theme={{ textArea_height: "133px" }}
            />
          </Column>

          <Column gap={20}>
            <IconTitle icon="phone">Contacto</IconTitle>
            <Row>
              <Input
                type="text"
                label="Teléfono"
                name="telefono"
                placeholder="0000-0000"
                title="At least eight digits"
                pattern="^\d{8,}$"
              />
              <Input
                type="text"
                label="Celular"
                name="celular"
                placeholder="0000-0000"
                title="At least eight digits"
                pattern="^\d{8,}$"
              />
              <div style={{ width: '190px' }} />
            </Row>
          </Column>
        </Column>
      </Form>
    </PageContent>

    <BonoFooter id={formID} />
  </PageWrapper>
);

BeneficiariosPage.defaultProps = {
  bono: {
    nombre: 'Default',
    cedula: '12345678',
    numero: '12345',
    monto: '',
    modificacion: '',
    creacion: '6/24/2019',
  },
};

export default BeneficiariosPage;
