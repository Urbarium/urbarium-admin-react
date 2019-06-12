import React from 'react';
import styled from 'styled-components';
import { primary, secondary } from '../../colors';
import fonts from '../../fonts';


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
        background-color: inherit;
        transform: translate(-40%, -35%) rotate(-50deg);
    }
    ::after {
        content: "";
        position: absolute;
        width: ${props => props.size * 0.4}px;
        height: ${props => props.size * 0.1333}px;
        border-radius: ${props => props.size * 0.0667}px;
        background-color: inherit;
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

const Checkbox = ({ size, checkColor, boxColor }) => (
  <Box size={size} color={boxColor}>
    <Check size={size} color={checkColor} />
  </Box>
);

const Input = styled.input`
    display: none;
    &:checked + div > div {
        opacity: 1;
    }
`;

const Label = styled.p`
    color: ${primary.passive};
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
    grid-template-columns: repeat(${props => props.count}, auto);
    grid-template-rows: 1fr;
    grid-auto-flow: dense;
`;

class CheckboxOption extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = { data };
  }

  getLabel() {
    const { font, value } = this.props;
    return <Label font={font}>{value}</Label>;
  }

  handleOnChange() {
    this.setState(prev => ({ data: !prev.data }));
  }

  render() {
    const {
      right, value, size, checkColor, boxColor,
    } = this.props;
    const { data } = this.state;
    return (
      <OptionWrapper>
        {right ? this.getLabel() : null}
        <Input
          type="checkbox"
          value={value}
          checked={data}
          onChange={() => this.handleOnChange()}
        />
        <Checkbox
          size={size}
          checkColor={checkColor}
          boxColor={boxColor}
        />
        {right ? null : this.getLabel()}
      </OptionWrapper>
    );
  }
}

CheckboxOption.defaultProps = {
  right: false,
  font: fonts.optionLabel,
  size: 15,
  checkColor: primary.primary,
  boxColor: secondary.lightgray,
};

const InputCheckbox = ({
  data = [], options = ['Option 1'], right, font, size, checkColor, boxColor,
}) => (
  <CheckboxWrapper count={options.length}>
    {options.map((option, index) => (
      <CheckboxOption
        data={data.indexOf(index + 1) !== -1}
        value={option}
        right={right}
        font={font}
        size={size}
        checkColor={checkColor}
        boxColor={boxColor}
      />
    ))
    }
  </CheckboxWrapper>
);

export default InputCheckbox;
