import React from 'react';
import styled from 'styled-components';
import colors from '../../colors';
import fonts from '../../fonts';


const P = styled.p`
    color: ${colors.neutral.black};
    margin: inherit;
    ${props => props.font ? props.font : fonts.defaultLabel}
`;

const Label = ({children, font=undefined}) => <P font={font}>{children}</P>;


export default Label;