export const EntidadesBancarias = [
  { name: 'Grupo Mutual', value: 'grupo_mutual' },
  { name: 'Mutual Cartago', value: 'mutual_cartago' },
  { name: 'Fundación Costa Rica – Canadá', value: 'fundacion_cr-canada' },
  { name: 'Banco Nacional (Oficinas Centrales)', value: 'bn' },
  { name: 'Banco de Costa Rica (Centrales)', value: 'bcr' },
  { name: 'Banco Popular', value: 'banco_popular' },
  { name: 'BAC SanJosé', value: 'bac' },
  { name: 'Instituto Nacional de Vivienda y Urbanismo (Invu)', value: 'invu' },
  { name: 'COOCIQUE R.L', value: 'coocique' },
  { name: 'COOPENAE R.L', value: 'coopenae' },
  { name: 'COOPESERVIDORES R.L', value: 'coopeservidores' },
  { name: 'COOPEUNA R.L', value: 'coopeuna' },
  { name: 'COOPESANMARCOS R.L', value: 'coopesanmarcos' },
  { name: 'COOPEANDE #1', value: 'coopeande' },
  { name: 'COOPESANRAMÓN R.L', value: 'coopesanramon' },
  { name: 'CREDECOOP R.L', value: 'credecoop' },
  { name: 'COOPESPARTA R.L', value: 'coopesparta' },
  { name: 'Asociación Solidarista de Empleados de Demasa (ASEDEMASA)', value: 'asedemasa' },
  { name: 'Asociación Solidarista de Empleados de INA (ASEMINA)', value: 'asemina' },
];

export const Modalidad = [
  { name: 'CLP', value: 'clp' },
  { name: 'Bono Crédito', value: 'bono_credito' },
  { name: 'Bono RAMT', value: 'bono_ramt' },
  { name: 'Vivienda Nueva', value: 'vivienda_nueva' },
];
export const Caracteristica = [
  { name: 'Ninguna', value: 'ninguna' },
  { name: 'Adulto Mayor', value: 'mayor' },
  { name: 'Persona con Discapacidad', value: 'discapacidad' },
];

// TODO: Change this to an year range from the current year
export const Anos = [
  { name: '2018', value: 2018 },
  { name: '2019', value: 2019 },
  { name: '2020', value: 2010 },
  { name: '2021', value: 2021 },
];


// Checkbox options, values have to be very specific

export const ConformacionExpedienteOptions = [
  { name: 'Bienes inmuebles', value: 'conformacion_expediente_bienes_inmuebles' },
  { name: 'Informe registral', value: 'conformacion_expediente_informe_registral' },
  { name: 'Reporte CSS', value: 'conformacion_expediente_reporte_css' },
  { name: 'Formulario de utilidad', value: 'conformacion_expediente_formulario_utilidad' },
  { name: 'Nacimientos', value: 'conformacion_expediente_nacimientos' },
  { name: 'Declaraciones Juradas', value: 'conformacion_expediente_declaraciones_juradas' },
  { name: 'Justificación de propiedades', value: 'conformacion_expediente_justificacion_propiedades' },
  { name: 'Escritura de hipoteca', value: 'conformacion_expediente_escritura_hipoteca' },
  { name: 'Constancia Salarial', value: 'conformacion_expediente_constancia_salarial' },
  { name: 'Impuestos al día', value: 'conformacion_expediente_impuestos_dia' },
  { name: 'Estado Civil', value: 'conformacion_expediente_estado_civil' },
];

export const ConformacionAvaluoOptions = [
  { name: 'Recibo de Pago', value: 'conformacion_avaluo_recibo_pago' },
];

export const EnviadoEntidadOptions = [
  { name: 'Solicitud de cambio por avalúo', value: 'enviado_entidad_cambio_avaluo' },
  { name: 'Solicitud de cambios en trámites', value: 'enviado_entidad_cambio_tramites' },
];

export const PostuladaBanhviOptions = [
  { name: 'Inconscistencias', value: 'postulada_banhvi_incoscistencias' },
  { name: 'Declaratoria emitida', value: 'postulada_banhvi_declaratoria_emitida' },
];

export const PreparacionApcOptions = [
  { name: 'Planos en Sharepoint', value: 'preparacion_apc_planos_sharepoint' },
  { name: 'Documentos en Sharepoint', value: 'preparacion_apc_documentos_sharepoint' },
];

export const CfiaOPtions = [
  { name: 'Condicionado', value: 'cfia_condicionado' },
  { name: 'Aprobado', value: 'cfia_aprobado' },
];

export const TramiteMunicipalidadRechazadoOptions = [
  { name: 'En solicitud de requisito', value: 'tramite_municipalidad_rechazado_requisito' },
  { name: 'En solicitud de cambios de diseño', value: 'tramite_municipalidad_rechazado_cambios_diseno' },
];

export const TramiteMunicipalidadAvaluoOptions = [
  { name: 'Aprobado', value: 'tramite_municipalidad_avaluo_aprobado' },
];

// Radio options, values can be simple because only one is ever present

export const SolicitudPlanoPresupuestoOptions = [
  { name: 'Aprobado', value: 'aprobado' },
  { name: 'Solicitud de cambios', value: 'solicitud_cambios' },
];
