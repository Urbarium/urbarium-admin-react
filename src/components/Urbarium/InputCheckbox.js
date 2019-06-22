import React from 'react';
import styled from 'styled-components';
import { primary, secondary } from '../../colors';
import fonts from '../../fonts';
import { FlexGrid } from '../Structural/index';
import Label from './Label';
import OptionWrapper from './OptionWrapper';

const Check = styled.div`
  opacity: 0;
  transition: opacity 0.2s ease-in-out
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
  margin-${props => (props.right ? 'left' : 'right')}: 5px;
  display: inline-block;
  transition: transform 0.1s ease-in-out, border-color 0.1s ease-in-out;
  min-width: ${props => props.size * 1}px;
  max-width: ${props => props.size * 1}px;
  min-height: ${props => props.size * 1}px;
  max-height: ${props => props.size * 1}px;
  border: ${props => props.size * 0.0667}px ${props => props.color} solid;
  border-radius: ${props => props.size * 0.133}px;
  position: relative;
`;

const Checkbox = ({
  size, checkColor, boxColor, right,
}) => (
  <Box size={size} color={boxColor} right={right}>
    <Check size={size} color={checkColor} />
  </Box>
);

const Input = styled.input`
  display: none;
  &:checked + div > div {
      opacity: 1;
  }
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
      value, name, right, font, size, checkColor, boxColor,
    } = this.props;
    const { data } = this.state;
    return (
      <OptionWrapper>
        {right ? <Label font={font} color={primary.passive}>{name}</Label> : null}
        <Input
          type="checkbox"
          name={value}
          checked={data}
          value={data}
          onChange={() => this.handleOnChange()}
        />
        <Checkbox
          size={size}
          checkColor={checkColor}
          boxColor={boxColor}
          right={right}
        />
        {right ? null : <Label font={font} color={primary.passive}>{name}</Label>}
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
  data = [],
  options = [{ name: 'Option 1', value: 'option_1' }],
  grid = 0,
  right,
  font,
  size,
  checkColor,
  boxColor,
}) => (
  <FlexGrid grid={grid}>
    {options.map(option => (
      <CheckboxOption
        data={data.indexOf(option.value) !== -1}
        value={option.value}
        name={option.name}
        right={right}
        font={font}
        size={size}
        checkColor={checkColor}
        boxColor={boxColor}
      />
    ))
    }
  </FlexGrid>
);

export default InputCheckbox;
