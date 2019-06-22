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
      groupName, groupRight, optionValue, optionName, labelFont, radioSize, radioCheckColor, radioBoxColor,
    } = this.props;
    const { data } = this.state;
    return (
      <OptionWrapper>
        {groupRight ? <Label font={labelFont} color={primary.passive}>{optionName}</Label> : null}
        <Input
          type="radio"
          name={groupName}
          value={optionValue}
          checked={data}
          onChange={event => this.handleOnChange(event)}
        />
        <Radio
          size={radioSize}
          checkColor={radioCheckColor}
          boxColor={radioBoxColor}
        />
        {groupRight ? null : <Label font={labelFont} color={primary.passive}>{optionName}</Label>}
      </OptionWrapper>
    );
  }
}

RadioOption.defaultProps = {
  groupName: 'UnnamedRadioGroup',
  groupRight: false,
  labelFont: fonts.optionLabel,
  radioSize: 15,
  radioCheckColor: primary.primary,
  radioBoxColor: secondary.lightgray,
};

const InputRadio = ({
  data = [],
  options = [{ name: 'Option 1', value: 'option_1' }],
  grid = 0,
  name,
  right,
  font,
  size,
  checkColor,
  boxColor,
}) => (
  <FlexGrid grid={grid}>
    {options.map(option => (
      <RadioOption
        groupName={name}
        groupRight={right}
        data={data.indexOf(option.value) !== -1}
        optionValue={option.value}
        optionName={option.name}
        labelFont={font}
        radioSize={size}
        radioCheckColor={checkColor}
        radioBoxColor={boxColor}
      />
    ))
    }
  </FlexGrid>
);

export default InputRadio;
