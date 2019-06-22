import React from 'react';
import styled from 'styled-components';

const HiddenButton = styled.button`
  display:none;
`;

class Form extends React.Component {
  handleSubmit(event) {
    const { onSubmit, id } = this.props;
    // eslint-disable-next-line no-undef
    const inputs = [...document.querySelectorAll(
      // inside the form -> all radio inputs checked & all non radio iputs & all selects
      `#${id}-form input[type=radio]:checked, input:not([type=radio]), select`,
    )];

    const nameValuePairs = inputs.map(element => ({ name: element.name, value: element.value }));

    onSubmit(nameValuePairs);
    event.preventDefault();
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
export const submitForm = id => (
  // eslint-disable-next-line no-undef
  () => document.querySelector(`#${id}`).click()
);
