import React from 'react'
import ReactLoading from "react-loading";
import FullBackground from './FullBackground'

const fullLoadingScreen = () => (
  <FullBackground>
    <ReactLoading type="bars" color="#fff" />
  </FullBackground>
)

export default fullLoadingScreen