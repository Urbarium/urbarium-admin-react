import React, { Fragment } from 'react'
import Button from '@atlaskit/button';
import ReactLoading from "react-loading";
import styled from 'styled-components';
import { omit } from 'lodash'

const Line = styled.div`
  float: right;
  padding: 5px;
`;

const LoadingDiv = (<Line>
  <ReactLoading type="bars" color="#fff" width='20px' height='30px'/>
</Line>)

const ButtonWithLoading = (props) => (
  <Button {...omit(props, ["children", "isLoading"])}>
    {props.isLoading ? LoadingDiv : ''}
    {props.children}
  </Button>
)

export default ButtonWithLoading