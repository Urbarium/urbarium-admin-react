// DEPRECATED
// DEPRECATED
// DEPRECATED


import React from 'react';
import styled from 'styled-components';
import colors from '../../colors';
import fonts from '../../fonts';

const Input = styled.input`
    /* Nothing yet
     have to change the default checkbox image 
     but I don't have any assets yet */
`
const Label = styled.label`
    color: ${colors.primary.gray};
    ${props => props.font}
`

const SmallDiv = styled.div`
    margin: 10px 10px 0 0;
`
const BigDiv = styled.div`
    display: grid;
    justify-content: start;
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
    grid-auto-flow: dense;
`

class SelectionOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.data};
    };

    handleOnChange(event) {
        this.setState({data: event.target.checked})
    };

    getLabel() { 
        return (
            <Label htmlFor = {this.props.value} font = {this.props.font}>
                {this.props.value}
            </Label>
        );
    };

    render() {
      return(
        <SmallDiv>
            {this.props.right ? this.getLabel() : null}
            <Input            
                id = {this.props.value}
                value = {this.props.value}
                name = {this.props.name}
                type = {this.props.radio ? "radio" : "checkbox"}
                checked = {this.state.data}
                onChange = {(event) => this.handleOnChange(event)}
            />
            {this.props.right ? null : this.getLabel()}
        </SmallDiv>
      );  
    };
};

function getInputOptions(data = [], options = ["option1"], name = "group", 
right = false, radio = false, font = fonts.optionLabel) {
    return (
        options.map((option, index) => {
            return (
            <SelectionOption
                data = {data.indexOf(index + 1) !== -1}
                value = {option}
                name = {name}
                right = {right}
                font = {font}
                radio = {radio}
            />)}
        )
    );
};

const InputSelection = ({data, options, name, right, radio, font}) => (
    <BigDiv>
        {getInputOptions(data, options, name, right, radio, font)}
    </BigDiv>
);

export default InputSelection;