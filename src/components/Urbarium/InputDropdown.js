import React from 'react';
import styled from 'styled-components';
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

class InputDropDown extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = { dataDefault: !data };
  }

  handleOnChange(event) {
    const { options, changeHandler } = this.props;
    this.setState({ dataDefault: false });
    const selectedIndex = options.findIndex(element => element.value === event.target.value);
    changeHandler(selectedIndex);
  }

  render() {
    const {
      name, placeholder, options, data, required, disabled,
    } = this.props;
    const { dataDefault } = this.state;
    return (
      <div className="InputDropDown">
        {/* data-default is used as a data property to alter style using css selectors */}
        <DropDown
          name={name}
          data-default={dataDefault}
          defaultValue={data || ""}
          onChange={event => this.handleOnChange(event)}
          disabled={disabled}
          required={required}
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

InputDropDown.defaultProps = {
  placeholder: ' ',
  name: 'unnamed_dropdown',
  options: [{ name: 'Option 1', value: 'option_1' }],
  data: undefined,
  disabled: false,
  required: false,
  changeHandler() {},
};

export default InputDropDown;
