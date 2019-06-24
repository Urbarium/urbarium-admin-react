import React from 'react';
import { storiesOf } from '@storybook/react';
import IconTitle from '../components/Urbarium/IconTitle';

storiesOf('Others/IconTitle', module)
  .add('Default', () => (
    <IconTitle />
  ))

  .add('With text', () => (
    <IconTitle>This is a title</IconTitle>
  ))
  .add('Different Icon', () => (
    <IconTitle icon="phone">Phone icon</IconTitle>
  ));
