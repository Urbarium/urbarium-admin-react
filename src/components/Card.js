import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 5px;
  margin-top: 50px;
`;

export default ({ children }) => (
  <Card>
    {children}
  </Card>
);
