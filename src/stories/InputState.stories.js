import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../components/Urbarium/InputState';

const options = [
  { name: 'Sin hacer', value: 'por_hacer', style: 'gray' },
  { name: 'En proceso', value: 'en_proceso', style: 'blue' },
  { name: 'Finalizado', value: 'finalizado', style: 'green' },
];

storiesOf('Input Fields/State Input', module)
  .add('Default', () => (
    <Input />
  ))
  .add('With options', () => (
    <Input options={options} />
  ))
  .add('Preselected', () => (
    <Input data="en_proceso" options={options} />
  ));
