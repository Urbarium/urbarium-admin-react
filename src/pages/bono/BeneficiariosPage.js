import React from 'react';
import Beneficiarios from '../../components/Urbarium/BeneficiariosSection';
import Input from '../../components/Urbarium/LabeledInput';
import DropdownGroup from '../../components/Urbarium/DropdownGroup';
import IconTitle from '../../components/Urbarium/IconTitle';
import { Row, Column } from '../../components/Structural/index';
import Form from '../../components/Form';
import {
  PageWrapper,
  BonoHeader,
  PageContent,
  BonoFooter,
} from '../../components/PageWrapper';

const formID = "beneficiarios-page-form";

const BeneficiariosPage = ({ bono, data, onSubmit }) => (
  <PageWrapper>

    <BonoHeader bono={bono} />

    <PageContent>
      <Form onSubmit={onSubmit} id={formID}>
        <Column gap={30}>

          <Beneficiarios data={data.beneficiarios} />

          <Column gap={20}>
            <IconTitle icon="map">Dirección</IconTitle>
            <DropdownGroup
              labels={['Provincia', 'Cantón', 'Distrito']}
              placeholders={['Provincia', 'Cantón', 'Distrito']}
              names={['provincia', 'canton', 'distrito']}
              data={[data.provincia, data.canton, data.distrito]}
            />
            <Input
              type="textarea"
              placeholder="Dirección exacta"
              height={100}
              data={data.direccion}
              fill
              theme={{ textArea_height: "133px" }}
              required
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
                data={data.telefono}
                title="At least eight digits"
                pattern="^\d{4}-?\d{4}$"
                required
              />
              <Input
                type="text"
                label="Celular"
                name="celular"
                placeholder="0000-0000"
                data={data.celular}
                title="At least eight digits"
                pattern="^\d{4}-?\d{4}$"
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
  data: {
    beneficiarios: [
      {
        cedula: '',
        nombre: '',
        apellido1: '',
        apellido2: '',
      },
    ],
    provincia: '',
    canton: '',
    distrito: '',
    direccion: '',
    telefono: '',
    celular: '',
  },
  // eslint-disable-next-line no-console
  onSubmit(args) { console.table(args); },
};

export default BeneficiariosPage;
