import React from 'react';
import Label from './Label';
import IconTitle from './IconTitle';
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

const getLabel = (label, icon) => {
  let result;
  if (label) {
    result = icon ? <IconTitle icon={icon}>{label}</IconTitle> : <Label>{label}</Label>;
  } else { result = null; }
  return result;
};

const LabeledInput = (props) => {
  const {
    label, type, icon,
  } = props;
  const inputProps = Object.assign({}, props);
  // there's probably a better pattern for this
  delete inputProps.label;
  delete inputProps.icon;
  delete inputProps.type;
  return (
    <Column gap={7}>
      {getLabel(label, icon)}
      {getInput(type, inputProps)}
    </Column>
  );
};

export default LabeledInput;
