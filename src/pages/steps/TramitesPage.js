import React from 'react';
import { ThemeProvider } from 'styled-components';
import Accordion from 'components/Urbarium/AccordionItem';
import { ConnectedLabeledInput as Input } from 'components/Urbarium/LabeledInput';
import Label from 'components/Urbarium/Label';
import { FrameStyle } from 'components/Urbarium/urbarium-styles';
import { Column, Row } from 'components/Structural/index';
import Form from 'components/Form';

import {
  PageWrapper,
  BonoHeader,
  PageContent,
  BonoFooter,
} from 'components/PageWrapper';
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

const AccordionMenu = () => (
  <div style={{ height: '100%', overflowY: 'auto' }}>
    <Form id={formID}>
      <Column gap={5}>
        <Accordion index={1} title="Visita preliminar solicitada" name="tramites-1" />
        <Accordion index={2} title="En conformación" name="tramites-2" columns="3fr 1fr">
          <Input
            grid={170}
            type="checkbox"
            label="Expediente"
            options={ConformacionExpedienteOptions}
            name="tramites-2"
          />
          <Input
            type="checkbox"
            label="Avalúo"
            checkColor="blue"
            options={ConformacionAvaluoOptions}
            name="tramites-2"
          />
        </Accordion>
        <Accordion index={3} title="Enviado a entidad" name="tramites-3" columns="1fr 4fr">
          <Input
            type="checkbox"
            grid={200}
            options={EnviadoEntidadOptions}
            name="tramites-3"
          />
        </Accordion>
        <Accordion index={4} title="Cambios tramitados y enviados" name="tramites-4" />
        <Accordion index={5} title="Análisis en entidad" name="tramites-5" />
        <Accordion index={6} title="FHA solicitado por entidad" name="tramites-6" />
        <Accordion index={7} title="En espera de postulación" name="tramites-7" />
        <Accordion index={8} title="Postulada a Bahnvi" name="tramites-8" columns="2fr 3fr 1fr">
          <Input
            type="checkbox"
            grid={200}
            name="tramites-8"
            options={PostuladaBanhviOptions}
          />
          <Input
            type="textarea"
            name="tramites-8-notas"
            placeholder="Notas"
            height={58}
            fill
          />
        </Accordion>
        <Accordion index={9} title="Preparación de documentos para APC" name="tramites-9" columns="1fr 1fr 1fr">
          <Input
            type="checkbox"
            grid={200}
            options={PreparacionApcOptions}
            name="tramites-9"
          />
          <Input
            type="dropdown"
            placeholder="Adjuntar documento"
            options={['This should be a document input', 'not a dropdown', 'working on it...']}
            name="tramites-9-documento"
          />
        </Accordion>
        <Accordion index={10} title="Listos para APC" name="tramites-10" />
        <Accordion index={11} title="Subida a APC" name="tramites-11" />
        <Accordion index={12} title="CFIA" name="tramites-12" columns="1fr 3fr">
          <Input
            type="checkbox"
            grid={200}
            options={CfiaOPtions}
            name="tramites-12"
          />
        </Accordion>
        <Accordion index={13} title="Trámite con Municipalidad" name="tramites-13" columns="1fr 1fr">
          <Input
            type="checkbox"
            label="Rechazado"
            grid={200}
            options={TramiteMunicipalidadRechazadoOptions}
            name="tramites-13"
          />
          <Input
            type="checkbox"
            label="Avalúo"
            grid={200}
            options={TramiteMunicipalidadAvaluoOptions}
            name="tramites-13"
          />
        </Accordion>
        <Accordion index={14} title="En espera de Ins y permiso municipal" name="tramites-14" />
      </Column>
    </Form>
  </div>
);
const headerTheme = {
  label_color: '#B4BAC6',
  label_fontSize: '10.45px',
  label_fontWeight: 'normal',
};

const AccordionHeader = () => (
  <ThemeProvider theme={headerTheme}>
    <div style={{ maxWidth: FrameStyle.maxWidth }}>
      <Row columns="5fr 2fr 2fr 2fr 2fr 0.5fr" style={{ padding: '0 25px' }}>
        <div />
        <Label>FECHA INICIO</Label>
        <Label>CONCLUSIÓN</Label>
        <Label>ASIGNADO</Label>
        <Label>STATUS</Label>
      </Row>
    </div>
  </ThemeProvider>
);

const TramitesPage = ({ bono, ...props }) => (
  <PageWrapper>
    <BonoHeader bono={bono} />

    <PageContent style={{ overflowY: 'hidden' }}>
      <AccordionHeader />
      <AccordionMenu {...props} />
    </PageContent>

    <BonoFooter id={formID} />
  </PageWrapper>
);

export default TramitesPage;

TramitesPage.defaultProps = {
  bono: {
    nombre: 'Default',
    cedula: '12345678',
    numero: '12345',
    monto: '',
    modificacion: '',
    creacion: '6/24/2019',
  },
};
