import React from 'react';
import { connect } from 'react-redux';
import { actionUpdateBonoField } from '../../actions/bonoActions';
import { InputField } from './urbarium-styles';


const mapDispathToProps = dispatch => ({ updateField: payload => dispatch(actionUpdateBonoField(payload)) });


class InputTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(event) {
    const { name, updateField } = this.props;
    const { value } = event.target;
    const payload = { field: name, value };
    updateField(payload);
  }

  render() {
    const { data, updateField, ...otherProps } = this.props;
    return (
      <InputField defaultValue={data} onBlur={this.handleBlur} {...otherProps} />
    );
  }
}

InputTextBox.defaultProps = {
  type: 'text',
  name: 'unnamed_textbox',
};

export default connect(null, mapDispathToProps)(InputTextBox);
