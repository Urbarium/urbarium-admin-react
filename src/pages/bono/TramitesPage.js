import React from 'react';
import PageTitle from '../../components/PageTitle';
import Accordion from '../../components/Urbarium/AccordionItem';
import Input from '../../components/Urbarium/LabeledInput';
import Label from '../../components/Urbarium/Label';
import { Column, Row } from '../../components/Structural/index';
import fonts from '../../fonts';
import { secondary } from '../../colors';
import ButtonRound from '../../components/Urbarium/ButtonRound';
import Form, { submitForm } from '../../components/Form';
import {
  PageWrapper,
  PageHeader,
  PageContent,
  PageFooter,
} from '../../components/PageWrapper';
import {
  ConformacionExpedienteOptions,
  ConformacionAvaluoOptions,
  EnviadoEntidadOptions,
  PostuladaBanhviOptions,
  PreparacionApcOptions,
  CfiaOPtions,
  TramiteMunicipalidadRechazadoOptions,
  TramiteMunicipalidadAvaluoOptions,
} from './options';

const formID = 'tramites-page-form';

const AccordionMenu = ({ data, onSubmit }) => (
  <div style={{ height: '100%', overflowY: 'auto' }}>
    <Form onSubmit={onSubmit} id={formID}>
      <Column gap={5}>
        <Accordion index={1} data={data[0]} title="Visita preliminar solicitada" />
        <Accordion index={2} data={data[1]} title="En conformación" columns="3fr 1fr">
          <Input
            grid={150}
            type="checkbox"
            label="Expediente"
            name="conformacion_expediente"
            options={ConformacionExpedienteOptions}
          />
          <Input
            type="checkbox"
            label="Avalúo"
            name="conformacion_avaluo"
            options={ConformacionAvaluoOptions}
            checkColor="blue"
          />
        </Accordion>
        <Accordion index={3} data={data[2]} title="Enviado a entidad" columns="1fr 4fr">
          <Input
            type="checkbox"
            grid={200}
            options={EnviadoEntidadOptions}
            name="enviado_entidad"
          />
        </Accordion>
        <Accordion index={4} data={data[3]} title="Cambios tramitados y enviados" />
        <Accordion index={5} data={data[4]} title="Análisis en entidad" />
        <Accordion index={6} data={data[5]} title="FHA solicitado por entidad" />
        <Accordion index={7} data={data[6]} title="En espera de postulación" />
        <Accordion index={8} data={data[7]} title="Postulada a Bahnvi" columns="2fr 3fr 1fr">
          <Input
            type="checkbox"
            grid={200}
            options={PostuladaBanhviOptions}
            name="postulada_banhvi"
          />
          <Input
            type="textarea"
            placeholder="Notas"
            height={58}
            fill
          />
        </Accordion>
        <Accordion index={9} data={data[8]} title="Preparación de documentos para APC" columns="1fr 1fr 1fr">
          <Input
            type="checkbox"
            grid={200}
            options={PreparacionApcOptions}
            name="preparacion_apc"
          />
          <Input
            type="dropdown"
            placeholder="Adjuntar documento"
            options={['This should be a document input', 'not a dropdown', 'working on it...']}
          />
        </Accordion>
        <Accordion index={10} data={data[9]} title="Listos para APC" />
        <Accordion index={11} data={data[10]} title="Subida a APC" />
        <Accordion index={12} data={data[11]} title="CFIA" columns="1fr 3fr">
          <Input
            type="checkbox"
            grid={200}
            options={CfiaOPtions}
            name="cfia"
          />
        </Accordion>
        <Accordion index={13} data={data[12]} title="Trámite con Municipalidad" columns="1fr 1fr">
          <Input
            type="checkbox"
            label="Rechazado"
            grid={200}
            options={TramiteMunicipalidadRechazadoOptions}
            name="tramite_municipalidad_rechazado"
          />
          <Input
            type="checkbox"
            label="Avalúo"
            grid={200}
            options={TramiteMunicipalidadAvaluoOptions}
            name="tramite_municipalidad_avaluo"
          />
        </Accordion>
        <Accordion index={14} data={data[13]} title="En espera de Ins y permiso municipal" />
      </Column>
    </Form>
  </div>
);

const headerFont = ` ${fonts.subLabel} color: ${secondary.lightgray};`;

const AccordionHeader = () => (
  <Row columns="5fr 2fr 2fr 2fr 2fr 0.5fr" style={{ padding: '0 25px' }}>
    <Label font={headerFont} style={{ justifySelf: 'center' }}>TRÁMITE</Label>
    <Label font={headerFont}>FECHA INICIO</Label>
    <Label font={headerFont}>CONCLUSIÓN</Label>
    <Label font={headerFont}>ASIGNADO</Label>
    <Label font={headerFont}>STATUS</Label>
  </Row>
);

const TramitesPage = props => (
  <PageWrapper>
    <PageHeader>
      <Column>
        <PageTitle>Trámites</PageTitle>
      </Column>
    </PageHeader>

    <PageContent>
      <AccordionHeader />
      <AccordionMenu {...props} />
    </PageContent>

    <PageFooter>
      <Row justify="end">
        <ButtonRound id={formID} onClick={(submitForm(formID))}>
          GUARDAR Y CONTINUAR
        </ButtonRound>
      </Row>
    </PageFooter>
  </PageWrapper>
);

export default TramitesPage;

TramitesPage.defaultProps = {
  data: Array(14).fill({
    startDate: '-',
    endDate: '-',
    user: '-',
    state: 0,
  }),
  // eslint-disable-next-line no-console
  onSubmit(args) { console.table(args); },
};


// const data = {
//   vistaPreliminar: {
//     inicio: '-',
//     conclusion: '-',
//     asignado: '-',
//     status: 0,
//   },
//   enConformacion: {
//     inicio: '-',
//     conclusion: '-',
//     asignado: '-',
//     status: 0,
//     conformacion_expediente_bienes_inmueble: false,
//     conformacion_expediente_informe_registral: false,
//     conformacion_expediente_reporte_css: false,
//     conformacion_expediente_formulario_utilidad: false,
//     conformacion_expediente_nacimiento: false,
//     conformacion_expediente_declaraciones_jurada: false,
//     conformacion_expediente_justificacion_propiedades: false,
//     conformacion_expediente_escritura_hipoteca: false,
//     conformacion_expediente_constancia_salarial: false,
//     conformacion_expediente_impuestos_dia: false,
//     conformacion_expediente_estado_civil: false,
//   },
//   enviadoEntidad: {
//     inicio: '-',
//     conclusion: '-',
//     asignado: '-',
//     status: 0,
//   },
// };
