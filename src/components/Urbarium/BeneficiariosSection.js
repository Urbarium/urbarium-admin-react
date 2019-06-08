import React from 'react';
import styled from 'styled-components';
import Input from './LabeledInput';
import Label from './Label';
import Button from './ButtonText';
import { primary } from '../colors';
import fonts from '../fonts';

// Single beneficiaro definition
const subLabelFont = `${fonts.subLabel} color: ${primary.passive};`

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Beneficiario = ({index, cedula, nombre, apellido1, apellido2}) => (
    <div style={{margin: "20px 0"}}>
        <Label>{"Beneficiario " + index}</Label>
        <Input type="textbox" label="CEDULA" placeholder="0 0000 0000" data={cedula} labelFont={subLabelFont}/>
        <FlexDiv>
            <Input type="textbox" label="NOMBRE" placeholder="Nombre" data={nombre} labelFont={subLabelFont}/>
            <Input type="textbox" label="PRIMER APELLIDO" placeholder="Primer apellido" data={apellido1} labelFont={subLabelFont}/>
            <Input type="textbox" label="SEGUNDO APELLIDO" placeholder="Segundo apellido" data={apellido2} labelFont={subLabelFont}/>
        </FlexDiv>
    </div>
);

// Beneficiaros Section definiton
class BeneficiariosSection extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = { benefList: this.getBeneficiarios(this.props.data)}
    }

    getBeneficiarios(beneficiarios){
        return (
            beneficiarios.map((beneficiario, index)  => (
                <Beneficiario {...Object.assign({}, {index: index + 1}, beneficiario)}/>)
            )
        )
    }

    handleClickAdd() {
        const newList = this.state.benefList.slice();
        newList.push(Beneficiario({index: newList.length + 1}))
        this.setState({
            benefList: newList,
        })
    }
    handleClickRemove() {
        const newList = this.state.benefList.slice();
        newList.pop()
        this.setState({
            benefList: newList,
        })
    }

    render() {
        return(
            <div>
                {this.state.benefList}
                {this.state.benefList.length > 1 ? 
                    <Button onClick={() => this.handleClickRemove()}>Remover beneficiario -</Button>
                    : null}
                <Button onClick={() => this.handleClickAdd()}>Agregar beneficiario +</Button>                
            </div>
        )
    }
};

BeneficiariosSection.defaultProps = {
    data: [{}]
}

export default BeneficiariosSection;