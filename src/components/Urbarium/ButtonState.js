import React from 'react';
import styled from 'styled-components/macro';
import Arrow from './Arrow';


const Button = styled.button`
    height: 30px;
    width: 105px;
    display: flex;
    direction: row;
    cursor: pointer;
    font-family: Sans-Serif;
    font-size: 12px;
    border-radius: 15px;
    color: ${props => props.color};
    background-color: ${props => props.backColor};
    border: none;
    box-sizing: border-box;
    padding-left: 15px;
    :focus {
       outline: none;
    }
`

const ArrowContainer = styled.div`
    position: relative;
    width: 0px;
    height: 0px;
    bottom: 15px;
    left: 85px;
`

const states = [
    {
        text: "Por hacer",
        color: "#0077FF",
        backColor: "#EBEDF8",
    },
    {
        text: "En proceso",
        color: "white",
        backColor: "#0077FF",
    },
    {
        text: "Finalizado",
        color: "white",
        backColor: "#7ED321",
    }
];


class ButtonState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index: this.props.state - 1}
    }
    cycleState(){
        let newIndex = this.state.index === 2 ? 0 : this.state.index + 1;
        this.setState({index: newIndex})
    }
    render() {
        return (
                <div className="button-state-container">
                    <Button  onClick={() => this.cycleState()} 
                        color={states[this.state.index].color} 
                        backColor={states[this.state.index].backColor}>                                    
                        {states[this.state.index].text}                     
                    </Button>
                    <ArrowContainer>
                        <Arrow color={states[this.state.index].color} width={6}/> 
                    </ArrowContainer>
                </div>
        )
    }
}

ButtonState.defaultProps = {
    state: 1,
}

export default ButtonState;