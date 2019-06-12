import React from 'react';
import styled from 'styled-components';
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
`;

const ArrowContainer = styled.div`
    position: relative;
    width: 0px;
    height: 0px;
    bottom: 15px;
    left: 85px;
`;

const states = [
  {
    text: 'Por hacer',
    color: '#0077FF',
    backColor: '#EBEDF8',
  },
  {
    text: 'En proceso',
    color: 'white',
    backColor: '#0077FF',
  },
  {
    text: 'Finalizado',
    color: 'white',
    backColor: '#7ED321',
  },
];


class ButtonState extends React.Component {
  constructor(props) {
    super(props);
    const { state } = props.state;
    this.state = { index: state - 1 };
  }

  cycleState() {
    const { index } = this.state;
    const newIndex = index === 2 ? 0 : index + 1;
    this.setState({ index: newIndex });
  }

  render() {
    const { index } = this.state;
    return (
      <div className="button-state-container">
        <Button
          onClick={() => this.cycleState()}
          color={states[index].color}
          backColor={states[index].backColor}
        >
          {states[index].text}
        </Button>
        <ArrowContainer>
          <Arrow color={states[index].color} width={6} />
        </ArrowContainer>
      </div>
    );
  }
}

ButtonState.defaultProps = {
  state: 1,
};

export default ButtonState;
