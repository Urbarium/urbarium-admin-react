import React, { Component } from 'react';
import Input from './LabeledInput';
import Label from './Label';
import { primary } from '../../colors';
import fonts from '../../fonts';
import { Row, Column } from '../Structural/index';

// Single beneficiaro definition
const subLabelFont = `${fonts.subLabel} color: ${primary.passive};`;

class JefeDeFamiliaSection extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  handleChange(value) {
    const { onChange } = this.state;
    this.setState(value);
    onChange(this.state);
  }

  render() {
    const {
      nombre, apellido1, apellido2, cedula,
    } = this.state;
    return (
      <Column gap={1}>
        <Label>Jefe de Familia</Label>
        <Row>
          <Input
            type="textbox"
            label="NOMBRE"
            placeholder="Nombre"
            data={nombre}
            labelFont={subLabelFont}
            onChange={event => this.handleChange({ nombre: event.target.value })}
          />
          <Input
            type="textbox"
            label="PRIMER APELLIDO"
            placeholder="Primer apellido"
            data={apellido1}
            labelFont={subLabelFont}
            onChange={event => this.handleChange({ apellido1: event.target.value })}
          />
          <Input
            type="textbox"
            label="SEGUNDO APELLIDO"
            placeholder="Segundo apellido"
            data={apellido2}
            labelFont={subLabelFont}
            onChange={event => this.handleChange({ apellido2: event.target.value })}
          />
        </Row>
        <Input
          type="textbox"
          label="CEDULA"
          placeholder="0 0000 0000"
          data={cedula}
          labelFont={subLabelFont}
          onChange={event => this.handleChange({ cedula: event.target.value })}
        />
      </Column>
    );
  }
}

export default JefeDeFamiliaSection;
