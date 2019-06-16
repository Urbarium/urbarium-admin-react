import styled from 'styled-components';
import { primary } from '../../colors';

const OptionWrapper = styled.label`
  margin-right: 10px;
  cursor: pointer;
  width: fit-content;
  display: flex
  flex-direction: row;  
  &:hover div {
    transform: scale(1.1);
    border-color: ${primary.primary}
  }
`;

export default OptionWrapper;
