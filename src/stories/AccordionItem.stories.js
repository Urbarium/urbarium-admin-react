import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion from '../components/Urbarium/AccordionItem';
import Input from '../components/Urbarium/LabeledInput';

storiesOf('Others/Accordion', module)
  .add('Default', () => (
    <Accordion />
  ))

  .add('With title', () => (
    <Accordion title="Accordion Item" index={5} />
  ))

  .add('With data', () => (
    <Accordion
      title="I have children"
      index={5}
      data={{
        startDate: 'start data',
        endDate: 'end date',
        user: 'user',
        state: 1,
      }}
    />
  ))

  .add('With children - No columns', () => (
    <Accordion
      title="I have no columns"
      index={5}
      data={{
        startDate: '32/05/2032', endDate: '17/04/2420', user: 'User', state: 1,
      }}
    >
      <Input label="Input 1" type="dropdown" />
      <Input label="Input 2" type="textarea" />
      <Input label="Input 3" type="text" />
    </Accordion>
  ))

  .add('With children - Width  equal columns', () => (
    <Accordion
      columns="1fr 1fr 1fr"
      title="Cyberpunk 2077"
      index={5}
      data={{
        startDate: '30/05/2012', endDate: '16/04/2020', user: 'CD Projectk Red', state: 1,
      }}
    >
      <Input label="Input 1" type="text" />
      <Input label="Input 2" type="dropdown" />
      <Input label="Input 3" type="textarea" fill />
    </Accordion>
  ))

  .add('With children - Width  custom columns', () => (
    <Accordion
      columns="1fr 1fr 0.25fr"
      title="Start Citizen"
      index={5}
      data={{
        startDate: '01/01/2012', endDate: '?????', user: 'Robert Space Industries', state: 1,
      }}
    >
      <Input label="Input 1" type="textarea" fill />
      <Input label="Input 2" type="textarea" fill />
      <Input label="Input 3" type="textarea" fill />
    </Accordion>
  ));
