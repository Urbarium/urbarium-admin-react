import React from 'react'
import ReactLoading from "react-loading";
import FullBackground from './FullBackground'
import FlexView from 'react-flexview'
import styled from 'styled-components';



const fullLoadingScreen = () => (
  <FullBackground centered>
    <ReactLoading type="bars" color="#fff" />
  </FullBackground>
)

export default fullLoadingScreen