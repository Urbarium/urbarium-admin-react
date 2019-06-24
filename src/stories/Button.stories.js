import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundButton from '../components/Urbarium/ButtonRound';
import ArrowButton from '../components/Urbarium/ButtonArrow';
import StateButton from '../components/Urbarium/ButtonState';
import TextButton from '../components/Urbarium/ButtonText';

storiesOf('Buttons/Round Button', module)
  .add('Default (no text)', () => (
    <RoundButton />
  ))
  .add('With text', () => (
    // eslint-disable-next-line no-alert, no-undef
    <RoundButton onClick={() => alert('I was clicked!')}>Crear Bono</RoundButton>
  ));

storiesOf('Buttons/State Button', module)
  .add('Default', () => (
    <StateButton />
  ));
storiesOf('Buttons/State Button', module)
  .add('State Set', () => (
    <StateButton data={2} />
  ));

storiesOf('Buttons/Arrow Button', module)
  .add('Default', () => (
    <ArrowButton />
  ));

storiesOf('Buttons/Arrow Button', module)
  .add('Default', () => (
    <ArrowButton />
  ));

storiesOf('Buttons/Text Button', module)
  .add('Default', () => (
    <TextButton>This is a text button</TextButton>
  ));
