import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';
import { InputField } from './urbarium-styles';

const StyledInput = styled(InputField)`
  width: fit-content;
  height: 30px;
  border-radius: 15px;
  padding-right: 30px;
  font-size: 12px;
  appearance: none;
  border: none;

  :focus, :enabled:hover {
    border: none;
  }
`;

const StateInputWrapper = styled.div`
  width: fit-content;
  position: relative;
`;

const DropDown = props => <StyledInput as="select" {...props} />;

const StateThemes = {
  gray: { input_color: '#0077FF', input_backgroundColor: '#EBEDF8' },
  green: { input_color: '#FFFFFF', input_backgroundColor: '#7ED321' },
  blue: { input_color: '#FFFFFF', input_backgroundColor: '#0077FF' },
};

const ArrowContainer = styled.div`
  width: 0px;
  height: 0px;
  position: absolute;
  bottom: 15px;
  right: 20px;
`;


class InputState extends React.Component {
  constructor(props) {
    super(props);
    const { options } = props;
    this.TaggedOptions = options.map(option => <option value={option.value} key={option.value}>{option.name}</option>);
    this.state = { theme: StateThemes.gray };
  }

  getTheme(value) {
    const { options } = this.props;
    return options.find(option => option.value === value).style;
  }

  handleChange(event) {
    const style = this.getTheme(event.target.value);
    this.setState(() => ({ theme: StateThemes[style] }));
  }

  render() {
    const { name, data } = this.props;
    const { theme } = this.state;
    return (
      <StateInputWrapper>
        {/* data-default is used as a data property to alter style using css selectors */}
        <DropDown
          name={name}
          defaultValue={data}
          theme={theme}
          onChange={event => this.handleChange(event)}
        >
          {this.TaggedOptions}
        </DropDown>
        <ArrowContainer>
          <Arrow width={5} color={theme.input_color} />
        </ArrowContainer>
      </StateInputWrapper>
    );
  }
}

InputState.defaultProps = {
  name: 'unnamed_dropdown',
  options: [{ name: 'Initial State', value: 'initial_state', style: 'gray' }],
  data: undefined,
};

export default InputState;
