import styled from 'styled-components';
import { ButtonTextStyle as style } from './urbarium-styles';

const ButtonText = styled.p`
  margin: 0px
  display: inline;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${style.color}
  font-weight: ${style.fontWeight}
  font-size: ${style.fontSize}
  :focus, :hover {
    color: ${style.focusColor}
  }
}`;

export default ButtonText;
