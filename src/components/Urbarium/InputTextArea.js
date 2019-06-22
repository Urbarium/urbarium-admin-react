import React from 'react';
import styled from 'styled-components';
import fonts from '../../fonts';
import { InputFieldStyle } from './urbarium-styles';

const getHeight = ({ height, fill }) => {
  let result;
  if (height) {
    result = `${height}px`;
  } else {
    result = fill ? '100%' : '100px';
  }
  return result;
};

const TextArea = styled.textarea`
  ${InputFieldStyle}
  ${props => props.font}
  width: ${props => (props.fill ? ' 100%' : '360px')};
  height: ${props => (getHeight(props))};
  padding-top: 10px;
  margin: 0px;
  resize: none;
`;

const InputTextArea = props => (
  <TextArea {...props} />
);

InputTextArea.defaultProps = {
  placeholder: "",
  defaultValue: "",
  fill: false,
  font: fonts.defaultInput,
  height: 0,
  pattern: undefined,
  name: "unnamed_textarea",
  title: "",
  required: false,
};

export default InputTextArea;
