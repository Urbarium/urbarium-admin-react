import { primary, secondary } from '../../colors';

const InputFieldStyle = `
    box-sizing: border-box;
    width: 190px;
    height: 30px;
    border-radius: 15px;
    border: 1px ${secondary.lightgray} solid;
    padding-left: 15px;
    caret-color: ${primary.primary};

    :focus, :enabled:hover {
        outline: none;
        border: 1px ${primary.primary} solid;
    }

    ::placeholder {
        color: ${primary.passive};
    }

    :disabled {
        cursor: default;
        background-color: #eaedf2;
    }
`;
const styles = {
  InputFieldStyle,
};

export { styles as default, InputFieldStyle };
