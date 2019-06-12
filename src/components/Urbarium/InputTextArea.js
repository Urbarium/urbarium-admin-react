import React from 'react';
import styled from 'styled-components';
import fonts from '../../fonts';
import { primary, secondary } from '../../colors';

const TextArea = styled.textarea`
  ${props => props.font}
  box-sizing: border-box;
  width: ${props => props.fill ? " 100%;" : "360px"};
  height:${props => props.height ? props.height : props.fill ? "100%;" : "108px"};
  border-radius: 15px;
  border: 1px ${secondary.lightgray} solid;
  padding-left: 15px;
  padding-top: 10px;
  margin: 0px;
  resize: none;
  caret-color: ${primary.primary};

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${primary.passive};
  }
`
const InputTextArea = ({placeholder = "", data = undefined, fill = false, font = fonts.defaultInput, height}) => (
  <TextArea
    placeholder = {placeholder}
    defaultValue = {data}
    fill = {fill}
    font = {font}
    height = {height}
  />
);

export default InputTextArea;


