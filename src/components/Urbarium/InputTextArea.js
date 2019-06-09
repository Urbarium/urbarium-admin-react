import React from 'react';
import styled from 'styled-components';
import fonts from '../../fonts';
import { primary } from '../../colors';

const TextArea = styled.textarea`
  ${props => props.font}
  box-sizing: border-box;
  width: ${props => props.fill ? " 100%;" : "360px"};
  height:${props => props.fill ? " 100%;" : "108px"};
  border-radius: 15px;
  border: 1px ${primary.passive} solid;
  padding-left: 15px;
  padding-top: 10px;
  margin: 0px;
  resize: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${primary.passive};
  }
`
const InputTextArea = ({placeholder = "", data = undefined, fill = false, font = fonts.defaultInput}) => (
  <TextArea
    placeholder = {placeholder}
    defaultValue = {data}
    fill = {fill}
    font = {font}
  />
);

export default InputTextArea;


