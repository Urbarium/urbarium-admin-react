import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../components/Urbarium/InputCheckbox';
import { ConformacionExpedienteOptions } from '../pages/steps/options';

const options1 = [
  { name: 'Pizza', value: 'pizza' },
  { name: 'Breadsticks', value: 'breadsticks' },
  { name: 'Refresco 2L', value: 'refresco_2L' },
  { name: 'Postre', value: 'postre' },
];

const options2 = options1.slice(0, 2);

storiesOf('Input Fields/Checkbox Input', module)
  .add('Default no options', () => (
    <Checkbox />
  ))
  .add('With options', () => (
    <Checkbox options={options1} />
  ))
  .add('Boxes on right', () => (
    <Checkbox options={options1} right />
  ))
  .add('Pre-checked', () => (
    <Checkbox options={options1} data={['pizza', 'refresco_2L']} />
  ))
  .add('Custom size', () => (
    <Checkbox options={options2} data={[1]} size={30} />
  ))
  .add('Custom color', () => (
    <Checkbox options={options2} data={[1]} size={30} checkColor="blue" boxColor="darkblue" />
  ))
  .add('Custom font', () => (
    <Checkbox options={options2} data={[1]} size={30} />
  ))

  .add('As a grid', () => (
    <div>
      <p style={{ color: 'red', fontSize: '1.5em' }}>Available space</p>
      <div style={{ width: '60vw', border: '1px red dashed' }}>
        <Checkbox
          grid={200}
          options={ConformacionExpedienteOptions}
        />
      </div>
    </div>
  ));
