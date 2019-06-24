import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../components/Urbarium/InputTextArea';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

storiesOf('Input Fields/TextArea Input', module)
  .add('Default ', () => (
    <Input />
  ))
  .add('With placeholder', () => (
    <Input placeholder="Direccion exacta" />
  ))
  .add('With data', () => (
    <Input data={lorem} />
  ))
  .add('Filling space', () => ([
    <p style={{ color: 'red' }}>Available Space</p>,
    <div style={{
      width: '600px', height: '200px', padding: '10px', border: ' 1px red dashed',
    }}
    >
      <Input fill />
    </div>,
  ]));
