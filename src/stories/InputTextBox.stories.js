import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../components/Urbarium/InputTextBox';

storiesOf('Input Fields/TextBox Input', module)
  .add('Default', () => (
    <Input />
  ))
  .add('With placeholder', () => (
    <Input placeholder="Some placeholder" />
  ))
  .add('With data', () => (
    <Input data="Some data" />
  ));
