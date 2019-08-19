import styled from 'styled-components';

const OptionWrapper = styled.label`
  margin-right: 10px;
  cursor: pointer;
  width: fit-content;
  display: flex
  flex-direction: row;
  &:hover div {
    transform: scale(1.1);
  }
`;

export default OptionWrapper;
