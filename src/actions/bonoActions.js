import { accessRecursively } from '../helpers/functions';

export function actionSaveBonoComplete(payload) {
  return { type: 'ADD_BONO_COMPLETE', payload };
}

export function actionSaveBonoFail(error) {
  return { type: 'ADD_BONO_FAIL', error };
}

// TODO: Mae esto no deberia estar en el reducer de actionAddBono??
// tenia entendido que los actions se usan como funciones simples que retornan un payload
export const actionSaveBono = (firestore, history) => (dispatch, getState) => {
  const { bonos: { currentBono, currentBono: { id } } } = getState();
  let record;
  if (id == null) {
    record = firestore.collection('bonos').add(currentBono);
  } else {
    record = firestore.collection('bonos').doc(id).set(currentBono);
  }
  record.then((result) => {
    const bono = { ...currentBono, id: result.id };
    dispatch(actionSaveBonoComplete(bono));
    history.push(`/bonos/${bono.id}/beneficiarios`);
  }).catch((error) => {
    dispatch(actionSaveBonoFail(error));
  });
};

export function actionUpdateBonoField(payload) {
  return { type: 'UPDATE_BONO_FIELD', payload };
}

export function actionAddBeneficiario(payload) {
  return { type: 'ADD_BENEFICIARIO', payload };
}

export function actionRemoveBeneficiario(payload) {
  return { type: 'REMOVE_BENEFICIARIO', payload };
}

// every input uses the same map so defined here for convenience
export function mapDispatchToPropsForInputs(dispatch) {
  return { updateField: payload => dispatch(actionUpdateBonoField(payload)) };
}

export function mapStateToPropsForInputs(state, ownProps) {
  return { data: accessRecursively(state, ['bonos', 'currentBono', ...ownProps.name.split('-')]) };
}
