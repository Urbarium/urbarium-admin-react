import React from 'react';
import Input from './LabeledInput';
import Label from './Label';
import Button from './ButtonText';
import { primary } from '../../colors';
import fonts from '../../fonts';
import { Row, Column } from '../Structural/index';

// Single beneficiaro definition
const subLabelFont = `${fonts.subLabel} color: ${primary.passive};`;

const Beneficiario = ({
  index, cedula, nombre, apellido1, apellido2,
}) => (
  <Column gap={1}>
    <Label>{`Beneficiario ${index}`}</Label>
    <Input type="textbox" label="CEDULA" placeholder="0 0000 0000" data={cedula} labelFont={subLabelFont} />
    <Row>
      <Input
        type="textbox"
        label="NOMBRE"
        placeholder="Nombre"
        data={nombre}
        labelFont={subLabelFont}
      />
      <Input
        type="textbox"
        label="PRIMER APELLIDO"
        placeholder="Primer apellido"
        data={apellido1}
        labelFont={subLabelFont}
      />
      <Input
        type="textbox"
        label="SEGUNDO APELLIDO"
        placeholder="Segundo apellido"
        data={apellido2}
        labelFont={subLabelFont}
      />
    </Row>
  </Column>
);

// Beneficiaros Section definiton
class BeneficiariosSection extends React.Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = { benefList: this.getBeneficiarios(data) };
  }

  getBeneficiarios(beneficiarios) {
    return (
      beneficiarios.map((beneficiario, index) => (
        <Beneficiario {...Object.assign({}, { index: index + 1 }, beneficiario)} />))
    );
  }

  handleClickAdd() {
    const { benefList } = this.state;
    const newList = benefList.slice();
    newList.push(Beneficiario({ index: newList.length + 1 }));
    this.setState({
      benefList: newList,
    });
  }

  handleClickRemove() {
    const { benefList } = this.state;
    const newList = benefList.slice();
    newList.pop();
    this.setState({
      benefList: newList,
    });
  }

  render() {
    const { benefList } = this.state;
    return (
      <Column>
        {benefList}
        {benefList.length > 1
          ? <Button onClick={() => this.handleClickRemove()}>Remover beneficiario -</Button>
          : null}
        <Button onClick={() => this.handleClickAdd()}>Agregar beneficiario +</Button>
      </Column>
    );
  }
}

BeneficiariosSection.defaultProps = {
  data: [{}],
};

export default BeneficiariosSection;
