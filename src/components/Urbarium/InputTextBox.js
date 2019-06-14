import React from 'react';
import styled from 'styled-components';
import fonts from '../../fonts';
import { InputFieldStyle } from './urbarium-styles';


const Input = styled.input`
  ${InputFieldStyle}
  ${props => props.font}
`;

const InputTextBox = ({ placeholder = '', font = fonts.defaultInput, data = undefined }) => (
  <Input
    type="text"
    placeholder={placeholder}
    defaultValue={data}
    font={font}
  />
);

export default InputTextBox;
