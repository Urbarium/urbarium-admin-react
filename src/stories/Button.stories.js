import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundButton from '../components/Urbarium/ButtonRound';
import ArrowButton from '../components/Urbarium/ButtonArrow';
import StateButton from '../components/Urbarium/ButtonState';

storiesOf('Buttons/Round Button', module)
  .add('Default (no text)', () => ([
    <RoundButton onClick={() => alert('I was clicked!')}></RoundButton>
  ]))
  .add('With text', () => ([
    <RoundButton onClick={() => alert('I was clicked!')}>CREAR BONO</RoundButton>
  ]));
  

storiesOf('Buttons/State Button', module)
  .add('Default', () => (
    <StateButton ></StateButton>
  ));
  storiesOf('Buttons/State Button', module)
  .add('State Set', () => (
    <StateButton state={2}></StateButton>
  ));

storiesOf('Buttons/Arrow Button', module)
  .add('Default', () =>(
    <ArrowButton onClick={undefined}/>
))



  
  