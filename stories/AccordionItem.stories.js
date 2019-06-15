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
      title="Cyberpunk 2077"
      index={5}
      data={{
        startDate: '30/05/2012',
        endDate: '16/04/2020',
        user: 'CD Projectk Red',
        state: 1,

      }}
    />
  ))

  .add('With children - No columns', () => (
    <Accordion
      title="Cyberpunk 2077"
      index={5}
      data={{
        startDate: '30/05/2012', endDate: '16/04/2020', user: 'CD Projectk Red', state: 1,
      }}
    >
      <Input label="Input 1" type="textbox" />
      <Input label="Input 2" type="dropdown" />
      <Input label="Input 3" type="textarea" />
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
      <Input label="Input 1" type="textbox" />
      <Input label="Input 2" type="dropdown" />
      <Input label="Input 3" type="textarea" />
    </Accordion>
  ))

  .add('With children - Width  custom columns', () => (
    <Accordion
      columns="1fr 1fr 0.25fr"
      title="Cyberpunk 2077"
      index={5}
      data={{
        startDate: '30/05/2012', endDate: '16/04/2020', user: 'CD Projectk Red', state: 1,
      }}
    >
      <Input label="Input 1" type="textarea" fill />
      <Input label="Input 2" type="textarea" fill />
      <Input label="Input 3" type="textarea" fill />
    </Accordion>
  ));
