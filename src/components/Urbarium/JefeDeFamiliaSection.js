import React from 'react';
import Input from './LabeledInput';
import Label from './Label';
import { primary } from '../../colors';
import fonts from '../../fonts';
import { Row, Column } from '../Structural/index';

// Single beneficiaro definition
const subLabelFont = `${fonts.subLabel} color: ${primary.passive};`;

const JefeDeFamiliaSection = ({
  nombre, apellido1, apellido2, cedula,
}) => (
  <Column gap={1}>
    <Label>Jefe de Familia</Label>
    <Row>
      <Input
        type="textbox"
        label="NOMBRE"
        placeholder="Nombre"
        data={nombre}
        labelFont={subLabelFont}
      />
      <Input
        type="textbox"
        label="PRIMER APELLIDO"
        placeholder="Primer apellido"
        data={apellido1}
        labelFont={subLabelFont}
      />
      <Input
        type="textbox"
        label="SEGUNDO APELLIDO"
        placeholder="Segundo apellido"
        data={apellido2}
        labelFont={subLabelFont}
      />
    </Row>
    <Input type="textbox" label="CEDULA" placeholder="0 0000 0000" data={cedula} labelFont={subLabelFont} />
  </Column>
);

export default JefeDeFamiliaSection;
