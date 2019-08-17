/* eslint-disable object-curly-newline */
import { copyReplaceObject as copy } from 'helpers/functions';

const initialState = {
  currentBono: {
    jefeDeFamilia: {
      nombre: null,
      primer_apellido: null,
      segundo_apellido: null,
      cedula: null,
    },
    beneficiarios: {
      1: {
        cedula: null,
        nombre: null,
        primer_apellido: null,
        segundo_apellido: null,
      },
    },
    provincia: null,
    canton: null,
    distrito: null,
    direccion: null,
    telefono: null,
    celular: null,
    ano: null,
    modalidad: {
      clp: null,
      bono_credito: null,
      bono_ramt: null,
      vivienda_nueva: null,
    },
    caracteristica_especial: null,
    entidad_bancaria: null,
    tramites: {
      1: { inicio: null, conclusion: null, asignado: null, status: null },
      2: {
        inicio: null,
        conclusion: null,
        asignado: null,
        status: null,
        bienes_inmuebles: null,
        formulario_utilidad: null,
        justificacion_propiedades: null,
        impuestos_dia: null,
        informe_registral: null,
        nacimientos: null,
        escritura_hipoteca: null,
        estado_civil: null,
        reporte_css: null,
        declaraciones_juradas: null,
        constancia_salarial: null,
        recibo_pago: null,
      },
      3: {
        inicio: null,
        conclusion: null,
        asignado: null,
        status: null,
        solicitud_cambio_avaluo: null,
        solicitud_cambios_tramites: null,
      },
      4: { inicio: null, conclusion: null, asignado: null, status: null },
      5: { inicio: null, conclusion: null, asignado: null, status: null },
      6: { inicio: null, conclusion: null, asignado: null, status: null },
      7: { inicio: null, conclusion: null, asignado: null, status: null },
      8: {
        inicio: null,
        conclusion: null,
        asignado: null,
        status: null,
        inconsistencias: null,
        declaratoria_emitida: null,
        notas: null,
      },
      9: {
        inicio: null,
        conclusion: null,
        asignado: null,
        status: null,
        planos_sharepoint: null,
        documentos_sharepoint: null,
      },
      10: { inicio: null, conclusion: null, asignado: null, status: null },
      11: { inicio: null, conclusion: null, asignado: null, status: null },
      12: {
        inicio: null,
        conclusion: null,
        asignado: null,
        status: null,
        condicionado: null,
        aprobado: null,
      },
      13: {
        inicio: null,
        conclusion: null,
        asignado: null,
        status: null,
        solicitd_requisito: null,
        solicitud_cambios_diseno: null,
        aprobado: null,
      },
      14: { inicio: null, conclusion: null, asignado: null, status: null },
      15: { inicio: null, conclusion: null, asignado: null, status: null },
      16: { inicio: null, conclusion: null, asignado: null, status: null },
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
    return Object.assign({}, state, {
      isFetching: false, isCompleted: true, isCreating: false, currentBono: action.payload, newBono: null,
    });
  case 'ADD_BONO_FAIL':
    return Object.assign({}, state, {
      isFetching: false, isFailure: true, log: { severity: 'error', msg: action.error },
    });
  case 'ADD_BONO_UPDATE_PAYLOAD':
    return Object.assign({}, state, { newBono: action.payload });

  case 'UPDATE_BONO_FIELD': {
    const namesArray = ['currentBono', ...action.payload.field.split('-')];
    const newValue = action.payload.value || null;
    return copy(state, namesArray, newValue);
  }

  case 'ADD_BENEFICIARIO': {
    const newBeneficiarios = copy(
      state.currentBono.beneficiarios,
      action.payload.index,
      Object.assign({}, initialState.currentBono.beneficiarios['1']),
    );
    return copy(state, ['currentBono', 'beneficiarios'], newBeneficiarios);
  }

  case 'REMOVE_BENEFICIARIO': {
    const newBeneficiarios = Object.assign({}, state.currentBono.beneficiarios);
    delete newBeneficiarios[action.payload.index];
    return copy(state, ['currentBono', 'beneficiarios'], newBeneficiarios);
  }

  default:
    return state;
  }
};
