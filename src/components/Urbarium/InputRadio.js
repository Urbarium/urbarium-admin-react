import React from 'react';
import styled from 'styled-components';
import { primary, secondary } from '../../colors';
import fonts from '../../fonts';
import { FlexGrid } from '../Structural/index';
import Label from './Label';
import OptionWrapper from './OptionWrapper';


const Radio = styled.div`
    display: inline-block;
    margin: 0px 5px;
    transition: transform 0.1s ease-in-out, border-color 0.1s ease-in-out;
    min-width: ${props => props.size}px;
    max-width: ${props => props.size}px;
    min-height: ${props => props.size}px;
    max-height: ${props => props.size}px;
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

class RadioOption extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = { data };
  }

  handleOnChange(event) {
    this.setState({ data: event.target.checked });
  }

  render() {
    const {
      name, value, right, size, font, checkColor, boxColor,
    } = this.props;
    const { data } = this.state;
    return (
      <OptionWrapper>
        {right ? <Label font={font} color={primary.passive}>{value}</Label> : null}
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
        {right ? null : <Label font={font} color={primary.passive}>{value}</Label>}
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
  data = [], options = ['Option 1'], grid = 0, right, font, size, checkColor, boxColor, name,
}) => (
  <FlexGrid grid={grid}>
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
  </FlexGrid>
);

export default InputRadio;
