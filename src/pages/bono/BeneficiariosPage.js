import React from 'react';
import PageTitle from '../../components/PageTitle';
import Beneficiarios from '../../components/Urbarium/BeneficiariosSection';
import Input from '../../components/Urbarium/LabeledInput';
import DropdownGroup from '../../components/Urbarium/DropdownGroup';
import Label from '../../components/Urbarium/Label';
import ButtonRound from '../../components/Urbarium/ButtonRound';
import { Row, Column } from '../../components/Structural/index';

import {
  PageWrapper, PageHeader, PageContent, PageFooter,
} from '../../components/PageWrapper';

const BeneficiariosPage = (({ data }) => (
  <PageWrapper>
    <PageHeader>
      <PageTitle>{data.title}</PageTitle>
    </PageHeader>

    <PageContent style={{ overflowY: 'auto' }}>
      <Column gap={20}>
        <Beneficiarios data={data.beneficiarios} />
        <Column gap={10}>
          <Label>Dirección</Label>
          <DropdownGroup />
          <Input type="textarea" placeholder="Dirección exacta" height={100} fill data={data.direccion} />
        </Column>
        <Row>
          <Input type="textbox" label="Telefono" placeholder="0000 0000" data={data.telefono} />
          <Input type="textbox" label="Celular" placeholder="0000 0000" data={data.cedula} />
          <div style={{ width: '190px' }} />
        </Row>
      </Column>
    </PageContent>

    <PageFooter>
      <ButtonRound>GUARDAR Y CONTINUAR</ButtonRound>
    </PageFooter>
  </PageWrapper>
));

// default values for the page,
// you can edit this to test how it would look once rendered with different data
BeneficiariosPage.defaultProps = {
  data: {
    title: 'Beneficiarios',
    beneficiarios: [
      {
        cedula: '',
        nombre: '',
        primer_apellido: '',
        segundo_apellido: '',
      },
    ],
    provincia: '',
    canton: '',
    distrito: '',
    direccion: '',
    telefono: '',
    celular: '',
  },
};

export default BeneficiariosPage;
