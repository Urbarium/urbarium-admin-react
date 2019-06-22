import React from 'react';
import PageTitle from '../../components/PageTitle';
import Beneficiarios from '../../components/Urbarium/BeneficiariosSection';
import Input from '../../components/Urbarium/LabeledInput';
import DropdownGroup from '../../components/Urbarium/DropdownGroup';
import Label from '../../components/Urbarium/Label';
import ButtonRound from '../../components/Urbarium/ButtonRound';
import { Row, Column } from '../../components/Structural/index';
import Form, { submitForm } from '../../components/Form';

import {
  PageWrapper, PageHeader, PageContent, PageFooter,
} from '../../components/PageWrapper';

const formID = "beneficiarios-page-form";

const BeneficiariosPage = (({ data, onSubmit }) => (
  <PageWrapper>
    <PageHeader>
      <PageTitle>{data.title}</PageTitle>
    </PageHeader>

    <PageContent style={{ overflowY: 'auto' }}>
      <Form onSubmit={onSubmit} id={formID}>
        <Column gap={20}>

          <Beneficiarios data={data.beneficiarios} />

          <Column gap={10}>
            <Label>Dirección</Label>
            <DropdownGroup
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
              required
            />
          </Column>

          <Row>
            <Input
              type="text"
              label="Teléfono"
              name="telefono"
              placeholder="0000 0000"
              data={data.telefono}
              title="At least eight digits"
              pattern="^[\d]{8,}$"
              required
            />
            <Input
              type="text"
              label="Celular"
              name="celular"
              placeholder="0000 0000"
              data={data.celular}
              title="At least eight digits"
              pattern="^[\d]{8,}$"
            />
            <div style={{ width: '190px' }} />
          </Row>

        </Column>
      </Form>
    </PageContent>

    <PageFooter>
      <Row justify="end">
        <ButtonRound onClick={submitForm(formID)}>
          GUARDAR Y CONTINUAR
        </ButtonRound>
      </Row>
    </PageFooter>
  </PageWrapper>
));

// default data prop for the page are empty input fields and a single empty beneficiario
// You can edit this to test preloading data into the page
BeneficiariosPage.defaultProps = {
  data: {
    title: 'Beneficiarios',
    beneficiarios: [
      {
        cedula: '',
        nombre: '',
        primerApellido: '',
        segundoApellido: '',
      },
    ],
    provincia: 'cartago',
    canton: 'turrialba',
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
