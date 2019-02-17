import React from 'react';
import styled from 'styled-components';
import { B500 } from '@atlaskit/theme/dist/cjs/colors';
import Portal from '@atlaskit/portal'

const FullBackgroundDiv = styled.div`
  background-color: ${B500};
  position: fixed;
  width: 100%;
  height: 100%;
  z-index:100;
`;

const CenteredDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const FullBackground = (props) => (
  <Portal zIndex={100} >
    <FullBackgroundDiv>
      {
        props.centered ? <CenteredDiv>{props.children}</CenteredDiv> : props.children
      }
    </FullBackgroundDiv>
  </Portal>
)

export default FullBackground