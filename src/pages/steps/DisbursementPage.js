import React from 'react';
import Label from 'components/Urbarium/Label';
import { Column, Row } from 'components/Structural';
import {
  PageWrapper,
  BonoHeader,
  PageContent,
  BonoFooter,
} from 'components/PageWrapper';

const headerTheme = {
  label_fontSize: '21px',
  label_fontWeight: 'bold',
  label_color: '#1A173B',
};

const valueTheme = {
  label_fontSize: '21px',
  label_fontWeight: 'normal',
  label_color: '#994F7E',
};

const Headers = ['Monto de Bono', 'Fecha de depósito', 'Entidad'];

const DesembolsoPage = ({ bono, fechaDeposito, entidad }) => {
  const Values = [bono.monto, fechaDeposito, entidad];
  const Elements = Headers.map((header, index) => (
    <Column gap={5}>
      <Label theme={headerTheme}>{header}</Label>
      <Label theme={valueTheme}>{Values[index]}</Label>
    </Column>
  ));
  return (
    <PageWrapper>
      <BonoHeader bono={bono} />

      <PageContent>
        <div style={{ marginLeft: '70px', height: '100%' }}>
          <Column gap={70} align="center" fill>
            <Row>
              {Elements[0]}
            </Row>
            <Row gap={150} justify="start">
              {Elements[1]}
              {Elements[2]}
            </Row>
          </Column>
        </div>
      </PageContent>

      <BonoFooter />
    </PageWrapper>
  );
};

DesembolsoPage.defaultProps = {
  bono: {
    nombre: 'Default',
    cedula: '12345678',
    numero: '12345',
    monto: '1.250.243 colones',
    modificacion: '',
    creacion: '6/24/2019',
  },
  entidad: 'Banco Nacional',
  fechaDeposito: '25 de enero del 2019',

  // eslint-disable-next-line no-console
  onSubmit(args) { console.table(args); },
};


export default DesembolsoPage;
