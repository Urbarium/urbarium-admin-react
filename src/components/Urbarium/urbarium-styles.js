import styled from 'styled-components';

export const fonts = {
  primary: `'Lato', sans-serif`,
};

export const colors = {
  primary: '#742E5D',
  secondary: '#99BF24',
  passive: '#7A869A',
  white: '#FFFFFF',
  black: '#000000',
  light: {
    primary: '#b7619b',
    secondary: '#B5DB3F',
  },
};

export const InputStyle = {
  width: '240px',
  height: '40px',
  border: `2px #F5F6F8 solid`,
  borderRadius: '20px',
  backgroundColor: '#F5F6F8',
  paddingLeft: '15px',
  fontSize: '14px',
  color: colors.black,
  caretColor: colors.black,
  placeholderColor: colors.passive,
  disabledBackgroundColor: '#EAEDF2',
  focusBorder: `2px ${colors.primary} solid`,
};

export const TextAreaStyle = {
  height: '100px',
  width: '360px',
  border: '2px solid #DFE1E5',
  borderRadius: '16px',
  backgroundColor: '#FAFBFC',
  fontSize: '14px',
  color: colors.black,

};

export const ButtonTextStyle = {
  fontSize: '12px',
  fontWeight: 'bold',
  color: colors.primary,
  focusColor: colors.light.primary,
};


export const ButtonRoundStyle = {
  height: '32px',
  width: '240px',
  fontSize: '14px',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '16px',
  color: colors.white,
  backgroundColor: colors.secondary,
  focusBackgroundColor: colors.light.secondary,
};

export const LabelStyle = {
  fontFamily: fonts.primary,
  color: '#000000',
  fontSize: '14px',
  fontWeight: 'bold',
};

export const OptionLabelStyle = {
  color: '#172B4D',
  fontSize: '14px',
  fontWeight: 'normal',
};

export const IconTitleStyle = {
  label: {
    color: '#404B5C',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  icon: {
    color: colors.secondary,
    size: 'large',
  },
};

export const PageTitleStyle = {
  title: {
    color: '#23262B',
    fontSize: '22px',
    fontWeight: 'bold',
  },
};

export const FrameStyle = {
  border: '2px solid #EBEDF8',
  borderRadius: '15px',
  maxWidth: '890px',
};

// InputField defined here because it is the base for TextArea, TextBox and DropDown
export const InputField = styled.input`
    box-sizing: border-box;
    height: ${InputStyle.height};
    width: ${InputStyle.width};
    border: ${InputStyle.border};
    border-radius: ${InputStyle.borderRadius};
    background-color: ${props => props.theme.input_backgroundColor || InputStyle.backgroundColor};
    padding-left: ${InputStyle.paddingLeft};
    caret-color: ${InputStyle.caretColor};
    font-size: ${InputStyle.fontSize};
    color: ${props => props.theme.input_color || InputStyle.color};

    :focus, :enabled:hover {
      outline: none;
      border: ${InputStyle.focusBorder};
    }

    ::placeholder {
      color: ${InputStyle.placeholderColor};
    }

    :disabled {
      cursor: default;
      background-color: ${InputStyle.disabledBackgroundColor};
    }
`;
