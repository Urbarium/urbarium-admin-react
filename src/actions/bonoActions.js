export function actionBonoStart() {
  return { type: 'BONO_START' };
}

export function actionBonoCanceled() {
  return { type: 'BONO_CANCELED' };
}

export function actionAddBonoBuild(payload) {
  return { type: 'ADD_BONO_UPDATE_PAYLOAD', payload };
}

export function actionAddBonoStart(payload) {
  return { type: 'ADD_BONO_START', payload };
}

export function actionAddBonoComplete(payload) {
  return { type: 'ADD_BONO_COMPLETE', payload };
}

export function actionAddBonoFail(error) {
  return { type: 'ADD_BONO_FAIL', error };
}

export const actionAddBono = (payload, firestore, history) => (dispatch) => {
  dispatch(actionAddBonoStart(payload, firestore));
  firestore.add({ collection: 'bonos' }, payload)
    .then((result) => {
      dispatch(actionAddBonoComplete(result));
      history.push(`/bonos/${result.id}/beneficiarios`);
    }).catch((error) => {
      dispatch(actionAddBonoFail(error));
    });
};
