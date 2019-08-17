import React from 'react';
import Input from './LabeledInput';
import Label from './Label';
import { primary } from 'config/colors';
import fonts from 'config/fonts';
import { Column, Row } from 'components/Structural/index';

const subLabelFont = `${fonts.subLabel} color: ${primary.passive};`;

const JefeDeFamiliaSection = ({
  name, apellido1, apellido2, cedula,
}) => (
  <Column gap={15}>
    <Label>Jefe de Familia</Label>

    <Input
      type="text"
      label="NOMBRE"
      placeholder="Nombre"
      name="nombre"
      labelFont={subLabelFont}
      value={name}
      required
    />
    <Row>
      <Input
        type="text"
        label="PRIMER APELLIDO"
        name="apellido1"
        placeholder="Primer apellido"
        labelFont={subLabelFont}
        value={apellido1}
        required
      />
      <Input
        type="text"
        label="SEGUNDO APELLIDO"
        name="apellido2"
        placeholder="Segundo apellido"
        labelFont={subLabelFont}
        value={apellido2}
      />
    </Row>

    <Input
      type="text"
      label="CÉDULA"
      name="cedula"
      placeholder="0 0000 0000"
      labelFont={subLabelFont}
      pattern="\d{9,}"
      title="Cedula debe de consistir de al menos 9 caracteres numericos"
      value={cedula}
      required
    />
  </Column>
);

export default JefeDeFamiliaSection;
