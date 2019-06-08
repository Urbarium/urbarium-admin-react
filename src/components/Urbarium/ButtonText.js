import styled from 'styled-components';
import colors from '../colors';
import fonts from '../fonts';

const ButtonText = styled.button`
    margin: 10px 0 15px 0;
    display: block;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${colors.primary.primary}
    ${fonts.optionLabel}
`;

export default ButtonText;
