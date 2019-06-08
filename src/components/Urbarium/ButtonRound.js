import React from 'react';
import colors from '../../colors';
import fonts from '../../fonts';
import styled from 'styled-components';

const Button = styled.button`
  ${fonts.defaultInput}
  background: ${colors.secondary.green};
  width: 292px;
  height: 42px;
  border-radius: 21px;
  border: 0px;
  color: ${colors.neutral.white};
  cursor: pointer;
  
  :focus{
    outline: none;
  }
`;

const RoundButton = ({onClick=null, children}) => <Button onClick={onClick} >{children}</Button>;

export default RoundButton;