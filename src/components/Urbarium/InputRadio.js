import React from 'react';
import styled from 'styled-components';
import { primary, secondary } from '../../colors';
import fonts from '../../fonts';


// boring css due to lack of assets for the checkbox
const Radio = styled.div`
    display: inline-block;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    position: relative;
    border: ${props => `${props.size * 0.05}px ${props.boxColor}`} solid;

    ::before {
        content: "";
        position: absolute;
        opacity: 0;
        width: ${props => props.size * 0.75}px;
        height: ${props => props.size * 0.75}px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: ${props => props.checkColor};
    }
`;

const Input = styled.input`
    display: none;
    :checked + div::before {
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

const RadioWrapper = styled.div`
    display: grid;
    justify-content: start;
    grid-template-columns: repeat(${props => props.count}, auto);
    grid-auto-flow: dense;
`;

class RadioOption extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = { data };
  }

  getLabel() {
    const { font, value } = this.props;
    return <Label font={font}>{value}</Label>;
  }

  handleOnChange(event) {
    this.setState({ data: event.target.checked });
  }

  render() {
    const {
      name, value, right, size, checkColor, boxColor,
    } = this.props;
    const { data } = this.state;
    return (
      <OptionWrapper>
        {right ? this.getLabel() : null}
        <Input
          type="radio"
          name={name}
          value={value}
          checked={data}
          onChange={event => this.handleOnChange(event)}
        />
        <Radio
          size={size}
          checkColor={checkColor}
          boxColor={boxColor}
        />
        {right ? null : this.getLabel()}
      </OptionWrapper>
    );
  }
}

RadioOption.defaultProps = {
  name: 'RadioGroup',
  right: false,
  font: fonts.optionLabel,
  size: 15,
  checkColor: primary.primary,
  boxColor: secondary.lightgray,
};

const InputRadio = ({
  data = [], options = ['Option 1'], right, font, size, checkColor, boxColor, name,
}) => (
  <RadioWrapper count={options.length}>
    {options.map((option, index) => (
      <RadioOption
        data={data.indexOf(index + 1) !== -1}
        value={option}
        right={right}
        font={font}
        size={size}
        checkColor={checkColor}
        boxColor={boxColor}
        name={name}
      />
    ))
    }
  </RadioWrapper>
);

export default InputRadio;
