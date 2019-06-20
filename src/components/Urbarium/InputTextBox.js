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
    // eslint-disable-next-line react/destructuring-assignment
    defaultValue={props.data}
    {...props}
  />
);

InputTextBox.defaultProps = {
  placeholder: '',
  font: fonts.defaultInput,
  data: undefined,
  type: 'text',
  name: 'textbox',
  title: 'No requirements',
  pattern: '',
  required: false,
};

export default InputTextBox;
