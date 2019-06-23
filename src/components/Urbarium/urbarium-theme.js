import styled from 'styled-components';

const colors = {
  primary: '#742E5D',
  secondary: '#99BF24',
  white: '#FFFFFF',
  black: '#000000',
  light: {
    primary: '#A04E85',
    secondary: '#B5DB3F',
  },
};

const UrbariumTheme = {
  input: {
    width: '240px',
    height: '40px',
    border: 'none',
    borderRadius: '20px',
    backColor: '#F5F6F8',
    paddLeft: '15px',
    caretColor: '#000000',
    placeholderColor: '#7A869A',
    disabledBackColor: '#EAEDF2',
    focusBorder: `1px ${colors.primary} solid`,
    fontSize: '14px',
    color: colors.black,

  },
  textArea: {
    border: '2px solid #DFE1E5',
    borderRadius: '16px',
    backColor: '#FAFBFC',
  },
  buttonText: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: colors.primary,
  },
  buttonRound: {
    height: '32px',
    width: '240px',
    fontSize: '14px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '16px',
    backColor: colors.secondary,
    hoverBackColor: colors.light.secondary,
    color: colors.white,
  },
  option: {
    label: {
      color: '#172B4D',
      fontSize: '14px',
      fontWeight: 'normal',
    },
    check: {
      backColor: colors.primary,
      checkColor: colors.white,
      border: 'none',
      size: '14',
    },
  },
  label: {
    color: '#000000',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  sectionLabel: {
    color: '#404B5C',
    fontSize: '22px',
    logoColor: colors.secondary,
    logoHeight: '22px',
  },
  title: {
    color: '#23262B',
    fontSize: '22px',
    fontWeight: 'bold',
  },
};

const InputField = styled.input`
    box-sizing: border-box;
    height: ${props => props.theme.height};
    width: ${props => props.theme.width};
    border: ${props => props.theme.border};
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.backColor};
    padding-left: ${props => props.theme.paddLeft};
    caret-color: ${props => props.theme.caretColor};
    font-size: ${props => props.theme.fontSize};
    color: ${props => props.theme.color};
    :focus, :enabled:hover {
        outline: none;
        border: ${props => props.theme.focusBorder};
    }

    ::placeholder {
        color: ${props => props.theme.placeholderColor};
    }

    :disabled {
        cursor: default;
        background-color: ${props => props.theme.disabledBackColor};
    }
`;

InputField.defaultProps = {
  theme: UrbariumTheme.input,
};

export { UrbariumTheme as default, InputField, colors };
