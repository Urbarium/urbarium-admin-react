const initialState = {
  newBono: {
    jefeDeFamilia: {
      nombre: null,
      apellido1: null,
      apellido2: null,
      cedula: null,
    },
  },
  isCreating: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'BONO_START':
    return Object.assign({}, initialState, { isCreating: true });
  case 'BONO_CANCELED':
    return Object.assign({}, state, { isCreating: false });
  case 'ADD_BONO':
    return Object.assign({}, state, { isFetching: true });
  case 'ADD_BONO_START':
    return Object.assign({}, state, { isFetching: true });
  case 'ADD_BONO_COMPLETE':
    return Object.assign(
      {},
      state,
      {
        isFetching: false, isCompleted: true, isCreating: false, newBono: action.payload,
      },
    );
  case 'ADD_BONO_FAIL':
    return Object.assign(
      {},
      state,
      { isFetching: false, isFailure: true, log: { severity: 'error', msg: action.error } },
    );
  case 'ADD_BONO_UPDATE_PAYLOAD':
    return Object.assign({}, state, { newBono: action.payload });
  default:
    return { ...state };
  }
};
