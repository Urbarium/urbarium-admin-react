import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { mapDispatchToPropsForInputs, mapStateToPropsForInputs } from 'actions/bonoActions';
import { TextAreaStyle as style, InputField } from './urbarium-styles';

const getHeight = (props) => {
  let height;
  if (props.theme.textArea_height) {
    height = props.theme.textArea_height;
  } else { height = props.fill ? '100%' : style.height; }
  return height;
};

const TextArea = styled(InputField)`
  width: ${props => (props.fill ? ' 100%' : style.width)};
  height: ${props => getHeight(props)};
  padding-top: 10px;
  margin: 0px;
  resize: none;
  border: ${style.border};
  border-radius: ${style.borderRadius};
  background-color: ${style.backgroundColor};
  font-size: ${style.fontSize};
  color: ${style.color};
`;


class InputTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(event) {
    const { updateField, name } = this.props;
    const { value } = event.target;
    updateField({ field: name, value });
  }

  render() {
    const { data, updateField, ...otherProps } = this.props;
    return (
      <TextArea
        as="textarea"
        defaultValue={data}
        onBlur={this.handleBlur}
        {...otherProps}
      />
    );
  }
}

InputTextArea.defaultProps = {
  fill: false,
  name: "unnamed_textarea",
  data: null,
  updateField() {},
};

const ConnectedInputTextArea = connect(mapStateToPropsForInputs, mapDispatchToPropsForInputs)(InputTextArea);
export { InputTextArea as default, ConnectedInputTextArea };
