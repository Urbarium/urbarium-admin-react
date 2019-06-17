export const REQUEST_ADD_BONO = "REQUEST_ADD_BONO";
export function requestAddBono(payload) {
  return { type: REQUEST_ADD_BONO, payload };
}

export const RESPONSE_BONO_SUCCESS = "RESPONSE_BONO_SUCCESS";
export function responseAddBonoSuccess(payload) {
  return { type: RESPONSE_BONO_SUCCESS, payload };
}

export const RESPONSE_BONO_FAILED = "RESPONSE_BONO_FAILED";
export function responseAddBonoFailure(error) {
  return { type: RESPONSE_BONO_FAILED, error };
}

export const CHANGE_CREATING_BONO = "CHANGE_CREATING_BONO";
export function changeCreatingBono(payload) {
  return { type: CHANGE_CREATING_BONO, payload };
}

export function addBono(payload) {
  return (dispatch, getState) => {
    dispatch(requestAddBono(payload));
    return getState().firestore.add({ collection: 'bonos' }, payload)
      .then((result) => {
        dispatch(responseAddBonoSuccess(result));
      }).catch((error) => {
        dispatch(responseAddBonoFailure(error));
      });
  };
}
