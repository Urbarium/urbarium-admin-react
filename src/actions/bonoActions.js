import { navs, actionProductNavSet } from './navigationActions';
import { accessRecursively } from 'helpers/functions';

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
  dispatch(actionAddBonoBuild(payload, firestore));
  dispatch(actionAddBonoStart(payload, firestore));
  firestore.add({ collection: 'bonos' }, payload)
    .then((result) => {
      const bono = { ...payload, id: result.id };
      dispatch(actionAddBonoComplete(bono));
      history.push(`/bonos/${bono.id}/beneficiarios`);
      dispatch(actionProductNavSet(navs.BONOS, bono.id));
    }).catch((error) => {
      dispatch(actionAddBonoFail(error));
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
