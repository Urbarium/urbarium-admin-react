import React from 'react';
import styled from 'styled-components';

const HiddenButton = styled.button`
  display:none;
`;

class Form extends React.Component {
  handleSubmit(event) {
    const { onSubmit, id } = this.props;
    const nameValuePairs = [...document.querySelectorAll(`#${id}-form input,select`)].map(
      element => ({ name: element.name, value: element.value }),
    );
    event.preventDefault();
    onSubmit(nameValuePairs);
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
