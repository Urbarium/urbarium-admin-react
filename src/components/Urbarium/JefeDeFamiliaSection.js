import React from 'react';
import Input from './LabeledInput';
import Label from './Label';
import { primary } from '../../colors';
import fonts from '../../fonts';
import { Column, Row } from '../Structural/index';

const subLabelFont = `${fonts.subLabel} color: ${primary.passive};`;

const JefeDeFamiliaSection = () => (
  <Column gap={15}>
    <Label>Jefe de Familia</Label>
    <Row>
      <Input
        type="textbox"
        label="NOMBRE"
        placeholder="Nombre"
        name="nombre"
        labelFont={subLabelFont}
        pattern="[A-Za-z\s]{2,}"
        title="Un debe de consistir de solo letras"
        required
      />
      <Input
        type="textbox"
        label="PRIMER APELLIDO"
        name="primer_appelido"
        placeholder="Primer apellido"
        labelFont={subLabelFont}
        pattern="[A-Za-z\s]{2,}"
        title="Un apellido de consistir de solo letras"
        required
      />
      <Input
        type="textbox"
        label="SEGUNDO APELLIDO"
        name="segundo_appellido"
        placeholder="Segundo apellido"
        labelFont={subLabelFont}
        pattern="[A-Za-z\s]{2,}"
        title="Un apellido de consistir de solo letras"
      />
    </Row>
    <Input
      type="textbox"
      label="CEDULA"
      name="cedula"
      placeholder="0 0000 0000"
      labelFont={subLabelFont}
      pattern="\d{9,}"
      title={
        `-Solo caracteres numericos
        -Al menos 9 caracteres`
      }
      required
    />
  </Column>
);

export default JefeDeFamiliaSection;
