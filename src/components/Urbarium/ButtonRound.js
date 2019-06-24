import React from 'react';
import styled from 'styled-components';
import { ButtonRoundStyle as style } from './urbarium-styles';

const Button = styled.button`
  width: ${style.width};
  height: ${style.height};
  font-size: ${style.fontSize};
  font-weight: ${style.fontWeight};
  border: ${style.border};
  border-radius: ${style.borderRadius};  
  color: ${style.color};
  background-color: ${style.backgroundColor};
  
  cursor: pointer;
  :focus, :hover{
    outline: none;
    background-color: ${style.focusBackgroundColor};
  }
`;

const RoundButton = props => <Button {...props} />;

export default RoundButton;
