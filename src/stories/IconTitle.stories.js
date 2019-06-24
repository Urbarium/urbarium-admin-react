import React from 'react';
import { storiesOf } from '@storybook/react';
import IconTitle from '../components/Urbarium/IconTitle';

storiesOf('Others/Icon Title', module)
  .add('Default', () => (
    <IconTitle>This is a title</IconTitle>
  ))
  .add('Only icon', () => (
    <IconTitle icon="person" />
  ))
  .add('Different Icon', () => (
    <IconTitle icon="phone">Phone icon</IconTitle>
  ));
