import React from 'react';
import BonoTitle from '../../components/Urbarium/BonoTitle';
import Beneficiarios from '../../components/Urbarium/BeneficiariosSection';
import Input from '../../components/Urbarium/LabeledInput';
import DropdownGroup from '../../components/Urbarium/DropdownGroup';
import IconTitle from '../../components/Urbarium/IconTitle';
import ButtonRound from '../../components/Urbarium/ButtonRound';
import { Row, Column } from '../../components/Structural/index';
import Form, { submitForm } from '../../components/Form';
import {
  PageWrapper,
  PageHeader,
  PageContent,
  PageFooter,
} from '../../components/PageWrapper';

const formID = "beneficiarios-page-form";

const BeneficiariosPage = ({ title, data, onSubmit }) => (
  <PageWrapper>
    <PageHeader>
      <BonoTitle {...title} />
    </PageHeader>

    <PageContent style={{ overflowY: 'auto' }}>
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

    <PageFooter>
      <Row justify="end">
        <ButtonRound onClick={submitForm(formID)}>Guardar y continuar</ButtonRound>
      </Row>
    </PageFooter>
  </PageWrapper>
);

BeneficiariosPage.defaultProps = {
  title: {},
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

  // TODO: You can give an on submit function to the page which it will call using all the
  // data from the input fields  as arguments...

  // eslint-disable-next-line no-console
  onSubmit(args) { console.table(args); },
};

export default BeneficiariosPage;
