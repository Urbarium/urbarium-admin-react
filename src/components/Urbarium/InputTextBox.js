import React from 'react';
import styled from 'styled-components';
import fonts from '../../fonts';
import { InputFieldStyle } from './urbarium-styles';


const Input = styled.input`
  ${InputFieldStyle}
  ${props => props.font}
`;

const InputTextBox = props => (
  <Input
    type="text"
    {...props}
  />
);

InputTextBox.defaultProps = {
  placeholder: '',
  font: fonts.defaultInput,
  data: undefined,
  name: 'textbox',
  title: 'No requirements',
  pattern: '',
  required: false,
};

export default InputTextBox;
