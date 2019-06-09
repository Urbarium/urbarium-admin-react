import React from 'react';
import Lorem from 'react-lorem-component';
import Modal from '@atlaskit/modal-dialog';

export default class CrearBonoModal extends React.PureComponent {
  render() {
    const { isOpen, onSuccess, onCancel } = this.props;
    const actions = [
      { text: 'Crear', onClick: onSuccess },
      { text: 'Cancelar', onClick: onCancel },
    ];

    return (
      <div>
        {isOpen && (
          <Modal actions={actions} heading="Nuevo Bono">
            <Lorem count={2} />
          </Modal>
        )}
      </div>
    );
  }
}
