import React from 'react';
import styled from 'styled-components';
import { OptionLabelStyle as style } from './urbarium-styles';
import Label from './Label';

const OptionLabel = styled(Label)`
    color: ${props => props.theme.optionLabel_color || style.color};
    font-size: ${props => props.theme.optionlabel_fontSize || style.fontSize};
    font-weight: ${props => props.theme.optionlabel_fontWeight || style.fontWeight};
`;

export default props => <OptionLabel {...props} />;
