import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledInput from '../components/Urbarium/LabeledInput';

const inputFont = `
    font-size: 15px;
    font-weight: bold;
    color: red;
`;
const labelFont = `
    font-size: 25px;
    font-weight: bold;
    color: blue;
`;


storiesOf('Input Fields/Labeled Input', module)
  .add('textbox input - normal label', () => (
    <LabeledInput type="textbox" label="Teléfono" placeholder="0000 0000" />
  ))
  .add('textbox input - no label', () => (
    <LabeledInput data="some text" type="textbox" placeholder="some placeholder" />
  ))
  .add('textbox input - custom font', () => ([
    <LabeledInput type="textbox" labelFont={labelFont} inputFont={inputFont} label="NOMBRE" placeholder="Nombre" />,
    <LabeledInput type="textbox" labelFont={labelFont} inputFont={inputFont} label="APELLIDO" placeholder="Apellido" />,
  ]))

  .add('dropdown input - normal label', () => (
    <LabeledInput type="dropdown" label="Mano" options={['derecha', 'izquierda']} />
  ))
  .add('dropdown input - no label', () => (
    <LabeledInput type="dropdown" options={['derecha', 'izquierda']} />
  ))
  .add('dropdown input - custom font', () => (
    <LabeledInput type="dropdown" label="Mano" labelFont={labelFont} inputFont={inputFont} placeholder="mano" options={['derecha', 'izquierda']} />
  ))

  .add('textarea input - normal label', () => (
    <LabeledInput type="textarea" placeholder="this is placeholder text" label="Label" />
  ))
  .add('textarea input - no label', () => (
    <LabeledInput data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." type="textarea" />
  ))
  .add('textarea input - custom font', () => (
    <LabeledInput type="textarea" placeholder="introduzca su texto aqui" label="Label" labelFont={labelFont} inputFont={inputFont} />
  ))

  .add('checkbox input - no label', () => (
    <LabeledInput type="checkbox" options={['Opcion 1', 'Opcion 2', 'Opcion 3']} data={[3, 1]} />
  ))
  .add('radio input - normal label', () => (
    <LabeledInput type="radio" label="Seleccion unica" options={['Opcion 1', 'Opcion 2', 'Opcion 3']} data={[2]} />
  ))
  .add('checkbox input - custom font', () => (
    <LabeledInput type="checkbox" label="Seleccion multiple" options={['Opcion 1', 'Opcion 2', 'Opcion 3']} data={[1]} labelFont={labelFont} inputFont={inputFont} />
  ));
