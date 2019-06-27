import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../components/Urbarium/InputState';

const options = [
  { name: 'Gray State', value: '1', style: 'gray' },
  { name: 'Green State', value: '2', style: 'green' },
  { name: 'Blue State', value: '3', style: 'blue' },
];

storiesOf('Input Fields/State Input', module)
  .add('Default', () => (
    <Input />
  ))
  .add('With options', () => (
    <Input options={options} />
  ))
  .add('Preselected', () => (
    <Input data="2" options={options} />
  ));
