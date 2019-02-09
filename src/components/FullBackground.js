import React from 'react';
import styled from 'styled-components';
import { B500 } from '@atlaskit/theme/dist/cjs/colors';

const FullBackground = styled.div`
  background-color: ${B500};
  height: 100vh;
`;

export default ({ children }) => (
  <FullBackground>
    {children}
  </FullBackground>
)