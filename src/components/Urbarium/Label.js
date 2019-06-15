import React from 'react';
import styled from 'styled-components';
import { neutral } from '../../colors';
import fonts from '../../fonts';

const P = styled.p`
    margin: 0px;
    color: ${props => props.color};
    ${props => props.font}
`;

const Label = ({ children, font = fonts.defaultLabel, color = neutral.black }) => (
  <P font={font} color={color}>{children}</P>
);

export default Label;
