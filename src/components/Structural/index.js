import styled from 'styled-components';

export const CenteredXY = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.children.length}, auto);
  justify-content: space-between;
`

export const Column = styled.div`
  display: grid;
  grid-template-rows: repeat(${props => props.children.length}, auto);
  grid-gap: ${props => props.gap ? props.gap : 1}0px;
`