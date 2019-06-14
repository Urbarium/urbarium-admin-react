import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '../src/components/Urbarium/InputRadio';


storiesOf('Input Fields/Radio Input', module)
  .add('Default', () => (
    <Radio />
  ))
  .add('With options', () => (
    <Radio options={['Chocolate', 'Strawberry', 'Vanilla']} />
  ))
  .add('Boxes on right', () => (
    <Radio options={['Chocolate', 'Strawberry', 'Vanilla']} right />
  ))
  .add('Pre-checked', () => (
    <Radio options={['Chocolate', 'Strawberry', 'Vanilla']} data={[3]} />
  ))
  .add('Custom size', () => (
    <Radio options={['Chocolate', 'Strawberry', 'Vanilla']} data={[1]} size={30} />
  ))
  .add('Custom color', () => (
    <Radio options={['Chocolate', 'Strawberry']} data={[1]} size={30} checkColor="blue" boxColor="darkblue" />
  ))
  .add('Custom font', () => (
    <Radio options={['Chocolate', 'Strawberry']} data={[1]} size={30} font="font-size: 2em; color: black;" />
  ));
