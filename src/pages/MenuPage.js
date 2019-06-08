import React, { Component } from 'react'
import PageTitle from '../components/PageTitle'
import LoginForm from '../components/LoginForm'
import FullBackground from '../components/FullBackground';
import Card from '../components/Card';
import Button from '@atlaskit/button/dist/cjs/components/Button';

class MenuPage extends Component {

  render() {
    return (
      <FullBackground centered>
        <Button>CREAR BONO</Button>
        <Button>COLSULTAR BONOS</Button>
        <Button>OBSERVAR MÉTRICAS</Button>
      </FullBackground>
    );
  }
}

export default LoginPage;