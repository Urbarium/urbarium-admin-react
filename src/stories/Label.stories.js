import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '../components/Urbarium/Label';

const customTheme = {
  label_fontSize: '2em',
  label_color: '#89a6c4',
  label_fontWeight: 'normal',
};

storiesOf('Others/Label', module)
  .add('Default', () => (
    <Label>Beneficiario</Label>
  ))

  .add('Custom theme', () => (
    <Label theme={customTheme}>CÉDULA</Label>
  ));
