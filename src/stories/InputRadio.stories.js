import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '../components/Urbarium/InputRadio';


storiesOf('Input Fields/Radio Input', module)
  .add('Default', () => (
    <Radio />
  ))
  .add('With options', () => (
    <Radio options={['Chocolate', 'Strawberry', 'Vanilla']} />
  ))
  .add('Boxes on right', () => (
    <Radio options={['Chocolate', 'Strawberry', 'Vanilla']} right />
  ))
  .add('Pre-checked', () => (
    <Radio options={['Chocolate', 'Strawberry', 'Vanilla']} data={[3]} />
  ))
  .add('Custom size', () => (
    <Radio options={['Chocolate', 'Strawberry', 'Vanilla']} data={[1]} size={30} />
  ))
  .add('Custom color', () => (
    <Radio options={['Chocolate', 'Strawberry']} data={[1]} size={30} checkColor="blue" boxColor="darkblue" />
  ))
  .add('Custom font', () => (
    <Radio options={['Chocolate', 'Strawberry']} data={[1]} size={30} font="font-size: 2em; color: black;" />
  ))
  .add('As a grid', () => (
    <div>
      <p style={{ color: 'red', fontSize: '1.5em' }}>TODO: Radio button is crazy, gotta find whats wrong</p>
      <div style={{ width: '60vw', border: '1px red dashed' }}>
        <Radio
          grid={200}
          options={[
            'Bienes inmuebles',
            'Informe registral',
            'Reporte CSS',
            'Formulario de utilidad',
            'Nacimientos',
            'Declaraciones Juradas',
            'Justificación de propiedades',
            'Escritura de hipoteca',
            'Constancia Salarial',
            'Impuestos al día',
            'Estado Civil',
          ]}
        />
      </div>
    </div>
  ));
