import {
  REQUEST_ADD_BONO,
  RESPONSE_BONO_SUCCESS,
  RESPONSE_BONO_FAILED,
  CHANGE_CREATING_BONO,
} from '../actions/bonoActions';

const initialState = {
  newBono: {
    jefeDeFamilia: {
      nombre: null,
      apellido1: null,
      apellido2: null,
      cedula: null,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_ADD_BONO:
    return Object.assign({}, state, { isFetching: true });
  case RESPONSE_BONO_SUCCESS:
    return Object.assign({}, state, { isFetching: false, isCompleted: true, newBono: action.payload });
  case RESPONSE_BONO_FAILED:
    return Object.assign({}, state, { isFetching: false, isFailure: true, log: { severity: 'error', msg: action.error } });
  case CHANGE_CREATING_BONO:
    return Object.assign({}, state, { newBono: action.payload });
  default:
    return { ...state };
  }
};
