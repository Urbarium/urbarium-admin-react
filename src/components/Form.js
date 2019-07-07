import React from 'react';
import styled from 'styled-components';

const HiddenButton = styled.button`
  display:none;
`;

class Form extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit();
    return false;
  }

  render() {
    const { children, id } = this.props;
    return (
      <form id={`${id}-form`} onSubmit={event => this.handleSubmit(event)}>
        {children}
        <HiddenButton type="submit" id={id} />
      </form>
    );
  }
}

Form.defaultProps = {
  onSubmit() {},
  id: "submit-form",
};

export default Form;
// eslint-disable-next-line no-undef
export const submitForm = id => () => (id ? document.querySelector(`#${id}`).click() : null);
