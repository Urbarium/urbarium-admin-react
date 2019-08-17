import React from 'react';
import styled from 'styled-components';
import Portal from '@atlaskit/portal';
import { primary } from 'config/colors';

const FullBackgroundDiv = styled.div`
  background-color: ${primary.primary};
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

const FullBackground = (props) => {
  const { centered, children } = props;
  return (
    <Portal zIndex={100}>
      <FullBackgroundDiv>
        {
          centered ? <CenteredDiv>{children}</CenteredDiv> : children
        }
      </FullBackgroundDiv>
    </Portal>
  );
};

export default FullBackground;
