import React from 'react';
import styled from 'styled-components/macro';
import { primary } from '../colors';
import fonts from '../fonts';


// boring css due to lack of assets for the checkbox
const Check = styled.div`
	opacity: 0;
	transition: opacity 0.2s ease-in-out;
	position: absolute;
	top: 50%;
	right: 50%;
    width: 0px;
	height: 0px;
	background-color: ${props => props.color};
	::before {
        content: "";
        position: absolute;
        width: ${props => props.size * 0.9333}px;
        height: ${props => props.size * 0.1333}px;
        border-radius: ${props => props.size * 0.0667}px;
        background-color: inherit
        transform: translate(-40%, -35%) rotate(-50deg);
	}
	::after {
        content: "";
        position: absolute;
        width: ${props => props.size * 0.4}px;
        height: ${props => props.size * 0.1333}px;
        border-radius: ${props => props.size * 0.0667}px;
        background-color: inherit
        transform: translate(-115%, 130%) rotate(40deg);
	}
`;

const Box = styled.div`
	display: inline-block;
	width: ${props => props.size * 1}px;
	height: ${props => props.size * 1}px;
	border: ${props => props.size * 0.0667}px ${props => props.color} solid;
	border-radius: ${props => props.size * 0.133}px;
	position: relative;
`;

const Checkbox = ({size, checkColor, boxColor}) => ( 
		<Box size={size} color={boxColor}>
			<Check size={size} color={checkColor}/>
		</Box>
);

const Input = styled.input`
    display: none;
	&:checked + div > div {
		opacity: 1;
	}
`

const Label = styled.p`    
    color: ${primary.gray};
    ${props => props.font}
	display: inline;
	margin: 0px 10px;
	::selection {
		color: inherit;
		background-color: inherit;
	}
`;
const OptionWrapper = styled.label`
	cursor: pointer;
	margin: 10px 10px 0 0;
`;

const CheckboxWrapper = styled.div`
    display: grid;
    justify-content: start;
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
    grid-auto-flow: dense;
`;

class CheckboxOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.data};
    };

    handleOnChange() {
        this.setState((prev, props)=> {return {data: !prev.data}})
    };

    getLabel() {
        return <Label font={this.props.font}>{this.props.value}</Label>
    }

    render() {
      return(
        <OptionWrapper>
            {this.props.right ? this.getLabel() : null} 
            <Input 
                type = "checkbox" 
                value = {this.props.value} 
                checked = {this.state.data} 
                onChange = {() => this.handleOnChange()}
            />			
            <Checkbox 
                size = {this.props.size} 
                checkColor = {this.props.checkColor} 
                boxColor = {this.props.boxColor}
            />
            {this.props.right ? null : this.getLabel()} 
        </OptionWrapper>
      );  
    };
};

CheckboxOption.defaultProps = {
    right: false,
    font: fonts.optionLabel,
    size: 15,
    checkColor: primary.primary,
    boxColor: primary.passive
};

const InputCheckbox = ({data = [], options = ["Option 1"], right, font, size, checkColor, boxColor}) => (
    <CheckboxWrapper>
        {options.map((option, index) => {
            return (
                <CheckboxOption
                    data = {data.indexOf(index + 1) !== -1}
                    value = {option}
                    right = {right}
                    font = {font}
                    size = {size}
                    checkColor = {checkColor}
                    boxColor = {boxColor}
                />)
            })
        }
    </CheckboxWrapper>
);

export default InputCheckbox;