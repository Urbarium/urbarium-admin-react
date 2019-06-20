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

export const actionAddBono = (payload, firestore) => (dispatch) => {
  dispatch(actionAddBonoStart(payload, firestore));
  firestore.add({ collection: 'bonos' }, payload)
    .then((result) => {
      dispatch(actionAddBonoComplete(result));
    }).catch((error) => {
      dispatch(actionAddBonoFail(error));
    });
};
