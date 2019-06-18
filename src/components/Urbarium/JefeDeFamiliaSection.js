import React from 'react';
import Input from './LabeledInput';
import Label from './Label';
import { primary } from '../../colors';
import fonts from '../../fonts';
import { Column } from '../Structural/index';

const subLabelFont = `${fonts.subLabel} color: ${primary.passive};`;

const JefeDeFamiliaSection = () => (
  <Column gap={10}>
    <Label>Jefe de Familia</Label>
    <Input
      type="textbox"
      label="NOMBRE"
      placeholder="Nombre"
      name="nombre"
      labelFont={subLabelFont}
    />
    <Input
      type="textbox"
      label="PRIMER APELLIDO"
      name="primer_appelido"
      placeholder="Primer apellido"
      labelFont={subLabelFont}
    />
    <Input
      type="textbox"
      label="SEGUNDO APELLIDO"
      name="segundo_appellido"
      placeholder="Segundo apellido"
      labelFont={subLabelFont}
    />
    <Input
      type="textbox"
      label="CEDULA"
      name="cedula"
      placeholder="0 0000 0000"
      labelFont={subLabelFont}
    />
  </Column>
);

export default JefeDeFamiliaSection;
