import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '../components/Urbarium/InputRadio';
import { ConformacionExpedienteOptions } from '../pages/steps/options';

const options = [
  { name: 'Chocolate', value: 'chocolate' },
  { name: 'Strawberry', value: 'strawberry' },
  { name: 'Vanilla', value: 'vanilla' },
];

storiesOf('Input Fields/Radio Input', module)
  .add('Default', () => (
    <Radio />
  ))
  .add('With Options', () => (
    <Radio options={options} />
  ))
  .add('Boxes on right', () => (
    <Radio options={options} right />
  ))
  .add('Pre-checked', () => (
    <Radio options={options} data="vanilla" />
  ))
  .add('Custom size', () => (
    <Radio options={options} data="chocolate" size={30} />
  ))
  .add('Custom color', () => (
    <Radio options={options} data="chocolate" size={30} checkColor="blue" boxColor="darkblue" />
  ))
  .add('Custom font', () => (
    <Radio options={options} data="strawberry" size={30} font="font-size: 2em; color: black;" />
  ))
  .add('As a grid', () => (
    <div>
      <p style={{ color: 'red', fontSize: '1.5em' }}>TODO: Radio button is crazy, gotta find whats wrong</p>
      <div style={{ width: '60vw', border: '1px red dashed' }}>
        <Radio
          grid={200}
          options={ConformacionExpedienteOptions}
        />
      </div>
    </div>
  ));
