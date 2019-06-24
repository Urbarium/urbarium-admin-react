import React from 'react';
import Input from './LabeledInput';
import Button from './ButtonText';
import IconTitle from './IconTitle';
import { Row, Column } from '../Structural/index';

// Single beneficiaro definition
const Beneficiario = ({
  index, cedula, nombre, apellido1, apellido2,
}) => (
  <Column gap={15}>

    <IconTitle icon="person">{`Beneficiario ${index}`}</IconTitle>

    <Input
      type="text"
      label="Cédula"
      placeholder="0 0000 0000"
      data={cedula}
      name={`cedula_${index}`}
      title="At least nine digits"
      pattern="^[\d]{9,}$"
      required
    />

    <Row>
      <Input
        type="text"
        label="Nombre"
        placeholder="Nombre"
        name={`nombre_${index}`}
        data={nombre}
        required
      />
      <Input
        type="text"
        label="Primer Apellido"
        placeholder="Primer apellido"
        name={`primer_apellido_${index}`}
        data={apellido1}
        required
      />
      <Input
        type="text"
        label="Segundo Apellido"
        placeholder="Segundo apellido"
        name={`segundo_apellido_${index}`}
        data={apellido2}
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
      <Column gap={15}>
        {benefList}

        <Column gap={1} justify="end">
          {benefList.length > 1
            ? <Button onClick={() => this.handleClickRemove()}>Remover beneficiario -</Button>
            : null}
          <Button onClick={() => this.handleClickAdd()}>Agregar beneficiario +</Button>
        </Column>
      </Column>
    );
  }
}

BeneficiariosSection.defaultProps = {
  data: [{}],
};

export default BeneficiariosSection;
