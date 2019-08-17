import React from 'react';
import Accordion from 'components/Urbarium/AccordionItem';
import { ConnectedLabeledInput as Input } from 'components/Urbarium/LabeledInput';
import { Column, Row } from 'components/Structural';
import Form from 'components/Form';
import { SolicitudPlanoPresupuestoOptions } from './options';
import {
  PageWrapper,
  BonoHeader,
  PageContent,
  BonoFooter,
} from 'components/PageWrapper';


const formID = 'contruccion-tramites-page-form';

const AccordionMenu = ({ data }) => (
  <div style={{ height: '100%', overflowY: 'auto' }}>
    <Column gap={5}>
      <Accordion index={1} data={data[0]} title="Visita preliminar realizada" />
      <Accordion index={2} data={data[1]} title="Informe de visita preliminar" />
      <Accordion index={3} data={data[2]} title="Solicitud de Plano y Presupuesto" columns="1fr 4fr">
        <Input
          type="radio"
          options={SolicitudPlanoPresupuestoOptions}
          name="solicitud_plano_presupuesto"
          grid={200}
        />
      </Accordion>
      <Accordion index={4} data={data[3]} title="Análisis y etapa de Diseño" />
      <Accordion index={5} data={data[4]} title="Conformación de Plano y Presupuesto" />
      <Accordion index={6} data={data[5]} title="Plano y presupuesto en revisión" />
    </Column>
  </div>
);

const TramitesPage = ({
  bono,
  data,
  onSubmit,
  personaResponsable = '',
  fechaInicio = '',
  porcentajeAvance = '',
}) => (
  <PageWrapper>
    <BonoHeader bono={bono} />

    <PageContent>
      <Form onSubmit={onSubmit} id={formID}>
        <Column gap={60}>
          <Row justify="start" gap={50}>
            <Input
              type="text"
              label="Persona responsable"
              placeholder="Persona encargada"
              name="persona_responsable"
              data={personaResponsable}
            />
            <Input
              type="text"
              label="Fecha proyectada de inicio de construcción"
              placeholder="12/10/1991"
              name="fecha_inicio"
              data={fechaInicio}
            />
            <Input
              type="text"
              label="Porcentaje de avance del proyecto"
              placeholder="90%"
              name="porcentaje_avance"
              data={porcentajeAvance}
            />
          </Row>
          <AccordionMenu data={data} />
        </Column>
      </Form>
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
  data: Array(5).fill({
    startDate: '-',
    endDate: '-',
    user: '-',
    state: 0,
  }),
  // eslint-disable-next-line no-console
  onSubmit(args) { console.table(args); },
};
