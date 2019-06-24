import React from 'react';
import fonts from '../../fonts';
import { InputField } from './urbarium-styles';

const InputTextBox = ({ data, ...props }) => (
  <InputField defaultValue={data} {...props} />
);

InputTextBox.defaultProps = {
  placeholder: '',
  font: fonts.defaultInput,
  data: undefined,
  type: 'text',
  name: 'unnamed_textbox',
  pattern: undefined,
  title: '',
  required: false,
};

export default InputTextBox;
