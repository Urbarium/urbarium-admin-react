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
  index, cedula, nombre, primerApellido, segundoApellido,
}) => (
  <Column gap={15}>

    <Label>{`Beneficiario ${index}`}</Label>

    <Input
      type="text"
      label="CEDULA"
      placeholder="0 0000 0000"
      data={cedula}
      labelFont={subLabelFont}
      name={`cedula_${index}`}
      title="At least nine digits"
      pattern="^[\d]{9,}$"
      required
    />

    <Row>
      <Input
        type="text"
        label="NOMBRE"
        placeholder="Nombre"
        name={`nombre_${index}`}
        data={nombre}
        labelFont={subLabelFont}
        required
      />
      <Input
        type="text"
        label="PRIMER APELLIDO"
        placeholder="Primer apellido"
        name={`primer_apellido_${index}`}
        data={primerApellido}
        labelFont={subLabelFont}
        required
      />
      <Input
        type="text"
        label="SEGUNDO APELLIDO"
        placeholder="Segundo apellido"
        name={`segundo_apellido_${index}`}
        data={segundoApellido}
        labelFont={subLabelFont}
        title="Optional"
      />
    </Row>

  </Column>
);

const getBeneficiarios = beneficiarios => beneficiarios.map((beneficiario, index) => (
  <Beneficiario {...Object.assign({}, { index: index + 1 }, beneficiario)} />));


// Beneficiaros Section definiton
class BeneficiariosSection extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = { benefList: getBeneficiarios(data) };
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
