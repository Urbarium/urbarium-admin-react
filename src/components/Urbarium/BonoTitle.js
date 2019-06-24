import React from 'react';
import Label from './Label';
import { Row, Column } from '../Structural/index';
import { colors } from './urbarium-styles';

const titleTheme = {
  label_color: '#23262',
  label_fontSize: '22px',
  label_fontWeight: 'bold',
};

const numberTheme = {
  label_color: colors.primary,
  label_fontSize: '21px',
  label_fontWeight: 'bold',
};

const headerNameTheme = {
  label_color: '#A0AAB4',
  label_fontSize: '10.45px',
  label_fontWeight: 'normal',
};

const headerValueTheme = {
  label_color: colors.primary,
  label_fontSize: '15px',
  label_fontWeight: 'bold',
};

export default ({
  nombre = 'Default',
  cedula = '12345678',
  numero = '12345',
  monto = '',
  modificacion = '',
  creacion = '00-00-00',
}) => (
  <Row>
    <Column>
      <Label theme={titleTheme}>{`${nombre}-${cedula}`}</Label>
      <Label theme={numberTheme}>{`#${numero}`}</Label>
    </Column>

    <Row justify="end" gap={50}>
      <Column justify="end">
        <Label theme={headerNameTheme}>MONTO DEL BONO</Label>
        <Label theme={headerValueTheme}>{monto}</Label>
      </Column>
      <Column justify="end">
        <Label theme={headerNameTheme}>ÚLTIMA MODIFICACIÓN</Label>
        <Label theme={headerValueTheme}>{modificacion}</Label>
      </Column>
      <Column justify="end">
        <Label theme={headerNameTheme}>FECHA CREACIÓN</Label>
        <Label theme={headerValueTheme}>{creacion}</Label>
      </Column>
    </Row>
  </Row>
);
