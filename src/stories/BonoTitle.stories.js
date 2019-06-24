import React from 'react';
import { storiesOf } from '@storybook/react';
import BonoTitle from '../components/Urbarium/BonoTitle';

storiesOf('Others/Bono Titlte', module)
  .add('Default', () => (
    <BonoTitle />
  ))
  .add('With values', () => (
    <BonoTitle
      nombre="Jose Andre Montero"
      cedula="207050078"
      numero="124345"
      monto=""
      modification=""
      creacion="12-02-2014"
    />
  ));
