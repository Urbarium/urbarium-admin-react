import React from 'react';
import styled from 'styled-components';
import { TextAreaStyle as style, InputField } from './urbarium-theme';

const TextArea = styled(InputField)`
  width: ${props => (props.fill ? ' 100%' : style.width)};
  height: ${props => (props.theme.textArea_height || props.fill ? '100%' : style.height)};
  padding-top: 10px;
  margin: 0px;
  resize: none;
  border: ${style.border};
  border-radius: ${style.borderRadius};
  background-color: ${style.backgroundColor};
  font-size: ${style.fontSize};
  color: ${style.color};
`;

const InputTextArea = ({ data, ...props }) => (
  <TextArea as="textarea" defaultValue={data} {...props} />
);

InputTextArea.defaultProps = {
  data: undefined,
  placeholder: "",
  fill: false,
  pattern: undefined,
  name: "unnamed_textarea",
  title: "",
  required: false,
};

export default InputTextArea;
