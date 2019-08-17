import React from 'react';
import Label from './Label';
import IconTitle from './IconTitle';
import InputTextBox, { ConnectedInputTextBox } from './InputTextBox';
import InputDropdown, { ConnectedInputDropdown } from './InputDropdown';
import InputTextArea, { ConnectedInputTextArea } from './InputTextArea';
import InputCheckbox, { ConnectedInputCheckbox } from './InputCheckbox';
import InputRadio, { ConnectedInputRadio } from './InputRadio';
import { Column } from 'components/Structural/index';

const getInput = (connected, type, props) => {
  if (connected) {
    switch (type) {
    case 'textarea': return <ConnectedInputTextArea {...props} />;
    case 'dropdown': return <ConnectedInputDropdown {...props} />;
    case 'checkbox': return <ConnectedInputCheckbox {...props} />;
    case 'radio': return <ConnectedInputRadio {...props} />;
    case 'tel':
    case 'number':
    case 'text': return <ConnectedInputTextBox {...props} />;
    default: return null;
    }
  }
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

const LabeledInput = ({
  connected = false, type, label, icon, ...inputProps
}) => (
  <Column gap={7}>
    {getLabel(label, icon)}
    {getInput(connected, type, inputProps)}
  </Column>
);

const ConnectedLabeledInput = props => <LabeledInput {...props} connected />;

export { LabeledInput as default, ConnectedLabeledInput };
