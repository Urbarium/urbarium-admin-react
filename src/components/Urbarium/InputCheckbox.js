import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { mapDispatchToPropsForInputs } from 'actions/bonoActions';
import { accessRecursively } from 'helpers/functions';
import { primary, secondary } from 'config/colors';
import { FlexGrid } from 'components/Structural/index';
import OptionWrapper from './OptionWrapper';
import OptionLabel from './OptionLabel';


// checkbox & check styling

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

// Checkbox option ( checkbox + label )

class CheckboxOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: props.data };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { value, updateField } = this.props;
    this.setState((prev) => {
      updateField({ field: value, value: !prev.checked });
      return { checked: !prev.checked };
    });
  }

  render() {
    const {
      value, name, right, size, checkColor, boxColor,
    } = this.props;
    const { checked } = this.state;
    return (
      <OptionWrapper onMouseUp={this.handleClick}>
        {right ? <OptionLabel>{name}</OptionLabel> : null}
        <Input
          type="checkbox"
          name={value}
          checked={checked}
        />
        <Checkbox
          size={size}
          checkColor={checkColor}
          boxColor={boxColor}
          right={right}
        />
        {right ? null : <OptionLabel>{name}</OptionLabel>}
      </OptionWrapper>
    );
  }
}

CheckboxOption.defaultProps = {
  size: 15,
  checkColor: primary.primary,
  boxColor: secondary.lightgray,
  updateField() {},
  data: null,
};

const mapStateToProps = (state, ownProps) => ({
  data: accessRecursively(state, ['bonos', 'currentBono', ...ownProps.value.split('-')]),
});

const ConnectedCheckboxOption = connect(mapStateToProps, mapDispatchToPropsForInputs)(CheckboxOption);

const Option = ({ connected, ...otherProps }) => (
  connected ? <ConnectedCheckboxOption {...otherProps} /> : <CheckboxOption {...otherProps} />
);

// Checkbox options group
const InputCheckbox = ({
  options, grid, right, name, connected,
}) => (
  <FlexGrid grid={grid}>
    {options.map(option => (
      <Option
        value={name === 'unnamed_checkbox_group' ? option.value : `${name}-${option.value}`}
        name={option.name}
        right={right}
        connected={connected}
      />
    ))
    }
  </FlexGrid>
);

InputCheckbox.defaultProps = {
  options: [{ name: 'Option 1', value: 'option_1' }],
  name: 'unnamed_checkbox_group',
  grid: 0,
  right: false,
};

const ConnectedInputCheckbox = props => <InputCheckbox {...props} connected />;
export { InputCheckbox as default, ConnectedInputCheckbox };
