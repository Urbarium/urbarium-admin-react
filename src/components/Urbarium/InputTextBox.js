import React from 'react';
import styled from 'styled-components';
import { primary } from '../../colors';
import fonts from '../../fonts';


const Input = styled.input`
  ${props => props.font}
  box-sizing: border-box;
  width: 190px;
  height: 30px;
  border-radius: 15px;
  border: 1px ${primary.passive} solid;
  padding-left: 15px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${primary.passive};
  }
`;

const InputTextBox = ({placeholder = "", font = fonts.defaultInput, data = undefined}) => (
  <Input
    type = "text"
    placeholder = {placeholder}
    defaultValue = {data}
    font = {font}
  />
);

export default InputTextBox;