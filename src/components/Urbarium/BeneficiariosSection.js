/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import { actionAddBeneficiario, actionRemoveBeneficiario } from 'actions/bonoActions';
import { ConnectedLabeledInput as Input } from './LabeledInput';
import Button from './ButtonText';
import IconTitle from './IconTitle';
import { Row, Column } from 'components/Structural/index';

// Single beneficiaro definition
const Beneficiario = ({ index }) => (
  <Column gap={15}>
    <IconTitle icon="person">{`Beneficiario ${index}`}</IconTitle>
    <Input
      type="text"
      label="Cédula"
      placeholder="0 0000 0000"
      name={`beneficiarios-${index}-cedula`}
      title="At least nine digits"
      pattern="^[\d]{9,}$"
    />
    <Row>
      <Input
        type="text"
        label="Nombre"
        placeholder="Nombre"
        name={`beneficiarios-${index}-nombre`}
      />
      <Input
        type="text"
        label="Primer Apellido"
        placeholder="Primer apellido"
        name={`beneficiarios-${index}-primer_apellido`}
      />
      <Input
        type="text"
        label="Segundo Apellido"
        placeholder="Segundo apellido"
        name={`beneficiarios-${index}-segundo_apellido`}
      />
    </Row>
  </Column>
);

const getBeneficiarios = count => [...Array(count).keys()].map(index => <Beneficiario index={index + 1} />);

const mapDispathToProps = dispatch => ({
  addBeneficiario: payload => dispatch(actionAddBeneficiario(payload)),
  removeBeneficiario: payload => dispatch(actionRemoveBeneficiario(payload)),
});

class BeneficiariosSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  handleClickAdd() {
    const { addBeneficiario } = this.props;
    this.setState((prev) => {
      const newCount = prev.count + 1;
      addBeneficiario({ index: newCount });
      return ({ count: newCount });
    });
  }

  handleClickRemove() {
    const { removeBeneficiario } = this.props;
    this.setState((prev) => {
      const newCount = prev.count - 1;
      removeBeneficiario({ index: prev.count });
      return ({ count: newCount });
    });
  }

  render() {
    const { count } = this.state;
    return (
      <Column gap={15}>
        {getBeneficiarios(count)}

        <Column gap={1} justify="end">
          {count > 1
            ? <Button onClick={() => this.handleClickRemove()}>Remover beneficiario -</Button>
            : null}
          <Button onClick={() => this.handleClickAdd()}>Agregar beneficiario +</Button>
        </Column>
      </Column>
    );
  }
}

BeneficiariosSection.defaultProps = {};

export default connect(null, mapDispathToProps)(BeneficiariosSection);
