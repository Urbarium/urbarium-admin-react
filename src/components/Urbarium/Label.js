import React from 'react';
import styled from 'styled-components';
import { LabelStyle as style } from './urbarium-theme';

const Label = styled.p`
    margin: 0px;
    color: ${props => props.theme.label_color || style.color};
    font-size: ${props => props.theme.label_fontSize || style.fontSize};
    font-weight: ${props => props.theme.label_fontWeight || style.fontWeight};
`;

export default props => <Label {...props} />;
