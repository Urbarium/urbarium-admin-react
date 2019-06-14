import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../src/components/Urbarium/InputCheckbox';


storiesOf('Input Fields/Checkbox Input', module)
  .add('Default', () => (
    <Checkbox />
  ))
  .add('With options', () => (
    <Checkbox options={['Pizza', 'Breadsticks', 'Refresco 2L', 'Postre']} />
  ))
  .add('Boxes on right', () => (
    <Checkbox options={['Pizza', 'Breadsticks', 'Refresco 2L', 'Postre']} right />
  ))
  .add('Pre-checked', () => (
    <Checkbox options={['Pizza', 'Breadsticks', 'Refresco 2L', 'Postre']} data={[1, 3]} />
  ))
  .add('Custom size', () => (
    <Checkbox options={['Pizza', 'Breadsticks']} data={[1]} size={30} />
  ))
  .add('Custom color', () => (
    <Checkbox options={['Pizza', 'Breadsticks']} data={[1]} size={30} checkColor="blue" boxColor="darkblue" />
  ))
  .add('Custom font', () => (
    <Checkbox options={['Pizza', 'Breadsticks']} data={[1]} size={30} font="font-size: 2em; color: black;" />
  ));
