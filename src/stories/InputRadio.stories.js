import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '../components/Urbarium/InputRadio';

const options1 = [
  { name: 'Chocolate', value: 'chocolate' },
  { name: 'Strawberry', value: 'strawberry' },
  { name: 'Vanilla', value: 'vanilla' },
];

const options2 = [
  { name: 'Bienes inmuebles', value: 1 },
  { name: 'Informe registral', value: 2 },
  { name: 'Reporte CSS', value: 3 },
  { name: 'Formulario de utilidad', value: 4 },
  { name: 'Nacimientos', value: 5 },
  { name: 'Declaraciones Juradas', value: 6 },
  { name: 'Justificación de propiedades', value: 7 },
  { name: 'Escritura de hipoteca', value: 8 },
  { name: 'Constancia Salarial', value: 9 },
  { name: 'Impuestos al día', value: 10 },
  { name: 'Estado Civil', value: 11 },
];

storiesOf('Input Fields/Radio Input', module)
  .add('Default', () => (
    <Radio />
  ))
  .add('With options', () => (
    <Radio options={options1} />
  ))
  .add('Boxes on right', () => (
    <Radio options={options1} right />
  ))
  .add('Pre-checked', () => (
    <Radio options={options1} data="vanilla" />
  ))
  .add('Custom size', () => (
    <Radio options={options1} data="chocolate" size={30} />
  ))
  .add('Custom color', () => (
    <Radio options={options1} data="chocolate" size={30} checkColor="blue" boxColor="darkblue" />
  ))
  .add('Custom font', () => (
    <Radio options={options1} data="strawberry" size={30} font="font-size: 2em; color: black;" />
  ))
  .add('As a grid', () => (
    <div>
      <p style={{ color: 'red', fontSize: '1.5em' }}>TODO: Radio button is crazy, gotta find whats wrong</p>
      <div style={{ width: '60vw', border: '1px red dashed' }}>
        <Radio
          grid={200}
          options={options2}
        />
      </div>
    </div>
  ));
