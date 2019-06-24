import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledInput from '../components/Urbarium/LabeledInput';

const options = [
  { name: 'Option 1', value: 'option_1' },
  { name: 'Option 2', value: 'option_2' },
  { name: 'Option 3', value: 'option_3' },
];


storiesOf('Input Fields/Labeled Input', module)
  .add('textbox input - with label', () => (
    <LabeledInput type="text" label="Teléfono" placeholder="0000 0000" />
  ))
  .add('textbox input - no label', () => (
    <LabeledInput type="text" data="some text" placeholder="some placeholder" />
  ))

  .add('dropdown input - with label', () => (
    <LabeledInput type="dropdown" label="Mano" options={['derecha', 'izquierda']} />
  ))
  .add('dropdown input - no label', () => (
    <LabeledInput type="dropdown" options={options} />
  ))

  .add('textarea input - with label', () => (
    <LabeledInput type="textarea" placeholder="this is placeholder text" label="Label" />
  ))
  .add('textarea input - no label', () => (
    <LabeledInput
      data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      type="textarea"
    />
  ))

  .add('radio input - with label', () => (
    <LabeledInput type="radio" label="Seleccion unica" options={options} data="option_2" />
  ))
  .add('checkbox input - no label', () => (
    <LabeledInput type="checkbox" options={options} data={['option_3', 'option_1']} />
  ));
