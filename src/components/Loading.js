import React from 'react';
import ReactLoading from 'react-loading';
import FullBackground from './FullBackground';

const fullLoadingScreen = () => (
  <FullBackground centered>
    <ReactLoading type="bars" color="#fff" />
  </FullBackground>
);

export default fullLoadingScreen;
