import React from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';
import Beneficiarios from '../../components/Urbarium/BeneficiariosSection';
import Input from '../../components/Urbarium/LabeledInput';
import DropdownGroup from '../../components/Urbarium/DropdownGroup';
import Label from '../../components/Urbarium/Label';
import { Row, Column } from '../../components/Structural/index';

const BeneficiariosPage = (({ data }) => (
  <ContentWrapper>
    <PageTitle>{data.title}</PageTitle>
    <Column gap={20}>

      <Beneficiarios data={data.beneficiarios} />

      <Column gap={10}>
        <Label>Dirección</Label>
        <DropdownGroup />
        <Input type="textarea" placeholder="Dirección exacta" height={100} fill data={data.direccion} />
      </Column>

      <Row columns="1fr 1fr 1fr">
        <Input type="textbox" label="Telefono" placeholder="0000 0000" data={data.telefono} />
        <Input type="textbox" label="Celular" placeholder="0000 0000" data={data.cedula} />
      </Row>
    </Column>

  </ContentWrapper>
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
