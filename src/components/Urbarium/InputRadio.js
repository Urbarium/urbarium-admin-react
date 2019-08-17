import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { mapDispatchToPropsForInputs, mapStateToPropsForInputs } from 'actions/bonoActions';
import { primary, secondary } from 'config/colors';
import { FlexGrid } from 'components/Structural/index';
import OptionWrapper from './OptionWrapper';
import OptionLabel from './OptionLabel';

// radio button styling

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

// Single radio option (button + label)

const RadioOption = ({
  groupRight,
  optionValue,
  optionName,
  checked,
  onMouseUp,
  radioSize,
  radioCheckColor,
  radioBoxColor,
}) => (
  <OptionWrapper onMouseUp={onMouseUp}>
    {groupRight ? <OptionLabel>{optionName}</OptionLabel> : null}
    <Input
      type="radio"
      value={optionValue}
      checked={checked}
    />
    <Radio
      size={radioSize}
      checkColor={radioCheckColor}
      boxColor={radioBoxColor}
    />
    {groupRight ? null : <OptionLabel>{optionName}</OptionLabel>}
  </OptionWrapper>
);

RadioOption.defaultProps = {
  radioSize: 15,
  radioCheckColor: primary.primary,
  radioBoxColor: secondary.lightgray,
};


// Radio Group

class InputRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.data };
  }

  handleClick(value) {
    this.setState({ value });
    const { updateField, name } = this.props;
    updateField({ field: name, value });
  }

  render() {
    const { options, right, grid } = this.props;
    const { value } = this.state;
    return (
      <FlexGrid grid={grid}>
        {options.map(option => (
          <RadioOption
            groupRight={right}
            optionValue={option.value}
            optionName={option.name}
            checked={value === option.value}
            onMouseUp={() => this.handleClick(option.value)}
          />
        ))
        }
      </FlexGrid>
    );
  }
}

InputRadio.defaultProps = {
  name: 'unnamed_radiogroup',
  options: [{ name: 'Option 1', value: 'option_1' }],
  right: false,
  grid: 0,
  data: null,
  updateField() {},
};


const ConnectedInputRadio = connect(mapStateToPropsForInputs, mapDispatchToPropsForInputs)(InputRadio);
export { InputRadio as default, ConnectedInputRadio };
