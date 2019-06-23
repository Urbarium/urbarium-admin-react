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

const options = [
  { name: 'Option 1', value: 'option_1' },
  { name: 'Option 2', value: 'option_2' },
  { name: 'Option 3', value: 'option_3' },
];


storiesOf('Input Fields/Labeled Input', module)
  .add('textbox input - normal label', () => (
    <LabeledInput type="text" label="Teléfono" placeholder="0000 0000" />
  ))
  .add('textbox input - no label', () => (
    <LabeledInput type="text" data="some text" placeholder="some placeholder" />
  ))
  .add('textbox input - custom font', () => ([
    <LabeledInput type="text" labelFont={labelFont} inputFont={inputFont} label="NOMBRE" placeholder="Nombre" />,
    <LabeledInput type="text" labelFont={labelFont} inputFont={inputFont} label="APELLIDO" placeholder="Apellido" />,
  ]))

  .add('dropdown input - normal label', () => (
    <LabeledInput type="dropdown" label="Mano" options={['derecha', 'izquierda']} />
  ))
  .add('dropdown input - no label', () => (
    <LabeledInput type="dropdown" options={options} />
  ))
  .add('dropdown input - custom font', () => (
    <LabeledInput
      type="dropdown"
      label="Options"
      labelFont={labelFont}
      inputFont={inputFont}
      placeholder="some placeholder"
      options={options}
    />
  ))

  .add('textarea input - normal label', () => (
    <LabeledInput type="textarea" placeholder="this is placeholder text" label="Label" />
  ))
  .add('textarea input - no label', () => (
    <LabeledInput
      data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      type="textarea"
    />
  ))
  .add('textarea input - custom font', () => (
    <LabeledInput
      type="textarea"
      placeholder="introduzca su texto aqui"
      label="Label"
      labelFont={labelFont}
      inputFont={inputFont}
    />
  ))

  .add('checkbox input - no label', () => (
    <LabeledInput type="checkbox" options={options} data={['option_3', 'option_1']} />
  ))
  .add('radio input - normal label', () => (
    <LabeledInput type="radio" label="Seleccion unica" options={options} data="option_2" />
  ))
  .add('checkbox input - custom font', () => (
    <LabeledInput
      type="checkbox"
      label="Seleccion multiple"
      options={options}
      data={['option_1']}
      labelFont={labelFont}
      inputFont={inputFont}
    />
  ));
