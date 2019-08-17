import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { mapDispatchToPropsForInputs, mapStateToPropsForInputs } from 'actions/bonoActions';
import Arrow from './Arrow';
import { colors, InputField } from './urbarium-styles';

const StyledInput = styled(InputField)`
  appearance: none;

  &[data-default=true] { 
      color: ${colors.passive};
  }
  option {
      color: ${colors.black};
  }
`;

const DropDown = props => <StyledInput as="select" {...props} />;

const ArrowContainer = styled.div`
    width: 0px;
    height: 0px;
    position: relative;
    bottom: 18px;
    left: 215px;
 `;

const getOptions = options => (
  options.map(option => <option value={option.value} key={option.value}>{option.name}</option>)
);

class InputDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  // dropdown group can change props of individual dropdowns bypassing the onChange event
  componentWillReceiveProps(nextProps) {
    const { disabled, options } = this.props;
    if (nextProps.disabled !== disabled || nextProps.options[0] !== options[0]) {
      this.triggerUpdate(null);
    }
  }

  handleChange(event) {
    const { options, changeHandler } = this.props;
    const { value } = event.target;
    this.triggerUpdate(value);
    if (changeHandler) {
      const selectedIndex = options.findIndex(element => element.value === value);
      changeHandler(selectedIndex);
    }
  }

  triggerUpdate(value) {
    const { name, updateField } = this.props;
    updateField({ field: name, value });
  }

  render() {
    const {
      name, placeholder, options, data, required, disabled,
    } = this.props;
    return (
      <div className="InputDropDown">
        {/* data-default is used as a data property to alter style using css selectors */}
        <DropDown
          name={name}
          data-default={false}
          defaultValue={data}
          disabled={disabled}
          required={required}
          onChange={this.handleChange}
        >
          <option hidden value="" key={placeholder}>{placeholder}</option>
          {getOptions(options)}
        </DropDown>
        <ArrowContainer>
          <Arrow width={8} color={colors.primary} />
        </ArrowContainer>
      </div>
    );
  }
}

InputDropdown.defaultProps = {
  placeholder: ' ',
  name: 'unnamed_dropdown',
  options: [{ name: 'Option 1', value: 'option_1' }],
  changeHandler: null,
  data: null,
  updateField() {},
};

const ConnectedInputDropdown = connect(mapStateToPropsForInputs, mapDispatchToPropsForInputs)(InputDropdown);
export { InputDropdown as default, ConnectedInputDropdown };
