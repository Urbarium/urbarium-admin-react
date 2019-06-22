import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../components/Urbarium/InputDropdown';

const options1 = [
  { name: 'Izquierda', value: 'izquierda' },
  { name: 'Derecha', value: 'derecha' },
];

const options2 = [
  { name: 'San Jose', value: 'san_jose' },
  { name: 'Alajuela', value: 'alajuela' },
  { name: 'Heredia', value: 'heredia' },
  { name: 'Cartago', value: 'cartago' },
  { name: 'Limón', value: 'limon' },
  { name: 'Puntarenas', value: 'puntarenas' },
  { name: 'Guanacaste', value: 'guanacaste' },
];

storiesOf('Input Fields/Dropdown Input', module)
  .add('No placeholder', () => (
    <Input options={options1} />
  ))
  .add('With placeholder', () => (
    <Input placeholder="Mano" options={options1} />
  ))
  .add('Preselected', () => (
    <Input placeholder="Provincia" data="heredia" options={options2} />
  ));
