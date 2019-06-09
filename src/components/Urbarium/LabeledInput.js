import React from 'react';
import styled from 'styled-components';
import Label from './Label';
import InputTextBox from './InputTextBox';
import InputDropdown from './InputDropdown';
import InputTextArea from './InputTextArea';
import InputSelection from './InputSelection';
import InputCheckbox from './InputCheckbox';


const Div = styled.div`
    height: 100%;
    margin-bottom: 10px;
`; 

const getInput = (type, props) => {
    switch (type) {
        case "textbox": return <InputTextBox {...props}/>
        case "textarea": return <InputTextArea {...props}/>
        case "dropdown": return <InputDropdown {...props}/>
        case "checkbox": return <InputCheckbox {...props}/>
        case "radio": return <InputSelection {...props}/>
        default: return null;
    }
}

const LabeledInput = props => {
    const inputProps = Object.assign({}, props, {font: props.inputFont});
    // there's probably a better pattern for this
    delete inputProps.inputFont;
    delete inputProps.labelFont;
    delete inputProps.label
    delete inputProps.type;
    return (
        <Div>        
            {props.label ? <Label font={props.labelFont}>{props.label}</Label> : null}        
            {getInput(props.type, inputProps)}
        </Div>
    )
}


export default LabeledInput;