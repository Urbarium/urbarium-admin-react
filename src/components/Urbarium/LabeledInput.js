import React from 'react';
import Label from './Label';
import InputTextBox from './InputTextBox';
import InputDropdown from './InputDropdown';
import InputTextArea from './InputTextArea';
import InputCheckbox from './InputCheckbox';
import InputRadio from './InputRadio';
import { Column } from '../Structural/index';

const getInput = (type, props) => {
  switch (type) {
  case 'textarea': return <InputTextArea {...props} />;
  case 'dropdown': return <InputDropdown {...props} />;
  case 'checkbox': return <InputCheckbox {...props} />;
  case 'radio': return <InputRadio {...props} />;
  case 'tel':
  case 'number':
  case 'text': return <InputTextBox {...props} />;
  default: return null;
  }
};

const LabeledInput = (props) => {
  const {
    label, labelFont, type, inputFont,
  } = props;
  const inputProps = Object.assign({}, props, { font: inputFont });
  // there's probably a better pattern for this
  delete inputProps.inputFont;
  delete inputProps.labelFont;
  delete inputProps.label;
  delete inputProps.type;
  return (
    <Column>
      {label ? <Label font={labelFont}>{label}</Label> : null}
      {getInput(type, inputProps)}
    </Column>
  );
};

export default LabeledInput;
