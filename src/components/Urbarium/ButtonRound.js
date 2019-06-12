import React from 'react';
import styled from 'styled-components';
import { secondary, neutral } from '../../colors';
import fonts from '../../fonts';

const Button = styled.button`
  ${fonts.defaultInput}
  background: ${secondary.green};
  width: 292px;
  height: 42px;
  border-radius: 21px;
  border: 0px;
  color: ${neutral.white};
  cursor: pointer;
  :focus{
    outline: none;
  }
`;

const RoundButton = ({ onClick = null, children }) => <Button onClick={onClick}>{children}</Button>;

export default RoundButton;
