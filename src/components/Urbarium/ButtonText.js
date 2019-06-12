import styled from 'styled-components';
import { primary } from '../../colors';
import fonts from '../../fonts';

const ButtonText = styled.p`
    display: inline;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${primary.primary}
    ${fonts.optionLabel}
`;

export default ButtonText;
