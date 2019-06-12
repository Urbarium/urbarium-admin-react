import styled from 'styled-components';
import colors from '../../colors';
import fonts from '../../fonts';

const ButtonText = styled.p`
    display: inline;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${colors.primary.primary}
    ${fonts.optionLabel}
`;

export default ButtonText;
