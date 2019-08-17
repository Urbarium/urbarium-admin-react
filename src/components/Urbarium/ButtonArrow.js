import React from 'react';
import styled from 'styled-components';
import { primary } from 'config/colors';
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
`;

class ButtonArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animate: false, color: primary.passive };
  }

  changeState() {
    const { animate } = this.state;
    const { onClick } = this.props;
    this.setState({ animate: !animate });
    onClick();
  }

  // Button needs a data-attribute so css can read it and execute the animation
  render() {
    const { animate, color } = this.state;
    const state = Object.assign({}, this.state);
    return (
      <Button
        data-animate={animate}
        onMouseDown={() => this.changeState()}
        onMouseEnter={() => this.setState({ ...state, color: primary.primary })}
        onMouseLeave={() => this.setState({ ...state, color: primary.passive })}
      >
        <Arrow width={8} color={color} />
      </Button>
    );
  }
}

export default ButtonArrow;
