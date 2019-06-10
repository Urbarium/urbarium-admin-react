import React from 'react';
import styled from 'styled-components'
import { primary } from '../../colors';
import Arrow from './Arrow';

const Button = styled.button`
    border: none;
    position: relative;
    width: 20px;
    height: 20px;
    background-color: transparent;
    cursor: pointer;
    transition: transform 0.2s;

    &[data-animate=true] {
        transform: rotate(180deg);
    }

    :focus {
        outline: none;
    }
`

class ButtonArrow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {animate: false, color: primary.passive};
    }

    changeState() {
        this.setState({animate: !this.state.animate});
        this.props.onClick();
    }

    // Button needs a data-attribute so css can read it and execute the animation
    render() {
        return(
            <Button data-animate={this.state.animate}
                onMouseDown={() => this.changeState()} 
                onMouseEnter={() => this.setState({...this.state, color: primary.primary})}
                onMouseLeave={() => this.setState({...this.state, color: primary.passive})}>                
                <Arrow width={9} color={this.state.color}/>
            </Button>
        )
    }
}

export default ButtonArrow;

