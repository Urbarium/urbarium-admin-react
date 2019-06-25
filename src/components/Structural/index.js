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
  ${props => (
    props.columns
      ? `grid-template-columns: ${props.columns};`
      : `grid-template-columns: repeat(${props.children.length}, auto);`
  )}
  grid-gap: ${props => props.gap || 0}px;
  grid-template-rows: 1fr;
  justify-content: ${props => props.justify || 'space-between'};
  align-items: ${props => props.align || 'start'}
`;

export const Column = styled.div`
  display: grid;
  grid-template-rows: repeat(${props => props.children.length}, auto);
  grid-template-columns: 1fr;
  grid-gap: ${props => props.gap || 0}px;
  height: ${props => (props.fill ? '100%' : 'fit-content')};
  justify-items: ${props => props.justify || 'space-between'};
  align-content: ${props => props.align || 'start'}
`;

export const FlexGrid = styled.div`
${props => (props.grid
    ? `display: grid;
      grid-template-columns: repeat(auto-fit, minmax(max-content, ${props.grid}px));
      grid-gap: 10px;`
    : `display: flex
      flex-direction: row;`)
}`;
